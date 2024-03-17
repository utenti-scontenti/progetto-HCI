<script>
	import { base } from '$app/paths';
	import Prose from '$lib/Prose.svelte';
	import PdfAttachment from '$lib/PdfAttachment.svelte';
</script>

<Prose>

# Consegna 6: Usability Testing e Prototipo High Fidelity

Link ai protipi finali:

- [app per gli utenti](https://www.figma.com/file/UtT6J5iYG28s5QoHHWg1Ft/Prototipo-App---Finale?type=design&node-id=0%3A1&mode=design&t=0hReo74JAA38quXP-1)
- [webapp per lo staff](https://www.figma.com/file/PvS2Dqjjw9kSbOMAVSGzWj/Prototipo-WebApp---Finale?type=design&node-id=0%3A1&mode=design&t=TgpntQE7Ovbjmf1H-1)

Alleghiamo qui sotto:

- documenti relativi allo user testing:
  - presentazione su procedura, risultati e raccomandazioni finali
  - questionario anagrafico
  - script
  - tabella indici di successo
- report sulle modifiche apportate al protitipo finale in seguito alla valutazione euristica

</Prose>

<div class="container mx-auto my-8 px-8">
	<PdfAttachment
		src="{base}/consegne/compito6/Utenti Scontenti - Presentazione compito 6.pdf"
		fileName="Utenti Scontenti - Presentazione compito 6.pdf"
	/>
</div>

<div class="container mx-auto my-8 px-8">
	<PdfAttachment
		src="{base}/consegne/compito6/Utenti Scontenti - Questionario anagrafico.pdf"
		fileName="Utenti Scontenti - Questionario anagrafico.pdf"
	/>
</div>

<div class="container mx-auto my-8 px-8">
	<PdfAttachment
		src="{base}/consegne/compito6/Utenti Scontenti - Script.pdf"
		fileName="Utenti Scontenti - Script.pdf"
	/>
</div>

<div class="container mx-auto my-8 px-8">
	<PdfAttachment
		src="{base}/consegne/compito6/Utenti Scontenti - Indici di successo.pdf"
		fileName="Utenti Scontenti - Indici di successo.pdf"
	/>
</div>

<div class="container mx-auto my-8 px-8">
	<PdfAttachment
		src="{base}/consegne/compito6/Utenti Scontenti - Report correzioni.pdf"
		fileName="Utenti Scontenti - Report correzioni.pdf"
	/>
</div>
