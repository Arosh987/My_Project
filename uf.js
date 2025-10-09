let un=document.getElementById('name');
let mail=document.getElementById('mail');
let pass=document.getElementById('pass');
let cpass=document.getElementById('cpass');
let cell=document.getElementById('cnum');
let s=document.getElementById("show");

function validate(){
	if (un.value===""){
		s.innerText=" User Name is required!!!";
		return false;
	}
	else if (pass.value.length<8){
		s.innerText="Pasword should be minimum 8 characters!!!";
		return false;
	}
	else if (cpass.value!=pass.value){
		s.innerText="Passwords didn't match!!!";
		return false;
	}
	else if (mail.value===""){
		s.innerText="E-mail is required!!!";
		return false;
	}
	else if (cell.value.length!=11){
		s.innerText="Contact Number must be 11 digits!!!";
		return false;		
	}
}

//i have no memory of why i made these return false