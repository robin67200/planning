using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Planning.API.DataAccess;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.Models {
    public class PPE2APIContext : DbContext, IDbContext
    {
        public PPE2APIContext(DbContextOptions<PPE2APIContext> options)
            : base(options){}

        public DbSet<Planning.API.Models.Annee> Annees { get; set; }
        public DbSet<Planning.API.Models.Classe> Classes { get; set; }
        public DbSet<Planning.API.Models.Cours> Cours { get; set; }
        public DbSet<Planning.API.Models.CoursClasse> CoursClasses { get; set; }
        public DbSet<Planning.API.Models.Eleve> Eleves { get; set; }
        public DbSet<Planning.API.Models.Matiere> Matieres { get; set; }
        public DbSet<Planning.API.Models.Niveau> Niveaux { get; set; }
        public DbSet<Planning.API.Models.Prof> Profs { get; set; }
        public DbSet<Planning.API.Models.ProfClasse> ProfClasses { get; set; }
        public DbSet<Planning.API.Models.ProfMatiere> ProfMatieres { get; set; }
        
       
    

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new AnneeConfig());
            modelBuilder.ApplyConfiguration(new ClasseConfig());
            modelBuilder.ApplyConfiguration(new CoursConfig());
            modelBuilder.ApplyConfiguration(new CoursClasseConfig());
            modelBuilder.ApplyConfiguration(new EleveConfig());
            modelBuilder.ApplyConfiguration(new MatiereConfig());
            modelBuilder.ApplyConfiguration(new NiveauConfig());
            modelBuilder.ApplyConfiguration(new ProfConfig());
            modelBuilder.ApplyConfiguration(new ProfClasseConfig());
            modelBuilder.ApplyConfiguration(new ProfMatiereConfig());
            

        }
    }
}