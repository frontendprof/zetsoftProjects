
function getHistory(){
    return document.getElementById("hist-val").innerText;
}
// alert(getHistory())

function printHistory(num){
    document.getElementById("hist-val").innerText=num;
}
// printHistory("8*2")

function getOutput(){
    return document.getElementById("output-val").innerText;
}


function printOutput(num){
    document.getElementById("output-val").innerText=getFormattedNumber(num);
}

// printOutput(123435345345)

// Getting coma separated numbers
function getFormattedNumber(num){
    let n=Number(num);
    let val=n.toLocaleString("en");
    return val;
}
























// toLocaleString() ====> 212312,,41234,1234
