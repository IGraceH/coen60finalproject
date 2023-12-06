<?php
    $currentUserFile = fopen("current-user.txt", "w") or die("Unable to open file!");
    $masterList = "studentList.txt";
    $currentUser = trim($_GET["user"]); // current entry in string format
    $currentUserList = explode(":;", trim($_GET["user"])); // current entry in list format

    $return_str = "1";
    $contents = explode("\n", trim(file_get_contents($masterList)));
    foreach ($contents as $lines) {
        $one = explode(":;", trim($lines));
        $email = $one[0];
        $password = $one[1];
        if ($currentUserList[0] == $email) {
            // if the password doesn't match, return a 0 which will pop an alert
            if ($currentUserList[1] != $password) {
                // fclose($currentUserFile);
                $return_str = "0";
            }
        }
    }

    // // if this is a new user, just write their name in the current user file
    if ($return_str == "1") {
        fwrite($currentUserFile, $currentUser);
    }
    fclose($currentUserFile);
    echo $return_str;
?>