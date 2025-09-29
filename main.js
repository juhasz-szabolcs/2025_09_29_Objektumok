import { Auto } from "./auto.js";
import { AutoExtrakkal } from "./autoExtrakkal.js";
// Auto példányosítás
const auto1 = new Auto("Toyota Corolla", 2015, "fehér")
const auto2 = new Auto("Audi A4", 2009, "fekete")

console.log(`${auto1.modell}, ${auto1.evjarat} évjárat; Jelenleg ${auto1.getKor()} éves az autó. Színe: ${auto1._szin}`)
auto1._szin = "piros"
console.log(`Megváltoztatott szín: ${auto1.modell}, ${auto1.evjarat} évjárat; Jelenleg ${auto1.getKor()} éves az autó. Színe: ${auto1._szin}`)
console.log(`${auto2.modell}, ${auto2.evjarat} évjárat; Jelenleg ${auto2.getKor()} éves az autó. Színe: ${auto2._szin}`)

// Autó extrákkal példányosítás
const autoExtr1 = new AutoExtrakkal("Honda Civic", 2020, "zöld", 6.5, 50)

console.log(`${autoExtr1.modell}, ${autoExtr1.evjarat} évjárat; Jelenleg ${autoExtr1.getKor()} éves az autó. Színe: ${autoExtr1._szin}`)