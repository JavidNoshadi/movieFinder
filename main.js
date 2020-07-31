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
.then(res => res.json())
.then(data => console.log(data))
  }