document.body.innerHTML += '<p style="position:fixed;top:20px;right:20px; background-color: white;"> <a href="https://daniel4-scratch.github.io/Forums/">Home</a></p>'

function endBox(){
   
  setTimeout(function(){ document.body.innerHTML += '<br><p>Feed:'+ window.location.pathname +'</p><br><div class="box"> <center>Footer </center> </div> <div class="box-content">Search is broken<br><input><button>Search</button><br>or<br>Browse for a post <a href="https://github.com/Daniel4-Scratch/Forums/tree/main/topics">here</a>.</div>' }, 1000);
  // <div class="box"> <center>Forums</center> </div> <div class="box-content"> Pinned Forums: <a href="topics/Daniel4-Scratch-Info-Post">Info Post</a> </div>
}
endBox()
