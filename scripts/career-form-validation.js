document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('general-application-form');

    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent form submission by default

        const name = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const location = document.getElementById('location').value.trim();
        const experience = document.getElementById('experience').value.trim();
        const qualification = document.getElementById('qualification').value.trim();
        const resumeInput = document.getElementById('resume');
        const resume = resumeInput.files[0];
        const message = document.getElementById('message').value.trim();
        const emailPattern = /^\S+@\S+\.\S+$/;

        let valid = true;
        const errorMessages = document.querySelectorAll('.error-msg');
        errorMessages.forEach((el) => (el.textContent = '')); // Clear previous error messages

        // Validate Name
        if (name === '') {
            errorMessages[0].textContent = 'Name should not be empty!';
            valid = false;
        }

        // Validate Email
        if (!emailPattern.test(email)) {
            errorMessages[1].textContent = 'Enter a valid email address! (Ex: abc@domain.com)';
            valid = false;
        }

        // Validate Phone
        if (phone === '' || phone.length !== 10 || isNaN(phone)) {
            errorMessages[2].textContent = 'Enter a valid phone number! It should be 10 digits (Ex: 1234567890)';
            valid = false;
        }

        // Validate Qualification
        if (qualification === '') {
            errorMessages[3].textContent = 'Qualification should not be empty!';
            valid = false;
        }

        // Validate Message
        if (message === '' || message.length < 10) {
            errorMessages[4].textContent = 'Message should be at least 10 characters long!';
            valid = false;
        }
         // Validate Resume
        if (!resume) {
            errorMessages[5].textContent = 'Please upload your resume!';
            valid = false;
        }

        // If all fields are valid, submit the form
        if (valid) {
    
            const formData=new FormData(this);
            const formObject={};
            formData.forEach((value, key) => {
                formObject[key]=value;
    
            });
            formObject['file']=resume;
            // console.log(formObject)

            try{
                const response=await fetch('https://comany-site-backend.vercel.app/upload-details',{
                    method:'POST',
                    headers:{
                        'content-Type':'application/json',

                    },

                    body:JSON.stringify(formObject),
                });

                if(response.ok){
                    alert('Form submitted successfully!');
                    // form.reset();
                }
                else{
                    alert('Sorry form submission failed! Please try again.');
                }


            }
            catch(error){
                console.error('Error Submitting form:',error);
                alert('There was a problem in submitting you form. Please try again!')

            }
            
        }
    });
});
