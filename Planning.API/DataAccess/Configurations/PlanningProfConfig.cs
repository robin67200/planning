using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class PlanningProfConfig : IEntityTypeConfiguration<PlanningProf>
    {
        public void Configure(EntityTypeBuilder<PlanningProf> builder)
        {
            builder.ToTable("PlanningProf");
            builder.HasKey(c => c.Id);

            builder.Property(x => x.Id).HasColumnName("Id").HasColumnType("INTEGER").IsRequired();
        }
    }
}