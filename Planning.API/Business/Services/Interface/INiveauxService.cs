using Planning.API.Business.ViewModels;
using System.Threading.Tasks;
using TechCloud.Tools.Business.Services.Interface;
using Planning.API.Models;

namespace Planning.API.Business.Services.Interface 
{
  public interface INiveauService : IBaseService<NiveauViewModel>
    {
      Task<Niveau> CreateNiveau(NiveauViewModel niveau);
    }
}