using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Planning.API.DataAccess.Repositories.Interface;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.DataAccess.Repositories {

    public class ProfsRepository : GenericRepository<Prof>, IProfsRepository
    {
        private readonly PPE2APIContext _context;
        public ProfsRepository(PPE2APIContext context) : base(context)
        {
            this._context = context;
        }

        public async Task<Prof> CreateProf(Prof prof)
        {
            var lists = this._context.Profs.ToList();
            prof.Id = 1;

            foreach(Prof list in lists) {
                if (list.Id == prof.Id) {
                    prof.Id += 1;
                }
            }

            await _context.Profs.AddAsync(prof);
            await _context.SaveChangesAsync();

            return prof;


        }


        public override Task<Prof> GetByIdAsync(object id)
        {
            int converted = id.ToInt();
            return this._context.Profs
                .Include(p => p.ProfMatieres)
                    .ThenInclude(t => t.Matiere)
                .Include(p => p.ProfClasses)
                    .ThenInclude(t => t.Classe)
                .Include(g => g.Cours)
                .Include(i => i.Indisponibiltes)
                .FirstOrDefaultAsync(p => p.Id == converted);
        }

        public void AddMatiere(ProfMatiere model)
        {
            _context.ProfMatieres.Add(model);
        }

        public void RemoveMatiere(ProfMatiere model)
        {
            _context.ProfMatieres.Remove(model);
        }

        public void AddClasse(ProfClasse model)
        {
            _context.ProfClasses.Add(model);
        }

        public void RemoveClasse(ProfClasse model)
        {
            _context.ProfClasses.Remove(model);
        }

        

        public IEnumerable<Prof> GetAvalaibles(int classeId)
        {
            return _context.Profs.Include(e => e.ProfClasses).Where(x => x.ProfClasses.All(z => z.ClasseId != classeId));
            
        }

        public IEnumerable<Prof> GetProfsClasse(int classeId)
        {
            return _context.Profs.Include(e => e.ProfClasses).Where(x => x.ProfClasses.All(z => z.ClasseId == classeId));
            
        }
       

        
    }
}