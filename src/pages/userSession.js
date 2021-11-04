var UserProfile = (function() {
    var full_name = "";
  
    var getName = function() {

      return localStorage.getItem('displayName','userEmail');;    // Or pull this from cookie/localStorage
    };
  
    var setName = function(displayName,email) {
      localStorage.setItem('displayName',displayName,'userEmail', email);     
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