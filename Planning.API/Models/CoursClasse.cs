using System;
using System.Collections.Generic;

namespace Planning.API.Models
{
    public class CoursClasse
    {
        public int ClasseId { get; set; }
        public int CoursId { get; set; }

        public Classe Classe { get; set; }
        public Cours Cours { get; set; }
    }
}