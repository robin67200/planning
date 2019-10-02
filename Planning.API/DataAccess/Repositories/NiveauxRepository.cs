using Planning.API.DataAccess.Repositories.Interface;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.DataAccess.Repositories {

    public class NiveauxRepository : GenericRepository<Niveau>, INiveauxRepository
    {
        public NiveauxRepository(PPE2APIContext context) : base(context)
        {
        }

    }
}