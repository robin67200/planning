using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
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

        public async Task<Indisponibilite> CreateIndisponibilite(Indisponibilite indisponibilite)
        {
            var lists = this._context.Indisponibilites.ToList();
            indisponibilite.Id = 1;

            foreach(Indisponibilite list in lists) {
                if (list.Id == indisponibilite.Id) {
                    indisponibilite.Id += 1;
                }
            }

            await _context.Indisponibilites.AddAsync(indisponibilite);
            await _context.SaveChangesAsync();

            return indisponibilite;


        }

        public IEnumerable<Indisponibilite> GetByDate()
        {
            DateTime date = DateTime.Today;
            return _context.Indisponibilites.Where(m => m.Start > date).OrderBy(d => d.Start);
        }

        public IEnumerable<Indisponibilite> SearchDate(string date)
        {

            return _context.Indisponibilites.Where(m => m.Start.ToString("dd/MM/yyyy") == date).ToList();
        }

        public IEnumerable<Indisponibilite> SearchByProf(int profId)
        {

            return DbSet.Where(m => m.ProfesseurId == profId);
        }



    }
}