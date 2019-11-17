using System;
using System.Collections.Generic;

namespace Planning.API.Business.ViewModels
{
    public class CoursViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public string Room { get; set; }
        public string Color { get; set; }
        public string Color2 { get; set; }
        public int MatiereId { get; set; }
        public int ProfesseurId { get; set; }

        public ICollection<ClasseViewModel> Classes { get; set; }
        
    }
}