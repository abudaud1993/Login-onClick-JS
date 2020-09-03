var dbUserName = "freelancerdaud";
var dbUserPass = 12345;
var dbUserhru = "student";

document.querySelector("#submitt").addEventListener("click",function(){

    var uInputUserName = document.querySelector("#user_name").value;
    var uInputUserPass = document.querySelector("#user_pass").value;
    var uInputUserhru = document.querySelector("#user_hru").value;



        // alert(uInputUserName+" : "+uInputUserPass+" : "+ uInputUserhru);

    if(dbUserName == uInputUserName && dbUserPass == uInputUserPass && dbUserhru == uInputUserhru){

        document.querySelector("#loginbox").style.display="none";
        document.querySelector("#welcome").innerHTML="<h1> Hello Bro Welcome</h1>" ;

    }else if(uInputUserName === "" || uInputUserPass === "" || uInputUserhru === ""){


        document.querySelector("#errMsg").innerHTML="<h1> All fields must be filled in </h1>" ;

    }







});