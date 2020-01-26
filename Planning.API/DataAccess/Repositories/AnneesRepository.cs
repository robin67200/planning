using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Planning.API.DataAccess.Repositories.Interface;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.DataAccess.Repositories {

    public class AnneesRepository : GenericRepository<Annee>, IAnneesRepository
    {
        private readonly PPE2APIContext _context;
        public AnneesRepository(PPE2APIContext context) : base(context)
        {
            this._context = context;
        }

        public async Task<Annee> CreateAnnee(Annee annee)
        {
            var lists = this._context.Annees.ToList();
            annee.Id = 1;

            foreach(Annee list in lists) {
                if (list.Id == annee.Id) {
                    annee.Id += 1;
                }
            }
            
            await _context.Annees.AddAsync(annee);
            await _context.SaveChangesAsync();
           
            return annee;


        }



    }
}