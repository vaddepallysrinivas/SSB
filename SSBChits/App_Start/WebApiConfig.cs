using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;

namespace SSBChits.App_Start
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API routes
           config.MapHttpAttributeRoutes();

            // Other Web API configuration not shown.

            config.Routes.MapHttpRoute(
               name: "DefaultApi",
               routeTemplate: "api/{controller}/{id}",
               defaults: new { id = RouteParameter.Optional }
           );
            var json = GlobalConfiguration.Configuration.Formatters.JsonFormatter;

            json.SerializerSettings.Formatting = Newtonsoft.Json.Formatting.Indented;


            var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();


            //GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings.DateTimeZoneHandling = Newtonsoft.Json.DateTimeZoneHandling.Local;

            // config.Services.Add(typeof(IExceptionLogger), new GlobalExceptionLogger());
            // config.Services.Replace(typeof(IExceptionHandler), new GlobalExceptionHandler());
            //config.Filters.Add(new UnhandledExceptionFilter());

            config.EnsureInitialized();
        }
    }
}