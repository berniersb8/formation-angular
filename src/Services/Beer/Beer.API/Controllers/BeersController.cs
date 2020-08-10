using Beer.API.DTO;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Beer.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BeersController : ControllerBase
    {
        public BeersController()
        {
        }

        [HttpGet]
        public async Task<IActionResult> GetBeers()
        {
            var beers = new List<BeerDTO>()
            {
                new BeerDTO() { Id = 1, Name = "Criminelle", Description = "Imperial Stout 9% Bière saisonnière", Type = BeerType.BLACK },
                new BeerDTO() { Id = 2, Name = "MONARK", Description = "Imperial IPA 7%", Type = BeerType.API },
                new BeerDTO() { Id = 3, Name = "ALEXANDER KEITHS RED", Description = "Cette ale douce et bien équilibrée se distingue par sa couleur rouge", Type = BeerType.RED },
                new BeerDTO() { Id = 4, Name = "BECK'S", Description = "Beck’s est une lager allemande classique qui se distingue par son", Type = BeerType.WHITE },
                new BeerDTO() { Id = 5, Name = "Criminelle", Description = "Imperial Stout 9% Bière saisonnière", Type = BeerType.BLACK },
                new BeerDTO() { Id = 6, Name = "Criminelle", Description = "Imperial Stout 9% Bière saisonnière", Type = BeerType.BLACK },
                new BeerDTO() { Id = 7, Name = "Criminelle", Description = "Imperial Stout 9% Bière saisonnière", Type = BeerType.BLACK },
                new BeerDTO() { Id = 8, Name = "Criminelle", Description = "Imperial Stout 9% Bière saisonnière", Type = BeerType.BLACK },
                new BeerDTO() { Id = 9, Name = "Criminelle", Description = "Imperial Stout 9% Bière saisonnière", Type = BeerType.BLACK },
                new BeerDTO() { Id = 10, Name = "Criminelle", Description = "Imperial Stout 9% Bière saisonnière", Type = BeerType.BLACK },
                new BeerDTO() { Id = 11, Name = "Criminelle", Description = "Imperial Stout 9% Bière saisonnière", Type = BeerType.BLACK },
                new BeerDTO() { Id = 12, Name = "Criminelle", Description = "Imperial Stout 9% Bière saisonnière", Type = BeerType.BLACK },
                new BeerDTO() { Id = 13, Name = "Criminelle", Description = "Imperial Stout 9% Bière saisonnière", Type = BeerType.BLACK },
                new BeerDTO() { Id = 14, Name = "Criminelle", Description = "Imperial Stout 9% Bière saisonnière", Type = BeerType.BLACK }
            };

            return Ok(beers);
        }
    }
}
