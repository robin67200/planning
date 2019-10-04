using Microsoft.AspNetCore.Mvc;
using Planning.API.Business.Services.Interface;
using Planning.API.Business.ViewModels;
using TechCloud.Tools.Mvc;

namespace Planning.API.Controllers
{
    [Route("api/niveaux")]
    [ApiController]
    public class NiveauxController : CrudController<INiveauService, NiveauViewModel, int>
    {
        public NiveauxController(INiveauService service) : base(service)
        {
        }
    }
}