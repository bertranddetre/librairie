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
if (books[0].nbSales > books[1].nbSales)
{
  console.log (books[0].title)
}
//le panier
if (cart[1])
{
  cart[1].qtt++;
}

//classement des meilleures ventes


for (let i=0; i < books.length; i++)
{
  for (let j=0; j < books.length - i - 1;j++)
  {
    if (books[j].nbSales > books[j+1].nbSales)
    {
      let tmp = books [j];
      books [j] = books[j+1];
      books[j+1] = tmp;
    }
  }
}

//sorties récentes des livres 

const lastestReleases = (books) =>{
  let bestSales = [...books];
  function sortBestSales (a,b)
  {
    return a.nbSales - b.nbSales;
  }
};


