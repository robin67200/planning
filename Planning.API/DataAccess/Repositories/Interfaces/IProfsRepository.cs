using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
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
        Task<Prof> CreateProf(Prof prof);
        IEnumerable<Prof> GetAvalaibles(int classeId);
        IEnumerable<Prof> GetProfsClasse(int classeId);
        
        
    }
}