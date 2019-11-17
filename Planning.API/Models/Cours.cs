using System;
using System.Collections.Generic;

namespace Planning.API.Models
{
        public class Cours
    {
        public int Id { get; set;}
        public string Title { get; set; }
        public DateTime Start {get; set;}
        public DateTime End { get; set; }
        public string Room { get; set; }
        public string Color { get; set;}
        public string Color2 { get; set;}
        public Prof Professeur { get; set; }
        public int MatiereId { get; set; }
        public int ClasseId { get; set; }
        public int ProfesseurId { get; set; }


        public ICollection<CoursClasse> CoursClasses { get; set; }

        

        
    }
}
