<?php
    // extract($_GET)
    $file = "studentList.txt";
    $contents = explode("\n", trim(file_get_contents($file)));
    $infos = explode(",", trim($_GET["info"]));

    $return_str = "<table><tr><th>First Name</th><th>Last Name</th><th>Major</th><th>SCU Email</th><th>Interest</th></tr>";
    foreach ($contents as $initItems) {
        $return_str .= $initItems;
    }

    $table_items = "<tr>";
    foreach ($infos as $elem) {
        if ($elem != "") {
            $table_items .= "<td>" . $elem . "</td>";
        }
    }
    $table_items .= "</tr>\n";
    $return_str .= $table_items;

    $return_str .= "</table>";

    file_put_contents($file, $table_items, FILE_APPEND);
    echo $return_str;
?>