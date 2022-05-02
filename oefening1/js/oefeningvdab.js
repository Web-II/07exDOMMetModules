import { VacaturesRepository } from "./vacatureRepository.js";

class VdabComponent {
  #zoektermen = [];
  #vacaturesRepository;
  #storage;
  constructor(window) {
    this.#vacaturesRepository = new VacaturesRepository();
    this.#storage = window.localStorage;
  }

  get vacaturesRepository() {
    return this.#vacaturesRepository;
  }
  get zoektermen() {
    return this.#zoektermen;
  }
  get storage() {
    return this.#storage;
  }

  voegZoektermToe(zoekterm) {
  }

  verwijderZoekterm(zoekterm) {
  }

  getZoektermenFromStorage() {
  }

  setZoektermenInStorage() {
  }

  showResultaat() {
    this.zoektermenToHtml();
    this.vacaturesToHtml();
  }

  zoektermenToHtml() {  
  }

  vacaturesToHtml() {
    document.getElementById("resultaat").innerHTML = "";
    this.#vacaturesRepository
      .filterOpZoekTermen(this.#zoektermen)
      .forEach((vacature) => {
        const divElement = document.createElement("div");
        const h2Element = document.createElement("h2");
        const h2Text = document.createTextNode(vacature.titel);
        h2Element.setAttribute("class", "vacatureTitel");
        h2Element.appendChild(h2Text);
        const h3Element = document.createElement("h3");
        const h3Text = document.createTextNode(
          vacature.bedrijf + " - " + vacature.plaats
        );
        h3Element.appendChild(h3Text);
        const h4Element1 = document.createElement("h4");
        const h4Text1 = document.createTextNode("Functieomschrijving");
        h4Element1.appendChild(h4Text1);
        const pElement = document.createElement("p");
        const pText = document.createTextNode(vacature.functieomschrijving);
        pElement.appendChild(pText);
        const h4Element2 = document.createElement("h4");
        const h4Text2 = document.createTextNode("Profiel");
        h4Element2.appendChild(h4Text2);
        const ulElement = document.createElement("ul");
        vacature.profiel.forEach((item) => {
          const liElement = document.createElement("li");
          const liText = document.createTextNode(item);
          liElement.appendChild(liText);
          ulElement.appendChild(liElement);
        });
        divElement.appendChild(h2Element);
        divElement.appendChild(h3Element);
        divElement.appendChild(h4Element1);
        divElement.appendChild(pElement);
        divElement.appendChild(h4Element2);
        divElement.appendChild(ulElement);
        document.getElementById("resultaat").appendChild(divElement);
      });
  }
}

function init() {
   // Testcode Deel 1
  /*
  const vacature = new Vacature(
    '1',
    'JavaScript Front-End Developer',
    'Onze missie de lancering van straffe consultants op even straffe projecten. In dat verhaal zoeken we gedreven Frontend Developers voor projecten bij klanten, lancering alsook opvolging gegarandeerd.',
    [
      'Must have kennis: html5, css3, Gulp, javascript (VanillaJS – Modulair – Unit testen), sass, Progressive enhancement, Mobile First en Brower compatibility issues.',
      'Nice to have kennis: SMACSS, BEM, ESLint, scss-lint, Thymeleaf en automatische end-to-end testen',
      'Agile mindset en ervaring met Scrum of andere agile-methodes',
      'Teamgericht – samen willen winnen',
      'Gepassioneerd door development'
    ],
    'IT4IT SERVICES',
    'Westerlo'
  );
  console.log(vacature);
  console.log(
    `De vacature bevat één van de zoektermen [javascript, groen]: ${vacature.bevatZoekterm(["javascript", "groen"])}`
  );
  console.log(
    `De vacature bevat één van de zoektermen [werfleider, groen]: ${vacature.bevatZoekterm(["werfleider", "groen"])}`
  ); 
  */
  // Testcode Deel 2
  // const vacatureRepository = new VacaturesRepository();
  // console.log(vacatureRepository.vacatures);
  // console.log(vacatureRepository.filterOpZoekTermen(["javascript", "werfleider"]));
  // console.log(vacatureRepository.filterOpZoekTermen(["groen", "bomen", "planten"]));
  // Deel 3
  
}

window.onload = init;
