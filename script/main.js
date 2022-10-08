$(document).ready(function() {
    $('.navigasi').delegate('.tidak-aktif', 'click', function(event) {
	    var $this = $(this);
	    $this.removeClass('tidak-aktif').addClass("aktif");
        $this.siblings().addClass('tidak-aktif').removeClass('aktif');
    });
});


function konfirmasiKembali(){
    var kembali = confirm("Apakah ingin kembali ke halaman utama?");

    if(kembali){
        window.location = "../index.html";
    }else{
        window.location = "tabel.html";
    }
}

function konfirmasiKembali2(){
    var kembali = confirm("Apakah ingin kembali ke halaman utama?");

    if(kembali){
        window.location = "../index.html";
    }else{
        window.location = "tabel-2.html";
    }
}

function gantiTema(){
    var hitam = document.getElementById('hitam');

    hitam.classList.toggle("tema-hitam");
}