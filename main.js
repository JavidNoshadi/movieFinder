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
  geeting()
  function fetchingshits(){
let url = `http://www.omdbapi.com/?t=${result}&r=10&apikey=2bfb6f8f`
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    
  })
  }