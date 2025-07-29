# Angular

## Per installare la cli di angular
```
npm i -g @angular/cli
```

## Verifica versione di angular
```
ng v
```

## Per creare un app Angular
### Nella cartella in cui vogliamo creare l'app
```
ng new myapp1
```

## Per startare un live server
### Nella cartella che contiene la cartella src
```
ng serve --open
```

## Per generare un component chiamato card
```
ng generate component card
```
abbreviato in
```
ng g c card
```
## Per installare bootstrap
## Nella cartella che contiene src
```
npm i bootstrap
```
Per dire ad Angular dove trovare bootstrap sarà anche necessario aggiungere delle righe dentro angular.json dentro 
```
"build": {
    "styles":[
        <!-- qui troverete già
        "src/styles.css" -->
    ]
}
```
la nuova struttura sarà la seguente
```
"build"{
    "styles": [
        "./node_modules/bootstrap/dist/css/bootstrap.css",
        "src/styles.css"
        ],
        "scripts":[
        "./node_modules/bootstrap/dist/js/bootstrap.bundle.js"
        ]
}
```