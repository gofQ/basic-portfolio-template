import tom from "./img/tom.jpg";
import {
  projectModel as project,
  portfolioWorkModel as work,
  portfolioReferenceModel as reference,
  skillModel as skill,
} from "./util/dataModels";
import a from "./img/a.jpg";
import aa from "./img/aa.jpg";

// Your information 
export const uInfo = {
  name: "your name",
  img: tom, // your image link or image path
  jobMail: "Your Job or Mail link", // for icon
  mails: ["Your Email", "Your Email2", "Your Email3"],
  instagram: "Your Instagram link", //for icon
  github: "Your Github link", //for icon
  linkedin: "Your Linkedin link", //for icon
  about: "About yourself",
  whyYouDoingThis: "Why you doing this job?",
  achivementAndExperience: [
    "high school",
    "college",
    "university",
    "job",
    "freelancer",
    "other",
  ],
  interestAndHobbies: ["interest", "hobbies", "other"],
  visionAndGoals: ["vision", "vision1", "goal1", "goal2"],
  
  //skill format:  skill("skill name", "skill description")
  skills:[
    skill("Html", 'skill description'), //example
    skill("Css", 'skill description'), //example
    skill("Javascript", 'skill description'), //example
    skill("ur skill", 'skill description'),
  ]
};

// Your projects
// project format:  project("project name", "project description", "MM/YYYY-MM/YYYY", ["tech1", "tech2", "tech3"], [a, aa], ["link1.com", "link2.com", "link3.com"], ["award1", "award2", "award3"])
//project date format:  "MM/YYYY-MM/YYYY" or "MM/YYYY-Now"
//project img format:  "img/project1.jpg" or "https://example.com/project1.jpg"
export const projects = [
  project(
    "project name1",
    "project description",
    "MM/YYYY-MM/YYYY", //project date
    ["tech1", "tech2", "tech3"], //project technologies
    [a, aa], //project images
    ["link1.com", "link2.com", "link3.com"], //project links
    ["award1", "award2", "award3"] //project awards
  ),
  project(
    "project name2",
    "project description",
    "MM/YYYY-MM/YYYY", //project date
    ["tech1", "tech2", "tech3"], //project technologies
    [a, aa], //project images
    ["link1.com", "link2.com", "link3.com"], //project links
    ["award1", "award2", "award3"] //project awards
  ),
  project(
    "project name3",
    "project description",
    "MM/YYYY-MM/YYYY", //project date
    ["tech1", "tech2", "tech3"], //project technologies
    [a, aa], //project images
    ["link1.com", "link2.com", "link3.com"], //project links
    ["award1", "award2", "award3"] //project awards
  ),
];

// Your portfolio
// portfolio work format:  work("work title", "work description", [a, aa], "MM/YYYY-MM/YYYY", ["tech1", "tech2", "tech3"])
//portfolio date format:  "MM/YYYY-MM/YYYY" or "MM/YYYY-Now"
//portfolio img format:  "img/portfolio1.jpg" or "https://example.com/portfolio1.jpg"
export const portfolio = {
  portfolioDescription: "portfolio description",
  portfolioWorks: [
    work("work title1", "work description", [a, aa], "MM/YYYY-MM/YYYY", [
      "tech1",
      "tech2",
      "tech3",
    ]),
    work("work title2", "work description", [a, aa], "MM/YYYY-MM/YYYY", [
      "tech1",
      "tech2",
      "tech3",
    ]),
    work("work title3", "work description", [a, aa], "MM/YYYY-MM/YYYY", [
      "tech1",
      "tech2",
      "tech3",
    ]),
    work("work title4", "work description", [a, aa], "MM/YYYY-MM/YYYY", [
      "tech1",
      "tech2",
      "tech3",
    ]),
  ],

  // Your references
  //reference format :  reference(img, "reference name")
  //reference img format:  "img/reference1.jpg" or "https://example.com/reference1.jpg"

  portfolioReferences: [ 
    reference(aa, "reference name"), 
    reference(aa, "reference name1"),
    reference(aa, "reference name2"),
  ]
};
