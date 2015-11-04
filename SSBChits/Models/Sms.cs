using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SSBChits.Models
{


    public class SmsList
    {
        public List<Sms> lst { set; get; }
    }


    public class Sms
    {
        public string  Phnumber { set; get; }
        public string Name { set; get; }
        public string Message { set; get; }
    }
}