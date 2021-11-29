
function AffichageProduitsImage(tab){ 
    const item_image = document
        .getElementsByClassName('item__img');

    const firstImage = item_image[0];
        firstImage.innerHTML = "<img src= ' " + tab.imageUrl + " ' alt= ' " + tab.altTxt + " ' >";
}

function AffichageProduitsname(tab){ 
    document
        .getElementById("title")
        .innerHTML = tab.name;
}

function AffichageProduitsPrice(tab){ 
    document
        .getElementById("price")
        .innerText = tab.price;
}

function AffichageProduitsDescription(tab){ 
    document
        .getElementById("description")
        .innerText = tab.description;
}

function AffichageProduitsColors(tab){ 



    for(let i = 0; i < tab.colors.length ; i++){
        document
        .getElementById("colors").innerHTML += "<option value= ' " + tab.colors[i] + " ' >" + tab.colors[i] + "</option>";
    }
    
}

function InfoProduits(productId) {
    fetch("http://localhost:3000/api/products/"+ productId)
    .then(function(res) {
        if (res.ok) {
          return res.json();
        }
    })
    .then(function(value) {
        AffichageProduitsImage(value);
        AffichageProduitsname(value);  
        AffichageProduitsPrice(value); 
        AffichageProduitsDescription(value);     
        AffichageProduitsColors(value)
    })
    .catch(function(err) {
        return err;
    });
}


var Url = document.location.href;
var url = new URL(Url);
var IdUrl = url.searchParams.get("id");

InfoProduits(IdUrl);



