using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Planning.API.DataAccess.Repositories.Interface;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.DataAccess.Repositories {

    public class NiveauxRepository : GenericRepository<Niveau>, INiveauxRepository
    {
        private readonly PPE2APIContext _context;
        public NiveauxRepository(PPE2APIContext context) : base(context)
        {
            this._context = context;
        }

        public async Task<Niveau> CreateNiveau(Niveau niveau)
        {
            var lists = this._context.Niveaux.ToList();
            niveau.Id = 1;

            foreach(Niveau list in lists) {
                if (list.Id == niveau.Id) {
                    niveau.Id += 1;
                }
            }

            await _context.Niveaux.AddAsync(niveau);
            await _context.SaveChangesAsync();

            return niveau;


        }


    }
}