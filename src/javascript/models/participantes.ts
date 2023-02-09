import { Participante } from "./participante.js";

export class Participantes {
    private participantes: Array<Participante> = [];

    public adicionar(participante: Participante) {
        this.participantes.push(participante);
    }

    public lista(): ReadonlyArray<Participante> {
        return this.participantes;
    }
}