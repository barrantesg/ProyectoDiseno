function guardarUsuario(){

  debugger;

  var nombre= document.getElementById("nombre").value;
  var apellidos=  document.getElementById("apellidos").value;
  var telefono= document.getElementById("telefono").value;
  var usuario = document.getElementById("usuario").value;
  var contrasena = document.getElementById("contrasena").value;

    persona={
      "nombre": nombre,
      "apellidos":apellidos,
      "telefono": telefono,
      "usuario": usuario,
      "contrasena": contrasena

        };

      GuardaPersona[person]=((persona));
      person = person + 1;
      
      localStorage.setItem(sessionStorage.getItem("usuarios")+"-config",JSON.stringify(persona));
      alert("Se ha agregado un usuario");
      limp();

}
