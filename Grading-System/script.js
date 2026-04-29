function show_result(){
    let c = document.querySelector("#c").value;
    let mt = document.querySelector("#mt").value;
    let ph = document.querySelector("#ph").value;
    let ja = document.querySelector("#ja").value;
    let csa = document.querySelector("#csa").value;
    
    let to = parseFloat(c) + parseFloat(mt) + parseFloat(ph) + parseFloat(ja) + parseFloat(csa);
    
    let per = (to * 100)/500;

    if(per >= 80 && per <= 100)
        {
            document.querySelector(".gra").innerHTML = "a+";
        }
        else if( per >= 75 && per <= 79)
        {
            document.querySelector(".gra").innerHTML = "a";
        }
        else if( per >= 70 && per <= 74)
        {
            document.querySelector(".gra").innerHTML = "a-";
        }
        else if( per >= 65 && per <= 69)
        {
            document.querySelector(".gra").innerHTML = "B+"; 
        }
        else if( per >= 60 && per <= 64)
        {
            document.querySelector(".gra").innerHTML = "b";
        }
        else if( per >= 55 && per <= 59)
        {
            document.querySelector(".gra").innerHTML = "b-";
        }
        else if( per >= 50 && perk <= 54)
        {
            document.querySelector(".gra").innerHTML = "c+";
        }
        else if( per >= 45 && per <= 49)
        {
            document.querySelector(".gra").innerHTML = "c";
        }
        else if( per >= 40 && per <= 44)
        {
            document.querySelector(".gra").innerHTML = "d";
        }
        else if(per >=0 && per <= 39)
        {
            document.querySelector(".gra").innerHTML = "fail";
        }
        else{
            document.querySelector(".gra").innerHTML = "Undifine mark";
        }

    document.querySelector(".to").innerHTML = to;
    document.querySelector(".per").innerHTML = per+"%";

    if(per >=0 && per <= 39){
        document.querySelector(".result h2").innerHTML = "You are fail";
    }

    else if(per >=40 && per <= 100){
        document.querySelector(".result h2").innerHTML = "You are pass";
    }

    else{
        document.querySelector(".result h2").innerHTML = "Undifine mark";
    }
}