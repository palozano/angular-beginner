import { Component } from "@angular/core";

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
})

export class BodyComponent {

    mostrar = true;

    frase: any = {
        mensaje: 'Mensaje de prueba 1',
        autor: "Faulkner",
    };

    personajes: string[] = ['Borges', 'Kormack', 'Capote'];
}
