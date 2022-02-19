const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];

const marcupImg = ({ url, alt }, itemClassName, imgClassName) =>
  `<li class ="${itemClassName}"><img src="${url}" alt="${alt}"  height = 140 width = 240 class="${imgClassName}"></li>`;

const marcup = images.map(image => marcupImg(image, "item", "img")).join("");

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("afterbegin", marcup);
