import { Container } from "./styles";

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Datas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td >Desenvolvimento de website</td>
                        <td className="widthdraw">-R$1.100</td>
                        <td>casa</td>
                        <td>17/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}