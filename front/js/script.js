
function AffichageListeTousLesProduits(tab){
    console.log(tab);
    for(let i = 0; i < tab.length ; i++){
        document
        .getElementById("items")
        .innerHTML += "<a href='./product.html?id="+tab[i]._id+"'>"+
        "<article>"+
          "<img src="+tab[i].imageUrl+" alt="+tab[i].altTxt+">"+
          "<h3 class='productName'>"+tab[i].name+"</h3>"+
          "<p class='productDescription'>"+tab[i].description+"</p>"+
        "</article>"+
        "</a>";
    }
}



function ListeTousLesProduits() {
    fetch("http://localhost:3000/api/products/")
    .then(function(res) {
        if (res.ok) {
            console.log('ok fonction GET');
          return res.json();
        }
    })
    .then(function(value) {
        AffichageListeTousLesProduits(value);
        return value;
    })
    .catch(function(err) {
        return err;
    });
}

ListeTousLesProduits();
