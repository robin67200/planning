using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Planning.API.Business.Services.Interface;
using Planning.API.Business.ViewModels;
using TechCloud.Tools.Mvc;

namespace Planning.API.Controllers
{
    [Route("api/annees")]
    [ApiController]
    public class AnneesController : CrudController<IAnneeService, AnneeViewModel, int>
    {
        public AnneesController(IAnneeService service) : base(service)
        {
        }

        [HttpPost("bacon")]
        public async Task<IActionResult> PostAnnee([FromBody] AnneeViewModel model)
        {
            var result = await _service.CreateAnnee(model);
            return Ok(model);
        }
    }
}