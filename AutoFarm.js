// ==UserScript==
// @name         Auto Farm
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// ==/UserScript==


 var id = [];
 var imgs = [];
 var i = 1;
 var modA = 9260;
 var modB = 9260;
 var ataques = 600000; // tempo em milissegundos
 var recarregar = 3600000; // tempo em milissegundos
$(document).ready(function(){
   if(sessionStorage.getItem("Attfarm") == 1){
        af();
         i=1;
      setInterval(function(){
         af();
         i=1;
      },ataques); // tempo em milissegundos

   }else{
       sessionStorage.setItem("Attfarm",1);
   }
      setTimeout(function(){
         location.reload();
      },recarregar); //Tempo pra atualizar a Página
});
function af(){
   var inter1 = setInterval(function(){
       try{
         var aldeia = id[i].split("_");
       }catch(err){
           clearInterval(inter1);
       }
         if(imgs[i] == "https://dsbr.innogamescdn.com/8.46.2/29208/graphic/max_loot/1.png"){
            Accountmanager.farm.sendUnits(this, aldeia[1], modB);
         }else{
            Accountmanager.farm.sendUnits(this, aldeia[1], modA);
         }
         i = i+1;
         if(i>id.length){
           clearInterval(inter1);
         }
         },1000);
}
$('#plunder_list tr').each(function(){
  //alert(this.id);
  id.push(this.id);
  imgs.push($(this).find("td").eq(2).find("img").eq(0).attr("src"));
});
