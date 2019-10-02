using System.Collections.Generic;
using System.Threading.Tasks;
using Planning.API.Business.ViewModels;
using TechCloud.Tools.Business.Services.Interface;

namespace Planning.API.Business.Services.Interface 
{
  public interface IClassesService : IBaseService<ClasseViewModel>
    {
        void AddProf(ProfClasseViewModel model);
        void RemoveProf(ProfClasseViewModel model);
        Task<ClasseViewModel> GetByIdFullAsync(int id);
    }
}