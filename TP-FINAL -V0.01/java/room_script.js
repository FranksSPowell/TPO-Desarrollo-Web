let RoomDetails=[["Minibar","Bañera","Baño privado","Caja fuerte","Calefacción","TV de pantalla plana","Ropa de cama"],
                ["Minibar","Bañera","Baño privado","Caja fuerte","Calefacción","TV de pantalla plana","Ropa de cama","Wifi","Pantuflas","parking"],
                ["Minibar","Bañera","Baño privado","Caja fuerte","Calefacción","TV de pantalla plana","Ropa de cama","Wifi","Pantuflas","parking","Teléfono"," Aire acondicionado"],
                ["Minibar","Bañera","Baño privado","Caja fuerte","Calefacción","TV de pantalla plana","Ropa de cama","Wifi","Pantuflas","parking","Teléfono"," Aire acondicionado","Sofa","Secador de pelo"],
                ["Minibar","Bañera","Baño privado","Caja fuerte","Calefacción","TV de pantalla plana","Ropa de cama","Wifi","Pantuflas","parking","Teléfono"," Aire acondicionado","Sofa","Secador de pelo","jacuzzi","Robot asistente"]];


console.log(RoomDetails[0][7]);


let btnGet = document.getElementById("room_detail");
let myTable = document.querySelector('#table_modal');

function AddTable(HabNum) {

  myTable.innerHTML = "";

    // let headers = ['Detalle de Habitacion'];
    let table = document.createElement('table_modal');
    // let headerRow = document.createElement('tr');
    // headers.forEach(headerText => {
    //     let header = document.createElement('th');
    //     let textNode = document.createTextNode(headerText);
    //     header.appendChild(textNode);
    //     headerRow.appendChild(header);
    // });
    // table.appendChild(headerRow);

    for (let index = 0; index < RoomDetails[HabNum].length; index+=2) {
      let row = document.createElement('tr');
      let cell = document.createElement('td');
      let textNode = document.createTextNode(RoomDetails[HabNum][index]);
      cell.appendChild(textNode);
      row.appendChild(cell)
      
      if (((index +1) % 2) != 0 && index+1< RoomDetails[HabNum].length) {
        let cell = document.createElement('td');
        let textNode = document.createTextNode(RoomDetails[HabNum][index+1]);
        cell.appendChild(textNode);
        row.appendChild(cell)
        }
        let A= RoomDetails[HabNum].length-1
        let B= (RoomDetails[HabNum].length)% 2!=0
        if (index==RoomDetails[HabNum].length-1 && (RoomDetails[HabNum].length% 2) != 0 ) {
          let cell = document.createElement('td');
          let textNode = document.createTextNode("");
          cell.appendChild(textNode);
          row.appendChild(cell)
        }
      table.appendChild(row);

      
  
  }


  myTable.appendChild(table);
}

// Defina variable Modal
var modal = document.getElementById("myModal");

// // Busca el boton de detalle
// var btn = document.getElementById("room_detail");

// Boton <span> para cerrar el MODAL 
var span = document.getElementsByClassName("close")[0];

// Funcion parara abrir
// btn.onclick = function() {

//   AddTable(1);
//   modal.style.display = "block";
// }


function roomDetail(n) {
  AddTable(n);
  modal.style.display = "block";
}

// Funcion de cerrar

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

