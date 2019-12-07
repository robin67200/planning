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
    [Route("api/cours")]
    [ApiController]
    public class CoursController : CrudController<ICoursService, CoursViewModel, int>
    {
        private readonly PPE2APIContext _context;
        public CoursController(ICoursService service, PPE2APIContext context) : base(service)
        {
            _context = context;
        }

        [HttpPost("schedules")]
        public IEnumerable<CoursViewModel> GetSchedules([FromBody] SchedulesFilterViewModel filters)
        {
            return _service.CoursSchedules(filters.ClasseId, filters.ProfId, filters.MatiereId);
        }

        [HttpPost("control")]
        public async Task<IActionResult> addCours(Cours cours)
        {
            var indisp = _context.Indisponibilites.Where(a => a.ProfesseurId == cours.ProfesseurId).ToList();

            foreach (var item in indisp)
            {
                if(cours.Start >= item.Start && cours.Start <= item.End)
                    return BadRequest("Prof indisponible");
                if(cours.End >= item.Start && cours.End <= item.End)
                    return BadRequest("Prof indisponible");                  
            }
            
            if (cours.Start > cours.End)
                return BadRequest("Date de fin inférieure à la date de début");
            
            await _context.Cours.AddAsync(cours);
            await _context.SaveChangesAsync();
            return Ok(cours);
        }


        [HttpPut("control/{id}")]
        public async Task<IActionResult> Put(int id, Cours cours)
        {
            var dbCours = _context.Cours.FirstOrDefault(x => x.Id == id);
            dbCours.Title = cours.Title;
            dbCours.Start = cours.Start;
            dbCours.End = cours.End;
            dbCours.Room = cours.Room;
            dbCours.Color = cours.Color;
            dbCours.Color2 = cours.Color2;
            dbCours.MatiereId = cours.MatiereId;
            dbCours.ProfesseurId = cours.ProfesseurId;
            
            var indisp = _context.Indisponibilites.Where(a => a.ProfesseurId == dbCours.ProfesseurId).ToList();

            foreach (var item in indisp)
            {
                if(dbCours.Start >= item.Start && dbCours.Start <= item.End)
                    return BadRequest("Prof indisponible");
                if(dbCours.End >= item.Start && dbCours.End <= item.End)
                    return BadRequest("Prof indisponible");                  
            }
            
            if (dbCours.Start > dbCours.End)
                return BadRequest("Date de fin inférieure à la date de début");
            
            _context.Cours.Update(dbCours);
            await _context.SaveChangesAsync();
            return Ok(cours);
        }
    }
}