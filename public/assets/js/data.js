const data = [
  {
    title: 'Product preview card component',
    url: './public/views/product-preview-card-component/index.html',
    img: './public/assets/img/product-preview-card-component.png',
    tags: ['html', 'css']
  },
  {
    title: 'QR code',
    url: 'https://daldev14.github.io/qr-code/',
    img: './public/assets/img/qr-code.png',
    tags: ['html', 'css', 'javascipt']
  },
  {
    title: 'Interactive rating component',
    url: './public/views/interactive-rating-component/index.html',
    img: './public/assets/img/interactive-rating-component.png',
    tags: ['html', 'css', 'javascipt']
  },
  {
    title: 'NFT preview card component',
    url: './public/views/nft-preview-card-component/index.html',
    img: './public/assets/img/nft-preview-card-component.png',
    tags: ['html', 'css', 'javascipt']
  },
  {
    title: 'JS encrypt',
    url: 'https://daldev14.github.io/JS-Encrypt/',
    img: './public/assets/img/js-encrypt.png',
    tags: ['html', 'css', 'javascipt']
  },
  {
    title: 'Order summary component',
    url: './public/views/order-summary-component/index.html',
    img: './public/assets/img/order-summary-component.png',
    tags: ['html', 'css']
  },
  {
    title: 'Column preview card component',
    url: './public/views/column-preview-card-component/index.html',
    img: './public/assets/img/column-preview-card-component.png',
    tags: ['html', 'css']
  },
  {
    title: 'Stats preview card component',
    url: './public/views/stats-preview-card-component/index.html',
    img: './public/assets/img/stats-preview-card-component.png',
    tags: ['html', 'css']
  },
  {
    title: 'Four card feature section',
    url: './public/views/four-card-feature-section/index.html',
    img: './public/assets/img/four-card-feature-section.png',
    tags: ['html', 'css']
  }
]

const list = document.querySelector('#list')

const dataOrder = data.sort((prev, next) => {
  if (prev.title > next.title) return 1
  if (prev.title < next.title) return -1
  return 0
})

let items = ''

console.log(dataOrder)

dataOrder.forEach(async (item) => {
  const { title, url, img, tags } = item

  let listTags = ''

  tags?.forEach(tag => {
    listTags += `
    <p>
      <span>#</span>${tag}
    </p>
    `
  })

  items += `
  <section class="card">
    <a class="card__link" href="${url}">
      <picture class="card__preview">
        <img src="${img}" alt="preview">
      </picture>
      <div class="card__info">
        <h2 class="card__title">
          ${title}
        </h2>
        <div class="card__tag">
          ${listTags}
        </div>
      </div>
    </a>
  </section>
`
})

list.innerHTML = items
