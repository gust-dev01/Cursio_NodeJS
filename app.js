import e from "express";

 const api = e();

api.get('/helloworld', (req, resp) => {
    resp.send('Hello World');
})


 api.listen(5010, () => console.log("API subiu com sucesso!"));