let body = document.querySelector('body')
let output = document.querySelector('.output')
let nums = 10
let accessKey = 'q_nWxmJ4pdcyP-fjCFz9r6Ns0Y-fEe-dAgzKWzBZkJ4'
let url = `https://api.unsplash.com/search/photos?per_page=10&query=Nature&client_id=${accessKey}`
function defaultFetch(){
    fetch(url)
    .then(defResponse => defResponse.json())
    .then(defData => defData.results.forEach((result)=>{
      let placeholder = document.createElement('div')
      placeholder.setAttribute('class','card')
    placeholder.innerHTML = `
    <img class='res-img' loading='lazy' src='${result.urls.thumb}.jpg'>
    <div class='likes'>${result.likes}❤️</div>
    <div class='dl-btn'>Download</div>
    <div class='from'><img class='profilepic' src='${result.user.profile_image.medium}.jpg' ><a href='${result.user.links.html}'>${result.user.name}</a></div>
    <div class='tags'>
    <span class='tag'>#${result.tags[0].title}</span>
    <span class='tag'>#${result.tags[1].title}</span>
    <span class='tag'>#${result.tags[2].title}</span>
    </div>
    `
      console.log(result)
      output.appendChild(placeholder)
    }) )
    
}
defaultFetch()
function geeting(){
  const input = document.getElementById('input')
  const numbersOf = document.querySelector('select')
  const btn = document.querySelector('button')
  numbersOf.addEventListener('change', (e) => {
  return  nums = numbersOf.value
  })
  btn.addEventListener('click',(e)=>{
  e.preventDefault();
  console.log(input.value)
  result = input.value
  fetchingshits()
  })
  }
geeting();
  function fetchingshits(){
    let secretKey = 'Pm-PFZqEP3EmoYAb-rKajEbLPUkAxieZfsUpxoaG7ww'
    fetch(url)
    .then(response => response.json())
    .then((data) =>{
     res = data
     console.log(res)
    })
    .catch((error)=> console.log(error))
    }  
    console.log(nums)