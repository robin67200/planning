using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Planning.API.Business.Services.Interface;
using Planning.API.Business.ViewModels;
using Planning.API.DataAccess.Repositories.Interface;
using Planning.API.Models;
using TechCloud.Tools.Business.Services;
using TechCloud.Tools.DataAccess.Infrastructure;
using Planning.API.DataAccess.Repositories;

namespace Planning.API.Business.Services 
{
    public class ClassesService : BaseService<Classe, ClasseViewModel>, IClassesService
    {
        private readonly IClassesRepository _repo;

        public ClassesService(IClassesRepository repo, IUnitOfWork unitOfWork, IMapper mapper) : base(repo, unitOfWork, mapper)
        {
            _repo = repo;
        }

        public async override Task<ClasseViewModel> GetByIdAsync(object id)
        {
            var classe = await _repo.GetByIdAsync(id);
            var mapped = this._mapper.Map<ClasseViewModel>(classe);
            mapped.Professeurs = _mapper.Map<ICollection<ProfViewModel>>(classe.ClasseProfs.Select(e => e.Prof));
            mapped.Cours = _mapper.Map<ICollection<CoursViewModel>>(classe.ClasseCours.Select(e => e.Classe));
            mapped.Eleves = _mapper.Map<ICollection<EleveViewModel>>(classe.Eleves.ToList());

            return mapped;
        }

        

        public async Task<ClasseViewModel> GetByIdFullAsync(int id)
        {
            var classe = await _repo.GetByIdFullAsync(id);
            var mapped = this._mapper.Map<ClasseViewModel>(classe);
            
            mapped.Professeurs = _mapper.Map<ICollection<ProfViewModel>>(classe.ClasseProfs.Select(e => e.Prof));
            return mapped;
        }



        public void AddProf(ProfClasseViewModel model)
        {
            var obj = this._mapper.Map<ProfClasse>(model);
            this._repo.AddProf(obj);
            this._unitOfWork.Commit();
        }

        public void RemoveProf(ProfClasseViewModel model)
        {
            var obj = this._mapper.Map<ProfClasse>(model);
            this._repo.RemoveProf(obj);
            this._unitOfWork.Commit();
        }

        public IEnumerable<ClasseViewModel> GetProfClasse(int profId)
        {
            var list = _repo.GetProfClasses(profId);
            var map = _mapper.Map<IEnumerable<ClasseViewModel>>(list);
            return map;
        }

        public IEnumerable<ClasseViewModel> GetClassesAvailables(int profId)
        {
            var list = _repo.GetClassesAvailables(profId);
            var map = _mapper.Map<IEnumerable<ClasseViewModel>>(list);
            return map;
        }

    }
}