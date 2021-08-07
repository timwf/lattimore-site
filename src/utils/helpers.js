
//hoverstate - point right
export const handleMouseHoverRight = (e) => {

  if (e.target.classList.contains("active")) {
    return
  }

  var cursor = document.getElementsByClassName('mouse-cursor')  
  cursor[0].classList.add('active')    
}


export const getActualViewheight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => { 
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
}


//hoverstate - exit
export const handleMouseHoverExit = () => {

  var cursor = document.getElementsByClassName('mouse-cursor')  
  cursor[0].classList.remove('active')    
  cursor[0].classList.remove('left-active')
};

//hoverstate - point left
export const handleMouseHoverLeft = (e) => {

  if (e.target.classList.contains("active")) {
    return
  }
  
  var cursor = document.getElementsByClassName('mouse-cursor')  
  cursor[0].classList.add('left-active')    
};





  
