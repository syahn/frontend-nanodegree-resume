//// 01. Information

var bio = {
  	"name": "Sangyoung Ahn",
  	"role": "Front-end Developer",
  	"contacts": {
  		"mobile": "+82-10-9508-0900",
  		"email": "sy.ahn25@gmail.com",
  		"github": "syahn",
  		"twitter": "@frank_haus",
      "blog": "http://syahn.com",
  		"location": "Seoul"
  	},
    	"welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed consequat mi. Nam nec posuere lorem. Morbi iaculis mauris in libero tincidunt, non gravida sem consequat. Aliquam erat volutpat. Curabitur elit sapien, tristique sed lacus vitae, iaculis fringilla est. Mauris nec auctor lacus. ",
  	"skills": ["HTML/CSS", "JavaScript", "bootstrap", "ReactJS", "nodeJS", "Sketch"],
  	"bioPic": "images/profile.jpg"
}

var education={
  	"schools": [{
  		"name": "Sungkyungwan University",
  		"location": "Seoul, Suwon",
  		"degree": "Bachelor",
  		"dates": "2010-3 ~ ",
  		"url": "skku.edu",
  		"majors": ["Oriental philosophy", "Computer Science"]
  	}],
  	"onlineCourses": [{
  		"title": "Front-end Nanodegree",
  		"school": "Udacity",
  		"dates": "2016/8",
  		"url": "http://udacity.com"
  	}]
}

var projects = {
  	"projects": [{
  		"title": "Build a portfolio site",
  		"dates": "2016-8-11",
  		"description": "My first project in the Nanodegree of Udacity",
  		"url": ["https://syahn.github.io/frontend-nanodegree-build_a_portfolio_site/"]
  	}]
}

var work = {
  	"jobs": [{
  		"employer": "청년장사꾼",
  		"title": "manager",
  		"location": "seoul",
  		"dates": "2013-8 ~ 2014-12",
  		"description": "I've worked in the food comapany which runs several pubs at the same time."
  	}]
}

//// 02. Formatting objects and appending


// 1.bio

bio.display = function(){

  // Skills
  if (bio.skills.length > 0){
    $("#header").prepend(HTMLskillsStart);
    bio.skills.forEach(function(skill){
      var formattedSkills = HTMLskills.replace("%data%", skill);
      $("#skills").append(formattedSkills);
    })
  }

  // Welcome message
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").prepend(formattedWelcomeMsg);

  // Biopic
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").prepend(formattedBioPic);

  // Role
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  // Name
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  // ContactGeneric - Email
  var formattedContacGeneric = HTMLcontactGeneric.replace("%contact%", "email");
  var formattedContacGeneric = formattedContacGeneric.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedContacGeneric);

  // Mobile
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);

  // Twitter
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);

  // Github
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGithub);

  // Blog
  var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
  $("#topContacts").append(formattedBlog);

  // Location
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);

};


// 2. Work
work.display = function(){
  work.jobs.forEach(function(job){
    $("#workExperience").append(HTMLworkStart);

    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  });
};


// 3. Projects

projects.display = function(){
  projects.projects.forEach(function(project){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle= HTMLprojectTitle.replace("%data%", project.title);
    var formattedDates= HTMLprojectDates.replace("%data%", project.dates);
    var formattedDescription= HTMLprojectDescription.replace("%data%", project.description);
    var formattedUrl= HTMLprojectUrl.replace("%data%", project.url);

    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);
    $(".project-entry:last").append(formattedUrl);
  })
}


// 4. Education

education.display = function(){
  education.schools.forEach(function(school){
    $("#education").append(HTMLschoolStart);

    var formattedName= HTMLschoolName.replace("%data%", school.name);
    var formattedName= formattedName.replace("#", school.url);

    var formattedLocation= HTMLschoolLocation.replace("%data%", school.location);
    var formattedDegree= HTMLschoolDegree.replace("%data%", school.degree);
    var formattedDates= HTMLschoolDates.replace("%data%", school.dates);

    $(".education-entry:last").append(formattedName);
    $(".education-entry:last").append(formattedLocation);
    $(".education-entry:last").append(formattedDegree);
    $(".education-entry:last").append(formattedDates);

    school.majors.forEach(function(major){
      var formattedMajor= HTMLschoolMajor.replace("%data%", major);
      $(".education-entry:last").append(formattedMajor);
    })
  })

    $(".education-entry:last").append(HTMLonlineClasses);

  education.onlineCourses.forEach(function(course){
    var formattedTitle= HTMLonlineTitle.replace("%data%", course.title);
    var formattedSchool= HTMLonlineSchool.replace("%data%", course.school);
    var formattedDates= HTMLonlineDates.replace("%data%", course.dates);
    var formattedUrl= HTMLonlineURL.replace("%data%", course.url);

    $(".education-entry:last").append(formattedTitle);
    $(".education-entry:last").append(formattedSchool);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedUrl);
  })
}


// 5. Map

$("#mapDiv").append(googleMap);


// 6. display

bio.display();
work.display();
projects.display();
education.display();
