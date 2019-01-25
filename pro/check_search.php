<?php
require "server/functions.php";
$e = $_REQUEST["e"];
$query = "select * from products where pro_keywords like '%$e%'";
$run_email = mysqli_query($con,$query);
while($row = mysqli_fetch_assoc($run_email)){
    $pro_id = $row['pro_id'];
    $pro_title = $row['pro_title'];
    $pro_price = $row['pro_price'];
    $pro_image = $row['pro_image'];
    echo "
                <div class='col-sm-6 col-md-4 col-lg-3 text-center product-summary'>
                    <h5 class='text-capitalize'>$pro_title</h5>
                    <img src='admin/product_images/$pro_image'>
                    <p> <b> Rs $pro_price/-  </b> </p>
                    <a href='detail.php' class='btn btn-info btn-sm'>Details</a>
                    <a href='#'>
                        <button class='btn btn-primary btn-sm'>
                            <i class='fas fa-cart-plus'></i> Add to Cart
                        </button>
                    </a>
                </div>
        ";
}