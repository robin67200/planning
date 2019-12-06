using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Planning.API.Business.Services;
using Planning.API.Business.Services.Interface;
using Planning.API.DataAccess.Repositories;
using Planning.API.DataAccess.Repositories.Interface;
using Planning.API.Models;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAutoMapper(typeof(MappingToModel), typeof(MappingToDomain));
            services.AddScoped<IClassesService, ClassesService>();
            services.AddScoped<IElevesService, ElevesService>();
            services.AddScoped<IMatieresService, MatieresService>();
            services.AddScoped<IProfsService, ProfsService>();
            services.AddScoped<ICoursService, CoursService>();
            services.AddScoped<INiveauService, NiveauService>();
            services.AddScoped<IAnneeService, AnneeService>();
            services.AddScoped<IIndisponibiliteService, IndisponibiliteService>();

            services.AddScoped<IAuthRepository, AuthRepository>();
            services.AddScoped<IAnneesRepository, AnneesRepository>();
            services.AddScoped<INiveauxRepository, NiveauxRepository>();
            services.AddScoped<IClassesRepository, ClassesRepository>();
            services.AddScoped<IElevesRepository, ElevesRepository>();
            services.AddScoped<IMatieresRepository, MatieresRepository>();
            services.AddScoped<IProfsRepository, ProfsRepository>();
            services.AddScoped<ICoursRepository, CoursRepository>();
            services.AddScoped<IIndisponibilitesRepository, IndisponibilitesRepository>();
            services.AddScoped<IUsersRepository, UsersRepository>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IDbContext>(f => {
                return f.GetService<PPE2APIContext>();
            });
            
            
            services.AddDbContext<PPE2APIContext>(x => x.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddCors();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options => {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII
                            .GetBytes(Configuration.GetSection("AppSettings:Token").Value)),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
         public void Configure(IApplicationBuilder app, IHostingEnvironment env )  //
        {
            if (env.IsDevelopment())
        {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            app.UseAuthentication();
            app.UseHttpsRedirection();
            app.UseMvc();
            
        }
    }
}
