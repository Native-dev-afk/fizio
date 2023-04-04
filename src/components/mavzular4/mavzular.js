import "./mavzular.scss";
import React, { useRef, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import rasm20 from "../img/rasm20.PNG";
import rasm21 from "../img/rasm21.PNG";
import rasm22 from "../img/rasm22.PNG";
import rasm23 from "../img/rasm23.PNG";
import rasm24 from "../img/rasm24.PNG";
import rasm25 from "../img/rasm25.PNG";

function Mavzular() {
  return (
    <>
      <div className="more-swip">
        <Container>
          <div className="mavzu">4-bob. HAZM TIZIMINING GISTOLOGIYASI</div>
          <p className="text">
            <p className="sarlavha">Hazm devori kanalining tuzilishi</p>
            Hazm kanali devorining tuzilishi har bir qismda o‘ziga xos
            bo‘lsa-da, uning tarkibida umumiylik ham mavjud. Birinchidan, hazm
            kanali devorida to‘rtta qavat farqlanadi: shilliq, shilliq osti,
            muskul va seroz qavatlar (19-rasm). Funktsiyasiga muvofiq ravishda
            har bir qavat o‘ziga xos morfologik xususiyatlarga ega. Masalan,
            shilliq qavatdagi vorsinkalar va mikrovorsinkalar, ayniqsa, ingichka
            ichakda yaxshi rivojlangan bo‘ladi. Me’da muskul qavatida, boshqa
            a’zolardan farq qilib, bo‘ylama va aylanma muskul qavatlari bilan
            birga qiyshiq muskul qavati ham mavjud.
            <p className="rasm">
              <img src={rasm20} />
              <p>
                Qizilo‘ngach; B. Me’da; V. Ingichka ichak; G. Yo‘g‘on ichak; I.
                SHilliq qavati; II. Shilliq osti qavati; III. Muskul qavati; IV.
                Tashqi seroz yoki adventitsial qavat. 1- chuqurchalar;
                2-kriptalar; 3-vorsinkalar
              </p>
            </p>
            Shilliq qavat doimo shilimshiq moddalar bilan namlanib turadi. Unda
            quyidagi tuzilmalar mavjud: burmalar (me’da va ichaklarda),
            chuqurchalar - me’dada; kriptalar - ingichka va yo‘g‘on ichaklarda;
            vorsinkalar - ingichka ichakda. SHilliq qavatda ko‘pincha uchta
            hosila ajratiladi: epiteliy (bazal membranasida), shilliq qavatning
            xususiy pardasi va shilliq qavatning muskul plastinkasi. Hazm kanali
            bo‘yicha epiteliy qavati bir xil rivojlanmagan. Kanalning
            boshlang‘ich va oxirgi bo‘limlarida epiteliy ko‘p qavatli, yassi
            shaklda, o‘rta bo‘limda esa epiteliy bir qavatli silindrik shaklda
            bo‘ladi. Epitelial hujayralarning bir qismi sekretor faollikka ega,
            me’dada esa deyarli barcha epiteliy hujayralar ekzosekretor
            xususiyatiga ega. Shilliq qavatdagi sekretor hujayralar ikki xil:
            sekretni bevosita kanalning bo‘shlig‘iga ishlab chiqaradigan
            (masalan - ichakdagi bokalsimon hujayralar) - ekzokrinotsit
            hujayralar va biologik faol moddalarni qonga yoki to‘qima
            suyuqligiga ajratadigan - endokrinotsit hujayralar. Ingichka
            ichakdagi epiteliy hujayralarning ko‘p qismi uning sathini
            oshiruvchi mikrovorsinkalarga ega. Xususiy va muskul
            plastinkalarning tarkibiga g‘ovak tolali biriktiruvchi to‘qima;
            oddiy naysimon bezlar (qizilo‘ngachning ba’zi bo‘limlarida va
            me’dada) va boshqa hosilalar: qon va limfa chigallari, nerv
            elementlari, limfoid to‘qimaning to‘plamlari kiradi. Muskul qavati
            1-3 qator silliq miotsitlardan iborat. Shilliq osti qavatining
            tarkibi shilliq qavatning xususiy plastinkasi singari stroma (g‘ovak
            tolali biriktiruvchi to‘qima), bezlar (qizilo‘ngach va 12 barmoq
            ichaklarda), qon va limfa chigallari, nerv elementlari, limfoid
            to‘qimaning to‘plamlaridan iborat. Shilliq osti qavati shilliq
            qavatdan ko‘ra qalinroq. Shuning uchun ovqat luqmasi o‘tayotganda
            shilliq qavat burmalari hosil bo‘lib, ular ancha harakatchan
            bo‘ladi. Og‘iz bo‘shlig‘i va milklarda shilliq osti qavati mavjud
            emas. Shu sababdan bu yerda shilliq qavati uni oldida yotuvchi
            qavatlar bilan harakatsiz birikkan. Muskul qavatida ikki qismga
            ajratiladi: ichki sirkulyar va tashqi bo‘ylama, bundan istisno
            tariqasida faqat me’dada uchinchi qavat - oraliq qiyshiq muskullar
            qavati mavjud. Muskul qavati ko‘ndalang targ‘il (og‘izdan
            qizilo‘ngachning yuqori bo‘limlarigacha hamda to‘g‘ri ichakda) va
            silliq muskuldan (hazm yo‘lining qolgan bo‘limlarida) tashkil
            topgan. Muskul qavatda biriktiruvchi to‘qimali elementlar, nerv
            chigallari va qon tomirlar mavjud. Tashqi (seroz) qavatning tarkibi
            uning joylashuviga bog‘liq. Xalqum, qizilo‘ngach va to‘g‘ri
            ichakning oxirgi qismi tashqi qavati faqat biriktiruvchi to‘qimadan
            iborat bo‘lgan qavatdir. Hazm yo‘lining qolgan qismida tashqi qavat
            qorin bo‘shlig‘ining vitseral qatlamidan paydo bo‘lgan qavatdir.
            Unda ikki qavat nerv tolalarini va qon tomirlarini tutuvchi
            biriktiruvchi to‘qimali asos va mezoteliy farqlanadi.{" "}
            <p className="sarlavha">So‘lak bezlari</p>So‘lak bezlari tuzilish
            jihatdan murakkab alveolalar – naysimon bezlar guruhiga kiradi.
            Alveolalar – bu sekret moddalar ishlab chiqaruvchi 13 oxirgi
            bo‘limlar. Naychalar chiqaruv naylar bo‘lib, bular orqali ishlab
            chiqarilgan mahsulot – sekret harakatlanib, og‘iz bo‘shlig‘iga
            chiqariladi. Uchta bezning sekreti qo‘shilib so‘lakni hosil qiladi.
            Bezlar ishlab chiqargan sekret tarkibiga ko‘ra seroz, shilliq
            moddalar ishlab chiqaruvchi bezlar va aralash bezlarga bo‘linadi
            So‘lak uch juft yirik so‘lak bezlari. quloq oldi, tilosti va
            jahosti, shuningdek, shilliq qavat bo'ylab joylashgan ko’pgina
            kichik yordamchi bezlar tomonidan ishlab chiqariladi Yirik bezlar
            tashqi tomondan zich biriktiruvchi toʻqima kapsulasi bilan qoplangan
            boʻlib, undan qatlamlar choʻzilgan boʻlib, ular bezlarni
            boʻlakchalar (lobulalar)ga boʻlib, ularda lobulyar kanallar va qon
            tomirlari boʻladi. Quloq oldi bezlari hujayralaridan faqat oqsilli
            shira, jag' osti bezidan shilliq moddali shira, til osti bezidan esa
            oqsil, aralash va shilliq shiralari hosil bo'ladi (19-rasm). Quloq
            oldi bezida hujayralar alveolyar, jag' osti va til osti bezlarida
            esa naysimon shaklida bo'ladi. Chiqarish yo'llari orasida bezning
            lobulyar, oraliq va interlobulyar kanallari farqlanadi.Oraliq
            kanallar to'g'ridan-to'g'ri bezning chet qismlardan boshlanadi. Agar
            hujayralar oqsillarni ajratsa, bu kanallar yaxshi ifodalangan
            bo‘ladi, agar hujayralar shilliq ajratsa, oraliq yo'llar hujayralari
            mukotsitlarga aylanadi.
            <p className="rasm">
              <img src={rasm21} />
            </p>
            Oraliq kanallar kichik diametrga ega bo‘lib, terminal qismlarida
            yanada to‘rayadi. Bularning epiteliysi bir qavatli, kubsimon yoki
            yumaloq. Chiziqli yo'llarida bo‘shliq kengroq, epiteliy bir qavatli
            prizmatik hujayralardan iborat. Interlobulyar kanallarning
            epiteliysi ikki qavatli yoki ko'p qavatli bo'ladi. Bezlarning eng
            katta kanallari so‘lak bezlari to'qimasidan tashqarida joylashgan.
            Qatlamli epiteliy kubsimon hujayralardan iborat bo'lib, kanallar
            oraliq va chiziqli yo'llardan farqli o'laroq, miyoepiteliy
            hujayralar bilan emas, balki biriktiruvchi to'qima qatlami bilan
            o'ralgan.
            <p className="sarlavha">Me’da bezlari</p>Barcha me’da bezlari
            tuzilishi jihatidan oddiy me’da bezlari (chiqaruvchi yo‘llari
            tarmoqlanmagan) va naysimon me’da bezlariga (oxirgi bo‘limlarning
            shakli naysimon) bo‘linadi (21-rasm). Joylashishiga qarab fundal
            bezlar (35 mln, deyarli shoxlanmagan), kardial bezlar (1-2 mln,
            kuchli shoxlangan) va 12 barmoq ichakka o‘tish joyi pilorik (3,5
            mln, shoxlangan, siyrak, yo‘llari keng) bezlar farqlanadi. Shilliq
            qavatdagi hujayralar ekzokrinotsitlar (asosiy, parietal va shilliq)
            hamda endokrinotsitlardir (EC-hujayralar, D1-hujayralar,
            G-hujayralar, ECLhujayralar, P- hujayralar) bo‘ladi.
            <p className="sarlavha">Me’da osti bezining sekretor hujayralari</p>
            Me’da osti bezida endokrin va ekzokrin hujayralar mavjud. Ekzokrin
            to‘qimasi to‘rt xil hujayradan tashkil topgan. Birinchi xili -
            lipolitik, glikolitik, proteolitik fermentlarni va zimogenlarni
            (profermentlarni) ishlab chiqaruvchi atsinar hujayralardir. Ular
            me’da osti bezining 80% ini tashkil qiladi. Ikkinchi xili - markaziy
            atsinar noduktular hujayralar bo‘lib, ular bikarbonatlarni ajratadi.
            Uchinchi turdagi hujayralar mutsinni ishlab chiqaradi va to‘rtinchi
            turdagilar interstitsiyni biriktiruvchi hujayralardir.
            <p className="img_gap">
              <img src={rasm22} />
              <p>
                21-rasm. Mе'daning xususiy bеzi. I. Tubi; II. Tanasi; III.
                Chiqaruvchi yo‘li, bo‘yni; IV. Og‘izchasi. 1-asosiy;
                2-pariеntal; 3- qo‘shimcha hujayralari.
              </p>
            </p>
            Me’da osti bezining endokrin qismi hujayra Langergans hujayra
            orolchalaridan tashkil topgan (22-rasm). Ular atsinuslardan
            biriktiruvchi to‘qimaning qavatlari bilan ajralgan va quyidagi
            tipdagi hujayralarni o‘z ichiga oladi: α-hujayralar (glukagon,
            peptid YY ishlab chiqaradi); β-hujayralar (insulin, C-peptid,
            pankreastatin ishlab chiqaradi); D- hujayralar (somatostatin ishlab
            chiqaradi); PP (yoki F) hujayralar pankreatik polipeptidni ishlab
            chiqaradi.
            <p className="rasm">
              <img src={rasm23} />
            </p>
            β-hujayralar eng ko‘p sonli bo‘lib, Langergans orolchalarining
            markazlarida joylashgan. Langergans orolchalarining atrofida
            joylashgan D- va PPhujayralarning soni har bir atsinusda bir xil
            emas. Me’da osti bezining old qismidaβ-hujayralarining soni ko‘proq
            bo‘lsa, orqa qismida esa α-hujayralar asosiy qismini tashkil qiladi.
            <p className="sarlavha">Jigar gistologiyasi</p>
            Jigarning stromasi, ya’ni unga shakl beruvchi qoplama: kapsula,
            segmentlararo va interlobulyar biriktiruvchi to'qimadan iborat.
            .Kapsula seroz parda bilan qoplangan zich tolali biriktiruvchi
            to'qimadan hosil bo'ladi. Segmentlararo va interlobulyar
            biriktiruvchi to'qima g‘ovak biriktiruvchi to'qima bilan ifodalanadi
            (23-rasm). Jigarning parenximasi esa uning bo‘laklari tarkibiga
            kiruvchi asosiy to‘qimadir. Jigar bo'lagi olti burchakli prizma
            shaklida bo'lib, uning asosini arqon shaklida joylashgan
            gepatotsitlar tashkil qiladi. Gepatotsitlardan tashqari lobulada
            kiruvchi ko'p jarayonlarda ishtirok etgan va sitoplazmada A vitamini
            bilan lipid qo'shimchalarini o'z ichiga olgan yulduzsimon hujayralar
            (Ito hujayralari, lipotsitlar) mavjud. Bu hujayralar mezenximal
            kelib chiqishga ega bo‘lib, fibroblastlarning analoglari
            hisoblanadi. Ular faollashishi va miofibroblastlarga aylanishi
            mumkin; ular gepatotsitlarning o'sishi va ko'payishida, sirozning
            rivojlanishida ishtirok etadi, sinusoidal kapillyarlarda qon oqimini
            va o't kapillyarlarida o't oqimini tartibga soladi; Jigar
            arteriyasi, darvoza venasi va o't yo'lining shoxlaridan iborat
            bo‘lgan jigar triadalari lobulaning atrofidan o'tadi. lobulyar o't
            kapillyarlari bo'lakchaning markaziy bo'limlaridan boshlanadi va
            bo'lakchaning chetiga boradi, u yerda ular perilobulyar o't yo'liga
            tushadi, o't ular orqali markazdan bo'lakchaning chetiga oqib
            o'tadi; intralobulyar o't kapillyarining o'z devori bo‘lmaydi, lekin
            qo'shni gepatotsitlar membranalari tomonidan hosil bo'ladi, ya’ni
            gepatotsitlar orasidagi tor bo'shlig‘i sifatida bo‘ladi. Qon
            lobulaning o'rtasiga periferiyadan intralobular sinusoidal
            kapillyarlar orqali oqib o'tadi va markaziy venaga tushadi, qon bu
            sinusoidlar orqali bo'lakchaning chetidan o'rtasiga o'tadi.
            Kapillyar va gepatotsitlar orasida perisinusoidal bo'shliq (Disse
            bo'shlig'i) mavjud. Markaziy vena lobulaning o’rtasida joylashgan
            bo'lib, intralobular sinusoidal kapillyarlardan qon oladi. Barcha
            lobulalar interlobulyar, segmentlararo biriktiruvchi to'qima bilan
            o'zaro bog'langan.
            <p className="img_gap">
              <img src={rasm24} />
              <p>
                23-rasm.Jigar lobulaning tuzilishi 1 - gepartotsitlar, 2 – jigar
                portal venasi, 3 - jigar arteriyasi, 4 - markaziy vena; 5 - o’t
                kapillyarlari, 6 – o’t yollari.{" "}
              </p>
            </p>
            Intralobular sinusoidal kapillyar devorining tuzilishi o‘ziga xos
            bo‘lib devorga biriktirilgan ko'p sonli makrofaglar (Kupffer
            hujayralari) bo‘ladi. Kapilyarlarning endoteliysi fenestrlangan; oz
            miqdorda retikulyar tolalar mavjud, ammo bazal membranasi bo‘lmaydi.
            Kapillyarlar birlashib periferiyadan lobulaning markaziga boradi, va
            u yerda markaziy venaga, hamda yog‘ni zaxira qiluvchi hujayralar
            mavjud bo‘lgan persinusoid (Disse)bo‘shlig‘iga tushadi. Jigar
            ichidagi o't yo'llari bir qavatli kubsimon (atrofida lobulyar,
            interlobulyar) yoki prizmatik epiteliydan (segmentlararo
            hujayralardan) iborat bo'lib, tashqi tomondan g‘ovak biriktiruvchi
            to'qima bilan qoplangan. Jigardan tashqari o't yo'llari o‘z ichiga
            o'ng va chap jigar yo‘llarini, o‘t pufagi yo’lini va, umumiy jigar
            yo‘lini oladi. Gepatotsitlarning asosiy funktsiyalari qon oqsillari
            (albumin, koagulyatsion omill) glikogen, yog 'kislotalari, safro
            komponentlarini sintezlash; turli toksik moddalarni parchalash;
            qonni turli qoldiqlardan va bakteriyalardan tozalash va boshqalar
            hisoblanadi.
            <p className="sarlavha">Ichak bezlari</p>Me’dadagi hujayralar
            singari ingichka ichak epiteliysida ham turli o‘ziga xos hujayralar
            mavjud. Ichak epiteliy qavatida ustunsimon, bokalsimon, Panet
            hujayralari, endokrinotsitlar va differensiyalanmagan hujayralar
            ajratiladi. Ustunsimon hujayralar (epiteliotitlar) vorsinkalarning
            ustini qoplovchi hujayralarning asosiy qismi hisoblanadi. Apikal
            sathda ularning mikrovorsinkalari yaxshi rivojlangan bo‘lib, ular
            kirpiksimon hoshiyani hosil qiladi. Vorsinkalarning yuqori qismida
            asosiy gidrolitik va so‘rilish jarayonlari ro‘y beradi. M-hujayralar
            - apikal sathda mikrovorsinkalar kam, lekin mikroburmalar ko‘p
            bo‘lgan hujayralardir. Mikroburmalar yordamida M-hujayralar yot
            tanachalarni ushlab, ularga ishlov bergandan keyin limfotsitlarga
            uzatadi. Ko‘pincha bu hujayralar limfatik follikulalar (solitar yoki
            peer tugunchalar) ustida joylashgan bo‘lib ustunsimon shaklga ega
            bo‘ladi. Bokalsimon hujayralar (Goblet hujayralari) -
            alohida-alohida joylashgan bo‘lib, bokalsimon shaklga va och
            pufaksimon sitoplazmaga ega. Ularsitoplazmani to‘ldiruvchi shilliq
            sekretni hosil qiladi. Endokrinotsitlar - gormonlarni ajratuvchi
            hujayralar. Granulyar hujayralarning bazal qismidan gormonlar qonga
            diffuziya yo‘li bilan o‘tadi. Differensiyalanmagan epiteliositlar -
            kriptalarning pastki yarmida bo‘ladi. Vorsinka va kripta
            hujayralarining regeneratsiya manbayi hisoblanadi. Ular mitoz
            holatda bo‘linadi. Panet hujayralari antibacterial himoyani
            taminlaydi (24-rasm)
            <p className="img_gap">
              <img src={rasm25} />
              <p>
                24-rasm. Ichak bezi (kripta) 1- kriptaning uchi; 2-ustunsimon
                epiteliotsitlar; 3- endokrin hujayralar; 4-Goblet hujayralar, 5-
                differensiyalochi hujayralar; 6- Panet hujayralar, 7- o‘zak
                hujayralar; 8 – kriptaning asosi
              </p>
            </p>
          </p>
        </Container>
      </div>
    </>
  );
}

export default Mavzular;
