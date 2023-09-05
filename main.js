

function boot(){
  
  var boot_speed = "";
  
  for (var times = 0;times < 4;times++){
    
    var get_speed = Math.floor(Math.random()*10);
    
    boot_speed += get_speed;
  }
  //alert(boot_speed);
  document.getElementById("cache").innerHTML = "<a href='load_screen.html' id='a'></a>";
  setTimeout(function(){
    document.getElementById("a").click();
  }, boot_speed);
  
}
boot();






















// app market code
function app_market_install_Youtube() {
  document.getElementById("apps").innerHTML += '<div class="apps" onclick="youtube()"><img src="apps/normal/YouTube.png"><br>You Tube </div>'
}

function app_market_install_Facebook() {
  document.getElementById("apps").innerHTML += '<div class="apps" onclick="facebook()"><img src="apps/normal/facebook.png"><br>Facebook </div>'
}

function app_market_install_Gmail() {
  document.getElementById("apps").innerHTML += '<div class="apps" onclick="gmail()"><img src="apps/normal/gmail.png"><br>G-Mail </div>'
}


function app_market_install_Hotstar() {
  document.getElementById("apps").innerHTML += '<div class="apps" onclick="hotstar()"><img src="apps/normal/hotstar.jpg"><br>Hot Star </div>'
}



function app_market_install_Spotify() {
  document.getElementById("apps").innerHTML += '<div class="apps" onclick="spotify()"><img src="apps/normal/spotify.png"><br>Spotify </div>'
}

function app_market_install_Vscode() {
  document.getElementById("apps").innerHTML += '<div class="apps" onclick="vscode()"><img src="apps/normal/vscode.png"><br>Vs Code </div>'
}


function app_market_install_HMG() {
  document.getElementById("apps").innerHTML += '<div class="apps" onclick="hmg()"><img src="apps/normal/hacker simulator mg beta.jpg"><br>HMG... </div>'
}
// app market code - end