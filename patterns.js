function pattern1() {
    for (let i = 0; i < 4; i++) {

        let row = "";

        for (let j = 0; j < 4; j++) {

            row += "* ";
        }

        console.log(row);
    }
}

function pattern2() {
    for (let i = 0; i < 5; i++) {

        let row = "";

        for (let j = 0; j <= i; j++) {

            row += "* ";

        }

        console.log(row);
    }
}

function pattern3(n) {
    for (let i = 1; i <= n; i++) {

        let row = "";

        for (let j = 1; j <= i; j++) {

            row += j;

        }

        console.log(row);
    }
}

function pattern4(n) {
    for (let i = 1; i <= n; i++) {

        let row = "";

        for (let j = 1; j <= i; j++) {

            row += i;

        }

        console.log(row);
    }
}

function pattern5(n) {

    for (let i = 0; i < n; i++) {
        let row = "";

        for (let j = 0; j < n - i; j++) {

            row += "* ";

        }
        console.log(row);
    }
}

function pattern6(n) {

    for (let i = 0; i <= n; i++) {
        let row = "";

        for (let j = 1; j <= n - i; j++) {

            row += j;

        }
        console.log(row);
    }
}

function pattern7(n) {
    for (let i = 0; i < n; i++) {
        let row = "";

        for (let j = 0; j < n - i - 1; j++) {

            row += " ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {

            row += "*";
        }
        for (let j = 0; j < n - i - 1; j++) {

            row += " ";
        }
        console.log(row);
    }
}

function pattern8(n) {
    for (let i = 0; i < n; i++) {
        let row = "";

        for (let j = 0; j < i; j++) {

            row += " ";
        }
        for (let j = 0; j < 2 * n - (2 * i + 1); j++) {

            row += "*";

        }
        for (let j = 0; j < i; j++) {

            row += " ";
        }
        console.log(row);
    }
}

function pattern10(n) {
    for (i = 0; i <= 2 * n - 1; i++) {

        let row = "";

        let stars;

        if (i < n) {

            stars = i + 1;
        }
        else {

            stars = 2 * n - i - 1;
        }

        for (j = 0; j < stars; j++) {

            row += "*";
        }

        console.log(row);
    }
}

function pattern11(n) {

    for (i = 0; i < n; i++) {

        let row = "";
        let start = 1;
        if (i % 2 == 0) {
            start = 1;
        } else {
            start = 0;
        }
        for (j = 0; j <= i; j++) {

            row += start;
            start = 1 - start;
        }



        console.log(row);
    }

}

function pattern12(n) {


    let space = 2 * (n - 1);

    for (let i = 1; i <= n; i++) {


        let row = "";

        //number
        for (let j = 1; j <= i; j++) {

            row += j;
        }

        //space
        for (let j = 1; j <= space; j++) {


            row += " ";
        }

        //number
        for (let j = i; j >= 1; j--) {

            row += j;
        }

        console.log(row);
        space -= 2;
    }
}

function pattern13(n) {

    let num = 1;

    for (let i = 1; i <= n; i++) {
        let row = "";


        for (j = 1; j <= i; j++) {

            row += num + " ";
            num = num + 1;
        }

        console.log(row);

    }
}

function pattern14(n) {

    for (let i = 1; i <= n; i++) {
        let row = "";


        for (let j = 0; j < i; j++) {

            row += String.fromCharCode(65 + j) + " ";

        }

        console.log(row);

    }
}

function pattern15(n) {

    for (let i = 0; i < n; i++) {
        let row = "";
        let char = String.fromCharCode(65 + i);

        for (let j = 0; j <= i; j++) {

            row += char;

        }

        console.log(row);

    }
}

function pattern17(n) {
    for (let i = 0; i < n; i++) {
        let row = "";

        for (let j = 0; j < n - i - 1; j++) {

            row += " ";
        }   
        for (let j = 0; j < 2 * i + 1; j++) {

            if (j <= i) {

            row+=String.fromCharCode(65+j);

            }
            else {

                row+=String.fromCharCode(65+((2*i)-j));
                
            }

        }
        for (let j = 0; j < n - i - 1; j++) {

            row += " ";
        }
        console.log(row);
    }
}
pattern10(5);
pattern11(5);
pattern12(5);
pattern13(5);
pattern14(5);
pattern15(5);
pattern17(5);

