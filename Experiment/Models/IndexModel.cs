using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Experiment.Models
{
    public class IndexModel
    {
        public int panel { get; set; }

        public bool why { get; set; }

        /******** CONTACTS *******/

        public string sender_name { get; set; }
        public string sender_email { get; set; }
        public string sender_message { get; set; }

    }
}