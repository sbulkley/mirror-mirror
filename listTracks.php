<?php
    if ($handle = opendir('tracks/')) {
        /* This is the correct way to loop over the directory. */
        while (false !== ($entry = readdir($handle))) {
            echo "$entry ";
        }
        closedir($handle);
    }
?>
