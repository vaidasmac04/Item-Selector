using ItemSelector.Application.Dtos;
using ItemSelector.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ItemSelector.Application.Contracts
{
    public class GetItemsResponse
    {
        public Dictionary<string, List<ItemDto>> Items{ get; set; }
    }
}
