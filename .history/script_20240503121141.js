const checkBloodCompatibility = () =>{
    let selectedBloodType = document.getElementById("selectBloodType").value;
    let canDonateTo = document.getElementById("donate-to-bg");
    let canReceiveFrom = document.getElementById("receive-from-bg");
    let diseaseProneTo = document.getElementById("diseases")
     // Logic to determine compatible blood types
    switch(selectedBloodType) {
      case "A+":
        canDonateTo.textContent = `You can only donate blood to: A+ and AB+ only`;
        canReceiveFrom.textContent = `You can only receive blood from: A+, A-, O+, and O-`;
        diseaseProneTo.textContent = 
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
    let canMarry = document.getElementById("compatible-Gns");
    let cannotMary = document.getElementById("non-compatible-Gns")
       
  
    // Logic to determine compatible genotypes
    switch(selectedGenotype) {
      case "AA x AA":
        canMarry.textContent = `Offspring Genotype Possibilities: AA (all children)`
        cannotMary.textContent = `SCD Risk in Offspring: No SCD risk`
        break;
      case "AA x AS":
        canMarry.textContent = `Offspring Genotype Possibilities: AA (50%) & AS (50%)`
        cannotMary.textContent = `SCD Risk in Offspring: No SCD risk for AA children, AS carriers for 50%`
        break;
      case "AS x AS":
        canMarry.textContent = `Offspring Genotype Possibilities: AA (25%), AS (50%), SS (25%)`
        cannotMary.textContent = `SCD Risk in Offspring: No SCD risk for AA children, 25% chance of SCD for SS children, 50% AS carriers`
        break;
      case "AS x SS":
        canMarry.textContent = `Offspring Genotype Possibilities: AS (50%) & SS (50%)`
        cannotMary.textContent = `SCD Risk in Offspring: 50% chance of SCD for both AS and SS children`
        break;
      case "SS x SS":
        canMarry.textContent = `Offspring Genotype Possibilities: SS (all children)`
        cannotMary.textContent = `SCD Risk in Offspring: All children will have SCD`
        break;
      case "AS x SC":
        canMarry.textContent = `Offspring Genotype Possibilities: AS (variable %), SC (variable %), SS (variable %)`
        cannotMary.textContent = `SCD Risk in Offspring: Varies depending on specific SC genotype - consult a genetic counselor`
         
    }
  }
  