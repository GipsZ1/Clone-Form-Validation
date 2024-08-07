
let UserName=document.getElementById('UserName');
let Email=document.getElementById('Email');
let Password=document.getElementById('Password');

let errorMsg=document.getElementsByClassName("error");
 let successIcon=document.getElementsByClassName("success");
 let failureIcon=document.getElementsByClassName("failure");
 let form=document.getElementById("from");

 form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(UserName.value.trim() ==""){
        errorMsg[0].textContent="You need to enter your UserNmae";
        failureIcon[0].style.opacity='1';
        successIcon[0].style.opacity='0';
        
    }else{
        errorMsg[0].textContent=""
        successIcon[0].style.opacity='1';
        failureIcon[0].style.opacity='0';
    }
    if(Email.value.trim() ==""){
        errorMsg[1].textContent="You need to enter your Email";
        failureIcon[1].style.opacity='1';
        successIcon[1].style.opacity='0';
        
    }else{
        errorMsg[1].textContent=""
        successIcon[1].style.opacity='1';
        failureIcon[1].style.opacity='0';
    }
    if(Password.value.trim() ==""){
        errorMsg[2].textContent="You need to enter your Password";
        failureIcon[2].style.opacity='1';
        successIcon[2].style.opacity='0';
        
    }else{
        errorMsg[2].textContent=""
        successIcon[2].style.opacity='1';
        failureIcon[2].style.opacity='0';
    }

 })