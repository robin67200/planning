using System;

namespace Planning.API.Models
{
    public class Indisponibilite
    {
        public int Id { get; set;}
        public DateTime Date {get; set;}
        public int ProfesseurId {get; set;}
        public Prof Professeur { get; set; }
  
    }
}