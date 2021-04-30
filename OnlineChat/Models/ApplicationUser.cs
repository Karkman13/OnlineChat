using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineChat.Models
{
    public class ApplicationUser : IdentityUser
    {
        public ICollection<Message> messages { get; set; }
        public ICollection<Pblock_Message> pblock_Messages { get; set; }
        public ICollection <Chats> chats { get; set; }
        public ICollection <Room> rooms_admin { get; set; }
        public ICollection<GBlock_Message> gBlock_Messages { get; set; }

    }
}
