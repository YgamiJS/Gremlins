import "@/scss/index.scss";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCountAnimation(entry.target, 0, entry.target.dataset.count, 1000);
      observer.unobserve(entry.target);
    }
  });
}, options);

function startCountAnimation(elem, start, end, duration) {
  let obj = elem,
    current = start,
    range = end - start,
    increment = end > start ? (end >= 10000 ? 10000 : 1) : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
}

const getElement = (id) => document.getElementById(id);

const elements = [
  getElement("players-count-world"),
  getElement("employees-count-world"),
  getElement("projects-count-world"),
  getElement("projects-count"),
  getElement("download-count"),
  getElement("reviews-count"),
  getElement("platforms-count"),
  getElement("employees-count"),
];

elements.forEach((item) => observer.observe(item));
