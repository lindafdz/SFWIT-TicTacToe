let turno = false;
let victoria = false;
let contador = 0;


const handleClick = (event) => {
     const { id } = event.target;

     const div = document.getElementById(id);
        
     if(div.innerText === '' && victoria === false){
        div.innerText = turno ? "O" : "X";
        turno = !turno;

    }
    verificarVictoria(); 
}


 const verificarVictoria = () => {
     contador ++;
     const div1 = document.getElementById("B1");
     const div2 = document.getElementById("B2");
     const div3 = document.getElementById("B3");
     const div4 = document.getElementById("B4");
     const div5 = document.getElementById("B5");
     const div6 = document.getElementById("B6");
     const div7 = document.getElementById("B7");
     const div8 = document.getElementById("B8");
     const div9 = document.getElementById("B9");

     console.log("comparacion", div1.innerText === div2.innerText);

     const forma1 = div1.innerText === div2.innerText && div1.innerText === div3.innerText && div1.innerText !== "";
     const forma2 = div4.innerText === div5.innerText && div4.innerText === div6.innerText && div4.innerText !== "";
     const forma3 = div7.innerText === div8.innerText && div7.innerText === div9.innerText && div7.innerText !== "";
     const forma4 = div1.innerText === div4.innerText && div1.innerText === div7.innerText && div1.innerText !== "";
     const forma5 = div2.innerText === div5.innerText && div2.innerText === div8.innerText && div2.innerText !== "";
     const forma6 = div3.innerText === div6.innerText && div3.innerText === div9.innerText && div3.innerText !== "";
     const forma7 = div1.innerText === div5.innerText && div1.innerText === div9.innerText && div1.innerText !== "";
     const forma8 = div3.innerText === div5.innerText && div3.innerText === div7.innerText && div3.innerText !== "";

     const ganaste = (forma1 || forma2 || forma3 || forma4 || forma5 || forma6 || forma7 || forma8 );
     console.log("La variable ganaste es", ganaste);


     if (ganaste) {
        
        victoria= true;
        alert(`Los ganadores son las ${turno ? "X" : "O"}`);
    } else{
        if(contador === 9){
            alert("Empate")
        }
    }
 }

 const reset = () => {

     const div1 = document.getElementById(B1);
     const div2 = document.getElementById(B2);
     const div3 = document.getElementById(B3);
     const div4 = document.getElementById(B4);
     const div5 = document.getElementById(B5);
     const div6 = document.getElementById(B6);
     const div7 = document.getElementById(B7);
     const div8 = document.getElementById(B8);
     const div9 = document.getElementById(B9);
     div1.innerText = "";
     div2.innerText = "";
     div3.innerText = "";
     div4.innerText = "";
     div5.innerText = "";
     div6.innerText = "";
     div7.innerText = "";
     div8.innerText = "";
     div9.innerText = "";
    

     turno = false;
     victoria = false;
     contador = 0;
 }

