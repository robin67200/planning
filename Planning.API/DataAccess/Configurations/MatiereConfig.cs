using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class MatiereConfig : IEntityTypeConfiguration<Matiere>
    {
        public void Configure(EntityTypeBuilder<Matiere> builder)
        {
            builder.ToTable("Matiere");
            builder.HasKey(m => m.Id);

            builder.Property(x => x.Id).HasColumnName("Id").HasColumnType("INTEGER").IsRequired();
        }
    }
}