using System;
using System.Threading.Tasks;
using Planning.API.Models;
using System.Collections.Generic;
using Planning.API.Business.ViewModels;
using TechCloud.Tools.Business.Services.Interface;

namespace Planning.API.Business.Services.Interface 
{
  public interface IIndisponibiliteService : IBaseService<IndisponibiliteViewModel>
    {
      IEnumerable<IndisponibiliteViewModel> GetByDate();
      Task<Indisponibilite> CreateIndisponibilite(IndisponibiliteViewModel indisponibilite);
      IEnumerable<IndisponibiliteViewModel> SearchDate(string date);
      IEnumerable<IndisponibiliteViewModel> SearchByProf(int profId);
    }
}