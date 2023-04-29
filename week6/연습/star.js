class Star {
  //랜덤 애니메이션 시간
  constructor() {
    this.node = document.createElement("div");
    this.node.classList.add("star");
    const randomNumber = Math.random() * 3 + 1;
    this.node.style.width = `${randomNumber}px`;
    this.node.style.height = `${randomNumber}px`;
    this.node.style.top = `${Math.floor(Math.random() * 100)}%`;
    this.node.style.left = `${Math.floor(Math.random() * 100)}%`;
    this.node.style.animationDuration = `${Math.random() * 3 + 1}s`;
    document.body.appendChild(this.node);
  }
}

export default Star;
