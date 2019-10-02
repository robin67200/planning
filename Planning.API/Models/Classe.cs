using System;
using System.Collections.Generic;

namespace Planning.API.Models
{
    public class Classe
    {
        public int Id {get; set;}
        public string Nom {get; set;}
        public int NiveauId { get; set; }
        public int AnneeId { get; set; }

        public Niveau Niveau { get; set; }
        public Annee Annee { get; set; }

        public ICollection<ProfClasse> ClasseProfs { get; set;}
        public ICollection<CoursClasse> ClasseCours { get; set; }
        public ICollection<Eleve> Eleves { get; set; }
    }
}