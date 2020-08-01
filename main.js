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
    let accessKey = 'q_nWxmJ4pdcyP-fjCFz9r6Ns0Y-fEe-dAgzKWzBZkJ4'
    let url = 'https://api.unsplash.com/search/photos?per_page=20&query=office&client_id=q_nWxmJ4pdcyP-fjCFz9r6Ns0Y-fEe-dAgzKWzBZkJ4'
    let secretKey = 'Pm-PFZqEP3EmoYAb-rKajEbLPUkAxieZfsUpxoaG7ww'
    fetch(url)
    .then(response => response.json())
    .then((data) =>{
     res = data
     console.log(res);
    })
    .catch((error)=> console.log(error))
    }