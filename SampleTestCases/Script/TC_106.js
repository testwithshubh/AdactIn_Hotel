﻿//USEUNIT Import_Units

  function TC_106_VerifyTotalRooms(){
 
    Navigate_URL();
    Login();
    InputData();
    TotalRooms();
}
    
    
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
    No_Room.ClickItem(ThreeRooms);
    
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
    
}

   function TotalRooms(){
    Log.AppendFolder("Verify");
    var Prop = new Array("ObjectType", "Text");
    var Val = new Array("Textbox", "3 Rooms");
    var RoomTotal = SelectHotel.FindChild(Prop, Val , 100);
    var rooms = ThreeRooms.substring(0, 1) + " Rooms";
    Log.Message(rooms);
     if(RoomTotal.text == rooms){
      Log.Message("It is correct"); 
     }else{
      Log.Error("Some Error Occured ");
     }
     
     Log.PopLogFolder();
    }