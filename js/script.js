document.body.addEventListener("mousemove", evt => {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;
    
    gsap.set("#mouse", {
      x: mouseX,
      y: mouseY
    })
  })