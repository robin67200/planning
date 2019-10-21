using System;
using System.Collections.Generic;

namespace Planning.API.Models
{
        public class Eleve
    {
        public int Id {get; set;}
        public string Nom {get; set;}
        public string Prenom {get; set;}
        public string Adresse {get; set;}
        public string Mail {get; set;}
        public string Telephone {get; set;}
        public DateTime DateNaissance {get; set;}
        public int ClasseId {get; set;}
        public Classe Classe {get; set;}

    }
}