using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineChat.Models
{
    [Keyless]
    public class Pblock_Message
    {
        public int id { get; set; }
        public Message pmessage_block { get; set; }
        public ApplicationUser user_block { get; set; }
    }
}
