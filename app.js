const express = require('express');
const app = express();

/*app.get('', (req, res)=>{
	res.send('Home');
});*/
app.set('view engine', 'ejs');

app.use('', require('./router'));


app.listen(3000, () =>{
	console.log('Server ejecutandose en http://localhost:3000');
});