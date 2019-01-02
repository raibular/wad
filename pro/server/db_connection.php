<?php
$Con=mysqli_connect("localhost","root","","db_connection");

if(!$Con){
    die("Connection failed: " . $Con->connect_error);
}