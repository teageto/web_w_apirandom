const urlGratis = 'https://epic-free-games.p.rapidapi.com/epic-free-games';
const optionsGratis = {
	method: 'GET',
	headers: {
		Type: 'br',
		'X-RapidAPI-Key': 'e62e48f4d2msh7b891d152190852p1f81cdjsn93d4034bb839',
		'X-RapidAPI-Host': 'epic-free-games.p.rapidapi.com'
	}
};

fetch(urlGratis, optionsGratis)
 .then(response => response.json())
  .then(data => {
    console.log(data);

    let product = document.getElementById('product');
    

    data.forEach(item => {
        let div = document.createElement('div');
        div.classList.add('product');

        div.innerHTML = `
                <div class="image" style="background-image: url(${item.offerImageTall});">
                </div>
                <div class="">
                    <h2 class="" >${item.name}</h2> <h2 class="">${item.discountPrice} ${item.currencyCode}</h2>
                </div>
                <p class="">${item.description}</p>
            `;

            product.appendChild(div);
        
    });
  });

const urlNext = 'https://epic-free-games.p.rapidapi.com/epic-free-games-coming-soon'
const optionsNext = {
    method: 'GET',
    headers: {
        Type: '',
        'X-RapidAPI-Key': 'e62e48f4d2msh7b891d152190852p1f81cdjsn93d4034bb839',
		'X-RapidAPI-Host': 'epic-free-games.p.rapidapi.com'
    }
};

fetch(urlNext, optionsNext)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let commingsoon = document.getElementById('commingsoon');

        data.forEach(item => {
            let div = document.createElement('div');
            div.classList.add('comson');
    
            div.innerHTML = `
                    <div class="image" style="background-image: url(${item.offerImageWide});">
                    </div>
                    <div class="">
                        <h2 class="" >${item.name}</h2> <h2 class="">${item.discountPrice} ${item.currencyCode}</h2>
                    </div>
                    <p class="">${item.description}</p>
                `;
    
                commingsoon.appendChild(div);
        });
    });