
//exo1
let change = document.querySelector("p")

// function changer_style (){
//     change.style.background = "black"
//     change.style.color = "white"
//     change.style.borderStyle = "dashed"
//     change.style.borderColor = "red"
//     change.style.borderWidth = "1px"
//     change.style.padding = "5px"

// }
// changer_style()
// ======================================================================
// fin exo 1
// change.addEventListener("click", change_style);

function change_style() {
    const bouton = document.querySelector("p")

    if(bouton.classList.contains("active")){
    bouton.classList.remove("active");
}
else {
    change.classList.add("active")

}
    }

// ========================================================================

// exo 2

// function Factoriel(n) {
//     return n > 1?n * Factoriel(n-1):1;
//  }
     
//  document.write("Liste des factoriels de 7 :<BR>");
//  for(var I=0;I<=7;I++) {
//      document.write(I+"! est "+Factoriel(I)+"<BR>");
//  }

//  function fact(nbr){
//     var i, nbr, f = 1;
  
//     for(i = 1; i <= nbr; i++)  
//     {
//       f = f * i;   // ou f *= i;
//     }  
//     return f;

//   }
  
//   console.log(fact(7));


// let n = 7
// function fact (){


// let i = 1
// let r=0
// let p=1
// while (i<=n){
//     p*=i
//     r+=p
//     i++
//     console.log(r);
// }
// }fact(n)


  //=======================================================exo3
//   let a;
//   // do{
//   //   a=prompt("Saisissez un nombre entier");
//   // }while(isNaN(a) || a%1!==0);
  
//   document.write("<h4>La table de multiplication du nombre: "+a+"</h4>")
//   document.write("<table border >");
  
//   for(let j=0;j<=10;j++){
    
//  for(let i=1;i<=10;i++){
//     document.write("<tr>"); //tableau
//     document.write("<td>"+j+" x "+i+" =</td>"); //multiplication
//     document.write("<td>"+j*i+"</td>"); //resultat
//     document.write("</tr>");//ferme le tableau
//  }}
//  document.write("</table>");
//Source : www.exelib.net


// let n;

// do {
//   n=prompt("entrez un entier");

// }
// while(isNaN(n) || n%1!==0);
// document.write("voici la table de multiplication de   " + n +" "+ "<br>")

// for(let i=1;i<=1000;i++){
//   document.write(n + " x " + i + " = ")
// document.write((n*i)+ "<br>")
// }


//===============================================exo 4

// afficher une alerte a l'appui d'une touche :

// window.addEventListener("keypress", x)

// function x(e) {
//   console.log(e);
//   if(e.keyCode==100){
//     alert("touche d")
//   }
//   console.log(e);
// }


// set interval

let flag=0;
function alterner(){
  if(flag==0){
    document.getElementById('rag').src="img/shelby.jpg";
    flag=1;
  }
  else{
    document.getElementById('rag').src="img/ragnar.jpg";
    flag=0;
  }
}

// diapo

// let photos= ["vane.jpg","shelby.jpg","ragnar.jpg"]
// let indice= 0
// function suivant(){
//   indice++
//   if(indice==photos.length){
//     indice=0
//   }
//   document.getElementById('rag').src="img/" + photos[indice]
// }
// function precedent(){
//   indice--
//   if(indice<0){
//     indice= photos.length-1
//   }
//   document.getElementById('rag').src="img/" + photos[indice]
// }


// deplacement img

let nbimages=3
let position=1
function descendre(){
  let vane1="img"+position
  position++
  if(position>nbimages){
    position=1
  }
  let suiv="img"+ position
  document.getElementById(vane1).src=document.getElementById(suiv).src
  document.getElementById(suiv).src="img/vane.jpg"
}

function monter(){
  let vane1 = "img"+position
  position--
  if(position<1) {
    position=nbimages
  }
  let preced = "img"+ position
  document.getElementById(vane1).src=document.getElementById(preced).src
  document.getElementById(preced).src= "img/vane.jpg"
}
