//your JS code here. If required.
function getDomLevel(element){
	let level = 0;

	while(element)
		{
			level++;
			element = element.getParentElement;
			
		}
	return level;
}


const targetElement = document.getElementById("level");
const domLevel = getDomLevel(targetElement);

alert(`The level of the element is: ${domLevel}`)