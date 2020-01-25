using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Planning.API.Business.Services.Interface;
using Planning.API.Business.ViewModels;
using Planning.API.Models;
using TechCloud.Tools.Mvc;

namespace Planning.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfsController : CrudController<IProfsService, ProfViewModel, int>
    {
        private readonly IMatieresService _matieres;
        private readonly IClassesService _classes;
        private readonly PPE2APIContext _context;
        public ProfsController (IProfsService service, IMatieresService matieres, IClassesService classes, PPE2APIContext context) : base(service)
        {
            this._matieres = matieres;
            this._classes = classes;
            _context = context;
        }

        [HttpGet("new/order")]
        public async Task<IActionResult> ProfsOrder()
        {
            var profs = await _context.Profs.OrderByDescending(x => x.Note)
            .ToListAsync();

            return Ok(profs);
        }

        [HttpGet("new")]
        public async Task<IActionResult> Profs()
        {
            var profs = await _context.Profs.OrderByDescending(x => x.Note)
            .ToListAsync();

            return Ok(profs);
        }

        [HttpPut("new/{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Prof prof)
        {
            var dbProf = _context.Profs.FirstOrDefault(x => x.Id == id);
            dbProf.Nom = prof.Nom;
            dbProf.Prenom = prof.Prenom;
            dbProf.Adresse = prof.Adresse;
            dbProf.Mail = prof.Mail;
            dbProf.Telephone = prof.Telephone;
            dbProf.Nom = prof.Nom;
            dbProf.Note = prof.Note;

            _context.Profs.Update(dbProf);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpGet("{id}/matieres/availables")]
        public IEnumerable<MatiereViewModel> GetAvailables([FromRoute]int id)
        {
            return this._matieres.GetProfAvailables(id);
        }

        [HttpGet("{id}/matieres/prof")]
        public IEnumerable<MatiereViewModel> GetMatieres([FromRoute]int id)
        {
            return this._matieres.GetProf(id);
        }

        [HttpGet("{id}/classes/availables")]
        public IEnumerable<ClasseViewModel> GetClassesAvailables([FromRoute]int id)
        {
            return this._classes.GetClassesAvailables(id);
        }

        [HttpGet("{id}/classes/prof")]
        public IEnumerable<ClasseViewModel> GetClasses([FromRoute]int id)
        {
            return this._classes.GetProfClasse(id);
        }

        [HttpPut("{id}/matieres/{matiereId}")]
        public IActionResult AddMatiere([FromRoute]int id, [FromRoute]int matiereId)
        {
            ProfMatiereViewModel model = new ProfMatiereViewModel()
            {
                ProfId = id,
                MatiereId = matiereId
            };

            this._service.AddMatiere(model);
            return Ok();
        }

        [HttpDelete("{id}/matieres/{matiereId}")]
        public IActionResult RemoveMatiere([FromRoute] int id, [FromRoute] int matiereId)
        {
            ProfMatiereViewModel model = new ProfMatiereViewModel()
            {
                ProfId = id,
                MatiereId = matiereId
            };
            this._service.RemoveMatiere(model);
            return Ok();
        }

        [HttpPut("{id}/classes/{classeId}")]
        public IActionResult AddClasse([FromRoute]int id, [FromRoute]int classeId)
        {
            ProfClasseViewModel model = new ProfClasseViewModel()
            {
                ProfId = id,
                ClasseId = classeId
            };

            this._service.AddClasse(model);
            return Ok();
        }

        [HttpDelete("{id}/classes/{classeId}")]
        public IActionResult RemoveClasse([FromRoute]int id, [FromRoute]int classeId)
        {
            ProfClasseViewModel model = new ProfClasseViewModel()
            {
                ProfId = id,
                ClasseId = classeId
            };

            this._service.RemoveClasse(model);
            return Ok();
        }
    }
}