import { View } from "./view.js";
export class ParticipanteView extends View {
    template(model) {
        let posicao = 1;
        return `
        ${model.lista().map((participante) => {
            return `
            <div class="ranking__item tooltip">
                <div class="ranking__content">
                    <figure class="ranking__picture" style="background-image: url(${participante.picture})">
                        <img src="${participante.picture}" alt="${participante.name}" loading="lazy">
                        <figcaption class="ranking__bullet">
                            ${posicao++}
                        </figcaption>
                    </figure>
                    <div class="ranking__info">
                        <h2> ${participante.name}</h2>
                        <p> ${participante.description} </p>
                    </div>
                </div>

                <div class="tooltip__content">
                    <table>
                        <thead>
                            <tr>
                                <th>GOSTAM</th>
                                <th>NÃO GOSTAM</th>
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
            </div>
            `;
        }).join('')}`;
    }
}
//# sourceMappingURL=participante-view.js.map