//USEUNIT Import_Units

var HotelN, RoomTypeName, days, DateA, DateD, rooms;
    function TC_13_VerifyDetails(){
      
    Navigate_URL();
    Login();
    aqUtils.Delay(2000);
    InputData();
    VerifyDetails();
}

function InputData(){
 
Log.AppendFolder("Input Data in the fields")
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
    Val = new Array("adult_room", "adult_room", "Select");
    var AdultTotal = WelcomePage.FindChild(Prop, Val, 100);
    AdultTotal.ClickItem("1 - One");
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("Submit", "Submit", "SubmitButton");
    var Button = WelcomePage.FindChild(Prop, Val, 100);
    Obj_Click(Button);
    
    Log.PopLogFolder();
    //------------------------------------------------------//
    
    aqUtils.Delay(2000);
    
 Log.AppendFolder("Get Data from the Selection Page")   
    //Get Hotel
   var Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
   var Val = new Array("hotel_name_0", "hotel_name_0", "Textbox");
   var HotelName = SelectHotel.FindChild(Prop, Val , 100); 
   HotelN = HotelName.Text;
   Log.Message(HotelN);  
  
  
    //Get RoomType  
    var Prop = new Array("ObjectType", "Text");
    var Val = new Array("Textbox", R_Type);
    var RoomType = SelectHotel.FindChild(Prop, Val , 100); 
    RoomTypeName = RoomType.Text;
    Log.Message(RoomTypeName);
    
    //Check In Date
    var Prop = new Array("ObjectType", "ObjectIdentifier");
    var Val = new Array("Textbox", "arr_date_0");
    var Arrival = SelectHotel.FindChild(Prop, Val , 100);
    DateA = Arrival.Text;
    Log.Message(DateA);
    
    //Check Out Date
    var Prop = new Array("ObjectType", "ObjectIdentifier");
    var Val = new Array("Textbox", "dep_date_0");
    var Depart = SelectHotel.FindChild(Prop, Val , 100);
    DateD = Depart.Text;
    
    //Get total number of rooms.
    var Prop = new Array("ObjectType", "Text");
    var Val = new Array("Textbox", "2 Rooms");
    var RoomTotal = SelectHotel.FindChild(Prop, Val , 100);
    rooms = RoomTotal.Text.substring(0, 1);
    Log.Message(rooms);
    
     //Get total number of days.
    var Prop = new Array("ObjectType","idStr",);
    var Val = new Array("Textbox","no_days_0");
    var DayTotal = SelectHotel.FindChild(Prop, Val , 100);
    days = DayTotal.Text.substring(0, 1);
    Log.Message(days);
    
    //Selecting Hotel
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

  function VerifyDetails(){
   
  //Verifying Details of the page from the previous page
  Log.AppendFolder("Verifying all Details")
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("hotel_name_dis", "hotel_name_dis", "Textbox");
    var HotelNameField = HotelBookingPage.FindChild(Prop, Val, 100);
    var FinalName = HotelNameField.Text;
    Log.Message(FinalName + HotelN)
    
    if(FinalName == HotelN){
       Log.Message("Name is same in final page and previous Hotel Selection Page that is "+ FinalName + " = " + HotelN)
    }else{
     Log.Message("Some Error Occured. ")
    }
    
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("room_type_dis", "room_type_dis", "Textbox");
    var HotelTypeField = HotelBookingPage.FindChild(Prop, Val, 100);
    var FinalName = HotelTypeField.Text;
    
    if(FinalName == RoomTypeName){
       Log.Message("Name is same in final page and previous Hotel Selection Page that is "+ FinalName + " = " + RoomTypeName)
    }else{
     Log.Message("Some Error Occured. ")
    }
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("room_num_dis", "room_num_dis", "Textbox");
    var TotalRoomField = HotelBookingPage.FindChild(Prop, Val, 100);
    var TotalRooms = TotalRoomField.Text.substring(0,1);
    
    if(TotalRooms == rooms){
       Log.Message("Name is same in final page and previous Hotel Selection Page that is "+ TotalRooms + " = " + rooms)
    }else{
     Log.Message("Some Error Occured. ")
  }
  
   
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("total_days_dis", "total_days_dis", "Textbox");
    var TotalDaysField = HotelBookingPage.FindChild(Prop, Val, 100);
    var TotalDays = TotalDaysField.Text;
    
    if(TotalDays == days){
       Log.Message("Name is same in final page and previous Hotel Selection Page that is "+ TotalDays + " = " + days)
    }else{
     Log.Message("Some Error Occured. ")
  }
  
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