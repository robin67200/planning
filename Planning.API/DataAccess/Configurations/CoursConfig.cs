using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class CoursConfig : IEntityTypeConfiguration<Cours>
    {
        public void Configure(EntityTypeBuilder<Cours> builder)
        {
            builder.ToTable("Cours");
            builder.HasKey(p => p.Id);

            builder.Property(x => x.Id).HasColumnName("Id").HasColumnType("int").UseSqlServerIdentityColumn().IsRequired();
            builder.Property(x => x.Title).HasColumnName("Title").HasColumnType("nvarchar(50)").IsRequired();
            builder.Property(x => x.Contenu).HasColumnName("Contenu").HasColumnType("nvarchar(50)").IsRequired();
            builder.Property(x => x.Start).HasColumnName("Start").HasColumnType("datetime").IsRequired();
            builder.Property(x => x.End).HasColumnName("End").HasColumnType("datetime").IsRequired();
            builder.Property(x => x.ProfesseurId).HasColumnName("ProfesseurId").HasColumnType("int").IsRequired();
            builder.Property(x => x.Color).HasColumnName("Color").HasColumnType("varchar(10)").IsRequired();
            builder.Property(x => x.MatiereId).HasColumnName("MatiereId").HasColumnType("int").IsRequired();

        }
    }
}