class _response {
    sendResponse = (res, data) => {
         try {
              if (data.code) {
                   res.status(data.code)

                   delete data.code

                   res.send(data)
                   return true
              }

              res.status(data && data.status ? 200:500)
              res.send(data)
         } catch (error) {
              console.log('sendResponse response helper Error', error)

              res.status(400).send({
                   status: false,
                   error
              })
         }
    }
}

module.exports = new _response()