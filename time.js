var time = document.getElementById("current-time");


setInterval(() => {
   let d = new Date();

   time.innerHTML = d.toLocaleTimeString();
},1000) //---1000 means 1000 mili seconds or 1 second