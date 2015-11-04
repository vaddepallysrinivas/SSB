using System.Web;
using System.Web.Optimization;
namespace SSBChits
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.IgnoreList.Clear();

            //ignoring the bundle list


            //including all the libraries used in our app such as angular
            bundles.Add(
                  new ScriptBundle("~/scripts/lib")

                     
                    .Include("~/scripts/jquery.js")
                    .Include("~/scripts/angular/angular.js")
                    .Include("~/scripts/angular/angular-sanitize.min.js")
                    .Include("~/scripts/angular/angular-ui-router.js")
                    .Include("~/scripts/angular/angular-messages.js")
                    .Include("~/scripts/angular/angular-animate.js")
                    .Include("~/scripts/angular/angular-aria.min.js")
                    .Include("~/scripts/angular/hammer.js")
                    .Include("~/scripts/angular/angular-material.min.js")
                    .Include("~/scripts/bootstrap.js")
                    .Include("~/scripts/kendo/kendo.ui.core.js")
                    .Include("~/scripts/kendo/kendo.autocomplete.js")
                    .Include("~/scripts/kendo/kendo.menu.js")
                    .Include("~/scripts/kendo/kendo.window.js")
                    .Include("~/scripts/kendo/kendo.angular.js")
                    .Include("~/scripts/ui-grid.js")
                    .Include("~/scripts/toastr.js")
                    .Include("~/scripts/moment.js")
                    .Include("~/scripts/ui-bootstrap-tpls-0.11.2.js")
                    .Include("~/scripts/jquery.textcomplete.js")
                    .Include("~/scripts/xeditable.js")
                    .Include("~/scripts/angular/angular-ui-switch.js")
                    .Include("~/scripts/angular/toaster.js")
                    .Include("~/scripts/angular/angular-file-upload.min.js")
                    .Include("~/scripts/angular/angular-file-upload-shim.min.js")
                    .Include("~/scripts/angular/ngProgress.js")
                    .Include("~/scripts/angular/isteven-multi-select.js")
                    .Include("~/scripts/bootstrap-datetimepicker.min.js")
                    .Include("~/scripts/angular/angular-touch.js")
                    .Include("~/scripts/chosen.jquery.min.js")
                    .Include("~/scripts/angular-chosen.js")
                    .Include("~/scripts/xl/xlsx.full.min")
                    .Include("~/scripts/xl/ods.js")
                );


            //including all the css used in our app
            bundles.Add(
                new StyleBundle("~/content/css")
                    .Include("~/content/bootstrap/bootstrap.css")
                    .Include("~/content/angular-ui-switch.css")
                    .Include("~/content/bootstrap/bootstrap-theme.css")
                    .Include("~/content/kendo/kendo.common.core.css")
                    .Include("~/content/kendo/kendo.uniform.css")
                    .Include("~/content/ui-grid/ui-grid.css")
                    .Include("~/content/toastr.css")
                    .Include("~/content/angular-material.min.css")
                //.Include("~/content/angular-material.css")
                    .Include("~/content/angular-material-grey-theme.css")
                    .Include("~/content/xeditable.css")
                    .Include("~/content/app.css")
                    .Include("~/content/ngProgress.css")
                    .Include("~/content/isteven-multi-select.css")
                    .Include("~/content/bootstrap-datetimepicker.min.css")
                    .Include("~/content/chosen.min.css")
                    .Include("~/content/gridXL/gridXL.css")
                );

            //including the javascript files in our app
            bundles.Add(
                new ScriptBundle("~/scripts/app")
                    .Include("~/app/app.js")
                    .IncludeDirectory("~/app", "*.js", true)

                );

        }
    }
}