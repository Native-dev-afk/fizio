import "./mavzular.scss";
import React, { useRef, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import rasm49 from "../img/rasm49.PNG";
import rasm50 from "../img/rasm50.PNG";

function Mavzular() {
  return (
    <>
      <div className="more-swip">
        <Container>
          <div className="mavzu">MINERAL MODDALAR VA SUV</div>
          <p className="text">
            <p className="sarlavha">Mineral moddalar haqida umumiy tushuncha</p>
            Insonning oqilona ovqatlanishida asosiy oziq moddalar – oqsil, yog‘,
            uglevod va vitaminlar qanchalik katta ahamiyat kasb etsa,
            oziq-ovqat, suv va havo bilan tanaga qabul qilinadigan mineral
            moddalar ham shunchalik muhimdir. Ularning me’yordan kam yoki ko‘p
            bo‘lishi turli xastaliklar yuz berishiga olib keladi. Mineral
            moddalarning mohiyati ularning ta’sir etishidagi o‘ziga xos
            xususiyatga ega ekanligidadir, ular hayotiy jarayonlarni boshqarib
            boruvchi biologik faol moddalarning bevosita tarkibiga kiradi.
            SHuning uchun ham ularning taqchilligi yoki me’yoridan ko‘pligi
            fermentlar yoki gormonlar ishtirokisiz o‘tmaydigan har qanday
            kimyoviy o‘zgarishlarning buzilishiga olib keladi. Bu holat esa
            me’yoriy fiziologik jarayonlarning (ovqat hazm bo‘lishi, moddalar
            almashinuvi, ajralish, tegishli moddalar sintezi va boshqalar) izdan
            chiqishiga, turli-tuman kasalliklarning paydo bo‘lishiga olib
            keladi. Mineral moddalarning ushbu xususiyati ularning ta’sir
            doirasini ancha kengaytirib, u yoki bu elementning tanada kamligi
            yoki ko‘pligi bitta xarakterli kasallikni emas, balki bir qator
            xastaliklarni keltirib chiqaradi. Tanada uchraydigan kimyoviy
            elementlarning yana bir xususiyati shundaki, ular tufayli tirik
            organizm, uning barcha a’zolari tegishli bioelektrik faollikka,
            ya’ni biopotensiallarga (biotoklarga) ega bo‘ladi. Masalan, miya va
            nerv hujayralari, yurak, oshqozon-ichak tizimi va muskullar
            biotoklari tegishli elementlar kationlari va anionlarining
            guruhlanishidan paydo bo‘lib, bu bilan ulardagi hamda butun tanadagi
            qo‘zg‘aluvchanlik, o‘tkazuvchanlik, tormozlanish holatlari ro’y
            beradi. Mineral moddalar odam tanasi umumiy vaznining 4% ini tashkil
            qiladi, shuning yarmi suyaklar, tish, tirnoq, soch kabi “qattiq”
            qismlarda bo‘lsa, qolgani qon, limfa, to‘qimalar suyuqligi kabi
            “yumshoq” qismlarda bo‘ladi. Odam tanasining 70 – 80%ini tashkil
            qiladigan suv tarkibida ham kislorod, uglerod, vodorod, azot kabi
            kimyoviy elementlar erigan holda mavjud bo‘ladi. Inson tanasida
            barcha kimyoviy elementlar turli miqdorda uchraydi, masalan, kalsiy
            1,5– 2,2%, fosfor 0,8–1,2%, ayrimlari esa juda ham oz bo‘ladi (temir
            va magniy– 0,0003%, mis–0,00015%, yod–0,0004% va hokazo). Shunday
            bo‘lsada, ular hayotiy jarayonlarning me’yoriy kechishi uchun zarur.
            Shu bilan bir qatorda tananing har bir a’zosi, hujayra va
            to‘qimalarida kimyoviy elementlar aniq bir nisbatda bo‘ladi. Bu
            nisbatning buzilishi esa kasallikka olib keladi. Masalan, hujayra
            ichida kaliy va magniy, tashqarisida natriy va kalsiy ko‘p bo‘ladi.
            Ushbu nisbatning buzilishi dastlab tegishli a’zolarda shish,
            keyinchalik boshqa xastaliklarni keltirib chiqaradi. Tanadagi
            hujayralar va ular orasidagi suyuqliklarda kimyoviy elementlar
            miqdori va nisbati iste’mol qilinadigan ovqatda bu moddalarning
            mavjudligiga, ularning me’da – ichak tizimidan so‘rilish
            xususiyatlariga va boshqa sabablarga bog‘liq bo‘ladi. Agar u yoki bu
            elementga taqchillik sezilganda ularni dorixonalardan olingan dori
            sifatida qabul qilishdan ko‘ra tabiiy manbalar, ya’ni meva –
            chevalar sabzavot mahsulotlarini tanlab qabul qilishga ko‘proq
            e’tibor berish kerak. Chunki inson uchun shu mahsulotlardagina
            kerakli kimyoviy moddalar ma’lum miqdor va nisbatda bo‘lib, ularni
            iste’mol qilish bilan tanamizdagi hujayra va to‘qimalarni tegishli
            ravishda mikro va makroelementlar bilan ta’minlash oson kechadi.
            O‘simlik mahsulotlarini “tirik” holda iste’mol qilish orqali barcha
            kimyoviy elementlarni yetarli miqdorda qabul qilamiz va ortiqchasini
            tanadan chiqarib yuboramiz.
            <p className="rasm">
              <img src={rasm49} />
            </p>
            Inson tanasida shu bugunga qadar D.I. Mendeleeev davriy
            sistemasidagi 81 element borligi aniqlangan. Ular tanada qancha
            uchrashiga qarab 3 ta guruhga bo‘linadi, ya’ni ko‘p uchraydiganlari
            yoki makroelementlar, ularga Ca, P, Mg, Fe, K, Na, Cl, S va
            boshqalar kiradi. Kam uchraydiganlari esa mikroelementlar deyilib,
            ularga J, F, Cu, Co va boshqalarni olish mumkin. Eng
            kamuchraydiganlarini ultramikroelementlar deyilib, ularga oltin,
            simob, radiy va boshqalar kiradi. 12-jadvalda turli o‘simlik
            mahsulotlarida ayrim muhim mikro- va makroelementlarning qanday
            miqdorda uchrashi haqida ma’lumot keltiriladi.
            <p className="sarlavha">Natriy</p>Bu element tanadagi barcha
            hujayralar, to‘qimalar hamda biologik suyuqliklar tarkibida keng
            tarqalgan bo‘lib, u asosan osh tuzi, ya’ni natriy xlor ko‘rinishida
            ovqat va suyuqliklar bilan qabul qilib turiladi. Osh tuzi ko‘pincha
            ikki xil ko‘rinishda, ya’ni sanoat yo‘li bilan qayta ishlangan sof
            natriy xlor va dengiz suvini cho‘kmaga tushirish bilan olinadigan
            kon tuzi ko‘rinishida ishlatiladi. Kon tuzi tarkibida natriy xlordan
            tashqari yana bir qator muhim biomikroelementlar mavjud. Shu boisdan
            ovqatga solish, turli xil mahsulotlarni tuzlash uchun kon tuzidan
            foydalanish maqsadga muvofiq. Sanoat yo‘li bilan tayyorlanib sotuvga
            chiqariladigan natriy xlorda kon tuzidagi singari foydali
            xususiyatlar kam bo‘ladi. Agar hayvonlar oldiga bir idishda kon tuzi
            ikkinchisida osh tuzi qo‘yilsa, ular kon tuzini ma’qul ko‘rishadi.
            Chunki bu bilan ular nafaqat natriy xlorga bo‘lgan ehtiyojini
            qondiradi, balki boshqa elementlarni ham tegishli nisbatga oladi.
            Sanoat yo‘li bilan olingan tuz asosan sof natriy xlor birikmasidan
            iborat xolos. Kon tuzi va dengiz suvi bug‘latilib olingan tuz
            tarkibida natriy, kalsiy va boshqa elementlar qatori magniy elementi
            ham bo‘ladi, magniy esa saraton (rak) kasalligining oldini olishda
            muhim mikroelementdir. Onkologlarning aniqlashicha, agar hayvonga
            magniysiz ovqat berilsa, ularda rak kasalligi ko‘proq uchrar ekan.
            Shu narsa sir emaski, dengiz mahsulotlaridan ko‘proq istemol qilib,
            kon tuzini ishlatadigan mamlakatlarda (Ispaniya, Yaponiya) kishilar
            ancha sog‘lom bo‘lishadi, miokard infarkti, skleroz, hafaqon bilan
            kam kasallanadi. Shunday bir kichik tajriba qilib ko‘rish mumkin,
            bir xil lahm go‘shtdan ikki bo‘lak olib, birini oddiy kimyoviy toza
            tuz bilan, ikkinchisini maydalangan kon tuzi bilan tuzlab bir joyga
            qo‘ying. Oddiy tuz ishlatilgan go‘sht ikkinchisiga qaraganda tezroq
            buziladi. Ba’zi bir kasalliklar bilan og‘rigan bemorlar tuzni kam
            miqdorda iste’mol qilishi maqsadga muvofiq. Bular sirasiga ayrim
            buyrak kasalliklari, semizlik, hafaqon, saraton va boshqalar kiradi.
            Sog‘lom odam uchun kecha-kunduzda o‘rtacha 6-8 g osh tuzi iste’mol
            qilishi me’yor hisoblanadi. Osh tuziga nisbatan fiziologik me’yor
            qilib hozir kecha-kunduzda 5 g belgilangan. Lekin issiq sharoitda
            davomli jismoniy mehnat qiladiganlarga bu ko‘rsatkich 15-20 g gacha
            etishi mumkin. Odam issiq kunlari og‘ir mehnat bilan shug‘ullansa
            tanasidan ajralgan ter suyuqligining umumiy miqdori bir
            kecha-kunduzda 10 litrgacha etishi mukin. Bunda ter bilan 50 g gacha
            osh tuzi tanadan ajralib chiqadi. Bunday paytlari yo‘qotilgan tuz
            o‘rnini qoplash maqsadida ichiladigan suvga ozmincha kon tuzidan
            qo‘shib qo‘yish kerak. Yana turli xil mikroelementlarga boy mineral
            suvlardan ichish foydali hisoblanadi. Odam tanasidan ajralgan ter
            suyuqligi tarkibida aminokislotalar, mochevina, vitaminlar va turli
            xil mineral moddalar ko‘p bo‘ladi. Jumladan, 100 g ter suyuqligida
            10 mg kalsiy, 40-45 mg kaliy, 40-166 mg xlor bo‘lishi mumkin.
            Shularni e’tiborga olgan holda yuqori haroratda mehnat qiladigan
            odamlarningiste’mol taomlarini, albatta mineral moddalar bilan
            boyitish kerak. Issiq iqlim sharoitda ko‘p terlash sababli faqat
            toza suv iste’mol qilaverish bilan chanqoq bosilishi qiyin, shuning
            uchun ko‘p suv ichishga to‘g‘ri keladi. Bu holat o‘z navbatida
            yurak, qon tomirlari, ajratish a’zolari tizimi faoliyatini
            zo‘riqtiradi, odam lanj bo‘lib, yurak urishi tezlashadi, mehnat
            qobiliyati pasayib ketadi. Bunday paytlari ko‘proq sabzavot va
            mevalardan tayyorlangan salatlar eb, ularning sharbatlaridan ichib
            turilsa maqsadga muvofiq bo‘ladi. Shunday qilinsa qayd qilingan
            mahsulotlarni iste’mol qilish bilan terlash tufayli yo‘qotilgan
            mineral moddalarning o‘rni tegishli nisbatda qoplanadi. Yozning
            issiq kunlarida shahar va qishloqlarda meva-cheva va sabzavotlar
            mo‘l bo‘ladi va ko‘pchilik ulardan kerakligicha foydalanish
            imkoniyatiga ega. Osh tuzini keragidan ko‘p miqdorda qabul qilish
            natijasida tanada to‘qimalararo suyuqlik va qon plazmasi ko‘payib
            ketadi, bu holat esa o‘z navbatida arterial bosimning ko‘tarilib
            kelishiga olib keladi. Hozir iste’mol qilinadigan osh tuzining
            miqdori va gipertoniya kasalligi o‘rtasida to‘g‘rdan-to‘g‘ri
            bog‘liqlik borligi aniqlangan. Ma’lumki, yaponiyaliklar boshqa
            xalqlarga nisbatan osh tuzini ko‘p iste’mol qilishadi, masalan,
            Kyusyu orolida kecha-kunduz davomida odamlarning o‘rtacha osh tuz
            iste’mol qilishi 26 g ga teng. Ularda arterial qon bosimi 50-60
            yoshli erkaklarda 173/90 mm simob ustuniga, shu yoshdagi ayollarda
            esa 169/90 mm simob ustuniga teng ekan. Bir vaqtning o‘zida Panamada
            yashaydigan hindular, grenlyandiyalik eskimoslar bir kecha-kunduzda
            ko‘pi bilan 5 g osh tuzi ishlatishadi va ularda arterial qon bosimi
            yaponiyaliklarga qaraganda ancha past bo‘ladi. Yoshi 50 dan oshgan,
            qon bosimi meyoridan bir oz yuqori, terlab jismoniy mehnat
            qilmaydiganlar osh tuzini kam iste’mol qilishlari kerak, shunda ular
            o‘zlarini nafaqat gipertoniya kasalligidan, balki miokard
            infarktidan ham himoya qiladilar, chunki olib borilgan maxsus
            hisob-kitoblarlarga qaraganda qon bosimiga ega odamlar orasida
            miokrd infarkti 78 marta ko‘proq uchrashi kuzatiladi.
            <p className="sarlavha">Kaliy</p>Bu elementning muhim tomoni shundan
            iboratki, u organizmdagi barcha “yumshoq” to‘qimalarning me’yoriy
            ishlashini ta’minlaydi (miya, buyrak, oshqozon-ichak, jigar, ichki
            sekretsiya bezlari, tana va yurak muskullari). 12- jadvalda
            ko‘ringanidek, kaliy ko‘pgina o‘simlik mahsulotlarida ancha mo‘l
            bo‘ladi. Bular loviya, no‘xat, kartoshka, sholg‘om, olma, o‘rik,
            olxo‘ri, sarimsoq va boshqalardir. Shu bilan birga u ayrim hayvon
            mahsulotlarida, masalan, mol go‘s99htida (241 mg/100 g), baliqda
            (162 mg/100 g), sutda (127 mg/100 g) ham anchagina uchraydi. Odam
            kundalik iste’mol qiladigan ovqati bilan o‘ziga yetarli bo‘lgan
            kaliyni yig‘ib oladi. Odatda kaliyga bo‘lgan bir kecha-kunduzlik
            ehtiyoj 3- 6 g atrofida, lekin kaliyga bo‘lgan talab osh tuzini ko‘p
            iste’mol qilish hollarida oshib ketadi. Natriy bilan kaliyning
            iste’moldagi nisbati 2:1 bo‘lishi lozim, ya’ni ikki hissa natriyga
            bir hissa kaliy to‘g‘ri kelishi kerak. Bu nisbat buzilganda
            ko‘pchilik to‘qimalarda me’yoriy almashinuv jarayonlari izdan
            chiqib, u yoki bu a’zolarda shish paydo bo‘ladi. Chunki tanada
            natriy ko‘paysa, uning suvni ushlab qolish xususiyati tufayli
            to‘qimalar suyuqliklarda miqdori oshib, shish paydo bo‘ladi. Bunday
            paytlari kaliyga boy mahsulotlardan ko‘proq iste’mol qilish kerak.
            Kaliy almashinuv jarayonlari nuqtai nazaridan natriyga qaramaqarshi
            hisoblanganligi uchun u qanchalik ko‘paysa natriy shunchalik ko‘p
            tashqariga chiqarib yuboriladi. To‘qimalarda natriyning kamayishi
            bilan oshiqcha suyuqlik ham bartaraf qilinadi. Ushbu usuldan tanada
            paydo bo‘lgan shishlarni, yallig‘lanishlarni yo‘qotishda yaxshigina
            foydalansa bo‘ladi. Buning uchun olma sirkasiga asal qo‘shib
            og‘rigan joyga surtish va har kuni bir stakan suvga bir choy qoshiq
            sirka va shuncha asal qo‘shib ichib turish kerak (kun davomida
            bunday aralashmadan 3-4 stakan ichiladi). Kaliyning tanaga tegishli
            miqdorda qabul qilib turilishi tomirlarda natriy tuzlarining cho‘kma
            bo‘lib to‘planishini kamaytiradi va shu yo‘l bilan u tegishli
            kasalliklarning oldini olishni ta’minlaydigan dorilar safiga kiradi
            <p className="sarlavha">Kalsiy</p>Bu element ham natriy, kaliy kabi
            asosan tuz ko‘rinishida qabul qilinadi. Tanadagi kalsiyning 99%
            suyaklar, tishlar, tirnoqlar tarkibida bo‘ladi, 1% qon va boshqa
            biologik suyuqliklarda hamda “yumshoq” to‘qimalarda uchraydi. Lekin
            kalsiyning ahamiyati faqat suyaklar va tishlarning shakllanishi
            bilan cheklanib qolmasdan, balki, qon hosil bo‘lishi, ivishi, nerv
            va muskullardagi qo‘zg‘aluvchanlik, hujayra membranasidagi
            o‘tkazuvchanlik jarayonlarida faol qatnashadi. Kalsiyga bo‘lgan bir
            kecha-kunduzlik talab o‘rtacha 800 mg bo‘lgani holda yosh bolalar va
            keksa odamlarda bu ko‘rsatkich 1000-1200 mg gacha oshadi. YOsh
            bolalarda suyakning o‘sishi uchun qo‘shimcha kalsiy zarur bo‘lsa,
            keksa kishilar me’da-ichak yo‘lida kalsiy so‘rilishi yomonlashgani
            uchun undan ko‘proq iste’mol qilib turish kerak. Iste’mol taomlari
            bilan qabul qilinadigan kalsiy kerakligidan kam bo‘lsa yoki uning
            me’da-ichak tizimidan qonga so‘rilishi pasaysa, suyakdagi kalsiy
            qonga chiqib ketadi, natijada skelet suyaklari g‘alvirsimon bo‘lib
            qoladi. Osteoporoz kasalligi bunda suyak mo‘rtlashib sinuvchan
            bo‘ladi. Bu holatni ayniqsa keksa odamlarda ko‘p kuzatish mumkin,
            chunki ularda yuqorida aytganimizdek kalsiyning qonga so‘rilishi
            ancha kuchsiz bo‘ladi. Tarkibida kalsiy kamayib g‘alvirsimon bo‘lib
            qolgan suyaklarga birinchi navbatda jag‘ suyaklari kiradi. Keksa
            kishilar organizmida kalsiy kamaymasligi uchun ularga bu elementga
            boy o‘simlik mahsulotlaridan iste’mol qilib turish tavsiya qilinadi.
            Gap shundaki, kalsiyning o‘z vaqtida tanaga yaxshi singishi uchun
            fosfor, D, C, V9 vitaminlari kerak. SHunga ko‘ra organizmni kalsiyga
            boyitish uchun bu vitaminlarning oziq mahsulotlarida tegishli
            darajada bo‘lishini ta’minlash lozim. Ma’lumki, olma, loviya,
            no‘xat, bodring, karam, sholg‘om, qatiq, pishloq, tuxum sarig‘i,
            sariyog‘ va boshqalar bir yo‘la kalsiy hamda fosforga boy
            mahsulotlar bo‘lib hisoblanadi. Bulardan tashqari kunjut urug‘i eng
            ko‘p kalsiy saqlaydigan mahsulotdir. Kunjut yog‘ini dog‘lamay
            ishlatish mumkin, unda nafaqat kalsiy, balki boshqa mineral
            moddalar, vitaminlar ham mo‘l bo‘ladi. Kunjutning yana bir
            xususiyati shundaki, uning yog‘i tez hazm bo‘lishi bilan birga juda
            foydalidir. Kalsiy ichimlik suvi bilan ham qabul qilib turiladi. Bu
            borada ayniqsa, “qattiq” suv (quduq va buloq suvi) muhim ahamiyatga
            ega. Uning tarkibida bir qancha mikroelementlar (magniy, litiy, rux,
            kobalt va boshqalar) bilan bir qatorda kalsiy ko‘p bo‘ladi. SHuning
            uchun ichishga “yumshoq” suvdan ko‘ra “qattiq” suv ma’qul. “Yumshoq”
            suv tarkibida natriy elementi “qattiq” suvga nisbatan ko‘p bo‘ladi,
            natriyning esa ko‘p iste’mol qilingandan xavfli tomonlarini yuqorida
            aytib o‘tgan edik. Kalsiyga bo‘lgan ehtiyojni qondirish uchun har
            kuni ovqatdan oldin har xil ko‘kat va sabzavotlardan tayyorlangan
            salat, meva-chevalar, sut va sut mahsulotlaridan eb turish va
            haftada ikki-uch marta yong‘oq, bodom, o‘rik danagining mag‘zidan
            iste’mol qilish kifoya
            <p className="sarlavha">Fosfor</p>Bu mineral element miya,
            muskullar, ichki sekretsiya bezlari hamda ter bezlari faoliyatida
            muhim ahamiyat kasb etadi. Muskullar fosforli birikmalarning
            to‘planadigan asosiy joyi hisoblanadi. Fosfor birikmalari oziq
            moddalarni parchalovchi fermentlar tarkibiga kiradi. Eng muhimi
            fosforli guruhlar ADF bilan birikib barcha hujayralarning fiziologik
            faoliyatini ta’minlab turadigan ATF hosil qiladi. Fosfor kalsiy
            bilan birgalikda suyaklar va tishlarning shakllanishida muhim
            ahamiyatga ega. Odamning fosforga bo‘lgan bir kecha-kunduzlik talabi
            1600-1800 mg, u go‘sht mahsulotlarida ko‘p bo‘ladi. Unga eng boy
            mahsulot, ilovadagi 12-jadvalda ko‘rsatilgandek, loviya va no‘xat
            hisoblanadi. Organizmda fosfor almashinuvi kalsiy almashinuvi bilan
            chambarchas bog‘liq, kalsiyning so‘rilishi fosforsiz o‘tmaydi yoki
            fosfor o‘zlashtirilishida albatta kalsiy kerak. SHuning uchun
            fosforga taqchillik ham fosforli – kalsiyli mahsulotlarni tanlab
            iste’mol qilish bilan bartaraf etiladi. Odatda kalsiy va fosfor
            o‘rtasidagi nisbat 1:1,0 – 1,5 bo‘lganida ular yaxshi
            o‘zlashtiriladi va bu ikkala element ishtirokida yuz berib turadigan
            fiziologik jarayonlar me’yorida bo‘ladi. Ba’zan go‘sht va baliqni
            ko‘p iste’mol qiluvchilarda (shimoliy qutbda yashovchilarda) aytib
            o‘tilgan nisbat buzilib 1:3,9 ga o‘zgaradi.
            <p className="sarlavha">Magniy</p>Tanadagi hujayralarning har bir
            faoliyatida bu bioelement faol qatnashadi. Shuning uchun ham magniy
            yetishmasa, asabiylashish, uyquning buzilishi, tez charchash, bosh
            og‘rig‘i, bosh aylanishi, ob-havo o‘zgarishiga sezgirlik,
            parishonxotirlik, yurakning tez urishi va maromining buzilishi,
            me’da-ichak tizimida og‘riq paydo bo‘lishi, ich ketishi va boshqalar
            yuzaga keladi. Magniy hujayraning energetik va elektrolitik
            almashinuvida ishtirok etadi, uning membrana transoportdagi
            ahamiyati ham katta. Magniy oteoskleroz, miokard infarkti, nerv
            xastaliklari, ichki sekretsiya bezlari kasalliklari, saraton va
            boshqalarning oldini olishda muhim ahamiyat kasb etadi. Ma’lumki,
            yurak qon tomirlari kasalliklari qonda xolesterinning ko‘payishi
            bilan xuruj qiladi. Xolesterin miqdori esa letsitin aminokislotasi
            bilan boshqarb boriladi. Bu aminokislotaning o‘simlik
            mahsulotlaridan sintezlanishi uchun B6 (piridoksin) vitamini mavjud
            maxsus ferment kerak. Piridoksin esa magniysiz ishlay olmaydi. Shu
            bois tanada xolesterin miqdorining me’yoridan oshib ketmasligi uchun
            iste’mol taomlarida magniy miqdorini ko‘paytirish kerak. Bunday
            mahsulotlarga maysa holigacha o‘stirilgan bug‘doy doni, loviya,
            no‘xat, soya, mosh, tuxum sarig‘i, pishloq, qatiq, qaymoq, baliq,
            karam, lavlagi, kartoshka kabi o‘simlik hamda hayvon mahsulotlari
            kiradi. U yoki bu sabablarga ko‘ra yuqoridagi mahsulotlar yetarli
            darajada bo‘lmasa, har kuni shifokor bilan masalahatlashgan holda
            500-600 mg magniy tuzlaridan qabul qilish tavsiya qilinadi.
            Kardiolog olimlarning aniqlashicha, tanada magniy yetishmasligi
            dastlab har xil kasalliklarga keyinchalik, bunday taqchillikning
            chuqurlashuvi miokard infarktiga olib kelar ekan. Quduq va buloq
            suvlarida kalsiy bilan bir qatorda magniy ham “yumshoq” suvdagiga
            qaraganda mo‘l bo‘ladi. Bunday suvda ovqat tayyorlaydigan va undan
            ichimlik suvi sifatida foydalanadigan aholi orasida gipertoniya,
            miokard infarkti kabi yurak kasalliklarining kam uchrashi
            isbotlangan. Ma’lumki, hozirgi zamon kishisi turli xil stress
            omillar (kuchli his-hayajon, kuchli jismoniy harakat,
            kamharakatlilik yoki gipodinamiya, sertashvishlik, rejalashtirilgan
            ishlarga ulgurmaslik va b.) ta’sirida yashaydi. Bunday holatda
            kishining magniyga bo‘lgan ehtiyoji oshadi. Agar ovqatda magniy
            yetishmasa, buning ustiga yana kuchli stress omil ta’sir qilib
            tursa, yurak-qon tomir xastaliklarining kelib chiqishi uchun keng
            yo‘l ochiladi. Magniyning odam tanasiga serqirra ta’siri shu bilan
            izohlanadiki, u ko‘p fermentlarning bevosita tarkibiga kiradi.
            Fermentlarsiz esa tirik organizmda moddalar va energiya almashinuvi
            sodir bo‘lmaydi. Qon bosimini me’yorlashtirishda yoki gipertoniyani
            bartaraf qilishda magniyning ahamiyati katta. Gap shundaki, qon
            bosimi asosan turli sabablarga ko‘ra qon tomirlarining torayishidan
            yuzaga keladi. Jumladan, achchiqlanish, xafa bo‘lish, ruhan
            tushkunlikka tushish, doimiy ravishda tashvishlanish, qattiq
            hayajonlanish, har xil obhavo omillarining ta’siri, tanada zaharli
            moddalarning ko‘payishi va boshqalar qon tomirlarining o‘z holatiga
            qaytarish uchun magniy juda zarur, u nerv tizimini tinchlantiruvchi
            omil bo‘lib hisoblanadi. Magniy ta’sirida me’da-ichak harakatlari
            tezlashadi, u o‘t suyuqligi ajralishini rag‘batlantiradi. Magniy
            buyraklarda, o‘t va siydik qopida tosh paydo bo‘lishining oldini
            oladi. Kalamushlarda o‘tkazilgan tajribalar shuni ko‘rsatadiki,
            hayvonlarga beriladigan ovqat tarkibidan magniy moddasi butunlay
            olib tashlansa, ularning buyraklarida toshlar hosil bo‘lar ekan.
            Odamlarda ham o‘t va siydik qoplarida oksalat tosh hosil
            bo‘lishining oldini olishda magniyli mahsulotlarni iste’mo qilib
            turish juda katta foyda beradi. Ba’zi kishilarda ma’lum sababalarga
            ko‘ra o‘t qopida yoki buyraklarida tosh hosil bo‘lib, bu toshlar
            oldirib tashlangandan keyin ular ovqatlanishiga ko‘proq e’tibor
            berish kerak. Tosh paydo bo‘lishining asosiy sababalaridan biri
            bunday odamlar iste’mol qiladigan taomlarda milliy an’ana va
            tegishli odatlar bois magniy elementi yetishmasligi yoki qabul
            qilayotgan kalsiy va magniy nisbati buzilganidir. O‘t qopi yoki
            siydik yo‘llaridan tosh oldirganlar yana avvalgidek ovqatlanaversa
            qaytadan tosh paydo bo‘lish xafi tug‘iladi. Buyraklarning tosh paydo
            bo‘lishiga yo‘l qo‘ymaslik uchun eng muhim tadbir tegishli ravishda
            to‘g‘ri ovqatlanishdir. Buning ustiga iste’mol qilinadigan
            ovqatlarning 70% “tirik” mahsulotlardan, qolgan 30% esa qaynatilgan,
            pishirilgan oziq-ovqatlarni iborat bo‘lishi tavsiya qilinadi. Shu
            narsa aniqlanganki, Finlandiya va Afrikada ayrim aholi guruhlari
            nuqul tabiiy mahsulotlar bilan ovqatlanishadi, buning ustiga
            meva-chevalar, sabzavot va donlarning po‘stini olmasdan iste’mol
            qilishadi. Shu bois ularda magniy, kalsiy, boshqa mineral moddalar
            va vitaminlarga taqchillik kuzatilmaydi. Agar odam faqat yuqori
            navli un va undan tayyorlangan non, makaronlar, turli xil
            shirinliklar, pishiriqlar, shakar iste’mol qilib, meva-cheva,
            sabzavotlarni “tirik” holda yemasa, uning tanasida magniy
            taqchilligi yuzaga kelib, u tez asabiylashadigan, tez charchaydigan,
            yomon uxlaydigan, xatto aqliy jihatdan ham nuqsonlarga ega bo‘lib
            qoladi. Odam bu elementdan har kecha-kunduzda 400-600 mg qabul qilib
            turishi kerak. Bunday miqdoridagi magniy kakao, loviya, no‘xat,
            yong‘oq, soya va boshqa magniy elementi ko‘p mahsulotlarida bo‘ladi.
            Yarim stakan loviyada 150 mg, shuncha miqdordagi soyada esa 200 mg
            magniy bo‘ladi. Donlarning po‘stini ajratish, ulardan yuqori navli
            un tayyorlash tufayli magniy ancha kamayib ketadi, masalan, bunday
            qayta ishlash tufayli bug‘doy unida uning 78%, arpa unida 70%
            yo‘qoladi. Ko‘k no‘xatni konservalash undagi magniyni 43% kamaytirib
            yuboradi. Kartoshkaning po‘stini ajratish bilan undagi magniy 35%
            kamayib ketadi. Har xil meva-chevalar va sabzavotlardan konservalar
            tayyorlanganida ulardagi magniy qator mineral moddalar va
            vitaminlarning asosiy qismi ular yuvilib to‘kib tashlanadigan suvga
            o‘tadi. Konserva suvlarini to‘kib tashlash bilan juda ko‘p foydali
            elementlar yo‘qotiladi. Shu boisdan bunday qoldiq suyuqliklardan
            foydalanish yo‘llarini topish kerak, masalan, bunday suvlardan suyuq
            ovqatlar tayyorlash mumkin, bir oz shirinlik aralashtirib sharbat
            sifatida ichish mumkin. Mahsulotlarni aytilgan yo‘llar bilan qayta
            ishlash, ayniqsa, sanoat texnologiyasi usullaridan foydalanish
            nafaqat ular tarkibidagi magniyning, balki boshqa ko‘p foydali
            elementlarning kamayib ketishiga sabab bo‘ladi. Shuning uchun ham
            bug‘doy, arpa, marjumak va boshqa donlardan oddiy usullar bilan
            tayyorlangan yormalar juda foydalidir. Donlar bir oz undirilib maysa
            holiga keltirilganidan keyin iste’mol qilinsa, kishi salomatligi
            ancha mustahkamlanadi. Shuning uchun uy sharoitida, umumovqatlanish
            joylarida, oshxonalarda kundalik iste’mol uchun tez-tez yorma
            tayyorlanishi maqsadga muvofiqdir.
            <p className="sarlavha">Rux</p>Bu elementning foydaliligini
            insoniyat ancha ilgari sezgan, masalan, qadimgi arablar tanadagi
            jarohatlarning ruxli aralashma yordamida tezroq tuzalishini
            aniqlashgan. Keyinchalik, XX asrning boshlarida, kalamushlardagi
            teri kuyishi va jarohatlar, agar ular ovqatidagi rux yetarli bo‘lsa,
            tezroq bitishi tajribalarda tasdiqlangan. Odam qonida rux miqdorini
            aniqlashda shu narsa qayd qilinganki, davomli va ko‘p miqdorda
            shirinlik hamda tuzli mahsulotlar iste’mol qilinsa, turli xil
            kasalliklarni davolashda kortizon ishlatilsa va homiladorlikning
            oldini olish uchun dori darmonlardan tez-tez foydalanilsa ruxga
            nisbatan tanqislik yuzaga kelar ekan. Ruxning tanada kamayib ketishi
            dastlab suyaklarning g‘alvirsimon bo‘lib qolishiga olib keladi. Bu
            jarayonda, albatta, kalsiy, fosfor, magniy, ftor va kremniylarning
            ham tanqisligi o‘z ta’sirini ko‘rsatadi. Bolalarda rux taqchilligi
            bo‘y o‘smay qolishi, jinsiy rivojlanishning juda sekinlashishi, teri
            quruqlashishi, ishtaha yomonlashishi, jigar va taloq kattalashishiga
            olib keladi. Rux yetishmasligi tufayli sodir bo‘ladigan belgilardan
            biri bu ich ketishdir. Bunday odamlarda harakat muvofiqligi buzilib,
            barmoqlar titraydi, qo‘zg‘aluvchanlik oshadi. Shuningdek ruxga
            nisbatan taqchillik kuchaysa jigarda zaxira saqlanadigan A vitamini
            foyda bermaydi. Bu vitamin faqat rux yetarli bo‘lgandagina jigardan
            ajralib chiqib organizm ehtiyojlari uchun sarflanadi. Alkogol
            ta’sirida tanada ruxning kamayib ketishi hayvonlar ustida olib
            borilgan tajribalarda tasdiqlangan. Agar kalamushlarga oz – ozdan
            etil spirtining eritiasidan berib borilsa, ular tanasidi spirt qabul
            qilmagan guruh hayvonlariga qaraganda rux miqdori sezilarli darajada
            pasaygan. Bolalarda rux yetishmasligidan ishtaha yo‘qoladi, soch
            juda sekin o‘sadi, har xil metall buyumlarni yalash va yutish
            ishtiyoqi paydo bo‘ladi. Ruxga bo‘lgan taqchillik kamqonlikka ham
            olib keladi. Organizmning ruxga bo‘lgan talabini qondirishda eng
            samarali yo‘l - rux elementiga boy mahsulotlar bilan oziqlanishdir.
            Uning manbalari serob bo‘lib, eng ko‘p uchraydiganlaridan birinchi
            navbatda endi o‘sayotgan bug‘doy maysasi, bug‘doy kepagi, mol
            jigari, baliq, quyon go‘shti, tuxum sarig‘i, kakao, loviya, no‘xat,
            yong‘oq, ko‘k choy, olma, apelsin, limon, anjir, asal, lavlagi,
            pomidor, kartoshka, sholg‘om, sarimsoq va boshqalardir. Bir
            kecha-kunduz davomida organizmga o‘rtacha 10-20 mg rux kerak.
            Ruxning shunday bir xususiyati borki, u mavjud mahsulotlar ba’zan
            ko‘proq iste’mol qilinsa ham tanadagi miqdori oshib ketmaydi.
            Ruxning ortiqchasi ajratish a’zolari orqali tashqariga chiqarib
            yuborilaveradi. Bugungi kunda rux va uning birikmalari
            RNK-polimeraza faoliyatini sekinlashtirishi mumkin - bu virusli RNK
            molekulasini, koronaviruslar fermentini sintez qiladi va virusning
            organizmga tarqalishini tormozlaydi. Uning tanqisligi boshqa virusli
            kasalliklarni ham kuchaytiradi.
            <p className="sarlavha">Temir</p>Odam tanasidagi barcha hayotiy
            jarayonlarning me’yorida borishi uchun natriy, kaliy, kalsiy,
            fosfor, magniy bilan bir qatorda temir ham juda zarur. Odam
            tanasidagi mavjud temirning 57% gemoglabin tarkibida, 7% muskullarda
            mioglobin ko‘rinishida, 16% to‘qimalarda uchraydigan
            metallofermentlar tarkibida, qolgan 20% esa jigar, taloq,
            buyraklarda, ilikda zaxira holida saqlanadi. Uning kundalik me’yori
            o‘rtacha 10-18 mg ni tashkil qiladi. Iste’mol qilinadigan taomlarda
            temir kam bo‘lsa, odamda tez charchash, teri rangparligi, nafasga
            to‘ymaslik kabi holatlar paydo bo‘ladi. Bu belgilarning paydo
            bo‘lishiga sabab qonda kislorod va karbonat angidridni tashuvchi
            gemoglabin moddasining kamayib ketishidir. Gemoglobin esa temirsiz
            hosil bo‘lmaydi. Gemoglabin qizil qon tanachalarining yoki
            eritrotsitlarning asosini tashkil qiladi. Bitta eritrotsitda 250
            millionta gemolobin molekulasi bo‘lib, uning har qaysisida bittadan
            temir atomi bo‘ladi. Ma’lumki, eritrotsitlar tirik hujayralar
            hisoblanib, asosan iliklarda hosil bo‘ladi va 90-120 kundan keyin
            jigar, taloqda o‘z vazifasini o‘tab o‘ladi va bir vaqtning o‘zida
            tarkibidagi temirni ham yo‘qotadi. Shu bois yangi eritrotsitlarning
            shakllanishi va hosil bo‘lishi uchun oziq-ovqat mahsulotlari bilan
            temir doimiy suratda qabul qilib turilishi shart. Jahon Sog‘liqni
            Saqlash Tashkilotining e’lon qilgan ma’lumotlariga qaraganda
            kamqonlilik (anemiya) er yuzidagi aholining 20% ida uchraydi. Shu
            kasallikning 80% temir yetishmasligi tufayli sodir bo‘lar ekan.
            Turli-tuman sabablarga ko‘ra tanadan qon yo‘qotilishi temir
            elementining kamayib ketishiga olib keladi. Ayniqsa ayollarda bunday
            (hayz ko‘rish, bola tug‘ish va boshqalar) temir taqchilligi tez-tez
            kuzatiladi. Shuning uchun ayollar ovqatlanishida ushbu moddalarning
            yetarli bo‘lishiga alohida ahamiyat berish zarur. Temir
            yetishmasligi tufayli kamqonlik kasalligiga chalingan ayollardan
            tug‘ilgan bolalar nimjon, kasalliklarga tez chalinuvchan, injiq,
            terisi rangpar, nerv tizimi kuchsiz bo‘ladi. Bunday bolaning tez-tez
            boshi og‘rib turadi, ichi dam bo‘ladi, sochlari to‘kilib
            siyraklashadi, og‘iz chetlarida yorilish bo‘lib turadi.
            Respublikamizning janubda, Qoraqalpog‘iston va Xorazm viloyatlarida
            tug‘ish yoshida bo‘lgan ayollar orasida anemiya bilan og‘riganlar
            ko‘p uchraydi. Bularning aksariyatiga noto‘g‘ri ovqatlanish asosiy
            sabab bo‘ladi, ya’ni ularning yegan ovqatida temir yetarli bo‘lmaydi
            yoki ovqat bilan u tegishli miqdorda qabul qilinsada, me’da ichakda
            yaxshi so‘rilmaydi. Agar ovqatda temir yetarli bo‘lib, C vitamini
            bo‘lmasa tanaga kirgan temir ichakdan qonga o‘tmaydi yoki uning
            so‘rilishiga ba’zi birikmalar (masalan, fosfotidlar) salbiy ta’sir
            qiladi. Aholi orasida mikro- va makroelementlar, jumladan temir
            elementi haqida ularga bo‘lgan talab va ularning manbalari hazm
            jarayonlari to‘g‘risida tushuntirish, targ‘ibot ishlarini olib
            borish kerak. Ayniqsa qishloq joylarida bunga ehtiyoj katta. Qishloq
            aholisi o‘zi etishtiradigan mahsulotlarining qaysisida qanday
            mineral moddalar borligini, ularni iste’mol qilish tartiblarini
            yaxshi bilmaydi. Bunday ahvol shahar aholisi orasida ham yo‘q emas,
            shaharliklar ovqatning ko‘p qismini o‘ta tozalangan undan
            tayyorlangan taomlar, har xil pishiriqlar, shakar, turli-tuman
            shirinliklar tashkil qilib, ularning tarkibida temir juda kam
            bo‘lganligi bois kamqonlik yuzaga kelishi ehtimoldan holi emas.
            Qaddi-qomatim chiroyli bo‘lsin deb faqat jinday shirinlik bilan
            kifoyalanadigan qizlarning iste’mol qilgan taomlari tarkibida temir
            yetishmasligidan ularning kamqonlilik xastaligiga mubtalo bo‘lishi
            tez-tez uchraydi. Turli xil oziq-ovqat mahsulotlari bilan qabul
            qilinadigan temirning 10% o‘zlashtiriladi, ya’ni qonga so‘riladi.
            Shuni qayd qilish kerakki o‘simlik mahsulotlaridagi temirga nisbatan
            hayvon go‘shti, jigaridan u ancha yaxshi o‘zlashtiriladi
            (o‘simliklar 1%, go‘shtdan 10-25% o‘zlashtiriladi). Ba’zi bir oziq
            moddalar temirning o‘zlashtirilishiga salbiy ta’sir qiladi, bularga
            sut, tuxum va choy kiradi. Choy ko‘p ichilsa (ayniqsa achchiq choy)
            temirning o‘rtacha o‘zlashtirilishi 10-12% dan 2% ga tushib qoladi.
            Shuning uchun ham kamqon odamlarning achchiq choy ichmasligi tavsiya
            qilinadi.Homiladorlik paytida temirga ehtiyoj ancha oshadi, lekin
            bunday ayollarning ko‘pchiligi bu paytda odatdagidek
            ovqatlanaverishadi, shu bois 30-73% homilador onalarda temir
            tanqisligi - anemiya paydo bo‘ladi. Bunday anemiyaga uchragan
            ayollarda bola tashlash, chala va hatto bolaning o‘lik tug‘ilishi
            holatlari kuzatiladi. Shuning uchun bu ko‘rsatkichni sog’lom
            ovqatlanishni tashkil qilishda hisobga olish lozim. Shunisi ham
            borki, har xil mahsulotlardan temir ichaklar orqali turli miqdorda
            so‘riladi. Uning so‘rilishini yaxshilash uchun iste’mol qilinayotgan
            mahsulotlarga C vitaminiga boy ko‘katlardan qo‘shish lozim, masalan,
            tuxum sarig‘idagi temirning maksimal darajada qonga o‘tishi uchun
            unga petrushka, shivit va boshqa ko‘katlarni qo‘shib iste’mol qilish
            kerak. Shuningdek, na’matak, apelsin, limon kabi meva sharbatlari
            ham temir o‘zlashtirilishini ancha jadallashtiradi. Keksa odamlarda
            temirni o‘zlashtirish ancha sekin kechadi. Shu bois ular ovqatida C
            vitaminiga boy mahsulotlar boshqalarnikiga qaraganda ko‘proq
            bo‘lishi kerak. Temir elementi mol go‘shti, jigari, tuxum sarig‘i,
            kepagi ajratmasdan tayyorlangan non, bug‘doy kepagi, karam, olxo‘ri,
            o‘rik, mayiz, yong‘oq, kungaboqar va oshqovoq urug‘i, bug‘doy
            maysasi, loviya no‘xat va boshqalar kiradi. Bug‘doy uni kepagidan
            ajratilsa temir miqdori sezilarli darajada kamayib ketadi, masalan,
            kepakli unning 1 kg da 30 mg temir bo‘lsa, u kepagidan ajratilgandan
            keyin bu ko‘rsatkich 8,2 mg ga tushib qoladi. Tayyorlanadigan
            salatlarni temirga boyitishning eng oson yo‘li unga bug‘doy
            kepagidan sepib iste’mol qilishdir. Shuningdek olma, nok, gilos,
            ertut, shaftoli va olxo‘rida ham temir mo‘l. Kundalik ovqatda va
            konservalar tayyorlashda kon tuzidan foydalanish oddiy tuzga
            qaraganda temir bilan yetarli darajada ta’minlanishi borasida muhim
            ahamiyat kasb etadi. Bir kilogramm kon tuzi tarkibida 450 mg temir
            bor. Temirga eng boy o‘simliklardan biri bu qichitqi (krapiva),
            shuning uchun ham kamqonlikni davolashda tabiblar undan keng
            ko‘lamda foydalanib kelishgan. Bu o‘simlikdan olingan sharbatga bir
            oz asal aralashtirib ichilsa yaxshi naf qiladi. Temir
            yetishmasligidan hosil bo‘ladigan kamqonlilik tufayli bir qator
            hastaliklar kelib chiqadi, bunga issiqlik almashinuvining buzilishi,
            me’da shirasida kislotaning pasayib ketishi, asosiy oziq
            moddalarining hazm bo‘lishini olib boradigan fermentlar faolligining
            kuchsizlanishi, ichaklar shilliq qavatining atrofiyalanishini olish
            mumkin. Ushbu holatlar iste’mol qilingan ovqatlar tarkibidagi
            uglevod, oqsillar va yog‘larning hazm bo‘lishini yomonlashtiradi.
            Me’da-ichak yo‘lining distrofiyasi, ishtahaning pasayib ketishi,
            ovqatlangandan keyin qusish holatlari, bo‘r, kesak kabi moddalarni
            iste’mol qilishga moyillik paydo bo‘lishiga olib keladi, natijada
            kamqonlilik tufayli kuchsizlanib qolgan organizm ovqat hazm qila
            olmaslik tufayli yanada darmonsizlanadi. Bunday paytlari
            me’da–ichakdagi noxushliklarni davolashdan avval temir taqchilligini
            bartaraf qilish maqsadga muvofiqdir.
            <p className="sarlavha">Mis</p>
            Uning odam salomatligiga ta’siri azaldan ma’lum bo‘lgan. Masalan,
            mis konlarida ishlaydiganlar radikulit kasalligi bilan kam
            xastalangan, ularda qon bosimi ham sezilarli darajada ko‘tarilib
            ketmagan va saraton (rak) kam uchragan. Mis qon hosil bo‘lishiga
            ijobiy ta’sir ko‘rsatadi, u taqchil bo‘lsa jigarda temir miqdori
            yetarli bo‘lsa ham gemoglobin hosil bo‘lishi qiyinlashadi. Moddalar
            almashinuvida ishtirok qiladigan ayrim fermentlar mis ishtirokida
            ishlaydi. Mis nerv tolalarini o‘rab turadigan va ularda
            o‘tkazuvchanlikni yaxshilaydigan mielin po‘stining hosil bo‘lishida
            faol qatnashadi. Mis taqchilligi ikki holatda, ya’ni uning iste’mol
            taomlari tarkibida tanqisligi va ovqat bilan yetarli miqdorda qabul
            qilingan misning ichaklardan yomon so‘rilishi tufayli ro‘y beradi.
            Mis yetishmasligi tufayli soch oqaradi, buning oldini olish uchun
            yong‘oq, tuxum sarig‘i, qatiq, qora non, jigar kabi mineral boy
            mahsulotlarni ko‘proq iste’mol qilish lozim. Yana u jenshen
            o‘simligining barglarida ko‘p bo‘ladi. Misga bo‘lgan kecha–kunduzlik
            talab 1 –3 mg, lekin uning tanada ko‘payib ketishi zahar kabi ta’sir
            etadi. Ayniqsa, uning oltingugurt bilan birikmasi ancha xavflidir.
            Konserva, ovqat mis qozonlarda tayyorlansa, ular tarkibidagi C
            vitamini tamoman yo‘qolar ekan.
            <p className="sarlavha">Yod</p>
            Yod odam uchun eng zarur mineral moddalardan biri hisoblanadi.
            Qadimgi Hindiston va Xitoyda qalqonsimon bezning kattalashishi bilan
            bog‘liq kasallikni dengiz bulutlarining kuli bilan davolashgan.
            Keyinchalik bu shifobaxsh moddaning yod ekanligi aniqlandi. Yod
            yetishmasligi natijasida moddalar almashinuvi buzilib, qalqonsimon
            bez kattalashadi, sochlar to‘kila boshlaydi, tana harorati pasayadi,
            odam jismonan va aqliy jihatdan zaiflashib qoladi. Yod qalqonsimon
            bez gormoni tiroksinning sintezlanishi uchun kerak. Yod
            yetishmasligi tufayli qalqonsimon bezning kasallanishi dengizdan
            uzoq tog‘ va tog‘ oldida yashaydigan aholi orasida ko‘p uchraydi.
            Buning sababi shundaki qayd qilingan hududlardagi yod birikmalarini
            tuproqdan yomg‘ir suvlari yuvib, iste’mol qilinadigan mahsulotlarda
            uning miqdori kamayib qoladi. Shuning uchun dengizlar bilan o‘rab
            olingan Yaponiyada aholi qalqonsimon bez faoliyati buzilishi bilan
            bog‘liq kasalliklar kam uchraydi. Tayvanliklar dengiz
            mahsulotlaridan mahalliy urf – odatga ko‘ra foydalanishmaydi,
            shuning uchun ularda bu kasallik ko‘proq uchrar ekan. Odam uchun bir
            kecha-kunduzda 100–200 mkg yod zarur va uning 90%i o‘simlik
            mahsulotlari bilan qabul qilinadi. Yodga boy mahsulotlarga dengiz
            baliqlari va o’simliklari, tuxum, go‘sht, sholg‘om, sarimsoq, qovun,
            sabzi, karam, pomidor, loviya, shovul va boshqa ko‘katlar kiradi. 1
            kg har – xil sabzavotlarda – 20 – 30 mkg, 1 kg donlar yig‘indisida
            (bug‘doy, arpa va boshqalar) 50 mkg, 1l suvda 55 mkg, bir tuxumda
            (xomida) 35 mkg, 1 kg baliqda 100-200 mkg yod uchraydi. 13-jadvalda
            oziq-ovqat mahsulotlaridan ayrimlaridagi yod miqdori to‘g‘risida
            ma’lumot keltilgan.
            <p className="rasm">
              <img src={rasm50} />
            </p>
            Shuni aytib o‘tish kerakki, oziq-ovqatlarni pishirish, qaynatish
            tufayli ularning tarkibidagi yod ancha kamayib ketadi. Masalan,
            go‘sht qovurilganida undagi yodning 64,5%, qaynatilganida 48,3%,
            kartoshka qaynatilganida 37-40%, non pishirilganida 38,7-84,0% gacha
            yod yo‘qotiladi. Oziq-ovqat mahsulotlarini uzoq vaqt saqlashda
            tegishli qoidalarga rioya qilinmasa, ulardagi yodning 35-50% gacha
            yo‘qolishi mumkin. Yodga bo‘lgan taqchillikning oldini olish uchun
            osh tuzi kaliy yodid bilan yoki natriy yodid bilan boyitiladi.
            Buning uchun aytilgan yod birikmasidan har 100 kg osh tuziga 1,0-2,5
            g qo‘shiladi. Yodning spirtdagi eritmasi yoki suvdagi aralashmasi
            dezinfeksiyalovchi, zararsizlantiruvchi, kuydiruvchi modda sifatida
            tibbiyot amaliyotida keng qo‘llaniladi. Ovqatlanishda kon tuzidan
            foydalanish yodga bo‘lgan ehtiyojni qondirishda muhim ahamiyat kasb
            etadi, chunki kon tuzi tarkibida boshqa mikroelementlar bilan bir
            qatorda yod ham mavjuddir. Dengiz havosidan nafas olish qalqonsimon
            bez faoliyati buzilganda katta yordam qiladi. Bu o‘rinda Boltiq va
            Qora dengizlar alohida ahamiyatga ega. Chunki ular suvining
            tarkibida yod ko‘p bo‘ladi.
            <p className="saralavha"> Kobalt</p>Bu mineral moddaning biologik
            ahamiyati aniqlanganiga u qadar ko‘p vaqt bo‘lgani yo‘q. Ammo u
            shunday elementlar qatoriga kiradiki, uning me’yoridan kami ham,
            ko‘pi ham salomatlik uchun zarar keltiradi. Kobalt B12 vitaminining
            (kobalamin) tarkibiy qismiga kirib (B12 vitamini molekulasida 1 atom
            kobalt bor), unga bo‘lgan taqchillik kamqonlik (anemiya) kasalligini
            keltirib chiqaradi. Kobaltga bo‘lgan kunlik ehtiyoj o‘rtacha 14-78
            mkg, kamqonlilik alomatlari sezilganida bu ko‘rsatkich 50-150 mkg
            gacha chiqariladi. Kobaltning asosiy manbalari bo‘lib jigar,
            buyraklar, sut va sut mahsulotlari, tuxum, bug‘doy va marjumak
            yormasi, makkajo‘xori, loviya, no‘xat, sarimsoqlar hisoblanadi.
            Aniqlanishicha, qayerda kobaltga taqchillik bo‘lsa, o‘sha yerda
            yashaydigan odam va hayvonlarda anemiya ko‘p uchraydi. Odam
            tanasining turli a’zolarida kobaltning miqdori har xil, masalan,
            taloqda 35 mkg%, jigarda 25 mkg%, muskullarda 2,3 mkg%, qonda 60
            mkg%Kobalt yetishmasligi soch oqarishiga ham sabab bo‘ladi. U tanada
            nuklein kislotalarning sintezlanishi uchun kerak, kasalliklardan
            keyin tiklanishda bu element muhim ahamiyatga ega. Kobaltning
            me’da-ichak tizimidan qonga so‘rilishi oson kechadi. Doim o‘simlik
            mahsulotlari bilan oziqlanish kobaltga nisbatan taqchillikni
            keltirib chiqarishi mumkin, shuning uchun sut, mol jigari,
            buyraklardan tegishli ravishda ovqatda ishlatib turish oqilona
            ovqatlanishni tashkil qilishda muhim bo‘lib hisoblanadi.{" "}
            <p className="sarlavha"> Ftor</p>Kobalt singari tanada ftor miqdori
            kamaysa ham, ko‘paysa ham zarar keltiradigan element hisoblanadi.
            Unga bo‘lgan kunlik talab 23 mg. Ftor eng ko‘p uchraydigan oziq
            moddalar mol buyraklari, jigari, go‘shti, bug‘doy uni, karam,
            sabzavotlar va mevalardir Ftor skelet suyaklari va tishning tarkibiy
            qismiga kirib, hozirgi sharoitda ko‘pincha nafas olish yo‘li bilan
            qabul qilinadi. Buning sababi shundaki, sanoati rivojlangan
            shaharlarda ftor har xil mahsulotlar ishlab chiqaruvchi zavod
            chiqindisi bilan havoga ko‘plab ko‘tariladi. Tanada ftorning
            ko‘payib ketishi ozteoxondroz, suyaklar shakli, rangining
            o‘zgarishi, bo‘g‘inlar qo‘pollashishi, harakatchanlikning yo‘qolishi
            kabi xastaliklarni keltirib chiqaradi. Tishlardagi karies
            kasalligining oldini olish uchun ichiladigan suv ftor bilan
            boyitiladi, lekin 1 l suvga 1,0-1,5 mg ftor aralashtirish kerak,
            undan ko‘pi ham, ozi ham salomatlikka zarar keltiradi. Choy
            tarkibidagi ftorning yaxshi o‘zlashtirilishi uchun uni damlashdan
            oldin uzoq vaqt qaynatmaslik va damlangan choyni uzoq saqlamasdan
            ichish kerak, aks holda undagi ftor cho‘kma holiga tushib qoladi va
            tanada ftor tanqisligi yuzaga kelishi mumkin. Achchiq choyda ftor
            miqdori me’yoridan ko‘p bo‘ladi, shuning uchun bunday choyga
            odatlanmagan yaxshi. Ftor ko‘plab qabul qilinsa tishlarda qora
            dog‘lar paydo bo‘ladi, tish sarg‘ayib, mo‘rtlashadi, ushala
            boshlaydi. Oziq-ovqatlar tarkibidagi ftorni kamaytirish uchun
            iste’mol qilinadigan mahsulotlarni suvda obdon yuvish kerak, chunki
            ftor suvda tez eruvchanlik xususiyatiga ega. Sanoati rivojlangan
            katta shaharlarda bu narsaga ko‘proq e’tibor berish kerak, chunki
            metall, g‘isht, cho‘yan, superfosfat va boshqa mineral o‘g‘it ishlab
            chiqaradigan zavodlar havoni ftor bilan boyitib yuboradi.
            <p className="sarlavha">Xrom</p>Bu elementning tanada yetarli
            bo‘lishi uglevodlar almashinuvini yaxshilaydi. Keksalar organizmida
            uning tegishli miqdori bo‘lishiga alohida e’tibor berish kerak,
            chunki yosh o‘tishi bilan uglevodlar o‘zlashtirilishi yomonlashib
            boradi. Xrom birikmalari hujayra pardasidan glyukoza o‘tishini
            osonlashtiradi. Agar tanada xrom yetishmasa qonda shakar hamda
            xolesterin miqdori ko‘payib ketar ekan. Sanoati rivojlangan katta
            shaharlardagi zavod va fabrikalar chiqindisi havoda xrom miqdorini
            ko‘paytirib yuboradi, natijada kishilar xromli havo bilan nafas olib
            bir qator kasalliklar orttiradi. Ulardan eng ko‘p uchraydigani o‘pka
            saratonidir. Xrom mis kukuni chiqaradigan zavodlar chiqindisida
            ancha ko‘p bo‘ladi. Hisob-kitoblarga qaraganda, qayd qilingan
            shaharlarda yashaydigan odamlar orasida o‘pka saratoni xromi
            me’yoridan oshmaydigan havo bilan nafas oladiganlarga qaraganda
            20-30 marta ko‘proq uchrar ekan. Xromli havo bilan nafas olish yana
            dam qisma kasalligiga ham chalintiradi. Xromi eng ko‘p mahsulotlar
            bu pivo achitqisi va jigardir. Unga bo‘lgan kecha-kunduzlik talab
            0,8 mg atrofida. Homilador va sut emizadigan ayollarda xromga
            nisbatan talab birmuncha yuqori bo‘ladi, shuning uchun ham ular
            tez-tez jigar iste’mol qilishi yoki 23 qoshiq pivo achitqisidan
            tanovul qilib turishlari kerak.
            <p className="sarlavha"> Marganets</p>Marganets har bir hujayraning
            shakllanishi va rivojlanishi uchun kerak, yana u temir, mis
            elementlarining yaxshi o‘zlashtirilishini ta’minlaydi. B1
            vitaminining ham faoliyati marganetsga bog‘liq, u tanada kam bo‘lsa,
            bu vitamin hech bir ta’sir kuchiga ega bo‘lmaydi. Marganets ko‘pgina
            zaharli moddalarni zararsizlantirish xususiyatiga ega. Shuning uchun
            ham ovqatdan zaharlanish holatlari bo‘lganida me’da-ichak
            yuvilgandan keyin marganetsning kaliyli tuzidan tayyorlangan kuchsiz
            eritmasini ichish tavsiya qilinadi. Marganetsga bo‘lgan
            kecha-kunduzlik ehtiyoj 5-7 mg atrofida bo‘lib, u ko‘p uchraydigan
            mahsulotlarga qora non, bug‘doy non, grechka yormasi va boshqalar
            kiradi. Yuqorida biz ko‘rib o‘tgan mineral moddalardan tashqari yana
            shundaylari ham borki ular zaharli bo‘lib, organizmga salbiy ta’sir
            qiladi. Ular havo, suv va oziq-ovqat mahsulotlari tarkibida turli
            yo‘llar bilan (zavod va fabrikalar, transport vositalaridan
            ajraladigan chiqindilar va b) orqali kirib qoladi va shu bois nafas
            olish, suv ichish va ovqatlanish jarayonida tanamizga singadi.{" "}
            <p className="sarlavha">Suv</p>
            Inson organizmining 2/3 qismi suvdan iborat. Katta yoshli inson
            kuniga 2 litrdan kam bo‘lmagan miqdorda suv ichishi kerak. Bu hayot,
            salomatlik va yashash uchun muhimdir! Suv inson organizmining barcha
            hujayralari uchun muhim oziq hisoblanadi. Aynan suv har bir
            organning katta qismini egallaydi. Masalan, qondagi suv miqdori -
            90% bo‘lsa, miya - 85%, muskullar - 75%, jigar - 65%, suyaklar -
            28%, yog‘ to‘qimalari esa 25% suvdan tashkil topgan. Organizmdagi
            barcha kimyoviy reaksiyalar suv ishtirokida bo‘ladi. Yangi tug‘ilgan
            chaqaloqlarda suvning nisbiy miqdori 90%. Yosh oshgan sayin
            organizmda suvning miqdori kamayyadi. Odamda suvning umumiy miqdori
            tana ogʻirligiga nisbatan 70% ni, hujayra ichi suyuligida 40%,
            hujayra orasi suyuqligida 16%/ ni, tomir ichi suyuqligida 4,5% ni
            tashkil qiladi. Chanqoq hissi organizmga yordam kerakligidan dalolat
            beradi. Shu bois inson faqat organizmi talab qilgandagina emas, har
            doim - suv ichgisi kelsakelmasa, uni suv bilan ta’minlab turishi
            kerak. Aksariyat odamlar kundalik suv me’yorning bor-yo‘g‘i 1/3
            qismini iste’mol qilganliklari uchun ham, ko‘p kasalliklar
            rivojlanadi. Juda ham ko‘p kasalliklar suv
            yetishmovchiligidanrivojlanadi, Suv yetishmovchiligidan ko‘pchilik
            a’zolar funktsiyasiga salbiy ta’siri qiladi. Jigar. Jigar organizmni
            mikrob va viruslar, ozuqaviy bo‘yoqlar va konservantlar ko‘rsatuvchi
            salbiy ta’sirdan himoyalaydi. Jigarning vazifasi toksinlarni suvda
            eruvchan holatga keltirish va ularni organizmdan muvaffaqiyatli
            chiqarib tashlashdan iborat. Jigar me’yoriy suv balansi tufayli
            chiqindilarni qayta ishlashga kamroq vaqt sarflaydi va, demak, turli
            kasalliklar rivojining oldini oladi. Buyraklar. Buyraklar
            organizmdagi barcha suyuqliklarni filtrlaydi. Inson yetarli miqdorda
            suv ichsa, buyraklar ortiqcha suyuqlikni peshob bilan chiqarib
            yuboradi, u bilan birga esa barcha zararli moddalar ham organizmdan
            tashqariga chiqariladi. Agar suv kam ichilsa, u holda buyraklar uni
            tejashiga va organizmda ushlab turishiga to‘g‘ri keladi. Bunday
            holatlarda kamroq peshob hosil bo‘ladi, bu esa buyraklar faoliyatiga
            salbiy ta’sir ko‘rsatadi. Qon. Qonga tushuvchi barcha zararli
            moddalar limfaga o‘tib ketadi. Limfa o‘lik hujayralar va boshqa
            chiqindilarni to‘playdi, ularni limfa tugunlariga etkazadi, bu yerda
            ular filtrlanadi, keyin qayta ishlash uchun jigar va buyraklarga
            yo‘llanadi. Me’yoriy suv balansi limfaga bunday mas’uliyatli ishning
            uddasidan chiqishga yordam beradi. Bo‘g‘inlar. Artrit kasalligining
            ko‘p holatlarda organizmning surunkali suvsizlanishi natijasida
            kelib chiqishini isbotlangan. Organizmga surunkali ravishda suv
            yetishmasa, bo‘g‘inlarda synovial suyuqlik kamayishi jiddiy zarar
            keltirib artritga olib keladi. Teri. Suvning yyetiarlicha iste’mol
            qilinmasligi organizmning suvsizlanishiga olib keladi. Suvsizlangan
            a’zolarini organlarni zararli moddalardan to‘liq tozalay olmaydi,
            ular qonga kelib tushadi va bu so‘zsiz terining holatida o‘z aksini
            topadi. Teri rangpar, dag‘al tus olib, unda dog‘lar paydo bo‘ladi,
            son va dumba sohalarida tsellyulit paydo bo‘lib, tovon va tirsaklar
            terisining qurishi kuzatiladi. Yuqorida qayd etilgan barcha
            xususiyatlaridan tashqari, suv ortiqcha vazndan xalos bo‘lishga
            yordam beradi. Suv ishtahani kamaytiradi va yog‘ zaxiralarini qayta
            ishlashda ishtirok etadi. Agar organizmdagi suv miqdori yetarli
            bo‘lmasa, u holda buyraklar o‘z vazifasini me’yoriy bajara olmaydi.
            Shunda jigar ularning vazifasini o‘z zimmasiga oladi, uning yog‘
            almashinuvida ishtirok etish xususiyati esa kamayadi. Natijada yog‘
            organizmda to‘plana boshlab, semirishga olib keladi. Shu bois inson
            ortiqcha vazn tashlashga harakat qilsa-yu, yyetiarli suv ichmasa,
            organizm yog‘ni me’yoriy qayta ishlay olmaydi. Shu bilan birga, tan
            olish kerakki, ba’zan organizmda suv yig‘ilishi natijasida vazn
            oshish holatlari ham kuzatiladi. Tanasida suv yig‘ilishiga moyil
            bo‘lgan odamlar kamroq suv ichsa, muammo o‘z-o‘zidan hal bo‘ladi deb
            hisoblanadi. Biroq, aslida buning aksi bo‘ladi. Organizmga suv
            yetishmasa, u suyuqlikning har bir tomchisini ushlab qolishga
            harakat qiladi va uni zaxira sifatida elka va bilaklarda
            zaxiralaydi. Shuning uchun organizmni muntazam ravishda yetarlicha
            suv bilan ta’minlab turish tavsiya etiladi. Har kuni o‘rtacha 2 litr
            suv organizmdan buyraklar, ichak, o‘pka va teri orqali tashqariga
            chiqariladi. Taxminan 0,5 litr suyuqlik nafas chiqarilishi
            natijasida yo‘qotiladi. Agar mana shu chiqarilayotgan suv o‘rni
            to‘ldirilmasa, organizm suvsizlanadi, qator xastaliklar keltirib
            chiqaradi. Suvsizlanish belgilariga charchoq, bosh va muskullardagi
            og‘riqlar, og‘iz va ko‘z qurishi, issiq havoni ko‘tara olmaslik,
            peshob rangining to‘q tus olishi. Suv ichish me’yorlari. Jismoniy
            mashqlar bilan shug‘ullanish yoki issiq haroratda ko‘p suv ichish
            tavsiya etiladi. Ortiqcha vaznga ega odam esa har ortiqcha 10
            kilogramm uchun qo‘shimcha 1 stakan suv ichishi kerak. Shuni yodda
            tutish lozimki, kuchli chanqoq organizmning jiddiy suvsizlanishidan
            dalolat beradi, shuning uchun faqatgina chanqoqni his qilganda emas,
            muntazam ravishda suv ichish zarur. Germaniyadagi bolalar
            oziqlanishini o‘rganuvchi ilmiy-tadqiqot instituti izlanishlari
            natijasida ma’lum bo‘lishicha, 1 yoshdan 4 yoshgacha bo‘lgan bolalar
            kam suyuqlik ichishar ekan. Bola bu yoshda deyarli taomlar bilan
            iste’mol qilinadigan suyuqlikdan tashqari 1 litr suyuqlik ichishi
            kerak. Bolalar ichishi uchun eng optimal suyuqlik - bu toza ichimlik
            suvi. Suvga aralashtirilgan meva va sabzavot sharbatlari
            organizmning suyuqlikka bo‘lgan talabini yuqori qondiradi, biroq
            ularda ma’lum kaloriyalar mavjud. Sut va shakarli ichimliklarni
            o‘zlashtirish uchun esa organizmga oddiy suv kerak bo‘ladi. Choy,
            qahva va alkogol yengil peshob haydash ta’sirga ega, shuning uchun
            ulardan keyin suyuqlik o‘rnini to‘ldirish uchun organizmga suv kerak
            bo‘ladi. Suvdek qadrli suyuqlik o‘rnini hech nima bosa olmaydi.
            Ayrim vaqtlarda suv ichish tavsiya etilmaydi, masalan tunda suv
            ichish zararlidir. Tunda uxlash oldidan emas, ertalab uyg‘ongandan
            keyin bir stakan suv ichish foydali. Aks holda, buyraklarga ortiqcha
            yuk tushadi, ertalab esa yuz, oyoq va qo‘l barmoqlarida shishlar
            paydo bo‘ladi.
            <p className="sarlavha">Suv-tuz almashinivining boshqarilishi</p>
            Hujayra ichi va hujayra tashqarisidagi, qon tomirlarining ichi va
            tashqaridagi suvning hajmi nisbati o`zgarganda, ushbu suyuqlikning
            qayta taqsimlanish reaksiyalari amalga oshiriladi. Bu mexanizm
            suyuqikda bo`lgan natriy miqdoriga bog‘lik emas lekin organizmdagi
            suv hajmini boshqaruvchi ko`pchilik mavjud mexanizmlar natriy
            almashinuvi jarayonlari bilan bog‘liq. Endogen (metabolik) suv,
            oqsillar, karbonsuv va yog‘larning almashinuv va sarflanish
            jarayonlaridan iborat bo`lib, odamning bir kecha-kunduzdagi suvda
            ehtiyojining 10% ni tashkil qiladi (120-250ml). Hujayra suyuqligi
            osmotik bosimning oshishi, hujayra hajmining kamayishi, hujayradan
            tashqari suyuqlik hajmining kamayishi, kabi o`zgarishlar bir-biriga
            bog‘liq holda rivojlanadi. Bosh miyada volyumoregulyasiya markazi
            gipotalamus va o`rta miya yadrolarida joylashgan. Bu markaz hajmli
            reseptorlar (volyumoreseptorlar) va osmoreseptorlar orqali
            periferiya bilan afferent aloqalarini hosil qiladi va qaytar
            bog‘lanish orqali boshqariladi. Hajm reseporlari asosan kichik
            bosimli qon tomirlarida (o`pka venalarida) va yurak bo`lmachalarida,
            uyqu arteriyasida topilgan. Ular 10% gacha etadigan hajm miqdori
            o`zgarishlariga sezgirlar. Osmoreseptorlar gipotalamus supraoptik
            yadrosida, jigar, buyrak, taloq va qator boshqa a`zolarda topilgan.
            Suv va elektrolitlar almashinuvi o`zaro chambarchas bog‘liq bo`lib,
            biokimyoviy reaksiyalar suv muhitida sodir bo`ladi va yuqorida
            keltirilgan elementlarni o`z ichiga olgan kolloidlar, yuksak
            darajada suv molekulalari bilan fizik-kimyoviy bog‘langan bo‘ladi.
            Organizmda suv va elektrolitlar almashinuvi murakkab nerv-gumoral
            boshqarilishga ega. Suv-tuz almashinuvi boshqarilishining murakkab
            reflektor zanjiri to`rt turdagi reseptorlardan boshlanadi:
            Birinchidan bu og‘iz shilliq pardasidagi reseptorlar bo`lib, og‘iz
            quriganda chanqoqlik hissini keltirib chiqaradi. Ammo og‘iz shilliq
            qavati ho`llanganda, suv organizmga kirmasa ham, chanqoqlik hissi
            yo`qoladi. Shuning uchun chanqoqlikning bu ko`rinishi yolg‘ondakam
            chanqoqlik deyiladi. Ikkinchidan organizm suv zaxiralarini
            to`ldirish kerakligi yoki suv qabul qilishni to`xtatish
            to`g‘risidagi signallar me`da shilliq pardasidagi baro-
            reseptorlardan boradi. Me`daning kengayishi chanqoqlikni yo`qotadi,
            uning kichrayishi esa chanqoqlikni chaqiradi. Bu chanqoqlik
            organizmdagi suv miqdorining o`zgarishiga emas, me`da devori
            tonusining o`zgarishiga bog‘liq bo`lib, haqiqiy xususiyatga ega
            emas. Suv-elektrolitlar almashinuvining boshqarilishida ishtirok
            etuvchi uchinchi guruh reseptorlarni to`qimalardagi osmoreseptorlar
            tashkil etgan. Bular to`qimalardagi osmotik bosim o`zgarishlari
            to`g‘risida axborot etkazadi. Osmoreseptorlar ta`sirlanganda vujudga
            keluvchi chanqoqlik hissi suv miqdorining va elektrolitlar
            konsentrasiyasining haqiqiy o`zgarishi bilan bog‘liq bo`lganligi
            sababli haqiqiydir. Reseptorlarning to‘rtinchi guruhi - tomir
            tizimidagi valyumoreseptorlar bo`lib, ular harakatdagi qon hajmining
            o`zgarishiga sezuvchandir. Qon hajmi haqidagi sezgida uyqu
            arteriyasidvgi karotit sinus va buyrak usti bezi koptokchalar
            zonasidagi baroreseptorlar ham ishtirok etadi. Bundan tashqari
            distant reseptorlar (ko`ruv, eshituv v.boshqalar.) suv-tuz
            almashinuvining shartli reflektor boshqarilishida qatnashadi. Barcha
            reseptorlardan impul’slar suv-tuz almashinuvi markazi joylashgan
            gipotalamusning ventral va medial yadrolariga boradi. Bu yerdan
            “buyruqlar” organizmdan suv va tuz chiqaruvchi effektorlarga
            yuboriladi. Ma`lumki, bu jarayonni buyraklar, o`pkalar, hazm
            yo`llari va ter bezlari amalga oshiradi. Bosh miya po`stlog‘i
            nazorati ostida bo`lgan gipotalamus markazlari suvelektrolit
            almashinuvini quyidagicha boshqaradi. Gipotalamusning
            paraventrikulyar va supraoptik yadrolarida antidiuretik gormon
            sintezlanadi va gipofiz orqa bo`lagida yig‘iladi. Antidiuretik
            gormon ta’sirida buyrak kanalchalari suv reabsorbsiyasini
            jadallashashishi tufayli suv organizmda ushlanib koladi. Suv-tuz
            almashinuvining ikkinchi muhim boshqaruvchisi - buyrak usti bezi
            gormoni aldosterondir. U buyraklarda natriy reabsorbsiyasini va
            kaliy hamda vodorod ionlari sekresiyasini kuchaytiradi. SHu bilan
            bir vaqtda suv reabsorbsiyasi ham kuchayib, diurez kamayadi. Mazkur
            gormon kanalchalar proksimal qismida kalsiy va magniy
            reabsorbsiyasini kamaytiradi. Natriyuretik gormon (atrial peptid)
            siydik bilan natriy ionlari chiqarilishini kuchaytiradi.
            To`qimalarda natriyning yig‘ilishi osmoreseptorlarni ta`sirlab,
            antidiuretik gormon sekresiyasini kuchaytiradi va suvning organizmda
            ushlab qolinishini ta`minlaydi. Al’dosteron sekresiyasi bir necha
            mexanizmlar orqali boshqariladi: uning sekresiyasini gipofizdagi
            adrenokortikotrop gormoni qo`zg‘atadi; gipotalamusning o`zidan
            ajratiladigan adrenoglomerulotropin idora etadi; buyraklar ishlab
            chiqaradigan renin xam al’dosteron sekresiyasini jadallashtiradi.
            Elektrolitlar almashinuvini boshqarishda buyrak usti bezi
            po`stlog‘ining boshqa mineralokortikoid gormonlari ham ishtirok
            etadi. Ular yetishmovchiligida kaliy almashinuvi izdan chiqib,
            gipokaliemiya rivojlanadi. Buning oqibatida mushak adinamiyasi va
            boshqa qator o`zgarishlar paydo bo`ladi. Kal’siy va fosfor
            almashinuvini paratgormon boshqaradi. Bu gormon ta`siri ostida
            kal’siy oqsillar bilan birikadi va uning organizmdan chiqarilishi
            keskin tormozlanadi Suv-elektrolit almashinuviga adrenalin ham
            ta`sir etadi, u buyrak koptokchalaridagi tomirlarini toraytirib,
            fil’trasion bosimni pasaytiradi, diurez kamayadi, ya`ni organizmdan
            suv chiqarilishi kamayadi. Me`da-ichak yo`lli tuz-suv almashinuvida
            faol ishtirok etadi Har kechakunduzda 2,0-2,5 litr suv ovqat va
            ichimliklar shaklida iste`mol qilinadi, 6-7 litr hazm shiralari
            tarkibida bo`ladi, shulardan faqat 100-150 ml suv najas bilan
            chiqariladi, qolgan qismi so`riladi. Suvning so`rilishi me`dada
            boshlanadi, lekin asosan ingichka ichakda sodir bo`ladi. Suvning bir
            oz miqdori osmotik gradient tufayli so`riladi, ammo suv osmotik
            bosim farqi bo`lmaganda ham so`riladi. Epiteliositlarning erigan
            moddalarni, jumladan natriy va xlor ionlarini faol so`rishi suvning
            ham ular orqasidan tortilishiga sabab bo`ladi. Ichakda pH 6,8
            bo`lganda natriy ionlari va suv shiddat bilan so`riladi, pH 3,0 ga
            tushganda suvning so`rilishi to’xtaydi. Markaziy nerv tizimining
            tormozlanishi va vagotomiya suvning so`rilishini sekinlashtiradi.
            Tiroksin va adrenokortikotrop gormonlari suv so`rilishini
            kuchaytiradi, gastrin, sekretin, xolesistokinin-pankreozimin esa
            susaytiradi. Kaliy va natriy ionlari ichakdan epiteliositlar
            tomonidan elektrokimyoviy gradient tufayli nofaol tashiladi.
            Hujayralararo kanallardan natriy ionlari konsentrasiya gradienti
            asosida o`tadi. Ichak hujayralarning bazolateral membranasidan qonga
            mazkur ionlar faol transporti orqali o‘tadi. Demak natriy tashilishi
            ham faol, ham nofaol yo`llar orqali amalga oshiriladi. Natriyning
            so`rilishiga nerv va endokrin tizimlar ta`sir qiladi. Markaziy nerv
            tizimi faoliyati narkotik moddalar bilan tormozlantirilsa, natriy va
            suvning so`rilishi sekinlashadi. Adashgan nervning kesilishi,
            gipofiz, buyrak usti bezi gormonlari, gastrin, sekretin va
            xolesistokinin-pankreozimin ham natriy so`rilishini tormozlaydi.
            Ikki valentli kationlarning ko`pchiligi o`n ikki barmoq ichakda va
            ingichka ichakning proksimal qismida so`riladi. Bu kationlar orasida
            kal’siy, magniy, rux, temir va misning biologik ahamiyati katta.
            Kal’siy so`rilishiga paratgormon, tirokal’sitonin, buyrak usti bezi
            va gipofiz gormonlari ta`sir qiladi. Shuningdek, uning so`rilishi D2
            vitaminiga ham bog‘liq bo`ladi. Paratgormon kal’siy reabsorbsiyasini
            jadallashtirib, fosfatlar reabsorbsiyasini tormozlash orqali qon
            plazmasidagi kal’siy ionlari konsentrasiyasini oshiradi va
            fosfatlarning siydik bilan chiqarilishini kuchaytiradi. Bundan
            tashqari paratgormon proksimal kanalchalarda natriy ionlari va HSO3-
            reabsorbsiyasini pasaytirib, Genle qovuzlog‘ining ko`tariluvchi
            qismida magniy reabsorbsiyasini faollashtiradi. Kal’sitonin gormoni
            kal’siy va fosfatlar reabsorbsiyasini tormozlaydi. Buyrak
            hujayralari qon plazmasidan jigarda hosil bo`ladigan progormon
            vitamin D3 ni ayirib olib, uni fiziologik juda faol gormonga
            aylantiradi. Bu steroid ichakda kal’siyni biriktirib oluvchi oqsil
            hosil bo`lishini jadallashtiradi, kal’siyning suyaklardan chiqishi
            va uning kanalchalarda reabsorbsiyalanishini boshqaradi. Suv-tuz
            almashinuvi – odam va hayvonlar organizmida suv va tuzlarning qabul
            qilinishi, soʻrilishi, taqsimlanishi, ehtiyoji hamda ajralishi bilan
            bogʻlik jarayonlar majmui. Suv-tuz almashinuvi organizm ichki
            muhitidagi suyuqliklar miqdori, kislota-ishqor muvozanati, ionlar
            tarkibi, osmotik miqdorning doimiyligini taʼminlaydi. Sut
            emizuvchilarda suv va tuzlarni muvozanatini ushlab turadigan asosiy
            a’zo buyrak hisoblanadi. Suv-tuz almashinuvi nazorati maxsus
            reflektor tizimlar yordamida amalga oshiriladi, ulardan biri
            suyuqlik miqdorining oʻzgarishiga (volyumorgulyasiya), ikkinchisi
            esa osmotik miqdorning oʻzgarishiga (osmoregulyasiya) reaksiya
            beradi, bundan tashqari, ayrim ionlar miqdorini nazorat qiladigan
            gumoral boshqaruv omillari mavjud.
          </p>
        </Container>
      </div>
    </>
  );
}

export default Mavzular;
