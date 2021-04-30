function share() {
    let name = prompt("What is your name?")
    let recipe = prompt("Which recipe would you like to share with us?")
    let email = prompt("What is your email?")

    alert("Thank you " + name + "! When we publish your recipe, we'll inform you! 🥰")
}
let shareRecipe = document.querySelector("button");
shareRecipe.addEventListener("click", share);