<?php
    $cmd = "kill " . $_GET['pid'];
    passthru($cmd);
?>