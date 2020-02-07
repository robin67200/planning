using Microsoft.AspNetCore.Mvc;
using Planning.API.Business.Services.Interface;
using Planning.API.Business.ViewModels;
using TechCloud.Tools.Mvc;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.Rendering;
using Planning.API.Models;
using System.Threading.Tasks;

namespace Planning.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ElevesController : CrudController<IElevesService, EleveViewModel, int>
    {
        public ElevesController(IElevesService service) : base(service)
        {

        }

         [HttpPost("perso")]
        public async Task<IActionResult> PostEleve([FromBody] EleveViewModel model)
        {
            var result = await _service.CreateEleve(model);
            return Ok(model);
        }

        [HttpGet("nom/{nom}")]
        public IEnumerable<EleveViewModel> GetByName([FromRoute]string nom)
        {
             
            return this._service.GetByName(nom);
        }
        
    }
}