// select-back
// select-select

function toggleState (select){
    const selectItem = document.getElementById(`${select}`);
    if(select.includes(1)) {
        selectItem.classList.toggle(`select-select`);
        selectItem.classList.remove('select-back')
        for (let index = 2; index <= 5; index++) {
            let idSelect = `select-${index}`
            let selectItem = document.getElementById(`${idSelect}`)
            selectItem.classList.remove('select-back')
            selectItem.classList.remove('select-select')
        }
    }else{
        for (let index = 1; index <= 5; index++) {
            let idSelect = `select-${index}`
            let idSelectBack = `select-${index-1}`
            let selectItem = document.getElementById(`${idSelect}`)
            let selectItemBack = document.getElementById(`${idSelectBack}`)
            if (select.includes(index)){                
                let vali = selectItemBack.classList.contains('select-back');
                console.log(vali);
                if(vali){
                    selectItemBack.classList.remove(`select-back`);
                }else{
                    selectItemBack.classList.add(`select-back`);
                }
                selectItem.classList.toggle(`select-select`);
            }else{
                
                selectItem.classList.remove(`select-back`);
                selectItem.classList.remove(`select-select`);               
            }
            
        }
    }
}
