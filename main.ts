// import resume display

let form = document.getElementById('resume-form') as HTMLFormElement;
let resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// form submission 
form.addEventListener('submit' , (event: Event) => {
    event.preventDefault();

//  input data
let name = (document.getElementById('name') as HTMLInputElement).value
let phone_number = (document.getElementById('phone number') as HTMLInputElement).value
let email = (document.getElementById('email') as HTMLInputElement).value
let education = (document.getElementById('education') as HTMLInputElement).value
let skills = (document.getElementById('skills') as HTMLInputElement).value
let experience = (document.getElementById('experience') as HTMLInputElement).value

// generate input
const resumeHTML = `
<h2> <br> Dynamic Resume </b> <h2>
<h3> Personal Information </h3>
<p><b>Name:</b>${name}</p>
<p><b>Phone:</b>${phone_number}</p>
<p><b>Email:</b>${email}</p>

<h3> Eduction </h3>
<p>${education}</p>

<h3> Skills </h3>
<p>${skills}</p>

<h3> Experience </h3>
<p>${experience}</p>
`;

// Display input
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}else{
    console.error('Something is missing');
    
}

})