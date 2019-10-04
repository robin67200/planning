using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class ProfClasseConfig : IEntityTypeConfiguration<ProfClasse>
    {
        public void Configure(EntityTypeBuilder<ProfClasse> builder)
        {
            builder.ToTable("ProfClasse");
            builder.HasKey(keyExpression: p => new { p.ProfId, p.ClasseId });

            builder.Property(x => x.ProfId).HasColumnName("ProfId").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.ClasseId).HasColumnName("ClasseId").HasColumnType("INTEGER").IsRequired();

            builder.HasOne(x => x.Classe).WithMany(x => x.ClasseProfs).HasForeignKey(x => x.ClasseId);
            builder.HasOne(x => x.Prof).WithMany(x => x.ProfClasses).HasForeignKey(x => x.ProfId);

        }
    }
}