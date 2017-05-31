module.exports={
    name:'SignInService',
    func: function($http){
       
        return{

            showUsers: function(user_name){
                   console.log('hello');
                //return users;
                let u_name={
                    userName: user_name,
                };
                console.log(user_name);
                $http.post('http://192.168.1.4:8080/login', u_name);

               
            }
        }
    }   
}