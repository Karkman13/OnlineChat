using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using OnlineChat.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace OnlineChat.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("[controller]")]
    public class LoginController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        public LoginController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }
        [HttpGet("hello")]
        public async Task HelloWorld()
        {
            System.Diagnostics.Debug.WriteLine("S O M O T H I N G");
            var user = new ApplicationUser { UserName = "Karkman13" };
            var newuser = await _userManager.CreateAsync(user, "QWEu!t3!tN24wJ!");
            System.Diagnostics.Debug.WriteLine(newuser.Succeeded);
        }
        [HttpGet("signin")]
        public async Task Login(string username)
        {
            System.Diagnostics.Debug.WriteLine(username);
            var result = await _signInManager.PasswordSignInAsync(username, "QWEu!t3!tN24wJ!", isPersistent: false, lockoutOnFailure: false);
            System.Diagnostics.Debug.WriteLine(result);
        }
    }
}
