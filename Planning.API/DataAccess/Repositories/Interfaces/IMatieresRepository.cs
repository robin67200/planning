using System.Collections.Generic;
using System.Threading.Tasks;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.DataAccess.Repositories.Interface
{
    public interface IMatieresRepository : IRepository<Matiere>
    {
        
        IEnumerable<Matiere> GetProfAvailables(int profId);
        IEnumerable<Matiere> GetProfs(int profId);
        Task<Matiere> CreateMatiere(Matiere matiere);

    }
}