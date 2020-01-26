using System.Threading.Tasks;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.DataAccess.Repositories.Interface
{
    public interface IAnneesRepository : IRepository<Annee>
    {
        Task<Annee> CreateAnnee(Annee annee);
    }
}