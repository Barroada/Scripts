// ==UserScript==
// @name         Farmday
// @namespace    https://github.com/Barroada/Scripts/blob/master/farmday.js
// @version      2.0
// @description  Mostra um ranking do record de farm dos membros do Clã
// @author       Barroada - https://github.com/Barroada/scripts
// @match        https://*screen=ally&mode=members*
// @grant        none
// ==/UserScript==


var original = [];
var pordenar = [];
var tabelaoriginal = "";
$("#ally_content tr:eq(0)").append("<th class='farm'>Farm</th>");
var novatable = "<tbody><tr>"+$("#ally_content tr:eq(0)").html()+"</tr> \n";
var bool = true;
var bool2 = true;
$(document).ready(function(){
    var i = 0;
    var name = "";
    var inte = "";
    $("#ally_content tr:gt(0)").each(function(){
        $(this).append("<td class='m"+i+"'></td>");
        $(this).addClass("tr"+i);
        name = $(this).find("td").eq(0).find("a").text();
        var split = name.split(" ");
        if(split.length == 1){
            $(this).find(".m"+i).load("/game.php?screen=ranking&mode=in_a_day&type=loot_res&name="+name+" #in_a_day_ranking_table .lit2 td:eq(3)");
        }else{
            if($(this).hasClass("selected")){
                $(this).find(".m"+i).load("/game.php?screen=ranking&mode=in_a_day&type=loot_res&name="+split[0]+"+"+split[1]+" #in_a_day_ranking_table .lit td:eq(3)");
            }else{
                $(this).find(".m"+i).load("/game.php?screen=ranking&mode=in_a_day&type=loot_res&name="+split[0]+"+"+split[1]+" #in_a_day_ranking_table .lit2 td:eq(3)");
            }
        }
        i = i+1;
        alert(i);
    });
});
function sort(){
    pordenar.sort(function(a,b) {return b-a;});
    for(var i=0;i<pordenar.length;i++){
        for(var j=0;j<original.length;j++){
            if(pordenar[i] == original[j]){
                novatable = novatable +"<tr class='"+$(".tr"+j).attr('class')+"'>"+ $(".tr"+j).html()+"</tr>";
                break;
            }
        }
    }
    novatable = novatable + "</tbody>";
}
function outra(){
    i = 0;
    $("#ally_content tr:gt(0)").each(function(){
        $(".m"+i).html($(".m"+i+" .lit-item").html());
        $(".m"+i+" .lit-item").remove();
        inte = $(".m"+i).text();
        var sp = inte.split(".");
        if(sp.length == 1){
            original.push(parseInt(inte));
            pordenar.push(parseInt(inte));
        }else if(sp.length == 2){
            original.push(parseInt(sp[0]+sp[1]));
            pordenar.push(parseInt(sp[0]+sp[1]));
        }else{
            original.push(parseInt(sp[0]+sp[1]+sp[2]));
            pordenar.push(parseInt(sp[0]+sp[1]+sp[2]));
        }
        i = i+1;
    });

}
$(document).on("click",'.farm',function(){
    if(bool === true){
        outra();
        tabelaoriginal = $('.membros').html();
        sort();
        bool = false;
        alert(novatable);
        $('.membros').html(novatable);
    }else{
        if(bool2 === true){
            $('.membros').html(tabelaoriginal);
            bool2 = false;
        }else{
            $('.membros').html(novatable);
            bool2 = true;
        }
    }
    return false;

});
$("#ally_content .vis").addClass("membros");
