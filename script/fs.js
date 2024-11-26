
            /*verstecken
           document.getElementById("toggleList").style.display = "none";*/

           const audioPlayer = document.getElementById("audioPlayer");
           const currentTimeDisplay = document.getElementById("currentTime");
           const Duration = document.getElementById("Duration");
           const NameOfAllah = document.getElementById("NameOfAllah");
           const Anlamlari = document.getElementById("Anlamlari");
           const Sure = document.getElementById("Sure");
           const header = document.getElementById("header");
           //Tabelle----------------------------------
           const trackList = document.querySelectorAll('#ALLAHIN_ISIMLERI td');
           //Tabelle----------------------------------
           const image = document.getElementById("dynamicImage");
           const Allah_Image = document.getElementById("Allah_Image");

           const textDisplay = document.getElementById("textDisplay");

           //Sichtbarkeit per Button steuern (optional): Du kannst auch einen Button hinzufügen, um die Sichtbarkeit umzuschalten:
           const toggleButton = document.getElementById("toggleList");
           const ALLAHIN_ISIMLERI = document.getElementById("ALLAHIN_ISIMLERI");
           //ENDE
            ALLAHIN_ISIMLERI.style.display = "none";
            toggleButton.addEventListener("click", () => {
                if (ALLAHIN_ISIMLERI.style.display === "none") {
                    ALLAHIN_ISIMLERI.style.display = "block"; // Sichtbar machen
                    
                } else {
                    ALLAHIN_ISIMLERI.style.display = "none"; // Unsichtbar machen
                }
            });

        // Funktion zur Änderung des Texts
        function butText() {
            if (toggleButton.textContent === "Listeyi göster!") {
                toggleButton.textContent = "Listeyi gizle!";
            } else {
                toggleButton.textContent = "Listeyi göster!";
            }
        }
            // Event Listener für den Button
            toggleButton.addEventListener("click", butText);

            let audioDuration = "19:19"; // Standardwert für die Länge der Audiodatei
            // Zeitstempel, bei denen die Name und die Liste geändert wird
            const timestamps = {
                "00:01": { header: "Allah الله", track: "track1" },
                "00:09": { header: "Ar Rahman الرَّحْمَنُ", track: "track2" },
                "00:20": { header: "Ar Rahim الرَّحِيمُ", track: "track3" },
                "00:32": { header: "Al Malik الْمَلِكُ", track: "track4" },
                "00:44": { header: "Al Quddus الْقُدُّوسُ", track: "track5" },
                "00:55": { header: "As Salam السَّلاَمُ", track: "track6" },
                "01:07": { header: "Al Mumin الْمُؤْمِنُ", track: "track7" },
                "01:18": { header: "Al Muhaymin الْمُهَيْمِنُ", track: "track8" },
                "01:30": { header: "Al Aziz الْعَزِيزُ", track: "track9" },
                "01:41": { header: "Al Jabbar الْجَبَّارُ", track: "track10" },
                "01:53": { header: "Al Mutakabbir الْمُتَكَبِّرُ", track: "track11" },
                "02:05": { header: "Al Khaliq الْخَالِقُ", track: "track12" },
                "02:16": { header: "Al Bari الْبَارِئُi", track: "track13" },
                "02:28": { header: "Al Musawwir الْمُصَوِّرُ", track: "track14" },
                "02:39": { header: "Al Gaffar الْغَفَّارُ", track: "track15" },
                "02:51": { header: "Al Qahhar الْقَهَّارُ", track: "track16" },
                "03:03": { header: "Al Wahhab الْوَهَّابُ", track: "track17" },
                "03:15": { header: "Ar Razzaq الرَّزَّاقُ", track: "track18" },
                "03:27": { header: "Al Fattah الْفَتَّاحُ", track: "track19" },
                "03:38": { header: "Al Alim الْعَلِيمُ", track: "track20" },
                "03:50": { header: "Al Qabid الْقَابِضُ", track: "track21" },
                "04:01": { header: "Al Basit الْبَاسِطُ", track: "track22" },
                "04:13": { header: "Al Khafid الْخَافِضُ", track: "track23" },
                "04:26": { header: "Ar Rafi الرَّافِعُ", track: "track24" },
                "04:36": { header: "Al Muizz المُعِزُّ", track: "track25" },
                "04:49": { header: "Al Mudhill المُذِلُّ", track: "track26" },
                "05:00": { header: "As Sami السَّمِيعُ", track: "track27" },
                "05:11": { header: "Al Basir الْبَصِيرُ", track: "track28" },
                "05:23": { header: "Al Hakam الْحَكَمُ", track: "track29" },
                "05:35": { header: "Al Adl الْعَدْلُ", track: "track30" },
                "05:46": { header: "Al Latif اللَّطِيفُ", track: "track31" },
                "05:58": { header: "Al Habir الْخَبِيرُ", track: "track32" },
                "06:09": { header: "Al Halim الْحَلِيمُ", track: "track33" },
                "06:21": { header: "Al Azim الْعَظِيمُ", track: "track34" },
                "06:32": { header: "Al Gafur الْغَفُورُ", track: "track35" },
                "06:44": { header: "Ash Shakur الشَّكُورُ", track: "track36" },
                "06:55": { header: "Al Aliyy الْعَلِيُّ", track: "track37" },
                "07:06": { header: "Al Kabir الْكَبِيرُ", track: "track38" },
                "07:18": { header: "Al Hafiz الْحَفِيظُ", track: "track39" },
                "07:30": { header: "Al Muqit المُقِيتُ", track: "track40" },
                "07:41": { header: "Al Hasib الْحَسِيبُ", track: "track41" },
                "07:53": { header: "Al Jalil الْجَلِيلُ", track: "track42" },
                "08:05": { header: "Al Karim الْكَرِيمُ", track: "track43" },
                "08:17": { header: "Ar Raqib الرَّقِيبُ", track: "track44" },
                "08:28": { header: "Al Mujib الْمُجِيبُ", track: "track45" },
                "08:40": { header: "Al Wasi الْوَاسِعُ", track: "track46" },
                "08:52": { header: "Al Hakim الْحَكِيمُ", track: "track47" },
                "09:03": { header: "Al Wadud الْوَدُودُ", track: "track48" },
                "09:15": { header: "Al Majid الْمَجِيدُ", track: "track49" },
                "09:26": { header: "Al Baith الْبَاعِثُ", track: "track50" },
                "09:41": { header: "Ash Shahid الشَّهِيدُ", track: "track51" },
                "09:52": { header: "Al Haqq الْحَقُّ", track: "track52" },
                "10:04": { header: "Al Wakil الْوَكِيلُ", track: "track53" },
                "10:16": { header: "Al Qawiyy الْقَوِىُّ", track: "track54" },
                "10:27": { header: "Al Matin الْمَتِينُ", track: "track55" },
                "10:39": { header: "Al Waliyy الْوَلِىُّ", track: "track56" },
                "10:51": { header: "Al Hamid الْحَمِيدُ", track: "track57" },
                "11:02": { header: "Al Muhsi الْمُحْصِى", track: "track58" },
                "11:14": { header: "Al Mubdi الْمُبْدِئُ", track: "track59" },
                "11:25": { header: "Al Mu’id الْمُعِيدُ", track: "track60" },
                "11:37": { header: "Al Muhyi الْمُحْيِى", track: "track61" },
                "11:49": { header: "Al Mumit المُمِيتُ", track: "track62" },
                "12:00": { header: "Al Hayy الْحَىُّ", track: "track63" },
                "12:12": { header: "Al Qayyum الْقَيُّومُ", track: "track64" },
                "12:23": { header: "Al Wajid الْوَاجِدُ", track: "track65" },
                "12:35": { header: "Al Majid الْمَاجِدُ", track: "track66" },
                "12:47": { header: "Al Wahid الْوَاحِدُ", track: "track67" },
                "12:58": { header: "As Samad الصَّمَدُ", track: "track68" },
                "13:10": { header: "Al Qadir الْقَادِرُ", track: "track69" },
                "13:21": { header: "Al Muqtadir الْمُقْتَدِرُ", track: "track70" },
                "13:33": { header: "Al Muqaddim الْمُقَدِّمُ", track: "track71" },
                "13:45": { header: "Al Mu’akhkhir الْمُؤَخِّرُ", track: "track72" },
                "13:56": { header: "Al Awwal الأوَّلُ", track: "track73" },
                "14:08": { header: "Al Akhir الآخِرُ", track: "track74" },
                "14:18": { header: "Az Zaher الظَّاهِرُ", track: "track75" },
                "14:30": { header: "Al Batin الْبَاطِنُ", track: "track76" },
                "14:41": { header: "Al Wali الْوَالِى", track: "track77" },
                "14:53": { header: "Al Muta’ali الْمُتَعَالِى", track: "track78" },
                "15:05": { header: "Al Barr الْبَرُّ", track: "track79" },
                "15:16": { header: "At Tawwab التَّوَابُ", track: "track80" },
                "15:27": { header: "Al Munteqim الْمُنْتَقِمُ", track: "track81" },
                "15:39": { header: "Al Afuw العفوُّ", track: "track82" },
                "15:51": { header: "Ar Rauf الرَّؤُوفُ", track: "track83" },
                "16:02": { header: "Malikul Mulk مَالِكُ الْمُلْكِ", track: "track84" },
                "16:14": { header: "Zuljalal ve-l İkram ذُوالْجَلاَلِ وَ الإكْرَام", track: "track85" },
                "16:25": { header: "Al Muqsit الْمُقْسِطُ", track: "track86" },
                "16:37": { header: "Al Jami الْجَامِعُ", track: "track87" },
                "16:49": { header: "Al Ganiyy الْغَنِىُّ", track: "track88" },
                "17:00": { header: "Al Mughni الْمُغْنِى", track: "track89" },
                "17:12": { header: "Al Mani الْمَانِعُ", track: "track90" },
                "17:23": { header: "Ad Darr الضَّارَّ", track: "track91" },
                "17:35": { header: "An Nafi النَّافِعُ", track: "track92" },
                "17:47": { header: "An Nur النُّورُ", track: "track93" },
                "17:58": { header: "Al Hadi الْهَادِى", track: "track94" },
                "18:10": { header: "Al Badi الْبَدِيعُ", track: "track95" },
                "18:22": { header: "Al Baqi الْبَاقِى", track: "track96" },
                "18:33": { header: "Al Varis الْوَارِثُ", track: "track97" },
                "18:45": { header: "Ar Rashid الرَّشِيدُ", track: "track98" },
                "18:57": { header: "As Sabur. الصَّبُورُ", track: "track99" },
                "19:12": { header: "Allah الله", track: "track100" }
            };

            // Funktion zum Formatieren der aktuellen Zeit
            function formatTime(seconds) {
                const minutes = Math.floor(seconds / 60);
                const secondsFormatted = Math.floor(seconds % 60);
                return `${String(minutes).padStart(2, '0')}:${String(secondsFormatted).padStart(2, '0')}`;
            }

            // Audiodauer abrufen, sobald Metadaten geladen sind
            audioPlayer.addEventListener("loadedmetadata", () => {
                audioDuration = formatTime(audioPlayer.duration);
                Duration.textContent =  `${audioDuration}`;
            });

       // Zeiten und zugehörige Bilder
        const imageChanges = [
            { time: 1, imageSrc: "img_w/01_Allah.gif", text: "Allah الله" },  
            { time: 9, imageSrc: "img_w/02_Er-Rahman.gif", text: "Ar Rahman الرَّحْمَنُ" },  
            { time: 20, imageSrc: "img_w/03_Er-Rahim.gif" , text: "Ar Rahim الرَّحِيمُ"}, 
            { time: 32, imageSrc: "img_w/04_El-Melik.gif", text: "Al Malik الْمَلِكُ" }, 
            { time: 44, imageSrc: "img_w/05_El-Kuddüs.gif", text: "Al Quddus الْقُدُّوسُ" }, 
            { time: 55, imageSrc: "img_w/06_El-Selam.gif", text: "As Salam السَّلاَمُ" }, 
            { time: 67, imageSrc: "img_w/07_El-Mü'min.gif", text: "Al Mumin الْمُؤْمِنُ" }, 
            { time: 78, imageSrc: "img_w/08_El-Müheymin.gif", text: "Al Muhaymin الْمُهَيْمِنُ" }, 
            { time: 90, imageSrc: "img_w/09_El-Aziz.gif", text: "Al Aziz الْعَزِيزُ" }, 
            { time: 101, imageSrc: "img_w/10_El-Cabbar.gif", text: "Al Jabbar الْجَبَّارُ" }, 
            { time: 113, imageSrc: "img_w/11_El-Mütekebbir.gif", text: "Al Mutakabbir الْمُتَكَبِّرُ" }, 
            { time: 125, imageSrc: "img_w/12_El-Halik.gif", text: "Al Khaliq الْخَالِقُ" },
            { time: 136, imageSrc: "img_w/13_El-Bari.gif", text: "Al Bari الْبَارِئُ" }, 
            { time: 148, imageSrc: "img_w/14_El-Muvassir.gif", text: "Al Musawwir الْمُصَوِّرُ" }, 
            { time: 159, imageSrc: "img_w/15_El-Gaffar.gif", text: "Al Gaffar الْغَفَّارُ" }, 
            { time: 171, imageSrc: "img_w/16_El-Kahhar.gif", text: "Al Qahhar الْقَهَّارُ" }, 
            { time: 183, imageSrc: "img_w/17_El-Vahhab.gif", text: "Al Wahhab الْوَهَّابُ" }, 
            { time: 195, imageSrc: "img_w/18_El-Rezzak.gif", text: "Ar Razzaq الرَّزَّاقُ" }, 
            { time: 207, imageSrc: "img_w/19_El-Fettah.gif", text: "Al Fattah الْفَتَّاحُ" }, 
            { time: 218, imageSrc: "img_w/20_El-Alim.gif", text: "Al Alim الْعَلِيمُ" }, 
            { time: 230, imageSrc: "img_w/21_El-Kabit.gif", text: "Al Qabid الْقَابِضُ" }, 
            { time: 241, imageSrc: "img_w/22_El-Basit.gif", text: "Al Basit الْبَاسِطُ" }, 
            { time: 253, imageSrc: "img_w/23_El-Hafid.gif", text: "Al Khafid الْخَافِضُ" }, 
            { time: 266, imageSrc: "img_w/24_El-Rafi.gif", text: "Ar Rafi الرَّافِعُ" }, 
            { time: 276, imageSrc: "img_w/25_El-Muiz.gif", text: "Al Muizz المُعِزُّ" }, 
            { time: 289, imageSrc: "img_w/26_El-Müzil.gif", text: "Al Mudhill المُذِلُّ" }, 
            { time: 300, imageSrc: "img_w/27_Es-Semi.gif", text: "As Sami السَّمِيعُ" }, 
            { time: 311, imageSrc: "img_w/28_El-Basir.gif", text: "Al Basir الْبَصِيرُ" }, 
            { time: 323, imageSrc: "img_w/29_El-Hakem.gif", text: "Al Hakam الْحَكَمُ"}, 
            { time: 335, imageSrc: "img_w/30_El-Adl.gif", text: "Al Adl الْعَدْلُ" }, 
            { time: 346, imageSrc: "img_w/31_El-Latif.gif", text: "Al Latif اللَّطِيفُ" }, 
            { time: 358, imageSrc: "img_w/32_El-Habir.gif", text: "Al Habir الْخَبِيرُ" }, 
            { time: 369, imageSrc: "img_w/33_El-Halim.gif", text: "Al Halim الْحَلِيمُ" }, 
            { time: 381, imageSrc: "img_w/34_El-Azim.gif", text: "Al Azim الْعَظِيمُ" }, 
            { time: 392, imageSrc: "img_w/35_El-Gafur.gif", text: "Al Gafur الْغَفُورُ" }, 
            { time: 404, imageSrc: "img_w/36_El-Sekur.gif", text: "Ash Shakur الشَّكُورُ" }, 
            { time: 415, imageSrc: "img_w/37_El-Ali.gif", text: "Al Aliyy الْعَلِيُّ" }, 
            { time: 426, imageSrc: "img_w/38_El-Kebir.gif", text: "Al Kabir الْكَبِيرُ" }, 
            { time: 438, imageSrc: "img_w/39_El-Hafiz.gif", text: "Al Hafiz الْحَفِيظُ" }, 
            { time: 446, imageSrc: "img_w/40_El-Mukit.gif", text: "Al Muqit المُقِيتُ" }, 
            { time: 461, imageSrc: "img_w/41_El-Hasib.gif", text: "Al Hasib الْحَسِيبُ" }, 
            { time: 473, imageSrc: "img_w/42_El-Celil.gif", text: "Al Jalil الْجَلِيلُ" }, 
            { time: 485, imageSrc: "img_w/43_El-Kerim.gif", text: "Al Karim الْكَرِيمُ" }, 
            { time: 497, imageSrc: "img_w/44_Er-Rakib.gif", text: "Ar Raqib الرَّقِيبُ" }, 
            { time: 508, imageSrc: "img_w/45_El-Mucib.gif", text: "Al Mujib الْمُجِيبُ" }, 
            { time: 520, imageSrc: "img_w/46_El-Vasi.gif", text: "Al Wasi الْوَاسِعُ" }, 
            { time: 532, imageSrc: "img_w/47_El-Hakim.gif", text: "Al Hakim الْحَكِيمُ" }, 
            { time: 543, imageSrc: "img_w/48_El-Vedud.gif", text: "Al Wadud الْوَدُودُ" }, 
            { time: 555, imageSrc: "img_w/49_El-Mecid.gif", text: "Al Majid الْمَجِيدُ" }, 
            { time: 566, imageSrc: "img_w/50_El-Ba'is.gif", text: "Al Baith الْبَاعِثُ" }, 
            { time: 581, imageSrc: "img_w/51_Es-Sehid.gif", text: "Ash Shahid الشَّهِيدُ" }, 
            { time: 592, imageSrc: "img_w/52_El-Hak.gif", text: "Al Haqq الْحَقُّ" }, 
            { time: 604, imageSrc: "img_w/53_El-Vekil.gif", text: "Al Wakil الْوَكِيلُ" }, 
            { time: 616, imageSrc: "img_w/54_El-Kavi.gif", text: "Al Qawiyy الْقَوِىُّ" }, 
            { time: 627, imageSrc: "img_w/55_El-Metin.gif", text: "Al Matin الْمَتِينُ" }, 
            { time: 639, imageSrc: "img_w/56_El-Veli.gif", text: "Al Waliyy الْوَلِىُّ" }, 
            { time: 651, imageSrc: "img_w/57_El-Hamid.gif", text: "Al Hamid الْحَمِيدُ" }, 
            { time: 662, imageSrc: "img_w/58_El-Muhsi.gif", text: "Al Muhsi الْمُحْصِى" }, 
            { time: 674, imageSrc: "img_w/59_El-Mubdi.gif", text: "Al Mubdi الْمُبْدِئُ" }, 
            { time: 685, imageSrc: "img_w/60_El-Mu'id.gif", text: "Al Mu’id الْمُعِيدُ" }, 
            { time: 697, imageSrc: "img_w/61_El-Muhyi.gif", text: "Al Muhyi الْمُحْيِى" }, 
            { time: 709, imageSrc: "img_w/62_El-Mümit.gif", text: "Al Mumit المُمِيتُ" }, 
            { time: 720, imageSrc: "img_w/63_El-Hayy.gif", text: "Al Hayy الْحَىُّ" }, 
            { time: 732, imageSrc: "img_w/64_El-Kayyum.gif", text: "Al Qayyum الْقَيُّومُ" }, 
            { time: 743, imageSrc: "img_w/65_El-Vacid.gif", text: "Al Wajid الْوَاجِدُ" }, 
            { time: 755, imageSrc: "img_w/66_El-Macid.gif", text: "Al Majid الْمَاجِدُ" }, 
            { time: 767, imageSrc: "img_w/67_El-Vahid.gif", text: "Al Wahid الْوَاحِدُ" }, 
            { time: 778, imageSrc: "img_w/68_El-Samed.gif", text: "As Samad الصَّمَدُ" }, 
            { time: 790, imageSrc: "img_w/69_El-Kadir.gif", text: "Al Qadir الْقَادِرُ" }, 
            { time: 801, imageSrc: "img_w/70_El-Muktedir.gif", text: "Al Muqtadir الْمُقْتَدِرُ" }, 
            { time: 813, imageSrc: "img_w/71_El-Mukaddim.gif", text: "Al Muqaddim الْمُقَدِّمُ" }, 
            { time: 825, imageSrc: "img_w/72_El-Muahhir.gif", text: "Al Mu’akhkhir الْمُؤَخِّرُ" }, 
            { time: 836, imageSrc: "img_w/73_El-Evvel.gif", text: "Al Awwal الأوَّلُ" }, 
            { time: 848, imageSrc: "img_w/74_El-Ahir.gif", text: " Al Akhir الآخِرُ" }, 
            { time: 858, imageSrc: "img_w/75_El-Zahir.gif", text: "Az Zaher الظَّاهِرُ" }, 
            { time: 870, imageSrc: "img_w/76_El-Batin.gif", text: "Al Batin الْبَاطِنُ" }, 
            { time: 881, imageSrc: "img_w/77_El-Vali.gif", text: "Al Wali الْوَالِى" }, 
            { time: 893, imageSrc: "img_w/78_El-Müteali.gif", text: "Al Muta’ali الْمُتَعَالِى" }, 
            { time: 905, imageSrc: "img_w/79_El-Ber.gif", text: "Al Barr الْبَرُّ" }, 
            { time: 916, imageSrc: "img_w/80_El-Tevvab.gif", text: "At Tawwab التَّوَابُ" }, 
            { time: 927, imageSrc: "img_w/81_El-Müntekim.gif", text: "Al Munteqim الْمُنْتَقِمُ" }, 
            { time: 939, imageSrc: "img_w/82_El-Afüvv.gif", text: "Al Afuw العفوُّ" }, 
            { time: 951, imageSrc: "img_w/83_El-Rauf.gif", text: "Ar Rauf الرَّؤُوفُ" }, 
            { time: 962, imageSrc: "img_w/84_Malik-ül Mülk.gif", text: "Malikul Mulk مَالِكُ الْمُلْكِ" }, 
            { time: 974, imageSrc: "img_w/85_Zül-celali vel Ikram.gif", text: "Zuljalal ve-l İkram ذُوالْجَلاَلِ وَ الإكْرَام" }, 
            { time: 985, imageSrc: "img_w/86_El-Muksit.gif", text: "Al Muqsit الْمُقْسِطُ" }, 
            { time: 997, imageSrc: "img_w/87_El-Cami.gif", text: "Al Jami الْجَامِعُ" }, 
            { time: 1009, imageSrc: "img_w/88_El-Gani.gif", text: "Al Ganiyy الْغَنِىُّ" }, 
            { time: 1020, imageSrc: "img_w/89_El-Mugni.gif", text: "Al Mughni الْمُغْنِى" }, 
            { time: 1032, imageSrc: "img_w/90_El-Mani.gif", text: "Al Mani الْمَانِعُ" }, 
            { time: 1043, imageSrc: "img_w/91_Ed-Dar.gif", text: "Ad Darr الضَّارَّ" }, 
            { time: 1055, imageSrc: "img_w/92_En-Nafi.gif", text: "An Nafi النَّافِعُ" }, 
            { time: 1067, imageSrc: "img_w/93_En-Nur.gif", text: "An Nur النُّورُ" }, 
            { time: 1078, imageSrc: "img_w/94_El-Hadi.gif", text: "Al Hadi الْهَادِى" }, 
            { time: 1090, imageSrc: "img_w/95_El-Bedi.gif", text: "Al Badi الْبَدِيعُ" }, 
            { time: 1102, imageSrc: "img_w/96_El-Baki.gif", text: "Al Baqi الْبَاقِى" }, 
            { time: 1113, imageSrc: "img_w/97_El-Varis.gif", text: "Al Varis الْوَارِثُ" }, 
            { time: 1125, imageSrc: "img_w/98_Er-Resid.gif", text: "Ar Rashid الرَّشِيدُ" }, 
            { time: 1137, imageSrc: "img_w/99_Es-Sabur.gif", text: "As Sabur. الصَّبُورُ" },
            { time: 1152, imageSrc: "img_w/01_Allah.gif", text: "Allah الله" }
        ];
        const timeAnlamı = [
            { time: 1, text: "Her ismin vasfını ihtiva eden öz adı. Kendinden başka ilah bulunmayan tek Allah. Bu ism-i şerif, Cenâb-ı Hakk'ın has ismidir. Bu itibarla diğer isimlerin ifade ettiği bütün güzel vasıfları ve İlâhî sıfatları içine alır. Diğer isimler ise, yalnız kendi mânalarına delâlet ederler. Bu bakımdan Allah isminin yerini hiçbir isim tutamaz. Bu isim, Allah'tan başkasına mecazen de verilemez. Diğer isimlerinden bazılarının, Allah'tan başkasına isim olarak verilmesi caizdir.İsimlerin sultanı." },
            { time: 9, text: "Dünyada bütün mahlûkata merhamet eden, şefkat gösteren, ihsan eden." },
            { time: 20, text: "Ahirette, sadece müminlere acıyan, merhamet eden." },
            { time: 32, text: "Mülkün, kâinatın sahibi, mülk ve saltanatı devamlı olan." },
            { time: 44, text: "Her noksanlıktan uzak ve her türlü takdîse lâyık olan." },
            { time: 55, text: "Her türlü tehlikelerden selamete çıkaran. Cennetteki bahtiyar kullarına selâm eden." },
            { time: 67, text: "Güven veren, emin kılan, koruyan, iman nurunu veren." },
            { time: 78, text: "Her şeyi görüp gözeten, her varlığın yaptıklarından haberdar olan." },
            { time: 90, text: "İzzet sahibi, her şeye galip olan, karşı gelinemeyen." },
            { time: 101, text: "Azamet ve kudret sahibi. Dilediğini yapan ve yaptıran. Hükmüne karşı gelinemeyen." },
            { time: 113, text: "Büyüklükte eşi, benzeri yok." },
            { time: 125, text: "Yaratan, yoktan var eden. Varlıkların geçireceği halleri takdir eden." },
            { time: 136, text: "Her şeyi kusursuz ve mütenasip yaratan." },
            { time: 148, text: "Varlıklara şekil veren ve onları birbirinden farklı özellikte yaratan." },
            { time: 159, text: "Günahları örten ve çok mağfiret eden. Dilediğini günah işlemekten koruyan." },
            { time: 171, text: "Her istediğini yapacak güçte olan, galip ve hâkim." },
            { time: 183, text: "Karşılıksız nimetler veren, çok fazla ihsan eden." },
            { time: 195, text: "Her varlığın rızkını veren ve ihtiyacını karşılayan." },
            { time: 207, text: "Her türlü sıkıntıları gideren." },
            { time: 218, text: "Gizli açık, geçmiş, gelecek, her şeyi, ezeli ve ebedi ilmi ile en mükemmel bilen." },
            { time: 230, text: "Dilediğinin rızkını daraltan, ruhları alan." },
            { time: 241, text: "Dilediğinin rızkını genişleten, ruhları veren." },
            { time: 253, text: "Kâfir ve facirleri alçaltan." },
            { time: 266, text: "Şeref verip yükselten." },
            { time: 276, text: "Dilediğini aziz eden." },
            { time: 289, text: "Dilediğini zillete düşüren, hor ve hakir eden." },
            { time: 300, text: "Her şeyi en iyi işiten, duaları kabul eden." },
            { time: 311, text: "Gizli açık, her şeyi en iyi gören." },
            { time: 323, text: "Mutlak hakim, hakkı bâtıldan ayıran. Hikmet sahibi." },
            { time: 335, text: "Mutlak adil, yerli yerinde yapan." },
            { time: 346, text: "Her şeye vakıf, lütuf ve ihsan sahibi olan." },
            { time: 358, text: "Her şeyden haberdar. Her şeyin gizli taraflarından haberi olan." },
            { time: 369, text: "Cezada, acele etmeyen, yumuşak davranan, hilm sahibi." },
            { time: 381, text: "Büyüklükte benzeri yok. Pek yüce." },
            { time: 392, text: "Affı, mağfireti bol." },
            { time: 404, text: "Az amele, çok sevap veren." },
            { time: 415, text: "Yüceler yücesi, çok yüce." },
            { time: 426, text: "Büyüklükte benzeri yok, pek büyük." },
            { time: 438, text: "Her şeyi koruyucu olan." },
            { time: 446, text: "Rızıkları yaratan." },
            { time: 461, text: "Kulların hesabını en iyi gören." },
            { time: 473, text: "Celal ve azamet sahibi olan." },
            { time: 485, text: "Keremi, lütuf ve ihsânı bol, karşılıksız veren, çok ikram eden." },
            { time: 497, text: "Her varlığı, her işi her an gözeten. Bütün işleri murakabesi altında bulunduran." },
            { time: 508, text: "Duaları, istekleri kabul eden." },
            { time: 520, text: "Rahmet ve kudret sahibi, ilmi ile her şeyi ihata eden." },
            { time: 532, text: "Her işi hikmetli, her şeyi hikmetle yaratan." },
            { time: 543, text: "İyiliği seven, iyilik edene ihsan eden. Sevgiye layık olan." },
            { time: 555, text: "Nimeti, ihsanı sonsuz, şerefi çok üstün, her türlü övgüye layık bulunan." },
            { time: 566, text: "Mahşerde ölüleri dirilten, Peygamber gönderen." },
            { time: 581, text: "Zamansız, mekansız hiçbir yerde olmayarak her zaman her yerde hazır ve nazır olan." },
            { time: 592, text: "Varlığı hiç değişmeden duran. Var olan, hakkı ortaya çıkaran." },
            { time: 604, text: "Kulların işlerini bitiren. Kendisine tevekkül edenlerin işlerini en iyi neticeye ulaştıran." },
            { time: 616, text: "Kudreti en üstün ve hiç azalmaz." },
            { time: 627, text: "Kuvvet ve kudret menbaı, pek güçlü." },
            { time: 639, text: "Müslümanların dostu, onları sevip yardım eden." },
            { time: 651, text: "Her türlü hamd ve senaya layık olan." },
            { time: 662, text: "Yarattığı ve yaratacağı bütün varlıkların sayısını bilen." },
            { time: 674, text: "Maddesiz, örneksiz yaratan." },
            { time: 685, text: "Yarattıklarını yok edip, sonra tekrar diriltecek olan." },
            { time: 697, text: "İhya eden, yarattıklarına can veren." },
            { time: 709, text: "Her canlıya ölümü tattıran." },
            { time: 720, text: "Ezeli ve ebedi bir hayat ile diri olan." },
            { time: 732, text: "Mahlukları varlıkta durduran, zatı ile kaim olan." },
            { time: 743, text: "Kendisinden hiçbir şey gizli kalmayan, hiçbir şeye muhtaç olmayan." },
            { time: 755, text: "Kadri ve şânı büyük, keremi, ihsanı bol olan." },
            { time: 767, text: "Zat, sıfat ve fiillerinde benzeri ve ortağı olmayan, tek olan." },
            { time: 778, text: "Hiçbir şeye ihtiyacı olmayan, herkesin muhtaç olduğu merci." },
            { time: 790, text: "Dilediğini dilediği gibi yaratmaya muktedir olan." },
            { time: 801, text: "Dilediği gibi tasarruf eden, her şeyi kolayca yaratan kudret sahibi." },
            { time: 813, text: "Dilediğini yükselten, öne geçiren, öne alan." },
            { time: 825, text: "Dilediğini alçaltan, sona, geriye bırakan." },
            { time: 836, text: "Ezeli olan, varlığının başlangıcı olmayan." },
            { time: 848, text: "Ebedi olan, varlığının sonu olmayan." },
            { time: 858, text: "Yarattıkları ile varlığı açık, aşikâr olan, kesin delillerle bilinen." },
            { time: 870, text: "Aklın tasavvurundan gizli olan." },
            { time: 881, text: "Bütün kâinatı idare eden, onların işlerini yoluna koyan." },
            { time: 893, text: "Son derece yüce olan." },
            { time: 905, text: "İyilik ve ihsanı bol olan." },
            { time: 916, text: "Tevbeleri kabul edip, günahları bağışlayan." },
            { time: 927, text: "Asilerin, zalimlerin cezasını veren." },
            { time: 939, text: "Affı çok olan, günahları mağfiret eden." },
            { time: 951, text: "Çok merhametli, pek şefkatli." },
            { time: 962, text: "Mülkün, her varlığın sahibi." },
            { time: 974, text: "Celal, azamet, şeref, kemal ve ikram sahibi." },
            { time: 985, text: "Mazlumların hakkını alan, adaletle hükmeden, her işi birbirine uygun yapan." },
            { time: 997, text: "İki zıttı bir arada bulunduran. Kıyamette her mahlûkatı bir araya toplayan." },
            { time: 1009, text: "İhtiyaçsız, muhtaç olmayan, her şey Ona muhtaç olan." },
            { time: 1020, text: "Müstağni kılan. İhtiyaç gideren, zengin eden." },
            { time: 1032, text: "Dilemediği şeye mani olan, engelleyen." },
            { time: 1043, text: "Elem, zarar verenleri yaratan." },
            { time: 1055, text: "Fayda veren şeyleri yaratan." },
            { time: 1067, text: "Âlemleri nurlandıran, dilediğine nur veren." },
            { time: 1078, text: "Hidayet veren." },
            { time: 1090, text: "Misalsiz, örneksiz harikalar yaratan. (Eşi ve benzeri olmayan)." },
            { time: 1102, text: "Varlığının sonu olmayan, ebedi olan." },
            { time: 1113, text: "Her şeyin asıl sahibi olan." },
            { time: 1125, text: "İrşada muhtaç olmayan, doğru yolu gösteren." },
            { time: 1137, text: "Ceza vermede, acele etmeyen." },
            { time: 1152, text: "Her ismin vasfını ihtiva eden öz adı. Kendinden başka ilah bulunmayan tek Allah. Bu ism-i şerif, Cenâb-ı Hakk'ın has ismidir. Bu itibarla diğer isimlerin ifade ettiği bütün güzel vasıfları ve İlâhî sıfatları içine alır. Diğer isimler ise, yalnız kendi mânalarına delâlet ederler. Bu bakımdan Allah isminin yerini hiçbir isim tutamaz. Bu isim, Allah'tan başkasına mecazen de verilemez. Diğer isimlerinden bazılarının, Allah'tan başkasına isim olarak verilmesi caizdir.İsimlerin sultanı." }
        ];        
        const timeSureler = [
            { time: 1, text: "1. (1:1); (3:18); (5:109); (6:124); (7:180); (8:40); (16:91); (20:8); (57:5); (65:3); (74:56); (85:20);" },
            { time: 9, text: "2. (1:3); (17:110); (19:58); (21:112); (27:30); (36:52); (50:33); (55:1); (59:22); (78:38);" },
            { time: 20, text: "3. (2:163); (3:31); (4:100); (5:3); (5:98); (11:41); (12:53); (12:64); (26:9); (30:5); (36:58);" },
            { time: 32, text: "4. (20:114); (23:116); (59:23); (62:1); (114:2);" },
            { time: 44, text: "5. (59:23); (62:1);" },
            { time: 55, text: "6. (59:23);" },
            { time: 67, text: "7. (59:23);" },
            { time: 78, text: "8. (59:23);" },
            { time: 90, text: "9. (3:6); (4:158); (9:40); (9:71); (48:7); (59:23); (61:1);" },
            { time: 101, text: "10. (59:23);" }, 
            { time: 113, text: "11. (59:23);" },
            { time: 125, text: "12. (6:102); (13:16); (39:62); (40:62); (59:24);" },
            { time: 136, text: "13. (59:24);" },
            { time: 148, text: "14. (59:24);" },
            { time: 159, text: "15. (20:82); (38:66); (39:5); (40:42); (71:10);" },
            { time: 171, text: "16. (13:16); (14:48); (38:65); (39:4); (40:16);" },
            { time: 183, text: "17. (3:8); (38:9); (38:35);" },
            { time: 195, text: "18. (51:58)" },
            { time: 207, text: "19. (34:26)" },
            { time: 218, text: "20. (2:158); (3:92); (4:35); (24:41); (33:40); (35:38); (57:6);" },
            { time: 230, text: "21. (2:245);" },
            { time: 241, text: "22. (2:245);" },
            { time: 253, text: "23. (-:-);" },
            { time: 266, text: "24. (-:-);" },
            { time: 276, text: "25. (3:26);" },
            { time: 289, text: "26. (3:26);" },
            { time: 300, text: "27. (2:127); (2:137); (2:256); (8:17); (49:1);" },
            { time: 311, text: "28. (4:58); (17:1); (42:11); (42:27); (57:4); (67:19);" },
            { time: 323, text: "29. (22:69);" },
            { time: 335, text: "30. (-:-);" },
            { time: 346, text: "31. (6:103); (22:63); (31:16); (33:34); (67:14);" },
            { time: 358, text: "32. (6:18); (17:30); (49:13); (59:18); (63:11);" },
            { time: 369, text: "33. (2:225); (2:235); (17:44); (22:59); (35:41);" },
            { time: 381, text: "34. (2:255); (42:4); (56:96);" },
            { time: 392, text: "35. (2:173); (8:69); (16:110); (41:32); (60:7);" },
            { time: 404, text: "36. (35:30); (35:34); (42:23); (64:17);" },
            { time: 415, text: "37. (2:255); (4:34); (31:30); (42:4); (42:51);" },
            { time: 426, text: "38. (13:9); (22:62); (31:30); (34:23); (40:12);" },
            { time: 438, text: "39. (11:57); (34:21); (42:6);" },
            { time: 446, text: "40. (-:-);" },
            { time: 461, text: "41. (4:6); (4:86); (33:39);" },
            { time: 473, text: "42. (-:-);" },
            { time: 485, text: "43. (27:40); (82:6);" },
            { time: 497, text: "44. (4:1); (5:117);" },
            { time: 508, text: "45. (11:61)" },
            { time: 520, text: "46. (2:115); (2:261); (2:268); (3:73); (5:54):" },
            { time: 532, text: "47. (2:129); (2:260); (31:27); (46:2); (57:1); (66:2);" },
            { time: 543, text: "48. (11:90); (85:14);" },
            { time: 555, text: "49. (11:73);" },
            { time: 566, text: "50. (22:7);" },
            { time: 581, text: "51. (4:79); (4:166); (22:17); (41:53); (48:28);" },
            { time: 592, text: "52. (6:62); (22:6); (23:116); (31:30);" },
            { time: 604, text: "53. (3:173); (4:171); (28:28); (33:3); (73:9);" },
            { time: 616, text: "54. (22:40); (22:74); (42:19); (57:25); (58:21);" },
            { time: 627, text: "55. (51:58);" },
            { time: 639, text: "56. (3:68); (4:45); (7:196); (42:28); (45:19);" },
            { time: 651, text: "57. (14:1); (14:8); (31:12); (31:26); (41:42);" },
            { time: 662, text: "58. (-:-);" },
            { time: 674, text: "59. (10:4); (10:34); (27:64); (29:19); (85:13);" },
            { time: 685, text: "60. (10:4); (10:34); (27:64); (29:19); (85:13);" },
            { time: 697, text: "61. (3:156); (7:158); (15:23); (30:50); (57:2);" },
            { time: 709, text: "62. (3:156); (7:158); (15:23); (57:2);" },
            { time: 720, text: "63. (2:255); (3:2); (20:111); (25:58); (40:65);" },
            { time: 732, text: "64. (2:255); (3:2); (20:111);" },
            { time: 743, text: "65. (-:-);" },
            { time: 755, text: "66. (-:-);" },
            { time: 767, text: "67. (2:163); (5:73); (9:31); (18:110); (37:4);" },
            { time: 778, text: "68. (112:2);" },
            { time: 790, text: "69. (6:65); (36:81); (46:33); (75:40); (86:8);" },
            { time: 801, text: "70. (18:45); (54:42); (54:55);" },
            { time: 813, text: "71. (-:-);" },
            { time: 825, text: "72. (71:4)" },
            { time: 836, text: "73. (57:3);" },
            { time: 848, text: "74. (57:3);" },
            { time: 858, text: "75. (57:3);" },
            { time: 870, text: "76. (57:3);" },
            { time: 881, text: "77. (-:-);" },
            { time: 893, text: "78. (13:9);" },
            { time: 905, text: "79. (52:28);" },
            { time: 916, text: "80. (2:37); (2:128); (4:64); (49:12); (110:3);" },
            { time: 927, text: "81. (32:22); (43:41); (44:16);" },
            { time: 939, text: "82. (4:99); (4:149); (22:60);" },
            { time: 951, text: "83. (3:30); (9:117); (57:9); (59:10);" },
            { time: 962, text: "84. (3:26);" },
            { time: 974, text: "85. (55:27); (55:78);" },
            { time: 985, text: "86. (3:18);" },
            { time: 997, text: "87. (3:9);" },
            { time: 1009, text: "88. (2:263); (3:97); (39:7); (47:38); (57:24);" },
            { time: 1020, text: "89. (9:28);" },
            { time: 1032, text: "90. (-:-);" },
            { time: 1043, text: "91. (-:-);" },
            { time: 1055, text: "92. (-:-);" },
            { time: 1067, text: "93. (24:35)" },
            { time: 1078, text: "94. (25:31);" },
            { time: 1090, text: "95. (2:117); (6:101);" },
            { time: 1102, text: "96. (55:27);" },
            { time: 1113, text: "97. (15:23);" },
            { time: 1125, text: "98. (-:-);" },
            { time: 1137, text: "99. (-:-);" },
            { time: 1152, text: "1. (1:1); (3:18); (5:109); (6:124); (7:180); (8:40); (16:91); (20:8); (57:5); (65:3); (74:56); (85:20);" }
        ];  

        let currentSpanIndexA = 0;
        let currentSpanIndexS = 0;
        
            // Aktuelle Zeit aktualisieren und Überschrift sowie Liste ändern
            audioPlayer.addEventListener("timeupdate", () => {
            const currentTime = audioPlayer.currentTime;
            const currentTime1 = Math.floor(audioPlayer.currentTime); // Ganze Sekunden
            const formattedTime = formatTime(currentTime);
            currentTimeDisplay.textContent = `${formattedTime}`;
            Duration.textContent =  ` - ${audioDuration}`;

            // Passendes Objekt basierend auf der Zeit finden
            const currentContent = imageChanges.find(content => content.time === currentTime1);

                if (currentContent) {
                    // Bild setzen
                    if (currentContent.imageSrc) {
                        image.src = currentContent.imageSrc;
                        image.style.display = "block"; // Sichtbar machen
                        Allah_Image.src = currentContent.imageSrc;
                        Allah_Image.style.display = "block"; 
                    } else {
                        image.style.display = "none"; // Unsichtbar machen, wenn kein Bild
                        Allah_Image.style.display = "none"; 
                    }

                    // Text setzen
                    if (currentContent.text) {
                        textDisplay.textContent = currentContent.text;
                    } else {
                        textDisplay.textContent = ""; // Text entfernen, wenn keiner vorhanden
                    }
                }

         //Ayetleri göster
         if (currentSpanIndexA < timeAnlamı.length && currentTime1 >= timeAnlamı[currentSpanIndexA].time) {
            Anlamlari.textContent = timeAnlamı[currentSpanIndexA].text;
                currentSpanIndexA++; // Zum nächsten Zeitspanne springen
            }

        //Sureleri göster
        if (currentSpanIndexS < timeSureler.length && currentTime1 >= timeSureler[currentSpanIndexS].time) {
            Sure.textContent = timeSureler[currentSpanIndexS].text;
                currentSpanIndexS++; // Zum nächsten Zeitspanne springen
            }

        // Zurücksetzen,(SURELER) wenn das Audio erneut gestartet wird
        audioPlayer.addEventListener('play', () => {
            if (audioPlayer.currentTime === 0) {
                Anlamlari.textContent = "Her ismin vasfını ihtiva eden öz adı. Kendinden başka ilah bulunmayan tek Allah. Bu ism-i şerif, Cenâb-ı Hakk'ın has ismidir. Bu itibarla diğer isimlerin ifade ettiği bütün güzel vasıfları ve İlâhî sıfatları içine alır. Diğer isimler ise, yalnız kendi mânalarına delâlet ederler. Bu bakımdan Allah isminin yerini hiçbir isim tutamaz. Bu isim, Allah'tan başkasına mecazen de verilemez. Diğer isimlerinden bazılarının, Allah'tan başkasına isim olarak verilmesi caizdir.İsimlerin sultanı.";
                Sure.textContent = "1. (1:1); (3:18); (5:109); (6:124); (7:180); (8:40); (16:91); (20:8); (57:5); (65:3); (74:56); (85:20);";
                currentSpanIndexA = 0;
                currentSpanIndexS = 0;
                duration.textContent = audioPlayer.duration
            }
        });

        //-----------------------------------------------------------------------------------------------------------------------------------------
                // Alle Listeneinträge zurücksetzen
                trackList.forEach(track => {
                    //track.style.color = "black";  // Alle Listeneinträge wieder auf schwarz setzen
                    //track.style.display = "hidden"; // Oder: track.style.visibility = "hidden";
                    //CSS-Klasse für Ausblenden: Es ist oft besser, eine CSS-Klasse zu verwenden und sie dynamisch hinzuzufügen oder zu entfernen:
                    //track.classList.add("hidden");
                });
                // Überprüfe, ob ein Zeitstempel erreicht wurde
                       // Den entsprechenden Listeneintrag Eintragen
                    const trackId = timestamps[formattedTime].track;
                    const trackElement = document.getElementById(trackId);
                    if (trackElement) {
                        trackElement.style.color = "red";  // Die Farbe des Listeneintrags ändern
                        NameOfAllah.textContent = `${trackElement.textContent}`; //Türkçe Okunuşu
                    }
        });
        

        //-----------------------------------------------------------------------------------------------------------------------------------------
