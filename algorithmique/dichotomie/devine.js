var N=Math.floor(Math.random() * 129 );
var proposition=-1;
var i=0;
var g=0;
var d=127;

function recommencer(){
    proposition=document.getElementById("proposition").value;
    if (proposition ==='o'){
        N=Math.floor(Math.random() * 129);
        proposition=-1;
        i=0;
        g=0;
        d=127;
        document.getElementById('h3').textContent = "J'ai choisi un nombre entier entre 0 et 128. Deviner ce nombre.";
        document.getElementById("proposition").value="";
        document.getElementById('button').setAttribute('onclick','calcul()');
    }
    else{
        document.getElementById("form").remove();
        document.getElementById("h4").remove();
        document.getElementById('h3').textContent = "Au revoir.";


    }
}

function calcul(){
    proposition=Number(document.getElementById("proposition").value);
    if (proposition===N){
        document.getElementById('h3').textContent = "Gagné en "+ i.toString() +" coups. Une autre partie ? (o/n)";
        document.getElementById('h4').textContent = "";
        document.getElementById('h4-2').textContent = "";
        document.getElementById('h4-3').textContent = "";
        document.getElementById("proposition").value="";
        document.getElementById('button').setAttribute('onclick','recommencer()')
    }
    else{
        if (proposition>N){
        document.getElementById('h4').textContent = "Plus petit !";
        document.getElementById('h4-3').textContent = "La réponse est au maximum " + (proposition-1).toString();
        document.getElementById("proposition").value="";
        }
        else{
        document.getElementById('h4').textContent = "Plus grand !";
        document.getElementById('h4-2').textContent = "La réponse est au minimum " + (proposition+1).toString();
        document.getElementById("proposition").value="";
        }
        i=i+1;
    }
}

