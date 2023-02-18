// VALIDACION DE CORREO
function re(){
    let label= document.getElementById("label_form");
    let email=document.getElementById("email").value;
    let Eemail=/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    if(!Eemail.test(email)){
        label.style.color="#f47373";
        document.getElementById("email").style.background="#fad6d6";
            alert('SU CORREO ' +"''"+ email + "''" + ' no es valido.');
    }
    else{
        alert("REGISTRO COMPLETADO EXITOSAMENTE");
    }
}
//FUNCION PARA ENTRADA DE SOLO TEXTO ALFABETICO
function sololetras(event) {
    var regex = new RegExp("^[a-zA-Z ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }
  }
//NUMERO RANDOM
generarNumero = (min,max) =>{
    const numeroRandom = document.getElementById("random");
    min = Math.ceil(min);
    max = Math.floor(max);

    let aleatorio = Math.floor(Math.random()*(1 + max - min) + min) ;
    numeroRandom.value = aleatorio;
  };
  
  //
  window.addEventListener('load', () => {
    generarNumero(100000,999999);
  })

//DESAHABILITAR Y HABILITAR BOTON
function habilitar(){
    let nom = document.getElementById("nombre").value;
    let ema = document.getElementById("email").value;
    let val = 0;
  
    if(nom == ""){
      val++;
    }
    if(ema == ""){
      val++;
    }
    if(val == 0){
      document.getElementById("button").disabled = false;
      document.getElementById("button").style.background="#58D68D"; 
    }
    else{
      document.getElementById("button").disabled = true;
      document.getElementById("button").style.background="#F59256";
  
    }
  }
  document.getElementById("nombre").addEventListener("keyup", habilitar);
  document.getElementById("email").addEventListener("keyup", habilitar);
