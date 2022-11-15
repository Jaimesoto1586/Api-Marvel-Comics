const marvel = {
    render: () => {

        const urlAPI = 'https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=cc0640fb795a440233e13ee866db5c87&hash=5a6d511aff1773e8cee16b421d8898bb';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
        .then(res => res.json()) 
        .then((json) => {
            // console.log(json, 'RES.JSON')
            for(const hero of json.data.results){
                let urlHero = hero.urls[0].url;
                contentHTML += `
                <div class="col-md-4 mt-2">
                    <a href="${urlHero}" target="_blank">
                        <img class="img-thumbnail" src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.title}">
                    </a>
                    <h3 class="title">${hero.title}</h3>
                </div>`;
            }
            container.innerHTML = contentHTML;
        })
    }
};

marvel.render();