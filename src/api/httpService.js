export default {
    //ajax请求
    async httpRequest(option = {}) {
        if (option.methods == 'GET' || option.methods == 'get') {
          return await axios.get(
            option.url, {
              params: option.data
            }
          )
        } else if (option.methods == 'POST' || option.methods == 'post') {
          return await axios.post(
            option.url, option.data
          )
        } else {
          console.log('method not allow!')
        }
    }
}
