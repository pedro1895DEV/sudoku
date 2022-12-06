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
    ['3','','','8','','1','','','2'],
    ['2','','1','','3','','6','','4'],
    ['','','','2','','4','','',''],
    ['8','','9','','','','1','','6'],
    ['','6','','','','','','5',''],
    ['7','','2','','','','4','','9'],
    ['','','','8','','9','','',''],
    ['9','','4','','8','','7','','5'],
    ['6','','','1','','7','','','3']
]

$(document).ready(
    function (){
        for(let i = 1; i <= 9; i++){
            let tr = $('<tr>');
            for(let j = 1; j <= 9; j++){
                let input = $(`<input type="text" id="c${i}${j}" value ="${possibilidade1[i-1][j-1]}">`)
                let td = $(`<td>`)
                td.append(input);
                tr.append(td);

                input.on('input',
                    function(e){
                        let el = $(this);
                        let lin = el.attr('id')[1];
                        let col = el.attr('id')[2];
                        let valor = el.val();
                        possibilidade1[lin-1][col-1] = valor;
                        console.log(lin, col, valor);
                    }
                )
            }
            $('#grade').append(tr);
        }
    }
);