<?php
    $file = "studentList.txt";
    $currentUserFile = "current-user.txt";
    $debugF = "debugFile.txt";

    // only includes: firstname:;lastname:;major:;interests:;delete(true/false)
    $currentEntry = trim($_GET["info"]); // current entry in string format
    $currentEntryList = explode(":;", trim($_GET["info"])); // current entry in list format
    $currentUser = explode(":;", trim(file_get_contents($currentUserFile)));\
    $currentUserEmail = $currentUser[0];

    $duplicate = false;
    $contents = explode("\n", trim(file_get_contents($file)));
    $return_str = "<table><tr><th class=student-table-header>First Name</th><th class=student-table-header>Last Name</th><th class=student-table-header>Major</th><th class=student-table-header>SCU Email</th><th class=student-table-header>Interest</th></tr>";
    
    file_put_contents($debugF, $currentEntry, FILE_APPEND);

    $new_contents = "";
    foreach ($contents as $lines) {
        $one = trim($lines);
        $oneList = explode(":;", trim($lines));
        $major = $oneList[2];
        
        if ($currentEntryList[4] == "1") { // user wants to delete themselves
            if ($oneList[3] != $currentUserEmail) {
                $new_contents .= $one . "\n";
                $return_str .= "<tr class=" . $major . ">";
                for ($i = 2; $i < 6; $i++) {
                    $return_str .= "<td class=\"" . $major . " student-table-items\">" . $oneList[$i] . "</td>";
                }
                $return_str .= "</tr>";
            }
        } else { // user doesn't want to delete themselves
            $new_contents .= $one . "\n";
            $return_str .= "<tr class=" . $major . ">";
            for ($i = 2; $i < 6; $i++) {
                $return_str .= "<td class=\"" . $major . " student-table-items\">" . $oneList[$i] . "</td>";
            }
            $return_str .= "</tr>";
        }
    }

    echo $return_str;

    // STILL DO STUFF FOR WHEN USER CHANGES CONTENTS


            // // go through each line from file, check if there are any duplicate emails
            // foreach ($contents as $lines) {
            //     $one = explode(":;", trim($lines));
            //     $major = $one[2];
            //     $return_str .= "<tr class=" . $major . ">";
            //     for ($i = 2; $i < 6; $i++) {
            //         $return_str .= "<td class=\"" . $major . " student-table-items\">" . $one[$i] . "</td>";
            //     }
            //     if ($one[3] == $currentEntryList[3]) {
            //         $duplicate = true;
            //     }
            //     $return_str .= "</tr>";
            // }

            // // if a duplicated email is not found, add current entry to table & text file
            // // otherwise, skip the line and return the current file contents
            // if ($duplicate == false && sizeOf($currentEntryList) == 5) {
            //     $major = $currentEntryList[2];
            //     $return_str .= "<tr class=" . $major . ">";
            //     foreach ($currentEntryList as $items) {
            //         $return_str .= "<td class=\"" . $major . " student-table-items\">" . $items . "</td>";
            //     }
            //     $return_str .= "</tr>";
            //     file_put_contents($file, $currentEntry . "\n", FILE_APPEND);
            // } 
            // $return_str .= "</table>";
            
            // // return file contents + new entry (if not duplicate) in HTML table format
            // echo $return_str;
?>