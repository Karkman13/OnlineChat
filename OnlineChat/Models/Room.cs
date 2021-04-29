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
        //public ICollection<Message> messages { get; set; }
        //public ICollection<ApplicationUser> users { get; set; }
        //public ICollection<Message> block_messages { get; set; }
        public bool isGroup { get; set; }
    }
}
