using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
namespace SSBChits
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapMvcAttributeRoutes();
          
            routes.MapRoute(
                "login",
                "Account/Login",
                new { controller = "Account", action = "Login" }
            );
            routes.MapRoute(
                "logout",
                "Account/Logout",
                new { controller = "Account", action = "Logout" }
            );

            //routes.MapRoute(
            //    "default",
            //    "{*url}",
            //    new { controller = "Home", action = "Index" }
            //);

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Login", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}