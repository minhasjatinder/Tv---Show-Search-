const form=document.querySelector('#searchForm');

form.addEventListener('submit',async function(e){

    e.preventDefault()
    const searchTerm =form.elements.query.value;
    const config={params:{q:searchTerm}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config)
    makeimage(res.data);

});

const makeimage=(shows)=>{
  let results=document.querySelector('#results');
  results.innerHTML= '';
    for(let result of shows){
            const des=result.show.summary;
        const pic=result.show.image.medium;
        const link=result.show.url;
        
        results.innerHTML+=`<div class="card" style="width: 18rem; height = 20px; margin: 20px 30px">
        <img class="card-img-top" src="${pic}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">ABOUT SHOW</h5>
          <p class="card-text">${des}</p>
          <a href="${link}" class="btn btn-primary">Watch now </a>
        </div>
      </div>`;
    }
}