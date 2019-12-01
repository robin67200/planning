using System.Collections;
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

       public IEnumerable<Eleve> GetByName(string nom)
        {
            return DbSet.Where(x => x.Nom == nom);
        }
        
    }
}