let numdisplay=document.getElementById('numdisp')

let gpa = document.getElementById('gpate')

let grade = document.getElementById('gradete')

let error = document.getElementById('err')

function getgpagr(){

	let marks= Number(numdisplay.value)

	error.innerText ='';

	if(numdisplay.value===''){   //err message 1
		gpa.innerText ='0.00';
		grade.innerText ='N/A';
		error.innerText ='Enter Your Marks!!'; //yes there's an err for not entering your marks
	}


	else if(marks === 0.01){     //this is just way to reset the gpa and grade
		gpa.innerText ='0.00';
		grade.innerText ='N/A';
		error.innerText ='GPA and Grade have been Reset'; //also it's kinda usless
	}

	else if (marks >100) {   //err message 2
		gpa.innerText ='0.00';
		grade.innerText ='N/A';
		error.innerText ='Number Must Not Be Higher Than 100!!';
	}

	else if (marks < 0) {   //err message 3
		gpa.innerText ='0.00';
		grade.innerText ='N/A';
		error.innerText ='Number Must Not Be Negative!!';
	}

	else if (marks >=80) {
		gpa.innerText ='5.00';
		grade.innerText ='A+';
	}

	else if (marks >=70) {
		gpa.innerText ='4.00';
		grade.innerText ='A';

	}

	else if (marks >=60) {
		gpa.innerText ='3.50';
		grade.innerText ='A-';

	}

	else if (marks >=50) {
		gpa.innerText ='3.00';
		grade.innerText ='B'

	}


	else if (marks >=40) {
		gpa.innerText ='2.00';
		grade.innerText ='C'

	}


	else if (marks >=33) {
		gpa.innerText ='1.00';
		grade.innerText ='D'

	}

	else {
		gpa.innerText ='0.00'; //try better next time (:
		grade.innerText ='F'
	}


}