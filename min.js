var Ctrl=document.getElementById("Ctrl");
var body=document.getElementById("body");
body.addEventListener("click",function(){
    var state=Ctrl.checked;
    
    if (state) {
        body.setAttribute("class",'night');
    }
    else{
        body.removeAttribute("class",'night');
    }
});
function submitanswers(){
	var total=25;
	var score=0;
	var q1=document.forms["quizForms"]["q1"].value;
	var q2=document.forms["quizForms"]["q2"].value;
	var q3=document.forms["quizForms"]["q3"].value;
	var q4=document.forms["quizForms"]["q4"].value;
	var q5=document.forms["quizForms"]["q5"].value;
	var q6=document.forms["quizForms"]["q6"].value;
	var q7=document.forms["quizForms"]["q7"].value;
	var q8=document.forms["quizForms"]["q8"].value;
	var q9=document.forms["quizForms"]["q9"].value;
	var q10=document.forms["quizForms"]["q10"].value;
	var q11=document.forms["quizForms"]["q11"].value;
	var q12=document.forms["quizForms"]["q12"].value;
	var q13=document.forms["quizForms"]["q13"].value;
	var q14=document.forms["quizForms"]["q14"].value;
	var q15=document.forms["quizForms"]["q15"].value;
	var q16=document.forms["quizForms"]["q16"].value;
	var q17=document.forms["quizForms"]["q17"].value;
	var q18=document.forms["quizForms"]["q18"].value;
	var q19=document.forms["quizForms"]["q19"].value;
	var q20=document.forms["quizForms"]["q20"].value;
	var q21=document.forms["quizForms"]["q21"].value;
	var q22=document.forms["quizForms"]["q22"].value;
	var q23=document.forms["quizForms"]["q23"].value;
	var q24=document.forms["quizForms"]["q24"].value;
	var q25=document.forms["quizForms"]["q25"].value;

	for (var i =  1; i <= total; i++) {
		if( eval('q'+i)==null || eval('q'+i)=='')
		{
			alert("Your Missed Question "+i);
			return false;
		}
	}
	var ansewer=["d","c","c","c","c","c","d","a","b","a","b","b","c","a","c","a","b","a","c","a","c","b","a","c","b",];

	for (var i =  1; i <= total; i++) {
		if( eval('q'+i)==ansewer[i-1])
		{
			score++;
		}
	}

	var result=document.getElementById('result');
	result.innerHTML='<h3>تعداد پاسخ های درست <span>'+score+'</span> از <span>'+total+'</span></h3>';
	return false;
}