using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineChat.Models
{
    public class Message
    {
        public int id { get; set; }
        public string content { get; set; }
        public ApplicationUser sender { get; set; }
        public Room toroom { get; set; }
        public DateTime time { get; set; }
        public Message replayed { get; set; }
        
        
        //public ICollection<Message> messages { get; set; }
        //public ICollection<GBlock_Message> gBlock_Messages { get; set; }
    }
}
