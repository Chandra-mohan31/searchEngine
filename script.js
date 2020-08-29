$("#form").submit(function(e){
  e.preventDefault();

  var query = $("#search").val();
  let result = '';
  var API_KEY = "d259da8dd0fbd188d18c2688a790350b";
  var url = "http://api.serpstack.com/search?access_key="+API_KEY+"&type=web&query="+query;
  console.log(url);

  $.get(url,function(data){
    $("#results").html('')
    console.log(data);
    data.organic_results.forEach(res =>{
      result = `
      <h1>${res.title}</h1>
      <a href="${res.url}" target="_blank">${res.url}</a>
      <p>${res.snippet}</p>
      `
      $("#results").append(result);
    });

  })


})






















//const search = document.querySelector("#search");
/*const searchInput = document.querySelector("#searchInput");
const form = document.querySelector("#form");

function searchResults(){
 
  console.log("enyer");

  var query = searchInput.val();
  var API_KEY ="d259da8dd0fbd188d18c2688a790350b";
  var url = `http://api.serpstack.com/search
  ? access_key = ${API_KEY}
  & engine = google
  & type = web
  & query = ${query}`
  fetch(url)
    .then(response => response.json())
    .then(result => {
      console.log(result);
    })

document.getElementById("search").addEventListener('click',searchResults());*/


