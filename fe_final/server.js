// let express = require('express');
// let app = express();

// // http://localhost:3000/api/getList 에 컨트롤러 매핑
// app.get('/api/getList', function (req, res) {
//     res.send('api getList');
// });

// app.listen(3000);
let express = require("express");
let app = express();
let client_id = "RiYoeXYshr8epmEGW17C";
let client_secret = "EObdCw0ukR";
app.get("/search/news", function (req, res) {
  let api_url =
    "https://openapi.naver.com/v1/search/news.json?query=" +
    encodeURI(req.query.query); // json 결과
  //   let api_url = 'https://openapi.naver.com/v1/search/blog.xml?query=' + encodeURI(req.query.query); // xml 결과
  let request = require("request");
  let options = {
    url: api_url,
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});
app.listen(3000, function () {
  console.log(
    "http://127.0.0.1:3000/search/news.json?query=검색어 app listening on port 3000!"
  );
});
