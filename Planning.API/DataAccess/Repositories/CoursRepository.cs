using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Planning.API.DataAccess.Repositories.Interface;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.DataAccess.Repositories {

    public class CoursRepository : GenericRepository<Cours>, ICoursRepository
    {
        private readonly PPE2APIContext _context;
        public CoursRepository(PPE2APIContext context) : base(context)
        {
            this._context = context;
        }
        //public override async Task<List<Cours>> GetAllAsync()
        //{
        //    return await DbSet.Include(x => x.ProgrammeThemes).ToListAsync();
        //}
        public override async Task<Cours> GetByIdAsync(object id)
        {
            return await DbSet
                .Include(c => c.CoursClasses)
                    .ThenInclude(c => c.Classe)
                .FirstOrDefaultAsync(x => x.Id == id.ToInt());
        }

        public IEnumerable<Cours> GetFiltered(int? classeId, int? profId, int? matiereId)
        {
            var predicate = PredicateBuilder.True<Cours>();

            if(classeId.HasValue)
                predicate = predicate.And(c => c.CoursClasses.All(e => e.ClasseId == classeId));

            if (profId.HasValue)
                predicate = predicate.And(c => c.ProfesseurId == profId);

            if (matiereId.HasValue)
                predicate = predicate.And(c => c.MatiereId== matiereId);

            return DbSet
                .Include(x => x.CoursClasses)
                .Where(predicate);
        }

        public void AddClasses(IEnumerable<CoursClasse> classes)
        {
            ((PPE2APIContext)DbContext).CoursClasses.AddRange(classes.ToArray());
        }
        public IEnumerable<Cours> GetCoursAvailables(int classeId)
        {
            return _context.Cours.Include(c => c.CoursClasses).Where(m => m.CoursClasses.All(a => a.ClasseId != classeId));
        }

        

        public void AddCours(Cours cours)
        {

            // cours.Start = passwordHash;
            // user.PasswordSalt = passwordSalt;

            _context.Cours.AddAsync(cours);
            _context.SaveChangesAsync();

        }

       


    }
}
public static class PredicateBuilder
{
    public static Expression<Func<T, bool>> True<T>() { return f => true; }
    public static Expression<Func<T, bool>> False<T>() { return f => false; }

    public static Expression<Func<T, bool>> Or<T>(this Expression<Func<T, bool>> expr1,
                                                        Expression<Func<T, bool>> expr2)
    {
        var invokedExpr = Expression.Invoke(expr2, expr1.Parameters.Cast<Expression>());
        return Expression.Lambda<Func<T, bool>>
              (Expression.OrElse(expr1.Body, invokedExpr), expr1.Parameters);
    }

    public static Expression<Func<T, bool>> And<T>(this Expression<Func<T, bool>> expr1,
                                                         Expression<Func<T, bool>> expr2)
    {
        var invokedExpr = Expression.Invoke(expr2, expr1.Parameters.Cast<Expression>());
        return Expression.Lambda<Func<T, bool>>
              (Expression.AndAlso(expr1.Body, invokedExpr), expr1.Parameters);
    }

    
}