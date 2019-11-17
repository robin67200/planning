using System.Collections.Generic;
using System.Threading.Tasks;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.DataAccess.Repositories.Interface
{
    public interface IProfsRepository : IRepository<Prof>
    {
        void AddMatiere(ProfMatiere model);
        void RemoveMatiere(ProfMatiere model);
        void AddClasse(ProfClasse model);
        void RemoveClasse(ProfClasse model);
        IEnumerable<Prof> GetAvalaibles(int classeId);
        IEnumerable<Prof> GetProfsClasse(int classeId);
        
    }
}