function three(){
  console.log("I love you"); 
}
function two(){
  three(); 
}
function one(){
  two(); 
}
function zero(){
  one(); 
}
zero();