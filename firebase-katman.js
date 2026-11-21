import {initializeApp} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import {getFirestore,collection,addDoc,deleteDoc,updateDoc,doc,onSnapshot,query,orderBy,limit,serverTimestamp,arrayUnion,arrayRemove} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const app=initializeApp({apiKey:"AIzaSyCLN1h8gJbxgq8e5VpOHep3NKlmWmMXEbE",authDomain:"asure-f9093.firebaseapp.com",projectId:"asure-f9093",storageBucket:"asure-f9093.firebasestorage.app",messagingSenderId:"949621118268",appId:"1:949621118268:web:9417f8c18e409c24b27a39"});
const auth=getAuth(app),db=getFirestore(app);
const $=id=>document.getElementById(id);
const TR={ç:"c",ğ:"g",ı:"i",ö:"o",ş:"s",ü:"u",Ç:"c",Ğ:"g",İ:"i",Ö:"o",Ş:"s",Ü:"u"};
const idOf=n=>n.replace(/[çğıöşüÇĞİÖŞÜ]/g,c=>TR[c]).toLowerCase();
const emailOf=n=>idOf(n)+"@asure.users";
const NICK=/^[A-Za-z0-9_çğıöşüÇĞİÖŞÜ]{3,16}$/;
const BAN=["jefo","nyoko","yapimci","asure","admin","moderator","yonetici"];
const banli=n=>{const s=idOf(n).replace(/0/g,"o").replace(/1/g,"i").replace(/3/g,"e").replace(/4/g,"a").replace(/5/g,"s").replace(/7/g,"t").replace(/[^a-z]/g,"");return BAN.some(b=>s.includes(b))};

let me=null,roles={},items=[],reps=[],groups=[],news=[],repsOn=false;
const myRole=()=>me&&roles[me.uid];
const staff=()=>myRole()==="jefo"||myRole()==="nyoko";
const adim=()=>staff()?(myRole()==="jefo"?"Jefo":"Nyoko"):(me.displayName||"Kullanıcı");
const el=(t,txt,css)=>{const e=document.createElement(t);if(txt!=null)e.textContent=txt;if(css)e.style.cssText=css;return e};
const btn=(txt,fn,css)=>{const b=el("button",txt,"background:none;border:none;cursor:pointer;font-size:12px;"+(css||""));b.type="button";b.onclick=fn;return b};
const MAVI="background:#3b82f6;color:#fff;padding:6px 12px;border-radius:6px;font-weight:bold;margin-right:6px";
const YESIL="background:#16a34a;color:#fff;padding:6px 12px;border-radius:6px;font-weight:bold;margin-right:6px";
const KIRMIZI="background:#dc2626;color:#fff;padding:6px 12px;border-radius:6px;font-weight:bold;margin-right:6px";
function girisIste(){alert("Önce sol üstten giriş yap.");if(window.girisAc)window.girisAc();return false}

function tik(r){
  if(r!=="jefo"&&r!=="nyoko")return null;
  const s=document.createElementNS("http://www.w3.org/2000/svg","svg");
  s.setAttribute("viewBox","0 0 24 24");s.setAttribute("width","15");s.setAttribute("height","15");
  s.style.cssText="margin-left:4px;vertical-align:middle;flex:none";
  s.innerHTML='<circle cx="12" cy="12" r="11" fill="'+(r==="jefo"?"#14307a":"#0b5d2a")+'"/><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>';
  return s;
}
const gorunenAd=(ad,uid)=>(!roles[uid]&&["jefo","nyoko"].includes(String(ad).toLowerCase()))?"Kullanıcı":ad;

/* ---------- giriş / kayıt ---------- */
async function giris(){
  const nick=$("girisNick").value.trim(),pw=$("girisSifre").value;
  if(!NICK.test(nick))return alert("Takma ad 3-16 karakter olmalı. Sadece harf, rakam ve _ kullan.");
  if(pw.length<6)return alert("Şifre en az 6 karakter olmalı.");
  const em=emailOf(nick);
  try{
    if(banli(nick))throw{code:"auth/email-already-in-use"};
    const c=await createUserWithEmailAndPassword(auth,em,pw);
    await updateProfile(c.user,{displayName:nick});
  }catch(e){
    if(e.code==="auth/email-already-in-use"){
      try{await signInWithEmailAndPassword(auth,em,pw)}
      catch(e2){return alert(banli(nick)?"Bu takma ad kullanılamaz.":"Şifre yanlış ya da bu takma ad başkasında.")}
    }else return alert("Hata: "+e.code);
  }
  $("girisNick").value="";
  if(window.girisKapat)window.girisKapat();
  durum();
}
window.girisGonder=giris;
window.cikisYap=()=>{signOut(auth);if(window.girisKapat)window.girisKapat()};

const adBtn=el("button","Adı değiştir","background:#e2e8f0;color:#334155;border:none;padding:8px;border-radius:8px;font-weight:600;cursor:pointer;display:none");
adBtn.type="button";
adBtn.onclick=async()=>{
  const n=prompt("Yeni takma adın (3-16 harf/rakam/_):");if(!n)return;
  const t=n.trim();
  if(!NICK.test(t)||banli(t))return alert("Bu ad kullanılamaz.");
  await updateProfile(auth.currentUser,{displayName:t});durum();
};
const kutu=document.querySelector("#girisOverlay > div");
if(kutu)kutu.insertBefore(adBtn,kutu.lastChild);

function durum(){
  me=auth.currentUser;
  window.mevcutKullanici=me?{nick:adim()}:null;
  try{localStorage.removeItem("asure_nick")}catch(e){}
  if(window.girisArayuzuYaz)window.girisArayuzuYaz();
  adBtn.style.display=me?"block":"none";
  startReps();ciz();
}

/* ---------- yorumlar ---------- */
async function gonder(text,parent){
  if(!me)return girisIste();
  try{await addDoc(collection(db,"comments"),{text,name:adim(),uid:me.uid,kategori:window.aktifKategori,parent:parent||null,likes:[],dislikes:[],createdAt:serverTimestamp()})}
  catch(e){alert("Gönderilemedi: "+e.code)}
}
async function oy(c,tip){
  if(!me)return girisIste();
  const diger=tip==="likes"?"dislikes":"likes";
  const var_=(c[tip]||[]).includes(me.uid);
  await updateDoc(doc(db,"comments",c.id),{[tip]:var_?arrayRemove(me.uid):arrayUnion(me.uid),[diger]:arrayRemove(me.uid)});
}
async function sikayet(c,b){
  if(!me)return girisIste();
  await addDoc(collection(db,"reports"),{commentId:c.id,text:c.text,name:c.name,uid:me.uid,createdAt:serverTimestamp()});
  b.textContent="✓ Şikayet edildi";b.disabled=true;
}
function kart(c,alt){
  const d=el("div",null,"background:#fff;color:#000;border-left:3px solid "+(alt?"#ccc":"#000")+";padding:10px;margin:"+(alt?"6px 0 0 14px":"0 0 10px")+";border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.1)");
  const ust=el("div",null,"font-size:12px;font-weight:bold;display:flex;align-items:center");
  ust.append(el("span","👤 "+gorunenAd(c.name,c.uid)));
  const t=tik(roles[c.uid]);if(t)ust.append(t);
  d.append(ust,el("p",c.text,"margin:4px 0;font-size:13px;word-break:break-word"));
  const a=el("div",null,"display:flex;gap:8px;flex-wrap:wrap;align-items:center");
  a.append(
    btn("👍 "+(c.likes||[]).length,()=>oy(c,"likes"),"border:1px solid #ccc;border-radius:4px;padding:2px 6px"),
    btn("👎 "+(c.dislikes||[]).length,()=>oy(c,"dislikes"),"border:1px solid #ccc;border-radius:4px;padding:2px 6px")
  );
  if(!alt)a.append(btn("Yanıtla",()=>{const y=prompt("Yanıtın:");if(y&&y.trim())gonder(y.trim().slice(0,500),c.id)},"color:#007bff;font-weight:bold"));
  if(me&&c.uid!==me.uid){const sb=btn("⚠ Şikayet Et",()=>sikayet(c,sb),"color:#b91c1c");a.append(sb)}
  if(staff())a.append(btn("🗑 Sil",()=>confirm("Silinsin mi?")&&deleteDoc(doc(db,"comments",c.id)),"color:#b91c1c;font-weight:bold"));
  d.append(a);
  if(!alt)items.filter(x=>x.parent===c.id).sort((p,q)=>p.t-q.t).forEach(r=>d.append(kart(r,true)));
  return d;
}

/* ---------- gruplar ---------- */
window.grupOlusturBitti=async()=>{
  if(!me)return girisIste();
  const ad=$("grupAdiInp").value.trim(),kisi=parseInt($("grupKisiInp").value)||10,amac=$("grupAmacInp").value.trim();
  if(!ad)return alert("Lütfen grup adını yazınız !");
  try{await addDoc(collection(db,"groups"),{name:ad.slice(0,40),cap:kisi,purpose:amac.slice(0,200),uid:me.uid,kategori:window.aktifKategori,members:[me.uid],createdAt:serverTimestamp()})}
  catch(e){return alert("Grup kurulamadı: "+e.code)}
  $("grupAdiInp").value="";$("grupKisiInp").value="";$("grupAmacInp").value="";
  if(window.grupFormuAcKapa)window.grupFormuAcKapa();
};
function grupCiz(){
  const k=$("gruplarListesi");if(!k)return;
  k.replaceChildren();
  groups.filter(g=>g.kategori===window.aktifKategori).forEach(g=>{
    const m=g.members||[];
    const d=el("div",null,"margin-bottom:10px;border-left:3px solid #007bff;padding-left:6px;color:#000");
    d.append(el("p",g.name,"font-weight:bold;margin:2px 0"),el("p",m.length+"/"+g.cap,"color:red;font-size:12px;margin:2px 0"));
    if(g.purpose)d.append(el("p","Amaç: "+g.purpose,"font-size:11px;color:#555;margin:2px 0"));
    if(me&&m.includes(me.uid)){
      d.append(btn("Sohbete Gir",()=>sohbetAc(g),YESIL),btn("Gruptan Çık",()=>updateDoc(doc(db,"groups",g.id),{members:arrayRemove(me.uid)}),KIRMIZI));
    }else{
      d.append(btn("Gruba Gir",()=>{
        if(!me)return girisIste();
        if(m.length>=g.cap)return alert("Bu grup dolu!");
        updateDoc(doc(db,"groups",g.id),{members:arrayUnion(me.uid)});
      },MAVI));
    }
    if(staff())d.append(btn("🗑 Grubu sil",()=>confirm("Grup silinsin mi?")&&deleteDoc(doc(db,"groups",g.id)),"color:#b91c1c"));
    d.append(el("hr"));
    k.append(d);
  });
}
const ov=el("div",null,"position:fixed;inset:0;height:100dvh;z-index:1800;background:#e8eefb;display:none;flex-direction:column;color:#000");
const ovUst=el("div",null,"display:flex;align-items:center;gap:10px;padding:10px 12px;background:#1e3a8a;color:#fff");
const ovGeri=btn("←",()=>{ov.style.display="none";if(unsubChat)unsubChat();unsubChat=null},"color:#fff;font-size:24px");
const ovBaslik=el("div",null,"font-weight:600;font-size:16px");
ovUst.append(ovGeri,ovBaslik);
const ovListe=el("div",null,"flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:6px");
const ovAlt=el("div",null,"display:flex;gap:8px;padding:8px 10px;background:#dbe4f7");
const ovGirdi=el("input",null,"flex:1;padding:11px 16px;border:none;border-radius:22px;background:#fff;color:#000;font-size:15px;outline:none");
ovGirdi.placeholder="Mesaj yaz";ovGirdi.maxLength=500;
const ovGonder=el("button","➤","width:44px;height:44px;border:none;border-radius:50%;background:#1e3a8a;color:#fff;font-size:18px;cursor:pointer");
ovAlt.append(ovGirdi,ovGonder);ov.append(ovUst,ovListe,ovAlt);document.body.append(ov);
let unsubChat=null,aktifG=null;
function sohbetAc(g){
  aktifG=g.id;ovBaslik.textContent=g.name;ov.style.display="flex";
  if(unsubChat)unsubChat();
  unsubChat=onSnapshot(query(collection(db,"groups",g.id,"msgs"),orderBy("createdAt","asc"),limit(200)),s=>{
    ovListe.replaceChildren();
    s.forEach(x=>{
      const m=x.data(),ben=me&&m.uid===me.uid;
      const b=el("div",null,"max-width:80%;padding:6px 10px;border-radius:12px;word-break:break-word;font-size:14px;align-self:"+(ben?"flex-end;background:#1e3a8a;color:#fff":"flex-start;background:#fff;color:#000"));
      const n=el("div",null,"font-size:11px;font-weight:bold;display:flex;align-items:center");
      n.append(el("span",gorunenAd(m.name,m.uid)));const t=tik(roles[m.uid]);if(t)n.append(t);
      b.append(n,el("div",m.text));
      if(staff())b.append(btn("🗑",()=>deleteDoc(doc(db,"groups",g.id,"msgs",x.id)),"color:#b91c1c;font-size:11px"));
      ovListe.append(b);
    });
    ovListe.scrollTop=ovListe.scrollHeight;
  });
}
async function grupMesajGonder(){
  const t=ovGirdi.value.trim();if(!t||!me||!aktifG)return;
  ovGirdi.value="";
  await addDoc(collection(db,"groups",aktifG,"msgs"),{text:t,name:adim(),uid:me.uid,createdAt:serverTimestamp()}).catch(e=>alert("Gönderilemedi: "+e.code));
}
ovGonder.onclick=grupMesajGonder;
ovGirdi.addEventListener("keypress",e=>{if(e.key==="Enter")grupMesajGonder()});

/* ---------- haberler (sadece Jefo yazar) ---------- */
const hGirdi=el("input",null,"width:70%;padding:6px;font-size:12px;border:1px solid #ccc;border-radius:4px;color:#000");
hGirdi.placeholder="Yeni güncelleme yaz";hGirdi.maxLength=300;
const hBtn=btn("Yayınla",async()=>{
  const t=hGirdi.value.trim();if(!t)return;hGirdi.value="";
  await addDoc(collection(db,"news"),{text:t,uid:me.uid,createdAt:serverTimestamp()}).catch(e=>alert("Yayınlanamadı: "+e.code));
},"background:#15803d;color:#fff;padding:6px 10px;border-radius:4px;margin-left:4px");
function haberCiz(){
  const s=$("haberlerSekmesi");if(!s)return;
  s.style.overflowY="auto";s.replaceChildren();
  s.append(el("h4","📢 Güncellemeler","margin:0 0 8px;color:#000;font-size:13px;border-bottom:1px solid #eee;padding-bottom:4px"));
  if(myRole()==="jefo")s.append(el("div"),hGirdi,hBtn);
  if(!news.length)s.append(el("p","İlerleyen zamanlarda gelecek güncellemeler burada duyurulacaktır...","font-size:12px;color:#555;margin:6px 0 0"));
  news.forEach(n=>{
    const p=el("p",null,"font-size:12px;color:#000;margin:6px 0;word-break:break-word");
    p.append(el("span","• "+n.text));
    if(myRole()==="jefo")p.append(btn(" 🗑",()=>deleteDoc(doc(db,"news",n.id)),"color:#b91c1c"));
    s.append(p);
  });
}

/* ---------- çizim ---------- */
function ciz(){
  const kutu=$("hikayelerListesi");if(!kutu)return;
  const liste=items.filter(x=>x.kategori===window.aktifKategori&&!x.parent);
  const yok=$("lbl-hikaye-ok");if(yok)yok.style.display=liste.length?"none":"block";
  kutu.replaceChildren();
  liste.forEach(c=>kutu.append(kart(c,false)));
  let p=$("asureSikayetler");
  if(!p){p=el("div");p.id="asureSikayetler";p.style.padding="0 10px";kutu.before(p)}
  p.replaceChildren();
  if(myRole()==="nyoko")reps.forEach(r=>{
    const b=el("div",null,"background:#fff7ed;color:#000;border-left:3px solid #b91c1c;padding:10px;margin-bottom:8px;border-radius:4px");
    b.append(el("b","⚠ Şikayet: "+r.name),el("p",r.text,"margin:4px 0;font-size:13px;word-break:break-word"));
    b.append(
      btn("Yorumu kaldır",async()=>{await deleteDoc(doc(db,"comments",r.commentId)).catch(()=>{});await deleteDoc(doc(db,"reports",r.id))},"color:#b91c1c;font-weight:bold"),
      btn("Yoksay",()=>deleteDoc(doc(db,"reports",r.id)))
    );
    p.append(b);
  });
  grupCiz();haberCiz();
}
const eski=window.kategoriArayuzunuGuncelle;
window.kategoriArayuzunuGuncelle=function(){eski();ciz()};

const girdi=$("inp-hikaye");
if(girdi)girdi.addEventListener("keypress",e=>{
  if(e.key!=="Enter")return;
  e.stopImmediatePropagation();e.preventDefault();
  const t=girdi.value.trim();if(!t)return;
  girdi.value="";gonder(t.slice(0,500),null);
},true);

/* ---------- Firebase dinleyicileri ---------- */
function startReps(){
  if(repsOn||myRole()!=="nyoko")return;repsOn=true;
  onSnapshot(query(collection(db,"reports"),orderBy("createdAt","desc"),limit(30)),s=>{reps=s.docs.map(d=>({id:d.id,...d.data()}));ciz()});
}
onSnapshot(collection(db,"roles"),s=>{roles={};s.forEach(d=>roles[d.id]=d.data().role);durum()});
onSnapshot(query(collection(db,"comments"),orderBy("createdAt","desc"),limit(300)),s=>{
  items=s.docs.map(d=>{const x=d.data();return{id:d.id,...x,t:x.createdAt?x.createdAt.toMillis():Date.now()}});ciz();
});
onSnapshot(query(collection(db,"groups"),orderBy("createdAt","desc"),limit(100)),s=>{groups=s.docs.map(d=>({id:d.id,...d.data()}));ciz()});
onSnapshot(query(collection(db,"news"),orderBy("createdAt","desc"),limit(10)),s=>{news=s.docs.map(d=>({id:d.id,...d.data()}));haberCiz()});
onAuthStateChanged(auth,()=>durum());
