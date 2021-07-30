/*  ----    Prices & Discounts  ----  */
const availableDiscounts = [15, 20, 30, 40];

const prices = [2500, 3850, 5620];

/*  ----  Tickets Const  ----  */
const ticket = [
  'GEN00105',
  'MOM00358',
  'DAD00225',
  'STD00525'
];

/*  ----  Add Article Function  ----  */
const botoncitoAñadir = document.getElementById('addItem');
botoncitoAñadir.addEventListener('click', summArticles);

/*  ----  Article selection inputs  ----  */
const articulito = 
[
    document.getElementById('tDis01'), 
    document.getElementById('tDis02'), 
    document.getElementById('tDis03')
];

/*  ----  Discounts selection inputs  ----  */
const myDiscount = 
[
    document.getElementById('t01'), 
    document.getElementById('t02'), 
    document.getElementById('t03'),
    document.getElementById('t04')
];

/*  ----  Article art  ----  */
let art01;

/*  ----  True selection ----  */
let itemSelected = true;




/*  ---- Add Item to calculate Function  ----  */
function summArticles()
{
  let showRealPrice = document.getElementById('pInteractivo_01');
  let grandTotal = 0;  
  for(i = 0; i < 3; i++)
  {
    let articleName = ['Terevikun', 'Kulanina', 'Megakulanina'];
    console.log(articleName[i]);
    if(articulito[i].checked == itemSelected)
    {
      thisPrice = prices[i];
      console.log(`Precio del articulo ${thisPrice}`);
      grandTotal = grandTotal + thisPrice; 
    }
    else {
      console.log('No se ha añadido al carrito');
    }
  }
  console.log(`Este es el precio total = ${grandTotal}`);
  showRealPrice.innerHTML = grandTotal;
}

/*  ---- Add Discount Function  ----  */

const botoncitoClacular = document.getElementById('calculate');
botoncitoClacular.addEventListener('click', discounting);

let validation = 
[
  document.getElementById('keyC01'),
  document.getElementById('keyC02'),
  document.getElementById('keyC03'),
  document.getElementById('keyC04'),
];

function discounting()
{
  let basePrice = document.getElementById('pInteractivo_01');
  console.log('Mi botoncito funciona :D');
  console.log(basePrice.textContent);
  let priceTo = parseFloat(basePrice.textContent);
  console.log(priceTo);
  let maxDiscount = 0;
/*  ---- Loop for get discounts  ----  */
  for(i = 0; i < availableDiscounts.length; i++)
  {
    if(myDiscount[i].checked == itemSelected)
     {
        console.log('Mi input de descuento fucniona :3');
        discount = availableDiscounts[i];
 
/*  ----  Validation Discount Function  ----  */      
        if(ticket[i] == validation[i].value)
        {
        console.log(`Este es el descuento actual ${discount}`);    
        console.log('Descuento ingresado correctamente');
        maxDiscount = maxDiscount + availableDiscounts[i];
        console.log(`Este es el descuento acumulado ${maxDiscount}`);
        let finalPrice = priceTo * (100 - maxDiscount) / 100;
        let showDiscount = document.getElementById('pInteractivo_02');
        showDiscount.innerHTML = finalPrice;
        }
        else 
        {
          alert('Tu código es incorrecto amigo >:v');
          return;
        }   
    }
    else 
    {
      alert('No has seleccionado ningún descuento');
      return;
    }    
  }
}