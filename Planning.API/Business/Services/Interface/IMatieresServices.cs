using System.Collections.Generic;
using Planning.API.Business.ViewModels;
using TechCloud.Tools.Business.Services.Interface;

namespace Planning.API.Business.Services.Interface 
{
  public interface IMatieresService : IBaseService<MatiereViewModel>
    {
        //Task<IEnumerable<MatiereViewModel>> GetAllMatieres();
        //Task<MatiereViewModel> GetMatiereById(int id);
        IEnumerable<MatiereViewModel> GetProfAvailables(int profId);
        IEnumerable<MatiereViewModel> GetProf(int profId);
    }
}