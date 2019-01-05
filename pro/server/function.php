<?php
require_once "db_connection.php";

function getCats(){
    global $con;
    $getCatsQuery = "select * from categories";
    $getCatsResult = mysqli_query($con,$getCatsQuery);
    while($row = mysqli_fetch_assoc($getCatsResult)){
        $cat_id = $row['cat_id'];
        $cat_title = $row['cat_title'];
        echo "<li><a class='nav-link'  href='#'>$cat_title</a></li>";
    }
}
function getBrands(){
    global $con;
    $getBrandsQuery = "select * from brands";
    $getBrandsResult = mysqli_query($con,$getBrandsQuery);
    while($row = mysqli_fetch_assoc($getBrandsResult)){
        $brand_id = $row['brand_id'];
        $brand_title = $row['brand_title'];
        echo "<li><a class='nav-link'  href='#'>$brand_title</a></li>";
    }
}
function getDetails(){
    global $con;
    $getProductsQuery = "select * from products";
    $getProductResult = mysqli_query($con,$getProductsQuery);
    while($row = mysqli_fetch_assoc($getProductResult)){
        $title = $row['pro_title'];
        $id= $row['pro_id'];
        $cat= $row['pro_cat'];
        $brand= $row['pro_brand'];
        $price= $row['pro_price'];

        echo " <li>Title:$title</li>";
        echo " <li>ID:$id</li>";
        echo " <li>CAT:$cat</li>";
        echo "<li>BRAND:$brand</li>";
        echo "<li>Price:$price</li>";
    }
}