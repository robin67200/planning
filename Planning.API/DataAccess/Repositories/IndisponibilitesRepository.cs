using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Planning.API.DataAccess.Repositories.Interface;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.DataAccess.Repositories {

    public class IndisponibilitesRepository : GenericRepository<Indisponibilite>, IIndisponibilitesRepository
    {

        private readonly PPE2APIContext _context;
        public IndisponibilitesRepository(PPE2APIContext context) : base(context)
        {
            this._context = context;
        }

        public IEnumerable<Indisponibilite> GetByDate()
        {
            DateTime date = DateTime.Today;
            return _context.Indisponibilites.Where(m => m.Start > date).OrderBy(d => d.Start);
        }


    }
}