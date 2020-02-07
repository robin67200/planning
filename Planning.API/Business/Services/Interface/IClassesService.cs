using System.Collections.Generic;
using System.Threading.Tasks;
using Planning.API.Business.ViewModels;
using Planning.API.Models;
using TechCloud.Tools.Business.Services.Interface;

namespace Planning.API.Business.Services.Interface 
{
  public interface IClassesService : IBaseService<ClasseViewModel>
    {
        void AddProf(ProfClasseViewModel model);
        void RemoveProf(ProfClasseViewModel model);
        Task<Classe> CreateClasse(ClasseViewModel classe);
        Task<ClasseViewModel> GetByIdFullAsync(int id);
        IEnumerable<ClasseViewModel> GetProfClasse(int profId);
        IEnumerable<ClasseViewModel> GetClassesAvailables(int profId);
        void AddCours(CoursClasse model);
        void RemoveCours(CoursClasse model);
    }
}