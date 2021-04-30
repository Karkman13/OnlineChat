using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineChat.Models
{

    public class GBlock_Message
    {
        public int id { get; set; }
        public Message gmessage_block { get; set; }
        public Room groom_block { get; set; }
    }
}
