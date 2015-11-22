using SSBChits.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SSBChits.Controllers.Api.ssb
{
    [RoutePrefix("sms")]
    public class SmsModuleController : ApiController
    {
        [Route("sendSms")]
        [HttpPost]
        public int SendSms([FromBody] SmsList objParam)
        {
            int type = objParam.smsType;
            List<Sms> smsLst = objParam.lst;

            foreach (Sms l in smsLst)
            {
                using (WebClient client = new WebClient())
                {
                    var mno = l.Phnumber;
                    var message = l.Message;
                    var url = "";
                    if (type == 1)
                    {
                        url = "http://smsc.biz/httpapi/send?username=svr.srs@gmail.com&password=vaddepally123&sender_id=SSBCHT&route=T&phonenumber=" + mno + "&message=" + message + "";
                    }
                    else if (type == 2)
                    {
                        url = "http://smsc.biz/httpapi/send?username=svr.srs@gmail.com&password=vaddepally123&sender_id=PROMOTIONAL&route=P&phonenumber=" + mno + "&message=" + message + "";
                    }
                    var res = client.DownloadString(url);
                }
            }
            return 1;
        }




        [Route("autheniticate")]
        [HttpPost]
        public int Autheniticate([FromBody] Login objParam)
        {
            if (objParam.userName == "Srilaxmi" && objParam.Password == "12345")
            {
                return 1;
            }

            return 0;

        }
    }
}