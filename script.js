function generateNumber(){
    
    let randomNum=Math.floor(Math.random()*11);
    let Input=document.querySelector(".input").value;
    let result=document.querySelector(".result");
    
     result.innerHTML=randomNum;
    if (Input>10) {
        alert("choose a number within the  range")
    }
    
    if(randomNum==Input){
        document.querySelector(".message").innerHTML="congratulations you wizard!!!";
        setTimeout(() => {
            location.reload();
        }, 1000);
    } 
    
    else{
    document.querySelector(".message").innerHTML="You lost try again";
    setTimeout(() => {
        location.reload();
    }, 1000);
    }
   
    
    
}