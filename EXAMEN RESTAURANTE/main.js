let mesas = [0,1,2,3,4,5,6]
let N_Mesas = 0;
function reservar(){
    for(let i = 0; i < mesas.lenght; i++)
    {
        N_Mesas = mesas[i];
        Alert(N_Mesas)
    }
    
    var Nombre_R = document.getElementById("Nombre_R");
    var Estatus_R = document.getElementById("Estatus_R");
    let Fecha_R = new Date(document.getElementById("bdate").value);

    Estatus = "Sin ocupar";
}
function validar(){

}