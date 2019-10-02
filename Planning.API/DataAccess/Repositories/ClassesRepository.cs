using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Planning.API.DataAccess.Repositories.Interface;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.DataAccess.Repositories {

    public class ClassesRepository : GenericRepository<Classe>, IClassesRepository
    {
        private readonly PPE2APIContext context;

        public ClassesRepository(PPE2APIContext context) : base(context)
        {
            this.context = context;
        }

        public async Task<Classe> AddClasse(Classe classe)
        {
            context.Classes.Add(classe);
            await context.SaveChangesAsync();

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
            context.ProfClasses.Add(model);
        }

        public void RemoveProf(ProfClasse model)
        {
            context.ProfClasses.Remove(model);
        }

    }
}