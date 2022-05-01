import { Canvas } from "./canvas.js";
import { UitgavenRepository } from "./uitgavenRepository.js";

class BankComponent {
  #canvasCategorieen;
  #storage;
  #aantalBezoeken;
  #uitgavenRepository;
  constructor(window) {
    this.#canvasCategorieen = new Canvas(50);
    this.#storage = window.localStorage;
    this.#aantalBezoeken = 1;
    this.#uitgavenRepository = new UitgavenRepository();
  }

  get canvasCategorieen() {
    return this.#canvasCategorieen;
  }

  get storage() {
    return this.#storage;
  }
  get aantalBezoeken() {
    return this.#aantalBezoeken;
  }
  get uitgavenRepository() {
    return this.#uitgavenRepository;
  }

  toHtml() {
    this.#canvasCategorieen.tekenen(this.#uitgavenRepository);
    this.tekst();
  }

  tekst() {
  
  }

  getAantalBezoekenFromStorage() {
   
  }

  setAantalBezoekenInStorage() {
  
  }
}

function init() {
    // Testcode Deel 1
  /*
  const uitgave1 = new Uitgave(1, new Date(2018, 2, 2), 25, 'Fnac Veldstraat', 'andere' );
  const uitgave2 = new Uitgave(2, new Date(2018, 2, 2), 560, 'Huur', 'woning');
  console.log(uitgave1);
  console.log(uitgave2);
  */
  // Testcode Deel 2
  /*
  const uitgavenRepository = new UitgavenRepository();
  console.log(uitgavenRepository.uitgaven);
  console.log(uitgavenRepository.geefCategorieen());
  console.log(uitgavenRepository.totaalBedragUitgaven());
  console.log(uitgavenRepository.uitgavenPerCategorie("andere"));  
  */
  // Testcode Deel 3
  /*
  const bankComponent = new BankComponent(this);
  bankComponent.toHtml();
  */

}

window.onload = init;

Date.prototype.datumNotatie = function () {
  const dagen = [
    "Zondag",
    "Maandag",
    "Dinsdag",
    "Woensdag",
    "Donderdag",
    "Vrijdag",
    "Zaterdag",
  ];
  return `${dagen[this.getDay()]} ${this.getDate()}/${
    this.getMonth() + 1
  }/${this.getFullYear()}`;
};
