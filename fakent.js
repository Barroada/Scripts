// ==UserScript==
// @name        nt
// @namespace   nt
// @include     *
// @version     1
// @grant       none
// ==/UserScript==
//var cys = "F";
//function tecla(e){
 //   evt = e || window.event;
  //  var keyPressed =  evt.keyCode || evt.which;
  //  if(evt.ctrlKey && keyPressed ==9){
   //     document.forms[0].submit.click();
   //   window.close();
  //  }
//  }



  //document.body.onkeypress = tecla;
$(document).keydown(function(e) {
    if (e.ctrlKey && e.which == 9) {
         document.forms[0].submit.click();
    }
})