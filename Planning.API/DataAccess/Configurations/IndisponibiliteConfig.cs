using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class IndisponibiliteConfig : IEntityTypeConfiguration<Indisponibilite>
    {
        public void Configure(EntityTypeBuilder<Indisponibilite> builder)
        {
            
            builder.ToTable("Indisponibilites");
            builder.HasKey(p => p.Id);

            builder.Property(x => x.Id).HasColumnName("ID").HasColumnType("INTEGER").IsRequired().UseMySqlIdentityColumn().ValueGeneratedOnAdd();
            builder.Property(x => x.Start).HasColumnName("Debut").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.End).HasColumnName("Fin").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.ProfesseurId).HasColumnName("ProfId").HasColumnType("INTEGER").IsRequired();
        }
    }
}