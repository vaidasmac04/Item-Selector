using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ItemSelector.Application.Contracts
{
    public class GetItemsRequest
    {
        public string Season { get; set; }
        public bool IsOneDay { get; set; }
        public double Distance { get; set; }
    }
}
