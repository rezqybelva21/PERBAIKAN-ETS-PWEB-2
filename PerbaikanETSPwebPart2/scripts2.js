$(document).ready(function () {
    var mockupData = {
        "name": "Bulbasaur",
        "url" : "https://pokeapi.co/api/v2/pokemon/1/",
    };
    var firstCardHtml = `
    <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${mockupData.name}</h5>
        <a href="${mockupData.url}" class="btn btn-primary">Detail</a>
      </div>
    </div>
  </div>
</div>`;
    $('#pokeList').append(firstCardHtml);
    
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon', 
        method: 'GET',
        success: function (results) {
            if (results.next) {
                results.results.posts.forEach(function (post) {
                   var postNext = `
                    <div class="col-sm-6"></div>
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">${post.name}</h5>
                        <div class="btn btn-primary">Detail</div>
                      </div>
                    </div>
                  </div>
                </div>`;
                    $('#pokeList').append(postNext);
                });
            } else {
                console.error('Error fetching data from the API');
            }
        },
        error: function (error) {
            console.error('Error fetching data from API', error);
        }
    });
});

