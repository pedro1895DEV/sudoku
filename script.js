/*function sudoku(){
    let array = ['','','','','','','','','',]
    for(let i =1; i <=9; i++){
        for(let j =1; j<=9; i++){
            return array
        }
    }
}
*/

let possibilidade1 = [
    ['5', '3', '', '', '7', '', '', '', ''],
    ['6', '', '', '1', '9', '5', '', '', ''],
    ['', '9', '8', '', '', '', '', '6', ''],
    ['8', '', '', '', '6', '', '', '', '3'],
    ['4', '', '', '8', '', '3', '', '', '1'],
    ['7', '', '', '', '2', '', '', '', '6'],
    ['', '6', '', '', '', '', '2', '8', ''],
    ['', '', '', '4', '1', '9', '', '', '5'],
    ['', '', '', '', '8', '', '', '7', '9']
];

let possibilidade2 = [
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '']
];

let possibilidade3 = [
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '']
];



$(document).ready(
    function () {
        for (let i = 1; i <= 9; i++) {
            let tr = $('<tr>');
            for (let j = 1; j <= 9; j++) {
                let input = $(`<input type="text" maxlength="1" onkeypress="return event.charCode >= 49 && event.charCode <= 57" id="c${i}${j}" value ="${possibilidade1[i - 1][j - 1]}">`)
                let td = $(`<td>`)
                td.append(input);
                tr.append(td);

                input.on('input',
                    function (e) {
                        let el = $(this);
                        let lin = el.attr('id')[1];
                        let col = el.attr('id')[2];
                        let valor = el.val();
                        possibilidade1[lin - 1][col - 1] = valor;


                        function valida(possibilidade1) {
                            for (let i = 0; i < 9; i++) {
                                for (let j = 0; j < 9; j++) {
                                    const valor = possibilidade1[i][j];
                                    if (valor !== '') {
                                        if (!linha(possibilidade1, i, j, valor) || !coluna(possibilidade1, i, j, valor) | !nove(possibilidade1, i, j, valor)) {
                                            return false & alert('Opção incorreta');
                                        }
                                    }
                                }
                            }
                            return true;
                        };

                        function linha(possibilidade1, lin, col, valor) {
                            for (j in linha) {
                                if (j !== col) {
                                    if (possibilidade1[lin][j] === valor) {
                                        return false;
                                    }
                                }
                            }

                            return true;
                        }
                        function coluna(possibilidade1, lin, col, valor) {

                            for (i in coluna) {
                                if (i !== lin) {
                                    if (possibilidade1[i][col] === valor) {
                                        return false;
                                    }
                                }
                            }

                            return true;
                        }
                        function nove(possibilidade1, lin, col, valor) {
                            const startRow = lin - (lin % 3), startCol = col - (col % 3);

                            for (let i = startRow; i < startRow + 3; i++) {
                                for (let j = startCol; j < startCol + 3; j++) {
                                    if (i !== lin && j !== col) {
                                        if (possibilidade1[i][j] === valor) {
                                            return false;
                                        }
                                    }
                                }
                            }

                            return true;
                        }
                        console.log(valida(possibilidade1));
                    }
                )
            }
            $('#grade').append(tr);
        }
    }
);