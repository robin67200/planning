using System.Threading.Tasks;
using Planning.API.Business.ViewModels;
using Planning.API.Models;
using TechCloud.Tools.Business.Services.Interface;

namespace Planning.API.Business.Services.Interface 
{
  public interface IAnneeService : IBaseService<AnneeViewModel>
    {
      Task<Annee> CreateAnnee(AnneeViewModel annee);
    }  
}