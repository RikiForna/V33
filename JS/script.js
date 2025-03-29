"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const languageSelect = document.getElementById("language-select");
  const texts = {
    it: {
      home: "Home",
      features: "Caratteristiche",
      pricing: "Prezzi",
      contact: "Contatti",
      selectLang: "Seleziona la lingua:",
      wineTitle: "Vino Rosso",
      alcoholContent: "V33",
      ingredients: "Ingredienti",
      ingredient: "Ingrediente",
      quantity: "Quantità",
      grapes: "UVA",
      must: "MOSTO DI UVE CONCENTRATO",
      preservatives: "CONSERVANTI E ANTIOSSIDANTI",
      stabilizers: "AGENTI STABILIZZANTI",
      nutrition: "Valori Nutrizionali (per 100ml)",
      component: "Componente",
      value: "Valore",
      energy: "Energia",
      fats: "Grassi",
      saturatedFats: "di cui grassi saturi",
      carbohydrates: "Carboidrati",
      sugars: "di cui zuccheri",
      proteins: "Proteine",
      fibers: "Fibre",
      salt: "Sale",
      recycling: "Raccolta Differenziata",
      material: "Materiale",
      code: "Codice",
      disposal: "Raccolta Differenziata",
      damigiana: "Damigiana",
      cap: "Tappo",
      capsule: "Capsula",
      tagliandino: "Tagliandino",
      woodenCage: "Gabbia di legno",
      plasticCage: "Gabbia di plastica",
      disclaimer: "VERIFICARE LE DISPOSIZIONI DEL PROPRIO COMUNE",
      plastica: "Plastica",
      carta: "Carta",
      disposal_dedicated: "Raccolta Differenziata Dedicata",
      glass: "Vetro",
      aluminum: "Alluminio",
      aluminumALU41: "ALU41 (ALLUMINIO)",
      glassGL71: "GL71 (VETRO)",
      plasticLDPE4: "LDPE4 (PLASTICA)",
      paperPAP20: "PAP20 (CARTA)",
      woodFOR50: "FOR50 (LEGNO)",
    },
    en: {
      home: "Home",
      features: "Features",
      pricing: "Pricing",
      contact: "Contact",
      selectLang: "Select Language:",
      wineTitle: "Red Wine",
      alcoholContent: "V33",
      ingredients: "Ingredients",
      ingredient: "Ingredient",
      quantity: "Quantity",
      grapes: "GRAPES",
      must: "CONCENTRATED GRAPE MUST",
      preservatives: "PRESERVATIVES AND ANTIOXIDANTS",
      stabilizers: "STABILIZING AGENTS",
      nutrition: "Nutritional Values (per 100ml)",
      component: "Component",
      value: "Value",
      energy: "Energy",
      fats: "Fats",
      saturatedFats: "of which saturated fats",
      carbohydrates: "Carbohydrates",
      sugars: "of which sugars",
      proteins: "Proteins",
      fibers: "Fibers",
      salt: "Salt",
      recycling: "Recycling",
      material: "Material",
      code: "Code",
      disposal: "Recycling",
      damigiana: "Demijohn",
      cap: "Cap",
      capsule: "Capsule",
      tagliandino: "Tag",
      woodenCage: "Wooden Cage",
      plasticCage: "Plastic Cage",
      disclaimer: "CHECK YOUR LOCAL REGULATIONS",
      plastica: "Plastic",
      carta: "Paper",
      disposal_dedicated: "Dedicated Recycling",
      glass: "Glass",
      aluminum: "Aluminum",
      aluminumALU41: "ALU41 (ALUMINUM)",
      glassGL71: "GL71 (GLASS)",
      plasticLDPE4: "LDPE4 (PLASTIC)",
      paperPAP20: "PAP20 (PAPER)",
      woodFOR50: "FOR50 (WOOD)",
    },
  };

  function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach((element) => {
      const key = element.getAttribute("data-lang");
      if (texts[lang][key]) {
        element.innerText = texts[lang][key];
      }
    });
    localStorage.setItem("selectedLanguage", lang);
  }

  // Imposta sempre l'italiano quando la pagina viene caricata
  const savedLang = "it";
  languageSelect.value = savedLang;
  changeLanguage(savedLang);

  languageSelect.addEventListener("change", function () {
    changeLanguage(this.value);
  });
});
