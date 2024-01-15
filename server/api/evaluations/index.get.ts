import evaluations from '~/data/evaluations.json';

export default defineEventHandler(async (event) => {
    return evaluations;
})