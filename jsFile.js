/*  ----    Formules  ----  */

const basePrice = 1550;
const availableDiscounts = [15, 20, 30, 40];


/*  ----  Tickets Const  ----  */
const ticket_01 = 'GEN00105';
const ticket_02 = 'MOM00358';
const ticket_03 = 'DAD00225';
const ticket_04 = 'STD00525';

/*  ----  Get Elements  ----  */
const calButton = document.getElementById('calculate');
calButton.addEventListener('click', prueba);

function prueba()
{
    let botoncito01 = document.getElementById('t01');
    console.log('Mi botoncito funciona :D');
    if(botoncito01.checked)
    {
        console.log('Mi input fucniona :3');
        const validation01 = document.getElementById('keyC01');
        if(ticket_01 == validation01.value)
        {
            console.log('Descuento ingresado correctamente');
        }
            else 
            {
            console.log('Tu código es incorrecto perra >:v');
            }
    }

else 
{
    console.log('No has seleccionado ningún descuento');
}
}



/*  ----  Dicount Function  ----  */
function discounting (discount)
{
    var finalPrice = (basePrice * (100 - discount) / 100);
    return  finalPrice 
}

console.log(discounting(availableDiscounts[0]));