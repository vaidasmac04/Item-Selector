using ItemSelector.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ItemSelector.Persistence
{
    public interface IDataContext 
    {
        DbSet<Item> Items { get; set; }
        DbSet<Category> Categories { get; set; }
        Task<int> SaveChangesAsync();
    }
}
