import type { StatusEvaluation } from "./card.statistics";

export interface IEvaluation {
    date: string;
    name: string;
    lada: string;
    celphone: string;
    progress: 1 | 2 | 3 | 4 | 5;
    status: StatusEvaluation;
}