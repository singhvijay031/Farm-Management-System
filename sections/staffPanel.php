<?php
    //session start and keep loggedin or redirect to login page.
    session_start();
    $userprofile=$_SESSION['staffSession'];
    if($userprofile==false){
        header('location:../index.php');
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/global.css">
    <link rel="stylesheet" href="../css/_table.css">
    <link rel="stylesheet" href="../css/staffPanel.css">
    <link rel="stylesheet" href="../css/_topnavStaff.css">

    

    <title>Farm Management System</title>
</head>
<body>
<?php include '_topnavStaff.php' ?>

<div class="menu-container">
    <div class="menu-item" onclick="openSection('dailyRec')">
        <img src="../img/calendar.svg" alt="calendar">
        <p>Daily Milk</p>
    </div>

    <div class="menu-item" onclick="openSection('farmerMgmt')">
        <img src="../img/person.svg" alt="person">
        <p>Farmer Mgmt</p>
    </div>

    <div class="menu-item" onclick="openSection('payment')">
        <img src="../img/wallet.svg" alt="wallet">
        <p>Payment</p>
    </div>
</div>



    <!-- <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script> -->
    <!-- offline setup--------- -->
    <script src="../vendor/jquery-3.6.4.min.js"></script>


    <script src="../js/staffPanel.js"></script>
    <script src="../js/global.js"></script>

    <!-- <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> -->
</body>
</html>