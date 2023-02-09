import { ParticipanteInterface } from "../interfaces/participante-interface.js";
import { Participante } from "../models/participante.js";

export class ParticipantesServices {
    public obterParticipantes(): Promise<Array<Participante>> {
        return fetch('http://localhost:8080/ranking')
            .then(res => res.json())
            .then(resp => resp.data)
            .then((dados: Array<ParticipanteInterface>) => {
                return dados.map(participante => {
                    return new Participante(
                        participante.name,
                        participante.description,
                        participante.picture,
                        participante.positive,
                        participante.negative
                    );
                })
            });
    }
}
