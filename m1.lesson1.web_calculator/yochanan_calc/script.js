

// im used eval func, i didnt know that u asked not to use this func.next tim (25/3/18)
function calc_FNC(){

  try {

    if (document.getElementById('display').value !=""){
    
      let result = eval(document.getElementById('display').value);

      switch(result) {
        case undefined:
        document.getElementById('display').value = "ERROR";
            break;
        case Infinity:
        document.getElementById('display').value = "you can not divide by zero";
            break;
        default:
        document.getElementById('display').value = result;
      }
    }

    else{
      document.getElementById('display').value ="";
    }

    } 

  catch (error) {
  document.getElementById('display').value = "ERROR";
}

}

