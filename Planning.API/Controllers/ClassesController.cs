using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Planning.API.Business.Services.Interface;
using Planning.API.Business.ViewModels;
using Planning.API.Models;
using TechCloud.Tools.Mvc;

namespace Planning.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassesController : CrudController<IClassesService, ClasseViewModel, int> 
    {
        private readonly IProfsService _profs;
        private readonly ICoursService _cours;

        public ClassesController (IClassesService service, IProfsService profs, IElevesService eleves, ICoursService cours): base (service)
        {
            this._profs = profs;
            this._cours = cours;
        }

          [HttpPost("perso")]
        public async Task<IActionResult> PostClasse([FromBody] ClasseViewModel model)
        {
            var result = await _service.CreateClasse(model);
            return Ok(model);
        }

        [HttpGet("{id}/full")]
        public async Task<IActionResult> GetByIdFullAsync([FromRoute]int id)
        {
            var classe = await this._service.GetByIdFullAsync(id);
            return Ok(classe);
        }

        

        [HttpPut("{id}/profs/{profId}")]
        public IActionResult AddProf([FromRoute]int id, [FromRoute] int profId)
        {

            ProfClasseViewModel model = new ProfClasseViewModel()
            {
                ClasseId = id,
                ProfId = profId
            };
            model.ClasseId = id;
            this._service.AddProf(model);
            return Ok();
        }

        [HttpDelete("{id}/profs/{profId}")]
        public IActionResult RemoveProf([FromRoute]int id, [FromRoute] int profId)
        {
            ProfClasseViewModel model = new ProfClasseViewModel()
            {
                ClasseId = id,
                ProfId = profId
            };
            model.ClasseId = id;
            this._service.RemoveProf(model);
            return Ok();
        }

        [HttpGet("{id}/profs/classe")]
        public IEnumerable<ProfViewModel> GetProfs([FromRoute]int id)
        {
            return this._profs.GetProfsClasse(id);
        }

        [HttpPut("{id}/cours/{coursId}")]
        public IActionResult AddCours([FromRoute] int id, [FromRoute] int coursId)
        {
            CoursClasse model = new CoursClasse();
            {
               model.ClasseId = id;
               model.CoursId = coursId;
            }; 
            this._service.AddCours(model);
            return Ok();
        }

        [HttpDelete("{id}/cours/{coursId}")]
        public IActionResult RemoveCours([FromRoute] int id, [FromRoute] int coursId)
        {
            CoursClasse model = new CoursClasse();
            {
               model.ClasseId = id;
               model.CoursId = coursId;
            }; 
            this._service.RemoveCours(model);
            return Ok();
        }

        [HttpGet("{id}/cours/availables")]
        public IEnumerable<CoursViewModel> GetAvailables([FromRoute]int id)
        {
            return this._cours.GetCoursAvailables(id);
        }

    
    }
}