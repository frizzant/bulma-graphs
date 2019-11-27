graphs = () => {
// --- Variables + Objects
// ---
    let graphs = { // initialize object with settings
        settings: {
            containerSelector: '.graphs-container',
            containerItemSelector: '.graphs-container div',
            autoGenerate: true,
            animation: true,
        },

    };
    graphs = { // dependent on settings before they can be set
        container: {
            list: document.querySelectorAll(graphs.settings.containerSelector),
            items: {
                list: document.querySelectorAll(graphs.settings.containerItemSelector),
            }
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
                    container.classList.add('content');

                    container.insertAdjacentHTML('afterbegin', `<h2>${container.dataset.title}</h2>`);
                    i++;
                    if (i === graphs.container.list.length) {
                        resolve();
                    }
                }
            });
        };
        let generateHTMLItems = () => {
            return new Promise((resolve) => { // setting up a PROMISE
                let i = 0;
                for (let item of graphs.container.items.list) {
                    console.log(item.dataset.title);
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