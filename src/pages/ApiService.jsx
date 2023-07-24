


export default class APIService {
    
    static UpdateArticle(article_id, body, token) {

     return fetch(`http://127.0.0.1:8000/api/tours/${article_id}/`, {
        'method':'PUT',
        headers: {
            'Content-Type':'application/json',
            "Authorization" : `Token ${token}` 
          }, 
          body:JSON.stringify(body)

     }).then(resp => resp.json())


    }

    static InsertArticle(body, token) {
      
      return fetch('http://127.0.0.1:8000/api/tours/', {
        method:'POST',
        headers: {
            // 'Content-Type':'application/json',
            'Authorization':`Token ${token}`
          }, 
          body:body

      }).then(resp => resp.json())
      .then((data) => {
        if (!data.payload && data.error) {
          alert(data.error);
          throw "Error";
        } else {
          return data.payload;  
        }
      })
      .catch(err => {
        console.log(err)
      });

    }

    static DeleteArticle(article_id, token) {

      return fetch(`http://127.0.0.1:8000/api/tours/${article_id}/`, {
        'method':'DELETE',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
          }

     })

    }

    static LoginUser(body, token) {

      return fetch('http://127.0.0.1:8000/auth/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}`
          }, 
          body:JSON.stringify(body)

      }).then(resp => resp.json())

    }


    static RegisterUser(body, token) {

      return fetch('http://127.0.0.1:8000/api/users/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}`
          }, 
          body:JSON.stringify(body)

      }).then(resp => resp.json())

    }


    static Customer(body) {

      return fetch('http://127.0.0.1:8000/api/customers/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            // Authorization: "Token 8684266ddbbab0c76bc311f971d5a50901ae0c62",
          }, 
          body:JSON.stringify(body)

      }).then(resp => resp.json())

    }

    static Order(body, token) {
      
      return fetch('http://127.0.0.1:8000/api/order/', {
        method:'POST',
        headers: {
            // 'Content-Type':'application/json',
            'Authorization':`Token ${token}`
          }, 
          body:body

      }).then(resp => resp.json())
      .then((data) => {
        if (!data.payload && data.error) {
          alert(data.error);
          throw "Error";
        } else {
          return data.payload;  
        }
      })
      .catch(err => {
        console.log(err)
      });

    }


}