var generateButton = document.getElementById('generateResume');
var resumeName = document.getElementById('resumeName');
var resumeEmail = document.getElementById('resumeEmail');
var resumeEducation = document.getElementById('resumeEducation');
var resumeSkills = document.getElementById('resumeSkills');
var resumeExperience = document.getElementById('resumeExperience');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var educationInput = document.getElementById('education');
var skillsInput = document.getElementById('skills');
var experienceInput = document.getElementById('experience');
generateButton.addEventListener('click', function () {
    resumeName.innerText = nameInput.value;
    resumeEmail.innerText = emailInput.value;
    resumeEducation.innerText = educationInput.value;
    resumeSkills.innerText = skillsInput.value;
    resumeExperience.innerText = experienceInput.value;
});
