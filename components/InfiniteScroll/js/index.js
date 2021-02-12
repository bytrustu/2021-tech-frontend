import "./style.css";
import renderList from "./listRenderer";
import { debounce } from './util';

const app = document.querySelector("#app");
const fetchMoreTrigger = document.querySelector("#fetchMore");
let page = 0;

const loadMore = async () => {
  const target = page ? fetchMoreTrigger : app;
  target.classList.add("loading");
  await renderList(page++);
  target.classList.remove("loading");
};

const onScroll = (e) => {
  const {
    scrollHeight,
    scrollTop,
    clientHeight
  } = e.target.scrollingElement;

  if (scrollHeight === scrollTop + clientHeight) {
    loadMore();
  }
};

document.addEventListener("scroll", debounce(onScroll, 100));
loadMore();
