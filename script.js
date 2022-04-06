function dataCheck() {
    event.preventDefault();
    var x=document.getElementById("itext").value;
    /*this is used for the first main test
    of the string obtained by the input.
    Please note that this regex only accepts
    a specific date format: dd/mm/yyyy.
    A more complex regex is required to accept
    other formats like dd-mm-yy or dd.mm.yyyy*/
    var isDate = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
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
           if (/^[true|false]+$/i.test(x) == true) { document.getElementById("result").innerHTML="Boolean";
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