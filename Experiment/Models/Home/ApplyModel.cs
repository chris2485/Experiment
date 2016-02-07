using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Experiment.Models.Home
{
    public class ApplyModel
    {
        [Required]
        public int branch_id { get; set; }

        [Required]
        public int course_id { get; set; }
        
        [Required]
        public string firstname { get; set; }

        public string middlename { get; set; }

        [Required]
        public string lastname { get; set; }

        public string telephone { get; set; }

        [Required]
        public string mobile { get; set; }

        [Required]
        public string email { get; set; }

        [Required]
        public string address { get; set; }

        [Required]
        public string citizenship { get; set; }

        [Required]
        public string gender { get; set; }

        [Required]
        public string status { get; set; }

        [Required]
        public string hea { get; set; }

        [Required]
        public string lsa { get; set; }

        [Required]
        public string sa { get; set; }

    }
}