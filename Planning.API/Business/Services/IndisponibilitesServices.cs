using System;
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
    public class IndisponibiliteService : BaseService<Indisponibilite, IndisponibiliteViewModel>, IIndisponibiliteService
    {
        private readonly IIndisponibilitesRepository _repo;
        private readonly IUnitOfWork _uof;

        public IndisponibiliteService(IIndisponibilitesRepository repo, IUnitOfWork unitOfWork, IMapper mapper) : base(repo, unitOfWork, mapper)
        {
            _uof = unitOfWork;

            _repo = repo;
        }

         public async Task<Indisponibilite> CreateIndisponibilite(IndisponibiliteViewModel indisponibilite)
        {
            var obj = this._mapper.Map<Indisponibilite>(indisponibilite);
            await this._repo.CreateIndisponibilite(obj);
            await this._unitOfWork.CommitAsync();

            return obj;
        }

        public IEnumerable<IndisponibiliteViewModel> GetByDate()
        {
            var list = _repo.GetByDate();
            var map = _mapper.Map<IEnumerable<IndisponibiliteViewModel>>(list);
            return map;
        }

        public IEnumerable<IndisponibiliteViewModel> SearchDate(string date)
        {
            var list = _repo.SearchDate(date);
            var map = _mapper.Map<IEnumerable<IndisponibiliteViewModel>>(list);
            return map;
        }

        public IEnumerable<IndisponibiliteViewModel> SearchByProf(int profId)
        {
            var list = _repo.SearchByProf(profId);
            var map = _mapper.Map<IEnumerable<IndisponibiliteViewModel>>(list);
            return map;
        }

    }
}