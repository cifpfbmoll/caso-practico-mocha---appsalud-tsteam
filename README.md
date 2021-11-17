# appSalud TSTEAM Peps 
## _APLICACIÓN JAVASCRIPT ,ASIGNATURA PEPS 

<p align="center">
<img src="AppSalud/logoAppSalud.png"><br>
<img src="https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg">
</p>
<p align="center">
<img src="AppSalud/mocha.png">
</p> 
<p align="center">☕️ Simple.flexible,fun javascript test Framework for node.js
</p>
<p align="center">
<img src="AppSalud/chai.png">
</p><br>

![buildpassing](https://camo.githubusercontent.com/d729d8534619442eeefc639cde031a64949e5ec00e2bd02e492bb1fa4afc32de/68747470733a2f2f7472617669732d63692e6f72672f636861696a732f73696d706c652d6173736572742e706e673f6272616e63683d6d6173746572)
Esta aplicación simula una báscula y un paciente el cual introduce datos en la báscula. Puedes introducir nombre de usuario, apellidos, su peso,altura y la fecha se quedan guardados . Además recoge las veces que te registras, y además puede decirte
tu IMC según los datos introducidos.
- IMC (indice de masa corporal)
- Peso en kg
- Altura en cm (Ej: 180cm)
- Contador (Seguimiento de Medidas)
-✨ Aplicación de Alto rendimiento en javascript con test unitarios por módulos o por secciones del programa ✨

## Composición del Programa
- Carpeta AppSalud con todas las capturas de pantalla .
- carpeta Test con el archivo Bascula_test.js con los test unitarios.
- archivo bascula.js con la lógica del programa en javascript,mocha i chai. Hace falta unos pocos comandos para poder hacer funcionar este programa que se indican a continuación.
- README.md este mismo archivo con la configuración e instalación detallada.
- Otros archivos que se deberan instalar una vez clonado el repositorio (package.json y node)
- node_modueles una vez clonado el repo de github lanzar npm i para obtener la libreria de node.( Explicado más abajo)
AppSalud está hecho en javascript con los Frameworks [mocha] y [chai][df1] además de Node.js ,editado en Visual Studio Code con el fin de elaborar diferentes prueba error tests usando mocha y chai .

>Alto rendimiento con tecnologias punteras como (chai i mocha)
>Todo el Core del programa está comprimido en Bascula.js... y tiene los test con el check verde en bascula_test.js

## Features

Los test [assert] y [should] proporcionan seguridad y aprueba de errores, dejando un código limpio y seguro.

- [ Código Limpio ] - Javascript Puro
- [ Mocha ] - Test completos en bascula_tests
- [ Chai ] - Test Implemtando Assert , should ,etc
- [Node.js] - Node.js


## Instalación y Configuración de todo.

Proceso de Instalación e uso de AppSalud
```
Download Repository from Github
```

Instalar [Node.js](https://nodejs.org/) en caso de que no este Instalado y Inicializar
```
Requires Node.js (download e Install ) to setup.
Primero tenemos que Inicializar el proyecto, accedemos a la carpeta en este caso Caso-practico-mocha--appsalud-tsteam
Luego npm init (Para inicializar)
```

Instalar Mocha y Chai (Para Testing)

```
npm install mocha chai --save-dev
En la imagen siguiente aparece el comando usado para instalar mocha y chai

```
<img src="AppSalud/npm-install-mocha-chai.png" style="width:550px;height:auto;border-radius:10px;border:2px outset purple;" />


Install the dependencies npm i.
<img src="AppSalud/init.png" style="width:550px;height:auto;border-radius:10px;border:2px outset purple;">

```sh

cd caso-practico--appsalud-tsteam
npm i
node_modules ya estará instalado
```

Configuración Package.json
<img src="AppSalud/install.png" style="width:550px;height:auto;border-radius:10px;border:2px outset purple;">

```sh

Editamos  package.json o desde visual Studio Code
en "test": "mocha"
Como indica la imagen.
```


## Frameworks



AppSalud is currently extended with the following Frameworks.
Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Mocha | [plugins/mocha.md][PlDb] |
| Chai | [plugins/chai.md][PlGh] |




