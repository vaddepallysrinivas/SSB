using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SSBChits.Models
{


    public class SmsList
    {
        public List<Sms> lst { set; get; }
        public int smsType { set; get; }
    }

    public class Sms
    {
        public string  Phnumber { set; get; }
        public string Name { set; get; }
        public string Message { set; get; }
    }

    public class Login
    {
        public string userName { set; get; }
        public string Password { set; get; }
        
    }


}