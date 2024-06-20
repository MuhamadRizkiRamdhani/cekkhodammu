function generateKhodamName() {
    const khodamData = [
        { name: "Sayur Asem", description: "Nikmat dimakan dengan nasi hangat", image: "images/sayur asem.jpg" },
        { name: "Ubur Ubur Cianjur", description: "Nyetrum hiiiiiii", image: "images/ubur ubur cianjur.jpg" },
        { name: "Ridwan Banaspati", description: "Menyala Abangkuuu", image: "images/ridwan_banaspati.jpg" },
        { name: "Slamet Kopling", description: "Ngebut bat anjay", image: "images/slamet_kopling.jpg" },
        { name: "Naga Hitam Madura", description: "Sang naga legenda", image: "images/naga_hitam_madura.jpg" },
        { name: "Harimau Putih Imut", description: "Siap mencabik dengan slayyy", image: "images/harimau_putih_imut.jpg" },
        { name: "Marmut Air", description: "Hewan yang hidup didua alam", image: "images/marmut_air.jpg" },
        { name: "Jetski Cilacap", description: "Ngebut bat anjay", image: "images/jetski_cilacap.jpg" },
        { name: "Ambatron", description: "Iron man hitam", image: "images/ambatron.jpg" },
        { name: "Icikiwir", description: "prikitiwwwww", image: "images/icikiwir.jpg" },
        { name: "Sigit Rendang", description: "Siap melahap daging kurban", image: "images/sigit_rendang.jpg" },
        { name: "Gogon Tunjang", description: "Lawannya sigit rendang", image: "images/gogon_tunjang.jpg" },
        { name: "Kak Gem", description: "PAHAM?!!!", image: "images/kak_gem.jpg" },
        { name: "Monas", description: "Khodam kamu monas", image: "images/monas.jpg" },
        { name: "Bala Bala", description: "Ngeunah coy", image: "images/bala_bala.jpg" },
        { name: "Laba Laba Sunda", description: "Laba laba khas jawabarat", image: "images/laba_laba_sunda.jpg" },
        { name: "Kevin Lontong", description: "Wareg euy", image: "images/kevin_lontong.jpg" },
        { name: "Roger Sumatra", description: "Sadboy bener", image: "images/roger_sumatra.jpg" },
        { name: "Ryan Knalpot", description: "Tutung", image: "images/ryan_knalpot.jpg" },
        { name: "Ryan Batagor", description: "Saudaranya Ryan Knalpot", image: "images/ryan_knalpot.jpg" },
        { name: "Basuki Blimbing", description: "sejenis buah buahan segar", image: "images/sigit_blimbing.jpg" },
        { name: "Bayu coconut", description: "Dingin dan menyegarkan", image: "images/bayu_coconut.jpg" },
        { name: "Ratna Penyu", description: "Ratna Amfibi", image: "images/ratna_penyu.jpg" }
    ];
    
    const username = document.getElementById('username').value;
    if (username.trim() === "") {
        alert("Masukkan nama kamu!");
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * khodamData.length);
    const khodam = khodamData[randomIndex];
    
    document.getElementById('khodamName').innerText = `${username}, khodam kamu adalah: ${khodam.name}`;
    document.getElementById('khodamDescription').innerText = khodam.description;
    document.getElementById('khodamImage').src = khodam.image;
    document.getElementById('khodamImage').style.display = "block";
}

function reset() {
    document.getElementById('username').value = "";
    document.getElementById('khodamName').innerText = "";
    document.getElementById('khodamDescription').innerText = "";
    document.getElementById('khodamImage').style.display = "none";
    document.getElementById('khodamImage').src = "";
}
