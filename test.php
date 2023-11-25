<!DOCTYPE HTML>
<html>
<head>
	<title>Photos</title>
</head>
<body>
	<?php
	echo "<title>Finally We did it </title>";
	echo "<p>Now you can start building your own website
	or projects </p>";

	$i = 0;
	print nl2br("$i is zero\n");

	$date = date("m/d/y h:i:s a"); //currently in greenwich time, how do change timezone?
	echo $date . "<br>";

	$file = "datelog.txt";
	$filetext = file_get_contents($file);

	$newtext .= $date . "\n";

	file_put_contents($file, $newtext, FILE_APPEND);

	echo $text;

	?>
</body>
</html>