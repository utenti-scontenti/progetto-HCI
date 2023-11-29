<script>
	import { base } from '$app/paths';
	import diagramma from '$lib/assets/diagramma.png';

</script>

## Componenti del gruppo

- Martina Missana
- Alessandro Fedele
- Dario Crosa
- Matteo Garzone
- Matteo Gatti
- Silvia Mosca

## Il nostro progetto

Mensa Express, "la mensa senza stress", è un sistema che permette di migliorare la fruizione del servizio mensa del Politecnico di Milano, in termini di tempistiche e di chiarezza delle indicazioni fornite. È costituito da un'applicazione per smartphone, indirizzata agli utenti che frequentano la mensa, e da una web app per lo staff che permette l'inserimento e la gestione del menù del giorno.

### Goal
L'obiettivo del nostro progetto è migliorare l'esperienza dell'utente che si approccia alla mensa:
* attraverso una gestione migliore dell'affluenza e dei pagamenti
* rendendo più accessibili informazioni prima poco esposte quali menù, prezzi e pacchetti

### Utenti target
Gli utenti target sono:
* studenti e docenti che frequentano la mensa più o meno regolarmente, in particolare quelli che preferiscono consumare un pasto completo, pur avendo poco tempo a disposizione
* lo staff del servizio mensa, sia chi si occupa di pianificare il menù del giorno e i vari pacchetti, sia quelli che si occupano di servire i piatti

### Contesto
La soluzione proposta copre tutte le mense del Politecnico di Milano nei campus Leonardo e Bovisa.

### Operazioni svolte dall'utente
L'utente "cliente" ha la possibilità di:
* visualizzare affluenze, orari, e locazione delle mense
* consultare menù e pacchetti (combinazioni di portate, es. primo+secondo+contorno)
* prenotare il pasto, selezionando l'orario che preferisce
* scegliere la modalità di pagamento (online o in cassa)
* decidere se mangiare in loco o prendere da asporto
* gestire e acquistare direttamente sull'app i carnet (insieme di buoni da spendere in mensa).

L'utente "staff" ha la possibilità di:
* gestire informazioni delle mense
* pianificare i menù (del giorno e futuri)
* gestire piatti, categorie di piatti e pacchetti

### Limitazioni
In termini di efficienza, la potenzialità del nostro sistema è direttamente proporzionale al numero di utenti che ne fanno uso.
Idealmente, gli utenti che sfruttano l'app si trovano a conoscere sia i tempi di servizio, sia il numero di persone che già sono in attesa, con un margine di errore basso.
In più, i cuochi sanno in anticipo cosa e quanto devono preparare.
Se però il numero di utenti che si ostina a fare la coda fisicamente resta molto maggiore rispetto al numero di utenti con app, allora la cucina avrà meno possibilità di prevedere le quantità di cibo e i piatti da cucinare, e quindi le latenze si alzano sia per gli utenti che scelgono di utilizzare l'app, sia per gli utenti che non la utilizzano.
Si evince quindi che, chi utilizza l'app per prenotare il cibo sarà in ogni modo avvantaggiato rispetto a coloro che svolgono l'intera procedura in cassa: in caso di alta affluenza, i secondi potrebbero dover aspettare molto in ben due code (una fisica per la cassa e una virtuale per il ritiro del cibo).

## I nostri task

### Task semplice * Documentarsi sulle mense
L'utente vuole informarsi sul servizio mensa che offre l'ateneo, perché ha bisogno di capire quale sia la mensa più adatta alle sue esigenze. L'obiettivo è discriminare le varie mense proposte e in base alle informazioni fornite decidere dove acquistare il pranzo desiderato.

L'utente svolge quindi le seguenti attività:
* visualizza una lista delle mense disponibili, ognuna con le relative informazioni di base, per esempio gli orari di apertura e l'ubicazione.
* visualizza dati statistici o in tempo reale relativi all'affluenza del servizio
* consulta i menù proposti dalle varie mense
* visualizza i piatti del giorno e i pacchetti disponibili, prestando anche attenzione agli ingredienti ed identificando eventuali allergeni.

### Task moderato -  Prenotare il pasto
L'utente prenota il suo pasto prima di recarsi in mensa. Il nostro prototipo gli permette di effettuare scelte consapevoli che riguardano tutti gli aspetti della prenotazione.
L'obiettivo è permettere di prenotare e pagare il pasto senza dover prima fare una coda fisica.

L'utente svolge i seguenti passi:
* scegliere la mensa basandosi sulle informazioni che vengono fornite (affluenza, orari, ubicazione...)
* consultare il menù e i pacchetti disponibili, visualizzando anche prezzi, ingredienti e allergeni
* selezionare pacchetti e/o piatti singoli
* scegliere l'orario di ritiro del pasto e la modalità (in loco o asporto)
* scegliere la modalità di pagamento, eventualmente utilizzando ticket e/o carnet
* visualizzare la propria posizione in coda e le istruzioni per il ritiro.

### Task complesso* Gestione del menù
Lo staff della mensa deve definire per ogni giorno il menù che presenterà agli utenti. I menù possono essere già stati proposti in passato oppure essere nuovi. Un menù può essere definito anche in anticipo, se già si conoscono i programmi futuri dell'attività.

Il responsabile dei menù può accedere alle informazioni sui menù e modificarle secondo la seguente procedura:
* specifica la data di applicazione del menù
* cerca nello storico dei menù una possibile configurazione compatibile a quella desiderata per il giorno corrente. Se la ricerca fallisce, il responsabile procede con l'inserimento dei piatti inclusi nel menù, coprendo quindi ogni categoria presente (primo, secondo, contorno, etc.)
* in caso di piatti non presenti nel sistema, si procederà con l'inserimento di questi, per poi includerli nel menù corrente.
* il responsabile può quindi confermare il menù, dopo aver controllato la correttezza delle informazioni inserite.

## Sistema per la gestione degli ordini
Abbiamo pensato di inserire nella documentazione uno schema che descriva l’esperienza dell’utente durante l’utilizzo del sistema per la prenotazione del pasto:

![Un flowchart che illustra le scelte che l'utente deve compiere per ordinare un pasto alla mensa]({diagramma} "Flowchart gestione ordini")
