let placeForData = document.getElementById('placeForData');
let btnForData = document.getElementById('btnForData');

const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-users.php', {
        method: 'GET',
    })
        .then(res => res.json())
        .then((resJSON) => {
            console.log(resJSON);
            resJSON.forEach((item) => {
                let element = document.createElement('p');
                element.innerHTML = `User ID: ${item.id}`;
                placeForData.appendChild(element)
                let element2 = document.createElement('p');
                element2.innerHTML = `User Name: ${item.name}`;
                placeForData.appendChild(element2)
                let element3 = document.createElement('p');
                element3.innerHTML = `User URL: ${item.website} <br>--------`;
                placeForData.appendChild(element3);
            })
        })
        .catch((error) => {
            console.error(error);
        })
}
btnForData.addEventListener('click', getData);

const scrollToEndOfPage = () => {
    if (document.documentElement.scrollTop + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
        getData();
    }
}

window.addEventListener('scroll', scrollToEndOfPage);

