module.exports = {
    name: 'LogoutService',
    func: function($http) {
        
        return {
            logout: function(){
                $http.post('https://sharedspace.herokuapp.com/logout', { withCredentials: true });
                console.log('sucussful logout');
            }
        }
    }   
}