const convertStyle = () => {
    const height = window.innerHeight;
    Array.from(document.getElementsByTagName("section")).forEach((element) => {
      element.style.height = `${height}px`;
    });
  };
  window.addEventListener("resize", convertStyle);
  window.addEventListener("DOMContentLoaded", convertStyle);