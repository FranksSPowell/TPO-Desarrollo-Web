let RoomDetails=[["H1_CAR1","H1_CAR2","H1_CAR3","H1_CAR4","H1_CAR5","H1_CAR6","H1_CAR7"],
                ["H2_CAR1","H2_CAR2","H2_CAR3","H2_CAR4","H2_CAR5","H2_CAR6","H2_CAR7","H2_CAR8","H2_CAR9","H2_CAR10"],
                ["H3_CAR1","H3_CAR2","H3_CAR3","H3_CAR4","H3_CAR5","H3_CAR6","H3_CAR7","H3_CAR8","H3_CAR9","H3_CAR10","H3_CAR11","H3_CAR12"],
                ["H4_CAR1","H4_CAR2","H4_CAR3","H4_CAR4","H4_CAR5","H4_CAR6","H4_CAR7","H4_CAR8","H4_CAR9","H4_CAR10","H4_CAR11","H4_CAR12","H4_CAR13","H4_CAR14"],
                ["H5_CAR1","H5_CAR2","H5_CAR3","H5_CAR4","H5_CAR5","H5_CAR6","H5_CAR7","H5_CAR8","H5_CAR9","H5_CAR10","H5_CAR11","H5_CAR12","H5_CAR13","H5_CAR14","H5_CAR15","H5_CAR16"]];


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

