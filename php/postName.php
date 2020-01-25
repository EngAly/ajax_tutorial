<?php
if(isset($_POST['name']) && isset($_POST['age'])){
    echo '<h1>my name is: '.$_POST['name'].'</h1>';
    echo '<h1>and my age is: '.$_POST['age'].'</h1>';
}

?>