// index.js
const emotions = [
  {
    name: "Positive",
    emotions: [
      {
        nameEN: "Energy and vitality",
        nameES: "Energía y vitalidad",
        nameCZ: "Energie a vitalita",
        emotions: [
          {
            nameEN: "Active",
            nameES: "Activo",
            nameCZ: "Aktivní",
          },
          {
            nameEN: "Alert",
            nameES: "Alerta",
            nameCZ: "Ostražitý",
          },
          {
            nameEN: "Animated",
            nameES: "Animado",
            nameCZ: "Oživený",
          },
          {
            nameEN: "Bold",
            nameES: "Audaz",
            nameCZ: "Odvážný",
          },
          {
            nameEN: "Competent",
            nameES: "Competente",
            nameCZ: "Schopný",
          },
          {
            nameEN: "Determined",
            nameES: "Decidido",
            nameCZ: "Rozhodnutý",
          },
          {
            nameEN: "Dazzled",
            nameES: "Deslumbrado",
            nameCZ: "Ohromený",
          },
          {
            nameEN: "Energetic",
            nameES: "Energético",
            nameCZ: "Energetický",
          },
          {
            nameEN: "Motivated",
            nameES: "Motivado",
            nameCZ: "Motivovaný",
          },
          {
            nameEN: "Vibrant",
            nameES: "Vivaz",
            nameCZ: "Svižný",
          },
        ],
      },
      {
        nameEN: "Happiness",
        nameES: "Felicidad",
        nameCZ: "Radost a pozitivita",
        emotions: [
          {
            nameEN: "Affectionate",
            nameES: "Afectuoso",
            nameCZ: "Laskavý",
          },
          {
            nameEN: "Grateful",
            nameES: "Agradecido",
            nameCZ: "Vděčný",
          },
          {
            nameEN: "Joyful",
            nameES: "Alegre",
            nameCZ: "Radostný",
          },
          {
            nameEN: "Relieved",
            nameES: "Aliviado",
            nameCZ: "Ulevilo se mi",
          },
          {
            nameEN: "Tranquil",
            nameES: "Apacible",
            nameCZ: "Klidný",
          },
          {
            nameEN: "Loving",
            nameES: "Cariñoso",
            nameCZ: "Laskavý",
          },
          {
            nameEN: "Satisfied",
            nameES: "Contento",
            nameCZ: "Spokojený",
          },
          {
            nameEN: "Warm",
            nameES: "Cordial",
            nameCZ: "Srdečný",
          },
          {
            nameEN: "Pleased",
            nameES: "Complacido",
            nameCZ: "Potěšený",
          },
          {
            nameEN: "Happy",
            nameES: "Feliz",
            nameCZ: "Šťastný",
          },
        ],
      },
      {
        nameEN: "Admiration",
        nameES: "Admiración",
        nameCZ: "Úžas a obdiv",
        emotions: [
          {
            nameEN: "Amazed",
            nameES: "Asombrado",
            nameCZ: "Ohromený",
          },
          {
            nameEN: "Awe",
            nameES: "Asombro",
            nameCZ: "Úžas",
          },
          {
            nameEN: "Fascinated",
            nameES: "Fascinado",
            nameCZ: "Okouzlený",
          },
          {
            nameEN: "Impressed",
            nameES: "Impresionado",
            nameCZ: "Ohromený",
          },
          {
            nameEN: "Respectful",
            nameES: "Respetuoso",
            nameCZ: "Respektující",
          },
          {
            nameEN: "Worshipful",
            nameES: "Reverente",
            nameCZ: "Uctivý",
          },
          {
            nameEN: "Proud",
            nameES: "Orgulloso",
            nameCZ: "Hrdý",
          },
          {
            nameEN: "Satisfied",
            nameES: "Satisfecho",
            nameCZ: "Spokojený",
          },
          {
            nameEN: "Thankful",
            nameES: "Agradecido",
            nameCZ: "Vděčný",
          },
        ],
      },
      {
        nameEN: "Peace",
        nameES: "Paz",
        nameCZ: "Klid",
        emotions: [
          {
            nameEN: "Peaceful",
            nameES: "Pacífico",
            nameCZ: "Klidný",
          },
          {
            nameEN: "Calm",
            nameES: "Calmado",
            nameCZ: "Mírný",
          },
          {
            nameEN: "Compassionate",
            nameES: "Compasivo",
            nameCZ: "Soucitný",
          },
          {
            nameEN: "Comfortable",
            nameES: "Cómodo",
            nameCZ: "Pohodlný",
          },
          {
            nameEN: "Rested",
            nameES: "Descansado",
            nameCZ: "Odpočinutý",
          },
          {
            nameEN: "Peaceful",
            nameES: "Pacífico",
            nameCZ: "Pokojný",
          },
          {
            nameEN: "Relaxed",
            nameES: "Relajado",
            nameCZ: "Uvolněný",
          },
          {
            nameEN: "Reserved",
            nameES: "Reservado",
            nameCZ: "Zdrženlivý",
          },
          {
            nameEN: "Serene",
            nameES: "Sereno",
            nameCZ: "Klidný",
          },
          {
            nameEN: "Tranquil",
            nameES: "Tranquilo",
            nameCZ: "Klidný",
          },
          {
            nameEN: "Placid",
            nameES: "Plácido",
            nameCZ: "Klidný",
          },
        ],
      },
      {
        nameCZ: "Vášeň a nadšení",
        nameEN: "Passion and excitement",
        nameES: "Pasión y entusiasmo",
        emotions: [
          {
            nameEN: "Passionate",
            nameES: "Apasionado",
            nameCZ: "Vášnivý",
            name: "Vášnivý",
          },
          {
            nameEN: "Attracted",
            nameES: "Atraído",
            nameCZ: "Přitahovaný",
            name: "Přitahovaný",
          },
          {
            nameEN: "Captivated",
            nameES: "Cautivado",
            nameCZ: "Uchvácený",
            name: "Uchvácený",
          },
          {
            nameEN: "Excited",
            nameES: "Emocionado",
            nameCZ: "Vzrušený",
            name: "Vzrušený",
          },
          {
            nameEN: "In love",
            nameES: "Enamorado",
            nameCZ: "Zamilovaný",
            name: "Zamilovaný",
          },
          {
            nameEN: "Fascinated",
            nameES: "Fascinado",
            nameCZ: "Fascinovaný",
            name: "Fascinovaný",
          },
          {
            nameEN: "Inspired",
            nameES: "Inspirado",
            nameCZ: "Inspirativní",
            name: "Inspirativní",
          },
          {
            nameEN: "Motivated",
            nameES: "Motivado",
            nameCZ: "Motivovaný",
            name: "Motivovaný",
          },
          {
            nameEN: "Romantic",
            nameES: "Romántico",
            nameCZ: "Romantický",
            name: "Romantický",
          },
          {
            nameEN: "Vibrant",
            nameES: "Vibrante",
            nameCZ: "Vibrující",
            name: "Vibrující",
          },
        ],
      },
      {
        nameCZ: "Bezpečí a důvěra",
        nameEN: "Safety and trust",
        nameES: "Seguridad y confianza",
        emotions: [
          {
            nameEN: "Kind",
            nameES: "Benévolo",
            nameCZ: "Laskavý",
            name: "Laskavý",
          },
          {
            nameEN: "Committed",
            nameES: "Comprometido",
            nameCZ: "Zapojený",
            name: "Zapojený",
          },
          {
            nameEN: "Trustworthy",
            nameES: "Confiable",
            nameCZ: "Důvěryhodný",
            name: "Důvěryhodný",
          },
          {
            nameEN: "Confident",
            nameES: "Confiado",
            nameCZ: "Důvěřující",
            name: "Důvěřující",
          },
          {
            nameEN: "Conscious",
            nameES: "Consciente",
            nameCZ: "Vědomý",
            name: "Vědomý",
          },
          {
            nameEN: "Empowered",
            nameES: "Empoderado",
            nameCZ: "Osvobozený",
            name: "Osvobozený",
          },
          {
            nameEN: "Resolute",
            nameES: "Resuelto",
            nameCZ: "Odecidovaný",
            name: "Odecidovaný",
          },
          {
            nameEN: "Sure",
            nameES: "Seguro",
            nameCZ: "Jistý",
            name: "Jistý",
          },
          {
            nameEN: "Brave",
            nameES: "Valiente",
            nameCZ: "Statečný",
            name: "Statečný",
          },
          {
            nameEN: "Satisfied",
            nameES: "Satisfecho",
            nameCZ: "Spokojený",
            name: "Spokojený",
          },
        ],
      },
    ],
  },
];
function renderEmotions(emotions, parentElement, breadcrumbText = "") {
  if (!Array.isArray(emotions) || emotions.length === 0) {
    return;
  }

  const ul = document.createElement("ul");
  ul.className = "list-disc pl-4 max-w-[600px]";

  const breadcrumb = document.createElement("div");
  breadcrumb.className = "text-gray-500 font-medium mb-2";
  breadcrumb.textContent = breadcrumbText;

  // Create a click event listener for the breadcrumb
  breadcrumb.addEventListener("click", () => {
    // Remove the breadcrumb text
    breadcrumb.textContent = "";
    // Remove the original list and breadcrumb
    ul.remove();
    breadcrumb.remove();
    // Render the top-level emotions
    renderEmotions(emotions, parentElement);
  });

  emotions.forEach((emotion) => {
    const li = document.createElement("li");
    li.className =
      "list-none py-2 border-b border-gray-400 hover:bg-gray-200 cursor-pointer transition duration-200 ease-in-out text-center";
    li.textContent = emotion[`name${(new URLSearchParams(window.location.search).get("lang")||'en').toUpperCase()}`];
    li.addEventListener("click", () => {
      // Remove the highlight class from all list items
      ul.querySelectorAll("li").forEach((item) => {
        item.classList.remove("bg-yellow-200");
      });
      // Add the highlight class to the clicked list item
      li.classList.add("bg-yellow-200");
      // Update the breadcrumb text
      breadcrumb.textContent = breadcrumbText ? `${breadcrumbText} > ${li.textContent}` : li.textContent;
      // Create a new list of children of the selected emotion
      const children = emotion.emotions || [];
      if (children.length === 0) {
        return;
      }
      // Remove the original list and breadcrumb
      ul.remove();
      breadcrumb.remove();
      // Render the children recursively
      renderEmotions(children, parentElement, breadcrumb.textContent);
    });
    ul.appendChild(li);
  });

  parentElement.appendChild(breadcrumb);
  parentElement.appendChild(ul);
}

const emotionsContainer = document.getElementById("emotions-container");
renderEmotions(emotions[0].emotions, emotionsContainer, emotions[0].name);