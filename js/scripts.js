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