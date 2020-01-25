using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Planning.API.Business.Services.Interface;
using Planning.API.Business.ViewModels;
using Planning.API.Models;
using TechCloud.Tools.Mvc;

namespace Planning.API.Controllers
{
    [Route("api/indisponibilites")]
    [ApiController]
    public class IndisponibilitesController : CrudController<IIndisponibiliteService, IndisponibiliteViewModel, int>
    {
        new private readonly IIndisponibiliteService _service;
        private readonly PPE2APIContext _context;
        public IndisponibilitesController(IIndisponibiliteService service, PPE2APIContext context) : base(service)
        {
            _service = service;
            _context = context;
        }

        [HttpGet("date")]
        public IEnumerable<IndisponibiliteViewModel> GetByDate()
        {
            return this._service.GetByDate();
        }

        [HttpGet("search")]
        public IEnumerable<IndisponibiliteViewModel> SearchDate(string date)
        {
            return this._service.SearchDate(date);
        }

        [HttpGet("prof/{profId}")]
        public IEnumerable<IndisponibiliteViewModel> SearchByProf([FromRoute]int profId)
        {
            return this._service.SearchByProf(profId);
        }

        [HttpPost("control")]
        public async Task<IActionResult> addIndisponibilite(Indisponibilite indisp)
        {   
            if (indisp.Start > indisp.End)
                return BadRequest("Date de fin inférieure à la date de début");
            
            await _context.Indisponibilites.AddAsync(indisp);
            await _context.SaveChangesAsync();
            return Ok(indisp);
        }

        [HttpPut("control/{id}")]
        public async Task<IActionResult> Put(int id, Indisponibilite indisponibilite)
        {
            var dbIndisps = _context.Indisponibilites.FirstOrDefault(x => x.Id == id);
            
            dbIndisps.Start = indisponibilite.Start;
            dbIndisps.End = indisponibilite.End;
            dbIndisps.ProfesseurId = indisponibilite.ProfesseurId;
            
            if (dbIndisps.Start > dbIndisps.End)
                return BadRequest("Date de fin inférieure à la date de début");
            
            _context.Indisponibilites.Update(dbIndisps);
            await _context.SaveChangesAsync();
            return Ok(indisponibilite);
        }
    }
}