using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ItemSelector.Domain.Entities
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double? AtLeast { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }

    }
}
