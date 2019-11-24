using System;
using System.Collections.Generic;

namespace Planning.API.Models
{
    public class Prof
    {
        public int Id { get; set;}
        public string Nom {get; set;}
        public string Prenom {get; set;}
        public string Adresse {get; set;}
        public string Mail {get; set;}
        public string Telephone {get; set;}

        public ICollection<ProfMatiere> ProfMatieres { get; set;}
        public ICollection<ProfClasse> ProfClasses { get; set;}
        public ICollection<Cours> Cours {get; set;}
        public ICollection<Indisponibilite> Indisponibiltes {get; set;}
    }
}