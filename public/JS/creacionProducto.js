
window.addEventListener('load', function() {
    let formulario = document.querySelector('form');
    formulario.addEventListener('submit', function(evento) {
  
       var errores=[]; 
       var cont=0;

     let nombre=document.querySelector("#nombre");
  
     if(nombre.value=="")
     {

         errores.push('-Hubo un error en el nombre \n')
         cont++;
      
     }
     let precio=document.querySelector("#precio");

     if(precio.value<0){

        errores.push('-El precio debe ser un numero \n')
        cont++;
     }


     let stock=document.querySelector("#stock");
  
     if(stock.value<0)
     {
        errores.push('-El stock debe ser un numero \n')
        cont++;
     }
       
     let cantidad=document.querySelector("#cantidad");
  
     if(cantidad.value<0)
     {
        errores.push('-La cantidad debe ser un numero \n')
        cont++;
     }
            
     let descripcion=document.querySelector("#descripcion");
  
     if(descripcion.value.length>200)
     {
       errores.push('-La descripción debe tener menos de 200 caracteres \n')
       cont++;
     } 

     if(cont>0)
     {
         evento.preventDefault();
         
       alert(errores.join(""))
     }

    })
  });