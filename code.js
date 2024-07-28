//bikin Array bulan
const namabulan = [
    'Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus',
    'September','Oktober','November','Desember'
];
const namaHari = [
    'Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'
]





let layar = document.getElementById('jam');
let atas = layar.getElementsByTagName('h1');
let bawah = layar.getElementsByTagName('p');

function tampil() {
    const waktu = new Date();
    const jam = waktu.getHours();
    const menit = waktu.getMinutes();
    const detik = waktu.getSeconds();
    const tahun = waktu.getFullYear();
    const bulan = waktu.getMonth();
    const tanggal = waktu.getDate();
    const hari = waktu.getDay();
    atas[0].innerHTML = detik;
}