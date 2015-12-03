'use strict';

window.addEventListener("load", sync);

function sync() {
  document.getElementById("ubike-list").innerHTML = '';
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", () => updateUBikeList(JSON.parse(xhr.responseText)));
  xhr.open("GET", "http://data-taipei.herokuapp.com/youbike");
  xhr.send();  
}

function updateUBikeList(response) {
  var stations = response.retVal;
  
  var list = document.getElementById("ubike-list");
  for (var sid in stations) {    
    // create DOM nodes
    var listItem = document.createElement("a");
    var listItemDiv = document.createElement("div");
    var listItemSiteName = document.createElement("h3");    
    var listItemBikes = document.createElement("p");
    listItemDiv.appendChild(listItemSiteName);
    listItemDiv.appendChild(listItemBikes);
    listItem.appendChild(listItemDiv);
    list.appendChild(listItem);
    
    // fill values
    listItemSiteName.innerHTML = stations[sid].sna;
    listItemBikes.innerHTML = 'Bikes: ' + stations[sid].sbi + ' / ' + stations[sid].tot;
  }
}