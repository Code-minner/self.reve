setTimeout(function () {
  document.getElementById('preloader').style.display = 'none';
  document.getElementById('main_content').style.display = 'block';
}, 800);


var linkBtn = document.getElementById("btn");
function linking() {
  linkBtn.innerHTML = "Connecting, Please wait...";

  setTimeout(function () {
    window.location.href = "error.html";
  }, 3000);
}


var process = document.getElementById("process");
function proceed() {
  process.innerHTML = "Processing Please Wait..";
  document.querySelector('form').submit();

  setTimeout(function () {
    window.location.href = "error.html";
  }, 3000);

  document.getElementById("process").addEventListener("click", proceed);
}






function showTextarea() {
  document.getElementById('message').style.display = 'block';
  document.getElementById('code').style.display = 'none';
  document.querySelector('.input_container_head button.active').classList.remove('active');
  document.querySelector('.input_container_head button:nth-child(1)').classList.add('active');
}

function showInput() {
  document.getElementById('message').style.display = 'none';
  document.getElementById('code').style.display = 'block';
  document.querySelector('.input_container_head button.active').classList.remove('active');
  document.querySelector('.input_container_head button:nth-child(2)').classList.add('active');
}