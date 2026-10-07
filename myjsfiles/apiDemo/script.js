const img = document.querySelector("img");
const btn = document.querySelector("button");

const ipt = document.querySelector("input");

btn.addEventListener("click",()=> {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=ApnVWwK7NCN3wU4kJyefZl8jQK1b0Fem&q=' + ipt.value + '&rating=g')
    .then(function(response){
        return response.json();

    })
    .then(function(response){
        img.src = response.data[0].images.original.url;
    })

    .catch(function(err) {
        console.log(err);
    });;
    
})


