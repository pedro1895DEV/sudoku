$(document).ready(
    function (){
        for(let i = 1; i <= 9; i++){
            let tr = $('<tr>');
            for(let j =1; j <=9; j++){
                let td = $(`<td> <input type = "text" id="c${i}${j}"`)
                tr.append(td);
            }

            $('#grade').append(tr);
        }
    }
)