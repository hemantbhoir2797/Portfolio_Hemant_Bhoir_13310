
// Name validation

const nameNode = document.getElementById("name");
const nameErrorNode = document.getElementById("nameError");
nameNode.addEventListener("keyup", () => validateName());
const namePattern = new RegExp("^[A-Ba-z ]*$");

function validateName() {
    nameErrorNode.textContent = "";
    // required validation
    const message = nameNode.value;
    if (message == "") {
        nameErrorNode.textContent = "Name is required";
        nameNode.style.border="3px red solid";
        return false;
    }
    else if (namePattern.test(message) == false){
        nameErrorNode.textContent = "Please enter valid name";
        nameNode.style.border="3px red solid";
        return false;
    }
    else if (message.length <= 2){
        nameErrorNode.textContent = "Name must be more than 1 character long...";
        nameNode.style.border="3px red solid";
        return false;
    }
    else{
        nameNode.style.border="3px green solid";
        return true;
    }
}







//Email validation:
const emailNode = document.getElementById("email");
const emailErrorNode = document.getElementById("emailError");
emailNode.addEventListener("keyup", () => validateEmail());

function validateEmail() {
  emailErrorNode.textContent = "";
    const email = emailNode.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email == ""){
        emailErrorNode.textContent = "Email is required";    
        emailNode.style.border="3px red solid";
        return false;
    }   
    else if (!emailPattern.test(email)){
        emailErrorNode.textContent = "Please enter a valid email";  
        emailNode.style.border="3px red solid"; 
        return false;
    }
    else{
        emailNode.style.border="3px green solid";
        return true;
    }
       
}

  

  // message validation

  const messageNode = document.getElementById("message1");
  const messageErrorNode = document.getElementById("msgError");
  messageNode.addEventListener("keyup", () => validateMessage());
  const messagePattern = new RegExp("^[A-Ba-z ]*$");
  
  function validateMessage() {
      messageErrorNode.textContent = "";
      // required validation
      const message = messageNode.value;
      if (message == "") {
          messageErrorNode.textContent = "Message is required";
          messageNode.style.border="3px red solid";
          return false;
      }
      else if (messagePattern.test(message) == false){
          messageErrorNode.textContent = "Please enter valid Message";
          messageNode.style.border="3px red solid";
          return false;
      }
      else if (message.length <= 2){
          messageErrorNode.textContent = "Message must be more than 1 character long...";
          messageNode.style.border="3px red solid";
          return false;
      }
      else{
          messageNode.style.border="3px green solid";
          return true;
      }
  }



//validate all
  function validateAll(){
    const r1=validateName();
    const r2=validateEmail();
    const r3=validateMessage();
    
    
    if(r1 && r2 && r3){
      window.alert("Message sended Successfully....!!!!");
      return true;
    }

    
   
}


