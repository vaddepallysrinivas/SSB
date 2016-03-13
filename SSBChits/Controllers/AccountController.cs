using SSBChits.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace SSBChits.Controllers
{
     [AllowAnonymous]
    public class AccountController : Controller
    {
        //
        // GET: /Account/

         [Authorize]
        public ActionResult Login()
        {
            return View();
        }

         [HttpPost]
         public ActionResult Login(LoginModel model)
         {

            
             if (ModelState.IsValid)
             {
                 if (model.userName == "Srilaxmi" && model.Password == "12345")
                 {


                     FormsAuthenticationTicket ticket = new FormsAuthenticationTicket(1, model.userName, DateTime.Now, DateTime.Now.AddYears(1), true, model.userName, FormsAuthentication.FormsCookiePath);
                     HttpCookie cookie = new HttpCookie(FormsAuthentication.FormsCookieName, FormsAuthentication.Encrypt(ticket));

                     if (ticket.IsPersistent)
                     {
                         cookie.Expires = ticket.Expiration;
                     }
                     Response.Cookies.Add(cookie);
                     return RedirectToAction("Index", "Login");//successfull login
                 }
                 else
                 {
                     ModelState.AddModelError("InvalidCredentials", "Invalid Username/Password.");
                 }
             }
             return View();

             
         }

         public ActionResult Logout()
         {
             FormsAuthentication.SignOut();
             return RedirectToAction("Login", "Account");

         }
	}
}