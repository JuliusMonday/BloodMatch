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
        canDonateTo.textContent = `You can only donate blood to: A+ and AB+ only`;
        canReceiveFrom.textContent = `You can only receive blood from: A+, A-, O+, and O-`;
        break;
      case "A-":
        canDonateTo.textContent = `You can only donate blood to: A+, A-, AB+, AB- only`;
        canReceiveFrom.textContent = `You can only receive blood from: A-, and O-`;
        break;
      case "B+":
        canDonateTo.textContent = `You can only donate blood to: A+ and AB+ only`;
        canReceiveFrom.textContent = `You can only receive blood from: B+, and AB+`;
        break;
      case "B-":
        canDonateTo.textContent = `You can only donate blood to: AB-, AB+, B+, and B- only`;
        canReceiveFrom.textContent = `You can only receive blood from: B-, and O-`;
        break;
      case "AB+":
        canDonateTo.textContent = `You can only donate blood to: AB+ only`;
        canReceiveFrom.textContent = `You can only receive blood from: EVERYONE✨✔🙌`;
        break;
      case "AB-":
        canDonateTo.textContent = `You can only donate blood to: AB+ and AB- only`;
        canReceiveFrom.textContent = `You can only receive blood from: AB-, A-, B-, and O-`;
        break;
      case "O+":
        canDonateTo.textContent = `You can only donate blood to: A+, AB+, B+, AND O+ only`;
        canReceiveFrom.textContent = `You can only receive blood from: O+, and O-`;
        break;
      case "O-":
        canDonateTo.textContent = `You can only donate blood to: EVERYONE✨✔🙌`;
        canReceiveFrom.textContent = `You can only receive blood from: Only O-`;
        break;
    }
    
  }
  
  const checkGenotypeCompatibility = () => {
    let selectedGenotype = document.getElementById("selectGenotype").value;
    let canMarry = document.querySelectorAll(".compatible-Gns");
    let cannotMary = document.querySelectorAll(".non-compatible-Gns")
       
  
    // Logic to determine compatible genotypes
    switch(selectedGenotype) {
      case "AA x AA":
        canMarry.textContent = `Compatible Genotypes for Marriage: AA, AS`
        cannotMary.textContent = `Incompatible Genotypes for Marriage: SS, SC`
        break;
      case "AA x AS":
        canMarry.textContent = `Compatible Genotypes for Marriage: AA, AS, SS`
        cannotMary.textContent = `Incompatible Genotypes for Marriage: SS, SC`
        break;
      case "AS x AS":
       
        break;
      case "AS x SS":
        
      case "AS x SS":
         
    }
  
    genotypeResult.textContent = `<h1>Compatible genotypes: " + compatibleGenotypes</h1>"`;
  }
  