export function startLoader() {
  const loader = document.getElementById("top-loader");
  if (!loader) return;

  loader.style.opacity = "1";
  loader.style.width = "10%";

  requestAnimationFrame(() => {
    loader.style.width = "40%";
  });

  setTimeout(() => {
    loader.style.width = "70%";
  }, 200);
}

export function finishLoader() {
  const loader = document.getElementById("top-loader");
  if (!loader) return;

  loader.style.width = "100%";

  setTimeout(() => {
    loader.style.opacity = "0";
  }, 200);

  setTimeout(() => {
    loader.style.width = "0%";
  }, 400);
}