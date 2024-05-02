const checkBloodCompatibility = () {
    let selectedBloodType = document.getElementById("selectBloodType").value;
    let compatibilityResult = document.getElementById("compatibilityResult");
    let compatibleBloodTypes = "";
  
    // Logic to determine compatible blood types
    switch(selectedBloodType) {
      case "A":
        compatibleBloodTypes = "A, AB";
        break;
      case "B":
        compatibleBloodTypes = "B, AB";
        break;
      case "AB":
        compatibleBloodTypes = "AB";
        break;
      case "O":
        compatibleBloodTypes = "A, B, AB, O";
        break;
    }
  
    compatibilityResult.textContent = "Compatible blood types: " + compatibleBloodTypes;
  }
  
  const checkGenotypeCompatibility = () => {
    let selectedGenotype = document.getElementById("selectGenotype").value;
    let genotypeResult = document.getElementById("genotypeResult");
    let compatibleGenotypes = "";
  
    // Logic to determine compatible genotypes
    switch(selectedGenotype) {
      case "AA":
        compatibleGenotypes = "AA";
        break;
      case "AS":
        compatibleGenotypes = "AA, AS";
        break;
      case "SS":
        compatibleGenotypes = "SS";
        break;
    }
  
    genotypeResult.textContent = "Compatible genotypes: " + compatibleGenotypes;
  }
  