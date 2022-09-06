// function wait3seconds() {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve,3000)
            
    
//     })
    
// }


// wait3seconds()
// .then(()=> console.log('Done!'))
// .catch(()=> console.log('Error!!!!!!!'))



// const h1 = document.querySelector('h1');
// setTimeout(()=>{ 
//     h1.style.color = 'red'
//     setTimeout(()=>{
//         h1.style.color = 'orange'
//         setTimeout(()=>{
//             h1.style.color = 'yellow'
//             setTimeout(()=>{
//                 h1.style.color = 'green'
//                 setTimeout(()=>{
//                     h1.style.color = 'blue'
//                     setTimeout(()=>{
//                         h1.style.color = 'purple'
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)



// function changeColor(el, color){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             el.style.color = color;
//             resolve()
//         }, 1000);
//     })
// }

// changeColor(h1,'teal')
// .then(()=>{ changeColor(h1,'orange')})
// .then(()=>{ changeColor(h1,'blue')})
// .then(()=>{ changeColor(h1,'brown')})

// let request = new XMLHttpRequest();

// request.onload = function () {
//     if (request.readyState !== 4) return;

//     //check status code
//     if(request.status >= 200 && request.status < 300){
//         console.log("It worked")
//     } else {
//         console.log("Error")
//     }
// }

// request.onerror = function handleError(){

//     console.log("Network Error")
//     request = null;
// }

// request.open('GET', 'http://stapi.co/api/v1/rest/animal/search')

// request.send();



// function get(url) {

// const request = new XMLHttpRequest();
//     return new Promise((resolve, reject) => {
//         request.onload = function () {
//             if (request.readyState !== 4) return;
    
//             //check status code
//             if(request.status >= 200 && request.status < 300){
//                 resolve(JSON.parse(request.response))
//             } else {
//                 reject(request.status)
//             }
//         }
//         request.onerror = function handleError(){
//             request = null;
//             reject('Network Error')
//         }
//         request.open('GET', url);
//         request.send();


//     })
// }
// url = 'http://stapi.co/api/v1/rest/animal/search'
// get(url)
//     .then( res=> console.log(res))
//     .catch(err=>console.log(err))



// let fourPokemonPromises = [];

// for (let i = 1; i < 5; i++) {
//   fourPokemonPromises.push(
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
//   );
// }

// Promise.all(fourPokemonPromises)
//   .then(pokemonArr => (
//     pokemonArr.forEach(p => console.log(p.name))
//   ))
//   .catch(err => console.log(err));

class LuckyNum{
  constructor(num){
    this.luckyNum = num;
    this.url = 'http://numbersapi.com/'
  }
  async luckyFact() {
    let res = await axios.get(`${this.url}${this.luckyNum}`)
    console.log(`A fact about your lucky number is ${res.data}`)

  }
  async luckyRange(){

    let res = await axios.get(`${this.url}${this.luckyNum}..${this.luckyNum + 3}`)
    console.log(res)
    $('#range2').text(`Facts about your range of lucky numbers is ${res.data[this.luckyNum]}${res.data[this.luckyNum+1]}${res.data[this.luckyNum+2]}${res.data[this.luckyNum+3]}`)

  }

  async luckyList(){

    // let num1 = await axios.get(`${this.url}${this.luckyNum}`)
    // $('#range2').append(`<li> ${num1.data} </li>`)
    // let num2 = await axios.get(`${this.url}${this.luckyNum}`)
    // $('#range2').append(`<li> ${num2.data} </li>`)
    // let num3= await axios.get(`${this.url}${this.luckyNum}`)
    // $('#range2').append(`<li> ${num3.data} </li>`)
    // let num4 = await axios.get(`${this.url}${this.luckyNum}`)
    // $('#range2').append(`<li> ${num4.data} </li>`)

        let num1promise = axios.get(`${this.url}${this.luckyNum}`)
        
        let num2promise = axios.get(`${this.url}${this.luckyNum}`)
        
        let num3promise= axios.get(`${this.url}${this.luckyNum}`)
        
        let num4promise = axios.get(`${this.url}${this.luckyNum}`)

        let num1 = await num1promise
        let num2 = await num2promise
        let num3 = await num3promise
        let num4 = await num4promise


        $('#range2').append(`<li> ${num1.data} </li>`)
        $('#range2').append(`<li> ${num2.data} </li>`)
        $('#range2').append(`<li> ${num3.data} </li>`)
        $('#range2').append(`<li> ${num4.data} </li>`)

  }
}
