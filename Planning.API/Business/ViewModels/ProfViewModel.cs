using System.Collections.Generic;

namespace Planning.API.Business.ViewModels
{
    public class ProfViewModel
    {
        public int Id {get; set;}
        public string Nom {get; set;}
        public string Prenom {get; set;}
        public string Adresse {get; set;}
        public string Mail {get; set;}
        public string Telephone {get; set;}
        public ICollection<MatiereViewModel> Matieres {get; set;}
        public ICollection<ClasseViewModel> Classes {get; set;}
        public ICollection<CoursViewModel> Cours {get; set;}
    }
}