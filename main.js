// Wskazówki
// Pobierz odpowiednie elementy.

// Stwórz funkcję, będzie sprawdzała, czy wszystkie pola zostały uzupełnione. Jeśli nie, pokaż błąd. Jeśli tak, wywołaj kolejną funkcję, która zajmie się obliczaniem rachunku.

// Funkcja obliczająca rachunek musi przechwycić dane z input i select oraz wykonać działanie wg wzoru:

// (kwota do zapłaty + (kwota do zapłaty * napiwek)) / ilość osób

// Wynik działania wypisz w odpowiednim paragrafie. Nie zapomnij zaokrąglić kwoty do dwóch miejsc po przecinku!



// Podpowiedzi do wskazówek
// Musimy pobrać:

// inputy (kwota do zapłaty, ilość osób),

// select z napiwkiem,

// przycisk,

// paragraf do wyświetlania błędu,

// paragraf i span do wyświetlania wyniku.



// Instrukcja warunkowa if nada się do tego zadania idealnie. ;)



// Jeśli pojawi się problem z obliczeniami, sprawdź, czy na pewno operujesz na liczbach, a nie np. na stringach. ;)

const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const button = document.querySelector('.count')
const error = document.querySelector('.error')
const p = document.querySelector('.cost-info')
const span = document.querySelector('.cost')


