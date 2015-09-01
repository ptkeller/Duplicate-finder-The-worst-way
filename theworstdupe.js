var instanceCounter = function (str){
  var holder = [];
  holder.push(str.split(''));
  var answer = [];
  var counterA = 0;
  var counterB = 0;
  var counterC = 0;
  var counterD = 0;
  var counterE = 0;
  var counterF = 0;
  var counterG = 0;
  var counterH = 0;
  var counterJ = 0;
  var counterI = 0;
  var counterK = 0;
  var counterL = 0;
  var counterM = 0;
  var counterN = 0;
  var counterO = 0;
  var counterP = 0;
  var counterQ = 0;
  var counterR = 0;
  var counterS = 0;
  var counterT = 0;
  var counterU = 0;
  var counterV = 0;
  var counterW = 0;
  var counterX = 0;
  var counterY = 0;
  var counterZ = 0;


for(var i = 0; i < holder.length; i++){
  for(var j = 0; j < holder[i].length; j++){
  if(holder[i][j] === 'a'){
    counterA++;
    if(counterA > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'b'){
    counterB++;
    if(counterB > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'c'){
    counterC++;
    if(counterC > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'd'){
    counterD++;
    if(counterD > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'e'){
    counterE++;
    if(counterE > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'f'){
    counterF++;
    if(counterF > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'g'){
    counterG++;
    if(counterG > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'h'){
    counterH++;
    if(counterH > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] ==='i'){
    counterI++;
    if(counterI > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'j'){
    counterJ++;
    if(counterJ > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'k'){
    counterK++;
    if(counterK > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'j'){
    counterJ++;
    if(counterJ > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'l'){
    counterL++;
    if(counterL > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'm'){
    counterM++;
    if(counterM > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'n'){
    counterN++;
    if(counterN > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'o'){
    counterO++;
    if(counterO > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'p'){
    counterP++;
    if(counterP > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'q'){
    counterQ++;
    if(counterQ > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'r'){
    counterR++;
    if(counterR > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 's'){
    counterS++;
    if(counterS > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 't'){
    counterT++;
    if(counterT > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'u'){
    counterU++;
    if(counterU > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'v'){
    counterV++;
    if(counterV > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'w'){
    counterW++;
    if(counterW > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'x'){
    counterX++;
    if(counterX > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'y'){
    counterY++;
    if(counterY > 1){
      answer.push(holder[i][j]);
    }
  }
  if(holder[i][j] === 'z'){
    counterZ++;
    if(counterZ > 1){
      answer.push(holder[i][j]);
    }
  }
}
}
var uniq = new Set(answer) ;
return uniq;
}
