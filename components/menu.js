const productsList = [
  {
    title: "Bebidas alcoólicas",
    itens: [
      {
        name: "Vinho",
        img: "../images/cardapio/bebidas/vinho.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        options: [
          "Pérgola",
          "Chileno"
        ]
      },
      {
        name: "Cervejas",
        img: "../images/cardapio/bebidas/cerveja.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        options: [
          "Brahma",
          "Original",
          "Itaipava"
        ]
      },
      {
        name: "Whisky",
        img: "../images/cardapio/bebidas/whisky.webp",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      }
    ]
  },
  {
    title: "Bebidas não alcoólicas",
    itens: [
      {
        name: "Sucos",
        img: "../images/cardapio/bebidas/suco.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        options: [
          "Maça",
          "Abacaxi",
          "Morango"
        ]
      },
      {
        name: "Coca Cola",
        img: "../images/cardapio/bebidas/coca-cola.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        options: [
          "Normal",
          "Zero"
        ]
      },
      {
        name: "Água",
        img: "../images/cardapio/bebidas/agua.jpeg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        options: [
          "Com gás",
          "Tônica"
        ]
      },
    ]
  },
  {
    title: "Entradas",
    itens: [
      {
        name: "Entrada",
        img: "../images/cardapio/entradas/entrada.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      },
      {
        name: "Entrada",
        img: "../images/cardapio/entradas/entrada.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      },
      {
        name: "Entrada",
        img: "../images/cardapio/entradas/entrada.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      }
    ]
  },
  {
    title: "Pratos Princípais",
    itens: [
      {
        name: "Pizza",
        img: "../images/cardapio/pratos/pizza.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
      },
      {
        name: "Pizza",
        img: "../images/cardapio/pratos/pizza.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
      },
      {
        name: "Salmão",
        img: "../images/cardapio/pratos/salmao.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
      }
    ]
  },
  {
    title: "Sobremesas",
    itens: [
      {
        name: "Bolo",
        img: "../images/cardapio/sobremesas/bolo.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        options: [
          "Chocolate",
          "Morango",
          "Leite ninho"
        ]
      },
      {
        name: "CupCake",
        img: "../images/cardapio/sobremesas/cupcake.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        options: [
          "Chocolate",
          "Morango",
          "Leite ninho"
        ]
      },
      {
        name: "CupCake",
        img: "../images/cardapio/sobremesas/cupcake.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        options: [
          "Chocolate",
          "Morango",
          "Leite ninho"
        ]
      }
    ]
  }
]

const menu = (products) => {
  products = productsList

  const menuDom = document.querySelector("#menu-products");
  
  const handlerNav = products.reduce((p, c, index) => {
      const {title} = c;
      
      p += `
        <button type="button" class="nav-link ${index === 0 ? 'active' : ''} mb-2 mb-md-0 text-start" data-bs-toggle="tab" data-bs-target="#menu-itens-${index}">
          ${title}
        </button>
      `
      return p
    }, '')

  const handlerContent = products.reduce((pp, pc, pindex) => {

      const handlerItens = pc.itens.reduce((ip, ic) => {
        let {name, img, options, desc} = ic;

        if (options) {
          const handlerOptions = options.reduce((op, oc) => {
            op += `
              <li>
                ${oc}
              </li>
            `
            return op;
          }, '')

          options = `
            <div class="options">
              <h5>Opções</h5>
              <ul>
                ${handlerOptions}
              </ul>
            </div>
          `
        } else {
          options = '';
        }

        ip += `
          <li class="card">
            <div class="card-img ratio ratio-4x3">
              <img src="${img}" class="w-100 rounded-3" alt="${name}"/>
            </div>
            <div class="card-body">
              <h4 class="card-title">${name}</h4>
              <p class="card-text">${desc}</p>
              ${options}
            </div>
          </li>
        `

        return ip;
      }, '')

      pp += `
        <div class="tab-pane ${pindex === 0 ? 'active' : ''}" id="menu-itens-${pindex}">
          <ul class="cards gap-2 p-0">
            ${handlerItens}
          </ul>
        </div>
      `

      return pp;
    }, '')

  menuDom.innerHTML = `
    <aside class="mb-2">
      <nav class="nav nav-pills d-flex d-md-flex flex-md-column gap-1 mb-2 rounded-3">
        ${handlerNav}
      </nav>
    </aside>
    <div class="tab-content">
      ${handlerContent}
    </div>
  `;
}

export default menu