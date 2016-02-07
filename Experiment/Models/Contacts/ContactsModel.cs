using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Experiment.Models.Contacts
{
    public class ContactsModel
    {
        [Required]
        public string sender_name { get; set; }

        [Required]
        public string sender_email { get; set; }

        [Required]
        public string sender_message { get; set; }

    }
}