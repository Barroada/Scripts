

//https://br78.tribalwars.com.br/game.php?screen=ranking&mode=in_a_day&type=loot_res&name=setrume
$(document).ready(function(){
  var i = 0;
  var name = "";
  $(".ally_content tr:gt(0)").each(function(){
  this.append("<td class='"+i+"'></td>");
  name = $(this).find("td").eq(0).text();
  alert(name);;
  $(this).find("."+i).load("/game.php?screen=ranking&mode=in_a_day&type=loot_res&name="+name+" #in_a_day_ranking_table");
  });
});




