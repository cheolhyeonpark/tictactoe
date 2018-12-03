var map = new Array();
map[0] = new Array();
map[1] = new Array();
map[2] = new Array();

var human = -1;
var turn = -1;
var cnt = 0;
var level = 1;

reset();
function reset() {
    cnt = 0;
    level = document.getElementById("difficulty").value;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            map[i][j] = 0;
            document.getElementById("map-" + i + "-" + j).classList.remove('circle');
            document.getElementById("map-" + i + "-" + j).classList.remove('cross');
        }
    }
    if (document.getElementById("player").value == 'playerO') {
        turn = -1;
        human = -1;
    } else {
        turn = -1;
        human = 1;
        computerTurn();
    }
}

var clickStartBtn = document.getElementById("startBtn");
clickStartBtn.addEventListener('click', function () {
    reset();
});

var gameboard = document.getElementsByClassName("gameboard");

for (var i = 0; i < gameboard.length; i++) {
    gameboard[i].addEventListener('click', function () {
        var x = 0;
        var y = 0;
        x = parseInt(this.id.split('-')[1]);
        y = parseInt(this.id.split('-')[2]);
        if (map[x][y] != 0) {
            return;
        } else {
            map[x][y] = turn;
        }
        var target = document.getElementById(this.id);
        circleorcross(target);
        turn *= -1;
        cnt++;
        checkWinner(-1);
    });
}

function circleorcross(target) {
    if (turn == -1) {
        target.classList.add('circle');
    } else {
        target.classList.add('cross');
    }
}

function checkWinner(play) {

    setTimeout(function () {
        var winner = checkWin();
        if (winner != 0) {
            if (winner == human) {
                alert("You win!");
            } else {
                alert("You lose!")
            }
            reset();
        } else if (cnt >= 9) {
            alert("draw");
            reset();
        } else {
            if (play == -1) {
                computerTurn();
            }
        }
    }, 500);
}

function checkWin() {
    if (map[0][0] != 0 && map[0][0] == map[0][1] && map[0][1] == map[0][2]) return map[0][0];
    else if (map[1][0] != 0 && map[1][0] == map[1][1] && map[1][1] == map[1][2]) return map[1][0];
    else if (map[2][0] != 0 && map[2][0] == map[2][1] && map[2][1] == map[2][2]) return map[2][0];
    else if (map[0][0] != 0 && map[0][0] == map[1][0] && map[1][0] == map[2][0]) return map[0][0];
    else if (map[0][1] != 0 && map[0][1] == map[1][1] && map[1][1] == map[2][1]) return map[0][1];
    else if (map[0][2] != 0 && map[0][2] == map[1][2] && map[1][2] == map[2][2]) return map[0][2];
    else if (map[0][0] != 0 && map[0][0] == map[1][1] && map[1][1] == map[2][2]) return map[0][0];
    else if (map[0][2] != 0 && map[0][2] == map[1][1] && map[1][1] == map[2][0]) return map[0][2];
    else return 0;
}

function computerTurn() {
    if (level == 1) {
        level1();
    } else if (level == 2) {
        level2();
    } else {
        level3();
    }
    turn *= -1;
    cnt++;
    checkWinner(1);
}

function level1() {
    var x = Math.floor(Math.random() * 3);
    var y = Math.floor(Math.random() * 3);
    while (map[x][y] != 0) {
        x = Math.floor(Math.random() * 3);
        y = Math.floor(Math.random() * 3);
    }
    circleorcross(document.getElementById("map-" + x + "-" + y));
    map[x][y] = turn;
}

function level2() {
    if (cnt < 2) {
        level(1);
    }
    else if (map[0][0] == 0 && map[0][1] == map[0][2]) {
        map[0][0] = turn;
        circleorcross(document.getElementById("map-0-0"));
    }
    else if (map[0][1] == 0 && map[0][0] == map[0][2]) {
        map[0][1] = turn;
        circleorcross(document.getElementById("map-0-1"));
    }
    else if (map[0][2] == 0 && map[0][1] == map[0][0]) {
        map[0][2] = turn;
        circleorcross(document.getElementById("map-0-2"));
    }
    else if (map[1][0] == 0 && map[1][1] == map[1][2]) {
        map[1][0] = turn;
        circleorcross(document.getElementById("map-1-0"));
    }
    else if (map[1][1] == 0 && map[1][0] == map[1][2]) {
        map[1][1] = turn;
        circleorcross(document.getElementById("map-1-1"));
    }
    else if (map[1][2] == 0 && map[1][1] == map[1][0]) {
        map[1][2] = turn;
        circleorcross(document.getElementById("map-1-2"));
    }
    else if (map[2][0] == 0 && map[2][1] == map[2][2]) {
        map[2][0] = turn;
        circleorcross(document.getElementById("map-2-0"));
    }
    else if (map[2][1] == 0 && map[2][0] == map[2][2]) {
        map[2][1] = turn;
        circleorcross(document.getElementById("map-2-1"));
    }
    else if (map[2][2] == 0 && map[2][1] == map[2][0]) {
        map[2][2] = turn;
        circleorcross(document.getElementById("map-2-2"));
    }
    else if (map[0][0] == 0 && map[1][0] == map[2][0]) {
        map[0][0] = turn;
        circleorcross(document.getElementById("map-0-0"));
    }
    else if (map[1][0] == 0 && map[0][0] == map[2][0]) {
        map[1][0] = turn;
        circleorcross(document.getElementById("map-1-0"));
    }
    else if (map[2][0] == 0 && map[1][0] == map[0][0]) {
        map[2][0] = turn;
        circleorcross(document.getElementById("map-2-0"));
    }
    else if (map[0][1] == 0 && map[1][1] == map[2][1]) {
        map[0][1] = turn;
        circleorcross(document.getElementById("map-0-1"));
    }
    else if (map[1][1] == 0 && map[0][1] == map[2][1]) {
        map[1][1] = turn;
        circleorcross(document.getElementById("map-1-1"));
    }
    else if (map[2][1] == 0 && map[1][1] == map[0][1]) {
        map[2][1] = turn;
        circleorcross(document.getElementById("map-2-1"));
    }
    else if (map[0][2] == 0 && map[1][2] == map[2][2]) {
        map[0][2] = turn;
        circleorcross(document.getElementById("map-0-2"));
    }
    else if (map[1][2] == 0 && map[0][2] == map[2][2]) {
        map[1][2] = turn;
        circleorcross(document.getElementById("map-2-2"));
    }
    else if (map[2][2] == 0 && map[1][2] == map[0][2]) {
        map[2][2] = turn;
        circleorcross(document.getElementById("map-2-2"));
    }
    else if (map[0][0] == 0 && map[1][1] == map[2][2]) {
        map[0][0] = turn;
        circleorcross(document.getElementById("map-0-0"));
    }
    else if (map[1][1] == 0 && map[0][0] == map[2][2]) {
        map[1][1] = turn;
        circleorcross(document.getElementById("map-1-1"));
    }
    else if (map[2][2] == 0 && map[1][1] == map[0][0]) {
        map[2][2] = turn;
        circleorcross(document.getElementById("map-2-2"));
    }
    else if (map[0][2] == 0 && map[1][1] == map[2][0]) {
        map[0][2] = turn;
        circleorcross(document.getElementById("map-0-2"));
    }
    else if (map[1][1] == 0 && map[0][2] == map[2][0]) {
        map[1][1] = turn;
        circleorcross(document.getElementById("map-1-1"));
    }
    else if (map[2][0] == 0 && map[1][1] == map[0][2]) {
        map[2][0] = turn;
        circleorcross(document.getElementById("map-2-0"));
    }
    else level1();
}

function level3() {
    if (cnt < 2) {
        level1();
    } else {
        var x = 0;
        var y = 0;
        var max = -100;
        var ret = 0;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (map[i][j] != 0) continue;
                map[i][j] = turn;
                ret = repeat(turn * -1);
                map[i][j] = 0;
                if (max < ret) {
                    max = ret;
                    x = i;
                    y = j;
                }
            }
        }
        circleorcross(document.getElementById("map-" + x + "-" + y));
        map[x][y] = turn;
    }
}

function repeat(play, depth) {
    var ret = 0;
    ret = checkWin();
    if (ret == human) return -1;
    else if (ret == 0) {
        ret = 0;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (map[i][j] != 0) continue;
                map[i][j] = play;
                ret += repeat(play * -1);
                map[i][j] = 0;
            }
        }
        return ret;
    } else {
        return 1;
    }
}