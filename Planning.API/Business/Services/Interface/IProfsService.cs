using System.Collections.Generic;
using Planning.API.Business.ViewModels;
using TechCloud.Tools.Business.Services.Interface;

namespace Planning.API.Business.Services.Interface 
{
  public interface IProfsService : IBaseService<ProfViewModel>
    {
        void AddMatiere(ProfMatiereViewModel model);
        void RemoveMatiere(ProfMatiereViewModel model);
        void AddClasse(ProfClasseViewModel model);
        void RemoveClasse(ProfClasseViewModel model);
        IEnumerable<ProfViewModel> GetAvailables(int classeId);
        IEnumerable<ProfViewModel> GetProfsClasse(int classeId);
        
    } 
}