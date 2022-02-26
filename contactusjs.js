function contactus()
{




var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var country = document.getElementById("country").value;
var masage = document.getElementById("subject").value;



 if(fname.length <=  0)
{
    alert("الرجاء إدخال الأسم الأول من فضلك");  
    return false;

}
else if(lname.length <=  0)
{
    alert("الرجاء إدخال الأسم الثاني من فضلك");   
    return false;

}


else if(country.length <=  0)
{
    alert("الرجاء إدخال الدولة من فضلك");  
    return false;

}


else if(masage.length <=  0)
{
    alert("الرجاء إدخال الرسالة من فضلك");  
    return false;

}


else{



alert( fname + lname+ "  اهلا  \n  سوف نقوم بالتواصل معك بأقرب  وقت شكرا لسؤالك ")
}

}