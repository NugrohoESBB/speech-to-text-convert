var btn = document.querySelector('.btn')
btn.addEventListener('click', (ea) =>{
	btn.classList.add('fade')

	let recognition = new webkitSpeechRecognition()
	/*Jika ingin bahasa inggris*/
	/*recognition.lang = 'en-gb'*/
	/*Jika ingin bahasa indonesia*/
	recognition.lang = 'in'
	recognition.addEventListener('result', (e) =>{
		document.querySelector('.text').value = e.results[0][0].transcript
		btn.classList.remove('fade')
	})
	recognition.start()
})