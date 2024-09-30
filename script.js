function getAndShowData() {
  const main = document.querySelector(".main");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.json();
    })
    .then((posts) => {
      let i = 0;
      const interval = setInterval(() => {
        let div1 = document.createElement("div");
        div1.textContent = `${posts[i].title}`;
        div1.classList.add("title");
        main.appendChild(div1);
        let div2 = document.createElement("div");
        div2.textContent = `${posts[i].body}`;
        main.appendChild(div2);
        i++;
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
      }, 15000);
    })
    .catch(() => {
      main.textContent = "Error";
    });
}

getAndShowData();
