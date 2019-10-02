using System;
using System.Collections.Generic;

namespace Planning.API.Models
{
    public class ProfMatiere
    {
        public int MatiereId {get; set;}
        public int ProfId {get; set;}

        public Prof Prof { get; set; }
        public Matiere Matiere { get; set; }
    }
}