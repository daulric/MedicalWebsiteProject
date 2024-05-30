const buttons = document.getElementsByClassName("myButton")

for (const button of buttons) { // Iterate buttons with this class name
    button.addEventListener(
        "click", (e) => {
            console.log(e.target.value)
        }
    )
}