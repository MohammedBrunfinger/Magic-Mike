// Bara ett medelande åt de som rotar i koden.
console.log ("Tjena din lilla svarting varför håller du på och rotar i koden för?!?!") 


const myButton1 = document.getElementById("18+")

myButton1.onclick = ageAccesebility

function ageAccesebility () 
    {const userInput = prompt("Hur gammal är du då Kalle?")
    const age = parseInt(userInput)

    if(isNaN(age) == true){
    console.log("error:User cancled / NaN")
    }
    else if (age < 18) {alert ("Aja Baja, barn får inte kolla på Magic Mikes glas penisskulpturer.")
    }
    else if (age > 70) {
       if( confirm("Är inte du lite för gammal för att kolla på glaspenisar")){
        window.location.href = "glasGalleriet.html";
    }
    
    }
    else{window.location.href = "glasGalleriet.html";} 
    }
