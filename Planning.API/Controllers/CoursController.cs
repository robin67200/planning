using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Planning.API.Business.Services.Interface;
using Planning.API.Business.ViewModels;
using TechCloud.Tools.Mvc;

namespace Planning.API.Controllers
{
    [Route("api/cours")]
    [ApiController]
    public class CoursController : CrudController<ICoursService, CoursViewModel, int>
    {
        public CoursController(ICoursService service) : base(service)
        {
        }

        [HttpPost("schedules")]
        public IEnumerable<CoursViewModel> GetSchedules([FromBody] SchedulesFilterViewModel filters)
        {
            return _service.CoursSchedules(filters.ClasseId, filters.ProfId, filters.MatiereId);
        }
    }
}