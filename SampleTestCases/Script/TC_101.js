﻿//USEUNIT Import_Units

function TC_101_VerifyLogin(){
 
    Navigate_URL();
    Login();
    VerifyLogin();
}

function VerifyLogin(){
 
           //Verifying the text to check if login is successful or not.
         var WelcomeUser = WelcomePage.FindChild("Text", "Hello " + username + "!" , 100);
         
         if(WelcomeUser.Exists){
          Log.Message(username + "is Logged In Succesfully.");
         }else{
          Log.Message(username + "is not Logged In.");
         }
}