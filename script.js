const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);
const log = (any) => console.log(any);

//     SLIDER
const slider = qs(".slider-list");
const dot1 = qs(".dot1");
const dot2 = qs(".dot2");
const dot3 = qs(".dot3");
const posts = [
  {
    title: "1Lorem ipsum!!",
    text: "!Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    title: "2Lorem ipsum!!",
    text: "!Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    title: "3Lorem ipsum!!",
    text: "!Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    title: "7Lorem ipsum??",
    text: "?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    title: "8Lorem ipsum??",
    text: "?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    title: "9Lorem ipsum??",
    text: "?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
];
const renderPosts = (n) => {
  let newPosts = posts.slice(n - 3, n);
  slider.innerHTML = "";
  for (const { text, title } of newPosts) {
    slider.innerHTML =
      slider.innerHTML +
      `<li class="slide-item">
   <p class="slide-description">${text}</p>
    <h2 class="slide">${title}</h2>
   </li>`;
  }
};
const sliderCarousel = (e) => {
  dot1.classList.remove("active");
  dot2.classList.remove("active");
  dot3.classList.remove("active");

  if (e.target === dot1) {
    renderPosts(3);
    dot1.classList.add("active");
  } else if (e.target === dot2) {
    renderPosts(6);
    dot2.classList.add("active");
  } else if (e.target === dot3) {
    renderPosts(9);
    dot3.classList.add("active");
  } else {
    return;
  }
};
dot1.addEventListener("click", sliderCarousel);
dot2.addEventListener("click", sliderCarousel);
dot3.addEventListener("click", sliderCarousel);

//     GALLERY
const next = qs(".next-pic");
const prev = qs(".prev-pic");
const vievPic = qs(".gallery-view");

const nextPic = () => {
  const currentPicId = vievPic.id;
  if (currentPicId === "pic1") {
    vievPic.src = "images/pic2.jpg";
    vievPic.id = "pic2";
  } else if (currentPicId === "pic2") {
    vievPic.src = "images/pic3.jpg";
    vievPic.id = "pic3";
  } else if (currentPicId === "pic3") {
    vievPic.src = "images/pic1.jpg";
    vievPic.id = "pic1";
  }
};
const prevPic = () => {
  const currentPicId = vievPic.id;
  if (currentPicId === "pic1") {
    vievPic.src = "images/pic3.jpg";
    vievPic.id = "pic3";
  } else if (currentPicId === "pic2") {
    vievPic.src = "images/pic1.jpg";
    vievPic.id = "pic1";
  } else if (currentPicId === "pic3") {
    vievPic.src = "images/pic2.jpg";
    vievPic.id = "pic2";
  }
};
next.addEventListener("click", nextPic);
prev.addEventListener("click", prevPic);
