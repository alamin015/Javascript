fetch('https://jsonplaceholder.typicode.com/comments')
.then(json => json.json())
.then(data => displayData(data))




const displayData = (data) => {
    const body = document.getElementById('body')
    for(data of data){
        let tr = document.createElement('tr')
        tr.innerHTML = `
        
        <td>${data.id}</td>
        <td>${data.email}</td>
        <td>${data.body}</td>

        
        
        
        `;
        body.appendChild(tr)
    }
}

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