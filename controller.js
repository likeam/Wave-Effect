const button = document.querySelector('button');

button.addEventListener('click', txt);

    function txt() {
    const h1 = document.createElement('h1');

    h1.innerText = 'Abdul Rehamn';
    document.body.prepend(h1);

    setTimeout(()=>{
        h1.remove();
    },3000);
}