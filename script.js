function telephoneCheck(str) {
 
    // Regular expression pattern Of a valid US number.
    let myRegx = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   
     return myRegx.test(str);
   
   }
   
   telephoneCheck("1 (555) 555-5555");