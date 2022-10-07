﻿//USEUNIT Import_Units

function TC_104_VerifyLocation(){
 
    Navigate_URL();
    Login();
    InputData();
    VerifyLocation();
}

function InputData(){
    //Inputting data in the required field
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
    CheckIn_date.SetText(GetDate(0));
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("datepick_out", "datepick_out", "Textbox");
    var CheckOut_date = WelcomePage.FindChild(Prop, Val, 100);
    CheckOut_date.SetText(GetDate(1));
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("Submit", "Submit", "SubmitButton");
    var Button = WelcomePage.FindChild(Prop, Val, 100);
    Obj_Click(Button);
    
    
}

   function VerifyLocation(){
    var Prop = new Array("ObjectType", "Text");
    var Val = new Array("Textbox", Location);
    var LocationName = SelectHotel.FindChild(Prop, Val , 100);
    //Log.Message(HotelName.Text) 
     if(LocationName.Text == Location){
      Log.Message("Location in Select Hotel page is " + Location + " which is same as Location in Search Hotel Page which is " + LocationName.Text); 
     }else{
      Log.Message("Some Error Occured ")
     }
    }