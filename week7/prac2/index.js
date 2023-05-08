const url =
  "https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?numOfRows=5&pageNo=10&MobileOS=ETC&MobileApp=test&arrange=A&_type=json&serviceKey=6tsMcmZLmHvae4uQqlcDUag6C4YcrOeK60%2FYUtaiSzmqUmrxXjelV580hNtx6w50sLu0ESjc7xi8HWQ6c%2BJlBg%3D%3D";
const container = document.getElementById("container");
const container2 = document.getElementById("container2");
var count = -1;

async function getData() {
  const random = Math.floor(Math.random() * 100 + 1);
  const imgUrl = `https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?numOfRows=5&pageNo=${random}&MobileOS=ETC&MobileApp=test&arrange=A&_type=json&serviceKey=6tsMcmZLmHvae4uQqlcDUag6C4YcrOeK60%2FYUtaiSzmqUmrxXjelV580hNtx6w50sLu0ESjc7xi8HWQ6c%2BJlBg%3D%3D`;
  count++;
  const fetchData = await fetch(imgUrl);

  const tojson = await fetchData.json();

  const data = await tojson.response.body.items.item;
  console.log(data);
  {
    data.map((el, i) => {
      const link = document.createElement("div");
      link.id = "list";
      const image = document.createElement("img");
      image.src = el.galWebImageUrl;
      const text = document.createElement("span");
      text.innerHTML = `
      ${i + 1 + 5 * count}번째
       제목 : ${el.galTitle}
       장소 : ${el.galPhotographyLocation}
       `;
      // const date = el.galCreatedtime;
      // const editor = el.galPhotograpther;
      // const keyword =el.galSearchKeyword;
      const button = document.createElement("button");
      button.innerText = "더보기";
      button.onclick = function () {
        pageMove(el.galCreatedtime, el.galPhotographer, el.galSearchKeyword);
      };
      container.appendChild(link);
      link.appendChild(image);
      link.appendChild(text);
      link.appendChild(button);
    });
  }
}

async function pageMove(date, editor, keyword) {
  document.location.href =
    "/week7/prac2/detail.html" +
    `?date=${date}&editor=${editor}&keyword=${keyword}`;
}

async function getDetail() {
  const detaillink = document.createElement("div");
  detaillink.id = "detaillist";
  const detailtext = document.createElement("span");
  let params = new URLSearchParams(window.location.search);
  const date = params.get("date");
  const editor = params.get("editor");
  const keyword = params.get("keyword");
  detailtext.innerHTML =
    `🗓️날짜 : ${date.slice(0, 4)}년 ${date.slice(4, 6)}월 ${date.slice(
      6,
      8
    )}일` +
    "<br>" +
    `📷사진작가 : ${editor}` +
    "<br>" +
    `ℹ️내용 : ${keyword}
  `;
  container2.appendChild(detaillink);
  detaillink.appendChild(detailtext);
}
