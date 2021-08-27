let app = {};

app = (() => {
    let self = {};
    let spawn;
    self.button = (n, spawn) => {
        while (spawn.firstChild) {
            spawn.removeChild(spawn.lastChild);
        }
        for (let index = 0; index < n; index++) {
            let button = document.createElement('button');
            button.innerHTML = 'Botones';
            button.className = "btn m-3 pl-2 btn-info btn-outline-primary btn-lg";
            spawn.appendChild(button);
        }
    }

    return self;
    })();