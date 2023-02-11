import { Participante } from "../models/participante.js";
import { Participantes } from "../models/participantes.js";
import { ParticipantesServices } from "../services/participantes-services.js";
import { ParticipanteView } from "../view/participante-view.js";

export class ParticipantesController {
    private participantes = new Participantes();
    private participantesServices = new ParticipantesServices();
    private participanteView = new ParticipanteView('#ranking');
    
    constructor() {}

    public listaParticipantes(){
        this.ordernarLista();
    }

    private ordernarLista(): void {
        this.participantesServices.obterParticipantes()
        .then(participantes => {
            if (window.navigator.userAgent.indexOf("Firefox") > -1){
                participantes.sort((a: Participante, b: Participante) => {
                    if (a.porcentagemPositiva < b.porcentagemPositiva) {
                        return -1;
                    } else {
                        return 1;
                    }
                }).reverse();
            } else {
                participantes.sort((a: Participante, b: Participante) => {
                    if (a.porcentagemPositiva > b.porcentagemPositiva) {
                        return -1;
                    } else {
                        return 1;
                    }
                });
            }
            for(let participante of participantes) {
                this.participantes.adicionar(participante);
            }
            this.atualizaView();
        })
    }

    private atualizaView(): void {
        this.participanteView.update(this.participantes);
    }
}