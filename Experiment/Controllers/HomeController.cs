using Experiment.Models;
using Experiment.Models.Home;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Experiment.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            IndexModel model = new IndexModel();
            model = DefaultIndex(model);
            return View(model);
        }

        private IndexModel DefaultIndex(IndexModel model)
        {
            using(db_informaticsEntities _db = new db_informaticsEntities()){
                model.panel = 1;
                model.branchList = _db.branch_information.OrderBy(x => x.branch).ToList();
                int branch_id = model.branchList[0].branch_id;
                List<branch_course> branch_courses = _db.branch_course.Where(x => x.branch_id == branch_id).ToList();
                model.courseList = new List<course_information>();
                foreach(var i in branch_courses){
                    course_information temp = _db.course_information.Find(i.course_id);
                    model.courseList.Add(temp);
                }
                return model;
            }
        }

        /************** SLIDER **************/

        public ActionResult Sliders()
        {
            using(db_informaticsEntities _db = new db_informaticsEntities()){
                SlidersModel model = new SlidersModel();
                model.sliderList = _db.slider_information.ToList();
                return PartialView(model);
            }
        }

        /************** SIDE PANEL **************/

        public ActionResult ReadMore(bool readmore)
        {
            IndexModel model = new IndexModel();
            model = DefaultIndex(model);
            model.panel = 2;
            model.why = readmore;
            return View("Index", model);
        }

        /************** ABOUT **************/

        public ActionResult AboutUs()
        {
            using(db_informaticsEntities _db = new db_informaticsEntities()){
                AboutUsModel model = new AboutUsModel();
                model.aboutList = _db.about_information.ToList();
                model.staffList = _db.staff_information.ToList();
                return PartialView(model);
            }
        }

        /************** CONTACTS **************/

        [HttpPost]
        public ActionResult SendMessage(IndexModel model)
        {
            if (ModelState.IsValid)
            {
                return RedirectToAction("Index", "Home");
            }
            else
            {
                model = DefaultIndex(model);
                model.panel = 2;
                return View("Index", model);
            }
        }

        /************** APPLY **************/

        public ActionResult BranchCourse(int id)
        {
            using(db_informaticsEntities _db = new db_informaticsEntities()){
                List<branch_course> branch_courses = _db.branch_course.Where(x => x.branch_id == id).ToList();
                List<course_information> courses = new List<course_information>();
                foreach (var i in branch_courses)
                {
                    course_information temp = _db.course_information.Find(i.course_id);
                    courses.Add(temp);
                }
                return PartialView(courses);
            }
        }

        [HttpPost]
        public ActionResult Apply(IndexModel model)
        {
            if(ModelState.IsValid){
                using(db_informaticsEntities _db = new db_informaticsEntities()){
                    applicant_information tbl = new applicant_information();
                    tbl.branch_id = model.apply.branch_id;
                    tbl.course_id = model.apply.course_id;
                    tbl.prefix = model.apply.gender;
                    if(tbl.prefix.Equals("Mr.")){
                        tbl.gender = "Male";
                    }
                    else{
                        tbl.gender = "Female";
                    }
                    tbl.firstname = model.apply.firstname;
                    tbl.middlename = model.apply.middlename;
                    tbl.lastname = model.apply.lastname;
                    tbl.telephone = model.apply.telephone;
                    tbl.mobile = model.apply.mobile;
                    tbl.email = model.apply.email;
                    tbl.address = model.apply.address;
                    tbl.hea = model.apply.hea;
                    tbl.lsa = model.apply.lsa;
                    tbl.sa = model.apply.sa;

                    _db.applicant_information.Add(tbl);
                    _db.SaveChanges();
                    return RedirectToAction("Index");
                }
            }
            else{
                model = DefaultIndex(model);
                model.panel = 3;
                return View("Index", model);
            }
        }

    }
}
