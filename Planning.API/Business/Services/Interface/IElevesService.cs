using System.Collections.Generic;
using System.Threading.Tasks;
using Planning.API.Models;
using Planning.API.Business.ViewModels;
using TechCloud.Tools.Business.Services.Interface;

namespace Planning.API.Business.Services.Interface 
{
  public interface IElevesService : IBaseService<EleveViewModel>
    {
        //Task<IEnumerable<EleveViewModel>> GetAllEleves();
        //Task<EleveViewModel> GetEleveById(int id);
        IEnumerable<EleveViewModel> GetByName(string nom);
        Task<Eleve> CreateEleve(EleveViewModel eleve);

    }
}