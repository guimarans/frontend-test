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
        this.importarDados();
    }
    importarDados() {
        this.participantesServices.obterParticipantes()
            .then(participantes => {
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
//# sourceMappingURL=participantes-controller.js.map