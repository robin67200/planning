using System;
using System.Collections.Generic;

namespace Planning.API.Business.ViewModels
{
    public class IndisponibiliteViewModel
    {
        public int Id { get; set;}
        public DateTime Start {get; set;}
        public DateTime End {get; set;}
        public int ProfesseurId {get; set;}
        public ProfViewModel Professeur { get; set; }
  
    }
}