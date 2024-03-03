function sum() {
    let input1= parseInt(prompt("enter your number 1"));
    let input2 = parseInt(prompt("enter your number 2"));

    let result = input1+input2;

    document.write("total sum of two numbers ---->"+result);

}

function sortedarray(){
    let number_arr = [9,2,5,3,7,4];
    document.write(number_arr.sort());
}

//function or metho with parameters

function Happymsg(message){

alert(message);
}

// Happymsg("hello world");

function show_greater_num(num1,num2,num3){

    if(num1>num2 && num1>num3){

        alert("num1 is greater---"+num1);
    }
   if (num2>num1 && num2>num3){
    alert("this second greater--->"+num2);
   }
   else{

    alert("num3 is greater--->"+num3);
   }

}