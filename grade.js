function calculate(){

    let a = Number(document.getElementById("computer").value);
    let b = Number(document.getElementById("english").value);
    let c = Number(document.getElementById("math").value);
    let d = Number(document.getElementById("physics").value);
    let e = Number(document.getElementById("chemistry").value);

    if(a>100 || b>100 || c>100 || d>100 || e>100){
        alert("Please enter the valid marks");
    } else {
        let obtainedMarks=a+b+c+d+e;
        document.getElementById("obtain").innerHTML=obtainedMarks

        let percentage=(obtainedMarks/500)*100;
        document.getElementById("per").innerHTML=percentage+"%";

        if(percentage>60){
            document.getElementById("grade").innerHTML="PASS"
        } else{
            document.getElementById("grade").innerHTML="FAIL"
        }

        if(percentage>=90){
            document.getElementById("rem").innerHTML="A+"
        } else if(percentage>=80) {
            document.getElementById("rem").innerHTML="A";
        } else if(percentage>=60) {
            document.getElementById("rem").innerHTML="B+";
        } else if(percentage>=40) {
            document.getElementById("rem").innerHTML="B";
        } else
        {
            document.getElementById("rem").innerHTML="C";
        }
    return false;

}}