const date=new Date();
const year=date.getFullYear();
const month=String(date.getMonth()+1).padStart(2,'0');
const day=String(date.getDate()).padStart(2,'0');
const hour=date.getHours() 
const min=date.getMinutes()
const sec=date.getSeconds()

const timer=document.getElementById("timer");

timer.innerHTML=`${day}/${month}/${year}, ${hour}:${min}:${sec}`
