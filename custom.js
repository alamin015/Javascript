
fetch('https://restcountries.com/v2/all')
.then(res => res.json())
.then(data => displayContry(data))


const displayContry = data => {
    const card = document.getElementById('card')
    data.forEach(result => {
        // console.log(result)
        const div = document.createElement('div');
        div.classList.add('col-12');
        div.classList.add('col-md-4');
        div.classList.add('col-sm-6');
        div.innerHTML = `
        
        <div class="card m-2 p-2">
            <h4>${result.name}</h4>
            <img class='img' src='${result.flags.svg}'>
            <p class='py-0 my-0'>Population : ${result.population}</p>
            <p class='py-0 my-0'>Region : ${result.region}</p>
            <p class='py-0 my-0'>Capital : ${result.capital}</p>
            <p class='py-0 my-0'>area : ${result.area} square miles</p>
            <p class='py-0 my-0'id='nativeName'>nativeName : ${result.nativeName}</p>
            
            
        </div>

        `
        card.appendChild(div)
    })
}

