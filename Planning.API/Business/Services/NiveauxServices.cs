using AutoMapper;
using System.Threading.Tasks;
using Planning.API.Business.Services.Interface;
using Planning.API.Business.ViewModels;
using Planning.API.DataAccess.Repositories.Interface;
using Planning.API.Models;
using TechCloud.Tools.Business.Services;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.Business.Services 
{
    public class NiveauService : BaseService<Niveau, NiveauViewModel>, INiveauService
    {
        private readonly IUnitOfWork _uof;
        private readonly INiveauxRepository _repo;
        public NiveauService(INiveauxRepository repository, IUnitOfWork unitOfWork, IMapper mapper) : base(repository, unitOfWork, mapper)
        {
            _uof = unitOfWork;
            _repo = repository;
        }

        public async Task<Niveau> CreateNiveau(NiveauViewModel niveau)
        {
            var obj = this._mapper.Map<Niveau>(niveau);
            await this._repo.CreateNiveau(obj);
            await this._unitOfWork.CommitAsync();

            return obj;
        }
    }
}