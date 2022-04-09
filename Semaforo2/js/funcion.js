var via_o
var via_s
var via_e
var via_n
function fnCapturar()
  {
    let vo= parseInt(document.getElementById("vo").value);
    let vs= parseInt(document.getElementById("vs").value);
    let ve= parseInt(document.getElementById("ve").value);
    let vn= parseInt(document.getElementById("vn").value);
    
    via_o=vo;
    via_s=vs;
    via_e=ve;
    via_n=vn;
    
}
function fnComparar()
{
    fnCapturar();
    document.getElementById("autos_o").innerHTML="La via oeste tiene  "+via_o+"  auto(s)";
    document.getElementById("autos_s").innerHTML="La via sur tiene  "+via_s+"  auto(s)";
    document.getElementById("autos_e").innerHTML="La via este tiene  "+via_e+"  auto(s)";
    document.getElementById("autos_n").innerHTML="La via norte tiene  "+via_n+"  auto(s)";
}

function iniciar()
{   var inicio
    if(via_o>via_s && via_o>via_e && via_o>via_n){
        inicio=fnPrenderSoloLuzVerdeOeste();
    }else if (via_s>via_o && via_s>via_e && via_s>via_n){
        inicio=fnPrenderSoloLuzVerdeSur();
    }else if (via_e>via_o && via_e>via_s && via_e>via_n){
        inicio=fnPrenderSoloLuzVerdeEste();
    }else if (via_n>via_e && via_n>via_s && via_n>via_o){
        inicio=fnPrenderSoloLuzVerdeNorte();
    }
}

var $timer=0;
var $sec=1000*3; 



function fnPrenderSoloLuzVerdeOeste()
{   
    idLuzRoja.style.fill="#E81E1E"; 
    idLuzAmarilla.style.fill="#ABB133"; 
    idLuzVerde.style.fill="#3A652E"; 

    idLuzRoja2.style.fill="#E81E1E";
    idLuzAmarilla2.style.fill="#ABB133";
    idLuzVerde2.style.fill="#3A652E";

    idLuzRoja3.style.fill="#E81E1E";
    idLuzAmarilla3.style.fill="#ABB133";
    idLuzVerde3.style.fill="#3A652E";
   
    idLuzRoja4.style.fill="#891B1B";
    idLuzAmarilla4.style.fill="#ABB133";
    idLuzVerde4.style.fill="#34F30E";

    
    $timer= setTimeout(fnPrenderSoloLuzAmarilla,$sec)
}

function fnPrenderSoloLuzAmarilla()
          {
          idLuzRoja.style.fill="#891B1B";
          idLuzAmarilla.style.fill="#DFEC20";
          idLuzVerde.style.fill="#3A652E";

          idLuzRoja2.style.fill="#E81E1E";
          idLuzAmarilla2.style.fill="#ABB133";
          idLuzVerde2.style.fill="#3A652E";

          idLuzRoja3.style.fill="#E81E1E";
          idLuzAmarilla3.style.fill="#ABB133";
          idLuzVerde3.style.fill="#3A652E";

          idLuzRoja4.style.fill="#891B1B";
          idLuzAmarilla4.style.fill="#DFEC20";
          idLuzVerde4.style.fill="#3A652E";
        
          $timer=setTimeout(fnPrenderSoloLuzVerdeSur,2000)
          }

function fnPrenderSoloLuzVerdeSur()
{   
    idLuzRoja.style.fill="#891B1B"; 
    idLuzAmarilla.style.fill="#ABB133"; 
    idLuzVerde.style.fill="#34F30E"; 
    
    idLuzRoja2.style.fill="#E81E1E"; 
    idLuzAmarilla2.style.fill="#ABB133"; 
    idLuzVerde2.style.fill="#3A652E";

    idLuzRoja3.style.fill="#E81E1E"; 
    idLuzAmarilla3.style.fill="#ABB133"; 
    idLuzVerde3.style.fill="#3A652E"; 

    idLuzRoja4.style.fill="#E81E1E"; 
    idLuzAmarilla4.style.fill="#ABB133"; 
    idLuzVerde4.style.fill="#3A652E"; 
    
    $timer=setTimeout(fnPrenderSoloLuzAmarilla_r,$sec)
}
function fnPrenderSoloLuzAmarilla_r()
{   
    idLuzRoja.style.fill="#891B1B";
    idLuzAmarilla.style.fill="#DFEC20";
    idLuzVerde.style.fill="#3A652E";
    
    idLuzRoja2.style.fill="#891B1B";
    idLuzAmarilla2.style.fill="#DFEC20";
    idLuzVerde2.style.fill="#3A652E";

    idLuzRoja3.style.fill="#E81E1E";
    idLuzAmarilla3.style.fill="#ABB133";
    idLuzVerde3.style.fill="#3A652E";

    idLuzRoja4.style.fill="#E81E1E";
    idLuzAmarilla4.style.fill="#ABB133";
    idLuzVerde4.style.fill="#3A652E";

    $timer=setTimeout(fnPrenderSoloLuzVerdeEste,2000)
    
}

function fnPrenderSoloLuzVerdeEste()
          {
            idLuzRoja.style.fill="#E81E1E"; 
            idLuzAmarilla.style.fill="#ABB133"; 
            idLuzVerde.style.fill="#3A652E"; 
            
            idLuzRoja2.style.fill="#891B1B"; 
            idLuzAmarilla2.style.fill="#ABB133"; 
            idLuzVerde2.style.fill="#34F30E";
        
            idLuzRoja3.style.fill="#E81E1E"; 
            idLuzAmarilla3.style.fill="#ABB133"; 
            idLuzVerde3.style.fill="#3A652E"; 
        
            idLuzRoja4.style.fill="#E81E1E"; 
            idLuzAmarilla4.style.fill="#ABB133"; 
            idLuzVerde4.style.fill="#3A652E";


           
           $timer=setTimeout(fnPrenderSoloLuzAmarilla2,$sec)
          };

function fnPrenderSoloLuzAmarilla2()
          {
          idLuzRoja.style.fill="#E81E1E"; 
          idLuzAmarilla.style.fill="#ABB133"; 
          idLuzVerde.style.fill="#3A652E"; 

          idLuzRoja2.style.fill="#891B1B";
          idLuzAmarilla2.style.fill="#DFEC20";
          idLuzVerde2.style.fill="#3A652E";

          idLuzRoja3.style.fill="#891B1B";
          idLuzAmarilla3.style.fill="#DFEC20";
          idLuzVerde3.style.fill="#3A652E";

          idLuzRoja4.style.fill="#E81E1E";
          idLuzAmarilla4.style.fill="#ABB133";
          idLuzVerde4.style.fill="#3A652E";

          $timer=setTimeout(fnPrenderSoloLuzVerdeNorte,2000)
          };
function fnPrenderSoloLuzVerdeNorte()
          {
            idLuzRoja.style.fill="#E81E1E"; 
            idLuzAmarilla.style.fill="#ABB133"; 
            idLuzVerde.style.fill="#3A652E"; 
  
            idLuzRoja2.style.fill="#E81E1E";
            idLuzAmarilla2.style.fill="#ABB133";
            idLuzVerde2.style.fill="#3A652E";
  
            idLuzRoja3.style.fill="#891B1B";
            idLuzAmarilla3.style.fill="#ABB133";
            idLuzVerde3.style.fill="#34F30E";
            
            idLuzRoja4.style.fill="#E81E1E";
            idLuzAmarilla4.style.fill="#ABB133";
            idLuzVerde4.style.fill="#3A652E";
            $timer=setTimeout(fnPrenderSoloLuzAmarilla3,$sec)
          }

function fnPrenderSoloLuzAmarilla3()
          {
          idLuzRoja.style.fill="#E81E1E"; 
          idLuzAmarilla.style.fill="#ABB133"; 
          idLuzVerde.style.fill="#3A652E"; 

          idLuzRoja2.style.fill="#E81E1E";
          idLuzAmarilla2.style.fill="#ABB133";
          idLuzVerde2.style.fill="#3A652E";

          idLuzRoja3.style.fill="#891B1B";
          idLuzAmarilla3.style.fill="#DFEC20";
          idLuzVerde3.style.fill="#3A652E";
          
          idLuzRoja4.style.fill="#891B1B";
          idLuzAmarilla4.style.fill="#DFEC20";
          idLuzVerde4.style.fill="#3A652E";
          $timer=setTimeout(fnPrenderSoloLuzVerdeOeste,2000)
          };





function fnDetener(){
    clearTimeout($timer);
    fnApagarLuces();
}

function fnApagarLuces(){
    idLuzRoja.style.fill="#891B1B";
    idLuzAmarilla.style.fill="#ABB133";
    idLuzVerde.style.fill="#3A652E";

    idLuzRoja2.style.fill="#891B1B";
    idLuzAmarilla2.style.fill="#ABB133";
    idLuzVerde2.style.fill="#3A652E";

    idLuzRoja3.style.fill="#891B1B";
    idLuzAmarilla3.style.fill="#ABB133";
    idLuzVerde3.style.fill="#3A652E";

    idLuzRoja4.style.fill="#891B1B";
    idLuzAmarilla4.style.fill="#ABB133";
    idLuzVerde4.style.fill="#3A652E";
}