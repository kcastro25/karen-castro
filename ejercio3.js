function resultado(){
           
    var ingresos = parseInt(document.getElementById('ing').value);
    var egresos = parseInt(document.getElementById('eg').value);
    var difer = ingresos - egresos;
    document.getElementById('diferencia').value = (difer);
}