var numBase;
var checked = document.querySelector(":checked");


function checkChecked(){
    var decimalbutton = document.getElementById("decimal-radio-button");
    var hexbutton = document.getElementById("hex-radio-button");
    var binarybutton = document.getElementById("binary-radio-button");
    var octalbutton = document.getElementById("octal-radio-button");
    
    var text = document.getElementById("text-input").value;
    if (decimalbutton.checked == true){
        DecimalOutput(parseInt(text));
    }
    if (binarybutton.checked == true){
        BinaryOutput(parseInt(text));
    }
    if (hexbutton.checked == true){
        HexOutput(parseInt(text));
    }
    if (octalbutton.checked == true){
        OctalOutput(parseInt(text));
        
    }
}

function DecimalOutput(numberInt){
    changeDecText(numberInt);

}

function BinaryOutput(numberInt){
    changeBinText(numberInt);

}

function HexOutput(numberString){
    changeHexText(numberString);

}

function OctalOutput(numberString){
    changeOctText(numberString);

}

function changeDecText(numberString){


    document.getElementById("decimal-output").innerHTML = numberString;
    document.getElementById("hex-output").innerHTML = parseInt(numberString,10).toString(16);
    document.getElementById("binary-output").innerHTML = parseInt(numberString,10).toString(2);
    document.getElementById("octal-output").innerHTML = parseInt(numberString,10).toString(8);
}

function changeBinText(numberString){   
        document.getElementById("decimal-output").innerHTML = parseInt(numberString,2).toString(10);
        document.getElementById("hex-output").innerHTML = parseInt(numberString,2).toString(16);
        document.getElementById("binary-output").innerHTML = numberString;
        document.getElementById("octal-output").innerHTML = parseInt(numberString,2).toString(8);
}

function changeHexText(numberString){
    document.getElementById("decimal-output").innerHTML = parseInt(numberString,16).toString(10);
    document.getElementById("hex-output").innerHTML = numberString;
    document.getElementById("binary-output").innerHTML = parseInt(numberString,16).toString(2);
    document.getElementById("octal-output").innerHTML = parseInt(numberString,16).toString(8);
}

function changeOctText(numberString){
    document.getElementById("decimal-output").innerHTML = parseInt(numberString,8).toString(10);
    document.getElementById("hex-output").innerHTML = parseInt(numberString,8).toString(16);
    document.getElementById("binary-output").innerHTML = parseInt(numberString,8).toString(2);
    document.getElementById("octal-output").innerHTML = numberString;
}

var form = document.getElementById("form1");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

