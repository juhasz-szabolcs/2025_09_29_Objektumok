import { Auto } from "./auto.js";

const auto1 = new Auto("Toyota Corolla", 2015, "fehér")
const auto2 = new Auto("Audi A4", 2009, "fekete")

console.log(`${auto1.modell}, ${auto1.evjarat} évjárat; Jelenleg ${auto1.getKor()} éves az autó`)
console.log(`${auto2.modell}, ${auto2.evjarat} évjárat; Jelenleg ${auto2.getKor()} éves az autó`)