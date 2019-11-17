using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Planning.API.DataAccess.Repositories.Interface;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;
using System.Collections.Generic;
using System.Linq;

namespace Planning.API.DataAccess.Repositories {

    public class ClassesRepository : GenericRepository<Classe>, IClassesRepository
    {
        private readonly PPE2APIContext _context;

        public ClassesRepository(PPE2APIContext context) : base(context)
        {
            this._context = context;
        }

        public override Task<Classe> GetByIdAsync(object id)
        {
            int converted = id.ToInt();
            return this._context.Classes
                .Include(p => p.ClasseProfs)
                    .ThenInclude(t => t.Prof)
                .Include(p => p.ClasseCours)
                    .ThenInclude(t => t.Cours)
                .Include(d => d.Eleves)
                .FirstOrDefaultAsync(p => p.Id == converted);
        }

        public async Task<Classe> AddClasse(Classe classe)
        {
            _context.Classes.Add(classe);
            await _context.SaveChangesAsync();

            return classe;
        }

        public async Task<Classe> GetByIdFullAsync(int id)
        {
            return await DbSet
                .Include(y => y.ClasseProfs)
                    .ThenInclude(x => x.Prof)
                .Include(z => z.ClasseCours)
                    .ThenInclude(x => x.Cours)
                .Include(c => c.Niveau)
                .Include(c => c.Annee)
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.Id == id.ToInt());
        }

        

        public override void Update(Classe entity)
        {
            entity.Niveau = null;
            entity.Annee = null;
            base.Update(entity);
        }
        public override Classe Insert(Classe entity)
        {
            entity.Niveau = null;
            entity.Annee = null;
            return base.Insert(entity);
        }

        public void AddProf(ProfClasse model)
        {
            _context.ProfClasses.Add(model);
        }

        public void RemoveProf(ProfClasse model)
        {
            _context.ProfClasses.Remove(model);
        }

        public IEnumerable<Classe> GetProfClasses(int profId)
        {
            return _context.Classes.Include(c => c.ClasseProfs).Where(x => x.ClasseProfs.All(a => a.ProfId == profId)); 
        }

        public IEnumerable<Classe> GetClassesAvailables(int profId)
        {
            return _context.Classes.Include(p => p.ClasseProfs).Where(x => x.ClasseProfs.All(a => a.ProfId != profId));
        }

        public void AddCours(CoursClasse model)
        {
            _context.CoursClasses.Add(model);
        }

        public void RemoveCours(CoursClasse model)
        {
            _context.CoursClasses.Remove(model);
        }

        

    }
}