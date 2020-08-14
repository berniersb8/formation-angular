using Beer.Persistence.Model;
using Beer.Persistence.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Beer.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BeersController : ControllerBase
    {
        private readonly IBeerRepository _beerRepository;

        public BeersController(IBeerRepository beerRepository)
        {
            _beerRepository = beerRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetBeers()
        {
            return Ok(_beerRepository.GetList());
        }

        [HttpPost]
        public async Task<IActionResult> Save([FromBody] BeerModel beer)
        {
            _beerRepository.Save(beer);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            _beerRepository.Delete(id);
            return Ok();
        }
    }
}
