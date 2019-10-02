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

            builder.Property(x => x.Id).HasColumnName("ID").HasColumnType("int").UseSqlServerIdentityColumn().IsRequired();
            builder.Property(x => x.Nom).HasColumnName("Nom").HasColumnType("nvarchar(50)").IsRequired();
            builder.Property(x => x.Prenom).HasColumnName("Prenom").HasColumnType("nvarchar(50)").IsRequired();
            builder.Property(x => x.Adresse).HasColumnName("Adresse").HasColumnType("nvarchar(50)").IsRequired();
            builder.Property(x => x.Mail).HasColumnName("Mail").HasColumnType("nvarchar(50)").IsRequired();
            builder.Property(x => x.Telephone).HasColumnName("Telephone").HasColumnType("nvarchar(50)").IsRequired();
            builder.Property(x => x.DateNaissance).HasColumnName("DateNaissance").HasColumnType("datetime").IsRequired();
            builder.Property(x => x.ClasseId).HasColumnName("ClasseId").HasColumnType("INTEGER").IsRequired();



        }
    }
}