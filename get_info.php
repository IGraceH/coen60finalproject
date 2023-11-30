<?php
    $file = "studentList.txt";
    file_put_contents($file, $_GET["info"] . "\n", FILE_APPEND);
    $contents = explode("\n", trim(file_get_contents($file)));

    $return_str = "<table><tr><th>First Name</th><th>Last Name</th><th>Major</th><th>SCU Email</th><th>Interest</th></tr>";
    foreach ($contents as $lines) {
        $return_str .= "<tr>";
        foreach (explode(",", trim($lines)) as $elem) {
            $return_str .= "<td>" . $elem . "</td>";
        }
        $return_str .= "</tr>";
    }
    $return_str .= "</table>";
    echo $return_str;
?>