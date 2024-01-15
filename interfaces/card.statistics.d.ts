export type StatusEvaluation = 'aproved' | 'not-accept' | 'incomplete' | 'not-meet'

export interface ICardStatistics {
    title: string;
    typeIcon: StatusEvaluation
    percentage?: number;
}