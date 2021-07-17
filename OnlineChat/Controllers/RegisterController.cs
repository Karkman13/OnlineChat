using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OnlineChat.Data;
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
        private readonly ApplicationDbContext _context;

        public RegisterController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager, ApplicationDbContext context)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _context = context;
        }
        [HttpPost("sendm")]
        public async Task<ActionResult> SendM(UserData userData)
        {
            var user = new ApplicationUser { UserName = userData.username, Email = userData.email };
            //var newuser = await _userManager.CreateAsync(user, "QWEu!t3!tN24wJ!");
            var result = await _userManager.CreateAsync(user, userData.password);
            if (result.Succeeded)
            {
                var loginresult = await _signInManager.PasswordSignInAsync(userData.username, userData.password, isPersistent: false, lockoutOnFailure: false);
                return new OkResult();
            }
            else
            {
                List<RegisterError> _registerErrors = new List<RegisterError>();
                foreach(var error in result.Errors)
                {
                    if(error.Code == "DuplicateUserName")
                    {
                        _registerErrors.Add(new RegisterError("username", error.Description));
                    }
                    if(error.Code == "DuplicateEmail")
                    {
                        _registerErrors.Add(new RegisterError("email", error.Description));
                    }
                }
                return new BadRequestObjectResult(_registerErrors);
            }
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
    public class UserData
    {
        public string username { get; set; }
        public string email { get; set; }
        public string password { get; set; }
    }

    public class RegisterError
    {
        public string fieldname { get; set; }
        public string errordescription { get; set; }
        public RegisterError()
        {

        }

        public RegisterError(string field, string error)
        {
            fieldname = field;
            errordescription = error;
        }
    }
}