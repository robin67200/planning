using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class EleveConfig : IEntityTypeConfiguration<Eleve>
    {
        public void Configure(EntityTypeBuilder<Eleve> builder)
        {
            builder.ToTable("Eleve");
            builder.HasKey(e => e.Id);

            builder.Property(x => x.Id).HasColumnName("Id").HasColumnType("INTEGER").IsRequired();
        }
    }
}