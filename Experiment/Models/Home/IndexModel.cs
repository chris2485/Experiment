using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Experiment.Models.Home
{
    public class IndexModel
    {
        public int panel { get; set; }

        public bool why { get; set; }

        public ContactsModel contacts { get; set; }

        public List<branch_information> branchList { get; set; }

        public List<course_information> courseList { get; set; }

        public ApplyModel apply { get; set; }

    }
}