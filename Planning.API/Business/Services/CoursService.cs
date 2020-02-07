using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Planning.API.Business.Services.Interface;
using Planning.API.Business.ViewModels;
using Planning.API.DataAccess.Repositories.Interface;
using Planning.API.Models;
using TechCloud.Tools.Business.Services;
using TechCloud.Tools.Core.Validation;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.Business.Services 
{
    public class CoursService : BaseService<Cours, CoursViewModel>, ICoursService
    {
        private readonly ICoursRepository _repo;
        private readonly IUnitOfWork _uof;


        public CoursService(ICoursRepository repo, IUnitOfWork unitOfWork, IMapper mapper) : base(repo, unitOfWork, mapper)
        {
            _uof = unitOfWork;
            _repo = repo;
        }
        public async Task<Cours> CreateCours(CoursViewModel annee)
        {
            var obj = this._mapper.Map<Cours>(annee);
            await this._repo.CreateCours(obj);
            await this._unitOfWork.CommitAsync();

            return obj;
        }

        public IEnumerable<CoursViewModel> GetCoursAvailables(int classeId)
        {
            var list = _repo.GetCoursAvailables(classeId);
            var map = _mapper.Map<IEnumerable<CoursViewModel>>(list);
            return map;
        }

        public async override Task<CoursViewModel> GetByIdAsync(object id)
        {
            var cours = await _repo.GetByIdAsync(id);
            var mapped = _mapper.Map<CoursViewModel>(cours);
            mapped.Classes = _mapper.Map<ICollection<ClasseViewModel>>(cours.CoursClasses.Select(e => e.Classe));

            return mapped;
        }

        public void AddCours(CoursViewModel cours)
        {
            var obj = this._mapper.Map<Cours>(cours);
            this._repo.AddCours(obj);
            this._unitOfWork.Commit();
        }
        
        /*public async override Task<IResult<CoursViewModel>> CreateAsync(CoursViewModel entity)
        {
            IResult<CoursViewModel> result = new Result<CoursViewModel>();
            var domain = _mapper.Map<Cours>(entity);

            _repository.Insert(domain);

            var temp = await _unitOfWork.CommitAsync<Cours>().ConfigureAwait(false);


            domain = _repo.GetById(domain.Id);
            var coursClasses = entity.Classes.Select(c => new Planning.API.Models.CoursClasse() { ClasseId = c.Id, CoursId = domain.Id }).ToList();

            _repo.AddClasses(coursClasses);

            temp = await _unitOfWork.CommitAsync<Cours>().ConfigureAwait(false);

            if (result.Succeeded)
                result.Object = _mapper.Map<CoursViewModel>(domain);

            return result;

        }*/

        public IEnumerable<CoursViewModel> CoursSchedules(int? classeId, int? profId, int? matiereId)
        {
            var list = _repo.GetFiltered(classeId, profId, matiereId);
            var mapped = _mapper.Map <IEnumerable<CoursViewModel>>(list);
            return mapped;
        }
    }
}