<?php
    $cmd = 'mplayer tracks/' . $_GET['id'] . ".mp3";
    passthru($cmd);
?>
