//1️⃣ Camila está organizando la lista de asistentes para una conferencia. Tiene un array con nombres, por ejemplo: ["Pedro", "Ana", "Sofía", "Luis"]. Quiere saber si "Ana" está en la lista y, si es así, debe imprimir "Invitada confirmada en la posición X". Si no está, debe imprimir "Invitada no encontrada".
const listOrganizerForAConference = name => {
  const names = ["Pedro", "Ana", "Sofía", "Luis"];
  if (names.includes(name)) {
    console.log(`${name} Invitado(a) encontrada`);
  } else {
    console.log("Invitado no encontrado");
  }
};

listOrganizerForAConference("jhgjgj");

//2️⃣ Bego está buscando un producto específico en su tienda. La lista de productos es: ["Camiseta", "Pantalón", "Gorra", "Zapatos"]. Necesita saber en qué posición se encuentra "Gorra". Si lo encuentra, debe mostrar su posición. Si no lo encuentra, debe mostrar "Producto no disponible".
const storeProductList = product => {
  const product = ["Camiseta", "Pantalón", "Gorra", "Zapatos"];
  if (product.indexOf("Gorra")) {
    console.log(`La posición del producto es $¨product}`);
  } else {
    console.log("Producto no disponible");
  }
};
storeProductList("Gorra");
