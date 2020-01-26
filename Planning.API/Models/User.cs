using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Planning.API.Models
{
    public class User : IdentityUser<int>
    {
        public string Status {get; set;}
        public DateTime DateOfBirth {get; set;}
        public DateTime Created {get; set;}
        public DateTime LastActive {get; set;}
        public virtual ICollection<UserRole> UserRoles {get; set;}

    }
}