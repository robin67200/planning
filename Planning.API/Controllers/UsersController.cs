using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Planning.API.DataAccess.Repositories.Interface;
using Planning.API.Dtos;
using Planning.API.Models;

namespace Planning.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly PPE2APIContext _context;
        private readonly IUsersRepository _repo;
        private readonly IMapper _mapper;
        public UsersController(IUsersRepository repo, IMapper mapper, PPE2APIContext context)
        {
            _mapper = mapper;
            _repo = repo;
            _context = context;

        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();

            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);

            return Ok(usersToReturn);
        }
        
        [HttpGet("{id}", Name = "GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);

            var userToReturn = _mapper.Map<UserForDetailedDto>(user);

            return Ok(userToReturn);
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var user = await _repo.RemoveUser(id);

            return Ok(user);
        }
    }
}