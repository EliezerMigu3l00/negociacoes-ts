import { NegociacoesDoDia } from "../interfaces/negociacaoDoDia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesServices {

    public obterNegociacoes(): Promise <Negociacao[]>{
           return fetch('http://localhost:8080/dados')
            
                .then(res => {return res.json();})
                
                .then((dados: NegociacoesDoDia[]) => {
                    return dados.map(dadoDeHoje => {
                        return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante)
                    })
                });
    } 
}