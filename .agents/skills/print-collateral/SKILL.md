---
name: print-collateral
description: Guide och arbetsflöde för att designa och producera tryckfärdigt material (A4-flyers, 9:16 showroom-skyltar, broschyrer, produktblad) med pixel- och millimeterprecision i webbläsare/Astro.
---

# Principer och Arbetsflöde för Tryckt Material & Digital Signage (Print Collateral)

När du skapar tryckt marknadsföringsmaterial, produktblad, A4-flyers eller digitala storformatsaffischer (t.ex. CleverLive 9:16 i showroom) för ELPROJEKT ska du följa dessa tekniska och designmässiga principer:

---

## 1. Format-Standarder & Utskriftskonfiguration

### A. A4 Porträtt (Flyers & Informationsblad - 210 × 297 mm)
- **Fasta mått & marginaler:** Använd `210mm × 297mm` med `max-height: 297mm`, `overflow: hidden` och `box-sizing: border-box`.
- **Säkerhetsmarginal:** Behåll en ren vit ytterkant (`padding: 10mm 12mm`) så att fysiska skrivare inte klipper i grafik eller text.
- **Vertikal millimeterbudget:** Summera sektionernas höjd i millimeter så att innehållet garanterat ryms på **exakt 1 sida** utan oönskat spill till sida 2.

### B. 9:16 Porträtt (Showroom-skärmar, CleverLive & Storformatsaffisch - 68 × 120 cm / 216 × 384 mm)
- **Exakt 9:16-proportion:** `@page { size: 216mm 384mm; margin: 0; }`
- **1-till-1 Skalning med Container Units (`cqw` / `cqh`):**
  - Undvik `clamp()` med fasta pixelgränser (`clamp(18px, 4cqw, 30px)`), eftersom webbläsarens utskriftsmotor beräknar DPI annorlunda vid export vilket gör att proportionerna förändras mellan skärm och PDF.
  - **Lösning:** Använd `container-type: size;` på containern och ange all typografi, paddings och komponentbredder i **rena linjära procentenheter (`cqw` och `cqh`)**:
    - Logotyp: `width: 76cqw;`
    - Huvudrubrik: `font-size: 5.6cqw; line-height: 1.15;`
    - Brödtext: `font-size: 2.7cqw; line-height: 1.45;`
    - Tjänstelista: `font-size: 2.7cqw; gap: 2.2cqh;`
    - Små punkter: `width: 1.3cqw; height: 1.3cqw; bg-elblue`
    - Footer & kontakt: `padding: 5cqh 7cqw; font-size: 2.8cqw;`
    - QR-box: `width: 20.5cqw;`
  - Detta garanterar att **PDF-exporten blir en 100,00 % identisk matematisk klon** av vyn i webbläsaren.

---

## 2. Gemensamma CSS- och Utskriftsdirektiv
```css
@media print {
  html, body {
    margin: 0 !important;
    padding: 0 !important;
    background: #ffffff !important;
    overflow: hidden !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  .no-print {
    display: none !important;
  }
  .poster-container, .flyer-page {
    border-radius: 0 !important;
    box-shadow: none !important;
    overflow: hidden !important;
    page-break-after: avoid !important;
    page-break-inside: avoid !important;
  }
}
```

---

## 3. Visuell Design & Varumärkesidentitet

### A. Key Visual & Hero-estetik (Showroom & Storformat)
- **Ren bakgrundsbild utan tunga overlays:** Använd verkliga foton (`hero-right.JPG`) med full utzoomning och vänsterjustering (`object-cover object-left`), utan mörka eller mjölkvita övertoningar som dämpar bildens naturliga kontrast.
- **Centrerad, stor logotyp i toppen:** Ge logotypen tydlig prioritet (`w-[76%]`) med generös luft under (`pb-[3%]`) innan texten tar vid.
- **Kärnfull text:**
  - Huvudtagline: *"Moderna lösningar, personlig service."* i ELPROJEKT:s blå primärfärg (`#003ca6`).
  - Hero-budskap: *"Jag finns vid din sida genom hela projektet – från första idén till färdig installation..."*
  - Avskalad tjänstelista med 4 fokusområden och diskreta blå punkter (`bg-elblue`):
    1. Solenergi & Batterilagring
    2. Laddboxar & Lastbalansering
    3. Elinstallation & Service
    4. Renovering & Nybygge

### B. A4 Marknadsflyers (Direktreklam & Utskick)
- **Mänskligt ansikte:** Placera alltid elektrikerns/grundarens profilbild (Alexander i ren cirkel med brandad orange kant) vid kontaktsektionen för att personifiera tjänsten.
- **Integrerade 1:1 kvadratiska bildkort:** Kombinera foto och tjänstebeskrivning i 1:1 kvadratiska bildkort med mjuk botten-gradient (`bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent`) istället för separata collager eller textrutor.
- **Avskalad renhet:** Undvik färgglada badges och ikoner i samma vy – låt stark typografi, logotyp och verkliga fotografier tala.

---

## 4. QR-kodens Roll, Design & Spårning
- **Interaktivt mervärde:** Eftersom kontaktuppgifter redan står i klartext på trycksaken ska QR-koden erbjuda mervärde online (*"Erbjudanden & Inspiration"*, kalkyler eller showroom-underlag).
- **Färgmatchning:** 
  - I mörka footers: Generera QR-koden med mörk slate (`#0f172a`) på vit bakgrundsplatta för harmonisk och elegant kontrast.
- **Tekniskt format:** Generera alltid som 300–400 DPI PNG Data URL via `QRCode.toDataURL` med `margin: 1` för att undvika CSS-konflikter och säkerställa omedelbar avläsning med mobilkamera.
- **Spårning:** Länka alltid till dedikerade landningssidor med källparametrar:
  - Flyer: `https://elprojekt.nu/qr?src=flyer`
  - Showroom: `https://elprojekt.nu/qr?src=showroom`
