using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class ProfConfig : IEntityTypeConfiguration<Prof>
    {
        public void Configure(EntityTypeBuilder<Prof> builder)
        {
            builder.ToTable("Profs");
            builder.HasKey(p => p.Id);

            builder.Property(x => x.Id).HasColumnName("ID").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.Nom).HasColumnName("Nom").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Prenom).HasColumnName("Prenom").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Adresse).HasColumnName("Adresse").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Mail).HasColumnName("Mail").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Telephone).HasColumnName("Telephone").HasColumnType("TEXT").IsRequired();
            
            builder.HasMany(z => z.Cours).WithOne(x => x.Professeur).HasForeignKey(z => z.ProfesseurId);
            builder.HasMany(x => x.Indisponibiltes).WithOne(z => z.Professeur).HasForeignKey(a => a.ProfesseurId);
        }
    }
}