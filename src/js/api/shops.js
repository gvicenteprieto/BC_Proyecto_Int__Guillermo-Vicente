//con jsonplaceholder

const shops = async () => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const dataJson = await data.json();
        renderShops(dataJson);
    } catch (error) {
        console.log(error);
    }
}

const renderShops = (data) => {
    const container = document.getElementById('container');
    data.forEach(item => {

        let section = document.createElement('section');
        section.setAttribute('class', 'section__shops');
        container.appendChild(section);

        let username = document.createElement('h3');
        username.textContent = item.username;
        section.appendChild(username);

        let address = document.createElement('p');
        address.textContent = item.address.street + ' ' + item.address.suite + ' ' + item.address.city + ' ' + item.address.zipcode;
        section.appendChild(address);

        let website = document.createElement('p');
        website.textContent = 'https://' + item.website;
        section.appendChild(website);
    });
}

shops();

//con faker

// const shops = async () => {
//     try {
//         const data = await fetch('https://fakerapi.it/api/v1/companies?_quantity=10');
//         const dataJson = await data.json();
//         let shop = dataJson.data;
//         console.log(shop);
//         renderShops(shop);
//     } catch (error) {
//         console.log(error);
//     }
// }

// const renderShops = (shop) => {
//     const container = document.getElementById('container');
//     shop.forEach(item => {

//         let section = document.createElement('section');
//         section.setAttribute('class', 'section__shops');
//         container.appendChild(section);

//         let article = document.createElement('article');
//         article.setAttribute('class', 'article__shops');
//         section.appendChild(article);

//         let name = document.createElement('h5');
//         name.setAttribute('class', 'h5');
//         name.textContent = item.name;
//         article.appendChild(name);
        
//         let country = document.createElement('h6');
//         country.textContent = item.country;
//         article.appendChild(country);

//         let phone = document.createElement('p');
//         phone.textContent = item.phone;
//         article.appendChild(phone);

//         let website = document.createElement('p');
//         website.textContent = item.website;
//         article.appendChild(website);


//     });
// }

// shops();



