using AutoMapper;
using Planning.API.Business.ViewModels;
using Planning.API.DataAccess.Repositories.Interface;
using Planning.API.Dtos;
using Planning.API.Models;
using TechCloud.Tools.Business.Services;
using TechCloud.Tools.DataAccess.Infrastructure;

namespace Planning.API.Business.Services 
{
    public class MappingToModel: Profile
    {
        public MappingToModel()
        {
            AllowNullCollections = true;
            CreateMap<Classe, ClasseViewModel>();
            CreateMap<Eleve, EleveViewModel>();
            CreateMap<Matiere, MatiereViewModel>();
            CreateMap<Prof, ProfViewModel>();
            CreateMap<Cours, CoursViewModel>();
            CreateMap<Niveau, NiveauViewModel>();
            CreateMap<Annee, AnneeViewModel>();
            CreateMap<ProfMatiere, ProfMatiereViewModel>();
            CreateMap<Indisponibilite, IndisponibiliteViewModel>();
            CreateMap<User, UserForListDto>();
        }
    }

    public class MappingToDomain: Profile
    {
        public MappingToDomain()
        {
            CreateMap<ClasseViewModel, Classe>();
            CreateMap<EleveViewModel, Eleve>();
            CreateMap<MatiereViewModel, Matiere>();
            CreateMap<ProfViewModel, Prof>();
            CreateMap<CoursViewModel, Cours>();
            CreateMap<NiveauViewModel, Niveau>();
            CreateMap<AnneeViewModel, Annee>();
            CreateMap<ProfClasseViewModel, ProfClasse>();
            CreateMap<ProfMatiereViewModel, ProfMatiere>();
            CreateMap<IndisponibiliteViewModel, Indisponibilite>();
        }
    }

        public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
                .ForMember(dest => dest.Age, opt => {
                    opt.MapFrom(d => d.DateOfBirth.CalculateAge());
                });
            CreateMap<User, UserForDetailedDto>()
                .ForMember(dest => dest.Age, opt => {
                    opt.MapFrom(d => d.DateOfBirth.CalculateAge());
                });

            CreateMap<UserForRegisterDto, User>();
        }
    }
}