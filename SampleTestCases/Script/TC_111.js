//USEUNIT Import_Units

function TC_111_VerifyDetails(){
 
    Navigate_URL();
    Login();
    InputData();
    VerifyDetails();
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

  function VerifyDetails(){ 
   
  Log.AppendFolder("Verifying All Details");
  //Verifying Hotel
   var Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
   var Val = new Array("hotel_name_0", "hotel_name_0", "Textbox");
   var HotelName = SelectHotel.FindChild(Prop, Val , 100); 
     if(HotelName.Text == Hotel){
      Log.Message("Hotel Name in Select Hotel page is " + Hotel + " which is same as Location in Search Hotel Page which is " + HotelName.Text); 
     }else{
      Log.Message("Some Error Occured ")
     }  
  
   //Verifying Location
    var Prop = new Array("ObjectType", "Text");
    var Val = new Array("Textbox", Location);
    var LocationName = SelectHotel.FindChild(Prop, Val , 100); 
     if(LocationName.Text == Location){
      Log.Message("Location in Select Hotel page is " + Location + " which is same as Location in Search Hotel Page which is " + LocationName.Text); 
     }else{
      Log.Message("Some Error Occured ")
     }
    
    //Verifying RoomType  
    var Prop = new Array("ObjectType", "Text");
    var Val = new Array("Textbox", R_Type);
    var RoomType = SelectHotel.FindChild(Prop, Val , 100); 
     if(RoomType.Text == R_Type){
      Log.Message("Room Type in Select Hotel page is " + R_Type + " which is same as Room Type in Search Hotel Page which is " + RoomType.Text); 
     }else{
      Log.Message("Some Error Occured ")
     }
     
     //Verifying No. Of Days
    var Prop = new Array("ObjectType", "ObjectIdentifier");
    var Val = new Array("Textbox", "no_days_0");
    var NoOfDaysField = SelectHotel.FindChild(Prop, Val , 100);
    var NoOfDays = NoOfDaysField.Text.substring(0,1);
    
    var Prop = new Array("ObjectType", "ObjectIdentifier");
    var Val = new Array("Textbox", "arr_date_0");
    var Arrival = SelectHotel.FindChild(Prop, Val , 100);
    var DateA = Arrival.Text.substring(0,2);
    
    var Prop = new Array("ObjectType", "ObjectIdentifier");
    var Val = new Array("Textbox", "dep_date_0");
    var Arrival = SelectHotel.FindChild(Prop, Val , 100);
    var DateD = Arrival.Text.substring(0,2);
    
    var totalDays = DateD - DateA;
    if(NoOfDays == totalDays){
     Log.Message("Total of Days are same in previous page and hotel Selection Page. That is "+ totalDays + "=" + NoOfDays)
    }else{
     Log.Message("Some Error Occured. ")
    }
    
    
    //Verifying Price Per Night
    Log.Message("Price per night are not available in the previous page.") 
     Log.PopLogFolder();
    }