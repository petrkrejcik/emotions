// index.js

import emotions from "./emotions";
import { Emotion } from "./types";


// Take the language from the URL from the `lang` query parameter
const lang = new URLSearchParams(window.location.search).get("lang") || "en";
const nameProp = `name${lang.toUpperCase()}`;

function getList(items: Emotion[]) {
  const list = document.createElement("ul");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item[nameProp];
    li.className =
      "list-none py-4 border-b border-gray-400 hover:bg-gray-200 cursor-pointer transition duration-200 ease-in-out text-center";
    li.addEventListener("click", () => {
      if (!!item.emotions?.length) {
        const isRoot = window.location.hash === "";
        window.location.hash += isRoot ? `${item.id}`: `/${item.id}`;
      } else {
        // highlight the item
        const highlighted = document.querySelector("li.bg-gray-200");
        if (highlighted) {
          highlighted.classList.remove("bg-gray-200");
        }
        li.classList.add("bg-gray-200");
      }
    });
    list.appendChild(li);
  });
  return list;
}

// Recursively finds an emotion by ID in the Emotion tree
function findEmotion(emotionId: string, emotions: Emotion[]): Emotion | undefined {
  for (const emotion of emotions) {
    if (emotion.id === emotionId) {
      return emotion;
    }
    if (emotion.emotions) {
      const result = findEmotion(emotionId, emotion.emotions);
      if (result) {
        return result;
      }
    }
  }
}

function getHashParams(): string[] {
  const hash = window.location.hash;
  const params = hash
    .split("/")
    .filter((param) => param !== "#")
    .map((param) => param.toLowerCase())
    .map((param) => param.replace(/^#/, ""))
    .filter(Boolean);
  // `params` can be ['positive', 'joy', 'happy']
  return params;
}

function renderBreadcrumbs() {
  const container = document.getElementById("breadcrumbs");
  if (!container) {
    return;
  }
  const params = getHashParams();
  container.innerHTML = "";
  params.forEach((param, index) => {
    const link = document.createElement("li");
    link.innerText = param;
    link.addEventListener("click", () => {
      const newParams = params.slice(0, index + 1);
      window.location.hash = newParams.join("/");
    });
    container.appendChild(link);
  });
}

function renderBackButton() {
  const button = document.getElementById("back-button");
  if (!button) {
    return;
  }
  const params = getHashParams();
  if (params.length === 0) {
    button.style.display = "none";
  } else {
    // Set display: flex
    button.style.display = "flex";
  }
  button.addEventListener("click", () => {
    const newParams = params.slice(0, params.length - 1);
    window.location.hash = newParams.join("/");
  });
}

function renderList() {
  const container = document.getElementById("emotions-list");
  if (!container) {
    return;
  }
  const params = getHashParams();
  const lastParam = params[params.length - 1];
  let items: Emotion[] = [];
  if (!lastParam) {
    items = Object.values(emotions);
  } else {
    const emotion = findEmotion(lastParam, emotions);
    if (!emotion?.emotions) {
      return;
    }
    items = emotion.emotions;
  }
  const list = getList(items);
  container.innerHTML = "";
  container.appendChild(list);
}

function render() {
  // renderBreadcrumbs();
  renderBackButton();
  renderList();
}

window.addEventListener("DOMContentLoaded", render);
window.addEventListener("hashchange", render);
