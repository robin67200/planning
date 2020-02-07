using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Planning.API.DataAccess.Repositories.Interface;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.DataAccess.Repositories {

    public class MatieresRepository : GenericRepository<Matiere>, IMatieresRepository
    {
        private readonly PPE2APIContext _context;
        public MatieresRepository(PPE2APIContext context) : base(context)
        {
            this._context = context;
        }
        public async Task<Matiere> CreateMatiere(Matiere matiere)
        {
            var lists = this._context.Matieres.ToList();
            matiere.Id = 1;

            foreach(Matiere list in lists) {
                if (list.Id == matiere.Id) {
                    matiere.Id += 1;
                }
            }

            await _context.Matieres.AddAsync(matiere);
            await _context.SaveChangesAsync();

            return matiere;


        }


        public override async Task<Matiere> GetByIdAsync(object id)
        {
            return await DbSet
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.Id == id.ToInt());
        }

        public IEnumerable<Matiere> GetProfAvailables(int profId)
        {
            return _context.Matieres.Include(c => c.MatiereProfs).Where(m => m.MatiereProfs.All(a => a.ProfId != profId));
        }

        public IEnumerable<Matiere> GetProfs(int profId)
        {
            return _context.Matieres.Include(c => c.MatiereProfs).Where(m => m.MatiereProfs.All(a => a.ProfId == profId)); 
        }


    }
}