using System.Collections.Generic;
using Planning.API.Business.ViewModels;
using TechCloud.Tools.Business.Services.Interface;

namespace Planning.API.Business.Services.Interface 
{
  public interface ICoursService : IBaseService<CoursViewModel>
    {
        IEnumerable<CoursViewModel> CoursSchedules(int? classeId, int? profId, int? matiereId);

        IEnumerable<CoursViewModel> GetCoursAvailables(int classeId);

        void AddCours(CoursViewModel cours);
    }
}