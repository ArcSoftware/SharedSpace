module.exports = {
    name: 'SignInService',
    func: function($http) {
        
        return {

            showUsers: function(user_name){
                //return users;
                let u_name = {
                    userName: user_name.toLowerCase(),
                };
                console.log(user_name);
                $http.post('https://sharedspace.herokuapp.com/login', u_name);
               
            },
            
            getLoggedInUser: function() {
                let user;
                $http.get('https://sharedspace.herokuapp.com/user').then(function(response){
                  user=response.data.userName;
                  console.log(response.data);
                });
                 

         },

            // getUsers:function(user_name){
            //     $http.get('https://sharedspace.herokuapp.com/login', user_name).then(function(response){
            //            console.log(u_name);
            //     });
            // }
        }
    }   
}