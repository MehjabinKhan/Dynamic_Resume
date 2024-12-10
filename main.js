// import resume display
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// form submission 
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //  input data
    var name = document.getElementById('name').value;
    var phone_number = document.getElementById('phone number').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // generate input
    var resumeHTML = "\n<h2> <br> Dynamic Resume </b> <h2>\n<h3> Personal Information </h3>\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>Phone:</b>").concat(phone_number, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n\n<h3> Eduction </h3>\n<p>").concat(education, "</p>\n\n<h3> Skills </h3>\n<p>").concat(skills, "</p>\n\n<h3> Experience </h3>\n<p>").concat(experience, "</p>\n");
    // Display input
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('Something is missing');
    }
});
