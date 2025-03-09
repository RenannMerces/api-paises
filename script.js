const formSearch = document.getElementById('form-Search');
const sectionCard = document.getElementById("card-Section");

formSearch.addEventListener("submit", async (event) => {
    event.preventDefault();
    const imputSearchValue = document.getElementById("imput-Search").value;
    sectionCard.innerHTML = '';

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${imputSearchValue}`);
        const data = await response.json();

        const { name, flags, population, capital, subregion } = data[0];

        const nomePais = name.common;
        const bandeiraPais = flags.svg;
        const populacao = population;
        const regiao = subregion;

        const output = `
        <div class="card p-3">
            <img src="${bandeiraPais}" class="card-img-top" alt="${nomePais}">
            <div class="card-body">
                <h1>${nomePais}</h1>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Capital:</strong> ${capital}</li>
                    <li class="list-group-item"><strong>Continente:</strong> ${regiao}</li>
                    <li class="list-group-item"><strong>População:</strong> ${populacao}</li>
                </ul>
            </div>
        </div>
        `;
        sectionCard.innerHTML = output;

    } catch (err) {
        console.log("Deu ruim: ", err);
        sectionCard.innerHTML = '<p class="text-center text-danger">País não encontrado, tente novamente.</p>';
    }
});
