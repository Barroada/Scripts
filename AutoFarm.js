// ==UserScript==
// @name        test
// @namespace   test
// @include     *
// @version     1
// @grant       none
// ==/UserScript== 
   //  var list = document.getElementsByClassName("farm_"+id "farm_icon" ".farm_icon_b");
    //  var id;
    //  alert("bg" + list.length);
    //  if(list == null){
    //    alert("so bad");
    //  }
/* 
    for (var i=1; i<id.length; i++){
      // alert(id[i]);
   // alert("farm_"+id[i] + ".farm_icon" + ".farm_icon_b");
     var start = new Date().getTime();
      // alert("f");
     //document.getElementsByClassName("farm_"+ id[i]).trigger("click");
       var aldeia = id[i].split("_");
       Accountmanager.farm.sendUnits(this, aldeia[1], 10582); 
      // alert("t");
       
    }
 
 Funcionando 
 var id = [];
var imgs = [];
 var i = 1;
$(document).keydown(function(e) {
    if (e.which == 9) {
       setInterval(function(){
       var aldeia = id[i].split("_");
       Accountmanager.farm.sendUnits(this, aldeia[1], 10582); 
       i = i+1;    
      if(i>51){
        return 0;
      }
       },500);
    }
});

$('#plunder_list tr').each(function(){
  //alert(this.id);
  id.push(this.id);
  imgs = $(img).attr("src");
});
*/
 var id = [];
var imgs = [];
 var i = 1;
$(document).ready(function(){
   if(sessionStorage.getItem("Attfarm") == 1){
      setInterval(function(){
         var aldeia = id[i].split("_");
         if(imgs[i] == "https://dsbr.innogamescdn.com/8.46.2/29208/graphic/max_loot/1.png"){
            Accountmanager.farm.sendUnits(this, aldeia[1], 13911); 
         }else{
            Accountmanager.farm.sendUnits(this, aldeia[1], 7144); 
         }
         i = i+1;    
         if(i>51){
            sessionStorage.setItem("Attfarm",0);
         }
         },500);
   }else{
       sessionStorage.setItem("Attfarm",0);
   }
      setTimeout(function(){
         sessionStorage.setItem("Attfarm",1);
         location.reload();
      },1800000);
});

$('#plunder_list tr').each(function(){
  //alert(this.id);
  id.push(this.id);
  imgs.push($(this).find("td").eq(2).find("img").eq(0).attr("src"));
});
