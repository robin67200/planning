using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class NiveauConfig : IEntityTypeConfiguration<Niveau>
    {
        public void Configure(EntityTypeBuilder<Niveau> builder)
        {
            builder.ToTable("Niveau");
            builder.HasKey(p => p.Id);

            builder.Property(x => x.Id).HasColumnName("ID").HasColumnType("int").UseSqlServerIdentityColumn().IsRequired();
            builder.Property(x => x.Nom).HasColumnName("Nom").HasColumnType("nvarchar(50)").IsRequired();
           

            builder.HasMany(y => y.Classes).WithOne(x => x.Niveau).HasForeignKey(y => y.NiveauId);

        }
    }
}