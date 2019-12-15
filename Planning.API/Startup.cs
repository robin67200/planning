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
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
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
            Mapper.Reset();
            services.AddDbContext<PPE2APIContext>(x => x.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));

            IdentityBuilder builder = services.AddIdentityCore<User>(opt => {
                opt.Password.RequireDigit = false;
                opt.Password.RequiredLength = 6;
                opt.Password.RequireNonAlphanumeric = false;
                opt.Password.RequireUppercase = false;
            });

            builder = new IdentityBuilder(builder.UserType, typeof(Role), builder.Services);
            builder.AddEntityFrameworkStores<PPE2APIContext>();
            builder.AddRoleValidator<RoleValidator<Role>>();
            builder.AddRoleManager<RoleManager<Role>>();
            builder.AddSignInManager<SignInManager<User>>();

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
                services.AddMvc(options => 
                {
                    var policy = new AuthorizationPolicyBuilder()
                        .RequireAuthenticatedUser()
                        .Build();
                   // options.Filters.Add(new AuthorizeFilter(policy));
                }
            )
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
                .AddJsonOptions(opt => {
                    opt.SerializerSettings.ReferenceLoopHandling = 
                    Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                });
                
                
                services.AddAuthorization(options => {
                options.AddPolicy("RequireAdminRole", policy => policy.RequireRole("Admin"));
                options.AddPolicy("ModerateDataRole", policy => policy.RequireRole("Admin", "Moderator"));
                options.AddPolicy("VipOnle", policy => policy.RequireRole("VIP"));
            });
            

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

            services.AddCors();
            services.AddTransient<Seed>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
         public void Configure(IApplicationBuilder app, IHostingEnvironment env, Seed seeder )  //
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
            // seeder.SeedUsers();
            app.UseAuthentication();
            // app.UseHttpsRedirection();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc(routes => 
            {
                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new {controller = "Fallback", action = "Index"}
                );
            });
            
        }
    }
}
