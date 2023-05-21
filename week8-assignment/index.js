import "./index.css";

document.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    e.preventDefault();
  }
});

const getData = async () => {
  fetch("http://toyproject.kro.kr:8000/guestbook/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      res.result.map((e) => {
        const container = document.createElement("div");
        container.setAttribute("class", "container");
        const writer = document.createElement("div");
        writer.setAttribute("class", "writer_box");
        const content = document.createElement("div");
        content.setAttribute("class", "content_box");
        const date = document.createElement("div");
        date.setAttribute("class", "date_box");
        const br = document.createElement("br");
        writer.innerHTML = `To. ${e.writer} `;
        content.innerHTML = `${e.content}`;
        date.innerHTML = `${e.created_at.slice(0, 10)}`;
        const removeButton = document.createElement("button");
        removeButton.innerText = "삭제하기";
        removeButton.onclick = () => deleteData(e.id);
        document.body.appendChild(container);
        container.appendChild(writer);
        container.appendChild(content);
        container.appendChild(date);
        container.appendChild(removeButton);
        document.body.appendChild(br);
      });
    });
};

window.onload = function () {
  getData();
};

const createData = async (event) => {
  event.preventDefault();
  const form = document.forms.guest;
  const writer = form.elements.writer;
  const content = form.elements.content;

  if (writer.value == "" || content.value == "") {
    alert("내용이나 작성자를 입력해주세요");
  } else {
    await fetch("http://toyproject.kro.kr:8000/guestbook/", {
      method: "POST",
      body: JSON.stringify({
        writer: writer.value,
        content: content.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          alert("방명록 생성 성공!");
          document.location.href = "/week8-assignment/index.html";
        } else {
          alert("방명록이 생성되지 못했어요 ㅠㅠ");
        }
      });
  }
};

const submitForm = document.getElementById("form-box");

submitForm.addEventListener("submit", createData);

const deleteData = async (id) => {
  await fetch(`http://toyproject.kro.kr:8000/guestbook/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === 200) {
        alert("방명록이 삭제되었어요");
        document.location.href = "/week8-assignment/index.html";
      } else {
        alert("삭제 실패 ㅠㅜ");
      }
    });
};
