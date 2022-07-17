var sec=00;
var min=00;
var hr=00;
var interval;

function twoD(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return (digit)
    }
}

function start(){
    time()
    interval=setInterval(time,1000)
}
function pause(){
    clearInterval(interval)
}
function stop(){
    clearInterval(interval)
    sec=0
    min=0
    hr=0
    document.getElementById('time').innerText='00:00:00'
}
        
function time(){
    sec++
    if(sec==60){
        min++;
        sec=0;
    if(min==60){
        hr++
        min=0
    }
    }
    document.getElementById('time').innerText=twoD(hr)+':'+twoD(min)+':'+twoD(sec)
}