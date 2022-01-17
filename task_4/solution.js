// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    let data = JSON.parse(json); 
    let products = data.products;
    return products;                                                       
}

function renderProductsCards(json) {
    clearProducts();                         
    let products = parseProducts(json);  
    let lenght = products.lenght;         
        for (let i = 0; i < lenght; i++) {   
          addProducts(products[i]);           
    }
}