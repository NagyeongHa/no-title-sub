//    //innerHeight 보고있는 창의 높이 scrollY 스크롤 내린 값  body.offsetHeight 가려진 창의 높이 포함 실제 높이
//    var count = 2;
//    window.onscroll = function(e) {
//      console.log(window.innerHeight , window.scrollY,document.body.offsetHeight)
//      if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//        setTimeout(function(){
//          var addContent = document.createElement("div");
//          addContent.classList.add(".img_container")
//          addContent.innerHTML = `<p>${++count}번째 블록</p>`
//          document.querySelector('section').appendChild(addContent);
//        }, 200)
//      }
//    }



   //innerHeight 보고있는 창의 높이 scrollY 스크롤 내린 값  body.offsetHeight 가려진 창의 높이 포함 실제 높이
//    var count = 2;
//    window.onscroll = function(e) {
//      console.log(window.innerHeight , window.scrollY,document.body.offsetHeight)
//      if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//        setTimeout(function(){
//          var addul = document.createElement("ul");
//          var addli = document.createElement("li");
//          var addimg = document.createElement("img")

//          addul.classList.add("content");
//          addli.classList.add("imgBox");

//          document.querySelector('section').appendChild(addul);
//          document.querySelector('section').appendChild(addli);
//          document.querySelector('section').appendChild(addimg);
//        }, 200)
//      }
//    }






    //   //innerHeight 보고있는 창의 높이 scrollY 스크롤 내린 값  body.offsetHeight 가려진 창의 높이 포함 실제 높이
    //   var count = 2;
    //   window.onscroll = function(e) {
    //     console.log(window.innerHeight , window.scrollY,document.body.offsetHeight)
    //     if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //          loadImages();
    //     }
    //   }

    //   function loadImages 

//     let box = document.querySelector("imgbox");
//     let count = box.children.length;
//     window.addEventListener("scroll", () => {
//   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  
//   if (Math.round(scrollHeight - scrollTop) <= clientHeight) {
//     var addContent = document.createElement("li");
//         //   addContent.classList.add("imgBox")
//           addContent.innerHTML = `<p>${++count}번째 블록</p>`
//           document.querySelector('li').appendChild(addContent);
//   }
// });

// setTimeout(() => {
//     page++;
//     showPosts();
//   }, 300);

// api 1
// const container = document.querySelector(".container");
// function loadImages(numImages = 10){
//     let i=0;
//      while(i < numImages){
//      fetch('https://dog.ceo/api/breeds/image/random')
//      .then(response=>response.json())
//      .then(data=>{
//      const img =  document.createElement('img');
//      img.src = `${data.message}`
//      container.appendChild(img);
//      })
//      i++;
//      }   
//      }
 
//  loadImages();

//  window.addEventListener('scroll',()=>{
//     if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
//     loadImages();
//     }
// })


//api2
// const container = document.querySelector(".container");
// const URL = 'https://dog.ceo/api/breeds/image/random'

// function loadimg(imgNum = 10) {
//     let i =  0;
//     while(i > imgNum) {
//         const img = document.createElement("img")
//         img.src = `${URL}`
//         container.appendChild(img)
//         i++
//     }
// }
// loadimg()

// window.addEventListener('scroll',() => {
//     if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
//         loadimg();
//     }
// })
