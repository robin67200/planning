using Microsoft.AspNetCore.Mvc;
using Planning.API.Business.Services.Interface;
using Planning.API.Business.ViewModels;
using TechCloud.Tools.Mvc;
using System.Threading.Tasks;

namespace Planning.API.Controllers
{
    [Route("api/niveaux")]
    [ApiController]
    public class NiveauxController : CrudController<INiveauService, NiveauViewModel, int>
    {
        public NiveauxController(INiveauService service) : base(service)
        {
        }

        [HttpPost("perso")]
        public async Task<IActionResult> PostNiveau([FromBody] NiveauViewModel model)
        {
            var result = await _service.CreateNiveau(model);
            return Ok(model);
        }

    }
}