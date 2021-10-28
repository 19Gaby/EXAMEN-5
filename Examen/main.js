var mesas = [];
let Verificar = "False";
let Veri = "False";
var Nombre_R = [];
var Estatus_R = [];
let Fecha_R = [];
var Nombre_A = [];
var Estatus_A = [];
let Fecha_A = [];
var Nombre;
var Estatus;
let Fecha;
let l = 0;
for(i=0;i<6;i++){
    mesas[i] = "Disponible";
}
function reservar(){
    Nombre_R[l] = document.getElementById("Nombre_R").value;
    Estatus_R[l] = document.getElementById("Estatus_R").value;
    Fecha_R[l] = new Date(document.getElementById("bdate").value);
    alert("Reservacion hecha para: " + Nombre_R[l]);
    l = l+1;

}
function asistir(){
    if(l>0){
        Nombre = document.getElementById("Nombre_R").value;
        for(let f = 0;f<l;f++){
            if(Nombre_R[f] == Nombre){
                alert("Reservacion encontrada");
                if(Estatus_R[f] == "Disponible"){
                    Verificar = "True";
                }
                else{
                    Verificar = "Usada";
                }
            }
        }

        if(Verificar == "True")
        {
            if(mesas[0] == "Ocupado" & mesas[1] == "Ocupado" & mesas[2] == "Ocupado" & mesas[3] == "Ocupado" & mesas[4] == "Ocupado" & mesas[5] == "Ocupado"){
                alert("Todas las mesas estan ocupadas espere por favor");
            }
            
            for(let i=0;i<6;i++){
                if(mesas[i] == "Disponible"){
                    mesas[i] = "Ocupado";
                    Nombre_A[i] = Nombre;
                    for(let k=0;k<Nombre_R.length;k++){
                        if(Nombre_R[k] == Nombre){
                            Estatus_R[k] = "Ocupada";
                        }
                    }
                    Estatus_A[i] = "Ocupada";
                    Fecha_A[i] = Fecha;
                    alert("La mesa " + (i+1) + " fue ocupada");
                    if(i == 0){
                        document.getElementById("nombre").value = Nombre_A[i];
                        document.getElementById("verde").id = "rojo";
                    }
                    if(i == 1){
                        document.getElementById("nombre2").value = Nombre_A[i];
                        document.getElementById("verde2").id = "rojo2";
                    }
                    if(i == 2){
                        document.getElementById("nombre3").value = Nombre_A[i];
                        document.getElementById("verde3").id = "rojo3";
                    }
                    if(i == 3){
                        document.getElementById("nombre4").value = Nombre_A[i];
                        document.getElementById("verde4").id = "rojo4";
                    }
                    if(i == 4){
                        document.getElementById("nombre5").value = Nombre_A[i];
                        document.getElementById("verde5").id = "rojo5";
                    }
                    if(i == 5){
                        document.getElementById("nombre6").value = Nombre_A[i];
                        document.getElementById("verde6").id = "rojo6";
                    }
                    i = 6;
                }
            }
        }
        if(Verificar == "False"){
            alert("Reservacion no encontrada");
        }
        if(Verificar == "Usada"){
            alert("RESERVACION USADA");
        }
    }
    else{
        alert("No hay reservaciones aun");
    }
}
function mostrar(){
    document.getElementById("tab").innerHTML="";
    if(l>0){
        for(let a = 0;a<Nombre_R.length;a++){
            document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+ 
            `<tr>
                <td> ${a+1}</td>
                <td> ${Nombre_R[a]}</td>
                <td> ${Fecha_R[a]}</td>
                <td> ${Estatus_R[a]}</td>
            </tr>`;
        }
    }
    else{
        alert("No hay reservaciones aun");
    }
}
function finalizar(){
    if(l>0){
        Nombre = document.getElementById("Nombre_R").value;
        for(let f = 0;f<6;f++){
            if(Nombre_A[f] == Nombre){
                mesas[f] = "Disponible";
                Nombre_A[f] = "Disponible";
                Estatus_A[f] = "Disponible";
                Fecha_A[f] = "Disponible";
                Veri = "True";
                if(f == 0){
                    document.getElementById("nombre").value = "";
                    document.getElementById("rojo").id = "verde";
                }
                if(f == 1){
                    document.getElementById("nombre2").value = "";
                    document.getElementById("rojo2").id = "verde2";
                }
                if(f == 2){
                    document.getElementById("nombre3").value = "";
                    document.getElementById("rojo3").id = "verde3";
                }
                if(f == 3){
                    document.getElementById("nombre4").value = "";
                    document.getElementById("rojo4").id = "verde4";
                }
                if(f == 4){
                    document.getElementById("nombre5").value = "";
                    document.getElementById("rojo5").id = "verde5";
                }
                if(f == 5){
                    document.getElementById("nombre6").value = "";
                    document.getElementById("rojo6").id = "verde6";
                }
                i = 6;
            }
        }
        if(Veri == "False"){
            alert("Reservacion no encontrada");
        }
        if(Veri == "True"){
            alert("Gracias por su preferencia");
        }
    }
    else{
        alert("No hay reservaciones aun");
    }
}
$("#btn-opcion").click(function(){            
    let opc = $("#opcion").val();
    
    switch(opc){
        case "1":
            reservar();
        break;
        case "2":
            asistir();
        break;
        case "3":
            mostrar();
        break;
        case "4":
            finalizar();
        break;
    }
});