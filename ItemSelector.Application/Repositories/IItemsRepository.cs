using ItemSelector.Application.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ItemSelector.Application.Repositories
{
    public interface IItemsRepository
    {
        Task<GetItemsResponse> GetItemsAsync(GetItemsRequest request);
    }
}
