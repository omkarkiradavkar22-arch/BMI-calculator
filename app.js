const bmi = document.querySelector(".bmi");
const submit = document.querySelector(".submit");
const output = document.querySelector(".output");
        const error = document.querySelector(".error");
        
        submit.addEventListener("click",()=>{
            const w = document.querySelector(".weight").value;
            const h = document.querySelector(".height").value;
            if(!w && !h){
                error.innerHTML="Please enter weight and height";
            }else{
                error.innerHTML="";
                let BMI = w/(h**2) ;
                output.innerHTML=BMI.toFixed(2);
           if(BMI<18.5){
            bmi.innerHTML="Underweight";
            bmi.style.color="blue";
           }else if(18.5<=BMI && BMI<=24.9){
            bmi.style.color="green";
            bmi.innerHTML="normal weight";
           }else if(25<=BMI && BMI<=29.9){
            bmi.innerHTML="Over weight";
            bmi.style.color="orange";
           }else{
            bmi.style.color="red";
            bmi.innerHTML="Obesity";
           }
        }
        });
