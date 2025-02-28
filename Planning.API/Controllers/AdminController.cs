using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Planning.API.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Planning.API.Dtos;
using Microsoft.AspNetCore.Identity;

namespace Planning.API.Controllers
{
    
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly PPE2APIContext _context;
        private readonly UserManager<User> _userManager;

        public AdminController(PPE2APIContext context, UserManager<User> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        // [Authorize(Policy = "RequireAdminRole")]
        
        [HttpGet("usersWithRoles")]

        public async Task<IActionResult> GetUsersWithRoles()
        {
            var userList = await (from user in _context.Users orderby user.UserName
                                    select new {
                                        ID = user.Id,
                                        Username = user.UserName,
                                        Roles = (from UserRole in user.UserRoles
                                                    join role in _context.Roles
                                                    on UserRole.RoleId
                                                    equals role.Id
                                                    select role.Name).ToList()
                                    }).ToListAsync();

            return Ok(userList);
        }

        // [Authorize(Policy = "RequireAdminRole")]
        [HttpPost("editRoles/{userName}")]
        public async Task<IActionResult> EditRoles(string userName, RoleEditDto roleEditDto)
        {
            var user = await _userManager.FindByNameAsync(userName);

            var userRoles = await _userManager.GetRolesAsync(user);

            var selectedRoles = roleEditDto.RoleNames;

            selectedRoles = selectedRoles ?? new string[] {};
            var result = await _userManager.AddToRolesAsync(user, selectedRoles.Except(userRoles));

            if (!result.Succeeded)
                return BadRequest("Failes to add to roles");

            result = await _userManager.RemoveFromRolesAsync(user, userRoles.Except(selectedRoles));

            if (!result.Succeeded)
                return BadRequest("Failed to remove the roles");

            return Ok(await _userManager.GetRolesAsync(user));

            
        }

        // [Authorize(Policy = "ModerateDataRole")]
        [HttpGet("DatasForModeration")]
        public IActionResult GetDataForModeration()
        {
            return Ok("Admins or moderators can see this");
        }
    }
}
