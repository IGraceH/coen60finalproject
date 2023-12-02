<?php
    $file = "studentList.txt";
    // $debugF = "debugFile.txt";
    $currentEntry = trim($_GET["info"]); // current entry in string format
    $currentEntryList = explode(",", trim($_GET["info"])); // current entry in list format

    $duplicate = false;
    $contents = explode("\n", trim(file_get_contents($file)));
    $return_str = "<table><tr><th>First Name</th><th>Last Name</th><th>Major</th><th>SCU Email</th><th>Interest</th></tr>";
    
    // go through each line from file, check if there are any duplicate emails
    foreach ($contents as $lines) {
        $one = explode(",", trim($lines));
        $major = $one[2];
        $return_str .= "<tr class=" . $major . ">";
        foreach ($one as $elem) {
            $return_str .= "<td class=\"" . $major . " student-table-items\">" . $elem . "</td>";
        }
        if ($one[3] == $currentEntryList[3]) {
            $duplicate = true;
        }
        $return_str .= "</tr>";
    }

    // if a duplicated email is not found, add current entry to table & text file
    // otherwise, skip the line and return the current file contents
    if ($duplicate == false) {
        $major = $currentEntryList[2];
        $return_str .= "<tr class=" . $major . ">";
        foreach ($currentEntryList as $items) {
            $return_str .= "<td class=\"" . $major . " student-table-items\">" . $items . "</td>";
        }
        $return_str .= "</tr>";
        file_put_contents($file, $currentEntry . "\n", FILE_APPEND);
    } 
    $return_str .= "</table>";
    
    // file_put_contents($debugF, $return_str . "\n", FILE_APPEND);
    // return file contents + new entry (if not duplicate) in HTML table format
    echo $return_str;
?>