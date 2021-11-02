var UserProfile = (function() {
    var full_name = "";
  
    var getName = function() {

      return localStorage.getItem('userEmail');;    // Or pull this from cookie/localStorage
    };
  
    var setName = function(email) {
      localStorage.setItem('userEmail', email);     
      // Also set this in cookie/localStorage
    };
  
    var signOut = function() {
        localStorage.clear();     
        // Also set this in cookie/localStorage
      };

    return {
      getName: getName,
      setName: setName,
      signOut: signOut
    }
  
  })();
  
  export default UserProfile;