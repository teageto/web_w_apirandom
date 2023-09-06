const url = 'https://food-quiz.p.rapidapi.com/questions?level=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e62e48f4d2msh7b891d152190852p1f81cdjsn93d4034bb839',
		'X-RapidAPI-Host': 'food-quiz.p.rapidapi.com'
	}
};

fetch(url, options)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const contData = document.getElementById('container')

        let arrayProducts = data;
        const div = document.createElement('div');

        arrayProducts.forEach(item => {

        div.innerHTML = `
            <form >
            <h2>${item.question}</h2>
            <input type="radio" name="${item.id}" value="${item.option1}">
            <label class="options" for="">${item.option1}</label><br>
            <input type="radio" name="${item.id}" value="${item.option2}">
            <label class="options" for="">${item.option2}</label><br>
            <input type="radio" name="${item.id}" value="${item.option3}">
            <label class="options" for="">${item.option3}</label><br>
            <input type="button" id='button' name="button" value="Send">
            </form>
                `
            ;
    
            contData.appendChild(div);
    });      
});

document.addEventListener('DOMContentLoaded', ()=> {

    const button = document.getElementById('button')

    button.addEventListener('click', ()=> {
        if()
    });

});