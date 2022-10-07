//USEUNIT Import_Units  

function TC_114_OrderNo(){
 
    Navigate_URL();
    Login();
    InputData();
    EnteringDetails();
    VerifyOrderNo();
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

function EnteringDetails(){
 //Booking Hotel, Filling details to Confirm Booking
    
    Log.AppendFolder("Entering Details on Hotel Booking page")
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("first_name", "first_name", "Textbox");
    var FirstNameField = HotelBookingPage.FindChild(Prop, Val, 100);
    Obj_SetText(FirstNameField, "Shubham");
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("last_name", "last_name", "Textbox");
    var LastNameField = HotelBookingPage.FindChild(Prop, Val, 100);
    Obj_SetText(LastNameField, "Choudhary");
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("address", "address", "Textarea");
    var AddField = HotelBookingPage.FindChild(Prop, Val, 100);
    AddField.Keys("Chandigarh 160101")
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("cc_num", "cc_num", "Textbox");
    var CCField = HotelBookingPage.FindChild(Prop, Val, 100);
    Obj_SetText(CCField, "1234567890123456");
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("cc_type", "cc_type", "Select");
    var CCTypeField = HotelBookingPage.FindChild(Prop, Val, 100);
    CCTypeField.ClickItem("VISA");
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("cc_exp_month", "cc_exp_month", "Select");
    var CCExMonth = HotelBookingPage.FindChild(Prop, Val, 100);
    CCExMonth.ClickItem("August");
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("cc_exp_year", "cc_exp_year", "Select");
    var CCExYear = HotelBookingPage.FindChild(Prop, Val, 100);
    CCExYear.ClickItem("2022");
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("cc_cvv", "cc_cvv", "Textbox");
    var CVV_Field = HotelBookingPage.FindChild(Prop, Val, 100);
    Obj_SetText(CVV_Field, "208");
    
    Prop = new Array("idStr", "ObjectIdentifier", "ObjectType");
    Val = new Array("book_now", "book_now", "Button");
    var BookNowButton = HotelBookingPage.FindChild(Prop, Val, 100);
    Obj_Click(BookNowButton);
    
    Log.PopLogFolder();
    
}

 function VerifyOrderNo(){
  Log.AppendFolder("Verifying Order Number");
  
  Prop = new Array("idStr", "ObjectIdentifier","ObjectType",);
  Val = new Array("order_no", "order_no", "Textbox");
  var OrderNumber = BookingConfirmPage.FindChild(Prop, Val, 100);
  var OrderNo = OrderNumber.Text;
  
  
  if(OrderNo){
   Log.Message("Order Number is generated successfully. Order No: "+ OrderNo)
  }else{
   Log.Message("Some Error Occured.")
  }
  Log.PopLogFolder();
  
 }