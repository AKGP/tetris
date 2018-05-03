let App = {
    objects: {
        t: [
            [1, 1, 1],
            [0, 1, 0],
            [0, 1, 0]
        ],
        z: [
            [1, 1, 0],
            [0, 1, 0],
            [0, 1, 1]
        ],
        o: [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ],
        i: [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0]
        ],
        l: [
            [1, 0, 0],
            [1, 0, 0],
            [1, 1, 0]
        ]
    },
    rotateLeft: function(currObj) {
        let result = [];
        for (let i = 2; i >= 0; i--) {
            let temp = [];
            for (let j = 0; j < 3; j++) {
                temp.push(this.objects[currObj][j][i]);
            }
            result.push(temp);
        }
        console.log(result);
        this.objects[currObj] = result;
        return result;
    },
    rotateRight(currObj) {
        let result = [];
        for (let i = 0; i < 3; i++) {
            let temp = [];
            for (let j = 2; j >= 0; j--) {
                temp.push(this.objects[currObj][j][i]);
            }
            result.push(temp);
        }
        this.objects[currObj] = result;
        return result;
    }
}

module.exports = App;