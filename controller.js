const button = document.querySelector('button');

button.onclick = () =>{
    const h1 = document.createElement('h1');

    h1.innerText = 'Abdul Rehamn';
    document.body.appendChild(h1);
}