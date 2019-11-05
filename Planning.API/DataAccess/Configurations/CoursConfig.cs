using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class CoursConfig : IEntityTypeConfiguration<Cours>
    {
        public void Configure(EntityTypeBuilder<Cours> builder)
        {
            builder.ToTable("Cours");
            builder.HasKey(p => p.Id);

            builder.Property(x => x.Id).HasColumnName("Id").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.Title).HasColumnName("Title").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Start).HasColumnName("Start").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.End).HasColumnName("End").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.Room).HasColumnName("Room").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.ProfesseurId).HasColumnName("ProfesseurId").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.Color).HasColumnName("Color").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.MatiereId).HasColumnName("MatiereId").HasColumnType("INTEGER").IsRequired();

        }
    }
}