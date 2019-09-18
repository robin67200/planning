using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class AnneeConfig : IEntityTypeConfiguration<AnneeScolaire>
    {
        public void Configure(EntityTypeBuilder<AnneeScolaire> builder)
        {
            builder.ToTable("AnneeScolaire");
            builder.HasKey(a => a.Id);

            builder.Property(x => x.Id).HasColumnName("Id").HasColumnType("INTEGER").IsRequired();
        }
    }
}