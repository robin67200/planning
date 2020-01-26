using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class MatiereConfig : IEntityTypeConfiguration<Matiere>
    {
        public void Configure(EntityTypeBuilder<Matiere> builder)
        {
            builder.ToTable("Matieres");
            builder.HasKey(p => p.Id);

            builder.Property(x => x.Id).HasColumnName("ID").HasColumnType("INTEGER").IsRequired().UseMySqlIdentityColumn().ValueGeneratedOnAdd();
            builder.Property(x => x.Nom).HasColumnName("Nom").HasColumnType("TEXT").IsRequired();
            
        }
    }
}