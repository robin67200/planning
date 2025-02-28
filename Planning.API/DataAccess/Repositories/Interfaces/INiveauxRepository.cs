using System.Threading.Tasks;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.DataAccess.Repositories.Interface
{
    public interface INiveauxRepository : IRepository<Niveau>
    {
        Task<Niveau> CreateNiveau(Niveau niveau);

    }
}