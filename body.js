   function massbody() {
            var h = parseFloat(document.getElementById("hight").value);
            var w = parseFloat(document.getElementById("weight").value);
            var gender = document.getElementById("gender").value;

            var BMI = (w / ((h * h) / 10000)).toFixed(2);

            if (h <= 0) {
                alert("الرجاء إدخال الطول من فضلك");
                return false;
            } else if (h <= 10 || h > 300) {
                alert("الرجاء إدخال الطول بالشكل الصحيح من فضلك");
                return false;
            } else if (w <= 0) {
                alert("الرجاء إدخال الوزن من فضلك");
                return false;
            } else if (w < 10 || w > 350) {
                alert("الرجاء إدخال الوزن بالشكل الصحيح من فضلك");
                return false;
            } else if (gender.length <= 0) {
                alert("الرجاء إدخال الجنس من فضلك");
                return false;
            }

            if (BMI <= 15) {
                alert("انت تعاني من مجاعة\n وهذا مؤشر خطير");
            } else if (BMI > 15 && BMI <= 17.5) {
                alert("انت تعاني من مجاعة \nوهذا مؤشر خطير أحتمال إصابتك بأمراض القلب مرتفع");
            } else if (BMI > 17.5 && BMI <= 18.5) {
                alert(" انت تعاني من نقص من الوزن   \nوهذا مؤشر خطير أحتمال إصابتك بأمراض القلب مرتفعة ");
            } else if (BMI > 18.5 && BMI <= 24.9) {
                alert("   لديك وزن مثالي  \n  فرصة إصابتك بأمراض القلب منخفظة حافظ على وزنك ");
            } else if (BMI > 25 && BMI <= 25.9) {
                alert(" انت تعاني من زيادة الوزن  \n مؤشر خطير  على  الإصابة بأمراض القلب");
            } else if (BMI >= 30 && BMI <= 30.9) {
                alert(" انت تعاني من السمنة   \nمؤشر خطير  على  الإصابة بأمراض القلب");
            } else if (BMI >= 40) {
                alert("انت تعاني من البدانة المفرطة  \nوهذا مؤشر خطير على زيادة إحتمالة إصابتك على أمراض القلب");
            }
        }











// function massbody()
// {
//     var h = document.getElementById("hight").value;
//     var w = document.getElementById("weight").value;
//     var gender = document.getElementById("gender").value;
     
//     let BMI =  (w / ((h * h) / 10000)).toFixed(2);

//     if(h.length <=  0)
//     {
//         alert("الرجاء إدخال الطول من فضلك");  
//         return false;

//     }
//     else if(h <=  10 ||  h >300 )
//     {
//         alert("الرجاء إدخال الطول بالشكل الصحيح من فضلك");  
//         return false;

//     }
//     else if(w.length <=  0)
//     {
//         alert("الرجاء إدخال الوزن من فضلك");  
//         return false;

//     }
//     else if(w <10 || w >350)
//     {
//         alert("الرجاء إدخال الوزن بالشكل الصحيح من فضلك");   
//         return false;

//     }
   

//     else if(gender.length <=  0)
//     {
//         alert("الرجاء إدخال الجنس من فضلك");  
//         return false;

//     }

//     else if (BMI <= 15){

// alert("انت تعاني من مجاعة\n وهذا مؤشر خطير")

// }

// else if (BMI > 15   && BMI <=17.5 )

// {

//     alert("انت تعاني من مجاعة \nوهذا مؤشر خطير أحتمال إصابتك بأمراض القلب مرتفع")
    
//     }

//     else if (BMI >17.5   && BMI <=18.5 )

//     {
    
//         alert(" انت تعاني من نقص من الوزن   \nوهذا مؤشر خطير أحتمال إصابتك بأمراض القلب مرتفعة ")
        
//         }


        
// else if (BMI >18.5   && BMI <=24.9 )

// {

//     alert("   لديك وزن مثالي  \n  فرصة إصابتك بأمراض القلب منخفظة حافظ على وزنك ")
    
//     }

//     else if (BMI >25   && BMI <=25.9 )

// {

//     alert(" انت تعاني من زيادة الوزن  \n مؤشر خطير  على  الإصابة بأمراض القلب")
    
//     }
// else if (BMI >= 30   && BMI <=30.9 )

// {

//     alert(" انت تعاني من السمنة   \nمؤشر خطير  على  الإصابة بأمراض القلب")
    
//     }
    
// else if (BMI >= 40 )

// {

//     alert("انت تعاني من البدانة المفرطة  \nوهذا مؤشر خطير على زيادة إحتمالة إصابتك على أمراض القلب")
    
//     }




// }
