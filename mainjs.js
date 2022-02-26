function Heartdiseasetestresult()
{

  var email=document.getElementById("gmail").value;

    var name = document.getElementById("name").value;

    var possibilityofdisease = 0;

    var age = document.getElementById("age").value;
    if (age>25){

        possibilityofdisease +=1;
    }

    var hight = document.getElementById("hight").value;
    var weight = document.getElementById("weight").value;
     
    let BMI = (weight/((hight*hight))/1000).toFixed(2);
    if (BMI > 25 || BMI < 18)
    {
        possibilityofdisease +=1;

    }


    var gender = document.getElementById("gender").value;
if (gender == "male"){
    possibilityofdisease +=1;

}

    var koholtest = document.getElementById("koholtest").value;

    if (koholtest == "yes"){
        possibilityofdisease +=2;
    
    }

    var hartdisese = document.getElementById("hartdisese").value;

    if (hartdisese == "yes"){
        possibilityofdisease +=2;
    
    }
    var colostroltest = document.getElementById("colostroltest").value;

    if (colostroltest == "abovenormal"){
        possibilityofdisease +=1;
    
    }

    if (colostroltest == "notnormal"){
        possibilityofdisease +=2;
    
    }

    
    
    var colostroldoc = document.getElementById("colostroldoc").value;

    if (colostroldoc == "yes"){
        possibilityofdisease +=2;
    
    }


    var blusurtest = document.getElementById("blusurtest").value;

    if (blusurtest == "yes"){
        possibilityofdisease +=1;
    
    }

    var smoketest = document.getElementById("smoketest").value;

    if (smoketest == "yes"){
        possibilityofdisease +=2;
    
    }
    var shogurtest = document.getElementById("shogurtest").value;

    if (shogurtest == "yes"){
        possibilityofdisease +=1;
    
    }

    var sporttest = document.getElementById("sporttest").value;

if(sporttest == "no"){

    possibilityofdisease +=1;
    

}

    var frottest = document.getElementById("frottest").value;

    if(frottest == "no"){

        possibilityofdisease +=1;
        
    
    }



if (possibilityofdisease >8 ){

    if (name.length <= 0) {  
        alert("الرجاء إدخال أسم من فضلك");  
       
    }  

    else if(email.length <=  0)
    {
        alert("الرجاء إدخال الإيميل من فضلك");  
        return false;

    }
   

    else if(!email.includes('@') )
    {
    
        alert("الرجاء إدخال الإيميل   بالشكل الصحيح من فضلك");  
        return false;

    }
    else if(age.length <=  0)
    {
        alert("الرجاء إدخال العمر من فضلك");  
        return false;

    }
    else if(age <10 && age <100)
    {
        alert("الرجاء إدخال العمر  ما بين 10 إالى 100 سنة من فضلك");  
        return false;

    }
    


    else if(hight.length <=  0)
    {
        alert("الرجاء إدخال الطول من فضلك");  
        return false;

    }
    else if(hight <=  10 ||  hight >300 )
    {
        alert("الرجاء إدخال الطول بالشكل الصحيح من فضلك");  
        return false;

    }
    else if(weight.length <=  0)
    {
        alert("الرجاء إدخال الوزن من فضلك");  
        return false;

    }
    else if(weight <20 || weight >250)
    {
        alert("الرجاء إدخال الوزن بالشكل الصحيح من فضلك");   
        return false;

    }
   

    else if(gender.length <=  0)
    {
        alert("الرجاء إدخال الجنس من فضلك");  
        return false;

    }

    else if(koholtest.length <=  0)
    {
        alert("الرجاء إدخال اختبار الكحول من فضلك");  
        return false;

    }

    else if(hartdisese.length <=  0)
    {
        alert("الرجاء إدخال خيار إذ كنت تعاني من امراض القلب من فضلك");  
        return false;

    }


    else if(colostroldoc.length <=  0)
    {
        alert("الرجاء إدخال  نسبة الكوليسترول  من فضلك");  
        return false;

    }


    else if(colostroltest.length <=  0)
    {
        alert("الرجاء إدخال     فحص الكوليسترول   من فضلك");  
        return false;

    }


    else if(smoketest.length <=  0)
    {
        alert("الرجاء إدخال اختبار التدخين من فضلك");  
        return false;

    }

 

    else if(shogurtest.length <=  0)
    {
        alert("الرجاء إدخال أختبار السكري من فضلك");  
        return false;

    }

    else if(sporttest.length <=  0)
    {
        alert("الرجاء إدخال أختبار اللياقة البدنية من فضلك");  
        return false;

    }
    else if(frottest.length <=  0)
    {
        alert("الرجاء إدخال اختبار إستهلاك الفاكهة  من فضلك");  
        return false;

    }

    
else{
    alert(name +"  مرحبا يسعدنا مساعدتك  \n نتيجة اختبارك هي \n    يجب عليك مراجعة طبيب فورا احتمالية إصابتك بمرض القلب عالية جدا  ")
}
}


if (possibilityofdisease <= 4 ){

    if (name.length <= 0) {  
        alert("الرجاء إدخال أسم من فضلك");  
       
    }  

    else if(email.length <=  0)
    {
        alert("الرجاء إدخال الإيميل من فضلك");  
        return false;

    }
   

    else if(!email.includes('@') )
    {
    
        alert("الرجاء إدخال الإيميل   بالشكل الصحيح من فضلك");  
        return false;

    }
    else if(age.length <=  0)
    {
        alert("الرجاء إدخال العمر من فضلك");  
        return false;

    }
    else if(age <10 && age <100)
    {
        alert("الرجاء إدخال العمر  ما بين 10 إالى 100 سنة من فضلك");  
        return false;

    }
    


    else if(hight.length <=  0)
    {
        alert("الرجاء إدخال الطول من فضلك");  
        return false;

    }
    else if(hight <=  10 ||  hight >300 )
    {
        alert("الرجاء إدخال الطول بالشكل الصحيح من فضلك");  
        return false;

    }
    else if(weight.length <=  0)
    {
        alert("الرجاء إدخال الوزن من فضلك");  
        return false;

    }
    else if(weight <20 || weight >250)
    {
        alert("الرجاء إدخال الوزن بالشكل الصحيح من فضلك");   
        return false;

    }
   

    else if(gender.length <=  0)
    {
        alert("الرجاء إدخال الجنس من فضلك");  
        return false;

    }

    else if(koholtest.length <=  0)
    {
        alert("الرجاء إدخال اختبار الكحول من فضلك");  
        return false;

    }

    else if(hartdisese.length <=  0)
    {
        alert("الرجاء إدخال خيار إذ كنت تعاني من امراض القلب من فضلك");  
        return false;

    }


    else if(colostroldoc.length <=  0)
    {
        alert("الرجاء إدخال  نسبة الكوليسترول  من فضلك");  
        return false;

    }


    else if(colostroltest.length <=  0)
    {
        alert("الرجاء إدخال     فحص الكوليسترول   من فضلك");  
        return false;

    }


    else if(smoketest.length <=  0)
    {
        alert("الرجاء إدخال اختبار التدخين من فضلك");  
        return false;

    }

 

    else if(shogurtest.length <=  0)
    {
        alert("الرجاء إدخال أختبار السكري من فضلك");  
        return false;

    }

    else if(sporttest.length <=  0)
    {
        alert("الرجاء إدخال أختبار اللياقة البدنية من فضلك");  
        return false;

    }
    else if(frottest.length <=  0)
    {
        alert("الرجاء إدخال اختبار إستهلاك الفاكهة  من فضلك");  
        return false;

    }


else{
    alert(name +"  مرحبا يسعدنا مساعدتك  \n نتيجة اختبارك هي \n   انت في حالة صحية جيدة ننصحك بالمزيد من الرياضة و الإبتعاد عن التدخين ");}
}


    if (possibilityofdisease >4 &&  possibilityofdisease <= 7){

        if (name.length <= 0) {  
            alert("الرجاء إدخال أسم من فضلك");  
           
        }  
    
        else if(email.length <=  0)
        {
            alert("الرجاء إدخال الإيميل من فضلك");  
            return false;
    
        }
       
    
        else if(!email.includes('@') )
        {
        
            alert("الرجاء إدخال الإيميل   بالشكل الصحيح من فضلك");  
            return false;
    
        }
        else if(age.length <=  0)
        {
            alert("الرجاء إدخال العمر من فضلك");  
            return false;
    
        }
        else if(age <10 && age <100)
        {
            alert("الرجاء إدخال العمر  ما بين 10 إالى 100 سنة من فضلك");  
            return false;
    
        }
        
    
    
        else if(hight.length <=  0)
        {
            alert("الرجاء إدخال الطول من فضلك");  
            return false;
    
        }
        else if(hight <=  10 ||  hight >300 )
        {
            alert("الرجاء إدخال الطول بالشكل الصحيح من فضلك");  
            return false;
    
        }
        else if(weight.length <=  0)
        {
            alert("الرجاء إدخال الوزن من فضلك");  
            return false;
    
        }
        else if(weight <20 || weight >250)
        {
            alert("الرجاء إدخال الوزن بالشكل الصحيح من فضلك");   
            return false;
    
        }
       
    
        else if(gender.length <=  0)
        {
            alert("الرجاء إدخال الجنس من فضلك");  
            return false;
    
        }
    
        else if(koholtest.length <=  0)
        {
            alert("الرجاء إدخال اختبار الكحول من فضلك");  
            return false;
    
        }
    
        else if(hartdisese.length <=  0)
        {
            alert("الرجاء إدخال خيار إذ كنت تعاني من امراض القلب من فضلك");  
            return false;
    
        }
    
    
        else if(colostroldoc.length <=  0)
        {
            alert("الرجاء إدخال  نسبة الكوليسترول  من فضلك");  
            return false;
    
        }
    
    
        else if(colostroltest.length <=  0)
        {
            alert("الرجاء إدخال     فحص الكوليسترول   من فضلك");  
            return false;
    
        }
    
    
        else if(smoketest.length <=  0)
        {
            alert("الرجاء إدخال اختبار التدخين من فضلك");  
            return false;
    
        }
    
     
    
        else if(shogurtest.length <=  0)
        {
            alert("الرجاء إدخال أختبار السكري من فضلك");  
            return false;
    
        }
    
        else if(sporttest.length <=  0)
        {
            alert("الرجاء إدخال أختبار اللياقة البدنية من فضلك");  
            return false;
    
        }
        else if(frottest.length <=  0)
        {
            alert("الرجاء إدخال اختبار إستهلاك الفاكهة  من فضلك");  
            return false;
    
        }
    

        else{
        alert(name +"  مرحبا يسعدنا مساعدتك  \n نتيجة اختبارك هي \n   أنت وضع فوق الطبيعي يجب عليك مراجعة طبيب قلب للتأكد من عدم إصابتك")
        
        }}
    






}




