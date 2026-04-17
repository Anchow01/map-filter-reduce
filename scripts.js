const list= document.querySelector('.ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')


function showAll(productsArray){
    let myLi = ''

    productsArray.forEach((product) => {
        myLi += `
                 <li>
                    <img src="${product.src}">
                    <p>${product.name}</p>
                    <p class="price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                 </li>
         `

    })
    list.innerHTML = myLi
    list.style.display = 'grid'
    const initialImage = document.getElementById('initial-image')
    if (initialImage) {
        initialImage.style.display = 'none'
    }
}

function mapAllItems() {
    const productsMap = menuOptions.map((product) => {
        return {
            ...product,
            price: product.price * 0.9
        };
    });
    showAll(productsMap)
}
function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    alert(`O valor total dos produtos é: R$ ${totalValue.toFixed(2).replace('.', ',')}`)
    console.log(totalValue)

}

function filterAllItems() {
    const veganProducts = menuOptions.filter((product) => product.vegan);
    showAll(veganProducts)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonSumAll.addEventListener('click', sumAllItems)
buttonFilterAll.addEventListener('click', filterAllItems)
