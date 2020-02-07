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

namespace Planning.API.Business.Services 
{
    public class ProfsService : BaseService<Prof, ProfViewModel>, IProfsService
    {
        private readonly IProfsRepository _repo;
        private readonly IUnitOfWork _uof;

        public ProfsService(IProfsRepository repo, IUnitOfWork unitOfWork, IMapper mapper) : base(repo, unitOfWork, mapper)
        {
            _repo = repo;
            _uof = unitOfWork;

        }

        public async override Task<ProfViewModel> GetByIdAsync(object id)
        {
            var prof = await _repo.GetByIdAsync(id);
            var mapped = this._mapper.Map<ProfViewModel>(prof);
            mapped.Matieres = _mapper.Map<ICollection<MatiereViewModel>>(prof.ProfMatieres.Select(e => e.Matiere));
            mapped.Classes = _mapper.Map<ICollection<ClasseViewModel>>(prof.ProfClasses.Select(e => e.Classe));
            mapped.Cours = _mapper.Map<ICollection<CoursViewModel>>(prof.Cours.ToList());
            mapped.Indisponibilites = _mapper.Map<ICollection<IndisponibiliteViewModel>>(prof.Indisponibiltes.ToList());

            return mapped;
        }
        public async Task<Prof> CreateProf(ProfViewModel prof)
        {
            var obj = this._mapper.Map<Prof>(prof);
            await this._repo.CreateProf(obj);
            await this._unitOfWork.CommitAsync();

            return obj;
        }

        public void AddMatiere(ProfMatiereViewModel model)
        {
            var obj = this._mapper.Map<ProfMatiere>(model);
            this._repo.AddMatiere(obj);
            this._unitOfWork.Commit();
        }

        public void RemoveMatiere(ProfMatiereViewModel model)
        {
            var obj = this._mapper.Map<ProfMatiere>(model);
            this._repo.RemoveMatiere(obj);
            this._unitOfWork.Commit();
        }

        public void AddClasse(ProfClasseViewModel model)
        {
            var obj = this._mapper.Map<ProfClasse>(model);
            this._repo.AddClasse(obj);
            this._unitOfWork.Commit();
        }

        public void RemoveClasse(ProfClasseViewModel model)
        {
            var obj = this._mapper.Map<ProfClasse>(model);
            this._repo.RemoveClasse(obj);
            this._unitOfWork.Commit();
        }

        public IEnumerable<ProfViewModel> GetAvailables(int classeId)
        {
            var list = _repo.GetAvalaibles(classeId);
            var map = _mapper.Map<IEnumerable<ProfViewModel>>(list);
            return map;
        }

        public IEnumerable<ProfViewModel> GetProfsClasse(int classeId)
        {
            var list = _repo.GetProfsClasse(classeId);
            var map = _mapper.Map<IEnumerable<ProfViewModel>>(list);
            return map;
        }

        

    }
}