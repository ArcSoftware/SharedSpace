module.exports = {
    name: 'LogoutService',
    func: function($http) {
        
        return {
            logout: function(){
                $http.post('https://sharedspace.herokuapp.com/logout');
                console.log('sucussful logout');

            }
        }
    }   
}