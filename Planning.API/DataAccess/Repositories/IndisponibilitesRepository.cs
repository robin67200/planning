using Planning.API.DataAccess.Repositories.Interface;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.DataAccess.Repositories {

    public class IndisponibilitesRepository : GenericRepository<Indisponibilite>, IIndisponibilitesRepository
    {
        public IndisponibilitesRepository(PPE2APIContext context) : base(context)
        {
        }

    }
}