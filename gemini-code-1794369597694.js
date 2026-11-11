function pilihKandidat(nomor, nama, keterangan) {
  // Konfirmasi pilihan pengklik
  const konfirmasi = confirm(`Apakah Anda yakin ingin memilih ${nama} (Nomor Urut ${nomor})?`);
  
  if (konfirmasi) {
    const hasilDiv = document.getElementById('hasil');
    const teksHasil = document.getElementById('teks-hasil');
    
    teksHasil.innerHTML = `Anda memilih <strong>Nomor ${nomor} - ${nama}</strong>.`;
    hasilDiv.classList.remove('hidden');
    
    // Scroll otomatis ke bagian hasil
    hasilDiv.scrollIntoView({ behavior: 'smooth' });
  }
}