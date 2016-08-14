//// 01. Information
var bio = {
    "name": 'Sangyoung Ahn',
    "role": 'Front-end Developer',
    "contacts": {
        "mobile": '+82-10-9508-0900',
        "email": 'sy.ahn25@gmail.com',
        "github": 'syahn',
        "twitter": 'frank_haus',
        "blog": 'https://syahn.com',
        "location": 'Seoul'
    },
    "welcomeMessage": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed consequat mi. Nam nec posuere lorem. Morbi iaculis mauris in libero tincidunt, non gravida sem consequat. Aliquam erat volutpat. Curabitur elit sapien, tristique sed lacus vitae, iaculis fringilla est. Mauris nec auctor lacus. ',
    "skills": ['HTML/CSS', 'JavaScript', 'bootstrap', 'ReactJS', 'nodeJS', 'Sketch'],
    "biopic": 'images/profile.jpg'
};

var education = {
    "schools": [{
        "name": 'Sungkyungwan University',
        "location": 'Seoul, Suwon',
        "degree": 'Bachelor',
        "dates": '2010-3 ~ ',
        "url": 'skku.edu',
        "majors": ['Oriental philosophy', 'Computer Science']
    }],
    "onlineCourses": [{
        "title": 'Front-end Nanodegree',
        "school": 'Udacity',
        "dates": '2016-8',
        "url": 'https://udacity.com'
    }]
};

var projects = {
    "projects": [{
        "title": 'Build a portfolio site',
        "dates": '2016-8-11',
        "description": 'My first project in the Nanodegree of Udacity',
        "url": 'https://syahn.github.io/frontend-nanodegree-build_a_portfolio_site/',
        "images": ['http://placekitten.com/100/100', 'http://placekitten.com/200/100']
    }]
};

var work = {
    "jobs": [{
        "employer": '청년장사꾼',
        "title": 'manager',
        "location": 'seoul',
        "dates": '2013-8 ~ 2014-12',
        "description": "I've worked in the food comapany which runs several pubs at the same time."
    }]
};

//// 02. Formatting objects and appending


// 1.bio

bio.display = function() {

    // Skills
    if (bio.skills.length) {
        $("#header").prepend(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkills);
        })
    }

    // Welcome message
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedWelcomeMsg);

    // biopic
    var formattedbiopic = HTMLbiopic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedbiopic);

    // Role
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    // Name
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    // ContactGeneric - Email
    var formattedContacGeneric = HTMLcontactGeneric.replace("%contact%", "email");
    var formattedContacGeneric = formattedContacGeneric.replace("%data%", bio.contacts.email);

    // Mobile
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

    // Twitter
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

    // Github
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

    // Blog
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);

    // Location
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    // Append it at the same time
    $("#topContacts").append(formattedContacGeneric, formattedMobile, formattedTwitter, formattedGithub, formattedBlog, formattedLocation);

}


// 2. Work
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedLocation, formattedDescription);

    })
}


// 3. Projects

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        var formattedUrl = HTMLprojectUrl.replace("%data%", project.url);

        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

        project.images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        })

        $(".project-entry:last").append(formattedUrl);

    })
}


// 4. Education

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedName = formattedName.replace("#", school.url);

        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);

        $(".education-entry:last").append(formattedName, formattedLocation, formattedDegree, formattedDates);


        school.majors.forEach(function(major) {
            var formattedMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedMajor);
        })
    })

    $(".education-entry:last").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", course.url);

        $(".education-entry:last").append(formattedTitle, formattedSchool, formattedDates, formattedUrl);
    })
}


// 5. Map

$("#mapDiv").append(googleMap);


// 6. Contact Icon

bio.iconDisplay = function() {
    var formattedFacebookIcon = footerIconFacebook.replace('%data%', bio.contacts.facebook);
    var formattedTwitterIcon = footerIconTwitter.replace('%data%', bio.contacts.twitter);
    var formattedGithubIcon = footerIconGithub.replace('%data%', bio.contacts.github);
    var formattedBlogIcon = footerIconBlog.replace('%data%', bio.contacts.blog);
    var formattedEmailIcon = footerIconEmail.replace('%data%', bio.contacts.email);

    $("#footerContacts:last").append(formattedFacebookIcon, formattedTwitterIcon, formattedGithubIcon, formattedBlogIcon, formattedEmailIcon);
}



// 7. display

bio.display();
work.display();
projects.display();
education.display();
bio.iconDisplay();
