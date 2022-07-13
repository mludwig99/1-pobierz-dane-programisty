let button = document.getElementById('btn');


const downloadData = () => {
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .then(response => response.json())
        .then((response) => {

            console.log(response);
            const person = document.getElementById('main');
            let info = document.createElement('div');
            info.setAttribute('id', 'dane-programisty');
            info.style.height = '100px';
            info.style.width = '128px';
            let paragraf = document.createElement('p');
            paragraf.innerHTML = "Imię " + response.imie + " nazwisko " + response.nazwisko + " zawód " + response.zawod + " miejsce pracy " + response.firma;
            info.appendChild(paragraf);
            person.appendChild(info);
            
        });
}


button.addEventListener('click', downloadData);