using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Planning.API.DataAccess.Repositories.Interface;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.DataAccess.Repositories {

    public class AnneesRepository : GenericRepository<Annee>, IAnneesRepository
    {
        public AnneesRepository(PPE2APIContext context) : base(context)
        {
            
        }

    }
}