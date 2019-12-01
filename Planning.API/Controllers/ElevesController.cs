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

        [HttpGet("nom/{nom}")]
        public IEnumerable<EleveViewModel> GetByName([FromRoute]string nom)
        {
             
            return this._service.GetByName(nom);
        }
        
    }
}