/*  ----    Formules  ----  */
const availableDiscounts = [15, 20, 30, 40];


/*  ----  Tickets Const  ----  */
const ticket_01 = 'GEN00105';
const ticket_02 = 'MOM00358';
const ticket_03 = 'DAD00225';
const ticket_04 = 'STD00525';

/*  ----  Get Elements  ----  */
const calButton = document.getElementById('calculate');
calButton.addEventListener('click', addDiscount);

function addDiscount()
{
    
}


/*  ----  Add Article Function  ----  */
const botoncitoAñadir = document.getElementById('addItem');
botoncitoAñadir.addEventListener('click', addItemDiscount);

let articulito = 
[
    document.getElementById('tDis01'), 
    document.getElementById('tDis02'), 
    document.getElementById('tDis02')
];

let art01;

let prices = [2500, 3850, 5620];

console.log('No mames' + articulito[0]);

function addItemDiscount()
{
  let realPrice = document.getElementById('pInteractivo_01');
    if(articulito[0].checked)
    { 
       realPrice.innerHTML = prices[0] + 'MNX';
    }
}


/*  ----  Dicount Function  ----  */

const botoncitoClacular = document.getElementById('calculate');
botoncitoClacular.addEventListener('click', discounting);

let basePrice = 0;

function discounting(discount)
{
   for(i = 0; i < 3; i++)
   {
       if(articulito[i].checked)
       {
           basePrice += prices[i];
       }
    console.log(basePrice);
   }

   let botoncito01 = document.getElementById('t01');
   console.log('Mi botoncito funciona :D');
   if(botoncito01.checked)
   {
       console.log('Mi input fucniona :3');
       const validation01 = document.getElementById('keyC01');
       if(ticket_01 == validation01.value)
       {
            console.log('Descuento ingresado correctamente');
            let finalPrice = (basePrice * (100 - discount) / 100);
            let showDiscount = document.getElementById('pInteractivo_02');
            showDiscount.innerHTML = '!Este es tu precio final!' + finalPrice;
       }
           else 
           {
           alert('Tu código es incorrecto perra >:v');
           }
   }
   else 
   {
       alert('No has seleccionado ningún descuento');
   }   
   

return  finalPrice 
}

