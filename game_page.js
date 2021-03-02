player_name1 = localStorage.getItem(player_name1);
console.log(player_name1);
player_name2 = localStorage.getItem(player_name2);

player1score = 0;
player2score = 0;

document.getElementById("player_name1").innerHTML = "Arnav"
document.getElementById("player_name2").innerHTML = player_name2 + " : ";

document.getElementById("player1score").innerHTML = player1score;

document.getElementById("player2score").innerHTML = player2score;


document.getElementById("player_question").innerHTML = "Question Turn - " + player_name1;
document.getElementById("player_answer").innerHTML = " Answer Turn - " + player_name2;

function send() {
    console.log("Test")
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Word In Lower Case = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length2 = Math.floor(word.length / 2);
    charAt2 = word.charAt(length2);
    console.log(charAt2);

    lengthminus = word.length - 1;
    charAt3 = word.charAt(lengthminus);
    console.log(charAt3);

    removec1 = word.replace(charAt1, "_");
    removec2 = removec1.replace(charAt2, "_");
    removec3 = removec2.replace(charAt3, "_");

    Qw = "<h4 id='word_diplay'>Q . " + removec3 + "</h4>";
    ib = "<br> answer: <input type='text' id='input_check_box'>";
    cb = "<br><br> <button class= 'btn btn-info' onclick='check()'> Check </button>";
    row = Qw + ib + cb;

    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}

question_turn = "player1";
answer_turn = "player2";


function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case - " + answer);
    if (answer == word) {
        if (answer_turn == "player1") {
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML = player1score;
        } else {
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML = player2score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player_name2;
    } else {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player_name1;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_name2;
    } else {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_name1;
    }
    document.getElementById("output").innerHTML = "";
}