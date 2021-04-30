using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using OnlineChat.Data;
using OnlineChat.Models;

namespace OnlineChat.Hubs
{
    [Authorize]
    public class ChatHub : Hub
    {
        private readonly ApplicationDbContext context;

        public ChatHub(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task SendToRoom(string roomName, string message)
        {
            try
            {
                var user = context.Users.Where(u => u.UserName == IdentityName).FirstOrDefault();
                var room = context.Rooms.Where(r => r.name == roomName).FirstOrDefault();
                if (!string.IsNullOrEmpty(message.Trim()))
                {
                    var msg = new Message()
                    {
                        content = Regex.Replace(message, @"(?i)<(?!img|a|/a|/img).*?>", string.Empty),
                        sender = user,
                        toroom = room,
                        time = DateTime.Now
                    };
                    context.Messages.Add(msg);
                    context.SaveChanges();
                    await Clients.Group(roomName).SendAsync("newMessage", msg);
                }
            }
            catch (Exception)
            {
                await Clients.Caller.SendAsync("onError", "Message not send! Message should be 1 - 500 characters.");
            }
        }

        public async Task CreateRoom(string roomName, bool is_group)
        {
            try
            {
                Match match = Regex.Match(roomName, @"^\w+( \w+)*$");
                if (!match.Success)
                {
                    await Clients.Caller.SendAsync("onError", "Invalid room name!\nRoom name must contain only letters and numbers.");
                }
                else if(roomName.Length < 5 || roomName.Length > 100)
                {
                    await Clients.Caller.SendAsync("onError", "Room name must be between 5-100 characters!");
                }
                else if (context.Rooms.Any(r => r.name == roomName))
                {
                    await Clients.Caller.SendAsync("onError", "Another chat room with this name exists");
                }
                else
                {
                    var user = context.Users.Where(u => u.UserName == IdentityName).FirstOrDefault();
                    var room = new Room()
                    {
                        name = roomName,
                        adminid = user,
                        isGroup = is_group
                    };
                    context.Rooms.Add(room);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                await Clients.Caller.SendAsync("onError", "Couldn't create chat room: " + ex.Message);
            }
        }

        //public IEnumerable<Room> GetRooms()
        //{

        //        var user = context.Users.Where(u => u.UserName == IdentityName).FirstOrDefault();
        //    var rooms = from r in context.Rooms join c in context.Chats on user.Id equals c.userId;
        //    return rooms;
        //}

        //public IEnumerable<Message> GetMessageHistory(string roomName)
        //{
        //    var messageHistory = context.Messages.Where(m => m.toroom.name == roomName && m.)
        //            .Include(m => m.FromUser)
        //            .Include(m => m.ToRoom)
        //            .OrderByDescending(m => m.Timestamp)
        //            .Take(20)
        //            .AsEnumerable()
        //            .Reverse()
        //            .ToList();
        //}
        private string IdentityName
        {
            get { return Context.User.Identity.Name; }
        }
    }
}
