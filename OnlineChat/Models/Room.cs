using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineChat.Models
{
    public class Room
    {
        public int id { get; set; }
        public string name { get; set; }
        public ApplicationUser adminid { get; set; }
        public bool isGroup { get; set; }
        public ICollection<GBlock_Message> gBlock_Messages { get; set; }
        public ICollection<Chats> chats { get; set; }
        public ICollection<Message> messages { get; set; }


    }
}
