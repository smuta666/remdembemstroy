function changeImg(){
  let image = document.getElementById('img1');

  if(image.src.match('img/menu.png')){
      image.src = 'img/closeee.svg';
      image.classList.add('move-right');
  } else {
      image.src = 'img/menu.png';
      image.classList.remove('move-right');
  }
}