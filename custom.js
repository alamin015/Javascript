// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(json => json.json())
// .then(data => displayData(data))




// const displayData = (data) => {
//     const body = document.getElementById('body')
//     for(data of data){
//         let tr = document.createElement('tr')
//         tr.innerHTML = `
        
//         <td>${data.id}</td>
//         <td>${data.email}</td>
//         <td>${data.body}</td>

        
        
        
//         `;
//         body.appendChild(tr)
//     }
// }

// const api = () => {
//     fetch('https://api.kanye.rest/')
//     .then(response => response.json())
//     .then(data => display(data))
// }


// const display = (data) => {
//     const hello = document.getElementById('hello');
//     let q = document.createElement('q');
//     q.innerHTML = `${data.quote} <br>`;
//     hello.appendChild(q);
// }


const randomUser = () => {
    fetch('http://bdapis.herokuapp.com/api/v1.1/districts')
    .then(response => response.json())
    .then(data => displayData(data))
}

const displayData = (data) => {
    const tBody = document.getElementById('tbody');
    // console.log(data)
    const district = data.data;
    var num = 1;
    for(dis of district){
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${num}</td> <td>${dis.districtbn}</td>`;
        tBody.appendChild(tr);
        num++
    }
}

randomUser();

const country = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountry(data))
}

const displayCountry = (data) =>{
    for(data of data){
        console.log(data.name.common)
    }
}

country()


