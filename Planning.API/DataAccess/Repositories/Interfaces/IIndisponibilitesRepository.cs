using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.DataAccess.Repositories.Interface
{
    public interface IIndisponibilitesRepository : IRepository<Indisponibilite>
    {
        IEnumerable<Indisponibilite> GetByDate();
        Task<Indisponibilite> CreateIndisponibilite(Indisponibilite indisponibilite);
        IEnumerable<Indisponibilite> SearchDate(string date);
        IEnumerable<Indisponibilite> SearchByProf(int profId);
    }
}