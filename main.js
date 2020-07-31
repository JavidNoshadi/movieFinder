let body = document.querySelector('body')
function geeting(){
  const input = document.getElementById('input')
  const btn = document.querySelector('button')
  btn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(input.value)
    result = input.value
    fetchingshits()
  })
}
geeting();
  function fetchingshits(){
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${result}&appid=7038ca96d945aa7c9f80f532ded3e38b`)
.then(response => response.json())
.then((data) =>{
  res = data
   let output = document.createElement('div')
  output.setAttribute('class','board')
  output.innerHTML = `
  <h3 class='cityname'>${res.city.name}</h3>
    <h3 class='sunrise'>${res.city.sunrise}</h3>
  <h3 class='sunset'>${res.city.sunset}</h3>
    <h3 class='sunset'>${res.list[0].dt}</h3> 
  `
  body.appendChild(output)
  console.log(res);
})
.catch((error)=> console.log(error))
  }