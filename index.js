//Fill this aray with things you like (strings)
const kasiasFavoriteFoods = ["pesto","vegetables","nachos","arepas","pizza","cake"]

//
function doesSheLikeThis(food) { console.log(kasiasFavoriteFoods.includes(food)) }

    //Logic to determine if passed food is in her list or not
    //print true/false


function addToFavorites(food) {
    //Logic to add passed item to list
    kasiasFavoriteFoods.push(food)

    //Print "Added <food>"
    console.log("add " + food)

    //Print list after add
    console.log(kasiasFavoriteFoods)
}

function getRandomFood(){
    const randomIndex = Math.floor(Math.random() * kasiasFavoriteFoods.length)
    //Prints random item from list
    console.log(kasiasFavoriteFoods[randomIndex])
}


//TESTS DO NOT MODIFY!!

doesSheLikeThis("papierosy")
doesSheLikeThis("cake")
doesSheLikeThis("vapiano")

addToFavorites("kiwi")
addToFavorites("arepas")
addToFavorites("bao")

getRandomFood()
getRandomFood()
getRandomFood()