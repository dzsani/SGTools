// SG.hu private_topic v1.0 20111108
// K�sz�tette: dzsani

// M�k�d�si m�d
// 0: feh�rlista, 1: feketelista
// Ha null�n hagyod, akkor azok l�phetnek be a topikba,
// akiket felsorolsz a lentebbi n�vlist�ba.
// Ha egyre �ll�tod, akkor mindenki bel�phet, kiv�ve
// a lentebb felsorolt felhaszn�l�k.

var pt_mode = 1;

// Felhaszn�l�k feh�rlist�ja
// Vessz�vel elv�lasztva sorold fel azokat a felhaszn�l�neveket
// akiknek enged�lyezed a topikba l�p�st. Sz�k�zt ne haszn�lj!
// P�lda: var pt_users = 'n�v1,n�v2,n�v3';

var pt_users = '';


// EZT A R�SZT NE M�DOS�TSD !!!
$(document).ready(function(){pt_users=pt_users.split(',');var a=$('.std1:eq(1)').html().replace("Bejelentkezve: ","");if(pt_mode==0){if(pt_users.indexOf(a)==-1){pt_redirectBack()}}else{if(pt_users.indexOf(a)!=-1){pt_redirectBack()}}function pt_redirectBack(){alert('Ez egy priv�t t�ma, nincs jogosults�god az olvas�s�hoz!');history.go(-1)}});