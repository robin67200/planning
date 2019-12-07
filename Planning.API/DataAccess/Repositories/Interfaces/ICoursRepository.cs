using System.Collections.Generic;
using System.Threading.Tasks;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.DataAccess.Repositories.Interface
{
    public interface ICoursRepository : IRepository<Cours>
    {
        IEnumerable<Cours> GetFiltered(int? classeId, int? profId, int? matiereId);
        void AddClasses(IEnumerable<CoursClasse> classes);
        IEnumerable<Cours> GetCoursAvailables(int classeId);
        void AddCours(Cours cours);
    }
}