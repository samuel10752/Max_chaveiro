function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Max Chaveiro',
			text: 'Cópia de chaves, instalação de fechaduras, reparo de fechaduras, abertura de portas trancadas e muito mais.',
			url: 'https://maxchaveiro.lovestoblog.com',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}