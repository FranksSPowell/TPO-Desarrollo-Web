function SetPrice() {
    let ValueRoom=localStorage.getItem("RoomPrice");
    let RoomName=localStorage.getItem("RoomName");
    let RoomDesc=localStorage.getItem("RoomDesc");
    let RoomNight=localStorage.getItem("RoomNight");
    console.log(ValueRoom);
    console.log(RoomName);
    document.getElementById("ValorCheckRoom").textContent = "$"+ValueRoom;
    document.getElementById("RoomCheckName").textContent = RoomName;
    document.getElementById("RoomCheckDesc").textContent = RoomDesc;
    document.getElementById("RoomNight").textContent = RoomNight;

    let TotalPrice=parseInt(RoomNight)*parseInt(ValueRoom)

    document.getElementById("RoomCheckTotal").textContent = TotalPrice;




    


  }
  
  SetPrice();

  