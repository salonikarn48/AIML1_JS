var count=0;
document.write("Current Count:"+count+"<br/>");
while(count<10){
    document.write("Current Count:"+count+"<br/>");
    count++;
}
document.write("loop stopped");




var age=20;
if(age>18){
    document.write("<b>You are eligible to vote</b>");
}
else if(age>=18){
    document.write("You are an adult");
}
else{
    document.write("You are a minor");
}

var grade='A';
document.write("Entering switch block<br/>");
switch(grade){
    case 'a':document.write("Good Job<br/>");
    break;
    case 'b':document.write("Pretty good<br/>");
    break;
    case 'c':document.write("Passed</br>");
    break;
    
}

function myFunction(){
    alert("Hello World");
}
<<<<<<< HEAD

=======
>>>>>>> c3be21cd1ee160566994b7ae01a8b8e90d84a74c
function sayHello(name,age){
    document.write(name+"is"+age+"years old");
}
var res=mul(12,30);
function mul(x,y){
    return x*y;
}
<<<<<<< HEAD
document.write(res);
=======
document.write(res);*/
>>>>>>> c3be21cd1ee160566994b7ae01a8b8e90d84a74c
function add(a,b){
    console.log(a+b);
}add(10,20);



var add2=(a,b) => {
    console.log(a+b);
};
add2(102,20);
//arrow fumction for single line parameters
var add3=(a,b) => console.log(a+b);
add3(30,20);

var person2=new Object();
person2.name='Shweta';
person2.age=32;
person2.isMarried=true;
person2.address={};
person2.address.street="nagar road";
person2['address']['flatno']=33;
console.log(person2);
