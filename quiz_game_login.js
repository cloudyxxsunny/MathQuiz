function addUser()
{
    var user1 = document.getElementById("player1name").value;
    var user2 = document.getElementById("player2name").value;

    localStorage.setItem("username1",user1);
    localStorage.setItem("username2",user2);

    window.location.replace("quiz_game_page.html");
}