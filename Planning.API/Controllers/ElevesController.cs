using Microsoft.AspNetCore.Mvc;
using Planning.API.Business.Services.Interface;
using Planning.API.Business.ViewModels;
using TechCloud.Tools.Mvc;

namespace Planning.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ElevesController : CrudController<IElevesService, EleveViewModel, int>
    {
        public ElevesController (IElevesService service) : base(service)
        {

        }
        

    }
}