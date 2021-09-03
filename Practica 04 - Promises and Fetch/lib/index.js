let app = {};

app = (() => {
    let spawn;
    self.img = async (spawn) => {
        while (spawn.firstChild) {
            spawn.removeChild(spawn.lastChild);
        }
        await fetch('https://thatcopy.pw/catapi/rest/')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let img = document.createElement('img');
                img.src = data['url'];
                img.className = "img-thumbnail mt-5";
                spawn.appendChild(img);
                }
            );

    }

    return self;
    })();