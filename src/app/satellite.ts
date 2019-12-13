import { IfStmt } from '@angular/compiler';

export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    shouldShowWarning():boolean {
        let bool: boolean = this.type.toLowerCase() === 'space debris' ? true : false
        console.log(this.type)
        return bool
    }
}
