export const  getGif = async(Categoria) => {
    const apiKey = 'RAQQrVUADcsM1EZJXD4UMq8kFXezUD91';
    
    const url   = `http://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ encodeURI(Categoria) }&limit=10`;
    
    const resp = await fetch(url);
    const {data} = await resp.json(); 

    const gifts = data.map(
        gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url
            }
        }
    );

    return gifts;
};