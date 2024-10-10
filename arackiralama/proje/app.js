const navbar = `
    <nav class="navbar">
        <h1 class="baslik">ARAÇ KİRALA</h1>
        <div class="text">
            <h3>IDARI ISLER PORTALI</h3>
        </div>
        <div class="item">
            <ul class="navbar-item">
                <li><i class="bi bi-house"></i></li>
                <li><i class="bi bi-person"></i></li>
                <li><i class="bi bi-megaphone"></i></li>
                <li><i class="bi bi-gear"></i></li>
                <li><i class="bi bi-power"></i></li>
            </ul>
        </div>
    </nav>
`;
function loadNavbar() {
    document.body.insertAdjacentHTML('afterbegin', navbar);
}
document.addEventListener('DOMContentLoaded', loadNavbar);

// footer ekleme
const footerDiv=document.querySelector("footer")
const footer=`
 <div class="container-fluid py-4">
        <div class="row">
            <div class="col-12 text-center">
                    <h5 class="text-uppercase text-danger fw-bold">BET</h5>
                    <p>BET Otomasyon ve Projeler Geliştirme Bölümü</p>
            </div>
        </div>
    </div>
    <div class=" text-center py-2">
        <p class="mb-0">&copy; 2024<span class="text-danger fw-bold"> Bet</span>. All rights reserved.</p>
    </div>
`;
function loadFooter(){
    footerDiv.innerHTML=footer
}
document.addEventListener('DOMContentLoaded', loadFooter);

// footer yükleme bitiş



const bilgiDivs = document.querySelectorAll('.bilgiDiv'); 
const button = document.createElement('button');

bilgiDivs.forEach(bilgiDiv => {
    const bilgiIkonlari2 = bilgiDiv.querySelector("#bilgiIkonlari-2");
    const ikonlar = bilgiDiv.querySelectorAll("#ikon");

    bilgiDiv.addEventListener('mouseover', () => {
        bilgiDiv.classList.add("efekt");
        ikonlar.forEach(ikon => {
            ikon.style.opacity = "0";
        });
        button.textContent = 'REZERVE ET';
        button.className = 'btn-rezerve';
        button.style.position = 'absolute';
        button.style.opacity = "1";
        bilgiIkonlari2.append(button);
    });

    bilgiDiv.addEventListener('mouseleave', () => {
        bilgiDiv.classList.remove("efekt");
        ikonlar.forEach(ikon => {
            ikon.style.opacity = "1";
            button.style.opacity = "0";

        });
    });

});

 const closeBtn=document.querySelector(".closeBtn")
    const closeButon=document.querySelector("#closeButon")
    const modal = document.getElementById('modal');

      button.addEventListener('click', () => {
          modal.style.display = 'flex';
      });
      closeBtn.addEventListener("click", function () {
      modal.style.display="none";
});
closeButon.addEventListener("click", function () {
      modal.style.display="none";
});

// bu araçla devam etmek istiyorum butonuyla aktif hale gelir
let seciliDiv = null; 

document.addEventListener('DOMContentLoaded', function() {
    const bilgiDivs = document.querySelectorAll('.bilgiDiv');
    bilgiDivs.forEach((bilgiDiv) => {
        bilgiDiv.addEventListener('mouseover', function() {
            seciliDiv = this;  // Üzerine geldiğimiz divi seciliDiv olarak belirleyin
        });
    });

    document.querySelector('.closeBtn').addEventListener('click', function() {
        if (seciliDiv) {
            seciliDiv.classList.add("selected");
        }
    });
});

const temizle = document.getElementById("Temizle");
temizle.addEventListener('click', function() {
    if (seciliDiv) {
        seciliDiv.classList.remove("selected");
        seciliDiv = null; 
    }
});
