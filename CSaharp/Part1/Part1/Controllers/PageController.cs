using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace Part1.App_Start
{
    public class PageController : Controller
    {
        public ActionResult Registration()
        {
            return View();
        }
        public ActionResult Police()
        {
            return View();
        }
        public ActionResult RegistrationPart2()
        {
            return View();
        }
    }
}
