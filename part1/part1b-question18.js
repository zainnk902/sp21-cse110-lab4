function logg(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }
setInterval(logg, 1000);
  