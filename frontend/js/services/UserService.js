module.exports = {
  name: 'UserService',
  func: function ($http) {
    
    return {
      getUsers: function () {

        let users = [];
    $http.get('https://sharedspace.herokuapp.com/userPoints').then(function (response) {
      for (let i = 0; i < response.data.length; i++) {

        users.push({
          id: response.data[i].id,
          userName: response.data[i].userName,
          points: response.data[i].points,
        })
      }
    },
    )
        return users;
      }
    }
  }
};