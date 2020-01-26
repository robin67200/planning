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
    public class AnneeService : BaseService<Annee, AnneeViewModel>, IAnneeService
    {
        private readonly IUnitOfWork _uof;
        private readonly IAnneesRepository _repo;
        public AnneeService(IAnneesRepository repository, IUnitOfWork unitOfWork, IMapper mapper) : base(repository, unitOfWork, mapper)
        {
            _uof = unitOfWork;
            _repo = repository;
        }

        public async Task<Annee> CreateAnnee(AnneeViewModel annee)
        {
            var obj = this._mapper.Map<Annee>(annee);
            await this._repo.CreateAnnee(obj);
            await this._unitOfWork.CommitAsync();

            return obj;
        }

    }
}