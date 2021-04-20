function validateForm() {
  let field = document.forms["form"]["email"].value;
 if( /(.+)@(.+){2,}\.(.+){2,}/.test(field) ){

  } else {
    document.querySelector("input").style.border = "0.09rem solid hsl(354, 100%, 66%)";
    document.getElementById('invalidError').style.display = "block";
    document.getElementById('invalidError2').style.display = "block";

    document.getElementById("input2").style.border = "0.09rem solid hsl(354, 100%, 66%)";
    document.getElementById("invalidError").innerHTML = "Please check your email";
    document.getElementById("invalidError2").innerHTML = "Please check your email";
    return false;
  }
}
