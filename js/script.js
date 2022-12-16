let sudoku = [
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

function sorteia(){
    let array = ['a','b','c'];
    let random = (min, max) => Math.floor(Math.random() * (max - min));
    return array[ random(0, array.length)]
}

$(document).ready(
    function () {
        for (let i = 1; i <= 9; i++) {
            let tr = $('<tr>');
            for (let j = 1; j <= 9; j++) {
                let input = $(`<input type="text" maxlength="1" onkeypress="return event.charCode >= 49 && event.charCode <= 57" id="c${i}${j}" value ="${sudoku[i - 1][j - 1]}">`)
                let td = $(`<td>`)
                td.append(input);
                tr.append(td);

                input.on('input',
                    function (e) {
                        let el = $(this);
                        let lin = el.attr('id')[1];
                        let col = el.attr('id')[2];
                        let valor = el.val();
                        sudoku[lin - 1][col - 1] = valor;
                       
                        function valida(sudoku) {
                            for (let i = 0; i < 9; i++) {
                                for (let j = 0; j < 9; j++) {
                                    const valor = sudoku[i][j];
                                    if (valor !== '') {
                                        if (!linha(sudoku, i, j, valor) || !coluna(sudoku, i, j, valor) | !nove(sudoku, i, j, valor)) {
                                            return false & alert('Opção incorreta');
                                        }
                                    }
                                }
                            }
                            return true;
                        };

                        function linha(sudoku, lin, col, valor) {
                            for (let j = 0; j < 8; j++) {
                                if (j !== col) {
                                    if (sudoku[lin][j] === valor) {
                                        return false;
                                    }
                                }
                            }

                            return true ;
                        }
                        function coluna(sudoku, lin, col, valor) {

                            for (let i = 0; i < 8; i++) {
                                if (i !== lin) {
                                    if (sudoku[i][col] === valor) {
                                        return false;
                                    }
                                }
                            }

                            return true;
                        }
                        function nove(sudoku, lin, col, valor) {
                            const iniLinha = lin - (lin % 3), iniColuna = col - (col % 3);

                            for (let i = iniLinha; i < iniLinha + 3; i++) {
                                for (let j = iniColuna; j < iniColuna + 3; j++) {
                                    if (i !== lin && j !== col) {
                                        if (sudoku[i][j] === valor) {
                                            return false;
                                        }
                                    }
                                }
                            }

                            return true;
                        }
                        console.log(valida(sudoku));
                    }
                )
            }
            $('#grade').append(tr);
        }
    }
);
