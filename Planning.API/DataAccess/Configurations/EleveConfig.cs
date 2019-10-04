using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class EleveConfig : IEntityTypeConfiguration<Eleve>
    {
        public void Configure(EntityTypeBuilder<Eleve> builder)
        {
            builder.ToTable("Eleves");
            builder.HasKey(p => p.Id);

            builder.Property(x => x.Id).HasColumnName("ID").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.Nom).HasColumnName("Nom").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Prenom).HasColumnName("Prenom").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Adresse).HasColumnName("Adresse").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Mail).HasColumnName("Mail").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.Telephone).HasColumnName("Telephone").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.DateNaissance).HasColumnName("DateNaissance").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.ClasseId).HasColumnName("ClasseId").HasColumnType("INTEGER").IsRequired();



        }
    }
}