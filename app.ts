const generateButton = document.getElementById('generateResume') as HTMLButtonElement;
const resumeName = document.getElementById('resumeName') as HTMLHeadingElement;
const resumeEmail = document.getElementById('resumeEmail') as HTMLElement;
const resumeEducation = document.getElementById('resumeEducation') as HTMLElement;
const resumeSkills = document.getElementById('resumeSkills') as HTMLElement;
const resumeExperience = document.getElementById('resumeExperience') as HTMLElement;

const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;

generateButton.addEventListener('click', () => {
    resumeName.innerText = nameInput.value;
    resumeEmail.innerText = emailInput.value;
    resumeEducation.innerText = educationInput.value;
    resumeSkills.innerText = skillsInput.value;
    resumeExperience.innerText = experienceInput.value;
});
