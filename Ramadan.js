let day=document.getElementById("days")
let hour=document.getElementById("hours")
let min=document.getElementById("min")
let secs=document.getElementById("sec")



const ramadan=('10 March 2024');
function countdown(){
    const ramadanDate=new Date (ramadan);
    const currentDate=new Date ();
    const totalSecnods=(ramadanDate-currentDate)/1000;
    const days=Math.floor(totalSecnods/3600/24);
    const hours=Math.floor(totalSecnods/3600)%24;
    const mins=Math.floor(totalSecnods/60)%60;
    const sec=Math.floor(totalSecnods)%60;

    // console.log(currentDate,totalSecnods,days,hours,mins,sec);
    day.innerHTML=days;
    hour.innerHTML=formatTime(hours);
    min.innerHTML=formatTime(mins);
    secs.innerHTML=formatTime(sec);
}
function formatTime(time){
    return time<10 ? (`0${time}`) :time;
}
countdown();
setInterval(countdown,1000);