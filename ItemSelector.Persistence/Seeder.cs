using ItemSelector.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ItemSelector.Persistence
{
    public class Seeder
    {
        public static void Seed(DataContext context)
        {
            SeedCategories(context);
            SeedItems(context);

            context.SaveChanges();
        }

        private static void SeedCategories(DataContext context)
        {
            List<Category> categories = new();
            categories.Add(new Category { Id = 1, Name = "general" });
            categories.Add(new Category { Id = 2, Name = "warm weather" });
            categories.Add(new Category { Id = 3, Name = "cold weather" });
            categories.Add(new Category { Id = 4, Name = "overnight" });
            context.Categories.AddRange(categories);
        }

        private static void SeedItems(DataContext context)
        {
            List<Item> items = new();

            //general: 1
            items.Add(new Item
            {
                Name = "Phone",
                CategoryId = 1
            });

            items.Add(new Item
            {
                Name = "Water",
                CategoryId = 1
            });

            items.Add(new Item
            {
                Name = "Wallet",
                CategoryId = 1
            });

            items.Add(new Item
            {
                Name = "Passport",
                CategoryId = 1
            });

            items.Add(new Item
            {
                Name = "Portable phone charger",
                CategoryId = 1,
                AtLeast = 3
            });

            items.Add(new Item
            {
                Name = "Medicines",
                CategoryId = 1,
            });

            items.Add(new Item
            {
                Name = "Umbrella",
                CategoryId = 1
            });

            items.Add(new Item
            {
                Name = "Waterproof Phone Case",
                CategoryId = 1
            });

            items.Add(new Item
            {
                Name = "Spare Clothes",
                CategoryId = 1,
                AtLeast = 5
            });

            items.Add(new Item
            {
                Name = "Food",
                CategoryId = 1,
                AtLeast = 2
            });

            items.Add(new Item
            {
                Name = "Matches",
                CategoryId = 1
            });

            items.Add(new Item
            {
                Name = "Comfortable shoes",
                CategoryId = 1
            });

            items.Add(new Item
            {
                Name = "Kitchen tools",
                CategoryId = 1
            });

            items.Add(new Item
            {
                Name = "Towel",
                CategoryId = 1
            });

            items.Add(new Item
            {
                Name = "Headphones",
                CategoryId = 1
            });

            //warm weather: 2
            items.Add(new Item
            {
                Name = "Sun Hat",
                CategoryId = 2
            });

            items.Add(new Item
            {
                Name = "Sun cream",
                CategoryId = 2,
                AtLeast = 5
            });

            items.Add(new Item
            {
                Name = "Bug repellent",
                CategoryId = 2,
                AtLeast = 5
            });

            items.Add(new Item
            {
                Name = "Swimsuit",
                CategoryId = 2,
            });
            

            //cold weather: 3
            items.Add(new Item
            {
                Name = "Gloves",
                CategoryId = 3
            });

            items.Add(new Item
            {
                Name = "Scarf",
                CategoryId = 3
            });

            //overnight: 4
            items.Add(new Item
            {
                Name = "Tent",
                CategoryId = 4
            });

            items.Add(new Item
            {
                Name = "Pillow",
                CategoryId = 4
            });

            items.Add(new Item
            {
                Name = "Sleeping bag",
                CategoryId = 4
            });

            items.Add(new Item
            {
                Name = "Flashlight",
                CategoryId = 4
            });

            items.Add(new Item
            {
                Name = "Hygiene tools",
                CategoryId = 4
            });

            context.AddRange(items);
        }

    }
}
