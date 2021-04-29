using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using OnlineChat.Models;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace OnlineChat.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            :base(options)
        {
        }

        public DbSet<Room> Rooms { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<ApplicationUser> AppUsers { get; set; }

        public DbSet<Chats> Chats { get; set; }
        public DbSet<Pblock_Message> Pblock_Messages { get; set; }
        public DbSet<GBlock_Message> GBlock_Messages { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            //builder.Entity<Message>(entity =>
            //{
            //    entity.Property(e => e.id).IsRequired();

            //    entity.Property(e => e.content)
            //    .IsRequired()
            //    .HasMaxLength(500);

            //    entity.HasOne(e=>e.sender).WithMany(p=>p.block_messages).HasForeignKey

            //});
        }
    }
}
