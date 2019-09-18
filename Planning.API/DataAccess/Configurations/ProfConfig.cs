using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class ProfConfig : IEntityTypeConfiguration<Prof>
    {
        public void Configure(EntityTypeBuilder<Prof> builder)
        {
            builder.ToTable("Prof");
            builder.HasKey(c => c.Id);

            builder.Property(x => x.Id).HasColumnName("Id").HasColumnType("INTEGER").IsRequired();
        }
    }
}