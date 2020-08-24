
function upDate(previewPic){
     x = document.getElementById('image');
     x.style.backgroundImage = "url("+previewPic.src+")";
     x.innerHTML=previewPic.alt;
       }
   
       function unDo(){
      y=document.getElementById('image');
      y.style.backgroundImage="url('')";
      //var data="Hover over an image below to display here.";
      y.innerHTML= 'Hover over an image below to display here.';
           
       }