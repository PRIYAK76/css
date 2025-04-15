let value=document.querySelectorAll(".num");
let interval=4000;
value.forEach((value)=>{
    let start=0;
    let end=parseInt(value.getAttribute("data-val"));
    let du=math.floor(interval/end);
    let coun=setInterval(function(){
        start+=1;
        value.textContent=start;
        if(start==end){
            clearInterval(coun);
        }
    },du);
});
