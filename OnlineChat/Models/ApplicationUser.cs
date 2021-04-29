using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineChat.Models
{
    public class ApplicationUser : IdentityUser
    {
        public ICollection<Room> rooms { get; set; }
        public ICollection<Pblock_Message> pblock_Messages { get; set; }
    }
}
