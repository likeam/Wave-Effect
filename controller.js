// const button = document.querySelector('button');

// button.addEventListener('click', txt);

//     function txt() {
//     const h1 = document.createElement('h1');

//     h1.innerText = 'Abdul Rehamn';
//     document.body.prepend(h1);

//     setTimeout(()=>{
//         h1.remove();
//     },3000);
// }


// let odd = [];
// let even = [];

// function addMyFriends(friend) {
//     myFriends.push(friend);
//     console.log(myFriends);
    
// }

// for(let i = 0; i <= 100; i++ ){

//     if( i%2 == 0  ){
//         even.push(i);
//     }else{
//         odd.push(i);
//     }
    
// }


// console.log(odd);
// console.log(even);



// const khalifa1 = {
//     name: 'Abubakar',
//     age: 64
// }

// const khalifa2 = {
//     name: 'Umar',
//     age: 68
// }
// const khalifa3 = {
//     name: 'Usman',
//     age: 70
// }
// const khalifa4 = {
//     name: 'Ali',
//     age: 67
// }
// const khalifa5 = {
//     name: 'Mavia',
//     age: 72
// }

// function khulfaAge(khulfa){
//     console.log(khulfa.age)
// }

// khulfaAge(khalifa1);

let counter = 0;

function incrementCounter(){
    counter++

    //create an element
    const li = document.createElement('li');
    li.innerHTML = '<br>Sentence' + counter;

    //append that element
    ulElement.appendChild(li)
}

function decrementCounter(){
    counter--
    counterEl.innerText = counter;

}
incrementCounter.