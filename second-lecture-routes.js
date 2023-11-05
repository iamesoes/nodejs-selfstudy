const fs = require('fs');

const requestHandler = (req, res) =>{

    const url =req.url;
    const method = req.method;

    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>First Page</title></head>');
        res.write('<body><form action="/message" method="POST" ><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    
    if(url === '/message'&& method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            //console.log(chunk);
            body.push(chunk);
        });
        // add return here so that it wont execute later lines in this createserver function 
        return req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            //thanks to sync it will block code execution until this file is created
            //so it is better to use writeFile because file can be large. we should not wait 
            //fs.writeFileSync('message.txt', message);
            //we can handle error
            fs.writeFile('message.txt', message, err =>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            })
            
        });
        
        
    }
    //if we remove return statement from req.on, this will be executed. because of the callback function logic 
    res.write('<html>');
    res.write('<head><title>First Page</title></head><body><h1>Hello!</h1></body>');
    res.write('</html>');
    res.end();
}

//there is two way for defining exports. first way
//module keyword is not necessary for nodejs
module.exports = requestHandler;
module.exports.someText = "dummy text";

//second way
// exports = {
//     handler: requestHandler,
//     someText: "dummy text"
// };

