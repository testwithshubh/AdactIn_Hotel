//USEUNIT Import_Units

function TC_108_VerifyPrice(){
 
    Navigate_URL();
    Login();
    InputData();
    VerifyPrice();
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
    
    
}

   function VerifyPrice(){
    
    var Prop = new Array("ObjectType", "ObjectIdentifier");
    var Val = new Array("Textbox", "total_price_0");
    var TotalPriceField = SelectHotel.FindChild(Prop, Val, 100)
    var TotalActualPrice = TotalPriceField.Text.substring(6,9);
    var TotalExpectedPrice = calculatePrice(); 
     if(TotalActualPrice.Text == TotalExpectedPrice){
      Log.Message("Test Case Passed as Expected Price "+ TotalExpectedPrice + " is equal to Actual Price "+ TotalActualPrice);
       Log.Message("Price is being calculated as per the formula");  
     }else{
      Log.Message("Test Case Failed as Expected Price "+ TotalExpectedPrice + " is not equal to Actual Price "+ TotalActualPrice);
      Log.Message("Price is not being calculated as per the formula");
     }
    }
    
    function calculatePrice(){
     
    var Prop = new Array("ObjectType", "ObjectIdentifier");
    var Val = new Array("Textbox", "rooms_0");
    var NoOfRoomsField = SelectHotel.FindChild(Prop, Val , 100);
    var NoOfRooms = NoOfRoomsField.Text.substring(0,1);
    
     
    var Prop = new Array("ObjectType", "ObjectIdentifier");
    var Val = new Array("Textbox", "no_days_0");
    var NoOfDaysField = SelectHotel.FindChild(Prop, Val , 100);
    var NoOfDays = NoOfDaysField.Text.substring(0,1);
    
    var Prop = new Array("ObjectType", "ObjectIdentifier");
    var Val = new Array("Textbox", "price_night_0");
    var PricePerNight = SelectHotel.FindChild(Prop, Val , 100);
    var Price = PricePerNight.Text.substring(6,9);
    
    TotalExpectedPrice = NoOfRooms * NoOfDays * Price;
    
    return TotalExpectedPrice;
    
    }