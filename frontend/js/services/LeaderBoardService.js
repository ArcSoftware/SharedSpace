module.exports= {
    name: 'LeaderBoardService',
    func: function($http){
        let leadUsers=[];
        $http.get('http://sharedspace.herokuapp.com/userPoints').then(function(response){
            for(let i=0; i<response.data.length;i++){
                leadUsers.push({
                    id:response.data[i].id,
                    userName:response.data[i].userName,
                    points:response.data[i].points,
                })
            }
        });
        return {
            getLeadUsers:function(){
                return leadUsers;
            }
        }
    }
}