//USEUNIT Import_Units  

function TC_112_FinalPrice(){
 
    Navigate_URL();
    Login();
    aqUtils.Delay(2000);
    InputData();
    //VerifyFinalPrice();
}

function InputData(){
    //Inputting data in the required field for searching a hotel
    var Prop, Val;
    
    Log.AppendFolder("Entering Details for checking Hotel")
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("location", "location", "Select");
    var Select_Local = WelcomePage.FindChild(Prop, Val, 100); 
    Select_Local.ClickItem(Location);
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("hotels", "hotels", "Select");
    var Select_Hotel = WelcomePage.FindChild(Prop, Val, 100);
    Select_Hotel.ClickItem(Hotel); 
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("room_type", "room_type", "Select");
    var Room_Type = WelcomePage.FindChild(Prop, Val, 100);
    Room_Type.ClickItem(R_Type);
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("room_nos", "room_nos", "Select");
    var No_Room = WelcomePage.FindChild(Prop, Val, 100);
    No_Room.ClickItem(TwoRoom);
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("datepick_in", "datepick_in", "Textbox");
    var CheckIn_date = WelcomePage.FindChild(Prop, Val, 100);
    CheckIn_date.SetText(GetDate(0));
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("datepick_out", "datepick_out", "Textbox");
    var CheckOut_date = WelcomePage.FindChild(Prop, Val, 100);
    CheckOut_date.SetText(GetDate(1));
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("Submit", "Submit", "SubmitButton");
    var Button = WelcomePage.FindChild(Prop, Val, 100);
    Obj_Click(Button);
    
    Log.PopLogFolder();
    
    //Hotel Selection Page
    
    Log.AppendFolder("Selecting Hotel")
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("radiobutton_0", "radiobutton_0", "RadioButton");
    var RadioButton = SelectHotel.FindChild(Prop, Val, 100);
    Obj_Click(RadioButton);
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("continue", "continue", "SubmitButton");
    var ContinueButton = SelectHotel.FindChild(Prop, Val, 100);
    Obj_Click(ContinueButton);
    
    Log.PopLogFolder();
       
}


 function VerifyFinalPrice(){
  Log.AppendFolder("VerifyFinalPrice");
  
  Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
  Val = new Array("total_price_dis", "total_price_dis", "Textbox");
  var TotalPriceField = HotelBookingPage.FindChild(Prop, Val, 100);
  var TotalPrice = TotalPriceField.Text.substring(6,9);
  
  Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
  Val = new Array("final_price_dis", "final_price_dis", "Textbox");
  var FinalPriceField = HotelBookingPage.FindChild(Prop, Val, 100);
  var FinalPrice = FinalPriceField.Text.substring(6,11)
  
  if((parseInt(TotalPrice) + TotalPrice/10) == FinalPrice){
   Log.Message("Price is calculated as per the formula.")
  }else{
   Log.Message("Price is showing something else");
  }
  Log.PopLogFolder();
  
 }