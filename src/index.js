module.exports = function toReadable(number) {
  let str = "" + number;
  str = str.split("");

  for (let i = 0; i < str.length; i++){
    if(str.length == 2){
      if(i == 1) {
        str[i] = (convertHundredsAndInitsToString(str[i]));
      } else if(str[0]==1 && str[1]!=0){
        let a = '1'+str[1];
        str[i] = (convertNumberFromElevenToNineteenToString (a));
        str[1]="";
        break;
      } else if(str[0]!=0 && str[1]>=0 ){
        str[i] = (convertTenthsToString(str[i]));
      }
    } else {
      if(i != 1) {
        str[i] = (convertHundredsAndInitsToString(str[i]));
      } else if(str[1]==1 && str[2]!=0){
        let a = '1'+str[2];
        str[i+1] = (convertNumberFromElevenToNineteenToString (a));
        str[1]="";
        break;
      } else if(str[1]!=0 && str[2]>=0 ){
        str[i] = (convertTenthsToString(str[i]));
      } else{
        str[i]="";
      }
    }  

  }
  
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.length == 3 && i == 0) {
      result = result + str[i] + " hundred ";
    } else if (str[i]) {
      result = result + str[i] + " ";
    }
  }
  if (result == "") {
    return "zero";
  } else {
    return result.trim();
  }
  
}


function convertHundredsAndInitsToString(number) {
  switch (number){
    case "1":
      return  ("one");
    case "2":
      return  ("two"); 
    case "3":
      return  ("three");
    case "4":
      return ("four");
    case "5":
      return  ("five"); 
    case "6":
      return  ("six"); 
    case "7":
      return ("seven");
    case "8":
      return  ("eight");    
    case "9":
      return  ("nine");
    default: 
      return "";
  }
}

function convertTenthsToString(number) {
  switch (number){
    case "1":
      return ("ten");
    case "2":
      return  ("twenty"); 
    case "3":
      return  ("thirty");
    case "4":
      return ("forty");
    case "5":
      return  ("fifty"); 
    case "6":
      return  ("sixty"); 
    case "7":
      return ("seventy");
    case "8":
      return  ("eighty");    
    case "9":
      return  ("ninety");
    default: 
      return alert("Enter the 1");
  }
}


function convertNumberFromElevenToNineteenToString(number) {
  switch (number){
    case "11":
      return ("eleven");
    case "12":
      return  ("twelve"); 
    case "13":
      return  ("thirteen");
    case "14":
      return ("fourteen");
    case "15":
      return  ("fifteen"); 
    case "16":
      return  ("sixteen"); 
    case "17":
      return ("seventeen");
    case "18":
      return  ("eighteen");    
    case "19":
      return  ("nineteen");
    default: 
      return alert("Enter the 2");
  }
}