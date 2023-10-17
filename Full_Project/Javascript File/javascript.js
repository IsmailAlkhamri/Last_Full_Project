// Navigation Javascript: 
function ShowNavigation() {
    var navigation = document.getElementById("navigation");

    if (navigation.style.display == "none") {
      navigation.style.display = "block"; // Show the navigation
    } else {
      navigation.style.display = "none"; // Hide the navigation
    }
  }
// Likes Incerement Javascript :
function incrementLikes() {
    var likeCountElement = document.getElementById("likeCount");
    var currentLikes = parseInt(likeCountElement.innerText);
    var newLikes = currentLikes + 1;
    likeCountElement.innerText = newLikes;
  }

// Likes Decerement Javascript :
function decrementLikes() {
    var likeCountElement = document.getElementById("likeCount");
    var currentLikes = parseInt(likeCountElement.innerText);
    var newLikes = currentLikes - 1;
    likeCountElement.innerText = newLikes;
  }
 
  function incrementLikes2() {
    var likeCount = document.getElementById('likeCount2');
    var currentLikes = parseInt(likeCount.textContent);
    likeCount.textContent = currentLikes + 1;
  }
  
  function decrementLikes2() {
    var likeCount = document.getElementById('likeCount2');
    var currentLikes = parseInt(likeCount.textContent);
    likeCount.textContent = currentLikes - 1;
  }
  function incrementLikes3() {
    var likeCount = document.getElementById('likeCount3');
    var currentLikes = parseInt(likeCount.textContent);
    likeCount.textContent = currentLikes + 1;
  }
  
  function decrementLikes3() {
    var likeCount = document.getElementById('likeCount3');
    var currentLikes = parseInt(likeCount.textContent);
    likeCount.textContent = currentLikes - 1;
  }
  function incrementLikes4() {
    var likeCount = document.getElementById('likeCount4');
    var currentLikes = parseInt(likeCount.textContent);
    likeCount.textContent = currentLikes + 1;
  }
  
  function decrementLikes4() {
    var likeCount = document.getElementById('likeCount4');
    var currentLikes = parseInt(likeCount.textContent);
    likeCount.textContent = currentLikes - 1;
  }
          