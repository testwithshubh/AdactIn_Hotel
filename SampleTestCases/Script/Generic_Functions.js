//USEUNIT Import_Units

//Browser will navigate to the given URL
function Navigate_URL(){
 Browsers.Item(btEdge).Navigate(URL);
}

//This function will Login User to the application
function Login(){
 Log.AppendFolder("Login_Actions")
 var Prop, Val;
 
 //Finding Username field and setting username in the field 
 Prop = new Array("idStr", "ObjectIdentifier", "ObjectType")
 Val = new Array("username", "username", "Textbox")
 var Username_Field = Homepage.FindChild(Prop, Val, 100);
 
 Obj_SetText(Username_Field, username);
 
 //Finding Password field ans setting password in the password field
 Prop = new Array("idStr", "ObjectIdentifier", "ObjectType")
 Val = new Array("password", "password", "PasswordBox")
 var Pass_Field = Homepage.FindChild(Prop, Val, 100);
 
 Obj_SetText(Pass_Field, password);
 
 //Finding Login Button and click on that button
 Prop = new Array("idStr", "ObjectIdentifier", "ObjectLabel")
 Val = new Array("login", "login", "Login")
 var Login_Button = Homepage.FindChild(Prop, Val, 100);
 
 Obj_Click(Login_Button);
 
 Log.PopLogFolder();
}
