using System;
using System.Collections.Generic;

namespace Planning.API.Models
{
    public class Annee
    {
        public int Id { get; set; }
        public string Nom { get; set; }

        public ICollection<Classe> Classes { get; set; }
    }
}