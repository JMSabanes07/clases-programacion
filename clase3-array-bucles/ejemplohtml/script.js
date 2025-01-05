let autitos = [
  {
    modelo: 'nissan',
    imgUrl:
      'https://www.nissan-cdn.net/content/dam/Nissan/ar/vehicles/kicks-my-23/versiones/colores/231110_advance_plus_gris_plata.jpg.ximg.l_12_m.smart.jpg',
    img2: 'https://www.nissan-cdn.net/content/dam/Nissan/ar/vehicles/kicks-my-23/versiones/colores/231110_advance_plus_gris_plata.jpg.ximg.l_12_m.smart.jpg',
    precio: 20000,
  },
  {
    modelo: 'renault',
    imgUrl:
      'https://www.nissan-cdn.net/content/dam/Nissan/ar/vehicles/kicks-my-23/versiones/colores/231110_advance_plus_gris_plata.jpg.ximg.l_12_m.smart.jpg',
    img2: 'https://www.nissan-cdn.net/content/dam/Nissan/ar/vehicles/kicks-my-23/versiones/colores/231110_advance_plus_gris_plata.jpg.ximg.l_12_m.smart.jpg',
    precio: 20000,
  },
]

const container = document.getElementById('container')

for (let key in autitos) {
  const autito = autitos[key]
  const article = document.createElement('article')
  article.innerHTML = `
    <h1>${autito.modelo}</h1>
    <div class="imageContainer">
      <img id="img1" src="${autito.imgUrl}" alt="" width="300">
      <div class="asd">
        <img id="img2" src="${autito.img2}" alt="" width="300">
        <h2>Precio: ${autito.precio}</h2>
      </div>
    </div>
  `
  container.appendChild(article)
}
