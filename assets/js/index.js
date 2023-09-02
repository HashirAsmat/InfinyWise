function sendMail(){
    var params ={
        firstname: document.getElementById("firstname").value,
        lastname:  document.getElementById("lastname").value,
        companyname: document.getElementById("companyname").value,
        jobtitle: document.getElementById("jobtitle").value,
        email: document.getElementById("email").value,
        phonenumber: document.getElementById("phonenumber").value,
        message: document.getElementById("message").value,
    }

    const serviceID = "service_2k39r8u";
    const templateID = "template_us8fs3m"
    emailjs.send(serviceID,templateID,params).then(function (res){
        document.getElementById('firstname').value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("companyname").value = "";
        document.getElementById("jobtitle").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phonenumber").value = "";
        document.getElementById("message").value = ""
        console.log(res);
        alert("Message Sent Successfully")
    }).catch(err => console.log(err));
}

