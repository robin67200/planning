using System.Collections.Generic;
using System.Threading.Tasks;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.DataAccess.Repositories.Interface
{
    public interface IClassesRepository : IRepository<Classe>
    {
        Task<Classe> AddClasse(Classe classe);
        Task<Classe> GetByIdFullAsync(int id);
        void AddProf(ProfClasse model);
        void RemoveProf(ProfClasse model);
        IEnumerable<Classe> GetProfClasses(int profId);
        IEnumerable<Classe> GetClassesAvailables(int profId);
        void AddCours(CoursClasse model);
        void RemoveCours(CoursClasse model);
    }
}