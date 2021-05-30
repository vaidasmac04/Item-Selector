using ItemSelector.Application.Contracts;
using ItemSelector.Application.Dtos;
using ItemSelector.Domain.Entities;
using ItemSelector.Persistence;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ItemSelector.Application.Repositories
{
    public class ItemsRepository : IItemsRepository
    {
        private readonly IDataContext _context;

        public ItemsRepository(IDataContext context)
        {
            _context = context;
        }
        public async Task<GetItemsResponse> GetItemsAsync(GetItemsRequest request)
        {
            var items = await _context.Items
                .Include(i => i.Category)
                .Where(i => (IsDistanceEnough(i.AtLeast, request.Distance) 
                && (i.Category.Name == request.Season
                || i.Category.Name == "general"))
                || (!request.IsOneDay && i.Category.Name == "overnight"))
                .ToListAsync();

            var categories = _context.Categories.ToList();

            var groupedItems = items.GroupBy(i => i.Category.Name);

            GetItemsResponse response = new()
            {
                Items = new Dictionary<string, List<ItemDto>>()
            };

            foreach (var group in groupedItems)
            {
                List<ItemDto> groupValues = new();

                foreach (var value in group)
                {
                    groupValues.Add(GetItemDto(value));
                }

                response.Items.Add(group.Key, groupValues);
            }

            return response;
        }

        private ItemDto GetItemDto(Item item)
        {
            return new ItemDto
            {
                Id = item.Id,
                Name = item.Name,
            };
        }

        private bool IsDistanceEnough(double? atLeast, double distance)
        {
            if(!atLeast.HasValue)
            {
                return true;
            }else
            {
                if (distance >= (double)atLeast)
                {
                    return true;
                }
            }

            return false;
        }
    }
}
