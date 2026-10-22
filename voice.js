/* Voice assistant: speak or tap a question, get a spoken answer in the chosen language.
   Runs fully in the browser (Web Speech API). Needs script.js loaded first. */
const VA={
mr:{ui:["आवाज सहाय्यक","बोला","ऐकत आहे…","तुमचा प्रश्न लिहा","या ब्राउझरमध्ये बोलून विचारता येत नाही. प्रश्न लिहा किंवा खाली दाबा."],
 kw:[["फॉर्म","फार्म","भरायचा"],["मोबाईल","मोबाइल","फोन"],["ईमेल","मेल"],["सरकारी","आधार","पॅन","अर्ज","प्रमाणपत्र"]],
 a:["ऑनलाइन फॉर्म भरण्यासाठी वेबसाईट उघडा, फॉर्म निवडा, माहिती काळजीपूर्वक भरा, सर्व तपासा आणि सबमिट दाबा.","मोबाईल वापरण्यासाठी स्क्रीन अनलॉक करा, अॅपच्या आयकॉनवर टॅप करून ते उघडा, आणि सेटिंग्जमधून वाय-फाय किंवा मोबाईल डेटा जोडा.","ईमेल वापरण्यासाठी जीमेलसारख्या सेवेवर खाते तयार करा, नंतर नवीन संदेश निवडा, पत्ता टाका आणि पाठवा दाबा.","सरकारी सेवांसाठी आधार किंवा पॅनसारख्या संबंधित अधिकृत पोर्टलला भेट द्या आणि अर्ज करा पर्याय निवडा. कागदपत्रे तयार ठेवा.","माफ करा, मला समजले नाही. कृपया ऑनलाइन फॉर्म, मोबाईल, ईमेल किंवा सरकारी सेवांबद्दल विचारा."]},
hi:{ui:["वॉइस सहायक","बोलें","सुन रहा हूँ…","अपना सवाल लिखें","इस ब्राउज़र में बोलकर पूछना संभव नहीं। सवाल लिखें या नीचे दबाएं।"],
 kw:[["फॉर्म","फार्म","भरना","भरें"],["मोबाइल","फोन"],["ईमेल","मेल"],["सरकारी","आधार","पैन","प्रमाणपत्र","आवेदन"]],
 a:["ऑनलाइन फॉर्म भरने के लिए वेबसाइट खोलें, फॉर्म चुनें, जानकारी ध्यान से भरें, सब जाँचें और सबमिट दबाएं।","मोबाइल इस्तेमाल करने के लिए स्क्रीन अनलॉक करें, ऐप के आइकन पर टैप करके उसे खोलें, और सेटिंग्स से वाई-फाई या मोबाइल डेटा जोड़ें।","ईमेल के लिए जीमेल जैसी सेवा पर खाता बनाएं, फिर नया संदेश चुनें, पता डालें और भेजें दबाएं।","सरकारी सेवाओं के लिए आधार या पैन जैसे संबंधित सरकारी पोर्टल पर जाएं और आवेदन करें विकल्प चुनें। दस्तावेज़ तैयार रखें।","माफ़ कीजिए, मैं समझ नहीं पाया। कृपया ऑनलाइन फॉर्म, मोबाइल, ईमेल या सरकारी सेवाओं के बारे में पूछें।"]},
en:{ui:["Voice assistant","Speak","Listening…","Type your question","Speaking is not supported in this browser. Type or tap a question."],
 kw:[["form","fill"],["mobile","phone"],["email","mail"],["government","aadhaar","aadhar","certificate"]],
 a:["To fill an online form, open the website, choose the form, enter your details carefully, check everything and press Submit.","To use a mobile phone, unlock the screen, tap an app icon to open it, and use Settings to connect to Wi-Fi or mobile data.","To use email, create an account with a service like Gmail, choose Compose, type the address and press Send.","For government services, visit the official portal for your service, such as Aadhaar or PAN, and choose Apply. Keep your documents ready.","Sorry, I did not understand. Please ask about online forms, mobile, email or government services."]},
gu:{ui:["વૉઇસ સહાયક","બોલો","સાંભળી રહ્યો છું…","તમારો પ્રશ્ન લખો","આ બ્રાઉઝરમાં બોલીને પૂછી શકાતું નથી. પ્રશ્ન લખો અથવા નીચે દબાવો."],
 kw:[["ફોર્મ","ભરવ"],["મોબાઇલ","ફોન"],["ઇમેઇલ","ઈમેલ","મેઇલ"],["સરકારી","આધાર","પાન","અરજી"]],
 a:["ઓનલાઇન ફોર્મ ભરવા વેબસાઇટ ખોલો, ફોર્મ પસંદ કરો, માહિતી ધ્યાનથી ભરો, બધું તપાસો અને સબમિટ દબાવો.","મોબાઇલ વાપરવા સ્ક્રીન અનલોક કરો, એપના આઇકન પર ટેપ કરીને ખોલો, અને સેટિંગ્સમાંથી વાઇ-ફાઇ અથવા મોબાઇલ ડેટા જોડો.","ઇમેઇલ માટે જીમેઇલ જેવી સેવામાં ખાતું બનાવો, પછી નવો સંદેશ પસંદ કરો, સરનામું લખો અને મોકલો દબાવો.","સરકારી સેવાઓ માટે આધાર અથવા પાન જેવા સંબંધિત સત્તાવાર પોર્ટલ પર જઈ અરજી કરો વિકલ્પ પસંદ કરો. દસ્તાવેજો તૈયાર રાખો.","માફ કરશો, હું સમજી શક્યો નથી. કૃપા કરીને ઓનલાઇન ફોર્મ, મોબાઇલ, ઇમેઇલ કે સરકારી સેવાઓ વિશે પૂછો."]},
kn:{ui:["ಧ್ವನಿ ಸಹಾಯಕ","ಮಾತನಾಡಿ","ಆಲಿಸುತ್ತಿದ್ದೇನೆ…","ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಬರೆಯಿರಿ","ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಮಾತನಾಡಿ ಕೇಳಲು ಸಾಧ್ಯವಿಲ್ಲ. ಪ್ರಶ್ನೆ ಬರೆಯಿರಿ ಅಥವಾ ಕೆಳಗೆ ಒತ್ತಿ."],
 kw:[["ಫಾರ್ಮ್","ತುಂಬ"],["ಮೊಬೈಲ್","ಫೋನ್"],["ಇಮೇಲ್","ಮೇಲ್"],["ಸರ್ಕಾರಿ","ಆಧಾರ್","ಪ್ಯಾನ್","ಅರ್ಜಿ"]],
 a:["ಆನ್‌ಲೈನ್ ಫಾರ್ಮ್ ತುಂಬಲು ವೆಬ್‌ಸೈಟ್ ತೆರೆಯಿರಿ, ಫಾರ್ಮ್ ಆಯ್ಕೆಮಾಡಿ, ಮಾಹಿತಿಯನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ತುಂಬಿ, ಎಲ್ಲವನ್ನೂ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಸಲ್ಲಿಸಿ ಒತ್ತಿ.","ಮೊಬೈಲ್ ಬಳಸಲು ಸ್ಕ್ರೀನ್ ಅನ್‌ಲಾಕ್ ಮಾಡಿ, ಆಪ್ ಐಕಾನ್ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ ತೆರೆಯಿರಿ, ಮತ್ತು ಸೆಟ್ಟಿಂಗ್ಸ್‌ನಿಂದ ವೈ-ಫೈ ಅಥವಾ ಮೊಬೈಲ್ ಡೇಟಾ ಸಂಪರ್ಕಿಸಿ.","ಇಮೇಲ್‌ಗಾಗಿ ಜಿಮೇಲ್‌ನಂತಹ ಸೇವೆಯಲ್ಲಿ ಖಾತೆ ತೆರೆಯಿರಿ, ನಂತರ ಹೊಸ ಸಂದೇಶ ಆಯ್ಕೆಮಾಡಿ, ವಿಳಾಸ ಹಾಕಿ ಮತ್ತು ಕಳುಹಿಸಿ ಒತ್ತಿ.","ಸರ್ಕಾರಿ ಸೇವೆಗಳಿಗೆ ಆಧಾರ್ ಅಥವಾ ಪ್ಯಾನ್‌ನಂತಹ ಸಂಬಂಧಿತ ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ಗೆ ಹೋಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ ಆಯ್ಕೆ ಮಾಡಿ. ದಾಖಲೆಗಳನ್ನು ಸಿದ್ಧವಿಡಿ.","ಕ್ಷಮಿಸಿ, ನನಗೆ ಅರ್ಥವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಆನ್‌ಲೈನ್ ಫಾರ್ಮ್, ಮೊಬೈಲ್, ಇಮೇಲ್ ಅಥವಾ ಸರ್ಕಾರಿ ಸೇವೆಗಳ ಬಗ್ಗೆ ಕೇಳಿ."]},
ta:{ui:["குரல் உதவியாளர்","பேசுங்கள்","கேட்கிறேன்…","உங்கள் கேள்வியை எழுதுங்கள்","இந்த உலாவியில் பேசிக் கேட்க முடியாது. கேள்வியை எழுதுங்கள் அல்லது கீழே தொடுங்கள்."],
 kw:[["படிவ","நிரப்ப"],["மொபைல்","போன்"],["மின்னஞ்சல்","இமெயில்"],["அரசு","ஆதார்","பான்","விண்ணப்"]],
 a:["ஆன்லைன் படிவத்தை நிரப்ப இணையதளத்தைத் திறந்து, படிவத்தைத் தேர்ந்தெடுத்து, விவரங்களைக் கவனமாக நிரப்பி, சரிபார்த்து சமர்ப்பி என்பதை அழுத்துங்கள்.","மொபைலைப் பயன்படுத்த திரையைத் திறந்து, செயலியின் ஐகானைத் தொட்டுத் திறந்து, அமைப்புகளில் வைஃபை அல்லது மொபைல் டேட்டாவை இணையுங்கள்.","மின்னஞ்சலுக்கு ஜிமெயில் போன்ற சேவையில் கணக்கு உருவாக்கி, புதிய செய்தியைத் தேர்ந்தெடுத்து, முகவரியை இட்டு அனுப்பு என்பதை அழுத்துங்கள்.","அரசு சேவைகளுக்கு ஆதார் அல்லது பான் போன்ற அதிகாரப்பூர்வ தளத்திற்குச் சென்று விண்ணப்பிக்கவும் என்பதைத் தேர்ந்தெடுங்கள். ஆவணங்களைத் தயாராக வையுங்கள்.","மன்னிக்கவும், எனக்குப் புரியவில்லை. ஆன்லைன் படிவம், மொபைல், மின்னஞ்சல் அல்லது அரசு சேவைகள் பற்றிக் கேளுங்கள்."]},
te:{ui:["వాయిస్ సహాయకుడు","మాట్లాడండి","వింటున్నాను…","మీ ప్రశ్న రాయండి","ఈ బ్రౌజర్‌లో మాట్లాడి అడగలేరు. ప్రశ్న రాయండి లేదా కింద నొక్కండి."],
 kw:[["ఫారం","ఫార్మ్","నింప"],["మొబైల్","ఫోన్"],["ఇమెయిల్","మెయిల్"],["ప్రభుత్వ","ఆధార్","పాన్","దరఖాస్తు"]],
 a:["ఆన్‌లైన్ ఫారం నింపడానికి వెబ్‌సైట్ తెరిచి, ఫారం ఎంచుకుని, వివరాలను జాగ్రత్తగా నింపి, అన్నీ సరిచూసి సమర్పించు నొక్కండి.","మొబైల్ వాడటానికి స్క్రీన్ అన్‌లాక్ చేసి, యాప్ ఐకాన్‌ను తాకి తెరిచి, సెట్టింగ్స్‌లో వైఫై లేదా మొబైల్ డేటాను కలపండి.","ఇమెయిల్ కోసం జీమెయిల్ వంటి సేవలో ఖాతా సృష్టించి, కొత్త సందేశం ఎంచుకుని, చిరునామా వేసి పంపు నొక్కండి.","ప్రభుత్వ సేవల కోసం ఆధార్ లేదా పాన్ వంటి అధికారిక పోర్టల్‌కు వెళ్లి దరఖాస్తు చేయండి ఎంచుకోండి. పత్రాలు సిద్ధంగా ఉంచండి.","క్షమించండి, నాకు అర్థం కాలేదు. దయచేసి ఆన్‌లైన్ ఫారం, మొబైల్, ఇమెయిల్ లేదా ప్రభుత్వ సేవల గురించి అడగండి."]},
bn:{ui:["ভয়েস সহকারী","বলুন","শুনছি…","আপনার প্রশ্ন লিখুন","এই ব্রাউজারে বলে জিজ্ঞাসা করা যাবে না। প্রশ্ন লিখুন বা নিচে চাপুন।"],
 kw:[["ফর্ম","পূরণ"],["মোবাইল","ফোন"],["ইমেইল","ইমেল","মেইল"],["সরকারি","আধার","প্যান","আবেদন"]],
 a:["অনলাইন ফর্ম পূরণ করতে ওয়েবসাইট খুলুন, ফর্ম বেছে নিন, তথ্য সাবধানে পূরণ করুন, সব যাচাই করে জমা দিন চাপুন।","মোবাইল ব্যবহার করতে স্ক্রিন আনলক করুন, অ্যাপের আইকনে ট্যাপ করে খুলুন, এবং সেটিংস থেকে ওয়াই-ফাই বা মোবাইল ডেটা যুক্ত করুন।","ইমেইলের জন্য জিমেইলের মতো সেবায় অ্যাকাউন্ট খুলুন, তারপর নতুন বার্তা বেছে ঠিকানা দিন ও পাঠান চাপুন।","সরকারি সেবার জন্য আধার বা প্যানের মতো সংশ্লিষ্ট সরকারি পোর্টালে গিয়ে আবেদন করুন বেছে নিন। কাগজপত্র প্রস্তুত রাখুন।","দুঃখিত, বুঝতে পারিনি। অনুগ্রহ করে অনলাইন ফর্ম, মোবাইল, ইমেইল বা সরকারি সেবা সম্পর্কে জিজ্ঞাসা করুন।"]},
or:{ui:["ଭଏସ୍ ସହାୟକ","କୁହନ୍ତୁ","ଶୁଣୁଛି…","ଆପଣଙ୍କ ପ୍ରଶ୍ନ ଲେଖନ୍ତୁ","ଏହି ବ୍ରାଉଜରରେ କହି ପଚାରିହେବ ନାହିଁ। ପ୍ରଶ୍ନ ଲେଖନ୍ତୁ କିମ୍ବା ତଳେ ଦାବନ୍ତୁ।"],
 kw:[["ଫର୍ମ","ପୂରଣ"],["ମୋବାଇଲ","ଫୋନ"],["ଇମେଲ","ମେଲ"],["ସରକାରୀ","ଆଧାର","ପ୍ୟାନ","ଆବେଦନ"]],
 a:["ଅନଲାଇନ ଫର୍ମ ପୂରଣ କରିବାକୁ ୱେବସାଇଟ ଖୋଲନ୍ତୁ, ଫର୍ମ ବାଛନ୍ତୁ, ସୂଚନା ଯତ୍ନର ସହ ଭରନ୍ତୁ, ସବୁ ଯାଞ୍ଚ କରି ଦାଖଲ କରନ୍ତୁ ଦାବନ୍ତୁ।","ମୋବାଇଲ ବ୍ୟବହାର ପାଇଁ ସ୍କ୍ରିନ ଅନଲକ କରନ୍ତୁ, ଆପର ଆଇକନ ଟାପ୍ କରି ଖୋଲନ୍ତୁ, ଏବଂ ସେଟିଂସରୁ ୱାଇ-ଫାଇ ବା ମୋବାଇଲ ଡାଟା ଯୋଡନ୍ତୁ।","ଇମେଲ ପାଇଁ ଜିମେଲ ଭଳି ସେବାରେ ଖାତା ଖୋଲନ୍ତୁ, ତା'ପରେ ନୂଆ ସନ୍ଦେଶ ବାଛି ଠିକଣା ଦିଅନ୍ତୁ ଓ ପଠାନ୍ତୁ ଦାବନ୍ତୁ।","ସରକାରୀ ସେବା ପାଇଁ ଆଧାର ବା ପ୍ୟାନ ଭଳି ଉପଯୁକ୍ତ ସରକାରୀ ପୋର୍ଟାଲକୁ ଯାଇ ଆବେଦନ କରନ୍ତୁ ବାଛନ୍ତୁ। କାଗଜପତ୍ର ପ୍ରସ୍ତୁତ ରଖନ୍ତୁ।","କ୍ଷମା କରନ୍ତୁ, ମୁଁ ବୁଝିପାରିଲି ନାହିଁ। ଦୟାକରି ଅନଲାଇନ ଫର୍ମ, ମୋବାଇଲ, ଇମେଲ କିମ୍ବା ସରକାରୀ ସେବା ବିଷୟରେ ପଚାରନ୍ତୁ।"]}
};

/* mixed-language: every language also understands the English keywords (e.g. "Aadhaar form kaise bharu") */
for(const k in VA)if(k!=="en")VA[k].kw=VA[k].kw.map((w,i)=>w.concat(VA.en.kw[i]));

(function(){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  const lang=()=>$("lang").value;
  let rec=null,listening=false;

  /* build the panel */
  const root=document.createElement("div");
  root.innerHTML=`
  <button id="va-fab" class="va-fab" type="button" aria-expanded="false" aria-controls="va-panel"><span aria-hidden="true">🎙️</span><span id="va-fabL"></span></button>
  <div id="va-panel" class="va-panel" role="dialog" hidden>
    <div class="va-head"><b id="va-title"></b><button id="va-close" type="button" aria-label="Close">✕</button></div>
    <div id="va-chips" class="va-chips"></div>
    <div id="va-ans" class="va-ans" aria-live="polite"></div>
    <div class="va-row">
      <input id="va-in" type="text" autocomplete="off">
      <button id="va-send" type="button" aria-label="Send">➤</button>
      <button id="va-mic" type="button" class="va-mic" aria-pressed="false"><span aria-hidden="true">🎤</span> <span id="va-micL"></span></button>
    </div>
  </div>`;
  document.body.append(root);
  const $$=id=>document.getElementById(id);

  function labels(){
    const l=lang(),u=VA[l].ui;
    $$("va-fabL").textContent=u[0];$$("va-title").textContent=u[0];
    $$("va-micL").textContent=u[1];$$("va-in").placeholder=u[3];
    $$("va-panel").setAttribute("aria-label",u[0]);
    $$("va-chips").innerHTML=T[l].bub.map((q,i)=>`<button type="button" data-i="${i}">${q}</button>`).join("");
  }

  function say(text){
    if(typeof stopSpeech==="function")stopSpeech();
    if(!("speechSynthesis" in window))return;
    speechSynthesis.cancel();
    const l=lang(),code=SPEECH[l],u=new SpeechSynthesisUtterance(text);
    const v=speechSynthesis.getVoices().find(v=>v.lang.replace("_","-").toLowerCase()===code.toLowerCase())||speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith(l));
    u.lang=code;if(v)u.voice=v;u.rate=.9;speechSynthesis.speak(u);
  }

  function intent(q){
    const s=q.toLowerCase();let best=-1,score=0;
    VA[lang()].kw.forEach((words,i)=>{const n=words.filter(w=>s.includes(w.toLowerCase())).length;if(n>score){score=n;best=i}});
    return best;
  }
  function answer(i,q){
    const l=lang(),idx=i<0?4:i,txt=VA[l].a[idx];
    $$("va-ans").innerHTML="";
    if(q){const p=document.createElement("p");p.className="va-q";p.textContent=q;$$("va-ans").append(p)}
    const a=document.createElement("p");a.className="va-a";a.textContent=txt;$$("va-ans").append(a);
    const fb=document.createElement("div");fb.className="va-fb";
    fb.innerHTML='<button type="button" aria-label="Helpful">👍</button><button type="button" aria-label="Not helpful">👎</button>';
    fb.onclick=e=>{const b=e.target.closest("button");if(!b)return;
      try{const k="va-feedback",d=JSON.parse(localStorage.getItem(k)||"[]");d.push({q,lang:l,intent:i,ok:b===fb.firstChild,t:Date.now()});localStorage.setItem(k,JSON.stringify(d))}catch(x){}
      fb.textContent="✓"};
    $$("va-ans").append(fb);
    say(txt);
  }
  function ask(q){q=q.trim();if(q)answer(intent(q),q)}

  function stopListen(){if(rec)try{rec.stop()}catch(e){};listening=false;$$("va-mic").setAttribute("aria-pressed","false");$$("va-micL").textContent=VA[lang()].ui[1]}
  function listen(){
    const u=VA[lang()].ui;
    if(!SR){$$("va-ans").textContent=u[4];return}
    if(listening){stopListen();return}
    if("speechSynthesis" in window)speechSynthesis.cancel();
    rec=new SR();rec.lang=SPEECH[lang()];rec.interimResults=false;rec.maxAlternatives=1;
    rec.onresult=e=>{const t=e.results[0][0].transcript;$$("va-in").value=t;ask(t)};
    rec.onend=stopListen;rec.onerror=stopListen;
    try{rec.start();listening=true;$$("va-mic").setAttribute("aria-pressed","true");$$("va-micL").textContent=u[2]}catch(e){stopListen()}
  }

  function toggle(open){
    $$("va-panel").hidden=!open;$$("va-fab").setAttribute("aria-expanded",open);
    if(open){labels();$$("va-in").focus()}else{stopListen();if("speechSynthesis" in window)speechSynthesis.cancel()}
  }
  $$("va-fab").onclick=()=>toggle($$("va-panel").hidden);
  $$("va-close").onclick=()=>toggle(false);
  $$("va-mic").onclick=listen;
  $$("va-send").onclick=()=>{ask($$("va-in").value);$$("va-in").value=""};
  $$("va-in").addEventListener("keydown",e=>{if(e.key==="Enter"){ask(e.target.value);e.target.value=""}});
  $$("va-chips").addEventListener("click",e=>{const b=e.target.closest("button");if(b)answer(+b.dataset.i,b.textContent)});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$$("va-panel").hidden)toggle(false)});
  $("lang").addEventListener("change",()=>{stopListen();if("speechSynthesis" in window)speechSynthesis.cancel();$$("va-ans").innerHTML="";labels()});
  labels();
})();