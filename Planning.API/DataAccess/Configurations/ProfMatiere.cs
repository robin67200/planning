using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class ProfMatiereConfig : IEntityTypeConfiguration<ProfMatiere>
    {
        public void Configure(EntityTypeBuilder<ProfMatiere> builder)
        {
            builder.ToTable("ProfMatiere");
            builder.HasKey(keyExpression: p => new{p.MatiereId, p.ProfId});

            builder.Property(x => x.ProfId).HasColumnName("ProfId").HasColumnType("int").IsRequired();
            builder.Property(x => x.MatiereId).HasColumnName("MatiereId").HasColumnType("int").IsRequired();

            builder.HasOne(x => x.Prof).WithMany(x => x.ProfMatieres).HasForeignKey(x => x.ProfId);
            builder.HasOne(x => x.Matiere).WithMany(x => x.MatiereProfs).HasForeignKey(x => x.MatiereId);

        }
    }
}