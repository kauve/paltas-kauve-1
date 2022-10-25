/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/




//URL del servidor
const baseUrl = "https://platzi-avo.vercel.app";
const app = document.querySelector("#app")

app.addEventListener("click", (event) => {
   if (event.target.nodeName === "H2"){
    window.alert("hola");
   }
});

const formatPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: "PEN",
    }).format(price);

    return newPrice;
}



//INTL
//1 - format fecha
//2 - format monedas

// Se conecta al servidor
window
    .fetch(`${baseUrl}/api/avo`)

    //Procesar la respuesta y convertirla en JSON
    .then(respuesta => respuesta.json())

    //JSON -> Data -> Renderizar info browser
    .then(responseJson => {

        const allItems = []

        //Muestra la data
        console.log(responseJson)

        responseJson.data.forEach((item) => {

            //Crear imagen
            const containerImagen = document.createElement('div')
            const imagen = document.createElement('img')
            imagen.src = `${baseUrl}${item.image}`
            imagen.className = "imagen"
            containerImagen.append(imagen)
            containerImagen.className = "containerImagen"

            //crear titulo
            const tittle = document.createElement('h2')
            tittle.textContent = item.name
            tittle.className = "tittle"


            //crear precio
            const price = document.createElement('div')
            price.textContent = formatPrice(item.price)
            price.className = "price"

            //Crear container
            const container = document.createElement('div')
            container.className = "container"

            //Se agrega el contenido dentro del container
            container.append(containerImagen, tittle, price)

            //Se agrega el container al array "allItems"
            allItems.push(container)
        })
        //Se agrega al body cada container del array
        app.append(...allItems)

    })


