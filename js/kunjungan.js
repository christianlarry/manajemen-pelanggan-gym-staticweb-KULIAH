
    // SET ELEMENT KE VARIABEL
    const tanggalKunjunganInput = document.getElementById("tanggalKunjunganInput")
    const tanggalKunjunganText = document.getElementById("tanggalKunjunganText")
    const aturKunjunganModalTanggalText = document.getElementById("aturKunjunganModalTanggal")
    
    // FUNGSI UNTUK SET TAMPILAN TANGGAL Kunjungan
    const setTanggalKunjungan = (date)=>{
      const dateNow = date.getDate().toString().padStart(2,0)
      const monthNow = (date.getMonth()+1).toString().padStart(2,0)
      const yearNow = date.getFullYear()

      const namaBulanArr = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
      ]

      const tanggalKunjunganDateFormat = `${yearNow}-${monthNow}-${dateNow}`
      const tanggalKunjunganIDFormat = `${dateNow} ${namaBulanArr[now.getMonth()]} ${yearNow}`

      tanggalKunjunganInput.value = tanggalKunjunganDateFormat
      tanggalKunjunganText.innerText = tanggalKunjunganIDFormat
      aturKunjunganModalTanggalText.innerText = tanggalKunjunganIDFormat
    }

    const now = new Date()
    setTanggalKunjungan(now)

    tanggalKunjunganInput.addEventListener('change',(e)=>{
      const date =  new Date(e.target.value)
      setTanggalKunjungan(date)
    })