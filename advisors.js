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
				fname: item[0],
				lname: item[1],
				email: item[2],
				phone: item[3],
				title: item[4],
				department: item[5],
				office: item[6],
				phonebook: item[7]
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
				<h2><a href="https://www.scu.edu/phonebook/${advisor.phonebook}/${advisor.lname}" target="_blank">
					${advisor.fname} ${advisor.lname}
				</a></h2>${advisor.email}
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