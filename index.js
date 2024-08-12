const http = require('node:http')

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

http.createServer(async (req, res) => {
	console.info(`request at ${req.url}`);

	if (req.url === '/generate-eth') {
		res.writeHead(200, {
			"Content-Type": 'text/html',
		});
		res.end(html);
	} else {
		res.writeHead(404).end("404 buddy");	
	}
}).listen(2137, null);
