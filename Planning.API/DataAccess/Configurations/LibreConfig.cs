using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class LibreConfig : IEntityTypeConfiguration<Libre>
    {
        public void Configure(EntityTypeBuilder<Libre> builder)
        {
            builder.ToTable("Libre");
            builder.HasKey(c => c.Id);

            builder.Property(x => x.Id).HasColumnName("Id").HasColumnType("INTEGER").IsRequired();
        }
    }
}