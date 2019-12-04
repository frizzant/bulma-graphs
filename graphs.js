graphs = () => {
// --- Variables + Objects
// ---
            let graphs = { // initialize object with settings
                settings: {
                    containerSelector: '.graphs-container',
                    containerItemSelector: '.graphs-container .data-container div',
                    autoGenerate: true,
                    animation: true,
                    heightMultiplicator: 3, // scales in pixel
                    widthMultiplicator: 1, // scales in % (percentage)
                },

            };
            graphs.container = { // dependent on settings before they can be set
                list: document.querySelectorAll(graphs.settings.containerSelector),
                items: {
                    list: document.querySelectorAll(graphs.settings.containerItemSelector),
                }
            };
// ---
// --- END Variables
    let main = () => {
        console.log(graphs.container.list);

        let generateHTMLContainers = () => {
            return new Promise((resolve) => { // setting up a PROMISE
                let i = 0;
                for (let container of graphs.container.list) {
                    container.id = 'graph-container-' + i;
                    container.classList.add('content', 'columns', 'is-multiline');

                    if (container.dataset.title.length >= 1) {
                        container.insertAdjacentHTML('afterbegin', `<h2 class="column is-full">${container.dataset.title}</h2>`);
                    }

                    i++;
                    if (i === graphs.container.list.length) {
                        resolve();
                    }
                }
            });
        };
        let generateHTMLItems = () => {
            return new Promise((resolve) => { // setting up a PROMISE
                let rotateBase = 0;
                let rotateFraction = 360 / graphs.container.items.list.length;

                let i = 0;
                for (let item of graphs.container.items.list) {
                    // console.log(item.dataset.title);
                    if (item.dataset.title.length >= 1) {
                        item.insertAdjacentHTML('afterbegin', `<p>${item.dataset.title}</p>`);
                    }

                    if (item.parentElement.classList.contains('columns')) {
                        item.classList.add('column');
                    }

                    if (item.parentElement.classList.contains('is-vertical-graph')) { // Vertical Graphic
                        item.style.width = graphs.settings.widthMultiplicator * item.dataset.value + '%';
                    } else { // Horizontal Graphic
                        item.style.height = graphs.settings.heightMultiplicator * item.dataset.value + 'px';
                    }

                    item.style.filter = `hue-rotate(${rotateBase}deg)`;
                    rotateBase = rotateBase + rotateFraction;

                    i++;
                    if (i === graphs.container.items.list.length) {
                        resolve();
                    }
                }
            });
        };
        let setup = () => {
            console.log('STUFF HAPPENING');
        };

        generateHTMLContainers()
            .then(generateHTMLItems)
            .then(setup);

    };
    main();
};
graphs();