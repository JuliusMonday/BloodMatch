const checkBloodCompatibility = () =>{
    let selectedBloodType = document.getElementById("selectBloodType").value;
    // let compatibilityResult = document.getElementById("compatibilityResult");
    let canDonateTo = document.getElementById("donate-to-bg");
    let canReceiveFrom = document.getElementById("receive-from-bg");
    let canMarry = document.querySelectorAll(".compatible-Gns");
    let cannotMary = document.querySelectorAll(".non-compatible-Gns")
   
  
    // Logic to determine compatible blood types
    switch(selectedBloodType) {
      case "A+":
        canDonateTo.innerHtml = `You can only donate blood to: A+ and AB+ only`;
        canReceiveFrom.innerHtml = `You can only receive blood from: A+, A-, O+, and O-`;
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
    
  }
  
  const checkGenotypeCompatibility = () => {
    let selectedGenotype = document.getElementById("selectGenotype").value;
    let genotypeResult = document.getElementById("genotypeResult");
    
  
    // Logic to determine compatible genotypes
    switch(selectedGenotype) {
      case "AA":
        
        break;
      case "AS":
       
        break;
      case "SS":
       
        break;
      case "SC":
         
    }
  
    genotypeResult.textContent = `<h1>Compatible genotypes: " + compatibleGenotypes</h1>"`;
  }
  