export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=zTcd21k2Tl2vCPbQxDqwExQ5TX2yCWXr&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map(({id,title,images})=>{
        return{
            id: id,
            title: title,
            url: images?.downsized_medium.url
        }
    })
    return gifs;
}