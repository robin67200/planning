using System.Collections.Generic;
using AutoMapper;
using Planning.API.Business.Services.Interface;
using Planning.API.Business.ViewModels;
using Planning.API.DataAccess.Repositories.Interface;
using Planning.API.Models;
using TechCloud.Tools.Business.Services;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.Business.Services 
{
    public class MatieresService : BaseService<Matiere, MatiereViewModel>, IMatieresService
    {
        private readonly IMatieresRepository _repo;

        public MatieresService(IMatieresRepository repo, IUnitOfWork unitOfWork, IMapper mapper) : base(repo, unitOfWork, mapper)
        {
            _repo = repo;
        }
        

        public IEnumerable<MatiereViewModel> GetProfAvailables(int profId)
        {
            var list = _repo.GetProfAvailables(profId);
            var map = _mapper.Map<IEnumerable<MatiereViewModel>>(list);
            return map;
        }

        public IEnumerable<MatiereViewModel> GetProf(int profId)
        {
            var list = _repo.GetProfs(profId);
            var map = _mapper.Map<IEnumerable<MatiereViewModel>>(list);
            return map;
        }

        
    }
}