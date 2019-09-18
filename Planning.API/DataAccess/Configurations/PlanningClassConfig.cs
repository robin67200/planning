using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class PlanningClassConfig : IEntityTypeConfiguration<PlanningClasse>
    {
        public void Configure(EntityTypeBuilder<PlanningClasse> builder)
        {
            builder.ToTable("PlanningClasse");
            builder.HasKey(p => p.Id);

            builder.Property(x => x.Id).HasColumnName("Id").HasColumnType("INTEGER").IsRequired();
        }
    }
}