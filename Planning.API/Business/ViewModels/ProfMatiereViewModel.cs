namespace Planning.API.Business.ViewModels
{
    public class ProfMatiereViewModel
    {
        public int MatiereId {get; set;}
        public int ProfId {get; set;}

        public MatiereViewModel Matiere { get; set; } 
    }
}