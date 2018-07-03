const express = require("express");
const app = express();

const PORT = 81;

app.get('/api/customers', (req, res) => {
	const customers = [
		{id: 1, firstName: 'Luke', lastName: 'folarin', gender: 'Male'},
		{id: 2, firstName: 'Ademola', lastName: 'Hales', gender: 'Female'},
		{id: 3, firstName: 'Dimateo', lastName: 'Ogu', gender: 'Male'},
		{id: 4, firstName: 'Nneka', lastName: 'Wilson', gender: 'Female'},
	];
	res.json(customers);
});

app.listen(PORT, () => console.log(`Listen to port: ${PORT}`))