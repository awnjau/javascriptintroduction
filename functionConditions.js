function porridge(num){
  if (num == 1){
    return "small bowl";
  }
  else if (num == 2){
    return "medium bowl";
  }
  else if (num == 3){
    return "big bowl";
  }
  else {
    return "there is no more porridge";
  }
}
console.log(porridge(1));
