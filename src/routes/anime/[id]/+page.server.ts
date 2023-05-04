import Jikan from '$lib/common/jikan/index.js';

export async function load({ params }) {
    const { id } = params;
    const malId = Number(id);
    const result = await Jikan.getAnime(malId);
    return { result };
}