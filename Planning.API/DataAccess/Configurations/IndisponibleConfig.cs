using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class IndisponibleConfig : IEntityTypeConfiguration<Indisponible>
    {
        public void Configure(EntityTypeBuilder<Indisponible> builder)
        {
            builder.ToTable("Indisponible");
            builder.HasKey(i => i.Id);

            builder.Property(x => x.Id).HasColumnName("Id").HasColumnType("INTEGER").IsRequired();
        }
    }
}