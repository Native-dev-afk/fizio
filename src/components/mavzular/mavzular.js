import "./mavzular.scss";
import React, { useRef, useState } from "react";
import { Col, Container, Row } from "reactstrap";

function Mavzular() {
  return (
    <>
      <div className="more-swip">
        <Container>
          <p className="text">
            <span> </span>Ovqatlanish bu organizmning hayot faoliyatini
            taʼminlash, salomatlik va ish qobiliyatini saqlab turish uchun zarur
            oziq moddalarni oʻzlashtirish jarayoni. Ovqat hazm qilish organizm
            iste’mol qilgan oziq moddalarning tarkibiy jihatdan o‘zlashtira
            oladigan shakligacha fizikaviy va kimyoviy qayta ishlash jarayonlari
            bo‘lib – ovqatlanish fiziologiyasining bir qismidir. Metabolizm
            (moddalar va energiya almashinuvi) – tirik organizmlarning o‘sishi,
            hayot faoliyati, ko‘payshi, tashqi muhit bilan munosabatlarini
            doimiy ta’minlaydigan kimyoviy o‘zgarishlar majmui. Moddalar
            almashinuvi tufayli hujayra tarkibiga kiradigan molekulalar
            parchalanadi va sintezlanadi, hujayra strukturalari va hujayralararo
            moddalar hosil bo‘ladi, yemiriladi va yangilanadi. Moddalar
            almashinuvi energiya almashinuvi bilan chambarchas bog‘langan
            bo‘lib, ularni bir-biridan ajratib bo‘lmaydi. Metabolizmda 2
            qarama-qarshi jarayon - anabolizm (asimilyasiya, plastik
            almashinuvi) va katabolizm (dissimilyasiya, energetik almashinuvi)
            ajratiladi. Ovqatlanish - metabolizmning plastik almashinuvi bilan
            bog‘liq bo‘lgan jarayon bo‘lib, uning asosida organizmni qurilish
            materiallari va potensial energiya bilan ta’minlanishi yotadi.
            <p className="sarlavha">
              1.1. Ovqatlanish va metabolizm fanining boshqa fanlari bilan
              aloqasi va vazifalari
            </p>
            Ovqatlanish va metabolizm fani odam va hayvonlar fiziologiyasining
            bir bo‘limi bo‘lganligi uchun, mazkur fanga aloqador bo‘lgan barcha
            yo‘nalishlar bilan yaqindan bog‘liqdir. Ovqatlanish haqidagi fan
            dunyo miqyosida nutritsiologiya nomi bilan (nutritio - ovqatlanish,
            logos - ta’limot) multidissiplinar fan bo‘lib o‘z ichiga
            fiziologiya, biokimyo, ovqatlanish gigiyenasi va boshqa biologik va
            tibbiy yo‘nalishlar bo‘yicha tegishli masalalarni oladi. Ovqatlanish
            jarayoni tibbiyot, ruhiy va biologik jarayyonlarni qamrab olganligi
            uchun ovqatlanish va metabolizm fani deyarli barcha tibbiyot,
            ruhshunoslik va biologik fanlar bilan yaqindan bog‘liq. Metabolik
            jarayonlarni organizmda o‘rganish uchun fiziologik yondashuvlardan
            tashqari biokimyoviy, biofizikaviy, matematik, kimyoviy va fizikaviy
            usullarni talab etadi. Shuning uchun bu fan qator tabiiy va aniq
            fanlar bilan bog‘liqdir. Oziq mahsulotlar tabiatan kimyoviy moddalar
            bo‘lganligi, ularga termik, mexanik ishlov berganligi tufayli mazkur
            fan kimyo, fizika, matematika fanlari bilan bevosita va bilvosita
            bog‘liqdir. Ovqatlanish fiziologiyasini xozirgi zamon texnologik
            fanlar, ayniqsa, oziq-ovqat texnologiyasisiz tassavur qilib
            bo‘lmaydi. Tarixiy va individual rivojlanish bosqichida, tashqi
            muhit omillarining ta’sirida organizmda ovqatlanish va metabolizm
            jarayonlarining o‘zgarishi kuzatiladi. Shuning uchun mazkur fan
            evolyusion, solishtirma va yoshga oid fiziologiya hamda ekologiya
            bilan bog‘liq. Organizmning rivojlanish darajasiga qarab unda
            ovqatlanish va metabolizm jarayoni turlicha amalga oshadi. Eng sodda
            hayvonlarda oziq moddalarning o‘zlashtirilishi, asosan vakuola va
            sitoplazmada bo‘lsa, yuqori rivojlangan hayvonlarda oziq
            moddalarning hujayraviy parchalanish jarayoni lizosomalarda va
            vakuolalarda ro‘y beradi. Demak, hazm fiziologiyasi, ovqatlanish va
            metabolizm jarayonlarini borishini sitologik va gistologik
            elementlarsiz to‘la tushunib bo‘lmaydi. Odam va yuqori hayvonlar
            hazm tizimida 1000 dan ortiq obligat, fakultativ va tekinxo’r
            mikroorganizmlar va qator gelmintlarning mavjudligi ovqatlanish va
            metabolizm fiziologiyasi mikrobiologiya, tibbiy parazitologiya va
            gelmintologiya fanlari bilan bog‘liqligini ko‘rsatadi. Ovqatlanish
            va metabolizm fani qator fanlar bilan bog‘liq bo‘lishi bilan bir
            qatorda, fanning xususiy vazifalari ham mavjud bo‘lib, ular
            quyidagilardan iborat: - Turli sharoitdagi ovqatlanish va metabolizm
            jarayonlarining funktsional o‘zgarishlari o‘rtasidagi bog‘liqligini
            aniqlash; - Ovqatlanish va metabolizmni boshqa funktsional tizimlar
            va ruhiy holatga ta’sirini o‘rganish; - Ovqatlanish va metabolizmni
            o‘rganuvchi usullarni takomillashtirib, yangi tadqiqot usullarini
            yaratish; - Inson organizmidagi ovqatlanish va metabolizm
            jarayonlarini boshqarishni yo‘lga qo‘yish: - Amaliy dietologiya va
            gastroenterologiya uchun tavsiyalar ishlab chiqish; - Ovqatlanish va
            metabolizmning biokimyoviy, biofizikaviy, molekular va genetik
            asoslarini yoritish; - Ovqatlanish muammolari va ularning echimini
            aniqlash; - Ovqatlanish va metabolizmning tarixiy va individual
            evolyusiyasini o‘rganish. - Oziq ovqat mahsulotlariga bo‘lgan
            ehtiyojning ekologik vaziyatga (harorat, bosim, namlik va boshqalar)
            qarab o‘zgarishini hisobga olish va har xil muhit sharoitida
            istiqomat qiluvchilar uchun ovqatlanish tamoyillarini belgilash; -
            Iste’mol taomlarini tayyorlashda qo‘llaniladigan zamonaviy
            texnologik jarayonlarning oziq moddalar tarkibi hamda sifatiga
            ta’sirini aniqlash va tegishli tuzatishlar kiritishni fiziologik
            asoslash; - Keng xalq ommasi orasida sog‘lom ovqatlanishning asosiy
            tamoyillari haqida tushuntirish ishlari olib borish uchun ilmiy
            asoslangan ma’lumotnomalar tayyorlash va shu asosda yuqori
            ovqatlanish madaniyatiga erishish; - Taomlarni kishining yoshi,
            jinsi, jismoniy faolligi hamda mavjud ekologik vaziyatga ko‘ra
            iste’mol qilinish asoslarini ishlab chiqish; - Ovqat orqali
            surunkali yoki yuqumli kasalliklar kelib chiqishini va ularni
            korreksiyalash mexanizmlarini aniqlash; - Ovqatlanish fiziologiyasi
            bilan biologik, tibbiy, iqtisodiy va ekologik masalalarning uzviy
            bog‘liqligini ilmiy asoslash; - Har bir organizmda uning yoshi,
            jinsi, qiladigan mehnatiga qarab asosiy va qo‘shimcha oziq
            moddalarni o‘zlashtirib olish xususiyatlarini o‘rganish va shularga
            asosan ularda oziq moddalarga bo‘lgan talabni aniqlash.
            <p className="sarlavha">
              1.2. Ovqatlanish va metabolizm fanining rivojlanish tarixi
            </p>
            Ovqatlanish va metabolizm haqida dastlabki tushunchalarning
            shakllanishi qadim zamonlarga borib taqaladi. Bu borada kishilarni
            dastlab oziq-ovqat mahsulotlarning ta’mi, edirimliligi, manbalari
            kabi tomonlari qiziqtirib kelgan bo‘lsa, olov ixtiro qilinib, unda
            har xil eguliklarning qayta ishlanishi bilan iste’mol taomlarining
            mazasiga e’tibor kuchaygan. Termik ishlov berilgan oziqovqatlarning
            yaxshi hazm bo‘lishini anglagandan keyin, aholi o‘rtasida
            ovqatlanish, metabolizm va u bilan bog‘liq masalalarning keng
            ko‘lamda rivojlanishiga olib kelgan. To‘g‘ri ovqatlanish va harakat
            (ya’ni energiya sarfi) haqidagi dastlabki ma’lumotlar qadimgi Xitoy,
            Hindiston, Yunon, Arab, Rim olimlarining ishlarida mavjud. Masalan,
            Hindistondagi Ayuverda ta′limoti bo‘yicha turli kasalliklarning
            oldini olish va davolashda mijozga muvofiq ovqatlanish zarur
            deyilgan. Vavilon va Assiriyada yozilgan tibbiyotga oid ishlarda
            qorindagi og‘riq, qayd qilish, gepatit, meteorizm, ich ketish,
            ishtahaning o‘zgarishi va boshqa hazm a’zolarining kasalliklari
            haqida ma’lumotlar berilgan. Eramizdan avvalgi III asrda Erazistrat
            hayvonlarda hazm a’zolarining funktsiyalarini o‘rganib, me′da
            peristaltikasini kuzatgan. Uning fikricha, hazm jarayoni me′dada
            ovqatning mexanik maydalanishi tufayli ro‘y beradi. U murdalarning
            jigar va o‘t yo‘llarini tekshirib, kasalliklar kelib chiqishining
            asosiy sababi ovqatni me’yoridan ko‘p iste’mol qilish deb
            ko‘rsatgan. Erazistrat ovqat ko‘p iste’mol qilinganda, u hazm
            bo‘lmay, me′da va tomirlarni ifloslantiradi hamda qator
            kasalliklarni keltirib chiqaradi degan fikrni ilgari surgan.
            Eramizning II asrida Klavdiy Galen o‘z ishlarida me′da yarasini
            umumiy tasvirlab berib, uni parhez bilan davolash kerakligini aytib
            o‘tgan. Oziq-ovqat moddalarining inson organizmi uchun foydaliligi
            nuqtai nazaridan ularning bir-biridan farq qilishi, turli xil
            xastaliklarga chalinganida nima eb nima ichish lozimligi haqidagi
            dastlabki fikrlar Arastu (Aristotel), Buqrot (Gippokrat), Jolinus
            (Galen), Abu Ali ibn Sino (Avitsenna) va boshqalarning bizgacha
            yetib kelgan asarlarida uchraydi. Chunonchi Abu Ali ibn Sinoning
            jahonga mashhur “Tib qonunlari”da ovqatlanish fiziologiyasining
            ilmiy asoslari ilk bor ilmiy bayon etilgan deyish mumkin. Asarda
            ovqatlanish me’yori haqida ovqatni ishtaha bilan emoq va ishtahani
            qaytarmaslik lozim deb qayd qilinadi. Ibn Sinoning fikriga ko‘ra,
            ovqatlanish organizmning mijoziga, yoshiga, iqlimga va boshqa
            sharoitlarga bog‘liq. Me’yoriy ovqatlanish uning salomatlik
            falsafasida asosiy o‘rinni egallaydi. Buyuk mutaffakir “Yana shunisi
            ham borki, juda to‘yib va to‘lib ovqat yeyish va ichish hamma holda
            ham o‘ldiruvchidir. Ovqatlanganda ortiqcha yeyishga o‘rin
            qolmaydigan darajada to‘yib emaslik, balki ovqatga yana ishtaha
            bo‘lsa turib undan tortinmoq lozim” deb ta′kidlaydi. Asarda qachon
            ovqatlanish kerakligi borasida shunday deyiladi: “Gavdaga eng
            zararli narsa me′dada ovqat etilmasdan va hazm bo‘lmasdan turib yana
            ovqat kiritishdir”. Ovqat eb turganda suyuqliklar aralashtirmaslik
            haqida esa “Ovqat ustiga sharob ichish eng zararli narsalardandir.
            Chunki sharob tez hazm bo‘luvchi va tez o‘tuvchidir. U ovqatni ham
            hazm bo‘lmagan holda o‘tkazib yuboradi” deb aytilgan o‘gitlari
            hozirgi kunda ham ratsional ovqatlanishning asosiy tamoyillariga
            kiradi. Olimning asarlarida homilador va emizikli ayollarning
            ovqatlanishiga ham alohida e’tibor berilgan. Yuqorida nomlari tilga
            olingan o‘tmishdagi buyuk mutafakkirlarning ovqatlanish haqidagi
            dono fikrlarini vengriyalik olim L. Kun quyidagicha haqqoniy
            ta’riflagan. “Gippokrat, Galen va Avitsennalarning keyingi
            avlodlarga qoldirgan buyuk merosiga muvofiq sihat-salomatlikni
            saqlash va muxofaza qilishda eng afzal usul to‘g‘ri ovqatlanish va
            jismoniy mashqlar bilan shug‘ullanishdir”. Tirik organizmdagi
            jamiyki jarayonlarning ilohiy kuchlar tomonidan boshqarilishini
            hayotiy asos qilib olgan vitalistik dunyoqarash jonli tabiatning shu
            jumladan ovqatlanish borasidagi to‘g‘ri tushunchalarning
            shakllanishiga uzoq vaqt g‘ov bo‘lib keldi. Faqat XVII- XVIII
            asrlarda ixtiro qilingan ilmiy yangiliklar bunday vitalistik
            tushunchaga chek qo‘ydi. Buyuk rus olimi M.V. Lomonosov tomonidan
            moddalar va energiya saqlanish qonunining kashf qilinishi organizm
            iste′mol qilgan va unda o‘zgarib sarflangan moddalar orasida
            miqdoriy bog‘lanishni ilmiy asoslab berdi. M.V. Lomonosov
            Kamchatkaga qilingan ekspeditsiyasida shaxsan qatnashib safar
            qatnashchilari ovqatida albatta singaga qarshi tabiiy oziqning
            bo‘lishi muhimligi haqida taklif kiritgan. Organizmda oziq moddalar
            almashinuvining kimyoviy asoslarini R.Reomyur va L.
            Spallansianilarning olib borgan tadqiqotlari muhim ahamiyatga ega
            bo‘ldi. Xuddi shuningdek A. Lavuazening nafas olish borasidagi
            tadqiqotlari ham bu borada asqotdi. Ushbu olimlarning ishlariga
            tayanib inson organizmi tomonidan turli xil sharoitlarda sarflangan
            energiyani miqdor jihatdan hisoblay oladigan asbob ishlab chiqilib,
            organizmning ovqatga bo‘lgan talabini aniqlash uchun imkoniyat
            yaratildi. Hazm jarayoniga tegishli bo‘lgan klinik kuzatishlar va
            uslublar XVIII-XIX asrlarda tez rivojlana boshladi. Bu davr ichida
            qator muhim ishlar va kuzatuvlar amalga oshirildi. Ya. Baptista van
            Gelmont o‘zining “Ortus Medicinae (Tibbiyotning yuksalishi)”
            kitobida ovqat hazm qilish jarayoni kimyoviy jarayon bo‘lib,
            “ferment” deb nom olgan moddalar tomonidan amalga oshirilishini
            ko‘rsatib o‘tdi. M. Stoll o‘t pufagining rak (saraton) kasalligini
            tasvirlab berdi. L. Spallantsani oziq mahsulotlarining me’da shirasi
            bilan hazm bo‘lishini ko‘rsatdi. F. Botssini birinchi bo‘lib to‘g‘ri
            ichakni tekshirish usullarini tavsiya etdi. F. Uden me′da yaralarini
            davolashning samarali yo‘llarini aniqladi. U. Praut me′dada xlorid
            kislota borligini isbotladi. A. Kussmaul amaliy tibbiyotga
            gastroskopiya usulini kiritib, me′da ichidagi moddalarning holatini
            tekshirish uchun zond usulini tavsiya qildi. K.Shtyork ikkita metall
            nayli endoskopni yaratdi. K. Vilgelm fon Kupfer jigardagi maxsus
            hujayralarning xossalarini tasvirlab berdi. C. Meltser odam
            qizilo‘ngachini monometrik yo‘l bilan tekshirish usulini kiritdi.
            Yu. Libix birinchi bo‘lib oziq moddalarning kimyoviy tarkibini
            aniqlagan bo‘lsa, N. Lunin vitaminlar haqidagi ta’limotga asos
            solgan. XIX asrga kelib har xil mehnat turiga ko‘ra kishilarda oziq
            moddalarga nisbatan talab har xil bo‘lishi aniqlandi va bu sohada K.
            Foyt, M. Rubner, A.Danilevskiylar ishlarini alohida ta’kidlash
            mumkin. Aholi turli guruhlarida ovqatlanishning o‘ziga xosligini A.
            Dobroslavin, F. Erisman va G. Xlopinlar o‘rganishdi. Nobel
            mukofotining sovrindori immunitet nazariyasiga asos solgan buyuk
            fiziolog I.M. Mechnikov (1845-1916) hujayra ichidagi hazm
            jarayonlarini yoritdi. XIX asrning ikkinchi yarmida hazm a’zolarini
            o‘rganishda eksperimentaljarrohlik yo’li bilan yondashishlar keng
            tarqala boshladi. Bu usulda yondashishlarga avvalo yirik rus
            gastroenterologi V.A. Basov asos solgan. U birinchi bo‘lib me′daga
            fistula o‘rnatdi va me′da shirasini surunkali tajribalarda
            o‘rganishga muvaffaq bo‘ldi. Uning ishlarini L. Tiri, L. Vela
            (fistulalarni ichakning bitta yoki ikkala uchiga qo‘yish), R.
            Gaydengayn (alohida kichik me′dachani yaratish va unga fistula
            qo‘yish), I.P. Pavlov (barcha hazm a’zolariga fistula qo‘yish
            uslubini mukammallashtirish) va boshqalar davom ettirdi. XIX asrning
            ikkinchi yarmi va XX asrning boshida hazm jarayonini o‘rganishda
            yangi uslublarni ishlab chiqish bilan birga eksperimental (tajriba)
            usullar ham keng qo‘llanildi. G. Kroneker va D. Mak Klendonlar
            birinchi bo‘lib me′da kislotaliligini in vivo (organizmda) sharoitda
            aniqlashdi. U.K. Alvares elektrogastrografik usul bilan odam va
            hayvonlar me’da harakatining egri chiziqlarini yozib oldi. So‘rilish
            jarayonlarining kimyoviy va mexanik tomonlari ham o‘rganila
            boshlandi (E.S.London, B.P.Babkin, B.M.Beyliss, A.Ayvi va
            boshqalar). Rus fiziologiyasining otasi I.M. Sechenov (1829-1905) va
            shartli reflekslar nazariyasining asoschisi I.P.Pavlov (1849-1936)
            tadqiqotlari bilan hazm va ovqatlanish fiziologiyasi haqidagi
            ta’limot bilvosita va bevosita rivojlandi, uning o‘sha davrlargacha
            noma’lum bo‘lgan mexanizmlarini tushunish imkoniyati tug‘ildi. I.P.
            Pavlov bir qator jarrohlik uslublarini qayta ishlab va yaratib, hazm
            fiziologiyasini qaytadan kashf etgandek bo‘ldi. Uning ilmiy
            maktabida hayvonlarning turli a’zolariga fistula o‘rnatilib, hazm
            funktsiyasini o‘rganishdagi surunkali eksperimentlar
            mukammallashtirildi. Qator hazm a’zolari: so‘lak bezlari, me’da osti
            bezi, me’da va o‘t pufagiga fistulalar o‘rnatilib, hazm sekretor
            suyuqliklarini ajratib olish imkoniyatlari yaratildi. I.P. Pavlov
            tomonidan yaratilgan “kichik me’dacha“ usuli yordamida tabiiy
            shiraga o‘xshash meda shirasi olishga erishildi. Olim ezofagotomiya
            (yolg‘on ovqatlantirish) modeli asosida hazm jarayoni boshqaruvida
            shartli va shartsiz reflekslarning ahamiyatini ko‘rsatib berdi.
            Go‘sht, non va sut mahsulotlariga javoban so‘lak bezlari, me’da va
            me’da osti bezida shira ajralishi har xil ekanligini, sekretor
            jarayonda adaptiv mexanizmlar borligini aniqladi. Hazm jarayonlarini
            boshqarishda shartli va shartsiz reflekslar faoliyatining
            ahamiyatini ko‘rsatdi. U organizmdagi jarayonlarda asab tizimi
            yetiakchi rol o‘ynashini ta’kidlab, nervizm g‘oyasini ilgari surdi.
            1887 yilda I.P.Pavlov “nervizm” bo‘yicha Ovropa olimlarining (K.
            Lyudvig, K. Bernard, J.Purkine, R. Gaydengayn) mavjud fikrlarini
            hamda o‘zining kuzatuvlarini umumlashtirib «Asosiy hazm bezlarining
            ishi haqida ma’ruzalar» nomli kitobini chop etdi. 1904 yilda u hazm
            jarayonida oliy asab faoliyatining rolini isbotlagani uchun xalqaro
            Nobel mukofotiga sazovor bo‘ldi. I.P. Pavlov ishlarini E.S. London,
            I.P. Razenkov, G.V. Foltbort, B.P. Babkin kabi olimlar davom
            ettirdi. I.P. Pavlov maktabidan chiqqan qator olimlarning olib
            borgan tadqiqotlari ovqatlanish fiziologiyasining zamonaviy fan
            darajasiga ko‘tarilishida hal qiluvchi ahamiyat kasb etdi. Bularga
            A.V.Palladin, C.I. Vinokurov, R.V. Chagovets, V.V. Efremov, V.B.
            Spirichev, I.P. Razenkov, G.K. Shilgin, A.M. Ugolev, A.A.
            Pokrovskiy, M.N.Volgaryov, V.A. Shaternikov va boshqalarning
            ishlarini misol qilib keltirish mumkin. XX asrda hazm va ovqatlanish
            jarayoniga ta’sir etuvchi omillarning ahamiyatini o‘rganish ustunlik
            qildi. Shu sohadagi kashfiyotlarni E. Starling (sekretinning
            ochilishi), J. Edkins (gastrinning ochilishi va funktsional
            ahamiyati), A. Latarjet va L. Dragstedlar (atsetilxolinning hazm
            tizimiga ta’siri), A. Piarze (1968-1972) boshqaruvchi peptidlarning
            sistematikasi va funktsional ahamiyatini o‘rganishga katta hissa
            qo‘shdi. U intestinal va boshqa to‘qima gormonlarni umumiy yagona
            peptidlarni ishlab chiqaruvchi tizim - APUD (Amine Precursor Uptake
            and Decarboxylation) ga kiritdi. A. Piarze va bir qator olimlarning
            olib borgan tadqiqotlari ovqatlanish fiziologiyasining zamonaviy fan
            darajasiga ko‘tarilishida hal qiluvchi rol o‘ynadi. Akademik A.V.
            Palladin va uning shogirdlari - C.I. Vinokurov, A.M.Utevskiy,
            R.V.Chayuvets, shuningdek vitaminologlar - L.A. Cherkes, B.A.Lavrov
            ovqatlanish fanining rivojlanishiga katta hissa qo‘shdilar,
            fiziologlar - I.P. Razenkov, G.K. Shligin, gigiyenistlar - K.C.
            Petrovskiy, V.D. Vanxanen, nutritsiologlardan - T.Sh. Sharmanov va
            A.A. Pokrovskiy dietologiyaning yanada rivojiga o’z hissalarini
            qo‘shdilar. XX asrning 60-70-yillarida A.M. Ugolev tomonidan
            membranada hazm qilish mexanizmlari aniqlandi. Membranada hazm
            jarayoni ochilgandan keyin oziq moddalarni o‘zlashtirish ikki
            bosqichli jarayondan uch bosqichli jarayonga - bo‘shliq hazmi, devor
            yonidagi (shilliq qavat va membranadagi) hazm va so‘rilishga
            aylandi. “Membrana hazmi” ta’limotidan tashqari, A.M. Ugolev
            organizmning enterin tizimi, biologik faol moddalarning hazm
            jarayoniga ta’siri va bu jarayonga taalluqli bo‘lmagan
            funktsiyalari, shuningdek, gastrointestinal neyropeptidlar haqidagi
            ko‘plab yangi ma’lumotlarni bayon qildi. Uning monografiyasi orasida
            1985 yilda yozilgan “Hazm va funktsiyalarning evolyusiyasi haqida
            tasavvurlar hozirgi zamon funktsionalizm asoslari” asari biolog va
            shifokorlarning ish dasturiga aylandi. Bu asarda tasvirlangan
            trofologiya, funktsional bloklar, adekvat ovqatlanish haqidagi
            nazariyalarning har biri alohidaalohida fan sohalariga asos soldi.
            So‘nggi yillarda enteral muhitning (Yu.M. Galperin, P.I. Lazarev)
            hazm a’zolari gomeostazidagi ishtiroki (A.S. Loginov), ingichka
            ichak devori yonidagi hazm jarayonining mikroskopiyasi va
            funktsional ahamiyati (R.A. Brodskiy, I.A.Morozov) bo‘yicha ishlar
            rivojlana boshladi. I.A. Morozov ichakning lyuminal sathi shilliq
            modda bilan qoplanganligini, hamda nospetsifik to‘siq rolini
            bajarishini ko‘rsatib berdi. Organizmga gidrolizlanmagan
            oqsillarning kirishi (V.K. Mazo, V.A. Shaternikov, M.I. Jardner) va
            ularning transport mexanizmlari qayta 13 ko‘rib chiqilmoqda. Hozirgi
            vaqtda ichakning endoekologiyasini o‘rganish (T.A. Viting, A.S.
            Ushakov). gastroenterologiyaning alohida bir tarmog‘iga aylandi. B.
            Marshall va R. Uorren Helicobacter pylori me’dada patologik
            o‘zgarishlarning sababchisi ekanligini aniqlab, 2005 yilda xalqaro
            Nobel mukofotiga sazovor bo‘lishdi. Bugungi kunda hazm sohasidagi
            izlanishlar genetika va molekulyar biologiya sohasi bilan bog‘liq
            holda amalga oshmoqda. Bu sohadagi ishlar bilan C. Xenning (gormonal
            ta’sirlarning molekular mexanizmlari) va R. Buddington (hazm
            qilishning sekretor va transport jarayoniga endoekologiyaning
            ta’siri) shug‘ullanishmoqdalar. Issiq iqlim sharoitida ovqatlanish,
            hazm va metabolik jarayonlarining o‘ziga xosligi bo‘yicha
            o‘zbekistonlik olimlar A.Yu.Yunusov, K.R.Rahimov, E.S.Makmudov
            qozog‘istonlik olimlarlardan T.Sh.Sharmanov va boshqalarning amaliy
            tadqiqotlari o‘lkamizda ovqatlanish fiziologiyasining rivojlanishiga
            munosib hissa qo‘shdi. O‘zbekistonda ovqatlanish va hazm
            fiziologiyasining asoschilari K.R.Rahimov (yoshga oid hazm va
            ovqatlanish jarayonlari, ovqatlanish va hazm jarayonlarining iqlim
            sharoitiga adaptatsiyasi, hazm jarayonlarining ontogenetik va
            filogenetik evolyusiyasi, postnatal ontogenezda ovqatlanishning va
            hazm-transport konveyri shakllanishidagi xususiyatlari, hazm qilish
            jarayonlari mexanizmlarining issiq iqlim sharoitlarida, turli
            fiziologik sharoitlarda o‘zgarishlari), K.A. Zufarov (hazm
            a’zolarining individual rivojlanishidagi morfotsitologik asoslari,
            hujayra ichidagi hazm) va G.F. Korotko (issiq iqlim sharoitida hazm
            a’zolarining sekretsiyasi, hazm bezlarining ekzo- va
            endosekretsiyasi, ferment sekretsiyasining asab va gumoral
            boshqarilishi, fermentlar gomeostazi, enzimatik va gormonal
            salivadiagnostikalar) hisoblanishadi. Yuqoridagi uchala olimlar
            maktabida laktotrof ovqatlanish vaqtidagi o‘sayotgan organizm uchun
            ona suti eng adekvat oziq modda ekanligini qator eksperimental
            tekshiruvlar asosida ko‘rsatishdi. Prof. G.FKorotkoning ishlarini
            Andijon Davlat tibbiyot instituda prof. Sh.Q. Qodirov va uning
            shogirdlari davom ettirmoqda. Laktatsiya davrida “ona-bola” tizimida
            hazm jarayonining turli ekologik sharoitda gidrolitik transport
            tizimining holati b.f.d. B.A. Sodiqov tomonidan o‘rganildi.
            Respublikamizda qishloq va shahar sharoitida bolalar va
            sportchilarning ovqatlanishi va jismoniy yuklamalarning
            ovqatlanishga ta’siri bo‘yicha turli aholi guruhlarining (homilador
            va sut emizadigan ayollar, aqliy va jismoniy mehnat vakillari va
            boshqalar) amaldagi ovqatlanish va uni ratsionlashtirish ishlari
            Qarshi davlat universitetida b.f.d., prof. Sh.Q. Qurbanov
            rahbarligida o‘rganilmoqda. Hazm va ovqatlanish fiziologiyasi
            bo‘yicha davlat tilida birinchi darsliklar va o‘quv qo‘llanmalar
            Sh.Q. Qurbonov va hammualliflar tomonidan yozildi. Bugungi kunda
            O‘zbekiston milliy universiteti ekologik fiziologiya
            laboratoriyasida ovqatlanish va hazm jarayonlarining ontogenetik va
            filogenetik evolyusiyasi, adaptatsion kompensator mexanizmlari,
            turli taksonomik guruhlarga mansub bo‘lgan hayvonlarning hazm va
            ovqatlanish hususiyati b.f.d. prof. L.S. Kuchkarova boshchiligida
            o‘rganilmoqda. Samarkand davlat universitetida qishloq xo‘jalik 14
            hayvonlarida em-hashakning samaradorligini oshirish bo‘icha
            tadqiqotlar Z.T.Rajamurodov rahbarligida o‘tkazilmoqda. Prof A.T.
            Komilova va uning shogirdlari bolalar enteral yetishmovchiligida
            hazm jarayonlari va ularni korreksiya qilish ishlarini O‘zR
            Pediatriya Institutining gastroenterologiya bo‘limida olib bormoqda,
            prof. I.M. Axmedova rahbarligida kichik yoshdagi bolalarning
            meyyorda va hazm a’zolarining patologiyasida ovqatlanish
            xususiyatlari o‘rganilmoqda. Sh.Q. Qodirov ilmiy maktabida (Andijon
            tibbiyot instituti) fermentlar gomeostazining hazm va boshqa a’zolar
            tizimlari o‘rtasidagi o‘zaro ta’siri bo‘yicha ilmiy tadqiqot ishlari
            olib borilmoqda. Respublikamizda sohaga oid qator ilmiy asarlar,
            oliy o‘quv yurtlari uchun darsliklar, o’quv qo’llanmalari chop
            etilgan. Olimlarimiz tibbiyot institutlari, universitetlar,
            pedagogika, jismoniy tarbiya va boshqa oliy o‘quv yurtlarida sohaga
            tegishli ma’ruza va amaliy mashg‘ulotlarni olib borish bilan birga
            ilmiy izlanishlar bilan shug‘ullanishmoqda, hamda sog’lom turmush
            tarzining asoslaridan biri aholining sog’lom ovqatlanishini nazariy
            asoslashda o’zlarining munosib hissalarini qo’shmoqda.
            <p className="sarlavha">
              1.3. Ovqatlanish nazariyalari va ularning rivojlanish tarixi
            </p>
            Ovqatlanish hayotning zaruriy va birinchi sharti sifatida barcha
            tirik mavjudotlarning evolyutsiyasi jarayonidagi yetiakchi
            omillardan biri hisoblanadi. Shunung uchun barcha universal
            tabiiy-ilmiy tushunchalar ovqatlanishni muhim va zarur qism sifatida
            o'z ichiga olganligi ajablanarli emas. Ovqatlanish har bir insonning
            taqdirini, salomatligini, hayot sifatini va umrining davomiyligini
            belgilovchi omilidir. Jahon sog'liqni saqlash tashkiloti
            ekspertlarining fikriga ko'ra, sihatsalomatlik holati 50% -
            individual turmush tarzi, 20% - irsiyat, 20% - atrof-muhit
            sharoitlari va atigi 10% - shifokorlar ishi bilan belgilanadi.
            Insonning jismoniy va ruhiy holati uchun nima iste’mol qilganligi va
            qanday ovqatlanganligi juda muhimdir. Yunon tilidan "parhez" so’zi
            o’zbekchaga tarjima qilinganida "sog'lom turmush tarzi" degan
            ma'noni anglatadi. Fan tarixida to’g’ri ovqatlanishning juda ham
            ko’p nazariyalari mavjud: qadimiy ovqatlanish nazariyaslaridan
            tashqari bugungi kunda 2 xil ovqatlanish nazariyasi dominantlik
            qilmoqda: 1) balanslangan ovqatlanish nazariyasi, 2) adekvat
            ovqatlanish nazariyasi. Bulardan tashqari bir qancha boshqa
            alternativ nazariyalar ham mavjud. Ovqatlanishning qadimiy
            nazariyasi Aristotel va Galen nomlari bilan bog'liq bo’lib bu
            nazariya ularning tiriklik haqidagi g'oyalarining bir qismidir.
            Ushbu nazariyaga ko'ra, tananing barcha tuzilmalari ovqatlanishi
            noma'lum tabiatning murakkab jarayoni natijasida ovqat hazm qilish
            tizimida doimiy ravishda hosil bo'ladigan qon tufayli amalga
            oshiraladi. Jigarda bu qon tozalanadi, shundan so'ng u barcha a’zo
            va to'qimalarni oziqlantirish uchun ishlatiladi. Ushbu nazariya
            asosida o’tmishda ko'plab davolash parhezlari yaratilgan. O’tgan
            asrlarda oziq-ovqatning asosiy tarkibiy qismlari; oqsillar, yog'lar,
            uglevodlar va nuklein kislotalarning tuzilishi aniqlangandan so'ng,
            paydo bo’lgan nazariyalarda ovqatlanish – tana tuzilishini tiklab
            turuvchi va sog'liqni saqlovchi muhim omil degan fikr rivojlanib
            kelmoqda. XYIII-XIX asrlarda, ayniqsa, balanslangan
            (muvozanatlashtirilgan) ovqatlanish nazariyasi keng tarqaldi. Mazkur
            nazariya yaqin kunlargacha dietetologiyada ustunlik qilgan
            nazariyalardan biri edi. U uchta asosiy tamoyilga asoslangan: 1.
            To'la qiymatli (ideal) ovqatlanishda organizmdan chiqarilayotgan
            moddalarning oqimi organizmga kirayotgan moddalar oqimini to'la
            qo’plash kerak. 2. Organizmga oziq moddalarning tushishi oziq-ovqat
            mahsulotlarning hazm bo’lishi va organizm tomonidan hosil bo'lgan
            organik va noorganik moddalarning ishlatilishiga mos kelishi kerak.
            3. Organizmning energiya xarajatlari organizmga kirayotgan energiya
            oqimi bilan mutanosib bo'lishi kerak. Umumlashtirib aytish mumkinki
            bu nazariya bo’yicha organizm faoliyati va o’sish uchun sarflangan
            substratlar iste’mol qilinadigan ozuqa bilan kirish zarur. Mazkur
            nazariya bo’yicha kundalik oziq moddalarini iste'mol qilishning
            umumiy kaloriya (quvvat) qiymati o’rtachasi taxminan 3000 kkal
            bo'lishi kerak. Balanslangan ovqatlanish nazariyasi bo’yicha beshta
            asosiy nutrientlar: energiya manbai - uglevodlar, yog'lar va
            oqsillar; muhim aminokislotalar, vitaminlar; muhim yog 'kislotalari;
            noorganik komponentlar ozuqa tarkibida bo’lishi shart. Balanslangan
            ovqatlanish nazariyasi R. Reomyur, L. Spallansani, A. Lavuaze, G.
            Gelmgols tadqiqotlari asosida shakllangan. Sobiq ittifoq olimlaridan
            A.A. Pokrovskiy balanslangan ovqatlanish nazariyasini ishlab
            chiqishga alohida hissa qo'shdi. Uning tashabbusi bilan asosiy ozuqa
            mahsulotlarining miqdoriy tarkibi o’rganildi va unga asoslanib,
            aholi turli guruhlarining energetik sarfiga qarab ratsion tuzish
            oxirgi 60 yil davomida chuqur ishlab chiqildi va keng qo’llandi.
            Mazkur yondashuvda ovqatlanishga ozuqadagi hazm bo'ladigan va
            o’zlashtiriladigan tarkibiy qismlar qimmatlidir, qolganlari esa
            keraksiz moddalar deb qaralgan. Balanslangan ovqatlanish
            nazariyasiga asoslanib, jismoniy harakatlar sarfi, iqlim va boshqa
            omillarni hisobga olingan holda barcha aholi guruhlari uchun turli
            xil parhezlar ishlab chiqilgan, yangi oziq-ovqat texnologiyalari
            yaratilgan, oziq moddalar tarkibida ilgari noma'lum bo’lgan
            aminokislotalar, vitaminlar va mikroelementlar topilgan.
            Balanslangan ovqatlanishning klassik nazariyasi bo’yicha parenteral
            (qon orqali) ovqatlanish to'g'risidagi qoidalarni o'z ichiga olgan
            muhim nazariy va amaliy takliflarni ishlab chiqishni
            rag'batlantirdi. Balanslangan ovqatlanish nazariyasini
            rivojlantirishga A.A. Pokrovskiy va uning shogirdlari katta hissa
            qo'shgan. Biroq, balanslangan yondashuv nazariyasi asosida oziq
            tolalari bo'lmagan tozalangan oziq-ovqatlarni iste’mol qilish
            g'oyasi katta zarar keltirdi. Aholi o’rtasida tsivilizatsiya
            kasalliklari deb atalgan - ateroskleroz, qandli diabet,
            osteoxondroz, osteoartroz va boshqa kasalliklar keng tarqala
            boshladi. Yuqori 16 darajada tozalangan mahsulotlarni yaratilishi
            oshqozon-ichak yo’lining bir qator kasalliklarini paydo bo'lish
            muammosini keltirib chiqardi. Ovaqtlanishda qabul qilish tartibi ham
            muhim ahamiyatga ega. Kuniga bir yoki ikki marta ovqatlanish ko'p
            miqdordagi taomlarni o'zlashtirish qiyinligi tufayli uning qisman
            o’zlashtirish, metabolik kasalliklarning keng rivojlanishiga olib
            keldi. Hazm va ovqatlanish jarayonida oziq tolalari va
            mikrofloraning ahamiyati ko’rsatilganidan keyin,
            muvozanatlashtirilgan ovqatlanish nazariyasi qayta ko'rib chiqildi.
            Adekvat ovqatlanish nazariyasi. Adekvat ovqatlanish nazariyasi
            ballast moddalar va ichak mikroflorasining ovqat hazm qilish
            jarayonidagi rolini hisobga oladi. Simbiont microflora organizmning
            tabiiy fiziologik komponenti sifatida o’ziga xos immun, regulyator
            va boshqa funktsiyalarni o’taydi. Uning mohiyati quyidagi to'rt
            tamoyilda ifodalangan: 1. Oziq-ovqat uni iste’mol qilgan organizm
            tomonidan ham, bu organizmda yashaydigan bakteriyalar tomonidan ham
            o’zlashtiriladi.<br></br>
            2. Oziqlantiruvchi moddalar oqimi ularning nafaqat oziq-ovqatga
            kirishi, balki qo'shimcha oziq moddalarni sintez qiladigan
            bakteriyalar faoliyati tufayli ham shakllanadi.<br></br>
            3. Ovqatlanish faqat oziq moddalarining oqimi bilan emas, balki bir
            nechta immun, regulyator va boshqa moddalarning oqimi bilan
            belgilanadi.<br></br>
            4. Ballast moddalar oziq-ovqatning fiziologik muhim tarkibiy qismi
            hisoblanadi.<br></br>
            Umumlashtirib aytish mumkinki, balanslangan ovqatlanish adekvat
            ovqatlanishning tarkibiy elementi bo’lmog’i lozim. Adekvat
            ovqatlanish nazariyasini rivojlantirishga akademik A.M. Ugolev katta
            hissa qo'shdi. U oziq-ovqatning tarkibida dag‘al o'simlik
            tolalarining kamayishi surunkali ich qotishi, ichak mikroflorasining
            o'zgarishiga olib kelishini isbotladi. Ba'zi olimlarning fikriga
            ko'ra, yo'g'on ichak saratoni, o't toshlari kasalligi, metabolik
            kasalliklar ko'pincha ratsionda ballast moddalarining yo'qligi, yoki
            keskin kamayishi tufayli kelib chiqadi. Ovqatlanishning ushbu
            nazariyasida inson organizmi mikroflorasining xususiyatlariga
            alohida ahamiyat beriladi. Ratsional ovqatlanish nazariyasi nuqtai
            nazaridan bu odam uchun foydali bo'lgan, uning jismoniy va ruhiy
            holati va uni qayta ishlash xususiyatlariga mos keladigan oziq-ovqat
            hisoblanadi. Shunday qilib, ovqatlanish nafaqat miqdoriy
            balanslangan, balki ming yillar davomida ovqatni assimilyatsiya
            qilish jarayonida shakllangan organizmning imkoniyatlariga mos
            kelishi kerak. Bugungi kunda bu nazariya yetarlicha biologik va
            evolyusion asosga ega emas deb topilmoqda. Bunda hazm yo’li
            texnologik mexanizm sifatida qabul qilingan deb qaralmoqda. Bu
            nazariya bo’yicha evropoid xalqlarga nisbatan tuzilgan ratsion
            shimoliy xalqlarga to’g’ri kelmasligi mumkin. Chunki shimoliy
            xalqlarning ratsioni ko’pincha yog’, gusht va baliqdan iborat.
            Hindistonliklarning ratsionida oqsil mahsulotlari qadimdan 5% ni
            tashkil etgan va bu nazariya bo’yicha ovqatlanish ularda hazm va
            boshqa tizimlarning disfunktsiyasini keltirib chiqargan. Ratsional
            ovqatlanish postulatlari adekvat ovqatlanish nazariyasining
            qonunlarida ham aks etgan. Optimal ovqatlanish nazariyasi. So'nggi
            paytlarda ovqatlanishning mohiyati haqidagi g'oyalar V.A. Tutellian
            tomonidan ishlab chiqilgan optimal ovqatlanish nazariyasida mikro
            (juda ham oz) miqdorda uchraydigan oziq-ovqat tarkibiy qismlarining
            roli to'g'risidagi ma'lumotlar bilan to'ldirildi. Dunyoning turli
            mintaqalarida ovqatlanishni har tomonlama baholash va uning
            evolyutsiyasi jarayonida inson ovqatlanishidagi tendensiyalarni
            baholash natijasida zamonaviy sivilizatsiyalashgan jamiyatda inson
            iste'mol qiladigan oziqovqat miqdori keskin energiya sarfini
            kamayishi 2-3 baravarga yetkazildi. Buning oqibati mahsulotlarning
            mikromiqdorda uchraydigan biologik faol moddalar va
            mikroelementlarning iste’moli ham kamayadi. Optimal ovqatlanish
            nazariyasida mikroelementlarning etishmasligini hozirgi vaqtda oziq
            tarkibi energiya miqdori va iste'mol hajmi kamayishi orqali kelib
            chiqishi bilan izohlamoqda. Oziq moddalar hajmining kamayishi
            mikronutrientlarni iste’mol qilishning kamayishiga ham olib keladi.
            Shuning uchun mazkur muammoni oziq ratsionini turli xil farmakologik
            qo’shimchalar bilan oqilona to’ldirish bo'yicha tavsiyalar ishlab
            chiqish orqali hal qilinishi mumkin. Yuqorida aytib o'tilgan fikrlar
            asosida, biologik faol oziq-ovqat qo'shimchalarini ishlab chiqish va
            joriy etish zamonaviy dietologiyaning eng jadal rivojlanayotgan
            sohalariga aylandi. Optimal ovqatlanish, avvalambor, ratsional,
            ovqatlanish, balanslangan ovqatlanish nazariyalariga asoslangan.
            Parhezlarni yetarli darajada individual optimallashtirish maqsadida
            metabolik yo'naltirilgan aralashmalar, ixtisoslashtirilgan
            balanslangan aralashmalar, ozuqaviy farmatsevtika vositalaridan
            foydalanish optimal ovqatlanish nazariyasi tomonidan qo‘llab
            quvvatlanadi. Funktsional ovqatlanish nazariyasi va funktsional
            mahsulotlar. Funktsional (sog'lom) ovqatlanish nazariyasi XX asrning
            80-yillari boshlarida Yaponiyada paydo bo'lgan. Yaponiyalik
            tadqiqotchilarning fikriga ko'ra, funktsional oziq-ovqat
            mahsulotlarining aniqlovchi omillari quyidagilardir: ozuqaviy
            qiymati, ta'mi va fiziologik ta'siri, ya'ni ushbu mahsulotlar
            tarkibida inson salomatligiga foyda keltiradigan, uzoq umr
            ko'rishiga hissa qo'shadigan va turli kasalliklar xavfini
            kamaytiradigan tarkibiy qismlar bo'lishi kerak. Bu nazariyaga
            muvofiq, hozirgi vaqtda quyidagi funktsional ingredientlardan
            foydalaniladi: parhez tolalari; vitaminlar; mineral moddalar;
            to'yinmagan yog'lar; antioksidantlar (beta-karotin, askorbin
            kislotasi, alfa-tokoferol) foydali bakteriyalar uchun substrat
            sifatida oligosaxaridlar, bifidobakteriyalar. Alternativ ovqatlanish
            nazariyalari. So'nggi o'n yilliklarda ovqatlanishning ko'plab yangi
            nazariyalari paydo bo'ldi, ular ko’pchilikning an'anaviy
            tushunchalariga to'g'ri kelmasa ham, o’ziga xoc tarixiy ildizlarga
            ega. Bu yonalishlarga qiziqish ortib bormoqda. Albatta, bu
            nazariyalarning har birida oqilona fikr mavjud. Ulardan ba'zilari
            parhez tavsiyalarida qisman qo'llanilmoqda. Alternativ ovqatlanish
            nazariyasiga tabiiy ovqatlanish, xom ovqatlanish, vegetarianlik,
            alohida-alohida ovqatlanish va boshqalar kiradi. Bu nazariyalar
            ilmiy va eksperimental tasdig'ini yetarlicha topa olmaganligi uchun
            hozircha keng tarqalmagan.
          </p>
        </Container>
      </div>
    </>
  );
}

export default Mavzular;
