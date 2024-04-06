const { log } = require('console')
const http = require('http')
const url = require('url')
const file = require('./fsModule')
const ejs = require('ejs')
const fs = require('fs');

const server = http.createServer((request, response) => {
    let requestURL = url.parse(request.url, true)
    // log(requestURL) 
    // response.write(request.method) 
    // response.write(request.url) 
    switch (requestURL.pathname) {
        case '/create_file':
            let body = ''

            request.on('data', (chunk) => {
                body += chunk
            })
            request.on('end', () => {
                jsonData = JSON.parse(body)
                // console.log('Received data:', jsonData)
                file.createFile(jsonData.file_name, jsonData.file_content)
            })

            break
        case '/read_file':
            file.readFile(requestURL.query.file_name).then(data => {
                log(data)
            }).catch(err => {
                response(err)
            })
            break
        case '/reWriteFile':
            let appendbody = ''

            request.on('data', (chunk) => {
                appendbody += chunk
            })
            request.on('end', () => {
                jsonData = JSON.parse(appendbody)
                // console.log('Received data:', jsonData)
                file.reWriteFile(jsonData.file_name, jsonData.file_content).then((result) => {
                    if (result === 1) {
                        log('Content append successfully')
                    }
                }).catch((err) => {
                    log(err)
                })
            })

            break
        case '/delete_file':
            file.deleteFile(requestURL.query.file_name).then(data => {
                if (data === 1) {
                    log('File deleted successfully')
                }
            }).catch(err => {
                log(err)
            })
            break
        case '/':
            log('Hi')
            const data = {
                name: 'Dibakar'
            };

            // Render the EJS file
            ejs.renderFile('index.ejs', data, (err, renderedHtml) => {
                if (err) {
                    console.log(err);
                    return;
                }

                // Write the rendered HTML to a new file
                fs.writeFile('output.html', renderedHtml, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log('Output file generated: output.html');
                });
            });
            break
    }
    response.end()
}).listen(8000, () => {
    log('Server listening at 8000')
})

// server.listen(port, hostname, backlog, callback)