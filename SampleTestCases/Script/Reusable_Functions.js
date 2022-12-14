//USEUNIT Import_Units

//This Function will Click on the Object
function Obj_Click(Obj_Value){
 var Obj_Name = Obj_Value.Name;
   if(Obj_Value.Exists){
    Log.LockEvents()
    Obj_Value.Click();
    Log.Message("Clicked on "+ Obj_Name)
   }else{
    Log.UnlockEvents()
    Log.Warning(Obj_Name + " is not exist on the Page. ")
   }
}


//This function will set text inside the textbox.
function Obj_SetText(Obj_Value, Input_Val){
  var Obj_Name = Obj_Value.Name;
  if(Obj_Value.Exists){
   Log.LockEvents()
   Obj_Value.SetText(Input_Val);
   Log.Message("Text entered inside the TextBox named - " + Obj_Name)
   }else{
    Log.UnlockEvents()
    Log.Message(Obj_Name + "Object Not found on the page.")
   }
}


// This function will return date in dd/mm/yyyy format
function GetDate(addDays){  
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
var dd = today.getDate() + addDays;
if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd + '/' + mm + '/' + yyyy;
     return formattedToday;
}

