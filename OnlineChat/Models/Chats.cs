using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineChat.Models
{
    public class Chats
    {
        public int id { get; set; }
        public Room roomId { get; set; }
        public ApplicationUser userId { get; set; }
    }
}
