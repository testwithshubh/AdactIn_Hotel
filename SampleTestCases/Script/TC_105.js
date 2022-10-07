//USEUNIT Import_Units

  function TC_105_VerifyDates(){
 
    Navigate_URL();
    Login();
    InputData();
    VerifyCheckInOut();
}

    var Today = GetDate(0);
    var NextDay = GetDate(1);
    
    
  function InputData(){
    //Inputting data in the required field
    Log.AppendFolder("Input Data")
    var Prop, Val;
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
    No_Room.ClickItem(RoomNo);
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("datepick_in", "datepick_in", "Textbox");
    var CheckIn_date = WelcomePage.FindChild(Prop, Val, 100);
    CheckIn_date.SetText(Today);
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("datepick_out", "datepick_out", "Textbox");
    var CheckOut_date = WelcomePage.FindChild(Prop, Val, 100);
    CheckOut_date.SetText(NextDay);
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("Submit", "Submit", "SubmitButton");
    var Button = WelcomePage.FindChild(Prop, Val, 100);
    Obj_Click(Button);
    
    Log.PopLogFolder();
    
}

   function VerifyCheckInOut(){
    Log.AppendFolder("Verify");
    var Prop = new Array("ObjectType", "Text");
    var Val = new Array("Textbox", Today);
    var Arrival = SelectHotel.FindChild(Prop, Val , 100);
    
     var Prop = new Array("ObjectType", "Text");
    var Val = new Array("Textbox", NextDay);
    var Departure = SelectHotel.FindChild(Prop, Val , 100); 
     if(Arrival.Text == Today && Departure.Text == NextDay ){
      Log.Message("Check-in Date - "+ Today + " and Check-out Date - " + NextDay + " are as per the date entered in search hotel form"); 
     }else{
      Log.Error("Some Error Occured ");
     }
     
     Log.PopLogFolder();
    }