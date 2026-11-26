import {getApp} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
const auth=getAuth(getApp());
const TR={ç:"c",ğ:"g",ı:"i",ö:"o",ş:"s",ü:"u",Ç:"c",Ğ:"g",İ:"i",Ö:"o",Ş:"s",Ü:"u"};
const mail=n=>n.replace(/[çğıöşüÇĞİÖŞÜ]/g,c=>TR[c]).toLowerCase()+"@asure.users";
window.girisGonder=async function(){
  const nick=document.getElementById("girisNick").value.trim();
  const pw=document.getElementById("girisSifre").value;
  if(nick.length<3||pw.length<6)return alert("Takma ad en az 3, şifre en az 6 karakter olmalı.");
  const m=mail(nick);
  try{await signInWithEmailAndPassword(auth,m,pw)}
  catch(e){
    if(e.code!=="auth/invalid-credential"&&e.code!=="auth/user-not-found")return alert("Hata: "+e.code);
    if(/jefo|nyoko/.test(m))return alert("Şifre yanlış.");
    try{
      const c=await createUserWithEmailAndPassword(auth,m,pw);
      await updateProfile(c.user,{displayName:nick});
      location.reload();
    }catch(e2){
      return alert(e2.code==="auth/email-already-in-use"?"Bu takma ad alınmış ya da şifre yanlış.":"Hata: "+e2.code);
    }
  }
  document.getElementById("girisNick").value="";
  document.getElementById("girisSifre").value="";
  if(window.girisKapat)window.girisKapat();
};
