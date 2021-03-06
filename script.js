function dataCheck() {
    event.preventDefault();
    var x=document.getElementById("itext").value;
    /*this is used for the first main test
    of the string obtained by the input.*/
    var isDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    //log used during development    
    //console.log("É número = " + /^-?\d+(?:\.\d+)?$/.test(x));
    
    /*first check is if it's a date, the shows
    the result and sets the opacity back to 100
    to make the value visible*/
    if ((isDate.test(x)) == true) {
        document.getElementById("result").innerHTML="Data";      document.getElementById("result").style.opacity="100";
    /*if it's not a date, checks if it's a      
    number*/
    } else {
        if ((/^-?\d+(?:\.\d+)?$/.test(x)) == true) {
        document.getElementById("result").innerHTML="Número";
document.getElementById("result").style.opacity="100";
       /*if is not a date or a number, check if
       it is a boolean value*/
       } else {
           if (x.toUpperCase() == "TRUE"||x.toUpperCase() == "FALSE"){ 
              document.getElementById("result").innerHTML="Boolean";
              document.getElementById("result").style.opacity="100";
       /*if is not a date, a number or a 
       boolean value, checks if the text 
       field it's empty*/
       } else {
           if (x == "") {
             document.getElementById("result").innerHTML="Null/Undefined"; document.getElementById("result").style.opacity="100";
           /*finally, if it's not a date, a
           a number, a boolean value or empty
           text field, it can only be a string*/
           } else {
               document.getElementById("result").innerHTML="String"; document.getElementById("result").style.opacity="100";          
           } 
       }
    }
  }        
}
