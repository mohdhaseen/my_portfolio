function sendEmail(name, email, subject, message) {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "mohdhaseen.craterzone@gmail.com",
        Password: "B980DD6FA17EFF83EE8F67F05FEE5B3AC7CA",
        To: 'mohdhaseen99@gmail.com',
        From: "mohdhaseen.craterzone@gmail.com",
        Subject: "my portfolio",
        Body: `name: ${name}, email: ${email}, subject: ${subject}, message: ${message}`
    }).then((message) => {
        if (message === 'OK') {
            Swal.fire('Success', 'Email sent successfully!', 'success');
        } else {
            Swal.fire('Error', 'Failed to send the email.', 'error');
        }
    });
}