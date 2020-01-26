using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class AnneeConfig : IEntityTypeConfiguration<Annee>
    {
        public void Configure(EntityTypeBuilder<Annee> builder)
        {
            builder.ToTable("Anneess");
            builder.HasKey(a => a.Id);

            builder.Property(x => x.Id).HasColumnName("Id").HasColumnType("INTEGER").IsRequired().UseMySqlIdentityColumn().ValueGeneratedOnAdd();
            builder.Property(x => x.Nom).HasColumnName("Nom").HasColumnType("TEXT").IsRequired();

            builder.HasMany(z => z.Classes).WithOne(z => z.Annee).HasForeignKey(z => z.AnneeId);
        }
    }
}