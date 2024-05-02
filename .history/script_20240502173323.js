const checkBloodCompatibility = () =>{
    let selectedBloodType = document.getElementById("selectBloodType").value;
    let compatibilityResult = document.getElementById("compatibilityResult");
    let canDonateTo = document.querySelectorAll(".donate-to");
    let canReceiveFrom = document.querySelectorAll("receive-from-bg");
    let canMarry = document.querySelectorAll(".")
    let compatibleBloodTypes = "";
  
    // Logic to determine compatible blood types
    switch(selectedBloodType) {
      case "A+":
        compatibleBloodTypes = "sample";
        break;
      case "A-":
        compatibleBloodTypes = "SAMPLE";
        break;
      case "B+":
        compatibleBloodTypes = "SAMPLE";
        break;
      case "B-":
        compatibleBloodTypes = "SAMPLE";
        break;
      case "AB+":
        compatibleBloodTypes = "SAMPLE";
        break;
      case "AB-":
        compatibleBloodTypes = "sample";
        break;
      case "O+":
        compatibleBloodTypes = "SAMPLE";
        break;
      case "O-":
        compatibleBloodTypes = "sample";
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
      case "SC":
        compatibleGenotypes = "SC"  
    }
  
    genotypeResult.textContent = `<h1>Compatible genotypes: " + compatibleGenotypes</h1>"`;
  }
  