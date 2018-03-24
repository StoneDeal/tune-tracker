var model = {
    popularArtists: []
}

var api = {
    root: "http://ws.audioscrobbler.com/2.0/",
    token: "eeac2a521ed64a26c3d6d1217bdc4aa2"
}

function popularArtists(callback) {
    
      $.ajax({
        url: api.root,
        data: {
          limit: 20,
          method: "chart.getTopArtists",
          api_key: api.token,
          format: "json"
          

        },
        success: function(response) {
          model.popularArtists = response
          callback(response);
          console.log(model.popularArtists.artists.artist);
        }
      });
    }

//popularArtists()

function render() {

      $("#popular-artists").empty();

      //var artists = JSON.parse(model.popularArtists.artists.artist);
      /*
      for (var artist in model.popularArtists.artists.artist) {
        var title = "<li>" + model.popularArtists.artists.artist + "</li>"
        $('#popular-artists').append(title)
      }
      */
      //var x = 0;

      model.popularArtists.artists.artist.forEach(function(artist) {
        //x++;
        //var xString = x.toString();

        //var artistSpan = "<span id='artist" + xString + "></span>";

        var title = "<h6>" + artist["name"] + "</h6>";
        //var image = "<img src='" + artist.image[0].text + "' />"
        var image = "<img id='band-img' src='https://lastfm-img2.akamaized.net/i/u/174s/81d5e41b894042efb6798ea312878612.png'>";
      
        var artistSpan = $('<span></span>')
        .attr("class", "tag")
        .append(image)
        .append(title);
        $('#popular-artists').append(artistSpan);

        //var artistId = "artist" + xString;
        //$('#popular-artists').append(image);
        //$('#popular-artists').append(title);
        //$('#band-img').attr("src", "https://lastfm-img2.akamaized.net/i/u/174s/81d5e41b894042efb6798ea312878612.png")
      });
    }
    
    
    $(document).ready(function() {
      popularArtists(render);
    });
