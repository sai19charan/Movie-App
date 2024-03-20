const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const moviebox=document.querySelector("#movie-box");
async function getmovies(url){
    const response=await fetch(url);
    const datai=await response.json();
    
    showmovies(datai.results);
}
getmovies(APIURL);
function abc(e){
    const theory=e.parentElement;
    const target=theory.children[1];
    target.classList.toggle("active");
    theory.children[0].classList.toggle("opaque");
}
function showmovies(data){
    moviebox.innerHTML="";
    data.forEach(
        (item)=>{
            const row=document.createElement("div");
            row.classList.add("row");
            row.innerHTML=`<img src="${IMGPATH+item.poster_path}" class="moviepic" onclick="abc(this)" alt="Logo">
            <div class="theory">
                <h2 class="movietitle">${item.original_title}</h2>
                <h3>Rating :${item.vote_average}</h3>
                <p class="text">
                    ${item.overview}
                </p>
            </div>`;
            moviebox.appendChild(row);
        }
    )
}

document.querySelector("#search").addEventListener(
    "keyup",
    function(event){
        if(event.target.value!=""){
            getmovies(SEARCHAPI+event.target.value)
        }else{
            getmovies(APIURL);
        }
    }
)