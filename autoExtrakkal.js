import { Auto } from "./auto.js";

export class AutoExtrakkal extends Auto {
    constructor(modell, evjarat, szin, fogyasztas, tankMeret) {
        super(modell, evjarat, szin);
        this._fogyasztas = fogyasztas
        this._tankMeret = tankMeret
    }

    // hatótáv kiszámítása
    // tankméret/fogyasztás *100


    // tankolás költsége(üres tankról teli tankra) árfolyam 600Ft

    // tank jelenlegi állapota (hány l van benne) és mennyibe kerül megtankolni?
    

    get fogyasztas() {
        return this._fogyasztas
    }
    set fogyasztas(fogyasztasErtek) {
        this._fogyasztas = fogyasztasErtek
    }

    get tankMeret() {
        return this._tankMeret
    }

    set tankMeret(tankMeretErtek) {
        this._tankMeret = tankMeretErtek
    }




}

