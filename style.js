//créer un livre
console.log(books);

//tableau object pour le panier
let card =
[
  {id:'0',qtt: 1},
  {id:'1',qtt: 2},
];

let totalPrice; // prix total du panier à stocker dans cette variable

//gestion des stocks
if (books [0].nbStock===0)
{
  console.log ("rupture de stock")
}
else 
{
  console.log ("il reste"+ books [0].nbStock+ "exemplaires de" + books[0].title)
}

//sorties récentes

//meilleures ventes

//le panier
if (cart[1])
{
  cart[1].qtt++;
}