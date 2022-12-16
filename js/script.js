    let sudoku = [
        [ 
        ['5', '3', '', '', '7', '', '', '', ''],
        ['6', '', '', '1', '9', '5', '', '', ''],
        ['', '9', '8', '', '', '', '', '6', ''],
        ['8', '', '', '', '6', '', '', '', '3'],
        ['4', '', '', '8', '', '3', '', '', '1'],
        ['7', '', '', '', '2', '', '', '', '6'],
        ['', '6', '', '', '', '', '2', '8', ''],
        ['', '', '', '4', '1', '9', '', '', '5'],
        ['', '', '', '', '8', '', '', '7', '9'],
        ],
        [
        ['6', '', '', '', '7', '', '5', '', ''],
        ['9', '', '', '5', '', '', '', '', '2'],
        ['', '', '7', '', '9', '4', '', '', ''],
        ['8', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '9', '6'],
        ['1', '', '', '7', '3', '', '2', '', '4'],
        ['3', '', '', '', '2', '6', '', '', ''],
        ['4', '2', '9', '', '', '', '', '6', ''],
        ['', '6', '1', '', '', '7', '', '', ''],
        ],
        [
        ['', '1', '', '', '8', '9', '2', '', ''],
        ['', '8', '', '', '', '5', '', '3', ''],
        ['', '9', '', '', '', '', '', '7', ''],
        ['', '', '6', '', '', '2', '', '4', ''],
        ['', '', '5', '4', '', '', '7', '', ''],
        ['', '', '', '9', '7', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '3', '', '', '8', '', '2', ''],
        ['', '5', '', '', '', '4', '', '', '1'],
        ],
        [
        ['6', '', '', '', '7', '', '5', '', ''],
        ['9', '', '', '5', '', '', '', '', '2'],
        ['', '', '7', '', '9', '4', '', '', ''],
        ['8', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '9', '6'],
        ['1', '', '', '7', '3', '', '2', '', '4'],
        ['3', '', '', '', '2', '6', '', '', ''],
        ['4', '2', '9', '', '', '', '', '6', ''],
        ['', '6', '1', '', '', '7', '', '', ''],
        ]
    ];

    let choose = Math.floor(Math.random()*4) -1;

    let s = sudoku[choose];

    $(document).ready(
        function () {
            for (let i = 1; i <= 9; i++) {
                let tr = $('<tr>');
                for (let j = 1; j <= 9; j++) {
                    let input = $(`<input type="text" maxlength="1" onkeypress="return event.charCode >= 49 && event.charCode <= 57" id="c${i}${j}" value ="${s[i - 1][j - 1]}">`)
                    let td = $(`<td>`)
                    td.append(input);
                    tr.append(td);

                    input.on('input',
                        function (e) {
                            let el = $(this);
                            let lin = el.attr('id')[1];
                            let col = el.attr('id')[2];
                            let valor = el.val();
                            s[lin - 1][col - 1] = valor;
                        
                            function valida(s) {
                                for (let i = 0; i < 9; i++) {
                                    for (let j = 0; j < 9; j++) {
                                        const valor = s[i][j];
                                        if (valor !== '') {
                                            if (!linha(s, i, j, valor) || !coluna(s, i, j, valor) | !nove(s, i, j, valor)) {
                                                return false & alert('Opção incorreta');
                                            }
                                        }
                                    }
                                } 
                                return true;
                            };

                            function linha(s, lin, col, valor) {
                                for (let j = 0; j < 8; j++) {
                                    if (j !== col) {
                                        if (s[lin][j] === valor) {
                                            return false;
                                        }
                                    }
                                }

                                return true ;
                            }
                            function coluna(s, lin, col, valor) {

                                for (let i = 0; i < 8; i++) {
                                    if (i !== lin) {
                                        if (s[i][col] === valor) {
                                            return false;
                                        }
                                    }
                                }

                                return true;
                            }
                            function nove(s, lin, col, valor) {
                                const iniLinha = lin - (lin % 3), iniColuna = col - (col % 3);

                                for (let i = iniLinha; i < iniLinha + 3; i++) {
                                    for (let j = iniColuna; j < iniColuna + 3; j++) {
                                        if (i !== lin && j !== col) {
                                            if (s[i][j] === valor) {
                                                return false;
                                            }
                                        }
                                    }
                                }

                                return true;
                            }
                            
                            console.log(valida(s));
                        }
                    )
                    
                }
                $('#grade').append(tr);
            }
        }
        
    );
