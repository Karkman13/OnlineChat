using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineChat.ViewModel
{
    public class MessageViewModel
    {
        public string content { get; set; }
        public string sender { get; set; }
        public string toroom { get; set; }
        public DateTime time { get; set; }
    }
}
