const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSomeAll = document.querySelector('.reduce-all')
const buttonFilterAll = document.querySelector('.filter-all')

let myLi = ''

function showAll(productsArray) {
    myLi =''

    productsArray.forEach((product) => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">€ ${product.price}</p>
        </li>
        `
    })
    list.innerHTML = myLi
}
function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, //give 10% discount
    }))

    showAll(newPrices)
}

function reduceItems () {
    const totalValue = menuOptions.reduce ((acc,curr) => acc + curr.price, 0)
    list.innerHTML =`
    <li>
    <p>The total price (without any discounts) is € ${totalValue}</p>
    </li>
    `
}

function filterAllItems () {
    const filterJustVegan = menuOptions.filter ( (product) => product.vegan === true)

    showAll(filterJustVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonSomeAll.addEventListener('click', reduceItems)
buttonFilterAll.addEventListener('click', filterAllItems)




