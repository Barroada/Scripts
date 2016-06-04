$(document).ready(function(){
   if(sessionStorage.getItem("Att") == 1){
      sessionStorage.setItem("Att",0);
     $(".selectAll").trigger("click");
     $(".btn[value='Etiqueta']").trigger("click");
   }else{
      sessionStorage.setItem("Att",0);
   }
   setTimeout(function(){
      sessionStorage.setItem("Att",1);
      location.reload();
   },1800000);
});
