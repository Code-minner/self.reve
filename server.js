function sendMail() {
  var params = {
    name: document.getElementById("code").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_i9ttxwf";
  const templateID = "template_th5i48a"


  emailjs.send(serviceID, templateID, params)
    .then(
      res => {
        document.getElementById("code").value = "";
        document.getElementById("message").value = "";
        console.log(res);
      })
    .catch((err) => console.log(err));
}



