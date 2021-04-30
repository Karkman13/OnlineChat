using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineChat.ViewModel
{
    public class RoomViewModel
    {
        public string name { get; set; }
        public string adminId { get; set; }
        public ICollection<MessageViewModel> messages { get; set; }
        public ICollection<ApplicationUserViewModel> users { get; set; }

    }
}
