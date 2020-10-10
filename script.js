document.body.innerHTML += '<p style="position:fixed;top:20px;right:20px; background-color: white;"> <a href="https://daniel4-scratch.github.io/Forums/">Home</a></p>'



function endBox(){
   
  setTimeout(function(){ document.body.innerHTML += '<br><p style="margin-left:9em; margin-right:9em;"><img src="https://cdn.pixabay.com/photo/2012/04/24/23/17/rss-41072_1280.png" width="15"> Feed: '+ window.location.pathname +' <span style="float:right;">'+document.title+'</span></p><br><div class="box"> <center>Footer </center> </div> <div class="box-content">Search<br><input type="text" id="db-forums" placeholder="Enter Text"/> <input type="button" value="Search" onclick="searchf()"/><br>or<br>Browse for a post <a href="https://github.com/Daniel4-Scratch/Forums/tree/main/topics">here</a>.</div>' }, 1000);
  // <div class="box"> <center>Forums</center> </div> <div class="box-content"> Pinned Forums: <a href="topics/Daniel4-Scratch-Info-Post">Info Post</a> </div>
}
endBox()
