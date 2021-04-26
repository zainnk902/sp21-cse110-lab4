let statistics = {
    redCard: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars:2
  }
  for(var prop in statistics){
    if(prop[0] == 'r' || stat[prop] % 2 == 1){
      console.log(prop);
    } 
  }