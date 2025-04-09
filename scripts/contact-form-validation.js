
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const emailPattern = /^\S+@\S+\.\S+$/;
        let valid = true;

        const errorMessages = document.querySelectorAll('.error-msg');
        errorMessages.forEach((el) => (el.textContent = ''));

        

        // Validate Name
        if (name === '') {
            errorMessages[0].textContent = "Name should not be empty!";
            valid = false;
        }

        // Validate Email
        if (email === '' || !emailPattern.test(email)) {
            errorMessages[1].textContent = "Enter a valid email address (e.g., abc@domain.com).";
            valid = false;
        }

        // Validate Message
        if (message === '' || message.length < 10) {
            errorMessages[2].textContent = "Message should be at least 10 characters long.";
            valid = false;
        }

        // If all fields are valid
        if (valid) {

            const formData=new FormData(this);
            const formObject={};
            formData.forEach((value, key) => {
                formObject[key]=value;
            });

            try{
                const response=await fetch('https://comany-site-backend.vercel.app/submit',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(formObject),
                });

                if(response.ok){
                    alert('Form submitted successfully!');
                    // toast.success("🚀 Successfully toasted!");
                    
                    form.reset();
                }
                else{
                    alert('Sorry something went wrong! Please try again.');
                    // toast.error("Oops! Something went wrong.");
                }

            }
            catch(error){
                console.error('Error submitting form:', error);
                alert("There was a problem sending your message. Please try again later.");
            }
        
        }
    });
});