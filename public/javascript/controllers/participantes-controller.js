import { Participantes } from "../models/participantes.js";
import { ParticipantesServices } from "../services/participantes-services.js";
import { ParticipanteView } from "../view/participante-view.js";
export class ParticipantesController {
    constructor() {
        this.participantes = new Participantes();
        this.participantesServices = new ParticipantesServices();
        this.participanteView = new ParticipanteView('#ranking');
    }
    listaParticipantes() {
        this.ordernarLista();
    }
    ordernarLista() {
        this.participantesServices.obterParticipantes()
            .then(participantes => {
            if (window.navigator.userAgent.indexOf("Firefox") > -1) {
                participantes.sort((a, b) => {
                    if (a.porcentagemPositiva < b.porcentagemPositiva) {
                        return -1;
                    }
                    else {
                        return 1;
                    }
                }).reverse();
            }
            else {
                participantes.sort((a, b) => {
                    if (a.porcentagemPositiva > b.porcentagemPositiva) {
                        return -1;
                    }
                    else {
                        return 1;
                    }
                });
            }
            for (let participante of participantes) {
                this.participantes.adicionar(participante);
            }
            this.atualizaView();
        });
    }
    atualizaView() {
        this.participanteView.update(this.participantes);
    }
}
