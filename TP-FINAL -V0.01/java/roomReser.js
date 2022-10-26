
// alert("CON EL FIN DE PROBAR EL EL CODIGO -ALGUNAS FECHA OCUPADAS 24/12/2022 y 19/11/2032");

let Romms=[
    {
        "HABITACION":"HAB1",
        "Nombre":"Habitación Deluxe",
        "descrip":"Descripcion HAB1",
        "precio": 100,
        "estrellas": 1,
        "parking": false,
        "aireC": false,
        "wifi": false,
        "Jacuzzi": false,
        "vista": "montana",
        "DateReser": [20221119,20221120,20221121,20221122],
            },
    
    {
        "HABITACION":"HAB2",
        "Nombre":"Habitación Deluxe Doble",
        "descrip":"Descripcion HAB2",
        "precio": 150,
        "estrellas": 2,
        "parking": true,
        "aireC": false,
        "wifi": true,
        "Jacuzzi": false,
        "vista": "playa",
        "DateReser": [20321119,20321120,20321121,20321122]
            },
    
    {
        "HABITACION":"HAB3",
        "Nombre":"Suite",
        "descrip":"Descripcion HAB3",
        "precio": 200,
        "estrellas": 3,
        "parking": true,
        "aireC": true,
        "wifi": true,
        "Jacuzzi": false,
        "vista": "montana",
        "DateReser": [20221019],
            },
    
    {
        "HABITACION":"HAB4",
        "Nombre":"Gran Suite",
        "descrip":"Descripcion HAB4",
        "precio": 250,
        "estrellas": 4,
        "parking": true,
        "aireC": true,
        "wifi": true,
        "Jacuzzi": false,
        "vista": "playa",
        "DateReser": [20221019],
            },
    {
        "HABITACION":"HAB5",  
        "Nombre":"Presidential Suite",
        "descrip":"Descripcion HAB5",
        "precio": 300,
        "estrellas": 5,
        "parking": true,
        "aireC": true,
        "wifi": true,
        "Jacuzzi": true,
        "vista": "playa",
        "DateReser": [20221224,20221225,20221226],
    }
    ];



function GetPrice() {
    for (let index = 0; index < Romms.length; index++) {
        const RoomPrice = document.getElementById(Romms[index]["HABITACION"]);
        RoomPrice.textContent=Romms[index]["precio"]+" USD";
        
    }
    
}

function Estrellas(Star) {

    let CheckID0="CheckBox"+Romms[Star]["HABITACION"]
    console.log(CheckID0);    
    var checkBox = document.getElementById(CheckID0);
    
    // Etiqueta de cuarto
    let IdCUARTO=Romms[Star]["HABITACION"]+"CUARTO"
   
    console.log(IdCUARTO);
    if (checkBox.checked == true) {
        console.log("True");
        document.getElementById(IdCUARTO).style.display = "flex";

    } else {
        console.log("False");
        document.getElementById(IdCUARTO).style.display = "none";
    }




}


function VistaRoom(params) {

    for (let index = 0; index < Romms.length; index++) {
        let IdCUARTO=Romms[index]["HABITACION"]+"CUARTO"
       
            if (params==Romms[index]["vista"] || params=='cualquiera' ) {
                document.getElementById(IdCUARTO).style.display = "flex";
                
            } else {
                document.getElementById(IdCUARTO).style.display = "none";
            }
    
    }

    
}

function Caract(params) {

    let caractHab=["parking","aireC",
                    "wifi","Jacuzzi"  ]
    //Loop por todas las habitaciones
    for (let index = 0; index < Romms.length; index++) {
        
        sumCar=0
        //ID de CUarto a accionar
        let IdCUARTO=Romms[index]["HABITACION"]+"CUARTO"

        //Loop por caracteristicas de habitaciones y Checks
        for (let index2 = 0; index2 < caractHab.length; index2++) {
            
            let checkBox = document.getElementById("Check"+caractHab[index2]);
            if (checkBox.checked) {
                if (Romms[index][caractHab[index2]]==true){
                    sumCar++
                }
            } else {
                sumCar++
            }
        }
        
            //Verifico que cumpla con las caracteristicas 
            if (sumCar==4) {
                document.getElementById(IdCUARTO).style.display = "flex";
                
            } else {
                document.getElementById(IdCUARTO).style.display = "none";
            }


            
    
    }
    
}




function Fecha() {

  

    let CheckIn = document.getElementById("checkin");
    let CheckOut = document.getElementById("checkOut");
    const result = CheckIn.value

    let result1= parseInt(CheckIn.value.replaceAll("-",""))
    let result2= parseInt(CheckOut.value.replaceAll("-",""))
  

    let now = new Date();
    let year=now.getFullYear().toString();

      if (now.getMonth()+1<10) {

            month=0+(now.getMonth()+1).toString();
                    
        } else {
            month=(now.getMonth()+1).toString();
           }
    let day=now.getDate().toString();
    let nowVal=year+month+day


    console.log(nowVal);

     if(result1<nowVal || nowVal >result2){
        //VERIFICA QUE LA FECHA SEA POSTERIOR A HOY
        console.log("ANTES QUE HOY");
        if (result1<nowVal) {

            document.getElementById("checkin").value = "";  
        } else{
            document.getElementById("checkOut").value = "";
        }
        } else if(isNaN(result1) || isNaN(result2)){    
        console.log("Alguno de los dos es Nulo");
        }
        else{
            if (result1<result2) {
                for (let index = 0; index < Romms.length; index++) {
                    let IdCUARTO=Romms[index]["HABITACION"]+"CUARTO"
                    let Ocupados =0
                    for (let indexData = 0; indexData < Romms[index]["DateReser"].length; indexData++) {
                        let DateResContr=Romms[index]["DateReser"][indexData]
                        if (DateResContr==result1 || DateResContr==result2 ) {
                            Ocupados++
                        }
                    }

                    if (Ocupados>0) {
                        document.getElementById(IdCUARTO).style.display = "none";
                    }else{
                        document.getElementById(IdCUARTO).style.display = "flex";
                    }
                    
                }
                
            }else{
                //PONE EN BLANCO LA SALIDA POR SER MENOR QUE LA ENTRADA
                console.log("Salida menor a Entrada");
                document.getElementById("checkOut").value = "";
            }
        }    
}


function PayRoom(RoomNumber) {
    
    let CheckIn = document.getElementById("checkin");
    let CheckOut = document.getElementById("checkOut");
    const result = CheckIn.value

    let result1= parseInt(CheckIn.value.replaceAll("-",""))
    let result2= parseInt(CheckOut.value.replaceAll("-",""))
  

    let now = new Date();
    let year=now.getFullYear().toString();

      if (now.getMonth()+1<10) {

            month=0+(now.getMonth()+1).toString();
                    
        } else {
            month=(now.getMonth()+1).toString();
           }
    let day=now.getDate().toString();
    let nowVal=year+month+day


    console.log(nowVal);

    
    if (isNaN(result1) || isNaN(result2)) {
    alert("Complete las fechas de su estadia");

    } else {
        console.log(document.getElementById("ValorCuarto"));
        window.open('./checkOut/checkOut.html')
        localStorage.setItem("RoomPrice",[Romms[RoomNumber]["precio"]])
        localStorage.setItem("RoomName",[Romms[RoomNumber]["Nombre"]])
        localStorage.setItem("RoomDesc",[Romms[RoomNumber]["descrip"]])   
        localStorage.setItem("RoomNight",result2-result1)   
             

    }
}

let Verify=localStorage.getItem("Verify")
GetPrice();

if (Verify) {
    let Entrada=localStorage.getItem("Entrada")
    let Salida=localStorage.getItem("Salida")
    document.getElementById("checkin").value = Entrada;
    document.getElementById("checkOut").value = Salida;

    localStorage.setItem("Verify",false)
    Fecha()
}


