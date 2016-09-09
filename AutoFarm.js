// ==UserScript==
// @name        test
// @namespace   test
// @include     *
// @version     1
// @grant       none
// ==/UserScript== 
 
/*----- Lista de botões do AS----------
BR77 - A=5112 B= 15784
---------------------------------------*/

 var id = [];
 var imgs = [];
 var i = 1;
 var modA = 15784;
 var modB = 15784;
$(document).ready(function(){
   if(sessionStorage.getItem("Attfarm") == 1){
        af();
      setInterval(function(){
         af();
         i=1;
      },60000); // tempo em milissegundos
   }else{
       sessionStorage.setItem("Attfarm",1);
   }
      setTimeout(function(){
         location.reload();
      },1800000); //Tempo pra atualizar a Página
});
function af(){
   setInterval(function(){
         var aldeia = id[i].split("_");
         if(imgs[i] == "https://dsbr.innogamescdn.com/8.46.2/29208/graphic/max_loot/1.png"){
            Accountmanager.farm.sendUnits(this, aldeia[1], modB);
         }else{
            Accountmanager.farm.sendUnits(this, aldeia[1], modA);
         }
         i = i+1;
         if(i>id.length){
            return false;
         }
         },1000);
}
$('#plunder_list tr').each(function(){
  //alert(this.id);
  id.push(this.id);
  imgs.push($(this).find("td").eq(2).find("img").eq(0).attr("src"));
});
