const dateOfBirth = document.querySelector("#date-birth");
const luckyNumber= document.querySelector("#lucky-number");
const submitButton=document.querySelector("#btn-result");
const outputText=document.querySelector("#outputText");

const calculateSum=(dob)=>{
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let i=0;i<dob.length;i++){
        sum=sum+Number(dob.charAt(i));
    }
    return sum;
    }

const checkBirthdayIsLucky=()=>{
    const dob =dateOfBirth.value;
    const sum = calculateSum(dob);
    compareValues(sum,luckyNumber);
}

const displayOutput = (message) => {
    outputText.innerText = message;
  };

function compareValues(sum,luckyNumber){
    const date=dateOfBirth.value;
    if(luckyNumber.value>0){
    if(sum % luckyNumber.value===0){
        displayOutput("Lucky!");
    }else{
        displayOutput("Not lucky, You make your own luck ");
    }
}else{
    displayOutput("Please fill both input. Check if the number is positive");
}
}



submitButton.addEventListener("click",checkBirthdayIsLucky)