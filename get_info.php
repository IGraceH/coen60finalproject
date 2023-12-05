<?php
    // files
    $student_list_read = "studentList.txt";
    $currentUserFile = "current-user.txt";
    // $debugF = fopen("debugFile.txt", "a+") or die ("Unable to open file!");

    // only includes: firstname:;lastname:;major:;interests:;delete(true/false)
    $currentEntry = trim($_GET["info"]); // current entry in string format
    $currentEntryList = explode(":;", trim($_GET["info"])); // current entry in list format

    $currentUser = trim(file_get_contents($currentUserFile)); // current user line in string format
    $currentUserList = explode(":;", trim(file_get_contents($currentUserFile))); // current user line in list format
    $currentUserEmail = $currentUserList[0]; // current user email

    $duplicate = false;
    $contents = explode("\n", trim(file_get_contents($student_list_read)));
    $return_str = "<table><tr><th class=student-table-header>First Name</th><th class=student-table-header>Last Name</th><th class=student-table-header>Major</th><th class=student-table-header>SCU Email</th><th class=student-table-header>Interest</th></tr>";
    
    $student_list_write = fopen("studentList.txt", "w+") or die("Unable to open file!");
    $new_contents = "";
    foreach ($contents as $lines) {
        $oneList = explode(":;", trim($lines));
        $major = $oneList[4];        

        // if the user's email is matches the ones in the student list OR when the current user file is empty OR no info is provided yet by the user logged in
        if ($oneList[0] != $currentUserEmail || $currentUserEmail == "" || sizeof($currentEntryList) == 1) { // if line is not the current user, add that into new_str and return_str
            $new_contents .= $lines . "\n";
            $return_str .= "<tr class=" . $major . ">";
            for ($i = 2; $i < 6; $i++) {
                $return_str .= "<td class=\"" . $major . " student-table-items\">" . $oneList[$i] . "</td>";
                if ($i == 4) {
                    $return_str .= "<td class=\"" . $major . " student-table-items\">" . $oneList[0] . "</td>";
                }
            }
            $return_str .= "</tr>";
        } // otherwise: current line = current user, so skip the line
        
    }

    if ($currentEntryList[4] == "0") {
        $new_contents .= $currentUser . ":;";
        $major = $currentEntryList[2];
        for ($i = 0; $i < 4; $i++) {
            $new_contents .= $currentEntryList[$i];
            if ($i != 3) {
                $new_contents .= ":;";
            }
        }
        $return_str .= "<tr class=" . $major . ">";
        for ($i = 0; $i < 4; $i++) {
            $return_str .= "<td class=\"" . $major . " student-table-items\">" . $currentEntryList[$i] . "</td>";
            if ($i == 2) {
                $return_str .= "<td class=\"" . $major . " student-table-items\">" . $currentUserEmail . "</td>";
            }
        }
        $return_str .= "</tr>";
    }
    
    fwrite($student_list_write, $new_contents . "\n"); 
    fclose($student_list_write);

    echo $return_str;
?>