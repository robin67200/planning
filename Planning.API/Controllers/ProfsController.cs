using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Planning.API.Business.Services.Interface;
using Planning.API.Business.ViewModels;
using TechCloud.Tools.Mvc;

namespace Planning.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfsController : CrudController<IProfsService, ProfViewModel, int>
    {
        private readonly IMatieresService _matieres;

        public ProfsController (IProfsService service, IMatieresService matieres) : base(service)
        {
            this._matieres = matieres;
        }

        [HttpGet("{id}/matieres/availables")]
        public IEnumerable<MatiereViewModel> GetAvailables([FromRoute]int id)
        {
            return this._matieres.GetProfAvailables(id);
        }

        [HttpPut("{id}/matieres/{matiereId}")]
        public IActionResult AddMatiere([FromRoute]int id, [FromRoute]int matiereId)
        {
            ProfMatiereViewModel model = new ProfMatiereViewModel()
            {
                ProfId = id,
                MatiereId = matiereId
            };

            this._service.AddMatiere(model);
            return Ok();
        }

        [HttpDelete("{id}/matieres/{matiereId}")]
        public IActionResult RemoveMatiere([FromRoute] int id, [FromRoute] int matiereId)
        {
            ProfMatiereViewModel model = new ProfMatiereViewModel()
            {
                ProfId = id,
                MatiereId = matiereId
            };
            this._service.RemoveMatiere(model);
            return Ok();
        }
    }
}