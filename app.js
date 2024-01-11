let buttons = document.querySelectorAll('button');

let input = document.getElementById('btn9');

let string = "";
let arr = Array.from(buttons);

arr.forEach(btn => {
    btn.addEventListener('click',(clk)=>{
        if(clk.target.innerHTML == '='){
string=eval(string);
input.value=string;
        }
        else if(clk.target.innerHTML=='CE'){
            string="";
            input.value=string;

        }
        else if(clk.target.innerHTML=="DEL"){
string=string.substring(0,string.length-1);
input.value=string;
        }
else{
    string=string+clk.target.innerHTML;
    input.value=string;

}

    })
});