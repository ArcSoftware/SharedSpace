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
                $http.post('http://sharedspace.herokuapp.com/login', u_name);

               
            }
        }
    }   
}