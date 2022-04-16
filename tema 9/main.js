let state = {
    list: [],
    checked: []
}

function draw() {
    let table = document.querySelector("#list tbody");
    let string = "";

    for (let i = 0; i < state.list.length; i++) {
        let element = state.list[i];
        let items = document.querySelectorAll(".items");

        if (state.checked[i]) {
            string += `
                            <tr>
                                <td class="items marked">${element}</td>
                                <td><button class="markButtons" onclick="markAsBuyed(${i})">Mark as buyed</td>
                            </tr>
                    `;
        }
        else{
            string += `
                    <tr>
                        <td class="items">${element}</td>
                        <td><button class="markButtons" onclick="markAsBuyed(${i})">Mark as buyed</td>
                    </tr>
                `;
        }

    }
    table.innerHTML = string;
}


function addItem(event) {
    event.preventDefault();
    let item = document.querySelector(`[name = "item"]`);
    
    if (item !== "") {
        state.list.push(item.value);
        state.checked.push(false);
        item.value = "";
    }
    draw();
}


function markAsBuyed(index) {
    let items = document.querySelectorAll(".items");
    items[index].classList.add("marked");
    state.checked[index] = true;
}

function sortAsc() {
    state.list.sort();
    draw();
}


function sortDesc() {
    state.list.sort();
    state.list.reverse();
    draw();
}
