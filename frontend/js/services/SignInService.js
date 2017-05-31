module.exports={
    name:'SignInService',
    func: function($http){
<<<<<<< HEAD
        //let users=[];
        
        return {
=======
       
        return{
>>>>>>> d8be259efb7db341e84bf90d46831ac66d48d5b7

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