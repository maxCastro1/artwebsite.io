const button = document.getElementById("nav-toggle")
const iconMenu = document.getElementById("menu")
const iconClose = document.getElementById("close")
const main = document.getElementById("0")
const navLinks = document.getElementById("nav-links")
const body = document.getElementById("B")
const scrollingDiv = document.getElementsByClassName("lo")
const navLinkBar = document.getElementsByClassName("nav-link")
let bodyStatus = document.body.dataset.nav

const toggleNav = () =>{
    bodyStatus =  bodyStatus === "true" ? "false" : "true"  
    if(bodyStatus === "true"){
        body.style.height="100vh"
        main.style.transform="translateY(-50%)"
        iconClose.style.opacity = 1
        iconMenu.style.opacity = 0  
        navLinks.style.transform="translateY(0%) scale(1)"
    
    }
    else{
        body.style.height="100%"
        main.style.transform="translateY(0%)"
        navLinks.style.transform="translateY(70%) scale(0.9)"
        iconClose.style.opacity = 0
        iconMenu.style.opacity = 1

    }
} 
button.onmouseover = () => { 
   if( bodyStatus === "true"){
    iconClose.style.opacity = 1
   }
   else if(bodyStatus === "false"){
     iconMenu.style.opacity = 1  
   }
     
}
button.onmouseout= () => {
    
    iconMenu.style.opacity = 0
     if(bodyStatus === "false"){
         iconClose.style.opacity = 0 
       }
}
let x = 0 ;
let oldScroll = 0;
 window.onscroll = (e) =>{
    // 12 is the total % percentage
   const maxHeight= window.innerHeight
   let scrolPlace = document.documentElement.scrollTop
   console.log(maxHeight)
   if(oldScroll < scrolPlace ){
    let traslation = parseFloat((12 * (scrolPlace)) / maxHeight)
    for(let i =0;i<2;i++){
        scrollingDiv[i].style.transform=`translateY(${traslation}%)` 
       }
       console.log(scrollingDiv[1].style.transform)
       oldScroll = scrolPlace
   }
   else{
    let traslationup = parseFloat((12 * (scrolPlace)) / maxHeight)
    for(let i =0;i<2;i++){
        scrollingDiv[i].style.transform=`translateY(-${traslationup}%)` 
       }
       oldScroll = scrolPlace
   }
    // console.log(scrolPlace)
    // console.log(maxHeight)
 var sbHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight)

}

    for(let i=0 ; i <= 4; i++){
        // navLinkBar[i].addEventListener("mouseenter",function(){
        //     navLinkBar[i].style.marginTop="15px"
        //     console.log(navLinkBar[i])
        console.log(i)
        if(i>=2 && i<4){
            navLinkBar[i].onmouseover = () => { 
                navLinks.scrollLeft+=i*10
             }
             navLinkBar[i].onmouseout = () => { 
                navLinks.scrollLeft=0
             }
        }
        if(i===4){
            navLinkBar[i].onmouseover = () => { 
                navLinks.scrollLeft+=250
             }
             navLinkBar[i].onmouseout = () => { 
                navLinks.scrollLeft=0
             }
        }
        
        }



//    let scrolPlace = document.documentElement.scrollTop
//    if(scrolPlace > 596 ){
//     for(let i = 0 ; i < 2 ; i++ ){
//         scrollingDiv[i].style.justifyContent="flex-end"
//         scrollingDiv[i].style.marginTop=`0px`
//     }
//    }
//    else if (scrolPlace === 0){ 
//     for(let i = 0 ; i < 2 ; i++ ){
//         scrollingDiv[i].style.justifyContent="flex-start"
//         scrollingDiv[i].style.marginTop=`0px`
    
//     }
//    }

//    else if(scrolPlace <= 598 || scrolPlace >= 0){
//     if (oldScroll < scrolPlace){
//         x+=2
//         console.log("scrolling down")
//         oldScroll=scrolPlace
//         console.log("this going down" + x)
//         for(let i = 0 ; i < 2 ; i++ ){
//           scrollingDiv[i].style.marginTop=`${x}px`;
//       }
//       }
//       else{
//           if(x>=2){
//             x=x-2
//             console.log("scrolling up")
//             oldScroll=scrolPlace
//             console.log(scrolPlace)
//             console.log("this goin up " + x)
//             for(let i = 0 ; i < 2 ; i++ ){
//                 scrollingDiv[i].style.marginTop=`${x}px`;
//             }
//           }
//          else {
//             for(let i = 0 ; i < 2 ; i++ ){
//                 scrollingDiv[i].style.justifyContent="flex-start"
//                 scrollingDiv[i].style.marginTop=`0px`
            
//             }
//          }
//       }
// } 
