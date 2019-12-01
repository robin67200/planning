using System;
using System.Collections.Generic;
using Planning.API.Business.ViewModels;
using TechCloud.Tools.Business.Services.Interface;

namespace Planning.API.Business.Services.Interface 
{
  public interface IIndisponibiliteService : IBaseService<IndisponibiliteViewModel>
    {
      IEnumerable<IndisponibiliteViewModel> GetByDate();
      IEnumerable<IndisponibiliteViewModel> SearchDate(string date);
      IEnumerable<IndisponibiliteViewModel> SearchByProf(int profId);
    }
}