using System.Collections.Generic;

namespace Planning.API.Business.ViewModels
{
    public class MatiereViewModel
    {
        public int Id {get; set;}
        public string Nom {get; set;}
        public ICollection<ProfMatiereViewModel> ProfMatiere {get; set;}
        
    }
}