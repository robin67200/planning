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
        private readonly PPE2APIContext _context;

        public ElevesRepository(PPE2APIContext context) : base(context)
        {  
            this._context = context;

        }
        public async Task<Eleve> CreateEleve(Eleve eleve)
        {
            var lists = this._context.Eleves.ToList();
            eleve.Id = 1;

            foreach(Eleve list in lists) {
                if (list.Id == eleve.Id) {
                    eleve.Id += 1;
                }
            }

            await _context.Eleves.AddAsync(eleve);
            await _context.SaveChangesAsync();

            return eleve;


        }

       public IEnumerable<Eleve> GetByName(string nom)
        {
            return DbSet.Where(x => x.Nom == nom);
        }
        
    }
}