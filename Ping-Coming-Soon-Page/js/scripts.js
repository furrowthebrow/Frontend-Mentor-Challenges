function validateForm() {
  let field = document.forms["form"]["email"].value;
  if (field == "") {
    document.querySelector("input").style.border = "0.09rem solid hsl(354, 100%, 66%)";
    document.getElementById('emptyError').style.display = "block";
    document.getElementById("emptyError").innerHTML = "Whoops! It looks like you forgot to add your email";
    return false;
  }
  else if( /(.+)@(.+){2,}\.(.+){2,}/.test(field) ){

  } else {
    document.querySelector("input").style.border = "0.09rem solid hsl(354, 100%, 66%)";
    document.getElementById('invalidError').style.display = "block";
    document.getElementById("invalidError").innerHTML = "Please provide a valid email address";
    return false;
  }
}
