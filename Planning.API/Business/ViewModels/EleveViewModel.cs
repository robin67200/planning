using System;

namespace Planning.API.Business.ViewModels
{
    public class EleveViewModel
    {
        public int Id {get; set;}
        public string Nom {get; set;}
        public string Prenom {get; set;}
        public string Adresse {get; set;}
        public string Mail {get; set;}
        public string Telephone {get; set;}

        public DateTime DateNaissance {get; set;}

    }
}