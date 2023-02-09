import { View } from "./view.js";
export class ParticipanteView extends View {
    template(model) {
        let posicao = 1;
        return `
        ${model.lista().map((participante) => {
            return `
            <div class="ranking__item tooltip">
                <div class="row">
                    <figure class="ranking__picture">
                    <img src="${participante.picture}" alt="${participante.name}" loading="lazy">
                    <figcaption class="ranking__picture--position">
                        ${posicao++}
                    </figcaption>
                    </figure>
                    <div class="ranking__info">
                    <h2> ${participante.name}</h2>
                    <p> ${participante.description} </p>
                    </div>
                </div>

                <table class="tooltip__content">
                    <thead>
                    <tr>
                        <th>Gostam</th>
                        <th>Nao gostam</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>${(participante.porcentagemPositiva || 0).toFixed(0)}%</td>
                        <td>${(participante.porcentagemNegativa || 0).toFixed(0)}%</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            `;
        }).join('')}`;
    }
}
//# sourceMappingURL=participante-view.js.map