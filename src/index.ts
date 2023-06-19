// index.js
type Emotion = {
  id: string;
  nameEN: string;
  nameES: string;
  nameCZ: string;
  emotions?: Emotion[];
};

const emotions: Emotion[] = [
  {
    id: "positive",
    nameEN: "Positive",
    nameES: "Positivo",
    nameCZ: "Pozitivní",
    emotions: [
      {
        id: "energy-vitality",
        nameEN: "Energy and vitality",
        nameES: "Energía y vitalidad",
        nameCZ: "Energie a vitalita",
        emotions: [
          {
            id: "active",
            nameEN: "Active",
            nameES: "Activo",
            nameCZ: "Aktivní",
          },
          {
            id: "alert",
            nameEN: "Alert",
            nameES: "Alerta",
            nameCZ: "Ostražitý",
          },
          {
            id: "animated",
            nameEN: "Animated",
            nameES: "Animado",
            nameCZ: "Oživený",
          },
          {
            id: "bold",
            nameEN: "Bold",
            nameES: "Audaz",
            nameCZ: "Odvážný",
          },
          {
            id: "competent",
            nameEN: "Competent",
            nameES: "Competente",
            nameCZ: "Schopný",
          },
          {
            id: "determined",
            nameEN: "Determined",
            nameES: "Decidido",
            nameCZ: "Rozhodnutý",
          },
          {
            id: "dazzled",
            nameEN: "Dazzled",
            nameES: "Deslumbrado",
            nameCZ: "Ohromený",
          },
          {
            id: "energetic",
            nameEN: "Energetic",
            nameES: "Energético",
            nameCZ: "Energetický",
          },
          {
            id: "motivated",
            nameEN: "Motivated",
            nameES: "Motivado",
            nameCZ: "Motivovaný",
          },
          {
            id: "vibrant",
            nameEN: "Vibrant",
            nameES: "Vivaz",
            nameCZ: "Svižný",
          },
        ],
      },
      {
        id: "happiness",
        nameEN: "Happiness",
        nameES: "Felicidad",
        nameCZ: "Radost a pozitivita",
        emotions: [
          {
            id: "affectionate",
            nameEN: "Affectionate",
            nameES: "Afectuoso",
            nameCZ: "Laskavý",
          },
          {
            id: "grateful",
            nameEN: "Grateful",
            nameES: "Agradecido",
            nameCZ: "Vděčný",
          },
          {
            id: "joyful",
            nameEN: "Joyful",
            nameES: "Alegre",
            nameCZ: "Radostný",
          },
          {
            id: "relieved",
            nameEN: "Relieved",
            nameES: "Aliviado",
            nameCZ: "Ulevilo se mi",
          },
          {
            id: "tranquil",
            nameEN: "Tranquil",
            nameES: "Apacible",
            nameCZ: "Klidný",
          },
          {
            id: "loving",
            nameEN: "Loving",
            nameES: "Cariñoso",
            nameCZ: "Laskavý",
          },
          {
            id: "satisfied",
            nameEN: "Satisfied",
            nameES: "Contento",
            nameCZ: "Spokojený",
          },
          {
            id: "warm",
            nameEN: "Warm",
            nameES: "Cordial",
            nameCZ: "Srdečný",
          },
          {
            id: "pleased",
            nameEN: "Pleased",
            nameES: "Complacido",
            nameCZ: "Potěšený",
          },
          {
            id: "happy",
            nameEN: "Happy",
            nameES: "Feliz",
            nameCZ: "Šťastný",
          },
        ],
      },
      {
        id: "admiration",
        nameEN: "Admiration",
        nameES: "Admiración",
        nameCZ: "Úžas a obdiv",
        emotions: [
          {
            id: "amazed",
            nameEN: "Amazed",
            nameES: "Asombrado",
            nameCZ: "Ohromený",
          },
          {
            id: "awe",
            nameEN: "Awe",
            nameES: "Asombro",
            nameCZ: "Úžas",
          },
          {
            id: "fascinated",
            nameEN: "Fascinated",
            nameES: "Fascinado",
            nameCZ: "Okouzlený",
          },
          {
            id: "impressed",
            nameEN: "Impressed",
            nameES: "Impresionado",
            nameCZ: "Ohromený",
          },
          {
            id: "respectful",
            nameEN: "Respectful",
            nameES: "Respetuoso",
            nameCZ: "Respektující",
          },
          {
            id: "worshipful",
            nameEN: "Worshipful",
            nameES: "Reverente",
            nameCZ: "Uctivý",
          },
          {
            id: "proud",
            nameEN: "Proud",
            nameES: "Orgulloso",
            nameCZ: "Hrdý",
          },
          {
            id: "satisfied",
            nameEN: "Satisfied",
            nameES: "Satisfecho",
            nameCZ: "Spokojený",
          },
          {
            id: "thankful",
            nameEN: "Thankful",
            nameES: "Agradecido",
            nameCZ: "Vděčný",
          },
        ],
      },
      {
        id: "peace",
        nameEN: "Peace",
        nameES: "Paz",
        nameCZ: "Klid",
        emotions: [
          {
            id: "peaceful",
            nameEN: "Peaceful",
            nameES: "Pacífico",
            nameCZ: "Klidný",
          },
          {
            id: "calm",
            nameEN: "Calm",
            nameES: "Calmado",
            nameCZ: "Mírný",
          },
          {
            id: "compassionate",
            nameEN: "Compassionate",
            nameES: "Compasivo",
            nameCZ: "Soucitný",
          },
          {
            id: "comfortable",
            nameEN: "Comfortable",
            nameES: "Cómodo",
            nameCZ: "Pohodlný",
          },
          {
            id: "rested",
            nameEN: "Rested",
            nameES: "Descansado",
            nameCZ: "Odpočinutý",
          },
          {
            id: "peaceful",
            nameEN: "Peaceful",
            nameES: "Pacífico",
            nameCZ: "Pokojný",
          },
          {
            id: "relaxed",
            nameEN: "Relaxed",
            nameES: "Relajado",
            nameCZ: "Uvolněný",
          },
          {
            id: "reserved",
            nameEN: "Reserved",
            nameES: "Reservado",
            nameCZ: "Zdrženlivý",
          },
          {
            id: "serene",
            nameEN: "Serene",
            nameES: "Sereno",
            nameCZ: "Klidný",
          },
          {
            id: "tranquil",
            nameEN: "Tranquil",
            nameES: "Tranquilo",
            nameCZ: "Klidný",
          },
          {
            id: "placid",
            nameEN: "Placid",
            nameES: "Plácido",
            nameCZ: "Klidný",
          },
        ],
      },
      {
        id: "passion-excitement",
        nameCZ: "Vášeň a nadšení",
        nameEN: "Passion and excitement",
        nameES: "Pasión y entusiasmo",
        emotions: [
          {
            id: "passionate",
            nameEN: "Passionate",
            nameES: "Apasionado",
            nameCZ: "Vášnivý",
          },
          {
            id: "attracted",
            nameEN: "Attracted",
            nameES: "Atraído",
            nameCZ: "Přitahovaný",
          },
          {
            id: "captivated",
            nameEN: "Captivated",
            nameES: "Cautivado",
            nameCZ: "Uchvácený",
          },
          {
            id: "excited",
            nameEN: "Excited",
            nameES: "Emocionado",
            nameCZ: "Vzrušený",
          },
          {
            id: "in-love",
            nameEN: "In love",
            nameES: "Enamorado",
            nameCZ: "Zamilovaný",
          },
          {
            id: "fascinated",
            nameEN: "Fascinated",
            nameES: "Fascinado",
            nameCZ: "Fascinovaný",
          },
          {
            id: "inspired",
            nameEN: "Inspired",
            nameES: "Inspirado",
            nameCZ: "Inspirativní",
          },
          {
            id: "motivated",
            nameEN: "Motivated",
            nameES: "Motivado",
            nameCZ: "Motivovaný",
          },
          {
            id: "romantic",
            nameEN: "Romantic",
            nameES: "Romántico",
            nameCZ: "Romantický",
          },
          {
            id: "thrilled",
            nameEN: "Thrilled",
            nameES: "Emocionado",
            nameCZ: "Vzrušený",
          },
        ],
      },
    ],
  },
  {
    id: "negative",
    nameEN: "Negative",
    nameES: "Negativo",
    nameCZ: "Negativní",
    emotions: [
      {
        id: "fear",
        nameEN: "Fear",
        nameES: "Miedo",
        nameCZ: "Strach",
        emotions: [
          {
            id: "afraid",
            nameEN: "Afraid",
            nameES: "Asustado",
            nameCZ: "Vyděšený",
          },
          {
            id: "anxious",
            nameEN: "Anxious",
            nameES: "Ansioso",
            nameCZ: "Úzkostlivý",
          },
          {
            id: "nervous",
            nameEN: "Nervous",
            nameES: "Nervioso",
            nameCZ: "Nervózní",
          },
          {
            id: "scared",
            nameEN: "Scared",
            nameES: "Asustado",
            nameCZ: "Vyděšený",
          },
          {
            id: "terrified",
            nameEN: "Terrified",
            nameES: "Aterrorizado",
            nameCZ: "Vyděšený",
          },
          {
            id: "worried",
            nameEN: "Worried",
            nameES: "Preocupado",
            nameCZ: "Ustaraný",
          },
          {
            id: "paranoid",
            nameEN: "Paranoid",
            nameES: "Paranoico",
            nameCZ: "Paranoidní",
          },
          {
            id: "insecure",
            nameEN: "Insecure",
            nameES: "Inseguro",
            nameCZ: "Nesmělý",
          },
          {
            id: "frightened",
            nameEN: "Frightened",
            nameES: "Asustado",
            nameCZ: "Vyděšený",
          },
          {
            id: "helpless",
            nameEN: "Helpless",
            nameES: "Impotente",
            nameCZ: "Bezmocný",
          },
        ],
      },
      {
        id: "sadness",
        nameEN: "Sadness",
        nameES: "Tristeza",
        nameCZ: "Smutek",
        emotions: [
          {
            id: "depressed",
            nameEN: "Depressed",
            nameES: "Deprimido",
            nameCZ: "Depresivní",
          },
          {
            id: "disappointed",
            nameEN: "Disappointed",
            nameES: "Decepcionado",
            nameCZ: "Zklamaný",
          },
          {
            id: "grief",
            nameEN: "Grief",
            nameES: "Dolor",
            nameCZ: "Zármutek",
          },
          {
            id: "heartbroken",
            nameEN: "Heartbroken",
            nameES: "Destrozado",
            nameCZ: "Zlomený srdce",
          },
          {
            id: "melancholic",
            nameEN: "Melancholic",
            nameES: "Melancólico",
            nameCZ: "Melancholický",
          },
          {
            id: "miserable",
            nameEN: "Miserable",
            nameES: "Miserable",
            nameCZ: "Bídný",
          },
          {
            id: "sad",
            nameEN: "Sad",
            nameES: "Triste",
            nameCZ: "Smutný",
          },
          {
            id: "sorrowful",
            nameEN: "Sorrowful",
            nameES: "Dolorido",
            nameCZ: "Ubohý",
          },
          {
            id: "unhappy",
            nameEN: "Unhappy",
            nameES: "Infeliz",
            nameCZ: "Nespokojený",
          },
          {
            id: "heartache",
            nameEN: "Heartache",
            nameES: "Dolor de corazón",
            nameCZ: "Bolest srdce",
          },
        ],
      },
      {
        id: "anger",
        nameEN: "Anger",
        nameES: "Ira",
        nameCZ: "Hněv",
        emotions: [
          {
            id: "angry",
            nameEN: "Angry",
            nameES: "Enojado",
            nameCZ: "Naštvaný",
          },
          {
            id: "annoyed",
            nameEN: "Annoyed",
            nameES: "Molesto",
            nameCZ: "Nervózní",
          },
          {
            id: "enraged",
            nameEN: "Enraged",
            nameES: "Enfurecido",
            nameCZ: "Rozzlobený",
          },
          {
            id: "frustrated",
            nameEN: "Frustrated",
            nameES: "Frustrado",
            nameCZ: "Frustrující",
          },
          {
            id: "irritated",
            nameEN: "Irritated",
            nameES: "Irritado",
            nameCZ: "Iritovaný",
          },
          {
            id: "outraged",
            nameEN: "Outraged",
            nameES: "Indignado",
            nameCZ: "Pohoršený",
          },
          {
            id: "resentful",
            nameEN: "Resentful",
            nameES: "Resentido",
            nameCZ: "Nahneván",
          },
          {
            id: "aggressive",
            nameEN: "Aggressive",
            nameES: "Agresivo",
            nameCZ: "Agresivní",
          },
          {
            id: "furious",
            nameEN: "Furious",
            nameES: "Furioso",
            nameCZ: "Vzteklý",
          },
          {
            id: "hostile",
            nameEN: "Hostile",
            nameES: "Hostil",
            nameCZ: "Nepřátelský",
          },
        ],
      },
      {
        id: "disgust",
        nameEN: "Disgust",
        nameES: "Asco",
        nameCZ: "Odpad",
        emotions: [
          {
            id: "disgusted",
            nameEN: "Disgusted",
            nameES: "Asqueado",
            nameCZ: "Odporný",
          },
          {
            id: "contempt",
            nameEN: "Contempt",
            nameES: "Desprecio",
            nameCZ: "Pohrdání",
          },
          {
            id: "revolted",
            nameEN: "Revolted",
            nameES: "Indignado",
            nameCZ: "Pobouřený",
          },
          {
            id: "repulsed",
            nameEN: "Repulsed",
            nameES: "Repugnado",
            nameCZ: "Znechucený",
          },
          {
            id: "nauseated",
            nameEN: "Nauseated",
            nameES: "Nauseabundo",
            nameCZ: "Nevolný",
          },
          {
            id: "disdain",
            nameEN: "Disdain",
            nameES: "Desprecio",
            nameCZ: "Pohrdání",
          },
          {
            id: "abhorrence",
            nameEN: "Abhorrence",
            nameES: "Aborrecimiento",
            nameCZ: "Odmítání",
          },
          {
            id: "detest",
            nameEN: "Detest",
            nameES: "Detestar",
            nameCZ: "Nesnášet",
          },
          {
            id: "sickened",
            nameEN: "Sickened",
            nameES: "Enfermo",
            nameCZ: "Nemocný",
          },
          {
            id: "repelled",
            nameEN: "Repelled",
            nameES: "Repelido",
            nameCZ: "Odpuzený",
          },
        ],
      },
      {
        id: "stress",
        nameEN: "Stress",
        nameES: "Estrés",
        nameCZ: "Stres",
        emotions: [
          {
            id: "stressed",
            nameEN: "Stressed",
            nameES: "Estresado",
            nameCZ: "Stresovaný",
          },
          {
            id: "overwhelmed",
            nameEN: "Overwhelmed",
            nameES: "Abrumado",
            nameCZ: "Přemáhaný",
          },
          {
            id: "burned-out",
            nameEN: "Burned out",
            nameES: "Quemado",
            nameCZ: "Vyhořelý",
          },
          {
            id: "tense",
            nameEN: "Tense",
            nameES: "Tenso",
            nameCZ: "Napjatý",
          },
          {
            id: "anxious",
            nameEN: "Anxious",
            nameES: "Ansioso",
            nameCZ: "Úzkostlivý",
          },
          {
            id: "pressured",
            nameEN: "Pressured",
            nameES: "Presionado",
            nameCZ: "Pod tlakem",
          },
          {
            id: "burdened",
            nameEN: "Burdened",
            nameES: "Atrapado",
            nameCZ: "Zatížený",
          },
          {
            id: "exhausted",
            nameEN: "Exhausted",
            nameES: "Agotado",
            nameCZ: "Vyčerpaný",
          },
          {
            id: "worried",
            nameEN: "Worried",
            nameES: "Preocupado",
            nameCZ: "Ustaraný",
          },
          {
            id: "nervous",
            nameEN: "Nervous",
            nameES: "Nervioso",
            nameCZ: "Nervózní",
          },
        ],
      },
    ],
  },
];

// Take the language from the URL from the `lang` query parameter
const lang = new URLSearchParams(window.location.search).get("lang") || "en";
const nameProp = `name${lang.toUpperCase()}`;

function getList(items: Emotion[]) {
  const list = document.createElement("ul");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item[nameProp];
    li.className =
      "list-none py-2 border-b border-gray-400 hover:bg-gray-200 cursor-pointer transition duration-200 ease-in-out text-center";
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
