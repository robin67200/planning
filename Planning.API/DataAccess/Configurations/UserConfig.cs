using Planning.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Planning.API.DataAccess {
    public class UserConfig : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("Users");
            builder.HasKey(p => p.Id);

            builder.Property(x => x.Id).HasColumnName("ID").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.UserName).HasColumnName("Nom").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.PasswordHash).HasColumnName("PasswordHash").HasColumnType("BLOB").IsRequired();
            builder.Property(x => x.PasswordSalt).HasColumnName("PasswordSalt").HasColumnType("BLOB").IsRequired();


        }
    }
}