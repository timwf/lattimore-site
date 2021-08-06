
//hoverstate - point right
export const handleMouseHoverRight = (e) => {

  if (e.target.classList.contains("active")) {
    return
  }

  var cursor = document.getElementsByClassName('mouse-cursor')  
  cursor[0].classList.add('active')    
}


// export const checkIfTouch = () => {
//   var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
//   console.log(supportsTouch)
// }


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





  
