using System.Collections.Generic;
using System.Threading.Tasks;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.DataAccess.Repositories.Interface
{
    public interface IElevesRepository : IRepository<Eleve>
    {
        Task<Eleve> GetByName(string nom);
        

    }
}