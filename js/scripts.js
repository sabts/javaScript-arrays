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
  if (productList.includes(product)){
    console.log(`La posición del producto es ${productList.indexOf(product)}`);
  } else {
    console.log("Producto no disponible")};
};
storeProductList("Gorra");

//3️⃣ Sabrina está revisando su lista de correos electrónicos para enviar promociones, por ejemplo: ["cliente1@gmail.com", "cliente2@hotmail.com", "cliente3@gmail.com"]. Quiere asegurarse de que al menos uno de los correos pertenece a Gmail. Si lo encuentra, debe mostrar "Correo de Gmail encontrado". Si no, "No hay correos de Gmail".
const emailVerificationForSales = () =>{
  const emailList= ["cliente1@gmail.com", "cliente2@hotmail.com", "cliente3@gmail.com"];
  if(emailList[0].includes('cliente1')||emailList[1].includes('cliente2') || emailList[2].includes('cliente3'))
    {console.log('Correo de email encontrado')} 
  else{console.log('No hay correos de email')}
}
emailVerificationForSales('cliente1')

//4️⃣ Macarena necesita generar un identificador único para cada usuario. Recibe un array con nombre y apellido, (por ejemplo: ['Enrique Sofresco', 'Esther Colero', 'Leandro Gado']) y debe imprimir las dos primeras letras de cada nombre y de cada apellido en mayúsculas, seguidas de un número aleatorio entre 10 y 99.
const userIdGenerator = user =>{
  const userNames = ['Enrique Sofresco', 'Esther Colero', 'Leandro Gado'];

  const numberGenerator1= Math.floor(Math.random() * 90) +10;
  const numberGenerator2= Math.floor(Math.random() * 90) +10;
  const numberGenerator3= Math.floor(Math.random() * 90) +10;

  const user1NameInitial= userNames[0].charAt(0).toUpperCase()+userNames[0].charAt(1).toUpperCase();
  const user1LastnameInitial= userNames[0].charAt(8).toUpperCase()+userNames[0].charAt(9).toUpperCase();
  const user2NameInitial= userNames[1].charAt(0).toUpperCase()+userNames[1].charAt(1).toUpperCase();
  const user2LastnameInitial= userNames[1].charAt(7).toUpperCase()+userNames[1].charAt(8).toUpperCase();
  const user3NameInitial= userNames[2].charAt(0).toUpperCase()+userNames[2].charAt(1).toUpperCase();
  const user3LastnameInitial= userNames[2].charAt(8).toUpperCase()+userNames[2].charAt(9).toUpperCase();

  console.log(user1NameInitial+user1LastnameInitial+numberGenerator1)
  console.log(user2NameInitial+user2LastnameInitial+numberGenerator2)
  console.log(user3NameInitial+user3LastnameInitial+numberGenerator3)
}
userIdGenerator();

//5️⃣ Abby encontró una caja fuerte con un código de acceso en un array de cuatro dígitos, por ejemplo: [1, 5, 3, 8]. Si la suma del primer y el último número es par, imprimirá "Acceso concedido", si no, "Acceso denegado".
const securityBoxcode = () =>{
  const firstDigitCode = Math.floor(Math.random()*10);
  const secondDigitCode = Math.floor(Math.random()*10);
  const thirdDigitCode = Math.floor(Math.random()*10);
  const fourthDigitCode = Math.floor(Math.random()*10);

  const firstAndLastDigitSum = firstDigitCode + fourthDigitCode;
  console.log(`code:[${firstDigitCode},${secondDigitCode},${thirdDigitCode},${fourthDigitCode}]`)
  if(firstAndLastDigitSum % 2 === 0){console.log('Acceso concedido')} else{
    console.log('Acceso denegado')
  }
}
securityBoxcode()

//6️⃣ Camila quiere generar dos números aleatorios entre 1 y 100 y determinar cuál es el mayor. Después los guardará en un array poniendo en la primera posición el mayor y en segunda posición el menor. Si son iguales, imprimirá "Empate", si no, imprimirá el array.
const numberGreaterThanRandomnize = () => {
  const randomNumber1 = Math.floor(Math.random()*100)+1;
  const randomNumber2 = Math.floor(Math.random()*100)+1;
  const numbers = [randomNumber1, randomNumber2];///tiene que estar vacio? eso no sale en el pdf:'(

  if(randomNumber1>randomNumber2){
    console.log(`${numbers.unshift(randomNumber1)} ${numbers.push(randomNumber2)}`)
  } else if (randomNumber1 < randomNumber2){
    console.log(`${numbers.unshift(randomNumber2)} ${numbers.push(randomNumber1)}`)
  } else if (randomNumber1 === randomNumber2){
    console.log('Empate')
  }
}
numberGreaterThanRandomnize()

//7️⃣ Bego está calculando descuentos para varios clientes. Recibe un array con tres precios originales ([120, 75, 40]). Para cada precio, genera un número aleatorio entre 1 y 100. Si el número es menor que 50, aplica un 10% de descuento. Si es mayor o igual a 50, aplica un 20%. Debe imprimir el precio original, el número generado y el precio final con descuento para cada uno.
//Ejemplo de cómo debería verse el resultado:
//Precio: 120 | Número generado: 45 | Precio final: 108 (10% de descuento)
//Precio: 75 | Número generado: 65 | Precio final: 60 (20% de descuento)
//Precio: 40 | Número generado: 30 | Precio final: 36 (10% de descuento)
const discountCalculator = () =>{
  const originalPrices = [120, 75, 40]
  const randomNumber120 = Math.floor(Math.random()*100)+1;
  const randomNumber75 = Math.floor(Math.random()*100)+1;
  const randomNumber40 = Math.floor(Math.random()*100)+1;
}


//8️⃣ Sabrina está en un restaurante con dos amigos. Recibe un array con tres cuentas, por ejemplo: [120, 75, 93]. Cada cuenta debe dividirse entre 3 para pagar de manera justa. Si el resultado de la división es impar, debe redondearse al número par más cercano. Sabrina debe imprimir el precio original, el precio dividido y el precio final (redondeado si es necesario) para cada cuenta.
//Ejemplo de cómo debería verse el resultado:
//Cuenta original: 120 | Dividido: 40 | Precio final: 40
//Cuenta original: 75 | Dividido: 25 | Precio final: 26 (Redondeado al número par más cercano)
//Cuenta original: 93 | Dividido: 31 | Precio final: 32 (Redondeado al número par más cercano)

