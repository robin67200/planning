using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class AnneeConfig : IEntityTypeConfiguration<Annee>
    {
        public void Configure(EntityTypeBuilder<Annee> builder)
        {
            builder.ToTable("Annees");
            builder.HasKey(a => a.Id);

            builder.Property(x => x.Id).HasColumnName("Id").HasColumnType("int").IsRequired();
            builder.Property(x => x.Nom).HasColumnName("Nom").HasColumnType("nvarchar(50)").IsRequired();

            builder.HasMany(z => z.Classes).WithOne(z => z.Annee).HasForeignKey(z => z.AnneeId);
        }
    }
}