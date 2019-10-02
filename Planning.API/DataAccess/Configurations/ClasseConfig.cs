using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class ClasseConfig : IEntityTypeConfiguration<Classe>
    {
        public void Configure(EntityTypeBuilder<Classe> builder)
        {
            builder.ToTable("Classes");
            builder.HasKey(p => p.Id);

            builder.Property(x => x.Id).HasColumnName("ID").HasColumnType("int").UseSqlServerIdentityColumn().IsRequired();
            builder.Property(x => x.Nom).HasColumnName("Nom").HasColumnType("nvarchar(50)").IsRequired();
            builder.Property(x => x.NiveauId).HasColumnName("NiveauId").HasColumnType("int").IsRequired();
            builder.Property(x => x.AnneeId).HasColumnName("AnneeId").HasColumnType("int").IsRequired();


            builder.HasMany(y => y.Eleves).WithOne(x => x.Classe).HasForeignKey(y => y.ClasseId);
        }
    }
}