using System;
using System.Collections.Generic;
using System.Linq;
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
        private readonly IIndisponibiliteService _service;
        public IndisponibilitesController(IIndisponibiliteService service) : base(service)
        {
            this._service = service;
        }

        [HttpGet("date")]
        public IEnumerable<IndisponibiliteViewModel> GetByDate()
        {
            return this._service.GetByDate();
        }

        [HttpGet("search")]
        public IEnumerable<IndisponibiliteViewModel> SearchDate(string date)
        {
            return this._service.SearchDate(date);
        }

        [HttpGet("prof/{profId}")]
        public IEnumerable<IndisponibiliteViewModel> SearchByProf([FromRoute]int profId)
        {
            return this._service.SearchByProf(profId);
        }
    }
}