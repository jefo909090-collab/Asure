// --- KATEGORİ HAFIZA VE İZOLASYON SİSTEMİ ---
window.aktifKategori = 'ani'; 

window.kategoriDeposu = {
    ani: {
        hikayeler: [],
        gruplar: []
    },
    istedikleriniz: {
        hikayeler: [],
        gruplar: []
    }
};

function paneliAckapa() {
  const panel = document.getElementById('ayarPaneli');
  if (panel) {
    panel.classList.toggle('acik');
  }
}

// Haberler Sekmesi Açma/Kapama Fonksiyonu
function haberlerSekmesiAcKapa() {
    const sekme = document.getElementById('haberlerSekmesi');
    if (sekme) {
        sekme.classList.toggle('aktif');
    }
}

const dilVerileri = {
  tr: {
    dil: "Dil",
    renk: "Arka Plan Rengi:",
    yapimcilar: "YAPIMCILAR",
    yapimciIsimleri: "jefo ve nyoko",
    surüm: "sürüm",
    aramaInp: "arama yapın",
    aciklamaBaslik: "AÇIKLAMA",
    aciklamaMetni: "Merhaba, bu sitede YAKINDA ilginizi çekecek bir sürü kategoriler olacak. Kategorilerin içinde arkadaşlar edinebileceğiniz bir sürü gruplar olacak. kısa videolar, uzun videolar, canlı yayınlar, hikaye, not ve müzik paylaşabileceğiniz eğlenceli vakit geçireceksiniz bu arada ırkçılık yapmayalım bir arkadaş varda:) neyse görüşürüz by 😛",
    hikayeBaslik: "ANI VEYA HİKAYE",
    hikayeInp: "hikayenizi veya anınızı yazınız",
    hikayeyok: "şu an hikaye veya anı yok",
    aramaSonucYok: "hiçbir sonuç bulunamadı"
  },
  en: {
    dil: "Language",
    renk: "Background Color:",
    yapimcilar: "DEVELOPERS",
    yapimciIsimleri: "jefo and nyoko",
    surüm: "version",
    aramaInp: "Search...",
    aciklamaBaslik:"DESCRIPTION",
    aciklamaMetni:"Hello! This site will feature a wide variety of categories that are sure to be of great interest to you. Within these categories, you’ll find numerous groups where you can make new friends. You’ll have a great time sharing short videos, long-form videos, live streams, stories, notes, and music. Oh, and let’s keep things friendly—no racism, please! (Just mentioning this because of someone I know :)) Anyway, see you later—bye 😛😛!",
    hikayeBaslik: "MEMORY OR STORY",
    hikayeInp: "write your memory or story...",
    hikayeyok: "There are no stories or memories right now",
    aramaSonucYok: "no results found"
  }
};

function dilDegistir(secilenDil) {
  const d = dilVerileri[secilenDil];
  if (!d) return;
  
  if (document.getElementById('lbl-u')) document.getElementById('lbl-u').innerText = d.surüm;
  if (document.getElementById('lbl-dil')) document.getElementById('lbl-dil').innerText = d.dil;
  if (document.getElementById('lbl-renk')) document.getElementById('lbl-renk').innerText = d.renk;
  if (document.getElementById('lbl-yapimcilar')) document.getElementById('lbl-yapimcilar').innerText = d.yapimcilar;
  if (document.getElementById('lbl-taner')) document.getElementById('lbl-taner').innerText = d.yapimciIsimleri;
  if (document.getElementById('inp-arama')) document.getElementById('inp-arama').placeholder = d.aramaInp;
  if (document.getElementById('lbl-aciklama-baslik')) document.getElementById('lbl-aciklama-baslik').innerText = d.aciklamaBaslik;
  if (document.getElementById('lbl-aciklama-metin')) document.getElementById('lbl-aciklama-metin').innerText = d.aciklamaMetni;
  if (document.getElementById('lbl-arama-sonuc')) document.getElementById('lbl-arama-sonuc').innerText = d.aramaSonucYok;
  
  if (window.aktifKategori === 'ani') {
      if (document.getElementById('lbl-hikaye-baslik')) document.getElementById('lbl-hikaye-baslik').innerHTML = d.hikayeBaslik;
      if (document.getElementById('lbl-hikaye-ok')) document.getElementById('lbl-hikaye-ok').innerHTML = d.hikayeyok;
      if (document.getElementById('inp-hikaye')) document.getElementById('inp-hikaye').placeholder = d.hikayeInp;
  }
}

function akordeonAcKapa(sekmeId) {
  const hedef = document.getElementById(sekmeId);
  if (hedef) {
    hedef.classList.toggle('aktif');
  }
}
    
// --- LÜKS VE ŞIK RENK / ŞABLON SİSTEMİ (GÜNCELLENDİ) ---
function renkDegistir(renkSecimi) {
  let arkaPlanStili = "";
  let metinRengi = "#222";
  
  // Küçük/büyük harf duyarlılığını ortadan kaldırıp hem HTML'den gelenleri hem Türkçe yazılanları yakalayalım
  const secim = String(renkSecimi).toLowerCase().trim();

  switch(secim) {
    case 'kırmızı':
    case 'red': 
      arkaPlanStili = "linear-gradient(135deg, #C01D1D 0%, #1a0507 100%)";
      metinRengi = "#f3f4f6";
      break;
    case 'gri':
    case 'gray':
    case 'grey': 
      arkaPlanStili = "linear-gradient(135deg, #555367 0%, #111827 100%)";
      metinRengi = "#f9fafb";
      break;
    case 'beyaz':
    case 'white': 
      arkaPlanStili = "linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)";
      metinRengi = "#1f2937";
      break;
    case 'mavi':
    case 'blue': 
      arkaPlanStili = "linear-gradient(135deg, #140B80 0%, #020617 100%)";
      metinRengi = "#f8fafc";
      break;
    case 'yeşil':
    case 'green': 
      arkaPlanStili = "linear-gradient(135deg, #067C19 0%, #022c22 100%)";
      metinRengi = "#ecfdf5";
      break;
    case 'pembe':
    case 'pink': 
      arkaPlanStili = "linear-gradient(135deg, #B80FA9 0%, #3b071a 100%)";
      metinRengi = "#fce7f3";
      break;
    case 'mor':
    case 'purple': 
      arkaPlanStili = "linear-gradient(135deg, #CA56BE 0%, #2e1065 100%)";
      metinRengi = "#f3e8ff";
      break;
    default:
      arkaPlanStili = renkSecimi;
      metinRengi = "#000";
  }

  if (document.body.animate) {
    document.body.animate([
      { opacity: 0.8 },
      { opacity: 1 }
    ], {
       duration: 400,
       easing: 'ease',
       fill: 'forwards'
     });
  }
  
  
  document.body.style.background = arkaPlanStili;
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.color = metinRengi;
}

  
let modalOlcek = 1;
  
function arsivModalAc(resimYolu) {
  const modal = document.getElementById("arsivModal");
  const modalResim = document.getElementById("modalResim");
  if (modal && modalResim) {
    modalResim.src = resimYolu;
    modal.classList.add("aktif");
  }
}

function arsivModalKapat() {
  const modal = document.getElementById("arsivModal");
  if (modal) {
      modal.classList.remove("aktif");
  }
}

function modalZoom(deger) {
    const resim = document.getElementById("modalResim");
    if (!resim) return;
    modalOlcek += deger;
    if (modalOlcek < 0.5) modalOlcek = 0.5;
    if (modalOlcek > 4.0) modalOlcek = 4.0;
    resim.style.transform = "scale(" + modalOlcek + ")";
}

function modalSifirla() {
   modalOlcek = 1;
   const resim = document.getElementById("modalResim");
   if (resim) {
     resim.style.transform = "scale(1)";
   }
}

function kategoriDegistir(hedefKategori) {
    const btn = document.getElementById('btn-istedikleriniz');
    const baslik = document.getElementById('lbl-hikaye-baslik');
    const inp = document.getElementById('inp-hikaye');

    if (window.aktifKategori === 'ani' && hedefKategori === 'istedikleriniz') {
        window.aktifKategori = 'istedikleriniz';
        if (btn) {
            btn.innerText = "anı-hikaye / dön";
            btn.style.background = "#4a148c";
        }
        if (baslik) {
            baslik.innerHTML = "<b style='color:#7b1fa2;'>İSTEDİKLERİNİZ VE ÖZEL ALAN</b>";
        }
        if (inp) {
            inp.placeholder = "özel grubunuza veya alanınıza ait metin yazın...";
        }
    } else {
        window.aktifKategori = 'ani';
        if (btn) {
            btn.innerText = "istedikleriniz/giriş";
            btn.style.background = "#7b1fa2";
        }
        if (baslik) {
            baslik.innerHTML = "<b>ANI VEYA HİKAYE</b>";
        }
        if (inp) {
            inp.placeholder = "hikayenizi veya anınızı yazınız";
        }
    }

    kategoriArayuzunuGuncelle();
}

function kategoriArayuzunuGuncelle() {
    const mevcutedi = window.kategoriDeposu[window.aktifKategori];
    const hikayelerListe = document.getElementById('hikayelerListesi');
    const yokYazisi = document.getElementById('lbl-hikaye-ok');
    
    if (hikayelerListe) {
        hikayelerListe.innerHTML = '';
        if (mevcutedi.hikayeler.length === 0) {
            if (yokYazisi) {
                yokYazisi.style.display = 'block';
                yokYazisi.innerText = window.aktifKategori === 'ani' 
                    ? 'şu an hikaye veya anı yok' 
                    : 'şu an bu özel kategoride hiçbir mesaj yok';
            }
        } else {
            if (yokYazisi) yokYazisi.style.display = 'none';
            mevcutedi.hikayeler.forEach(item => {
                hikayelerListe.insertAdjacentHTML('beforeend', item.html);
            });
        }
    }

    const gruplarListe = document.getElementById('gruplarListesi');
    if (gruplarListe) {
        gruplarListe.innerHTML = '';
        mevcutedi.gruplar.forEach(html => {
            gruplarListe.insertAdjacentHTML('afterbegin', html);
        });
    }
}

function grupFormuAcKapa() {
  const sekme = document.getElementById('grupFormuSekmesi');
  if (sekme) {
    sekme.classList.toggle('acik');
  }
}

function grupOlusturBitti() {
  const ad = document.getElementById('grupAdiInp').value.trim();
  const kisi = document.getElementById('grupKisiInp').value.trim();
  const amac = document.getElementById('grupAmacInp').value.trim();
  
  if (!ad) {
    alert('Lütfen grup adını yazınız !');
    return;
  }
  
  const yeniKapacite = kisi ? kisi : '10';
  const yeniGrupHTML = `
    <div class="grup-kart" style="margin-bottom: 10px; border-left: 3px solid ${window.aktifKategori === 'istedikleriniz' ? '#7b1fa2' : '#007bff'}; padding-left: 5px;">
        <p><a href="#" style="color:#000; text-decoration:none; font-weight:bold;">${ad}</a></p>
        <p><small><tt style="color:red">0/${yeniKapacite}</tt></small></p>
        ${amac ? `<p style="font-size:11px; color:#555; margin: 2px 0;">Amaç: ${amac}</p>` : ''}
<button type="button" class="gruba-gir-btn" onclick="gruptaKatildinAdimi(this)">Gruba Gir</button>
        <hr style="border: 1px solid black;" />
    </div>
  `;

  window.kategoriDeposu[window.aktifKategori].gruplar.push(yeniGrupHTML);
  kategoriArayuzunuGuncelle();

  document.getElementById('grupAdiInp').value = '';
  document.getElementById('grupKisiInp').value = '';
  document.getElementById('grupAmacInp').value = '';
  grupFormuAcKapa();
}

if (!window.oyDurumlari) {
    window.oyDurumlari = {};
}

window.addEventListener("load", function() {
    const hikayeInput = document.getElementById('inp-hikaye');
    if (hikayeInput) {
        hikayeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const metin = hikayeInput.value.trim();
                if (!metin) return;

                const yaziId = 'hikaye_' + Date.now();
                const etiket = '👤 Anonim Hesap';
                const sinirRengi = window.aktifKategori === 'istedikleriniz' ? '#7b1fa2' : '#000';
                
                const yeniHikayeHTML = `
                    <div id="${yaziId}" style="background: #ffffff; border-left: 3px solid ${sinirRengi}; padding: 10px; margin-bottom: 10px; border-radius: 4px; text-align: left; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                        <span style="font-size: 11px; font-weight: bold; color: #000;">${etiket} (${window.aktifKategori === 'istedikleriniz' ? 'Özel Alan' : 'Genel Alan'})</span>
                        <p class="hikaye-metin-icerik" style="margin: 4px 0; font-size: 13px; color: #000; word-break: break-all;">${metin}</p>
                        
                        <div style="display: flex; gap: 10px; margin-top: 8px; align-items: center; font-size: 12px;">
                            <button type="button" onclick="oyVer('${yaziId}', 'like')" style="background:none; border:1px solid #ccc; border-radius:4px; padding:2px 6px; cursor:pointer;">👍 <span id="${yaziId}_begeni">0</span></button>
                            <button type="button" onclick="oyVer('${yaziId}', 'dislike')" style="background:none; border:1px solid #ccc; border-radius:4px; padding:2px 6px; cursor:pointer;">👎 <span id="${yaziId}_begenmeme">0</span></button>
                            <button type="button" onclick="yanitKutusuAc('${yaziId}')" style="background:none; border:none; color:#007bff; cursor:pointer; font-weight:bold;">Yanıtla</button>
                        </div>

                        <div id="${yaziId}_yanit_kutu" style="display: none; margin-top: 8px;">
                            <input type="text" id="${yaziId}_yanit_inp" placeholder="Anonim olarak yanıt yaz..." style="width: 70%; padding: 4px; font-size: 11px; border: 1px solid #ccc; border-radius: 3px;">
                            <button type="button" onclick="yanitGonder('${yaziId}')" style="background: #28a745; color: white; border: none; padding: 4px 8px; border-radius: 3px; font-size: 11px; cursor: pointer;">Gönder</button>
                        </div>

                        <div style="margin-top: 6px;">
                            <button type="button" id="${yaziId}_sekme_btn" onclick="yanitSekmesiAcKapa('${yaziId}')" style="display:none; background:none; border:none; color:#555; font-size:11px; cursor:pointer; text-decoration:underline; padding:0;">Yanıtları Gör (0)</button>
                        </div>

                        <div id="${yaziId}_yanitlar_liste" style="display: none; margin-top: 6px; padding-left: 10px; border-left: 2px solid #ddd;"></div>
                    </div>
                `;

                window.kategoriDeposu[window.aktifKategori].hikayeler.push({
                    text: metin,
                    html: yeniHikayeHTML
                });
                kategoriArayuzunuGuncelle();
                hikayeInput.value = '';
            }
        });
    }

    canvas = document.getElementById("gameCanvas");
    if (canvas) {
        ctx = canvas.getContext("2d");
    }

    const startBtn = document.getElementById("main-start-btn");
    if (startBtn) {
        startBtn.onclick = function() {
            var selectedDifficulty = document.getElementById("difficulty-select").value;
            if (selectedDifficulty === 'easy') {
                killer.patrolSpeed = 0.7; killer.chaseSpeed = 1.2; killer.vision = 75;
            } else if (selectedDifficulty === 'hard') {
                killer.patrolSpeed = 1.4; killer.chaseSpeed = 2.1; killer.vision = 130;
            } else {
                killer.patrolSpeed = 1.1; killer.chaseSpeed = 1.7; killer.vision = 100;
            }

            document.getElementById("menu-screen").style.display = "none";
            document.getElementById("game-container").style.display = "flex";

            lives = 3; keysCollected = 0; hasHammer = false; planksRemoved = false; currentFloor = 1;
            player.x = 35; player.y = 40;
            killer.x = 260; killer.y = 260; killer.floor = 1;
            killer.state = 'PATROL';

            randomizeItems();
            loadFloor(1);
            updateUI();

            if (gameOver) { gameOver = false; runEngine(); }
        };
    }

    const zone = document.getElementById("joystick-zone");
    if (zone) {
        zone.addEventListener("touchstart", function(e) {
            e.preventDefault();
            joystickActive = true;
            var rect = zone.getBoundingClientRect();
            joystickStartX = rect.left + rect.width / 2;
            joystickStartY = rect.top + rect.height / 2;
            moveStick(e.touches[0].clientX, e.touches[0].clientY);
        }, { passive: false });
    }
});

function oyVer(id, secim) {
    if (!window.oyDurumlari[id]) {
        window.oyDurumlari[id] = null; 
    }

    const begeniSayac = document.getElementById(id + '_begeni');
    const begenmemeSayac = document.getElementById(id + '_begenmeme');
    const mevcutOy = window.oyDurumlari[id];

    if (secim === 'like') {
        if (mevcutOy === 'like') {
            begeniSayac.innerText = parseInt(begeniSayac.innerText) - 1;
            window.oyDurumlari[id] = null;
        } else if (mevcutOy === 'dislike') {
            begenmemeSayac.innerText = parseInt(begenmemeSayac.innerText) - 1;
            begeniSayac.innerText = parseInt(begeniSayac.innerText) + 1;
            window.oyDurumlari[id] = 'like';
        } else {
            begeniSayac.innerText = parseInt(begeniSayac.innerText) + 1;
            window.oyDurumlari[id] = 'like';
        }
    } else if (secim === 'dislike') {
        if (mevcutOy === 'dislike') {
            begenmemeSayac.innerText = parseInt(begenmemeSayac.innerText) - 1;
            window.oyDurumlari[id] = null;
        } else if (mevcutOy === 'like') {
            begeniSayac.innerText = parseInt(begeniSayac.innerText) - 1;
            begenmemeSayac.innerText = parseInt(begenmemeSayac.innerText) + 1;
            window.oyDurumlari[id] = 'dislike';
        } else {
            begenmemeSayac.innerText = parseInt(begenmemeSayac.innerText) + 1;
            window.oyDurumlari[id] = 'dislike';
        }
    }
}

function yanitKutusuAc(id) {
    const kutu = document.getElementById(id + '_yanit_kutu');
    if (kutu) { kutu.style.display = kutu.style.display === 'none' ? 'block' : 'none'; }
}

function yanitGonder(id) {
    const inp = document.getElementById(id + '_yanit_inp');
    if (!inp) return;
    const yanitMetni = inp.value.trim();
    if (!yanitMetni) return;

    const liste = document.getElementById(id + '_yanitlar_liste');
    const sekmeBtn = document.getElementById(id + '_sekme_btn');

    if (liste) {
        const yeniYanitHTML = `
            <div style="background: #f9f9f9; padding: 4px 8px; margin-bottom: 4px; border-radius: 3px; font-size: 11px;">
                <b>👤 ${window.mevcutKullanici ? window.mevcutKullanici.nick : 'Anonim Hesap'}:</b> ${yanitMetni}
            </div>
        `;
        liste.insertAdjacentHTML('beforeend', yeniYanitHTML);

        const yanitSayisi = liste.children.length;
        if (sekmeBtn) {
            sekmeBtn.style.display = 'inline-block';
            sekmeBtn.innerText = `Yanıtları Gör (${yanitSayisi})`;
        }
    }

    inp.value = '';
    document.getElementById(id + '_yanit_kutu').style.display = 'none';
}

function yanitSekmesiAcKapa(id) {
    const liste = document.getElementById(id + '_yanitlar_liste');
    if (liste) { liste.style.display = liste.style.display === 'none' ? 'block' : 'none'; }
}

function aramaYap(arananKelime) {
    const aranan = arananKelime.toLowerCase().trim();
    const liste = window.kategoriDeposu[window.aktifKategori].hikayeler;
    const sonucSekmesi = document.getElementById('aramaSonucSekmesi');
    
    if (!sonucSekmesi) return;

    if (aranan === "") {
        sonucSekmesi.innerHTML = `<p id="lbl-arama-sonuc">hiçbir sonuç bulunamadı</p>`;
        return;
    }

    const bulunanlar = liste.filter(item => item.text.toLowerCase().includes(aranan));
    
    if (bulunanlar.length > 0) {
        let htmlContent = "";
        bulunanlar.forEach(item => {
            htmlContent += `<div style="font-size:12px; padding:4px; border-bottom:1px solid #ddd;">${item.text}</div>`;
        });
        sonucSekmesi.innerHTML = htmlContent;
    } else {
        sonucSekmesi.innerHTML = `<p id="lbl-arama-sonuc">hiçbir sonuç bulunamadı</p>`;
    }
}

window.addEventListener("touchmove", function(e) {
    if (!joystickActive) return;
    if (e.touches && e.touches[0]) {
        moveStick(e.touches[0].clientX, e.touches[0].clientY);
    }
}, { passive: false });

window.addEventListener("touchend", function() {
    joystickActive = false;
    moveVectorX = 0; moveVectorY = 0;
    var stick = document.getElementById("joystick-stick");
    if (stick) { stick.style.left = "23px"; stick.style.top = "23px"; }
});

function moveStick(clientX, clientY) {
    var dX = clientX - joystickStartX;
    var dY = clientY - joystickStartY;
    var distance = Math.hypot(dX, dY);
    if (distance > 23) {
        dX = (dX / distance) * 23;
        dY = (dY / distance) * 23;
    }
    var stick = document.getElementById("joystick-stick");
    if (stick) {
        stick.style.left = (23 + dX) + "px";
        stick.style.top = (23 + dY) + "px";
    }
    moveVectorX = dX / 23;
    moveVectorY = dY / 23;
}

var canvas, ctx;
var lives = 3, keysCollected = 0, hasHammer = false, gameOver = true, planksRemoved = false;
var player = { x: 35, y: 40, size: 5, speed: 2.1, lightRadius: 72 };
var killer = { x: 260, y: 260, size: 9, state: 'PATROL', dirX: 1, dirY: 0, floor: 1, patrolSpeed: 1.1, chaseSpeed: 1.7, vision: 100 };
var currentFloor = 1;
var walls = [], drawers = [];
var stairs = { x: 145, y: 145, w: 30, h: 30 };
var exitDoor = { x: 260, y: 270, w: 45, h: 30 };
var joystickActive = false, joystickStartX = 0, joystickStartY = 0, moveVectorX = 0, moveVectorY = 0;

var mapData = {
    1: {
        walls: [
            { x: 0, y: 0, w: 320, h: 10 }, { x: 0, y: 0, w: 10, h: 320 },
            { x: 310, y: 0, w: 10, h: 320 }, { x: 0, y: 310, w: 320, h: 10 },
            { x: 100, y: 10, w: 10, h: 110 }, { x: 100, y: 120, w: 120, h: 10 },
            { x: 10, y: 220, w: 130, h: 10 }, { x: 210, y: 180, w: 100, h: 10 }
        ],
        drawers: [
            { x: 25, y: 140, w: 22, h: 14, content: '', searched: false },
            { x: 160, y: 25, w: 22, h: 14, content: '', searched: false },
            { x: 275, y: 60, w: 22, h: 14, content: '', searched: false },
            { x: 50, y: 270, w: 22, h: 14, content: '', searched: false }
        ]
    },
    2: {
        walls: [
            { x: 0, y: 0, w: 320, h: 10 }, { x: 0, y: 0, w: 10, h: 320 },
            { x: 310, y: 0, w: 10, h: 320 }, { x: 0, y: 310, w: 320, h: 10 },
            { x: 190, y: 190, w: 120, h: 10 }, { x: 190, y: 50, w: 10, h: 140 },
            { x: 60, y: 230, w: 10, h: 80 }
        ],
        drawers: [
            { x: 30, y: 30, w: 22, h: 14, content: '', searched: false },
            { x: 270, y: 30, w: 22, h: 14, content: '', searched: false },
            { x: 25, y: 270, w: 22, h: 14, content: '', searched: false },
            { x: 270, y: 240, w: 22, h: 14, content: '', searched: false }
        ]
    }
};

function randomizeItems() {
    var allDrawers = [];
    [1, 2].forEach(function(f) {
        mapData[f].drawers.forEach(function(d) {
            d.searched = false; d.content = 'empty';
            allDrawers.push(d);
        });
    });
    allDrawers.sort(function() { return 0.5 - Math.random(); });
    allDrawers[0].content = 'key';
    allDrawers[1].content = 'key';
    allDrawers[2].content = 'hammer';
}

function loadFloor(floorNum) {
    currentFloor = floorNum;
    walls = mapData[floorNum].walls;
    drawers = mapData[floorNum].drawers;
    var fElem = document.getElementById("ui-floor");
    if (fElem) fElem.innerText = "FLOOR " + floorNum;
}

function updateUI() {
    var lElem = document.getElementById("ui-lives");
    var iElem = document.getElementById("ui-items");
    if (lElem) lElem.innerText = lives;
    if (iElem) iElem.innerText = keysCollected + "/2 " + (hasHammer ? "🔨" : "");
}

function checkWallCollision(x, y, size) {
    for (var i = 0; i < walls.length; i++) {
        var w = walls[i];
        if (x + size > w.x && x - size < w.x + w.w && y + size > w.y && y - size < w.y + w.h) return true;
    }
    return false;
}

function checkLineOfSight() {
    if (killer.floor !== currentFloor) return false;
    if (Math.hypot(player.x - killer.x, player.y - killer.y) > killer.vision) return false;
    var segments = 6;
    for (var i = 1; i <= segments; i++) {
        var lx = killer.x + (player.x - killer.x) * (i / segments);
        var ly = killer.y + (player.y - killer.y) * (i / segments);
        for (var j = 0; j < walls.length; j++) {
            if (lx >= walls[j].x && lx <= walls[j].x + walls[j].w && ly >= walls[j].y && ly <= walls[j].y + walls[j].h) return false;
        }
    }
    return true;
}

function backToMenu() {
    gameOver = true;
    var gc = document.getElementById("game-container");
    var ms = document.getElementById("menu-screen");
    if (gc) gc.style.display = "none";
    if (ms) ms.style.display = "flex";
}

function tick() {
    if (gameOver) return;

    if (joystickActive) {
        var nextX = player.x + moveVectorX * player.speed;
        var nextY = player.y + moveVectorY * player.speed;
        if (!checkWallCollision(player.x, nextY, player.size)) player.y = nextY;
        if (!checkWallCollision(nextX, player.y, player.size)) player.x = nextX;
    }

    var sBtn = document.getElementById("btn-stairs");
    if (sBtn) {
        if (Math.hypot((stairs.x + 15) - player.x, (stairs.y + 15) - player.y) < 28) {
            sBtn.style.display = "block";
            sBtn.innerText = currentFloor === 1 ? "UP ⬆" : "DOWN ⬇";
        } else {
            sBtn.style.display = "none";
        }
    }

    if (killer.state === 'PATROL' && Math.hypot((stairs.x + 15) - killer.x, (stairs.y + 15) - killer.y) < 20) {
        if (Math.random() < 0.12) {
            killer.floor = killer.floor === 1 ? 2 : 1;
            killer.x = stairs.x + 15; 
            killer.y = stairs.y + 15;
        }
    }

    if (checkLineOfSight()) { 
        killer.state = 'CHASE'; 
    } else { 
        killer.state = 'PATROL'; 
    }

    if (killer.floor === currentFloor) {
        if (killer.state === 'CHASE') {
            var angle = Math.atan2(player.y - killer.y, player.x - killer.x);
            var kX = killer.x + Math.cos(angle) * killer.chaseSpeed;
            var kY = killer.y + Math.sin(angle) * killer.chaseSpeed;
            if (!checkWallCollision(kX, kY, killer.size)) {
                killer.x = kX; killer.y = kY;
            }
        } else {
            var kX = killer.x + killer.patrolSpeed * killer.dirX;
            var kY = killer.y + killer.patrolSpeed * killer.dirY;
            if (checkWallCollision(kX, kY, killer.size)) {
                var choices = [{x:1, y:0}, {x:-1, y:0}, {x:0, y:1}, {x:0, y:-1}];
                var pick = choices[Math.floor(Math.random() * choices.length)];
                killer.dirX = pick.x; killer.dirY = pick.y;
            } else {
                killer.x = kX; killer.y = kY;
            }
        }
    }

    if (Math.hypot(player.x - killer.x, player.y - killer.y) < (player.size + killer.size)) {
        lives--; updateUI();
        player.x = 35; player.y = 40; loadFloor(1);
        killer.x = 260; killer.y = 260; killer.floor = 1;
        killer.state = 'PATROL';

        if (lives <= 0) {
            alert("GAME OVER! Back to Main Menu.");
            backToMenu();
        } else {
            alert("Katil seni yakaladı! Kalan Can: " + lives);
        }
    }

    if (currentFloor === 1 && planksRemoved && keysCollected === 2 && player.x > exitDoor.x && player.x < exitDoor.x + exitDoor.w && player.y > exitDoor.y && player.y < exitDoor.y + exitDoor.h) {
        alert("KAÇTIN! KAZANDIN! 🎉");
        backToMenu();
    }
}

function drawGame() {
    if (!ctx) return;
    ctx.fillStyle = "#020203";
    ctx.fillRect(0, 0, 320, 320);
    ctx.fillStyle = "#cca300";
    ctx.fillRect(stairs.x, stairs.y, stairs.w, stairs.h);

    drawers.forEach(function(d) {
        ctx.fillStyle = d.searched ? "#334155" : "#1d4ed8";
        ctx.fillRect(d.x, d.y, d.w, d.h);
    });

    if (currentFloor === 1) {
        ctx.fillStyle = "#5c2d17";
        ctx.fillRect(exitDoor.x, exitDoor.y, exitDoor.w, exitDoor.h);
        if (!planksRemoved) {
            ctx.strokeStyle = "#9a3412";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(exitDoor.x, exitDoor.y);
            ctx.lineTo(exitDoor.x + exitDoor.w, exitDoor.y + exitDoor.h);
            ctx.stroke();
        }
    }

    if (killer.floor === currentFloor) {
        ctx.fillStyle = "#dc2626";
        ctx.beginPath();
        ctx.arc(killer.x, killer.y, killer.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(killer.x - 2, killer.y - 2, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(killer.x + 2, killer.y - 2, 1.5, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    var px = player.x, py = player.y;
    ctx.beginPath();
    ctx.arc(px, py - 5, 2.5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(px, py - 2.5);
    ctx.lineTo(px, py + 3);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(px - 4, py - 1);
    ctx.lineTo(px + 4, py - 1);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(px, py + 3);
    ctx.lineTo(px - 3, py + 8);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(px, py + 3);
    ctx.lineTo(px + 3, py + 8);
    ctx.stroke();

    ctx.fillStyle = "#4a1515";
    walls.forEach(function(w) {
        ctx.fillRect(w.x, w.y, w.w, w.h);
    });

    var maskCanvas = document.createElement('canvas');
    maskCanvas.width = 320;
    maskCanvas.height = 320;
    var mCtx = maskCanvas.getContext('2d');
    mCtx.fillStyle = "rgba(0, 0, 0, 0.96)";
    mCtx.fillRect(0, 0, 320, 320);

    var gradient = mCtx.createRadialGradient(player.x, player.y, 2, player.x, player.y, player.lightRadius);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.6, "rgba(255,255,255,0.3)");
    gradient.addColorStop(1, "rgba(255,255,250,0)");

    mCtx.globalCompositeOperation = 'destination-out';
    mCtx.fillStyle = gradient;
    mCtx.beginPath();
    mCtx.arc(player.x, player.y, player.lightRadius, 0, Math.PI * 2);
    mCtx.fill();
    ctx.drawImage(maskCanvas, 0, 0);
}

function runEngine() {
    if (gameOver) return;
    tick();
    drawGame();
    requestAnimationFrame(runEngine);
}

function aramaSekmesiAc() {
    const sekme = document.getElementById('aramaSonucSekmesi');
    if (sekme) {
        sekme.classList.add('aktif');
    }
}

window.addEventListener('click', function(e) {
    const aramaKapsayici = document.querySelector('.arama-kapsayici');
    const sekme = document.getElementById('aramaSonucSekmesi');
    if (aramaKapsayici && sekme && !aramaKapsayici.contains(e.target)) {
        sekme.classList.remove('aktif');
    }
});

function oyunuBaslat(oyunNumarasi) {
  const secimEkrani = document.getElementById('oyun-secim-ekrani');
  const oynaAlani = document.getElementById('oyun-oynama-alani');
  if (secimEkrani) secimEkrani.style.display = 'none';
  if (oynaAlani) oynaAlani.style.display = 'block';
}

function oyundanDon() {
  const oynaAlani = document.getElementById('oyun-oynama-alani');
  const secimEkrani = document.getElementById('oyun-secim-ekrani');
  if (oynaAlani) oynaAlani.style.display = 'none';
  if (secimEkrani) secimEkrani.style.display = 'block';
  gameOver = true;
}

const searchBtn = document.getElementById("btn-search");
if (searchBtn) {
    searchBtn.onclick = function() {
        if (gameOver) return;
        drawers.forEach(function(d) {
            if (!d.searched && Math.hypot((d.x + d.w/2) - player.x, (d.y + d.h/2) - player.y) < 30) {
                d.searched = true;
                if (d.content === 'key') {
                    keysCollected++;
                    alert("Anahtar buldun! (" + keysCollected + "/2)");
                } else if (d.content === 'hammer') {
                    hasHammer = true;
                    alert("Çekiç buldun! Artık çıkıştaki tahtaları kırabilirsin.");
                } else {
                    alert("Çekmece boş.");
                }
                updateUI();
            }
        });

        if (currentFloor === 1 && hasHammer && !planksRemoved) {
            if (Math.hypot((exitDoor.x + exitDoor.w/2) - player.x, (exitDoor.y + exitDoor.h/2) - player.y) < 35) {
                planksRemoved = true;
                alert("Kapıdaki tahtaları çekiçle kırdın! Şimdi anahtarları toplayıp kaçabilirsin.");
            }
        }
    };
}

const stairsBtn = document.getElementById("btn-stairs");
if (stairsBtn) {
    stairsBtn.onclick = function() {
        if (gameOver) return;
        if (Math.hypot((stairs.x + 15) - player.x, (stairs.y + 15) - player.y) < 28) {
            var nextFloor = currentFloor === 1 ? 2 : 1;
            loadFloor(nextFloor);
            player.x = stairs.x + 10;
            player.y = stairs.y + 10;
        }
    };
}

// --- YANITLARIN RENGİNİ SABİTLEME KODU ---
const yanıtStilElementi = document.createElement('style');
yanıtStilElementi.innerHTML = `
    /* Yanıtlar listesindeki tüm metinler, anonim yazıları ve spanler kesinlikle siyah kalacak */
    div[id*="_yanitlar_liste"] *, 
    div[id*="_yanit_kutu"] *, 
    div[id*="_yanitlar_liste"] span, 
    div[id*="_yanitlar_liste"] b, 
    div[id*="_yanitlar_liste"] div {
        color: #000000 !important;
    }
`;
document.head.appendChild(yanıtStilElementi);

// --- KATEGORİ DEĞİŞİNCE YANIT/BEĞENİ KAYBINI ÖNLEYEN SİSTEM ---

// Ekrandaki güncel hali (yanıtlar, beğeniler) depoya geri kaydeder
function kategoriDurumunuKaydet() {
    const depo = window.kategoriDeposu[window.aktifKategori];
    depo.hikayeler.forEach(item => {
        const el = document.getElementById(item.id);
        if (!el) return;
        el.querySelectorAll('input').forEach(i => i.setAttribute('value', i.value));
        item.html = el.outerHTML;
    });
}

// kategoriDegistir çalışmadan önce otomatik kaydet
(function () {
    const eskiKategoriDegistir = window.kategoriDegistir;
    window.kategoriDegistir = function (hedefKategori) {
        kategoriDurumunuKaydet();
        eskiKategoriDegistir(hedefKategori);
    };
})();

// Yeni yorum ekleme (Enter)
(function () { 
    const hikayeInput = document.getElementById('inp-hikaye');
    if (!hikayeInput) return;

    hikayeInput.addEventListener('keypress', function (e) {
        if (e.key !== 'Enter') return;

        const metin = hikayeInput.value.trim();
        if (!metin) return;

        const yaziId = 'hikaye_' + Date.now();
        const etiket = '👤 ' + (window.mevcutKullanici ? window.mevcutKullanici.nick : 'Anonim Hesap');
        const sinirRengi = window.aktifKategori === 'istedikleriniz' ? '#7b1fa2' : '#000';

        const yeniHikayeHTML = `
            <div id="${yaziId}" style="background: #ffffff; border-left: 3px solid ${sinirRengi}; padding: 10px; margin-bottom: 10px; border-radius: 4px; text-align: left; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <span style="font-size: 11px; font-weight: bold; color: #000;">${etiket} (${window.aktifKategori === 'istedikleriniz' ? 'Özel Alan' : 'Genel Alan'})</span>
                <p class="hikaye-metin-icerik" style="margin: 4px 0; font-size: 13px; color: #000; word-break: break-all;">${metin}</p>

                <div style="display: flex; gap: 10px; margin-top: 8px; align-items: center; font-size: 12px;">
                    <button type="button" onclick="oyVer('${yaziId}', 'like')" style="background:none; border:1px solid #ccc; border-radius:4px; padding:2px 6px; cursor:pointer;">👍 <span id="${yaziId}_begeni">0</span></button>
                    <button type="button" onclick="oyVer('${yaziId}', 'dislike')" style="background:none; border:1px solid #ccc; border-radius:4px; padding:2px 6px; cursor:pointer;">👎 <span id="${yaziId}_begenmeme">0</span></button>
                    <button type="button" onclick="yanitKutusuAc('${yaziId}')" style="background:none; border:none; color:#007bff; cursor:pointer; font-weight:bold;">Yanıtla</button>
                </div>

                <div id="${yaziId}_yanit_kutu" style="display: none; margin-top: 8px;">
                    <input type="text" id="${yaziId}_yanit_inp" placeholder="Anonim olarak yanıt yaz..." style="width: 70%; padding: 4px; font-size: 11px; border: 1px solid #ccc; border-radius: 3px;">
                    <button type="button" onclick="yanitGonder('${yaziId}')" style="background: #28a745; color: white; border: none; padding: 4px 8px; border-radius: 3px; font-size: 11px; cursor: pointer;">Gönder</button>
                </div>

                <div style="margin-top: 6px;">
                    <button type="button" id="${yaziId}_sekme_btn" onclick="yanitSekmesiAcKapa('${yaziId}')" style="display:none; background:none; border:none; color:#555; font-size:11px; cursor:pointer; text-decoration:underline; padding:0;">Yanıtları Gör (0)</button>
                </div>

                <div id="${yaziId}_yanitlar_liste" style="display: none; margin-top: 6px; padding-left: 10px; border-left: 2px solid #ddd;"></div>
            </div>
        `;

        // Önce mevcut yorumların güncel halini kaydet, sonra yenisini ekle
        kategoriDurumunuKaydet();

        window.kategoriDeposu[window.aktifKategori].hikayeler.push({
            id: yaziId,
            text: metin,
            html: yeniHikayeHTML
        });

        kategoriArayuzunuGuncelle();
        hikayeInput.value = '';
    });
})();

// "Gruba Gir" -> katıldınız yazısı + yeşil "Gruba Katıl" butonu
function gruptaKatildinAdimi(btn) {
    const kart = btn.closest('.grup-kart');
    if (!kart) return;
    const grupAdi = kart.querySelector('a').textContent.trim();

    const mesaj = document.createElement('p');
    mesaj.style.cssText = 'color:#15803d; font-size:12px; font-weight:bold; margin:4px 0;';
    mesaj.textContent = grupAdi + ' grubuna katıldınız!';

    const yesilBtn = document.createElement('button');
    yesilBtn.type = 'button';
    yesilBtn.textContent = 'Gruba Katıl';
    yesilBtn.style.cssText = 'background:#16a34a; color:#fff; border:none; padding:6px 14px; font-size:12px; font-weight:bold; border-radius:6px; cursor:pointer; margin:4px 0 8px;';
    yesilBtn.onclick = function () { grupSohbetiAc(yesilBtn); };

    btn.replaceWith(yesilBtn);
    yesilBtn.before(mesaj);
}

// "Gruba Gir" -> sayaç +1, katıldınız yazısı, yeşil "Gruba Katıl" butonu
function gruptaKatildinAdimi(btn) {
    const kart = btn.closest('.grup-kart');
    if (!kart) return;
    const grupAdi = kart.querySelector('a').textContent.trim();

    // Kırmızı sayacı güncelle (0/5 -> 1/5)
    const sayac = kart.querySelector('tt');
    if (sayac) {
        const parcalar = sayac.textContent.split('/');
        const mevcut = parseInt(parcalar[0]) || 0;
        const kapasite = parseInt(parcalar[1]) || 0;
        if (kapasite && mevcut >= kapasite) {
            alert('Bu grup dolu!');
            return;
        }
        sayac.textContent = (mevcut + 1) + '/' + kapasite;
    }

    const mesaj = document.createElement('p');
    mesaj.style.cssText = 'color:#15803d; font-size:12px; font-weight:bold; margin:4px 0;';
    mesaj.textContent = grupAdi + ' grubuna katıldınız!';

    const yesilBtn = document.createElement('button');
    yesilBtn.type = 'button';
    yesilBtn.textContent = 'Gruba Katıl';
    yesilBtn.setAttribute('onclick', 'grupSohbetiAc(this)');
    yesilBtn.style.cssText = 'background:#16a34a; color:#fff; border:none; padding:6px 14px; font-size:12px; font-weight:bold; border-radius:6px; cursor:pointer; margin:4px 0 8px;';

    btn.replaceWith(yesilBtn);
    yesilBtn.before(mesaj);

    // Kategori değişince 1/5 ve yeşil buton kaybolmasın diye depoya kaydet
    const gruplar = window.kategoriDeposu[window.aktifKategori].gruplar;
    const sira = gruplar.findIndex(h => h.includes('>' + grupAdi + '</a>'));
    if (sira !== -1) gruplar[sira] = kart.outerHTML;
}

// --- GRUP SOHBET SİSTEMİ (WhatsApp tarzı) ---
window.grupSohbetleri = window.grupSohbetleri || {};
let aktifSohbetAnahtari = null;

const sohbetInputEl = document.getElementById('sohbetInput');
if (sohbetInputEl) {
    sohbetInputEl.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') sohbetMesajGonder();
    });
}

function grupSohbetiAc(btn) {
    const kart = btn.closest('.grup-kart');
    if (!kart) return;
    const grupAdi = kart.querySelector('a').textContent.trim();

    aktifSohbetAnahtari = window.aktifKategori + '::' + grupAdi;
    if (!window.grupSohbetleri[aktifSohbetAnahtari]) {
        window.grupSohbetleri[aktifSohbetAnahtari] = [];
    }

    document.getElementById('sohbetBaslik').texContent = grupAdi;
    document.getElementById('sohbetAvatar').textContent = grupAdi.charAt(0).toUpperCase();

    sohbetiCiz();
    inp.focus();
}

function sohbetiCiz() {
    const kutu = document.getElementById('sohbetMesajlar');
    const liste = window.grupSohbetleri[aktifSohbetAnahtari] || [];
    kutu.innerHTML = '';

    const tarih = document.createElement('div');
    tarih.className = 'sohbet-tarih';
    tarih.textContent = 'Bugün';
    kutu.appendChild(tarih);

    if (liste.length === 0) {
        const bos = document.createElement('div');
        bos.className = 'sohbet-bos';
        bos.textContent = 'Sohbeti başlatmak için bir mesaj yaz 👋';
        kutu.appendChild(bos);
        return;
    }

    liste.forEach(m => {
        const balon = document.createElement('div');
        balon.className = 'sohbet-mesaj';

        const metin = document.createElement('span');
        metin.className = 'mesaj-metin';
        metin.textContent = m.metin;

        const saat = document.createElement('span');
        saat.className = 'mesaj-saat';
        saat.innerHTML = m.saat + '<span class="tik">✓✓</span>';

        balon.appendChild(metin);
        balon.appendChild(saat);
        kutu.appendChild(balon);
    });

    kutu.scrollTop = kutu.scrollHeight;
}

// --- TÜRKÇE / İNGİLİZCE ÇEVİRİ SİSTEMİ ---
window.aktifDil = 'tr';

const STATIK_CEVIRI = [
  ['.grup-btn', '👥 Groups'],
  ['.oyunlar-ana-btn', 'Games'],
  ['.kategoriler-btn', '📁 Categories'],
  ['#btn-haberler', 'News'],
  ['#haberlerSekmesi h4', '📢 Upcoming Updates'],
  ['#haberlerSekmesi p', 'Upcoming updates and new features will be announced here...'],
  ['#oyun-secim-ekrani p', 'Choose the game you want to play:'],
  ['.oyun-secenek-btn', 'The Dark House (Horror Game)'],
  ['.geri-don-btn', '-> Back to Game Selection'],
  ['.renk-baslik', 'GROUPS'],
  ['.grup-olustur-btn', 'Create Your Group'],
  ['.grup-bitti-btn', 'Done'],
  ['#grupSohbetEkrani .sohbet-bilgi small', 'group chat'],
  ['[onclick*="arsivSekmesi"]', "Aşure's Archive ▾"],
  ['#renkSekmesi button', ['Red', 'Gray', 'White', 'Blue', 'Green', 'Pink', 'Purple']],
  ['.arsiv-oge p', [
    "Yes, this is Aşure's most primitive version, there's nothing in it. Just look at that ugly logo.",
    "Okay, Aşure is at least a bit better. There's a huge search button and a totally useless settings icon. It has a selection feature. The colors changed, and the version color changes with every release.",
    "Now the search button is smaller, the useless settings button is still there, the developers' profile photos are at the top, and the colors and background color changed again.",
    "FINALLY a properly working, decent settings button. The colors have changed.",
    "Language, color change and the developers moved to where they belong, in settings. The search button has a nice color and the selector color has changed.",
    "Those two monkeys are gone (thankfully). Groups, and a categories button that doesn't work yet. The colors have changed.",
    "Not much change, just categories and some bug fixes, and the version number moved to the top center of settings.",
      
    "YES, finally Aşure's best version so far! We can chat in groups, create groups, the archive has been added, rules and categories work, there's a game, a news button, we can write in Memories and Requests, like, reply and report, the colors have changed and the search bar works properly. Perfect 10, 5 stars."
  ]]
];

const PLACEHOLDER_CEVIRI = [
  ['#grupAdiInp', 'Group Name'],
  ['#grupKisiInp', 'Number of People (e.g. 5, 10, 20)'],
  ['#grupAmacInp', "What is the group's purpose?"],
  ['#sohbetInput', 'Message']
];

const ORTAK_CEVIRI = [
  ['Yanıtları Gör', 'View Replies'],
  ['Yanıtla', 'Reply'],
  ['Anonim Hesap', 'Anonymous Account'],
  ['Özel Alan', 'Private Area'],
  ['Genel Alan', 'Public Area'],
  ['Gönder', 'Send'],
  ['Gruba Gir', 'Enter Group'],
  ['Gruba Katıl', 'Join Chat']
];

function metniCevir(s, en) {
  ORTAK_CEVIRI.forEach(([tr, e]) => {
    s = en ? s.split(tr).join(e) : s.split(e).join(tr);
  });
  return s;
}

function grupPCevir(s, en) {
  if (en) {
    s = s.replace(/^Amaç:/, 'Purpose:');
    s = s.replace(/^(.*) grubuna katıldınız!$/, 'You joined $1!');
  } else {
    s = s.replace(/^Purpose:/, 'Amaç:');
    s = s.replace(/^You joined (.*)!$/, '$1 grubuna katıldınız!');
  }
  return s;
}

function metinDugumleri(el, fn) {
  el.childNodes.forEach(n => {
    if (n.nodeType === 3) n.nodeValue = fn(n.nodeValue);
  });
}

function kategoriMetinleriniGuncelle() {
  const en = window.aktifDil === 'en';
  const ist = window.aktifKategori === 'istedikleriniz';
  const d = dilVerileri[en ? 'en' : 'tr'];

  const btn = document.getElementById('btn-istedikleriniz');
  const baslik = document.getElementById('lbl-hikaye-baslik');
  const inp = document.getElementById('inp-hikaye');
  const yok = document.getElementById('lbl-hikaye-ok');

  if (btn) btn.innerText = ist
    ? (en ? 'Memories-Stories / Back' : 'anı-hikaye / dön')
    : (en ? 'Your Requests / Enter' : 'istedikleriniz/giriş');

  if (baslik) baslik.innerHTML = ist
    ? "<b style='color:#7b1fa2;'>" + (en ? 'YOUR REQUESTS AND PRIVATE AREA' : 'İSTEDİKLERİNİZ VE ÖZEL ALAN') + '</b>'
    : '<b>' + d.hikayeBaslik + '</b>';

  if (inp) inp.placeholder = ist
    ? (en ? 'write text for your private group or area...' : 'özel grubunuza veya alanınıza ait metin yazın...')
    : d.hikayeInp;

  if (yok) yok.innerText = ist
    ? (en ? 'There are no messages in this private category yet' : 'şu an bu özel kategoride hiçbir mesaj yok')
    : d.hikayeyok;
}

function dinamikCevir() {
  const en = window.aktifDil === 'en';

  document.querySelectorAll('#hikayelerListesi button, #hikayelerListesi b, #hikayelerListesi > div > span')
    .forEach(el => metinDugumleri(el, s => metniCevir(s, en)));

  document.querySelectorAll('#gruplarListesi button')
    .forEach(el => metinDugumleri(el, s => metniCevir(s, en)));

  document.querySelectorAll('#gruplarListesi p')
    .forEach(el => metinDugumleri(el, s => grupPCevir(s, en)));

  document.querySelectorAll('[id$="_yanit_inp"]').forEach(i => {
    i.placeholder = en ? 'Write an anonymous reply...' : 'Anonim olarak yanıt yaz...';
  });

  document.querySelectorAll('.sohbet-tarih').forEach(el => {
    el.textContent = en ? 'Today' : 'Bugün';
  });
  document.querySelectorAll('.sohbet-bos').forEach(el => {
    el.textContent = en ? 'Write a message to start the chat 👋' : 'Sohbeti başlatmak için bir mesaj yaz 👋';
  });
}

function ceviriUygula() {
  const en = window.aktifDil === 'en';

  STATIK_CEVIRI.forEach(([sel, val]) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      const ingilizce = Array.isArray(val) ? val[i] : val;
      if (ingilizce === undefined) return;
      if (!el.dataset.tr) el.dataset.tr = el.textContent;
      el.textContent = en ? ingilizce : el.dataset.tr;
    });
  });

  PLACEHOLDER_CEVIRI.forEach(([sel, val]) => {
    const el = document.querySelector(sel);
    if (!el) return;
    if (!el.dataset.trPh) el.dataset.trPh = el.placeholder;
    el.placeholder = en ? val : el.dataset.trPh;
  });

  kategoriMetinleriniGuncelle();
  dinamikCevir();
}

// --- Mevcut fonksiyonlara bağlama (onlara dokunmadan) ---
(function () {
  const eskiDil = window.dilDegistir;
  window.dilDegistir = function (d) {
    window.aktifDil = d;
    eskiDil(d);
    ceviriUygula();
  };

  const eskiGuncelle = window.kategoriArayuzunuGuncelle;
  window.kategoriArayuzunuGuncelle = function () {
    eskiGuncelle();
    ceviriUygula();
  };

  const eskiKatil = window.gruptaKatildinAdimi;
  window.gruptaKatildinAdimi = function (btn) {
    eskiKatil(btn);
    dinamikCevir();
  };

  const eskiYanit = window.yanitGonder;
  window.yanitGonder = function (id) {
    eskiYanit(id);
    dinamikCevir();
  };

  const eskiSohbetCiz = window.sohbetiCiz;
  window.sohbetiCiz = function () {
    eskiSohbetCiz();
    dinamikCevir();
  };

  const eskiArama = window.aramaYap;
  window.aramaYap = function (k) {
    eskiArama(k);
    const s = document.getElementById('lbl-arama-sonuc');
    if (s) s.innerText = dilVerileri[window.aktifDil].aramaSonucYok;
  };

  const eskiAlert = window.alert;
  const alertCeviri = {
    'Lütfen grup adını yazınız !': 'Please enter a group name!',
    'Bu grup dolu!': 'This group is full!'
  };
  window.alert = function (m) {
    if (window.aktifDil === 'en' && alertCeviri[m]) m = alertCeviri[m];
    eskiAlert.call(window, m);
  };
})();

// --- RENK DEĞİŞTİRİRKEN YUMUŞAK GEÇİŞ ANİMASYONU ---
(function () {
  const eskiRenkDegistir = window.renkDegistir;

  window.renkDegistir = function (renkSecimi) {
    // Değişmeden önceki arka planı yakala
    const stil = getComputedStyle(document.body);
    const eskiResim = stil.backgroundImage;
    const eskiRenk = stil.backgroundColor;

    // Yeni rengi uygula (eski fonksiyon aynen çalışır)
    eskiRenkDegistir(renkSecimi);

    // Eski arka planın kopyasını yeni rengin üstüne koyup soldur
    const katman = document.createElement('div');
    katman.style.cssText =
      'position:fixed; inset:0; z-index:-1; pointer-events:none;' +
      'background-color:' + eskiRenk + ';' +
      'background-image:' + eskiResim + ';' +
      'opacity:1; transition:opacity 0.9s ease-in-out;';
    document.body.appendChild(katman);

    // Bir sonraki karede soldurmaya başla
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        katman.style.opacity = '0';
      });
    });

    // Bitince katmanı temizle
    setTimeout(function () {
      katman.remove();
    }, 1000);
  };
})();

// --- KURALLAR SEKMESİ + ŞİKAYET + YASAKLI İSİMLER ---
const KURAL_METNI = {
  tr: {
    baslik: 'Kurallar ▾',
    liste: [
      'Gerçek adını, soyadını, telefonunu, adresini veya e-postanı yazma. Paylaşırsan bu senin sorumluluğundadır.',
      'Başkasının kişisel bilgisini paylaşma.',
      'Irkçılık, nefret, taciz ve tehdit yasaktır.',
      'Yapımcıların adını (jefo, nyoko) taklit etme.',
      'Kurallara uymayan yorumlar şikayet edilebilir ve silinir.',
      'Site yapım aşamasındadır, verilerin silinebileceğini unutma.'
    ],
    sikayet: '⚠ Şikayet Et',
    sikayetEdildi: '✓ Şikayet edildi',
    sikayetOk: 'Şikayetin yapımcılara iletildi.'
  },
  en: {
    baslik: 'Rules ▾',
    liste: [
      'Do not write your real name, surname, phone, address or email. If you share them, the risk is yours.',
      "Do not share anyone else's personal information.",
      'Racism, hate, harassment and threats are forbidden.',
      "Do not imitate the developers' names (jefo, nyoko).",
      'Comments that break the rules can be reported and will be deleted.',
      'The site is under development, your data may be deleted.'
    ],
    sikayet: '⚠ Report',
    sikayetEdildi: '✓ Reported',
    sikayetOk: 'Your report was sent to the developers.'
  }
};

function kuralMetni() {
  return KURAL_METNI[window.aktifDil === 'en' ? 'en' : 'tr'];
}

// 1) Kurallar sekmesi (ayar paneline eklenir)
(function () {
  const kapsayici = document.querySelector('.ayar-tus-kapsayici');
  if (!kapsayici) return;

  const kutu = document.createElement('div');

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.id = 'btn-kurallar';
  btn.className = 'akordeon-btn btn-lacivert';
  btn.onclick = function () { akordeonAcKapa('kurallarSekmesi'); };

  const icerik = document.createElement('div');
  icerik.id = 'kurallarSekmesi';
  icerik.className = 'akordeon-icerik';

  const liste = document.createElement('div');
  liste.id = 'kurallarListe';
  liste.style.cssText = 'font-size:12px; color:#333; padding:6px 4px; line-height:1.5;';
  icerik.appendChild(liste);

  kutu.appendChild(btn);
  kutu.appendChild(icerik);
  kapsayici.appendChild(kutu);
})();

function kurallariYaz() {
  const k = kuralMetni();
  const btn = document.getElementById('btn-kurallar');
  const liste = document.getElementById('kurallarListe');
  if (btn) btn.textContent = k.baslik;
  if (liste) {
    liste.innerHTML = '';
    k.liste.forEach((madde, i) => {
      const p = document.createElement('p');
      p.style.margin = '0 0 6px 0';
      p.textContent = (i + 1) + '. ' + madde;
      liste.appendChild(p);
    });
  }
}

// 2) Şikayet et butonu
window.sikayetler = window.sikayetler || [];
window.sikayetEdilenIdler = window.sikayetEdilenIdler || {};

function sikayetButonlariniGuncelle() {
  const k = kuralMetni();
  document.querySelectorAll('#hikayelerListesi > div[id^="hikaye_"]').forEach(kart => {
    const oyBtn = kart.querySelector('button[onclick^="oyVer"]');
    if (!oyBtn) return;
    let sb = kart.querySelector('.sikayet-btn');
    if (!sb) {
      sb = document.createElement('button');
      sb.type = 'button';
      sb.className = 'sikayet-btn';
      sb.setAttribute('onclick', "yorumuSikayetEt('" + kart.id + "')");
      sb.style.cssText = 'background:none; border:none; color:#b91c1c; cursor:pointer; font-size:11px; margin-left:auto;';
      oyBtn.parentElement.appendChild(sb);
    }
    const edildi = !!window.sikayetEdilenIdler[kart.id];
    sb.textContent = edildi ? k.sikayetEdildi : k.sikayet;
    sb.disabled = edildi;
  });
}

function yorumuSikayetEt(id) {
  if (window.sikayetEdilenIdler[id]) return;
  const kart = document.getElementById(id);
  if (!kart) return;
  const metinEl = kart.querySelector('.hikaye-metin-icerik');

  window.sikayetler.push({
    id: id,
    metin: metinEl ? metinEl.textContent : '',
    kategori: window.aktifKategori,
    zaman: Date.now()
  });
  window.sikayetEdilenIdler[id] = true;

  sikayetButonlariniGuncelle();
  alert(kuralMetni().sikayetOk);
}

// 3) Yasaklı isimler (kayıt ekranında kullanılacak)
const YASAKLI_ISIMLER = ['jefo', 'nyoko', 'yapimci', 'asure', 'admin', 'moderator', 'yonetici'];

function isimNormallestir(s) {
  return String(s).toLowerCase()
    .replace(/ı/g, 'i').replace(/ş/g, 's').replace(/ç/g, 'c')
    .replace(/ğ/g, 'g').replace(/ö/g, 'o').replace(/ü/g, 'u')
    .replace(/0/g, 'o').replace(/1/g, 'i').replace(/3/g, 'e')
    .replace(/4/g, 'a').replace(/5/g, 's').replace(/7/g, 't')
    .replace(/[^a-z]/g, '');
}

function isimYasakliMi(nick) {
  const n = isimNormallestir(nick);
  return YASAKLI_ISIMLER.some(y => n.includes(y));
}

// Mevcut fonksiyonlara bağlama
(function () {
  const eskiGuncelle = window.kategoriArayuzunuGuncelle;
  window.kategoriArayuzunuGuncelle = function () {
    eskiGuncelle();
    sikayetButonlariniGuncelle();
  };

  const eskiDil = window.dilDegistir;
  window.dilDegistir = function (d) {
    eskiDil(d);
    kurallariYaz();
    sikayetButonlariniGuncelle();
  };

  kurallariYaz();
})();

// --- TAKMA AD (NICKNAME) GİRİŞ / KAYIT EKRANI ---
const NICK_REGEX = /^[A-Za-z0-9_çğıöşüÇĞİÖŞÜ]{3,16}$/;

const GIRIS_METNI = {
  tr: {
    pill: '👤 Giriş / Kayıt',
    baslik: 'Takma Ad Seç',
    nick: 'Takma adın (3-16 harf, rakam, _)',
    sifre: 'Şifre (en az 6 karakter)',
    uyari: 'Gerçek adını, soyadını veya kişisel bilgini yazma.',
    devam: 'Devam',
    kapat: 'Kapat',
    cikis: 'Çıkış yap',
    girildi: 'Giriş yapıldı:',
    goster: 'Şifreyi göster',
    gizle: 'Şifreyi gizle',
    hataGecersiz: 'Takma ad 3-16 karakter olmalı. Sadece harf, rakam ve _ kullan.',
    hataYasakli: 'Bu takma ad kullanılamaz.',
    hataSifre: 'Şifre en az 6 karakter olmalı.'
  },
  en: {
    pill: '👤 Sign in / Sign up',
    baslik: 'Choose a Nickname',
    nick: 'Nickname (3-16 letters, numbers, _)',
    sifre: 'Password (at least 6 characters)',
    uyari: 'Do not write your real name, surname or personal information.',
    devam: 'Continue',
    kapat: 'Close',
    cikis: 'Sign out',
    girildi: 'Signed in as:',
    goster: 'Show password',
    gizle: 'Hide password',
    hataGecersiz: 'Nickname must be 3-16 characters. Only letters, numbers and _.',
    hataYasakli: 'This nickname cannot be used.',
    hataSifre: 'Password must be at least 6 characters.'
  }
};

function girisMetni() {
  return GIRIS_METNI[window.aktifDil === 'en' ? 'en' : 'tr'];
}

window.mevcutKullanici = null;
try {
  const kayitli = localStorage.getItem('asure_nick');
  if (kayitli && NICK_REGEX.test(kayitli) && !isimYasakliMi(kayitli)) {
    window.mevcutKullanici = { nick: kayitli };
  }
} catch (e) {}

// Üst sol buton
const girisPill = document.createElement('button');
girisPill.type = 'button';
girisPill.id = 'btn-giris';
girisPill.style.cssText = 'position:fixed; top:15px; left:15px; z-index:1000; background:#1e3a8a; color:#fff; border:none; border-radius:20px; padding:10px 14px; font-size:12px; font-weight:bold; cursor:pointer; box-shadow:0 4px 12px rgba(0,0,0,0.15);';
girisPill.onclick = function () { girisAc(); };
document.body.appendChild(girisPill);

// Giriş penceresi
const girisOverlay = document.createElement('div');
girisOverlay.id = 'girisOverlay';
girisOverlay.style.cssText = 'position:fixed; inset:0; background:rgba(0,0,0,0.6); z-index:2100; display:none; align-items:center; justify-content:center;';

const girisKutu = document.createElement('div');
girisKutu.style.cssText = 'background:#fff; color:#000; width:90%; max-width:320px; padding:18px; border-radius:12px; display:flex; flex-direction:column; gap:10px;';

const gBaslik = document.createElement('h3');
gBaslik.style.cssText = 'margin:0; color:#000; text-align:center;';

const gNick = document.createElement('input');
gNick.type = 'text';
gNick.id = 'girisNick';
gNick.className = 'grup-input';
gNick.maxLength = 16;
gNick.autocomplete = 'off';
gNick.style.color = '#000';

// Şifre kutusu + göz düğmesi
const gSifreKap = document.createElement('div');
gSifreKap.style.cssText = 'position:relative; width:100%;';

const gSifre = document.createElement('input');
gSifre.type = 'password';
gSifre.id = 'girisSifre';
gSifre.className = 'grup-input';
gSifre.autocomplete = 'off';
gSifre.style.color = '#000';
gSifre.style.paddingRight = '48px';

const GOZ_ACIK = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#475569" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>';
const GOZ_KAPALI = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#475569" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/><path d="M3 3l18 18"/></svg>';

const gGoz = document.createElement('button');
gGoz.type = 'button';
gGoz.style.cssText = 'position:absolute; right:6px; top:50%; transform:translateY(-50%); background:none; border:none; cursor:pointer; padding:6px; display:flex; align-items:center; z-index:2;';

function gozGuncelle() {
  const gizli = gSifre.type === 'password';
  gGoz.innerHTML = gizli ? GOZ_KAPALI : GOZ_ACIK;
  gGoz.setAttribute('aria-label', gizli ? girisMetni().goster : girisMetni().gizle);
}

gGoz.onclick = function () {
  gSifre.type = gSifre.type === 'password' ? 'text' : 'password';
  gozGuncelle();
  gSifre.focus();
};

gSifreKap.appendChild(gSifre);
gSifreKap.appendChild(gGoz);

const gUyari = document.createElement('p');
gUyari.style.cssText = 'margin:0; font-size:11px; color:#b91c1c;';

const gHata = document.createElement('p');
gHata.style.cssText = 'margin:0; font-size:12px; color:#b91c1c; font-weight:bold; min-height:14px;';

const gDevam = document.createElement('button');
gDevam.type = 'button';
gDevam.style.cssText = 'background:#1e3a8a; color:#fff; border:none; padding:10px; border-radius:8px; font-weight:bold; cursor:pointer;';
gDevam.onclick = function () { girisGonder(); };

const gDurum = document.createElement('p');
gDurum.style.cssText = 'margin:0; font-size:13px; color:#000; text-align:center; font-weight:bold;';

const gCikis = document.createElement('button');
gCikis.type = 'button';
gCikis.style.cssText = 'background:#b91c1c; color:#fff; border:none; padding:10px; border-radius:8px; font-weight:bold; cursor:pointer;';
gCikis.onclick = function () { cikisYap(); };

const gKapat = document.createElement('button');
gKapat.type = 'button';
gKapat.style.cssText = 'background:#e2e8f0; color:#334155; border:none; padding:8px; border-radius:8px; font-weight:600; cursor:pointer;';
gKapat.onclick = function () { girisKapat(); };

[gBaslik, gNick, gSifreKap, gUyari, gHata, gDevam, gDurum, gCikis, gKapat]
  .forEach(function (el) { girisKutu.appendChild(el); });
girisOverlay.appendChild(girisKutu);
document.body.appendChild(girisOverlay);

gNick.addEventListener('keypress', function (e) { if (e.key === 'Enter') gSifre.focus(); });
gSifre.addEventListener('keypress', function (e) { if (e.key === 'Enter') girisGonder(); });

function girisArayuzuYaz() {
  const m = girisMetni();
  const girildi = !!window.mevcutKullanici;

  girisPill.textContent = girildi ? '👤 ' + window.mevcutKullanici.nick : m.pill;
  gBaslik.textContent = m.baslik;
  gNick.placeholder = m.nick;
  gSifre.placeholder = m.sifre;
  gUyari.textContent = m.uyari;
  gDevam.textContent = m.devam;
  gCikis.textContent = m.cikis;
  gKapat.textContent = m.kapat;
  gDurum.textContent = girildi ? m.girildi + ' ' + window.mevcutKullanici.nick : '';

  gNick.style.display = girildi ? 'none' : 'block';
  gSifreKap.style.display = girildi ? 'none' : 'block';
  gUyari.style.display = girildi ? 'none' : 'block';
  gDevam.style.display = girildi ? 'none' : 'block';
  gDurum.style.display = girildi ? 'block' : 'none';
  gCikis.style.display = girildi ? 'block' : 'none';

  gozGuncelle();
}

function girisAc() {
  gHata.textContent = '';
  girisArayuzuYaz();
  girisOverlay.style.display = 'flex';
}

function girisKapat() {
  girisOverlay.style.display = 'none';
  gSifre.value = '';
  gSifre.type = 'password';
  gozGuncelle();
}

function girisGonder() {
  const m = girisMetni();
  const nick = gNick.value.trim();
  const sifre = gSifre.value;

  if (!NICK_REGEX.test(nick)) { gHata.textContent = m.hataGecersiz; return; }
  if (isimYasakliMi(nick)) { gHata.textContent = m.hataYasakli; return; }
  if (sifre.length < 6) { gHata.textContent = m.hataSifre; return; }

  // Şifre bilerek hiçbir yere kaydedilmiyor. Gerçek kontrol Firebase ile gelecek.
  window.mevcutKullanici = { nick: nick };
  try { localStorage.setItem('asure_nick', nick); } catch (e) {}

  gNick.value = '';
  girisKapat();
  girisArayuzuYaz();
}

function cikisYap() {
  window.mevcutKullanici = null;
  try { localStorage.removeItem('asure_nick'); } catch (e) {}
  girisKapat();
  girisArayuzuYaz();
}

(function () {
  const eskiDil = window.dilDegistir;
  window.dilDegistir = function (d) {
    eskiDil(d);
    girisArayuzuYaz();
  };
  girisArayuzuYaz();
})();

// --- AKTİF KULLANICI (ÇEVRİMİÇİ) SAYACI ---
window.cevrimiciSayisi = 1; // Firebase gelince gerçek sayı buraya yazılacak

const CEVRIMICI_METNI = {
  tr: 'çevrimiçi',
  en: 'online'
};

const cevrimiciRozet = document.createElement('div');
cevrimiciRozet.id = 'cevrimiciRozet';
cevrimiciRozet.style.cssText =
  'display:inline-flex; align-items:center; gap:6px; background:#ffffff; color:#000000;' +
  'border:1px solid #cbd5e1; border-radius:20px; padding:5px 12px; font-size:12px;' +
  'font-weight:bold; box-shadow:0 2px 6px rgba(0,0,0,0.08);';

const cevrimiciNokta = document.createElement('span');
cevrimiciNokta.style.cssText =
  'width:9px; height:9px; border-radius:50%; background:#22c55e; display:inline-block;';

const cevrimiciYazi = document.createElement('span');

cevrimiciRozet.appendChild(cevrimiciNokta);
cevrimiciRozet.appendChild(cevrimiciYazi);

// Arama çubuğunun hemen üstüne yerleştir
(function () {
  const arama = document.querySelector('.arama-kapsayici');
  if (!arama || !arama.parentNode) return;

  const sarmal = document.createElement('div');
  sarmal.style.cssText = 'margin-top:40px; text-align:center;';
  sarmal.appendChild(cevrimiciRozet);
  arama.parentNode.insertBefore(sarmal, arama);
})();

function cevrimiciSayisiniGuncelle(sayi) {
  if (typeof sayi === 'number' && sayi >= 0) {
    window.cevrimiciSayisi = sayi;
  }
  const dil = window.aktifDil === 'en' ? 'en' : 'tr';
  cevrimiciYazi.textContent = window.cevrimiciSayisi + ' ' + CEVRIMICI_METNI[dil];
}

(function () {
  const eskiDil = window.dilDegistir;
  window.dilDegistir = function (d) {
    eskiDil(d);
    cevrimiciSayisiniGuncelle();
  };
  cevrimiciSayisiniGuncelle();
})();

// --- GENİŞLETİLMİŞ ARAMA (yorum, grup, oyun, haber, kurallar) ---
const ARAMA_ETIKET = {
  tr: { ani: 'Anı/Hikaye yorumu', ist: 'İstedikleriniz yorumu', grup: 'Grup', oyun: 'Oyun', haber: 'Haber', kural: 'Kurallar', yok: 'hiçbir sonuç bulunamadı' },
  en: { ani: 'Memory/Story comment', ist: 'Requests comment', grup: 'Group', oyun: 'Game', haber: 'News', kural: 'Rules', yok: 'no results found' }
};

function aramaNorm(s) {
  return String(s)
    .replace(/İ/g, 'i').replace(/I/g, 'i').toLowerCase()
    .replace(/ı/g, 'i').replace(/ş/g, 's').replace(/ç/g, 'c')
    .replace(/ğ/g, 'g').replace(/ö/g, 'o').replace(/ü/g, 'u');
}

function aramaKategoriGec(hedef) {
  if (window.aktifKategori !== hedef) kategoriDegistir(hedef);
}

function aramaYorumaGit(kategori, id) {
  aramaKategoriGec(kategori);
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  el.style.boxShadow = '0 0 0 3px #f59e0b';
  setTimeout(function () { el.style.boxShadow = ''; }, 1500);
}

function aramaGrubaGit(kategori) {
  aramaKategoriGec(kategori);
  const panel = document.getElementById('gruplarPaneli');
  if (panel) panel.classList.add('aktif');
}

function aramaOyunaGit() {
  const s = document.getElementById('oyunlarSekmeAlani');
  if (s) { s.classList.add('aktif'); s.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
}

function aramaHabereGit() {
  const s = document.getElementById('haberlerSekmesi');
  if (s) { s.classList.add('aktif'); s.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
}

function aramaKurallaraGit() {
  const p = document.getElementById('ayarPaneli');
  const k = document.getElementById('kurallarSekmesi');
  if (p) p.classList.add('acik');
  if (k) k.classList.add('aktif');
}

function aramaSonuclariTopla(aranan) {
  const dil = window.aktifDil === 'en' ? 'en' : 'tr';
  const E = ARAMA_ETIKET[dil];
  const sonuc = [];
  const bul = function (metin) { return aramaNorm(metin).includes(aranan); };

  // 1) Yorumlar (iki kategori)
  [['ani', E.ani], ['istedikleriniz', E.ist]].forEach(function (k) {
    window.kategoriDeposu[k[0]].hikayeler.forEach(function (item) {
      if (bul(item.text)) {
        sonuc.push({ etiket: k[1], metin: item.text, git: function () { aramaYorumaGit(k[0], item.id); } });
      }
    });
  });

  // 2) Gruplar (ad ve amaç)
  ['ani', 'istedikleriniz'].forEach(function (kat) {
    window.kategoriDeposu[kat].gruplar.forEach(function (html) {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const a = doc.querySelector('a');
      const ad = a ? a.textContent.trim() : '';
      let amac = '';
      doc.querySelectorAll('p').forEach(function (p) {
        const t = p.textContent.trim();
        if (/^(Amaç|Purpose):/.test(t)) amac = t;
      });
      if (bul(ad + ' ' + amac)) {
        sonuc.push({ etiket: E.grup, metin: ad + (amac ? ' - ' + amac : ''), git: function () { aramaGrubaGit(kat); } });
      }
    });
  });

  // 3) Oyun
  const oyunAdi = dil === 'en' ? 'The Dark House (Horror Game)' : 'The Dark House (Korku Oyunu)';
  if (bul(oyunAdi + ' oyun oyunlar game games korku horror')) {
    sonuc.push({ etiket: E.oyun, metin: oyunAdi, git: aramaOyunaGit });
  }

  // 4) Haberler
  const haberAdi = dil === 'en' ? 'Upcoming Updates' : 'Yaklaşan Güncellemeler';
  if (bul(haberAdi + ' haber haberler news guncelleme update')) {
    sonuc.push({ etiket: E.haber, metin: haberAdi, git: aramaHabereGit });
  }

  // 5) Kurallar
  const maddeler = (typeof kuralMetni === 'function') ? kuralMetni().liste : [];
  maddeler.forEach(function (madde, i) {
    if (bul(madde + ' kural kurallar rules')) {
      sonuc.push({ etiket: E.kural, metin: (i + 1) + '. ' + madde, git: aramaKurallaraGit });
    }
  });

  return sonuc;
}

window.aramaYap = function (arananKelime) {
  const aranan = aramaNorm(arananKelime).trim();
  const kutu = document.getElementById('aramaSonucSekmesi');
  if (!kutu) return;

  const dil = window.aktifDil === 'en' ? 'en' : 'tr';
  kutu.innerHTML = '';

  const sonuclar = aranan === '' ? [] : aramaSonuclariTopla(aranan);

  if (sonuclar.length === 0) {
    const p = document.createElement('p');
    p.id = 'lbl-arama-sonuc';
    p.textContent = ARAMA_ETIKET[dil].yok;
    kutu.appendChild(p);
    return;
  }

  sonuclar.slice(0, 20).forEach(function (s) {
    const satir = document.createElement('div');
    satir.style.cssText = 'padding:6px 4px; border-bottom:1px solid #ddd; cursor:pointer; text-align:left;';

    const etiket = document.createElement('div');
    etiket.style.cssText = 'font-size:10px; font-weight:bold; opacity:0.6;';
    etiket.textContent = s.etiket;

    const metin = document.createElement('div');
    metin.style.cssText = 'font-size:12px; word-break:break-word;';
    metin.textContent = s.metin.length > 70 ? s.metin.slice(0, 70) + '...' : s.metin;

    satir.appendChild(etiket);
    satir.appendChild(metin);
    satir.onclick = function () {
      kutu.classList.remove('aktif');
      s.git();
    };
    kutu.appendChild(satir);
  });
};

// --- ARAMA SONUÇLARI HER ZAMAN SİYAH ---
(function () {
  const st = document.createElement('style');
  st.textContent =
    '#aramaSonucSekmesi, #aramaSonucSekmesi *, #lbl-arama-sonuc { color:#000000 !important; }' +
    '#inp-arama { color:#000000 !important; }' +
    '#inp-arama::placeholder { color:#6b7280 !important; }';
  document.head.appendChild(st);
})();

// --- GRUP SOHBETİ (lacivert tema, kendi kendine yeten sürüm) ---
(function () {
  const eskiEkran = document.getElementById('grupSohbetEkrani');
  if (eskiEkran) eskiEkran.remove();

  const METIN = {
    tr: { durum: 'grup sohbeti', yaz: 'Mesaj yaz', bos: 'Sohbeti başlatmak için bir mesaj yaz 👋', bugun: 'Bugün' },
    en: { durum: 'group chat', yaz: 'Type a message', bos: 'Write a message to start the chat 👋', bugun: 'Today' }
  };
  function m() { return METIN[window.aktifDil === 'en' ? 'en' : 'tr']; }

  window.asureSohbetler = window.asureSohbetler || {};
  let anahtar = null;

  // Ekran
  const ekran = document.createElement('div');
  ekran.style.cssText = 'position:fixed; inset:0; height:100dvh; background:#e8eefb; z-index:1800; display:none; flex-direction:column;';

  const ust = document.createElement('div');
  ust.style.cssText = 'display:flex; align-items:center; gap:10px; padding:10px 12px; background:#1e3a8a; color:#fff;';

  const geri = document.createElement('button');
  geri.type = 'button';
  geri.textContent = '←';
  geri.style.cssText = 'background:none; border:none; color:#fff; font-size:24px; cursor:pointer; padding:0 6px;';

  const avatar = document.createElement('div');
  avatar.style.cssText = 'width:40px; height:40px; border-radius:50%; background:#3b82f6; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:18px; flex-shrink:0;';

  const bilgi = document.createElement('div');
  bilgi.style.cssText = 'line-height:1.2;';
  const baslik = document.createElement('div');
  baslik.style.cssText = 'font-weight:600; font-size:16px; color:#fff;';
  const altYazi = document.createElement('small');
  altYazi.style.cssText = 'font-size:11px; color:#cbd5e1;';
  bilgi.appendChild(baslik);
  bilgi.appendChild(altYazi);

  ust.appendChild(geri);
  ust.appendChild(avatar);
  ust.appendChild(bilgi);

  const mesajlar = document.createElement('div');
  mesajlar.style.cssText = 'flex:1; overflow-y:auto; padding:12px; display:flex; flex-direction:column; gap:6px;';

  const alt = document.createElement('div');
  alt.style.cssText = 'display:flex; align-items:center; gap:8px; padding:8px 10px; background:#dbe4f7;';

  const girdi = document.createElement('input');
  girdi.type = 'text';
  girdi.autocomplete = 'off';
  girdi.style.cssText = 'flex:1; padding:11px 16px; border:none; border-radius:22px; background:#fff; color:#000; font-size:15px; outline:none;';

  const gonder = document.createElement('button');
  gonder.type = 'button';
  gonder.textContent = '➤';
  gonder.style.cssText = 'width:44px; height:44px; border:none; border-radius:50%; background:#1e3a8a; color:#fff; font-size:18px; cursor:pointer; flex-shrink:0;';

  alt.appendChild(girdi);
  alt.appendChild(gonder);

  ekran.appendChild(ust);
  ekran.appendChild(mesajlar);
  ekran.appendChild(alt);
  document.body.appendChild(ekran);

  function yaziYaz() {
    altYazi.textContent = m().durum;
    girdi.placeholder = m().yaz;
  }

  function ciz() {
    const liste = window.asureSohbetler[anahtar] || [];
    mesajlar.innerHTML = '';

    const tarih = document.createElement('div');
    tarih.textContent = m().bugun;
    tarih.style.cssText = 'align-self:center; background:#fff; color:#475569; font-size:11px; padding:4px 12px; border-radius:8px; margin:6px 0 10px;';
    mesajlar.appendChild(tarih);

    if (liste.length === 0) {
      const bos = document.createElement('div');
      bos.textContent = m().bos;
      bos.style.cssText = 'align-self:center; background:#fff; color:#475569; font-size:12px; padding:6px 12px; border-radius:8px; margin-top:10px;';
      mesajlar.appendChild(bos);
      return;
    }

    liste.forEach(function (x) {
      const balon = document.createElement('div');
      balon.style.cssText = 'align-self:flex-end; background:#1e3a8a; color:#fff; padding:6px 10px 4px 10px; border-radius:12px 12px 2px 12px; max-width:80%; font-size:14px; line-height:1.35; word-break:break-word;';

      const metin = document.createElement('span');
      metin.textContent = x.metin; // güvenli: HTML çalıştırmaz

      const saat = document.createElement('span');
      saat.textContent = x.saat + ' ✓✓';
      saat.style.cssText = 'float:right; margin:6px 0 0 10px; font-size:10px; color:#bfdbfe; white-space:nowrap;';

      balon.appendChild(metin);
      balon.appendChild(saat);
      mesajlar.appendChild(balon);
    });
    mesajlar.scrollTop = mesajlar.scrollHeight;
  }

  function gonderMesaj() {
    if (!anahtar) return;
    const metin = girdi.value.trim();
    if (!metin) return;
    const saat = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
    window.asureSohbetler[anahtar].push({ metin: metin, saat: saat });
    girdi.value = '';
    ciz();
    girdi.focus();
  }

  gonder.onclick = gonderMesaj;
  girdi.addEventListener('keypress', function (e) { if (e.key === 'Enter') gonderMesaj(); });

  function kapat() {
    ekran.style.display = 'none';
    anahtar = null;
  }
  geri.onclick = kapat;

  // "Gruba Katıl" butonu bunu çağırır (eski fonksiyonların yerini alır)
  window.grupSohbetiAc = function (btn) {
    const kart = btn && btn.closest ? btn.closest('.grup-kart') : null;
    if (!kart) return;
    const a = kart.querySelector('a');
    const ad = a ? a.textContent.trim() : 'Grup';

    anahtar = window.aktifKategori + '::' + ad;
    if (!window.asureSohbetler[anahtar]) window.asureSohbetler[anahtar] = [];

    baslik.textContent = ad;
    avatar.textContent = ad.charAt(0).toUpperCase();
    yaziYaz();
    ciz();
    ekran.style.display = 'flex';
    girdi.focus();
  };
  window.grupSohbetiKapat = kapat;

  // Dil değişince yazıları güncelle
  const eskiDil = window.dilDegistir;
  window.dilDegistir = function (d) {
    eskiDil(d);
    yaziYaz();
    if (anahtar) ciz();
  };
  yaziYaz();
})();

// --- GRUPTAN ÇIK + YORUM SİL (yazan kişi ve yapımcılar) ---

// Bu cihaza özel gizli kimlik (giriş yapmayanlar da kendi yorumunu silebilsin)
function cihazKimligi() {
  let id = null;
  try { id = localStorage.getItem('asure_cihaz'); } catch (e) {}
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    try { localStorage.setItem('asure_cihaz', id); } catch (e) {}
  }
  return id;
}
const BU_CIHAZ = cihazKimligi();

function yazarAnahtari() {
  const k = window.mevcutKullanici;
  if (k && k.nick) return 'n:' + String(k.nick).toLowerCase();
  return 'c:' + BU_CIHAZ;
}

function yapimciMi() {
  const k = window.mevcutKullanici;
  return !!(k && (k.rol === 'jefo' || k.rol === 'nyoko'));
}

function silYetkisiVarMi(item) {
  return yapimciMi() || (item.yazar && item.yazar === yazarAnahtari());
}

const SIL_METNI = {
  tr: { sil: '🗑 Sil', onay: 'Bu yorum silinsin mi?', cik: 'Gruptan Çık', gir: 'Gruba Gir' },
  en: { sil: '🗑 Delete', onay: 'Delete this comment?', cik: 'Leave Group', gir: 'Enter Group' }
};
function silMetni() {
  return SIL_METNI[window.aktifDil === 'en' ? 'en' : 'tr'];
}

// ---- Yorum silme ----
function silButonlariniGuncelle() {
  const depo = window.kategoriDeposu[window.aktifKategori];
  document.querySelectorAll('#hikayelerListesi > div[id^="hikaye_"]').forEach(function (kart) {
    const eski = kart.querySelector('.sil-btn');
    if (eski) eski.remove();

    const item = depo.hikayeler.find(function (h) { return h.id === kart.id; });
    if (!item || !silYetkisiVarMi(item)) return;

    const oyBtn = kart.querySelector('button[onclick^="oyVer"]');
    if (!oyBtn) return;

    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'sil-btn';
    b.setAttribute('onclick', "yorumuSil('" + kart.id + "')");
    b.style.cssText = 'background:none; border:none; color:#b91c1c; cursor:pointer; font-size:11px; font-weight:bold; margin-left:auto;';
    b.textContent = silMetni().sil;
    oyBtn.parentElement.appendChild(b);
  });
}

function yorumuSil(id) {
  const depo = window.kategoriDeposu[window.aktifKategori];
  const sira = depo.hikayeler.findIndex(function (h) { return h.id === id; });
  if (sira === -1) return;
  if (!silYetkisiVarMi(depo.hikayeler[sira])) return;
  if (!confirm(silMetni().onay)) return;

  kategoriDurumunuKaydet();   // diğer yorumların yanıtları kaybolmasın
  depo.hikayeler.splice(sira, 1);
  kategoriArayuzunuGuncelle();
}

// ---- Gruptan çıkma ----
function kartiDepoyaKaydet(kart) {
  const gruplar = window.kategoriDeposu[window.aktifKategori].gruplar;
  const kartlar = Array.prototype.slice.call(document.querySelectorAll('#gruplarListesi > .grup-kart'));
  const i = kartlar.indexOf(kart);
  if (i === -1) return;
  // Liste ekrana ters sırayla çiziliyor (afterbegin)
  const sira = gruplar.length - 1 - i;
  if (sira >= 0 && sira < gruplar.length) gruplar[sira] = kart.outerHTML;
}

function katildiYazisiniIsaretle(kart) {
  kart.querySelectorAll('p').forEach(function (p) {
    if (/katıldınız!|You joined/.test(p.textContent)) p.classList.add('katildi-yazi');
  });
}

function cikisButonuEkle(kart) {
  if (kart.querySelector('.gruptan-cik-btn')) return;
  const yesil = kart.querySelector('button[onclick="grupSohbetiAc(this)"]');
  if (!yesil) return; // katılma gerçekleşmediyse (grup doluysa) ekleme

  const k = document.createElement('button');
  k.type = 'button';
  k.className = 'gruptan-cik-btn';
  k.setAttribute('onclick', 'gruptanCik(this)');
  k.style.cssText = 'background:#dc2626; color:#fff; border:none; padding:6px 14px; font-size:12px; font-weight:bold; border-radius:6px; cursor:pointer; margin:4px 0 8px 6px;';
  k.textContent = silMetni().cik;
  yesil.after(k);
}

function gruptanCik(btn) {
  const kart = btn.closest('.grup-kart');
  if (!kart) return;

  const sayac = kart.querySelector('tt');
  if (sayac) {
    const p = sayac.textContent.split('/');
    const mevcut = parseInt(p[0]) || 0;
    const kapasite = parseInt(p[1]) || 0;
    sayac.textContent = Math.max(0, mevcut - 1) + '/' + kapasite;
  }

  kart.querySelectorAll('.katildi-yazi').forEach(function (x) { x.remove(); });

  const gir = document.createElement('button');
  gir.type = 'button';
  gir.className = 'gruba-gir-btn';
  gir.setAttribute('onclick', 'gruptaKatildinAdimi(this)');
  gir.textContent = silMetni().gir;

  const yesil = kart.querySelector('button[onclick="grupSohbetiAc(this)"]');
  if (yesil) yesil.replaceWith(gir); else btn.before(gir);
  btn.remove();

  kartiDepoyaKaydet(kart);
}

function gruptanCikYazilariniGuncelle() {
  document.querySelectorAll('.gruptan-cik-btn').forEach(function (b) {
    b.textContent = silMetni().cik;
  });
}

// ---- Mevcut fonksiyonlara bağlama ----
(function () {
  // Yorum çizilirken: yazarı işaretle, silme butonlarını koy
  const eskiGuncelle = window.kategoriArayuzunuGuncelle;
  window.kategoriArayuzunuGuncelle = function () {
    ['ani', 'istedikleriniz'].forEach(function (k) {
      window.kategoriDeposu[k].hikayeler.forEach(function (h) {
        if (!h.yazar) h.yazar = yazarAnahtari();
      });
    });
    eskiGuncelle();
    silButonlariniGuncelle();
    gruptanCikYazilariniGuncelle();
  };

  // Gruba girilince kırmızı "Gruptan Çık" butonunu ekle
  const eskiKatil = window.gruptaKatildinAdimi;
  window.gruptaKatildinAdimi = function (btn) {
    const kart = btn.closest('.grup-kart');
    eskiKatil(btn);
    if (!kart) return;
    katildiYazisiniIsaretle(kart);
    cikisButonuEkle(kart);
    kartiDepoyaKaydet(kart);
  };

  // Dil değişince yazıları güncelle
  const eskiDil = window.dilDegistir;
  window.dilDegistir = function (d) {
    eskiDil(d);
    silButonlariniGuncelle();
    gruptanCikYazilariniGuncelle();
  };

  // Giriş / çıkış yapılınca kimin neyi silebileceği değişir
  if (typeof window.girisGonder === 'function') {
    const eskiGiris = window.girisGonder;
    window.girisGonder = function () { eskiGiris(); silButonlariniGuncelle(); };
  }
  if (typeof window.cikisYap === 'function') {
    const eskiCikis = window.cikisYap;
    window.cikisYap = function () { eskiCikis(); silButonlariniGuncelle(); };
  }
})();
