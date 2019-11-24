using Microsoft.AspNetCore.Mvc;
using Planning.API.Business.Services.Interface;
using Planning.API.Business.ViewModels;
using TechCloud.Tools.Mvc;

namespace Planning.API.Controllers
{
    [Route("api/indisponibilites")]
    [ApiController]
    public class IndisponibilitesController : CrudController<IIndisponibiliteService, IndisponibiliteViewModel, int>
    {
        public IndisponibilitesController(IIndisponibiliteService service) : base(service)
        {
        }
    }
}