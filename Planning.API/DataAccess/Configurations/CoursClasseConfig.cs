using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class CoursClasseConfig : IEntityTypeConfiguration<CoursClasse>
    {
        public void Configure(EntityTypeBuilder<CoursClasse> builder)
        {
            builder.ToTable("CoursClasse");
            builder.HasKey(keyExpression: p => new { p.ClasseId, p.CoursId });

            builder.Property(x => x.ClasseId).HasColumnName("ClasseId").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.CoursId).HasColumnName("CoursId").HasColumnType("INTEGER").IsRequired();

            builder.HasOne(y => y.Classe).WithMany(x => x.ClasseCours).HasForeignKey(y => y.ClasseId);
            builder.HasOne(y => y.Cours).WithMany(x => x.CoursClasses).HasForeignKey(y => y.CoursId);

        }
    }
}