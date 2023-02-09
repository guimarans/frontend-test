import { Participantes } from "../models/participantes.js";
import { ParticipantesServices } from "../services/participantes-services.js";
import { ParticipanteView } from "../view/participante-view.js";

export class ParticipantesController {
    private participantes = new Participantes();
    private participantesServices = new ParticipantesServices();
    private participanteView = new ParticipanteView('#ranking');
    
    constructor() { 
        
    }

    public listaParticipantes(){
        this.importarDados();
    }

    private importarDados(): void {
        this.participantesServices.obterParticipantes()
        .then(participantes => {
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