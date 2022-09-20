function scuberGreetingForFeet(distance){
  if (distance <= 400){
    return "This one is on me!"
  }
  else if (distance < 2500 && distance > 2000){
    return "I will gladly take your thirty bucks."
  }
  else if (distance > 2500) {
    return "No can do."
  }

    
  }



function ternaryCheckCity(place){
  const city = 'NYC'
  const cityMessage = (place === city) ? "Ok, sounds good." : "No go.";
  return cityMessage
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case "generous" : return "Thank you so much.";
    case "not as generous" : return "Thank you."
    default : return "Bye."
    
}
}