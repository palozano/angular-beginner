# Introductory course: Angular (beginner)

*(Course from Udemy: Angular from zero to expert)*


## Required installations

1. NodeJS
2. Chrome
3. Typescript
4. Angular CLI
5. Ionic

Some code editor (Atom, Sublime, VSCode...), with the pluggins to help.

## Typescript and ES6

+ Variables *let* and *const*
+ Templates in ES6
+ Functions
+ Arrow functions
+ Objects and arrays
+ Promises
+ Interface
+ Classes in TypeScript
+ Class constructor
+ Modules
+ Decorators
+ Watch the project with `tsc -w`


## First application

- Create apps using Angular CLI with `ng new my-app`
- Run local server with `ng serve -o`
- Use Bootstrap
- Create components using the CLI with `ng g(enerate) c(omponent) <folder>/<name>`
- Commands: *\*ngIf \*ngFor* 


## Single-page application

1. **Structure**

	In the app folder, you can find several folders:
		+ *e2e/*: End-To-End test
		+ *node_module/s*: Modules that can be imported (not all of them go to the production app)
		+ *src/*: Code itself
			- *app/*: code for the app: typescript, javascript, html, css...
				+ *components/*: independent folders for each component
				+ *app.component.ts*: the app itself is a component
				+ *app.module.ts*: modules, components... for the main app
				+ *app.routes.ts*: routing for the different pages
				+ *app.component.html*: main layout for the page
				+ *services/*: services within the page (send info from one component to another)
			- *assets/*: files for the project: images, icons, **bootstrap** files...
		+ *styles.css*: Base style
		+ *main.ts*: Main file
		+ *test.ts*: File for (unitary) test
		+ *polyfill.ts*: (?)
		+ *tsconfig.json*: Config file for the TypeScript "compiler"
		+ *tsconfig.app.json*: Another config file
		+ *tslit.json*: Config file for the linter
		+ *package.json*: Config file for the packages
		+ *angular.json*: Config file for Angular

2. **Styling**

	Bootstrap (or other styling) can be called/included as a CDN (online) or install it within the app. You have to link it in the *index.html*.

	Another option is to install it with the CLI `npm install bootstrap --save`. It will be saved in *node_modules/* folder. Do the same thing with *popper.js* and *jquery*. Link them in the *angular.json* file, under the *"styles"* section.

3. **Navbar**

	Create a new component, use the bootstrap styling in its *.html*. Link it in the *app.component.ts* file.

4. **Routing**

	Inside the *app.routes.ts*, create a `const` variable that will store the routes to the components. The components have to be imported; and the constant, exported. In the *app.module.ts* import the constant; and in *app.component.html*, you have to call the *<router-outlet>*.

	The links need to be called as: `[routerLink]="['home','1']"`. The first [] is to tell Angular to handle the link, the array is the way to pass the routes. The item containing the other item with links, can have the `routerLinkActive` to be highlighted.

	---

	It is possible to route also using "parameters in the links". The path should be like: `{ path: 'item/:id', component: ItemComponent },` in the *routes.ts*. In the *.html*, you have to create the index by invoking JS code: `let i = index`, where `i` is the local variable and `index` is the variable name in the *.ts* file. And in the link, use `[routerLink]="['/item', i]"`, where `i` is the local variable mentioned previously in the *.html*. It is also possible to create a function using a router to navigate, and call it when triggering an event (such as (click) or similar).

	---

	It is also possible to send parameters (by subscribing to params) in the URLs.


5. **Services**
	
	They are a re-usable for the application. They create CRUD petitions (Create, Read, Update, Delete), give information and make the data persistent. Basically, they allow communication between components.

	Create it in the *app/* (maybe in a separate folder) folder and import it in the *app.module.ts*.

	You can create here variables that store data and use them with different components, by importing the service and calling a function that returns the data.


6. **Using \*ngFor & \*ngIf**

	By including `*ngFor="let item of list` inside a html tag, we can execute javascript code through angular and copy (or whatever you want to do) a html/css card, or looping through data, do searches, etc.


7. **Pipes**
	
	Literally, `|`, can transform the data the preceed with a certain command (toUpperCase, toDate, etc).


8. **Searcher**

	Is possible to get the data from a search box or a click by appending `#searchText` in the html tag, and passing it to a function by using `(keyup.enter)="searchAuthor(searchText.value)"`.

	In the service, you should do:
	```typescript

	searchAuthors( termino:string ):Author[] {
        let authorsArr:Author[] = [];
        termino = termino.toLowerCase();

        // for( let author of this.authors ){
        for( let i=0; i<this.authors.length; i++){

            let author = this.authors[i];
            let nombre = author.nombre.toLowerCase();

            if( nombre.indexOf( termino ) >= 0 ){
                author.idx = i;
                authorsArr.push( author );
            }
        }

        return authorsArr;
    }
	```
	
	to obtain all the data that corresponds with the data you looked for (this example works with the prejoect, it should be adapted).

	You can later send the returned data to a new page (component) where you display the results.


9. **Moving data from a *parent* component to *child* one.**

	First, import the module `Import`, and decortate a variable with `@Input` before. In the .html tag use square brackets to handle it with Angular: `[heroe]=foo`, where *heroe* is the received variable and *foo* the local variable.

	