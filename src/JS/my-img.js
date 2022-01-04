//1
// const imgBox = document.querySelector(".imgBox2");
// function loadImages(numImages = 10){
//     let i=0;
//      while(i < numImages){
//      fetch('https://dog.ceo/api/breeds/image/random')
//      .then(response=>response.json())
//      .then(data=>{
//      const img =  document.createElement('img');
//      img.src = `${data.message}`
//      imgBox.appendChild(img);
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


//2
// const imgBox = document.querySelector(".imgBox2");
// function loadImages(numImages = 10){
//     let i=0;
//      while(i < numImages){
//      fetch("../../attire.json")
//      .then(response=>response.json())
//      .then(data=>{
//      const img =  document.createElement('img');
//      img.src = `${data.image}`
//      imgBox.appendChild(img);
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


// //3
// //json파일 읽어오는 fetch
// function loadItems() {
//     return fetch("../../attire.json")
//         .then((response) => response.json())
//         .then((json) => json.items);
// }


// loadItems().then((items) => {
//     // console.log(items);
//     displayItems(items);
// });

// // html파일의 class="imgBox2"에 이미지 넣기
// function displayItems(items) {
//     const imgBox2 = document.querySelector(".imgBox2");
//     imgBox2.innerHTML = items.map((item) => createHTMLString(item)).join("");
// }

// //json의 이미지파일 주소값 연결
// function createHTMLString(item) {
//     return `
//         <img src="${item.image}" />
//     `
// }


// //무한스크롤
//  window.addEventListener('scroll',()=>{
//     if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
//         loadItems();
//     }
// })

//4
//json파일 읽어오는 fetch
function loadItems() {
    return fetch("../../attire.json")
        .then((response) => response.json())
        .then((json) => json.items);
}


loadItems().then((items) => {
    // console.log(items);
    console.log(items["temperature"]);
    displayItems(items);
});

// html파일의 class="imgBox2"에 이미지 넣기
function displayItems(items) {
    const imgBox2 = document.querySelector(".imgBox2");
    imgBox2.innerHTML = 
    items.map((item) => createHTMLString(item)).join("");
}

//셀렉 임의 코드
let a = json temperature값
if(a == "4") {
    이미지박스에 4 사진만
} else if( a== "5") {
    이미지 박스에 5 사진만
} else {
    이미지박스에 9사진만
}

//json의 이미지파일 주소값 연결
function createHTMLString(item) {
    return `
        <img src="${item.image}" />
    `
}


//무한스크롤
 window.addEventListener('scroll',()=>{
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadItems();
    }
})