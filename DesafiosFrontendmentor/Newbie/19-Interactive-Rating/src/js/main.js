// select-back
// select-select

function toggleState (select){
    const selectItem = document.getElementById(`${select}`);
    if(select.includes(1)) {
        selectItem.classList.toggle(`select-select`);
        for (let index = 2; index <= 5; index++) {
            let idSelect = `select-${index}`
            let selectItem = document.getElementById(`${idSelect}`)
            selectItem.classList.remove('select-back')
            selectItem.classList.remove('select-select')
        }
    }else{
        for (let index = 2; index <= 5; index++) {
            let idSelect = `select-${index}`
            let idSelectBack = `select-${index-1}`
            let selectItem = document.getElementById(`${idSelect}`)
            let selectItemBack = document.getElementById(`${idSelectBack}`)
            if (select.includes(index)){                
                let vali = selectItemBack.classList.contains('select-back');
                selectItem.classList.toggle(`select-select`);
                selectItemBack.classList.remove(`select-select`);
                if(!vali){
                    selectItemBack.classList.add(`select-back`);
                }else{
                    selectItemBack.classList.remove(`select-back`);
                }

                
            }else{
                selectItem.classList.remove(`select-back`);
                selectItem.classList.remove(`select-select`);
            }
            
        }
    }
}



// for (let index = 1; index <= 5; index++) {
//     document
//       .getElementById(`select-${index}`)
//       .classList.toggle('select-select');
//     document.getElementById(`select-${index}`).classList.remove('select-back');
//   }


//   document
//     .getElementById(`select-${prevSelected}`)
//     .classList.add('select-back');

//   let newSelected = select.split('-')[1];

//   document
//     .getElementById(`select-${newSelected}`)
//     .classList.add('select-select');
// prevSelected = newSelected;