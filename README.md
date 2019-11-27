# bulma-framebox

- [Why Do I need It?](#why)
- [Dependencies](#dependencies)
- [Normal Setup](#setup)
- [NPM Setup](#npm-setup)
- [Settings](#settings)
- [Minimal Structure](#minimal)


A dynamic fixed box to display news/hints/ads in a Bulma CSS fashion.

By default the box is at the bottom-right corner of the website.
It will stop cycling if you hover/touch over the element, or disable it in the settings.
[Github Preview](https://frizzant.github.io/bulma-graphs/)

![alt text](/images/graphs.jpg)

## Why Do I Need It? <a name="why"></a>

placeholder

## Dependencies <a name="dependencies"></a>
Since the custom.sass/custom.css is built upon the **Bulma CSS Framework**,
it is recommended to use this as your base. However if you want to write
your own CSS, go ahead.
The Javascript should keep working,
if you keep the necessary ids/classes and HTML structure.

Going Vanilla JS, **no JQuery needed**! Lightweight and totally free of any JS frameworks.

Javascript version: **ES6**.
_(rewriting it for crossbrowser compatibility and IE should be pretty simple.)_

## Normal Setup <a name="setup"></a>

The recommended structure is the following:

```html
<div class="graphs-container">

</div>
```


## via npm <a name="npm-setup"></a>

`npm install bulma-graphs`

### Settings <a name="settings"></a>

Currently you can tweak the JS settings directly within the `graphs.js` file.
These are the default values.
```javascript
let graphs = {
    // more stuff here
    settings: {
        autoGenerate: true,     // true | false 
        rotate: true,           // true | false
        rotateTimeout: 3000,    // number in ms          
    },
};
```

### Minimal Structure <a name="minimal"></a>

This is the minimal structure needed to keep the script running how it was supposed to:

```HTML
<div id="framebox-container">
    
</div>
```

I think we are done here.