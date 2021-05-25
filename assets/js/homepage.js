var getUserRepo = function() {
    fetch("https://api.github.com/users/octocat/repos");
    console.log("function was called");
};
getUserRepo();