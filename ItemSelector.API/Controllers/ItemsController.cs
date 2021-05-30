using ItemSelector.Application.Contracts;
using ItemSelector.Application.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ItemSelector.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly IItemsRepository _repository;

        public ItemsController(IItemsRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<GetItemsResponse>> GetItems([FromQuery] GetItemsRequest request)
        {
            return await _repository.GetItemsAsync(request);
        }

    }
}
