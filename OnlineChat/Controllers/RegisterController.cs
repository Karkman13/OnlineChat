using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using OnlineChat.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineChat.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("[controller]")]
    public class RegisterController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public RegisterController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }
        [HttpGet("sendm")]
        public string SendM(string username, string email, string passwod)
        {
            System.Diagnostics.Debug.WriteLine("S O M O T H I N G");
            return username + email + passwod;
        }
        [HttpGet("sendmm")]
        public string SendMM()
        {
            return "succes";
        }
        //public IActionResult Index()
        //{
        //    return View();
        //}
    }
}
