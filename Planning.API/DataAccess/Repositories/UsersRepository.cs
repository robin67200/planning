using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Planning.API.DataAccess.Repositories.Interface;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.DataAccess.Repositories {

    public class UsersRepository : GenericRepository<User>, IUsersRepository
    {
    private readonly PPE2APIContext _context;
        public UsersRepository(PPE2APIContext context)
        {
            _context = context;

        }
        public void add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
            
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.ToListAsync();
            
            return users;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<User> RemoveUser(int id)
        {
            var users = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);
            _context.Remove(users);
            await _context.SaveChangesAsync();

            return users;
        }
    }
}