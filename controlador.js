//OBJETOS
let producto1={
    nombre:"Control celular",
    precio:500000,
    estado:false,
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-e5904.appspot.com/o/control%20celular.jpg?alt=media&token=4eb1086d-18ad-43f9-9198-84c661af7ace"
}

let producto2={
    nombre:"control xbox 360",
    precio:500000,
    estado:false,
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-e5904.appspot.com/o/control%20xbox%20360.jpg?alt=media&token=e9570f5d-ac85-45dc-942d-bce6ff65ac7b"
}

let producto3={
    nombre:"Ps",
    precio:500000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-e5904.appspot.com/o/ps.jpg?alt=media&token=fe8de199-c111-4cef-8bcf-25b5b1687e1a"
}

let producto4={
    nombre:"Ps2 control",
    precio:500000,
    estado:false,
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-e5904.appspot.com/o/ps2%20control.jpg?alt=media&token=b13ab596-db45-4534-9fb0-e9d7f469534c"
}

let producto5={
    nombre:"ps3  cable carga",
    precio:500000,
    estado:false,
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-e5904.appspot.com/o/ps3%20cable%20carga.jpg?alt=media&token=24d0325b-fc08-47d9-aa71-881c56f76062"
}

let producto6={
    nombre:"ps3 mando",
    precio:500000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-e5904.appspot.com/o/ps3%20mando.jpg?alt=media&token=3d957f28-f04b-4380-965b-51983ff42941"
}

let producto7={
    nombre:"ps3",
    precio:500000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-e5904.appspot.com/o/ps3.jpg?alt=media&token=0fb58f19-a8d1-4f8c-9079-c87e4c28af9f"
}

let producto8={
    nombre:"ps4 control especial",
    precio:500000,
    estado:false,
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-e5904.appspot.com/o/ps4%20control%20especial.jpg?alt=media&token=ed640423-959d-48ca-9aeb-69e2ee2ca13b"
}

let producto9={
    nombre:"ps4 controles de colores",
    precio:500000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-e5904.appspot.com/o/ps4%20controles%20de%20colores.jpg?alt=media&token=9b05214a-af99-4cb6-bbb7-f809cdd8a0cc"
}

let producto10={
    nombre:"ps4 mando",
    precio:500000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-e5904.appspot.com/o/ps4%20mando.jpg?alt=media&token=a0d8df57-ae85-4ede-91c6-999fd10d9b37"
}

let producto11={
    nombre:"ps4",
    precio:500000,
    estado:false,
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-e5904.appspot.com/o/ps4.jpg?alt=media&token=8fb4773a-f825-488f-9427-7c0907f77e83"
}

let producto12={
    nombre:"ps5",
    precio:500000,
    estado:"false",
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-e5904.appspot.com/o/ps5.jpg?alt=media&token=47616c7b-6d4b-4e87-bbd4-ca5e4255bbd7"
}

let producto13={
    nombre:"switch lite amarilla",
    precio:500000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-e5904.appspot.com/o/switch%20lite%20amarilla.jpg?alt=media&token=820c15b1-d546-4624-8613-2e59a0b7bc3a"
}

let producto14={
    nombre:"switch mando pro",
    precio:500000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-e5904.appspot.com/o/switch%20mando%20pro.jpg?alt=media&token=79162564-2f7c-4f28-b327-4ddb6f806884"
}

let producto15={
    nombre:"switch mando",
    precio:500000,
    estado:false,
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-e5904.appspot.com/o/switch%20mando.jpg?alt=media&token=874106e9-a704-4a03-9baa-024facc4537e"
}

let producto16={
    nombre:"wii mando",
    precio:500000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-e5904.appspot.com/o/wii%20mando.jpg?alt=media&token=9fec2577-41db-4119-abc5-63bcdddf8083"
}

let producto17={
    nombre:"xbox one s",
    precio:500000,
    estado:false,
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-e5904.appspot.com/o/xbox%20one%20s.jpg?alt=media&token=bb6019cd-7d56-4022-b8f1-8b06fe981de4"
}
//ARREGLO
let productos=Array(
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
    producto9,
    producto10,
    producto11,
    producto12,
    producto13,
    producto14,
    producto15,
    producto16,
    producto17,
)

//RECORRO EL ARREGLO
let contenedor=document.getElementById("contenedor")
productos.forEach(function(producto){
let foto=document.createElement("img")
foto.classList.add("w-100","img-fluid")
foto.src=producto.foto
contenedor.appendChild(foto)    
let columna=document.createElement("div")
columna.classList.add("col")

let tarjeta=document.createElement("div")
tarjeta.classList.add("card")

tarjeta.appendChild(foto)
columna.appendChild(tarjeta)
contenedor.appendChild(columna)








})