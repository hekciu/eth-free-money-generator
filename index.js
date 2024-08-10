const express = require('express');

const app = express();
const url = 'http://www.youtube.com/watch?v=nLx-ZWkzIEI';

const html = `
	<head>
		<title>Ethereum generative bot (FREE)</title>	
	</head>
	<body>
		<script>
			window.location = "${url}";
		</script>
	</body>
`;

app.get('/generate-eth', (_, res, __) => {
	res.send(html);
})
app.listen(2137, () => {
	console.info('app is running I guess');
});
