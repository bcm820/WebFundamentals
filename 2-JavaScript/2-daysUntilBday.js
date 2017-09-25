
function daysUntilBday(days){
    while (days > 30){
        console.log(days + " days until my birthday. Such a long time...")
        days = days - 1;
    }
    while (days <= 30 && days > 5){
        console.log("There's only " + days + " days until my birthday! I can't wait!")
        days = days - 1;
    }
    while (days <= 5 && days > 0){
        console.log("MY BIRTHDAY IS IN JUST " + days + " DAYS!!!!!!!!@!@!!! LOLLLL")
        days = days - 1;
    }
    if (days === 0){
        console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*")
        console.log("♪ღ♪  ♪ღ♪ ░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░   ♪ღ♪ ♪ღ♪")
        console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*")
    }
}

daysUntilBday(60);