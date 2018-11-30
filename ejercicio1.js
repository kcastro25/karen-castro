function comparacion(){
    valor1 = form.primer.value;
    valor2 = form.segundo.value;
    if( valor1==''){
        alert("es obligatorio ingresar Primer valor");
        return false;

    }else{
      if( valor2==''){
          alert("es obligatorio ingresar Segundo valor");
          return false;
      }
    }
    if( valor1==valor2){
      alert("Son Iguales");
      return false;
    }else{
      alert("Son diferentes");
    }
  }