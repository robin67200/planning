using System;
using System.Collections.Generic;

namespace Planning.API.Models
{
    public class ProfClasse
    {
        public int ClasseId {get; set;}
        public int ProfId {get; set;}

        public Classe Classe { get; set; }
        public Prof Prof { get; set; }
    }
}