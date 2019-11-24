using System;

namespace Planning.API.Models
{
    public class Indisponibilite
    {
        public int Id { get; set;}
        public DateTime Start {get; set;}
        public DateTime End {get; set;}
        public int ProfesseurId {get; set;}
        public Prof Professeur { get; set; }
  
    }
}