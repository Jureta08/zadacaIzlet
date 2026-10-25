//unos podataka
let ime=prompt("ime:");
let cijena_ulaznice=Number(prompt("cijena:"));
let broj_ulaznica=Number(prompt("broj ulaznica:"));
let budžet=Number(prompt("budžet:"));

//izračun i usporedbe
let ukupni_trošak=cijena_ulaznice*broj_ulaznica;
let preostali_iznos=ukupni_trošak-budžet;

let jednak_budžet=budžet>=ukupni_trošak;
let veci_budžet= budžet===ukupni_trošak;

//ispis rezultata
let nastavi=confirm("Želiš li nastaviti s planiranjem izleta?");
alert("Ime: " + ime +
    "\nUkupni trošak: " + ukupni_trosak +
    "\nPreostali iznos: " + preostali_iznos +
    "\nBudžet je dovoljan: " + veci_budžet +
    "\nBudžet je točno jednak trošku: " + jednak_budžet +
    "\nŽeliš nastaviti: " + nastavi);