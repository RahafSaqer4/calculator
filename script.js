const zero=document.getElementById("zero");
const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
const four=document.getElementById("four");
const five=document.getElementById("five");
const six=document.getElementById("six");
const seven=document.getElementById("seven");
const eight=document.getElementById("eight");
const nine=document.getElementById("nine");
const plus=document.getElementById("plus");
const subtract=document.getElementById("subtract");
const multyplay=document.getElementById("multyplay");
const divide=document.getElementById("divide");
const percent=document.getElementById("percent")
const equal=document.getElementById("equal");
const point=document.getElementById("point");
const plusSubtract=document.getElementById("plusSubtract");
const screen=document.getElementById("screen");
const result=document.getElementById("result");
const clear=document.getElementById("clear");
const deleteButton=document.getElementById("delete")
let x="";
let y="";
let op="";
let res=0;
result.innerText="0"
function operate(X,Y,OP){
    switch(OP){
        case "+":
            return X+Y;
        case "/":
            if(Y===0){
                return "Error"
            }
            else{
            return X/Y;}
        case "-":
            return X-Y;
        case "×":
            return Y*X;
    }
}

zero.addEventListener("click",function(){
    y+="0";
    result.textContent=y;
})
one.addEventListener("click",function(){
    y+="1";
    result.textContent=y;
})
two.addEventListener("click",function(){
    y+="2";
    result.textContent=y;
})
three.addEventListener("click",function(){
    y+="3";
    result.textContent=y;
})
four.addEventListener("click",function(){
    y+="4";
    result.textContent=y;
})
five.addEventListener("click",function(){
    y+="5";
    result.textContent=y;
})
six.addEventListener("click",function(){
    y+="6";
    result.textContent=y;
})
seven.addEventListener("click",function(){
    y+="7";
    result.textContent=y;
})
eight.addEventListener("click",function(){
    y+="8";
    result.textContent=y;
})
nine.addEventListener("click",function(){
    y+="9";
    result.textContent=y;
})
point.addEventListener("click", function(){
    y+=".";
    result.textContent=y;
})
plus.addEventListener("click",function(){
    op="+";
    if(res===0){
        x=Number(y);
    }
    else{
        x=res;
    }
    result.textContent=op;
    y="";
})
subtract.addEventListener("click",function(){
    op="-";
    if(res===0){
        x=Number(y);
    }
    else{
        x=res;
    }
    result.textContent=op;
    y="";
})
multyplay.addEventListener("click",function(){
    op="×";
    if(res===0){
        x=Number(y);
    }
    else{
        x=res;
    }
    result.textContent=op;
    y="";
})
divide.addEventListener("click",function(){
    op="/";
    if(res===0){
        x=Number(y);
    }
    else{
        x=res;
    }
    y="";
    result.textContent=op;
})
percent.addEventListener("click", function(){
    if(res===0){
        x=Number(y);
    }
    else{
        x=res;
    }
    res=x/100;
    result.innerText=res;
})
equal.addEventListener("click",function(){
    res=operate(x,Number(y),op);
    res=Math.round(res * 1000) / 1000;
    result.innerText=res;
})

clear.addEventListener("click",function(){
    result.textContent="0";
    res=0;
    x="";
    y="";
    op="";
})
deleteButton.addEventListener("click",function(){
    if(res===0){
        y=y.slice(0,(y.length)-1);
        result.innerText=y;
    }
    else if(result.innerText===op){
        op="";
        result.innerText="Enter an Operation";
        y=x;       
    }
    else{
        res=String(res);
        res=res.slice(0,(res.length)-1);
        res=Number(res)
        x=res;
        result.innerText=x;
    }
})
plusSubtract.addEventListener("click",function(){
    if(res===0){
        y=Number(y)*(-1);
        result.innerText=y;
    }
    else{
        res=res*(-1);
        result.innerText=res;
    }
})