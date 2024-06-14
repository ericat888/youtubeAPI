import axios from 'axios';

const API_KEY_VIMEO = 'b210a75dbbe2a09f36cca944f2d5edaf'

export const buscarVideosVimeo = async (query) => {
  try {
    const pesquisa = await axios.get('https://api.vimeo.com/videos', {
      params: {
        query: query,
        per_page: 10,
      },
      headers: {
        Authorization: `Bearer ${API_KEY_VIMEO}`,
      },
    });
    return pesquisa.data.data;
  } catch (erro) {
    console.error('Erro ao buscar vídeos no Vimeo:', erro);
    throw erro;
  }
};