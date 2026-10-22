/* Extra help features: text size + contrast, language picker, glossary, form helper, offline. Needs script.js first. */
(function(){
const g=id=>document.getElementById(id),L=()=>g("lang").value;
const store={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}};
const say=(txt,l)=>{if(!("speechSynthesis" in window))return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(txt);u.lang=SPEECH[l];const v=speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith(l));if(v)u.voice=v;u.rate=.9;speechSynthesis.speak(u)};

/* 1. text size + high contrast */
const bar=document.createElement("div");bar.className="a11y";
bar.innerHTML='<button id="fsm" type="button" aria-label="Smaller text">A−</button><button id="fsp" type="button" aria-label="Larger text">A+</button><button id="hc" type="button" aria-label="High contrast" aria-pressed="false">◐</button>';
g("lang").before(bar);
let zoom=+store.get("zoom")||1;
const applyZoom=()=>{document.body.style.zoom=zoom;store.set("zoom",zoom)};
g("fsm").onclick=()=>{zoom=Math.max(.9,+(zoom-.1).toFixed(1));applyZoom()};
g("fsp").onclick=()=>{zoom=Math.min(1.5,+(zoom+.1).toFixed(1));applyZoom()};
const setHC=on=>{document.documentElement.classList.toggle("hc",on);g("hc").setAttribute("aria-pressed",on);store.set("hc",on?"1":"")};
g("hc").onclick=()=>setHC(!document.documentElement.classList.contains("hc"));
applyZoom();setHC(!!store.get("hc"));

/* 2. first-visit language picker with spoken greeting */
const NAMES={mr:"मराठी",hi:"हिन्दी",en:"English",gu:"ગુજરાતી",kn:"ಕನ್ನಡ",ta:"தமிழ்",te:"తెలుగు",bn:"বাংলা",or:"ଓଡ଼ିଆ"};
const HI={mr:"नमस्कार",hi:"नमस्ते",en:"Welcome",gu:"નમસ્તે",kn:"ನಮಸ್ಕಾರ",ta:"வணக்கம்",te:"నమస్కారం",bn:"নমস্কার",or:"ନମସ୍କାର"};
if(!store.get("picked")){
  const m=document.createElement("div");m.className="pick";m.setAttribute("role","dialog");m.setAttribute("aria-modal","true");m.setAttribute("aria-label","Choose your language");
  m.innerHTML='<div class="pick-box"><h2>🌐 Choose your language</h2><div class="pick-grid">'+Object.keys(NAMES).map(k=>`<button type="button" data-l="${k}">${NAMES[k]}</button>`).join("")+'</div></div>';
  m.onclick=e=>{const b=e.target.closest("button");if(!b)return;const l=b.dataset.l;
    g("lang").value=l;g("lang").dispatchEvent(new Event("change"));store.set("picked","1");m.remove();say(HI[l],l)};
  document.body.append(m);m.querySelector("button").focus();
}

/* 3. glossary of form words */
const GT={en:"Words you may see on forms",hi:"फॉर्म पर दिखने वाले शब्द",mr:"फॉर्मवर दिसणारे शब्द",gu:"ફોર્મ પર દેખાતા શબ્દો",kn:"ಫಾರ್ಮ್‌ಗಳಲ್ಲಿ ಕಾಣುವ ಪದಗಳು",ta:"படிவங்களில் காணும் சொற்கள்",te:"ఫారాల్లో కనిపించే పదాలు",bn:"ফর্মে দেখা শব্দ",or:"ଫର୍ମରେ ଦେଖାଯାଉଥିବା ଶବ୍ଦ"};
const GL={OTP:{
en:"A one-time code sent to your phone. Enter it to prove it is you. Never share it.",hi:"आपके फोन पर आया एक बार का कोड। इसे डालकर पहचान करें। इसे किसी को न बताएं।",mr:"तुमच्या फोनवर आलेला एकदाच वापरायचा कोड. ओळख पटवण्यासाठी तो टाका. तो कोणालाही सांगू नका.",gu:"તમારા ફોન પર આવેલો એક વારનો કોડ. ઓળખ માટે તે દાખલ કરો. કોઈને કહેશો નહીં.",kn:"ನಿಮ್ಮ ಫೋನ್‌ಗೆ ಬರುವ ಒಂದು ಬಾರಿಯ ಕೋಡ್. ಗುರುತಿಗಾಗಿ ಅದನ್ನು ನಮೂದಿಸಿ. ಯಾರಿಗೂ ಹೇಳಬೇಡಿ.",ta:"உங்கள் போனுக்கு வரும் ஒருமுறை கோடு. அடையாளத்திற்காக அதை உள்ளிடுங்கள். யாரிடமும் சொல்லாதீர்கள்.",te:"మీ ఫోన్‌కు వచ్చే ఒకసారి కోడ్. గుర్తింపు కోసం దాన్ని నమోదు చేయండి. ఎవరికీ చెప్పకండి.",bn:"আপনার ফোনে আসা একবারের কোড। পরিচয় নিশ্চিত করতে এটি লিখুন। কাউকে বলবেন না।",or:"ଆପଣଙ୍କ ଫୋନକୁ ଆସିଥିବା ଏକ ଥରର କୋଡ୍। ପରିଚୟ ପାଇଁ ଏହାକୁ ଲେଖନ୍ତୁ। କାହାକୁ କହନ୍ତୁ ନାହିଁ।"},
Upload:{
en:"Sending a file, such as a photo or document, from your phone to the website.",hi:"अपने फोन से फोटो या दस्तावेज़ जैसी फ़ाइल वेबसाइट पर भेजना।",mr:"तुमच्या फोनमधील फोटो किंवा कागदपत्र यांसारखी फाइल वेबसाईटवर पाठवणे.",gu:"તમારા ફોનમાંથી ફોટો કે દસ્તાવેજ જેવી ફાઇલ વેબસાઇટ પર મોકલવી.",kn:"ನಿಮ್ಮ ಫೋನ್‌ನಿಂದ ಫೋಟೋ ಅಥವಾ ದಾಖಲೆಯಂತಹ ಫೈಲ್ ಅನ್ನು ವೆಬ್‌ಸೈಟ್‌ಗೆ ಕಳುಹಿಸುವುದು.",ta:"உங்கள் போனிலிருந்து புகைப்படம் அல்லது ஆவணம் போன்ற கோப்பை இணையதளத்திற்கு அனுப்புதல்.",te:"మీ ఫోన్ నుండి ఫోటో లేదా పత్రం వంటి ఫైల్‌ను వెబ్‌సైట్‌కు పంపడం.",bn:"আপনার ফোন থেকে ছবি বা নথির মতো ফাইল ওয়েবসাইটে পাঠানো।",or:"ଆପଣଙ୍କ ଫୋନରୁ ଫଟୋ ବା ଦଲିଲ ଭଳି ଫାଇଲ୍ ୱେବସାଇଟକୁ ପଠାଇବା।"},
Submit:{
en:"The final button that sends your filled form. Check everything first.",hi:"अंतिम बटन जो भरा हुआ फॉर्म भेजता है। पहले सब जाँच लें।",mr:"भरलेला फॉर्म पाठवणारे शेवटचे बटन. आधी सर्व तपासा.",gu:"ભરેલું ફોર્મ મોકલતું છેલ્લું બટન. પહેલાં બધું તપાસો.",kn:"ತುಂಬಿದ ಫಾರ್ಮ್ ಕಳುಹಿಸುವ ಕೊನೆಯ ಬಟನ್. ಮೊದಲು ಎಲ್ಲವನ್ನೂ ಪರಿಶೀಲಿಸಿ.",ta:"நிரப்பிய படிவத்தை அனுப்பும் இறுதிப் பொத்தான். முதலில் அனைத்தையும் சரிபாருங்கள்.",te:"నింపిన ఫారంను పంపే చివరి బటన్. ముందు అన్నీ సరిచూడండి.",bn:"পূরণ করা ফর্ম পাঠানোর শেষ বোতাম। আগে সব যাচাই করুন।",or:"ପୂରଣ କରିଥିବା ଫର୍ମ ପଠାଉଥିବା ଶେଷ ବଟନ୍। ଆଗରୁ ସବୁ ଯାଞ୍ଚ କରନ୍ତୁ।"}};

/* 4. form helper */
const FH={
en:["Form helper",["Full name","Date of birth","Mobile number","Address"],"Type in English letters, as the official form asks."],
hi:["फॉर्म सहायक",["पूरा नाम","जन्म तिथि","मोबाइल नंबर","पता"],"सरकारी फॉर्म की तरह अंग्रेज़ी अक्षरों में लिखें।"],
mr:["फॉर्म सहाय्यक",["पूर्ण नाव","जन्मतारीख","मोबाईल क्रमांक","पत्ता"],"अधिकृत फॉर्मप्रमाणे इंग्रजी अक्षरांत लिहा."],
gu:["ફોર્મ સહાયક",["પૂરું નામ","જન્મતારીખ","મોબાઇલ નંબર","સરનામું"],"સત્તાવાર ફોર્મ મુજબ અંગ્રેજી અક્ષરોમાં લખો."],
kn:["ಫಾರ್ಮ್ ಸಹಾಯಕ",["ಪೂರ್ಣ ಹೆಸರು","ಹುಟ್ಟಿದ ದಿನಾಂಕ","ಮೊಬೈಲ್ ಸಂಖ್ಯೆ","ವಿಳಾಸ"],"ಅಧಿಕೃತ ಫಾರ್ಮ್‌ನಂತೆ ಇಂಗ್ಲಿಷ್ ಅಕ್ಷರಗಳಲ್ಲಿ ಬರೆಯಿರಿ."],
ta:["படிவ உதவியாளர்",["முழுப் பெயர்","பிறந்த தேதி","மொபைல் எண்","முகவரி"],"அதிகாரப்பூர்வ படிவம் கேட்பதுபோல் ஆங்கில எழுத்துகளில் எழுதுங்கள்."],
te:["ఫారం సహాయకుడు",["పూర్తి పేరు","పుట్టిన తేదీ","మొబైల్ నంబర్","చిరునామా"],"అధికారిక ఫారం కోరినట్లు ఇంగ్లీష్ అక్షరాల్లో రాయండి."],
bn:["ফর্ম সহায়ক",["পুরো নাম","জন্মতারিখ","মোবাইল নম্বর","ঠিকানা"],"সরকারি ফর্মের মতো ইংরেজি অক্ষরে লিখুন।"],
or:["ଫର୍ମ ସହାୟକ",["ପୂରା ନାମ","ଜନ୍ମ ତାରିଖ","ମୋବାଇଲ ନମ୍ବର","ଠିକଣା"],"ସରକାରୀ ଫର୍ମ ଭଳି ଇଂରାଜୀ ଅକ୍ଷରରେ ଲେଖନ୍ତୁ।"]};
const EN=["Full name","Date of birth (DD/MM/YYYY)","Mobile number (10 digits)","Address"];

const help=g("help");
const gl=document.createElement("section");gl.id="gloss";
gl.innerHTML='<h2 id="gl-t"></h2><div class="grid" id="gl-g"></div>';
const fh=document.createElement("section");fh.id="helper";
fh.innerHTML='<h2 id="fh-t"></h2><p class="sub" id="fh-h"></p><div class="fh"><div id="fh-in"></div><div id="fh-out"></div></div>';
help.before(gl,fh);

g("gl-g").innerHTML=Object.keys(GL).map(k=>`<div class="card c3"><b>${k}</b><p data-k="${k}"></p><button type="button" class="mini" data-k="${k}" aria-label="Listen">🔊</button></div>`).join("");
g("gl-g").onclick=e=>{const b=e.target.closest("button");if(b)say(b.dataset.k+". "+GL[b.dataset.k][L()],L())};

const types=["text","date","tel","text"];
g("fh-in").innerHTML=EN.map((_,i)=>`<label class="fh-row"><span class="fl"></span><span class="fr"><input data-i="${i}" type="${types[i]}" ${i==2?'inputmode="numeric" maxlength="10"':''}>${i==0||i==3?'<button type="button" class="mini" data-m="'+i+'" aria-label="Speak">🎤</button>':''}</span></label>`).join("");
g("fh-out").innerHTML=EN.map((e,i)=>`<div class="fo"><span>${e}</span><b data-o="${i}">–</b><button type="button" class="mini" data-c="${i}" aria-label="Copy">📋</button></div>`).join("");

const val=i=>{let v=g("fh-in").querySelector(`[data-i="${i}"]`).value.trim();
  if(i==1&&v){const p=v.split("-");v=p[2]+"/"+p[1]+"/"+p[0]}
  if(i==2)v=v.replace(/\D/g,"");return v};
const upd=()=>EN.forEach((_,i)=>{const v=val(i),o=g("fh-out").querySelector(`[data-o="${i}"]`);
  o.textContent=v||"–";o.classList.toggle("bad",i==2&&v.length>0&&v.length!=10)});
g("fh-in").addEventListener("input",upd);
g("fh-out").onclick=e=>{const b=e.target.closest("[data-c]");if(!b)return;
  try{navigator.clipboard.writeText(val(+b.dataset.c))}catch(x){}b.textContent="✓";setTimeout(()=>b.textContent="📋",1000)};
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
g("fh-in").addEventListener("click",e=>{const b=e.target.closest("[data-m]");if(!b||!SR)return;
  const r=new SR();r.lang="en-IN";r.onresult=ev=>{g("fh-in").querySelector(`[data-i="${b.dataset.m}"]`).value=ev.results[0][0].transcript;upd()};
  try{r.start()}catch(x){}});

function labels(){
  const l=L();
  g("gl-t").textContent=GT[l];
  g("gl-g").querySelectorAll("p[data-k]").forEach(p=>p.textContent=GL[p.dataset.k][l]);
  g("fh-t").textContent=FH[l][0];g("fh-h").textContent=FH[l][2];
  g("fh-in").querySelectorAll(".fl").forEach((s,i)=>s.textContent=FH[l][1][i]);
}
g("lang").addEventListener("change",labels);labels();

/* 5. offline */
if("serviceWorker" in navigator&&location.protocol.startsWith("http"))navigator.serviceWorker.register("sw.js").catch(()=>{});
})();