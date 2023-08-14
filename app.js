const btn = document.querySelector("#btn")
const places = document.querySelector("#places")
btn.addEventListener("click", function(){
    let xhr = new XMLHttpRequest();
    let subject = document.querySelector("#query").value;
    console.log(subject);
    xhr.open("GET",`https://g.tenor.com/v1/search?q=${subject}&key=LIVDSRZULELA`,true)
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            
            var newData = JSON.parse(this.responseText)

            var output ="";
            for(let i =0; i<20;i++){
                output += `<div class="char">
                <img class="imgs" src = ${newData.results[i].media[0].gif.url} width=25% height=auto>  
                </div>`    
            }

            places.innerHTML = output;
            
        }
    }
    xhr.send()
})