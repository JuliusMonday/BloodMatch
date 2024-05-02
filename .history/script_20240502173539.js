const checkBloodCompatibility = () =>{
    let selectedBloodType = document.getElementById("selectBloodType").value;
    let compatibilityResult = document.getElementById("compatibilityResult");
    let canDonateTo = document.querySelectorAll(".donate-to-bg");
    let canReceiveFrom = document.querySelectorAll("receive-from-bg");
    let canMarry = document.querySelectorAll(".compatible-Gns");
    let cannotMary = document.querySelectorAll(".non-compatible-Gns")
   
  
    // Logic to determine compatible blood types
    switch(selectedBloodType) {
      case "A+":
        canDonateTo = 
        break;
      case "A-":
        
        break;
      case "B+":
        
        break;
      case "B-":
        
        break;
      case "AB+":
      
        break;
      case "AB-":
        
        break;
      case "O+":
       
        break;
      case "O-":
        
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
  