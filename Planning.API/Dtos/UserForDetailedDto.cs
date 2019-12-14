using System;

namespace Planning.API.Dtos
{
    public class UserForDetailedDto
    {
        public int Id {get; set;}
        public string Status {get; set;}
        public int Age {get; set;}
        public string Username {get; set;}
        public DateTime Created {get; set;}
        public DateTime LastActive {get; set;}
    }
}