function showSrc(e){
  if (!e){
    var e=window.event;
  }
  var stripurl = new RegExp('.*\/');
  var imgname = e.target.parentNode.childNodes[0].src;
  imgname = imgname.replace(stripurl, '');
  prompt("Image name",imgname);
}

function heightCheck() {
  document.body.style.minHeight='';
  standardHeightCheck(622,0);
}
