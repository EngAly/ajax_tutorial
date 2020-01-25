<?php
if(isset($_GET['name']) && isset($_GET['age'])){
    echo 'my name is: '.$_GET['name'].'<br/>';
    echo 'and my age is: '.$_GET['age'];
}

?>