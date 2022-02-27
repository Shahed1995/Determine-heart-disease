function diabetes()
{
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var test = document.getElementById("test").value;
    var testforuser = document.getElementById("testforuser").value;
    var brussers = document.getElementById("brussers").value;
    var smok = document.getElementById("smok").value;
    var helthy = document.getElementById("helthy").value;
    var sport = document.getElementById("sport").value;
    var wghit = document.getElementById("wghit").value;
    var totaldiabetes =0;
   


    

 if (age >= 30 & age <=45){

    totaldiabetes=totaldiabetes +1;
}

 if (age > 50){

    totaldiabetes=totaldiabetes +2;
    }

 if (gender=="female")

{

     totaldiabetes=totaldiabetes +1;
    
    
    }

     if (test=="yes" )

    {
    
         totaldiabetes=totaldiabetes +1;
    

        }


        
 if (testforuser =="yes")

{

    totaldiabetes=totaldiabetes +2;
    
    
    }

     if (brussers =="yes")

{

    totaldiabetes=totaldiabetes +2;
    
    
    }
 if (smok =="yes")

{

     totaldiabetes=totaldiabetes +1;
    
    
    }
    
 if (helthy =="sometime")

{

    totaldiabetes=totaldiabetes +1;
    
    }
     if (sport =="no")

{

    totaldiabetes=totaldiabetes +2;
    
    
    }
 if (wghit =="three")

{

    totaldiabetes=totaldiabetes +2;
    
    
    }
    

    if(age.length <=  0)
    {
        alert("الرجاء ادخال العمر");  
        return false;

    }
   
    else if(gender.length <=  0)
    {
        alert("الرجاء إدخال الجنس من فضلك");  
        return false;

    }
   

    else if(test.length <=  0)
    {
        alert("الرجاء إدخال اذ كان  لديك أحداً من أفراد العائلة مصاب بداء السكري من فضلك");  
        return false;

    }
    if(testforuser.length <=  0)
    {
        alert("الرجاء ادخال اذ كنت   تعاني من ارتفاع نسبة الجلوكوز في الدم");  
        return false;

    }
   
    else if(brussers.length <=  0)
    {
        alert("الرجاء إدخال اذ كنت  تعاني من ارتفاع ضغط الدم");   
        return false;

    }
   

    else if(smok.length <=  0)
    {
        alert("الرجاء إدخال اذ كنت  مدخن    ");  
        return false;

    }

    if(helthy.length <=  0)
    {
        alert("الرجاء ادخال كم مرة تأكل الخضروات أو الفاكهة");  
        return false;

    }
   
    else if(sport.length <=  0)
    {
        alert("الرجاء إدخال اذ كنت  تمارس الرياضة   ");   
        return false;

    }
   

    else if(wghit.length <=  0)
    {
        alert("الرجاء إدخال مقاس خصرك      ");  
        return false;

    }

else if(totaldiabetes > 6)

{


alert( " النتيجة \n   نسبة خطر إصابتك بمرض السكري من النوع 2 في الخمس سنوات المقبلة عالية  يجب توخي الحذر ومراجعة طبيب   ")


    }
    else 
    alert(" النتيجة \n     نسبة خطر إصابتك بمرض السكري من النوع 2 في الخمس سنوات المقبلة منخفضة  ")




}