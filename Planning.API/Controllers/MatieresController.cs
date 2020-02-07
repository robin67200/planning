using Microsoft.AspNetCore.Mvc;
using Planning.API.Business.Services.Interface;
using Planning.API.Business.ViewModels;
using TechCloud.Tools.Mvc;
using System.Threading.Tasks;


namespace Planning.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MatieresController : CrudController<IMatieresService, MatiereViewModel, int>
    {
        public MatieresController(IMatieresService service) : base(service)
        {
        }
         [HttpPost("perso")]
        public async Task<IActionResult> PostMatiere([FromBody] MatiereViewModel model)
        {
            var result = await _service.CreateMatiere(model);
            return Ok(model);
        }
    }
}