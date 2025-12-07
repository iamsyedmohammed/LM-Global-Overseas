import { Country } from "../types/country";
import { canada } from "./countries/canada";
import { georgia } from "./countries/georgia";
import { uk } from "./countries/uk";
import { usa } from "./countries/usa";
import { australia } from "./countries/australia";
import { newZealand } from "./countries/new-zealand";
import { germany } from "./countries/germany";
import { poland } from "./countries/poland";
import { uae } from "./countries/uae";
import { belarus } from "./countries/belarus";
import { russia } from "./countries/russia";

export type { Country };

export const countries: Country[] = [
    canada,
    georgia,
    uk,
    usa,
    australia,
    newZealand,
    germany,
    poland,
    uae,
    belarus,
    russia
];
