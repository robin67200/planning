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

        

        public async Task<ClasseViewModel> GetByIdFullAsync(int id)
        {
            var classe = await ((IClassesRepository)_repository).GetByIdFullAsync(id);
            var mapped = _mapper.Map<ClasseViewModel>(classe);
            
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

    }
}