<script>
	import { base } from '$app/paths';

  import Prose from '$lib/Prose.svelte'
  import Attachment from '$lib/Attachment.svelte';
	import PdfAttachment from '$lib/PdfAttachment.svelte';

  import Header from './Header.svelte'
</script>

<Header />

<Prose>

## Chi siamo

- Martina Missana
- Alessandro Fedele
- Dario Crosa
- Matteo Garzone
- Matteo Gatti
- Silvia Mosca

## Il nostro progetto

Mensa Express, "la mensa senza stress", è un sistema che permette di migliorare la fruizione del servizio mensa del Politecnico di Milano, in termini di tempistiche e di chiarezza delle indicazioni fornite. È costituito da un'applicazione per smartphone, indirizzata agli utenti che frequentano la mensa, e da una web app per lo staff che permette l'inserimento e la gestione del menù del giorno.

## La presentazione finale

Questa è la presentazione che abbiamo mostrato alla fine del progetto, riassume tutto il suo svoglimento dall'ideazione, alla progettazione, alla valutazione con gli utenti.

</Prose>

<div class="container not-prose mx-auto my-8 px-8">
	<PdfAttachment
		src="{base}/finale/Utenti Scontenti - Presentazione finale.pdf"
		fileName="Utenti Scontenti - Presentazione finale.pdf"
	/>
</div>

<Prose>

È possibile scaricare i video incorporati all'interno della presentazione nella [pagina dedicata]({base}/finale).

## Video dimostrativo

In questo video facciamo un tour dell'applicazione per gli utenti della mensa:

1. facciamo l'ordinazione di un pasto
1. visualizziamo i carnet disponibili
1. mostriamo la pagina personale dell'utente

</Prose>

<video class="mx-auto max-w-full" src="{base}/video/video-home.mp4" controls muted></video>

<Prose>

## Prototipi interattivi

Durante il corso abbiamo realizzato dei prototipi interattivi per le nostre applicazioni

- sia al fine di mostrare le nostre idee ai docenti
- sia per poterle testare con gli utenti:

I prototipi sono stati realizzati con [Figma](https://www.figma.com/), e sono visualizzabili ai seguenti indirizzi:

- [app per gli utenti](https://www.figma.com/file/UtT6J5iYG28s5QoHHWg1Ft/Prototipo-App---Finale?type=design&node-id=0%3A1&mode=design&t=0hReo74JAA38quXP-1)
- [webapp per lo staff](https://www.figma.com/file/PvS2Dqjjw9kSbOMAVSGzWj/Prototipo-WebApp---Finale?type=design&node-id=0%3A1&mode=design&t=TgpntQE7Ovbjmf1H-1)

</Prose>
