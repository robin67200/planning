using System.Collections.Generic;
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
    public class ElevesService : BaseService<Eleve, EleveViewModel>, IElevesService
    {
        private readonly IElevesRepository _repo;

        public ElevesService(IElevesRepository repo, IUnitOfWork unitOfWork, IMapper mapper) : base(repo, unitOfWork, mapper)
        {
            _repo = repo;
        }

        public IEnumerable<EleveViewModel> GetByName(string nom)
        {
            var dbEleve = _repo.GetByName(nom);
            var mapped = _mapper.Map<IEnumerable<EleveViewModel>>(dbEleve);
            return mapped;
        }

    }
}