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
  const productList = ["Camiseta", "Pantalón", "Gorra", "Zapatos"];
  if (productList.includes(product)) {
    console.log(`La posición del producto es ${productList.indexOf(product)}`);
  } else {
    console.log("Producto no disponible");
  }
};
storeProductList("Gorra");

//3️⃣ Sabrina está revisando su lista de correos electrónicos para enviar promociones, por ejemplo: ["cliente1@gmail.com", "cliente2@hotmail.com", "cliente3@gmail.com"]. Quiere asegurarse de que al menos uno de los correos pertenece a Gmail. Si lo encuentra, debe mostrar "Correo de Gmail encontrado". Si no, "No hay correos de Gmail".
const emailVerificationForSales = () => {
  const emailList = [
    "cliente1@gmail.com",
    "cliente2@hotmail.com",
    "cliente3@gmail.com",
  ];
  if (
    emailList[0].includes("cliente1") ||
    emailList[1].includes("cliente2") ||
    emailList[2].includes("cliente3")
  ) {
    console.log("Correo de email encontrado");
  } else {
    console.log("No hay correos de email");
  }
};
emailVerificationForSales("cliente1");

//4️⃣ Macarena necesita generar un identificador único para cada usuario. Recibe un array con nombre y apellido, (por ejemplo: ['Enrique Sofresco', 'Esther Colero', 'Leandro Gado']) y debe imprimir las dos primeras letras de cada nombre y de cada apellido en mayúsculas, seguidas de un número aleatorio entre 10 y 99.
const extractFirstTwoLetter = name => {
  const lastnameFirstwoLetter =
    name
      .substring(name.indexOf(" ") + 1)
      .charAt(0)
      .toUpperCase() +
    name
      .substring(name.indexOf(" ") + 2)
      .charAt(0)
      .toUpperCase();
  return lastnameFirstwoLetter;
};

const userIdGenerator = () => {
  const userNames = ["Enrique Sofresco", "Esther Colero", "Leandro Gado"];

  const numberGenerator1 = Math.floor(Math.random() * 90) + 10;
  const numberGenerator2 = Math.floor(Math.random() * 90) + 10;
  const numberGenerator3 = Math.floor(Math.random() * 90) + 10;

  const user1NameInitial =
    userNames[0].charAt(0).toUpperCase() + userNames[0].charAt(1).toUpperCase();
  const user1LastnameInitial = extractFirstTwoLetter(userNames[0]);//usar una funcion
  const user2NameInitial = userNames[1].charAt(0).toUpperCase() + userNames[1].charAt(1).toUpperCase();
  const user2LastnameInitial = extractFirstTwoLetter(userNames[1]);
  const user3NameInitial =
    userNames[2].charAt(0).toUpperCase() + userNames[2].charAt(1).toUpperCase();
  const user3LastnameInitial = extractFirstTwoLetter(userNames[2]);

  console.log(user1NameInitial + user1LastnameInitial + numberGenerator1);
  console.log(user2NameInitial + user2LastnameInitial + numberGenerator2);
  console.log(user3NameInitial + user3LastnameInitial + numberGenerator3);
};
userIdGenerator();

//5️⃣ Abby encontró una caja fuerte con un código de acceso en un array de cuatro dígitos, por ejemplo: [1, 5, 3, 8]. Si la suma del primer y el último número es par, imprimirá "Acceso concedido", si no, "Acceso denegado".
const securityBoxcode = (number) => {
  if ((number[0] + number[3])% 2 === 0) {
    console.log("Acceso concedido");
  } else {
    console.log("Acceso denegado");
  }
};
securityBoxcode([1, 5, 3, 7]);

//6️⃣ Camila quiere generar dos números aleatorios entre 1 y 100 y determinar cuál es el mayor. Después los guardará en un array poniendo en la primera posición el mayor y en segunda posición el menor. Si son iguales, imprimirá "Empate", si no, imprimirá el array.
const numberGreaterThanRandomnize = (emptyArray) => {
  const randomNumber1 = Math.floor(Math.random() * 100) + 1;
  const randomNumber2 = Math.floor(Math.random() * 100) + 1;

  if (randomNumber1 > randomNumber2) {
    emptyArray[0] = randomNumber1;
    emptyArray[1] = randomNumber2;
  } else {
    {
      emptyArray[0] = randomNumber2;
      emptyArray[1] = randomNumber1;
    }
  } if (randomNumber1 === randomNumber2) {
    console.log("Empate")} 
    else {console.log(emptyArray)}
  }
numberGreaterThanRandomnize([]);

//7️⃣ Bego está calculando descuentos para varios clientes. Recibe un array con tres precios originales ([120, 75, 40]). Para cada precio, genera un número aleatorio entre 1 y 100. Si el número es menor que 50, aplica un 10% de descuento. Si es mayor o igual a 50, aplica un 20%. Debe imprimir el precio original, el número generado y el precio final con descuento para cada uno.
//Ejemplo de cómo debería verse el resultado:
//Precio: 120 | Número generado: 45 | Precio final: 108 (10% de descuento)
//Precio: 75 | Número generado: 65 | Precio final: 60 (20% de descuento)
//Precio: 40 | Número generado: 30 | Precio final: 36 (10% de descuento)

//const discountGenerator = () => { No entiendo porque me dio error
//  const randomNumber = Math.floor(Math.random() * 100) + 1;
//  const discount = randomNumber < 50 ? 0.1 :0.2;
//  const finalPrice = originalPrices - randomNumber * discount;
 // return finalPrice
//} 

const discountCalculator = () => {
  const originalPrices = [120, 75, 40];

// Resuldos 120
  const randomNumber1 = Math.floor(Math.random() * 100) + 1;
  const discount1 = randomNumber1 < 50 ? 0.1 :0.2;
  //10% si es < 50, 20% si es >= 50
  //precio original × (porcentaje / 100) = descuento
  const finalPrice120 = originalPrices[0] - randomNumber1 * discount1;
  
 // Resultados 75 
 const randomNumber2 = Math.floor(Math.random() * 100) + 1;
 const discount2 = randomNumber2 < 50 ? 0.1 :0.2;
 const finalPrice75 = originalPrices[1] - randomNumber2 * discount2;

// Resultados 40
const randomNumber3 = Math.floor(Math.random() * 100) + 1;
const discount3 = randomNumber3 < 50 ? 0.1 :0.2;
const finalPrice40 = originalPrices[2] - randomNumber3 * discount3;
  
  console.log(`Precio: ${originalPrices[0]} 
    | Número generado: ${randomNumber1} 
    | Precio final: ${finalPrice120} 10% de descuento`)
   
  console.log(`Precio: ${originalPrices[1]} 
    | Número generado: ${randomNumber2} 
    | Precio final: ${finalPrice75} 10% de descuento`) 
    
    console.log(`Precio: ${originalPrices[2]} 
    | Número generado: ${randomNumber3} 
    | Precio final: ${finalPrice40} 10% de descuento`)
};
discountCalculator()

//8️⃣ Sabrina está en un restaurante con dos amigos. Recibe un array con tres cuentas, por ejemplo: [120, 75, 93]. Cada cuenta debe dividirse entre 3 para pagar de manera justa. Si el resultado de la división es impar, debe redondearse al número par más cercano. Sabrina debe imprimir el precio original, el precio dividido y el precio final (redondeado si es necesario) para cada cuenta.
//Ejemplo de cómo debería verse el resultado:
//Cuenta original: 120 | Dividido: 40 | Precio final: 40
//Cuenta original: 75 | Dividido: 25 | Precio final: 26 (Redondeado al número par más cercano)
//Cuenta original: 93 | Dividido: 31 | Precio final: 32 (Redondeado al número par más cercano)xsxs
const splitRestaurantBill = (bill) => {
  // Cuenta n1 //Con este comentario me paso una cosa loca, si colocaba 'para la cuenta 120' y luego cambiaba el valor en el array me daba error en consola...
  const dividedPrice1 = bill[0] / 3;
  const finalPrice1 = Math.round(dividedPrice1);
  if (finalPrice1 % 2 !== 0) {finalPrice1 = finalPrice1 + 1}

  //Cuenta n2
  const dividedPrice2 = bill[0] / 3;
  const finalPrice2 = Math.round(dividedPrice2);
  if (finalPrice2 % 2 !== 0) {finalPrice2= finalPrice1 + 1}

  //cuenta n3
  const dividedPrice3 = bill[0] / 3;
  const finalPrice3 = Math.round(dividedPrice3);
  if (finalPrice3 % 2 !== 0) {finalPrice3= finalPrice3 + 1}

  console.log(
    `Cuenta original: ${bill[0]} | Dividido: ${dividedPrice1} | Precio final: ${finalPrice1}`
  );
  console.log(
    `Cuenta original: ${bill[1]} | Dividido: ${dividedPrice2} | Precio final: ${finalPrice2}`
  );
  console.log(
    `Cuenta original: ${bill[2]} | Dividido: ${dividedPrice3} | Precio final: ${finalPrice3}`
  );
}
splitRestaurantBill([120, 75, 93])

//9️⃣ Macarena quiere calcular la edad de tres clientes. Recibe un array con tres años de nacimiento entre 1950 y 2010. Sabiendo que estamos en el año 2025, debe calcular la edad de cada uno y determinar si al menos uno es mayor de 18. Si hay al menos un cliente mayor de edad, imprimirá "Hay un cliente mayor de edad", si no, "Todos son menores de edad".
//tres clientes
//nacieron entre 1950 y 2010
//tomando en cuenta que es 2025
//calcular la edadd de cada uno
// Si hay '1' mayor de edad=Hay un cliente mayor de edad
//pero si no hay: Todos son menores de edad

const ageCalculator = (age) => {
  if(2025 - age[0] >= 18 || 2025 - age[1] >= 18 || 2025 - age[2] >= 18) {
    console.log('Hay un cliente mayor de edad')} else{
    console.log('Todos son menores de edad')
  }
}
ageCalculator([1989,1996,2008])
ageCalculator([2009,2010,2008])

//🔟 Abby encontró un código de seguridad con tres números entre 100 y 999. Si el primer número es mayor que el segundo pero menor que el tercero, imprimirá "Código válido", si no, "Código incorrecto".
//3 números
//
