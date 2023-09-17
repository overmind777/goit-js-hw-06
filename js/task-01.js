
const totalItems = document.querySelectorAll('.item');

console.log('Number of categories: ', totalItems.length);

totalItems.forEach(totalItem => {
    console.log('Category: ', totalItem.querySelector('h2').innerText);
    console.log('Elements: ', totalItem.querySelectorAll('ul>li').length);
});