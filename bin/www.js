var app = require('../index');
var port = 3001;

app.listen(port, () => {
    console.log(`express 실행 localhost: ${port}`);
})