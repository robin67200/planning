using System;
using System.Collections.Generic;

namespace Planning.API.Models
{
    public class Matiere
    {
        public int Id { get; set;}
        public string Nom {get; set;}

        public ICollection<ProfMatiere> MatiereProfs { get; set;}
    }
}