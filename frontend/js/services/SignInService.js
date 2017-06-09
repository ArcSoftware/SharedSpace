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
                $http.post('https://sharedspace.herokuapp.com/login', u_name, { withCredentials: true });
               
            },

            isLoggedIn: function() {
                return $http.get('https://sharedspace.herokuapp.com/user', { 
                    withCredentials: true,
                    transformResponse: [function (data) {
                        return data;
                    }]
                }).then(function(response) {
                    if (response.data === '') { // check null too
                        console.log('not signed in');
                        return false;
                    } else {
                        console.log('signed in'); // get signed in user
                        return true;
                    }
                })
            }
        }
    }   
}