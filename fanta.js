let tl = gsap.timeline();
tl.from("#one h1",{
duration:4,
y:200,
opacity:0,

onStart: function(){
        $('#one h1').textillate
        ({ in: { effect: 'wobble' },
        
         callback: function(){
            $('#one h1').textillate('out')
          },
          out:{
            effect:'fadeOut'
          },
          callback: function(){
            $('#one h1').textillate('in')
          },
          in:{
            effect:'wobble'
          },

       
    
    });
    
    } 

})
let t1= gsap.timeline({scrollTrigger:
{trigger: "#two",
  scrub:4,
  start:"0% 95%",
  end:"70% 70%",
//  markers:true
}
})
t1.to("#fanta",{
  top:"100%",
  left:"3%",

},'orange')

t1.to("#orange",{
top:"160%",
left:"19%",
},'orange')
t1.to("#orange2",{
  top:"170%",
  width:"15%",
 left:"85%",
  },'orange')
  t1.to("#leaf2",{
    top:"105%",
    rotate:"360deg",
    left:"75%",
    },'orange')
    t1.to("#leaf1",{
      top:"110%",
      rotate:"540deg",
      left:"42%",
      },'orange')
      t1.from("#right-part h1",{
y:-80,opacity:0
      },'h1')
      t1.from("#right-part p",{
        scale:0.25,
        opacity:0
      },'h1')



var t12 = gsap.timeline({scrollTrigger:{
        trigger: "#three",
        start: "0% 95%",
        end: "50% 70%",
        scrub: true,
      //  markers: true,
    }})
    
t12.to("#fanta",{
  width:"16%",
  top: "210%",
  left: "29.5%",
 
  
  
},'ca')
t12.from("#fanta-pine",{
  y:-200,
   rotate:"-120deg",
  x:-100,
  opacity:0
},'ca')
t12.from("#fanta-grape",{
  y:200,
  opacity:0,
  rotate:"120deg",
  x:100
},'ca')
t12.from("#fanta-straw",{
  scale:2.5,
rotate:"300deg",
opacity:0,
  z:100
},'ca')
t12.from("#grape",{
  rotate:"360deg",
  x:"-110%",
  opacity:0
},'ca')
t12.from("#orange1",{
  rotate:"360deg",
  x:"-110%",
  opacity:0
},'ca')
t12.from("#pine",{
  rotate:"360deg",
  x:"-110%",
  opacity:0
},'ca')
t12.from("#strawberry",{
  rotate:"360deg",
  x:"-110%",
  opacity:0
},'ca')


let t3 = gsap.timeline()
t3.from("#main nav",{
  y:-200,
  delay:1,
  opacity:0,
  stagger:true
})
gsap.from("#leaf3",{
  x:-50,
  y:-50,
opacity:0,
 repeat:-1,
 yoyo:true
 
})

