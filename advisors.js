/* Be careful of what you touch here pls and thank u
 * printAdvisors() is at the bottom
 */

function getAdvisors(filter) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const extractedContent = this.responseText;
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
			item = item.split(" | ");
			advisors.push({
				name: item[0],
				email: item[1],
				phone: item[2],
				title: item[3],
				department: item[4],
				office: item[5]
			});
		}
	}

	return advisors;
}

/* PRINT ADVISORS
 * Feel free to edit html and added css classes how you please
 */
function printAdvisors(advisors) {
	let content = `<p><i>${advisors.length} results</i></p>`;

	content += "<table id='advisor-table'><tbody>";
	for (let advisor of advisors) {
		content += `<tr><td>
				<h2>${advisor.name}</h2>${advisor.email}
				<div class='table-info-line'></div>
				<table class="advisor-info">
					<tr>
						<td>${advisor.title}</td>
						<td>${advisor.phone}</td>
					</tr>
					<tr>
						<td>${advisor.department}</td>
						<td>${advisor.office}</td>
					</tr>
				</table>
			</td></tr>`;
	}
	content += "</tbody></table>";

	document.getElementById("advisor-list").innerHTML = content;
}