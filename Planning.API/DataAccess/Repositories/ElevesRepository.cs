using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Planning.API.DataAccess.Repositories.Interface;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.DataAccess.Repositories {

    public class ElevesRepository : GenericRepository<Eleve>, IElevesRepository
    {
        public ElevesRepository(PPE2APIContext context) : base(context)
        {  
        }

       public async Task<Eleve> GetByName(string nom)
        {
            return await DbSet.FirstOrDefaultAsync(x => x.Nom == nom);
        }
        
    }
}