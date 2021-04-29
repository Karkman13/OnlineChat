using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineChat.Models
{
    [Keyless]
    public class GBlock_Message
    {
        public int id { get; set; }
        public Message gmessage_block { get; set; }
        public ApplicationUser guser_block { get; set; }
    }
}
