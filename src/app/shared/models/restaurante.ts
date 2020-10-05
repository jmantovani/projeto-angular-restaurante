import { HorarioOperacao } from './horario-operacao';

export interface Restaurante {
  id: number;
  nome: string;
  regiao?: string;
  endereco?: string;
  culinaria?: string;
  tipo?: string;
  valor_entrega?: number;
  telefone?: string;
  selecionado: boolean;
  horario_operacao?: HorarioOperacao;
}
