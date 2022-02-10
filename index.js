//Saludar al cliente
//Mencionar los juegos disponibles
//En base a lo que eligió calcular el precio
//Informar al cliente el costo que debe abonar
//Cobrar el servicio y en caso de que no alcance preguntar si desea agregar más fondos
let texto = "";
let total = 0;

const saludar = () => {
  alert("¡Bienvenido a CyberX!");
};
const juegosDisponibles = () => {
  let juegoID;
  do {
    juegoID = parseInt(
      prompt(
        "¿Qué juego desea comprar?\n1)Red Dead Redemption 2 \n2)FIFA 22 \n3)God of War \n4)Cyberpunk 2077"
      )
    );
  } while (juegoID < 1 || juegoID > 4 || isNaN(juegoID));

  let juegoTitulo;

  switch (juegoID) {
    case 1:
      juegoTitulo = "Red Dead Redemption 2";
      break;
    case 2:
      juegoTitulo = "FIFA 22";
      break;
    case 3:
      juegoTitulo = "God of War";
      break;
    case 4:
      juegoTitulo = "Cyberpunk 2077";
      break;
  }

  return juegoTitulo;
};

const calcularPrecio = (juegoTitulo) => {
  if (juegoTitulo === "Red Dead Redemption 2") {
    return 150;
  } else if (juegoTitulo === "FIFA 22") {
    return 200;
  } else if (juegoTitulo === "God of War") {
    return 175;
  } else {
    return 500;
  }
};
const informarProducto = (juegoTitulo, precioAlquiler) => {
  texto += `Juego: ${juegoTitulo}\n Precio: $${precioAlquiler}\n\n`;
  total += precioAlquiler;
  let seguir = confirm("¿Desea comprar otro juego?");
  if (seguir === true) {
    init();
  } else {
    alert("Usted lleva:");
    alert(texto);
    alert(`El total para abonar es de: $${total}`);
  }
};

const cobrarServicio = () => {
  let monto = parseInt(prompt("¿Con cuánto abona?"));
  let debe = total - monto;
  while (isNaN(monto)) {
    monto = parseInt(prompt("¿Con cuánto abona?"));
  }
  if (monto > total) {
    alert(`Su vuelto es $${monto - total}`);
    alert("¡Muchas gracias por su compra!");
  } else if (monto === total) {
    alert(`Muchas gracias por su compra.`);
  } else {
    alert(`Le faltan $${debe}.`);
    let seguir = confirm(`¿Desea pagar los $${debe} faltantes?`); //Confirm para consultar si desea abonar el dinero que le falta y nuevamente condiciones dependiendo del monto que ingrese.
    if (seguir === true) {
      let faltante = parseInt(prompt(`Abone los $${debe} faltantes.`));
      while (isNaN(faltante)) {
        faltante = parseInt(prompt(`Abone los $${debe} faltantes.`));
      }
      if (faltante === debe) {
        alert(`¡Muchas gracias por su compra!`);
      } else if (faltante > debe) {
        alert(`Su vuelto es $${faltante - debe}.`);
        alert("¡Muchas gracias por su compra!");
      } else {
        alert(
          "Fondos insuficientes. Si desea realizar la compra por favor verifique sus fondos nuevamente."
        );
      }
    } else {
      alert("Muchas gracias por su visita.");
    }
  }
};
const init = () => {
  let juegoTitulo = juegosDisponibles();
  let precioAlquiler = calcularPrecio(juegoTitulo);
  informarProducto(juegoTitulo, precioAlquiler);
};
saludar();
init();
cobrarServicio();
