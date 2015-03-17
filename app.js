(function() {

  return {

    requests: {

      getSessions: function() {
        return {
          url: '/api/v2/sessions.json',
          type: 'GET'
        };
      }
    },

    events: {
      'app.activated':'doSomething',
      'getSessions.done': 'getSessionsSuccess',
      'getSessions.fail': 'getSessionsFail'
    },

    doSomething: function() {
      this.ajax('getSessions');
      console.log('Getting all the active sessions...');
    },

    getSessionsSuccess: function(data) {
      console.log(data);
      console.log(data.sessions.length);

      for (var i = 0; data.sessions.length > i; i++) {
        console.log('Here\'s a session:');
        console.log(data.sessions[i]);
      };
    },

    getSessionsFail: function(data) {
      console.log(data);
    }
  };

}());
