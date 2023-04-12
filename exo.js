
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
//  do{
//     a=prompt("Saisissez un nombre entier");
//  }while(isNaN(a) || a%1!==0);
 
//  document.write("<h4>La table de multiplication du nombre: "+a+"</h4>")
//  document.write("<table border >");

//  for(let i=1;i<=10;i++){
//     document.write("<tr>"); //tableau
//     document.write("<td>"+a+" x "+i+" =</td>"); //multiplication
//     document.write("<td>"+a*i+"</td>"); //resultat
//     document.write("</tr>");//ferme le tableau
//  }
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

