function whatsapp(){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var subject = document.getElementById("subject").value;
var message = document.getElementById("message").value;

var url = "https://wa.me/32466235047?text="
+"*Name :* "+name+"%0a"
+"*Email :* "+email+"%0a"
+"*Subject :* "+subject+"%0a"
+"*Message :* "+message;

window.open(url,'_blank').focus();
}