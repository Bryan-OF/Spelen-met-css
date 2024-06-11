const buttons = document.querySelectorAll("button");

const setColorMode = (event) => {
	const newColorModeButton = event.currentTarget;

	console.log(newColorModeButton.ariaPressed = "false");

	if ( newColorModeButton.ariaPressed == "false" ) {
		// swap buttons
		const curColorModeButton = document.querySelector('[aria-pressed="true"]');
		newColorModeButton.ariaPressed = "true";
		curColorModeButton.ariaPressed = "false";

		// set new color mode
		const newColorMode = newColorModeButton.id;
		document.documentElement.dataset.colorMode = newColorModeButton.id;
	}
}

buttons.forEach( button => {
	button.onclick = setColorMode;
});