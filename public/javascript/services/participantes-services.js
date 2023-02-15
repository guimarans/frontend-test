import { Participante } from "../models/participante.js";
export class ParticipantesServices {
    obterParticipantes() {
        return fetch('http://localhost:8080/ranking')
            .then(res => res.json())
            .then(resp => resp.data)
            .then((dados) => {
            return dados.map(participante => {
                return new Participante(participante.name, participante.description, participante.picture, participante.positive, participante.negative);
            });
        });
    }
}
