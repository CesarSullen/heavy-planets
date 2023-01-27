//Obtener los botones
//Venus
var botonVenus = document.getElementById("boton_venus");
botonVenus.addEventListener('click', AccionXclickVen);

//Mercurio
var botonMercurio = document.getElementById("boton_mercurio");
botonMercurio.addEventListener('click', AccionXclickMer);

//Marte
var botonMarte = document.getElementById("boton_marte");
botonMarte.addEventListener('click', AccionXclickMar);

//Júpiter
var botonJupiter = document.getElementById("boton_jupiter");
botonJupiter.addEventListener('click', AccionXclickJup);

//Saturno
var botonSaturno = document.getElementById("boton_saturno");
botonSaturno.addEventListener('click', AccionXclickSat);

//Urano
var botonUrano = document.getElementById("boton_urano");
botonUrano.addEventListener('click', AccionXclickUra);

//Neptuno
var botonNeptuno = document.getElementById("boton_neptuno");
botonNeptuno.addEventListener('click', AccionXclickNep);

//Plutón
var botonPluton = document.getElementById("boton_pluton");
botonPluton.addEventListener('click', AccionXclickPlu);

//Funciones para el cálculo
//Mercurio
function AccionXclickMer()
{
  var peso_dado = parseFloat(document.getElementById('peso_escrito').value);
  var calculo = peso_dado * g_mercurio / g_tierra;


  /* Hasta que funcione
  if (peso_dado.value != Number) {
    alert('Debes escribir un número en la caja de texto')}
    else {
      alert('Tu peso en Marte es ' + calculo.toFixed(2) + ' Kg');
    } */
  alert('Tu peso en Mercurio es ' + calculo.toFixed(2) + ' Kg')
}

//Venus
function AccionXclickVen()
{
  var peso_dado = parseFloat(document.getElementById('peso_escrito').value);
  var calculo = peso_dado * g_venus / g_tierra;


  /* Hasta que funcione
  if (peso_dado.value != Number) {
    alert('Debes escribir un número en la caja de texto')}
    else {
      alert('Tu peso en Marte es ' + calculo.toFixed(2) + ' Kg');
    } */
  alert('Tu peso en Venus es ' + calculo.toFixed(2) + ' Kg')
}

//Marte
function AccionXclickMar()
{
  var peso_dado = parseFloat(document.getElementById('peso_escrito').value);
  var calculo = peso_dado * g_marte / g_tierra;
  
  
  /* Hasta que funcione
  if (peso_dado.value != Number) {
    alert('Debes escribir un número en la caja de texto')}
    else {
      alert('Tu peso en Marte es ' + calculo.toFixed(2) + ' Kg');
    } */
  alert('Tu peso en Marte es ' + calculo.toFixed(2) + ' Kg')
}

//Júpiter
function AccionXclickJup()
{
  var peso_dado = parseFloat(document.getElementById('peso_escrito').value);
  var calculo = peso_dado * g_jupiter / g_tierra;


  /* Hasta que funcione
  if (peso_dado.value != Number) {
    alert('Debes escribir un número en la caja de texto')}
    else {
      alert('Tu peso en Marte es ' + calculo.toFixed(2) + ' Kg');
    } */
  alert('Tu peso en Júpiter es ' + calculo.toFixed(2) + ' Kg')
}

//Saturno
function AccionXclickSat()
{
  var peso_dado = parseFloat(document.getElementById('peso_escrito').value);
  var calculo = peso_dado * g_saturno / g_tierra;


  /* Hasta que funcione
  if (peso_dado.value != Number) {
    alert('Debes escribir un número en la caja de texto')}
    else {
      alert('Tu peso en Marte es ' + calculo.toFixed(2) + ' Kg');
    } */
  alert('Tu peso en Saturno es ' + calculo.toFixed(2) + ' Kg')
}

//Urano
function AccionXclickUra()
{
  var peso_dado = parseFloat(document.getElementById('peso_escrito').value);
  var calculo = peso_dado * g_urano / g_tierra;


  /* Hasta que funcione
  if (peso_dado.value != Number) {
    alert('Debes escribir un número en la caja de texto')}
    else {
      alert('Tu peso en Marte es ' + calculo.toFixed(2) + ' Kg');
    } */
  alert('Tu peso en Urano es ' + calculo.toFixed(2) + ' Kg')
}

//Neptuno
function AccionXclickNep()
{
  var peso_dado = parseFloat(document.getElementById('peso_escrito').value);
  var calculo = peso_dado * g_neptuno / g_tierra;


  /* Hasta que funcione
  if (peso_dado.value != Number) {
    alert('Debes escribir un número en la caja de texto')}
    else {
      alert('Tu peso en Marte es ' + calculo.toFixed(2) + ' Kg');
    } */
  alert('Tu peso en Neptuno es ' + calculo.toFixed(2) + ' Kg')
}

//Plutón
function AccionXclickPlu()
{
  var peso_dado = parseFloat(document.getElementById('peso_escrito').value);
  var calculo = peso_dado * g_pluton / g_tierra;


  /* Hasta que funcione
  if (peso_dado.value != Number) {
    alert('Debes escribir un número en la caja de texto')}
    else {
      alert('Tu peso en Marte es ' + calculo.toFixed(2) + ' Kg');
    } */
  alert('Tu peso en Plutón es ' + calculo.toFixed(2) + ' Kg')
}

//Gravedad en los planetas
var g_mercurio = 3.7;
var g_venus = 8.87;
var g_tierra = 9.807;
var g_marte = 3.721;
var g_jupiter = 24.79;
var g_saturno = 10.44;
var g_urano = 8.87;
var g_neptuno = 11.15;
var g_pluton = 0.62; //no es un planeta