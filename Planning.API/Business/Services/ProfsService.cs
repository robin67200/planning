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

        public ProfsService(IProfsRepository repo, IUnitOfWork unitOfWork, IMapper mapper) : base(repo, unitOfWork, mapper)
        {
            _repo = repo;
        }

        public async override Task<ProfViewModel> GetByIdAsync(object id)
        {
            var prof = await _repo.GetByIdAsync(id);
            var mapped = this._mapper.Map<ProfViewModel>(prof);
            mapped.Matieres = _mapper.Map<ICollection<MatiereViewModel>>(prof.ProfMatieres.Select(e => e.Matiere));
            mapped.Classes = _mapper.Map<ICollection<ClasseViewModel>>(prof.ProfClasses.Select(e => e.Classe));

            return mapped;
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

    }
}