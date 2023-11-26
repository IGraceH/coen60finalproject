/* Be careful of what you touch here pls and thank u
 * printAdvisors() is at the bottom
 */

function getAdvisors(filter) {
	console.log(filter);
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const extractedContent = this.responseText;
        console.log(extractedContent);
        printAdvisors(processContent(extractedContent));
      }
    }
    xmlhttp.open("GET", "get_advisors.php?"+filter, true);
    xmlhttp.send();
}

function processContent(content) {
	let advisors = [];
	if (content.length > 4) {
		content = content.substring(2, content.length-2);
		content = content.split('","')
		for (let item of content) {
			item = item.split(", ");
			advisors.push({name: item[0], email: item[1], expertise: item[2]});
		}
	}
	return advisors;
}

/* PRINT ADVISORS
 * Feel free to edit html and added css classes how you please
 */
function printAdvisors(advisors) {
	let content = "";

	content += "<ul>";
	for (let advisor of advisors) {
		content += `<li>${advisor.name}, ${advisor.email}, ${advisor.expertise}</li>`;
	}
	content += "</ul>";

	document.getElementById("advisor-list").innerHTML = content;
}