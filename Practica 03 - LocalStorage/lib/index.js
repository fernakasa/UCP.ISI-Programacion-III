var key = document.getElementById('key');
var r1 = document.getElementById('r1');
var r2 = document.getElementById('r2');
var valor = document.getElementById('valor');
var img = document.getElementById('img');
var guardar = document.getElementById('guardar');
var obtener = document.getElementById('obtener');
valor.addEventListener('click', () => { app.selector(1) });
img.addEventListener('click', () => { app.selector(0) });
guardar.addEventListener('click', () => { app.guardar() });
obtener.addEventListener('click', () => { app.obtener() });


let app = {};
let miStorage = window.localStorage;
app = (() => {
    let spawn;

    self.selector = (spawn) => {
        if (spawn === 1) {
            r1.checked = true;
            r2.value = '';
        } else {
            r2.checked = true;
            r1.value = '';
        };
    };

    self.guardar = () => {
        while (document.getElementById("spawn").firstChild) {
            document.getElementById("spawn").removeChild(document.getElementById("spawn").lastChild);
        };
        if (key.value != '') {
            if (r1.checked === true) {
                let data = btoa(valor.value);
                localStorage.setItem(key.value, data);
                document.getElementById("spawn").innerHTML = 'Guardado: ' + valor.value;
            } else {
                const file = img.files[0];
                const reader = new FileReader();
                reader.onloadend = () => {
                    localStorage.setItem(key.value, reader.result);
                };
                reader.readAsDataURL(file); 
            };
        } else {
            document.getElementById("spawn").innerHTML = "Key invalida";
        };
    };

    self.obtener = () => {
        while (document.getElementById("spawn").firstChild) {
            document.getElementById("spawn").removeChild(document.getElementById("spawn").lastChild);
        };
        if (key.value != '' && localStorage.getItem(key.value) != undefined) {
            if (localStorage.getItem(key.value).includes("image")) {
                let image = document.createElement('img');
                image.src = localStorage.getItem(key.value);
                document.getElementById("spawn").appendChild(image);
            } else {
                let data = atob(localStorage.getItem(key.value));
                document.getElementById("spawn").innerHTML = 'Obtenido: ' + data;
            };
        } else {
                document.getElementById("spawn").innerHTML = "Key invalida";
        };
    };

    return self;
})();