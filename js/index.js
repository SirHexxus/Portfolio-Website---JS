// <div class="alert alert-success"> <strong> Thank
// you!</strong> We\'ll get back to you shortly.</div>';

// <div class="alert alert-danger">Sorry, there was
// an error sending your message. Please try again later.</div>';

//index.js  
const sendEmail = () => {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value || "N-A"
    const message = document.getElementById("message").value
    console.info({name, email, phone, message})
	Email.send({
    // SecureToken: "1292789d-c28e-4417-a28d-b6db2122aa98",
    Host: "smtp.gmail.com",
	Username : "scalewebsites@gmail.com",
	Password : "Kiran0322",
	To : 'jamesmichaelstacy@gmail.com',
	From : email,
	Subject : `Request For Quote From ${name} {scalewebsites.com}`,
	Body : `Name: ${name}<br />Phone: ${phone}<br /><br />Message: ${message}`,
	}).then(
        message => alert(`Thank you!\n\nWe\'ll get back to you shortly.`)
    );
}