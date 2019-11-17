using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Planning.API.Business.Services.Interface;
using Planning.API.Business.ViewModels;
using TechCloud.Tools.Mvc;

namespace Planning.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassesController : CrudController<IClassesService, ClasseViewModel, int> 
    {
        private readonly IProfsService _profs;

        public ClassesController (IClassesService service, IProfsService profs, IElevesService eleves): base (service)
        {
            this._profs = profs;
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

    
    }
}