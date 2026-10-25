//unos podataka
let ime=prompt("ime:");
let cijena_ulaznice=Number(prompt("cijena:"));
let broj_ulaznica=Number(prompt("broj ulaznica:"));
let budžet=Number(prompt("budžet:"));

//izračun i usporedbe
let ukupni_trošak=cijena_ulaznice*broj_ulaznica;
let preostali_iznos=ukupni_trošak-budžet;
