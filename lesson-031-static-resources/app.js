'use strict'

let express = require('express')

let app = express()

app.set('port', 8000)
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  let template = 'main'
  let data = {
    title: 'Khung làm việc Express',
    subtitle: 'Phục vụ static file',
    content: 'Chúng ta không phải làm quá nhiều việc (theo triết lý "những việc lặp lại ' +
    'thì phải được triển khai theo một cách rất dễ dùng"). Chỉ cần chỉ cho express biết "' +
    'nơi nào chứa các file static", express sẽ làm các việc còn lại: tự tạo ra các route ' +
    'và phục vụ các file static ấy. Chúng ta sẽ làm rõ cách dùng này bằng các commit trong ' +
    'bài này!' +
    '")'
  }
  res.status(200).render('main', data)
})

app.listen(app.get('port'), () => {
  console.log(`app started at http://localhost:${app.get('port')}`)
})