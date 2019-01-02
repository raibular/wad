<?php
require "db_connection.php";
function getCatsAdmin()
{
    global $Con;
    $getQuery ="select * from categories";
    $getRes =mysqli_query($Con,$getQuery);
    while($row = mysqli_fetch_assoc($getRes))
    {
        $id = $row['cat_id'];
        $title = $row['cat_title'];
        echo"<option> $title </option>
        ";
    }
}
function getBrandsAdmin()
{
    global  $Con;
    $getQuery = "select * from brands";
    $getRes = mysqli_query($Con,$getQuery);
    while($row = mysqli_fetch_assoc($getRes))
    {
        $id = $row['brand_id'];
        $title = $row['brand_title'];
        echo"<option> $title</option>";
    }
}
function getCats()
{
    global $Con;
    $getQuery ="SELECT * FROM categories";
    $getRes =mysqli_query($Con,$getQuery);
    while($row = mysqli_fetch_assoc($getRes))
    {
        $id = $row['cat_id'];
        $title = $row['cat_title'];
        echo"<li>
                        <a class='nav-link'  href='#'>$title</a>
        </li>";
    }
}
function getBrands()
{
    global  $Con;
    $getQuery = "select * from brands";
    $getRes = mysqli_query($Con,$getQuery);
    while($row = mysqli_fetch_assoc($getRes))
    {
        $id = $row['brand_id'];
        $title = $row['brand_title'];
        echo"<li>
                        <a class='nav-link'  href='#'>$title</a>
        </li>";
    }
}
