
const content = {
    tittel: "Diktaturen i Egypt: En Mørk Fortelling om Undertrykkelse og Maktmisbruk",

    intro: "Diktaturet i Egypt er en historie som har satt dype spor i landets historie og samfunn. I flere tiår var Egypt underlagt et regime preget av undertrykkelse, maktmisbruk og begrensning av individuelle friheter. Denne teksten vil utforske diktaturets opprinnelse, dets virkninger på det egyptiske samfunnet og det håpet som ligger i befolkningens kamp for frihet og demokrati.",
    
    opprinelse: "Diktaturet i Egypt kan spores tilbake til 1952, da den egyptiske revolusjonen førte til at monarkiet ble styrtet og republikk ble opprettet. Den første republikken ble styrt av Gamal Abdel Nasser, som etablerte et autoritært regime med en militærstyrt regjering. Etter Nasser kom Anwar Sadat og senere Hosni Mubarak, som begge fortsatte å opprettholde et undertrykkende regime gjennom sensur, politisk forfølgelse og begrensning av ytringsfriheten.",

    sammfunsEffekt: "Diktaturet i Egypt hadde dype konsekvenser for det egyptiske samfunnet. Mange opplevde politisk forfølgelse og fengsling for å ha uttrykt sine meninger eller deltatt i fredelige protester. Ytringsfriheten ble sterkt begrenset, og media var underlagt streng sensur. Dette resulterte i en fryktkultur der folk var redde for å si noe som kunne utfordre regimets autoritet. Økonomisk ulikhet og korrupsjon blomstret, og mange egyptere levde i fattigdom og undertrykkelse.",

    håp: "Til tross for undertrykkelsen har egyptiske borgere aldri gitt opp håpet om frihet og demokrati. Gjennom årene har det vært flere opprør og revolusjoner som har forsøkt å avsette det autoritære regimet. Den mest kjente var den egyptiske revolusjonen i 2011, også kjent som 'Arabisk vår' Tusenvis av mennesker gikk ut i gatene og protesterte mot Mubarak-regimet, og krevde demokratiske reformer og respekt for menneskerettighetene.\n\nSelv om revolusjonen førte til at Mubarak ble avsatt, har veien mot demokrati vært vanskeligere enn mange hadde håpet på. Etter et kort mellomspill med demokratisk valg, kom Egypt under militærstyre igjen i 2013. Siden da har landet vært preget av undertrykkelse, fengsling av politiske motstandere og begrensning av ytringsfriheten.",

    konklusjon: "Diktaturet i Egypt har vært et dystert kapittel i landets historie. Undertrykkelse, maktmisbruk og begrensning av friheter har preget det egyptiske samfunnet i flere tiår. Likevel er det håp i befolkningens kamp for frihet og demokrati. Egyptiske borgere har vist en utrettelig vilje til å kjempe for sine rettigheter og motstå undertrykkelse. Det er avgjørende at verdenssamfunnet støtter deres kamp og arbeider for å sikre et demokratisk Egypt der individuelle friheter og menneskerettigheter blir respektert.",

    norge: "Diktaturet i Egypt har vært et dystert kapittel i landets historie, preget av undertrykkelse, fengsling av politiske motstandere og begrensning av ytringsfriheten. Befolkningen har likevel vist en utrettelig vilje til å kjempe for frihet og demokrati. Det er viktig at verdenssamfunnet støtter deres kamp og arbeider for å sikre et demokratisk Egypt der individuelle friheter og menneskerettigheter blir respektert.\n\nSammenlignet med Egypt har Norge en helt annen politisk virkelighet. Norge har en lang tradisjon med demokrati og respekt for menneskerettigheter. Landet har et parlamentarisk konstitusjonelt monarki, der makten er delt mellom kongen, regjeringen og Stortinget. Dette systemet gir plass til politiske partier, ytringsfrihet og en sterk rettsstat.\n\nEgypt, derimot, har opplevd perioder med autoritært styre. Fra 1952 til 2011 var landet under militærstyre, først med Gamal Abdel Nasser, deretter Anwar Sadat og til slutt Hosni Mubarak. Disse lederne begrenset ytringsfriheten, undertrykte politiske motstandere og dominerte alle aspekter av samfunnet.\n\nSelv om Norge og Egypt begge har opplevd perioder med autoritært styre, er det viktige forskjeller. Norge har alltid hatt en sterk demokratisk tradisjon, der politiske rettigheter og individuell frihet er sentrale verdier. I Egypt har demokratiet vært mer skjørt, og befolkningen har måttet kjempe for å oppnå og bevare sine rettigheter.",

    kilder: [
        {
            title: "Confronting Fascism in Egypt: Dictatorship versus Democracy in the 1930s",
            source: "https://www.jstor.org/stable/10.7591/j.ctt1287vz5",
        },
        {
            title: "Dictatorship versus Democracy in the 1930s",
            source: "https://www.jstor.org/stable/10.7591/j.ctt1287vz5",

        },
        {
            title: "Egypt will remain a military dictatorship indefinitely. How I wish I am wrong.",
            source: "https://www.washingtoninstitute.org/policy-analysis/egypt-will-remain-military-dictatorship-indefinitely"
        }
    ]

}





document.addEventListener('DOMContentLoaded', function () {

    
    
    var tittel = document.getElementById('title');
    var intro = document.getElementById('intro');
    var opprinnelse = document.getElementById('origin');
    var samfunn = document.getElementById('societal');
    var hope = document.getElementById('hope');
    var norge = document.getElementById('norway');
    var avsluttning = document.getElementById('summary');
    var footer = document.getElementById('footer');
    
    var hero = document.getElementById('hero');


    tittel.innerHTML = content.tittel;
    intro.innerHTML = content.intro;
    opprinnelse.innerHTML = content.opprinelse;
    samfunn.innerHTML = content.sammfunsEffekt;
    hope.innerHTML = content.håp;
    norge.innerHTML = content.norge;
    avsluttning.innerHTML = content.konklusjon;




});
