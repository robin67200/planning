using Microsoft.AspNetCore.Mvc;
using Planning.API.Business.Services.Interface;
using Planning.API.Business.ViewModels;
using TechCloud.Tools.Mvc;

namespace Planning.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MatieresController : CrudController<IMatieresService, MatiereViewModel, int>
    {
        public MatieresController(IMatieresService service) : base(service)
        {
        }

    }
}