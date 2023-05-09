const scoreMap = ["love", "15", "30", "40"];

export function score(player1: number, player2: number) : string {

    if (player1 > player2) {

        if (player1 < 4) {
            return `${scoreMap[player1]} - ${scoreMap[player2]}`;
        }

        const diff = player1 - player2;

        if (diff > 1) {
            return "player 1 wins";
        }

        if (diff == 1) {
            return "advantage player 1";
        }

    } else if (player1 < player2) {

        if (player2 < 4) {
            return `${scoreMap[player1]} - ${scoreMap[player2]}`;
        }
        
        const diff = player2 - player1;

        if (diff > 1) {
            return "player 2 wins";
        }

        if (diff == 1) {
            return "advantage player 2";
        }
    }

    if (player1 > 2) {
        return "deuce";
    } else {
        return `${scoreMap[player1]} all`;
    }
    
}