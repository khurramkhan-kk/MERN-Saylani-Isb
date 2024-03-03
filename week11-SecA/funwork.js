/* function Table_print() {
    
alert("This is coming soon for table printing output");

}

function Two_d_arr_data(){
  alert("this function will show 2d array data");
}

// Table_print(); //you are calling your method or function

function Quiz_App(){

    alert("Quiz Application is loading....");

Quiz_App_Logic();

}

function Quiz_App_Logic(){

    let questions = [prompt("Is it rainy day today \n 1) Yes \n No")];

    let marks=0;
    if (questions=="Yes"){
        marks++;
    }
   
    document.write("You score is--->"+marks);
}

function bigmsg(){

    alert("this is for big msg");
    function shortmsg(){
        alert("this is for short msg");
    }
    shortmsg();
}

function myforloopwork(){

    
}
 */
function sumofarry(){

    let inputnumbers = [parseInt(prompt("enter number 1")),
    parseInt(prompt("enter number 1")),
    parseInt(prompt("enter number 1")),
];

//logical handling for making sum:
let total_sum = inputnumbers[0]+inputnumbers[1]+inputnumbers[2];

document.write("total sum is---->"+total_sum);
}
// sumofarry(); //this is your function calling

function extractingword(message){
//let message = "Happy coding in JS";

    alert(message);
}


// extractingword(prompt("enter any message to show"));