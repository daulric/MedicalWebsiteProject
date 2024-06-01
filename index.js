const buttons = document.getElementsByClassName("navbar")

for (const button of buttons) { // Iterate buttons with this class name
    button.addEventListener(
        "click", (e) => {
            console.log("Clicked Test!")
        }
    )
}