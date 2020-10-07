<?php require './views/global/footer.sec.menu.view.php'; ?>
<?php require './views/global/footer.menu.view.php'; ?>


</main>


<?php require './views/global/copyrightbar.view.php'; ?>
</ion-content>

<link rel="stylesheet" href="/assets/css/custom.css" />
<link rel="stylesheet" href="/assets/css/custom.responsive.css" />


<script type="module">
	import { popoverController } from '/assets/ionic/dist/ionic/index.esm.js';
	window.popoverController = popoverController;
    import { modalController } from '/assets/ionic/dist/ionic/index.esm.js';
    window.modalController = modalController;
</script>

<?php
if (isset($pagestyles)) {
	echo $pagestyles;
}
if (isset($pagescripts)) {
	echo $pagescripts;
}
if (!isset($_SESSION['login'])) {
	echo '<script src="/assets/js/login.js"></script>';
}
if (isset($_SESSION['login'])) {
	echo '<link rel="stylesheet" href="/assets/css/accountpopup.css">';
	echo '<script src="/assets/js/accountpopup.js"></script>';
}
?>
<script src="/assets/js/app.js"></script>

</ion-app>
</body>

</html>