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
        HexOutput(text);
    }
    if (octalbutton.checked == true){
        OctalOutput(text);
        
    }
}

function DecimalOutput(numberInt){
    changeDecText(numberInt);

}

function BinaryOutput(numberInt){
    alert("binary");

}

function HexOutput(numberString){
    alert("Hex");

}

function OctalOutput(numberString){
    alert("Octal");

}

function changeDecText(numberString){
    document.getElementById("decimal-output").innerHTML = numberString;
    document.getElementById("output-table").addEventListener("submit", (e) => {
        e.preventDefault();
    });
}

function changeBinText(){
    
}

function changeHexText(){
    
}

function changeOctText(){
    
}

