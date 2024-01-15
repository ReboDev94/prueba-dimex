import type { StatusEvaluation } from "~/interfaces"

export const EVALUATION_STATUS: Record<string | number, string> = {
    1: 'Perfilamiento',
    2: 'No procede',
    3: 'Autorización buro',
    4: 'Buro de crédito',
    5: 'Oferta comercial'

}
export const ICONS_EVALUATIONS_STATUS: Record<StatusEvaluation, any> = {
    aproved: {
        label: 'Aprobada con cita',
        icon: 'SvgoIconUserFollow',
        classes: 'border-primary-100 bg-primary-50 text-primary-500'
    },
    'not-accept': {
        label: 'No acepta oferta',
        icon: 'SvgoIconX',
        classes: 'border-secondary-100 bg-secondary-50 text-secondary-500'
    },
    incomplete: {
        label: 'Evaluación incompleta',
        icon: 'SvgoIconDocument',
        classes: 'border-warning-100 bg-warning-50 text-warning-500'
    },
    'not-meet': {
        label: 'No cumple con el perfil',
        icon: 'SvgoIconUserUnfollow',
        classes: 'border-error-100 bg-error-50 text-error-500'
    },
}