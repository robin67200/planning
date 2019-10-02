using System.Collections.Generic;

namespace Planning.API.Business.ViewModels
{
    public class ClasseViewModel
    {
        public int Id {get; set;}
        public string Nom {get; set;}
        public int NiveauId { get; set; }
        public int AnneeId { get; set; }

        public NiveauViewModel Niveau { get; set; }
        public AnneeViewModel Annee { get; set; }

        public ICollection<EleveViewModel> Eleves {get; set;}
        public ICollection<ProfViewModel> Professeurs {get; set;}
        
    }
}