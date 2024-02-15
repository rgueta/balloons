

function fb_clicked(){
  console.log('fb clicked');
}

function tw_clicked(){
  console.log('tw clicked');
}
function in_clicked(){
  console.log('in clicked');
}

// ---------------------- emails  -------------------

function submitForm(e){
  e.preventDefault();

  //Get input values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;

  // document.querySelector(".contact-form").reset();

  sendEmail(name,email,message);

}


function sendEmail(name,email,message) {
  console.log('Si llegue aqui!');
Email.send({
Host: "smtp.gmail.com",
Username : "ricardogueta@gmail.com",
Password : "sogwxqukliifjgzt",
To : 'ventas@bytheg.com',
From : 'ricardogueta@gmail.com',
Subject : `${name} sent you a message`,
Body : `Name: ${name} <br/> Email: ${email} <br/>  Message: ${message}`
}).then(
  message => alert("mail sent successfully")
);
}