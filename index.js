//Fill this aray with things you like (strings)
const kasiasFavoriteFoods = ["pesto","vegetables","nachos","arepas","pizza","cake"]

//
function doesSheLikeThis(food) { console.log(kasiasFavoriteFoods.includes(food)) }

    //Logic to determine if passed food is in her list or not
    //print true/false


function addToFavorites(food) {
    //Logic to add passed item to list
    //Print "Added <food>"
    //Print list after add

    kasiasFavoriteFoods.push(food)
    console.log("add " + food)
    console.log(kasiasFavoriteFoods)

}

function getRandomFood(){
    //Prints random item from list
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