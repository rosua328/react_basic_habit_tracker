class Youtube{
    constructor(key){
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }

    async mostPopular(){      
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=${this.key}`,
        this.getRequestOptions);
    const result_1 = await response.json();
    return result_1.items;
    
}


    async search(query){
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?maxResults=24&part=snippet&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions);
        const result_1 = await response.json();
        return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
    } catch (error) {
        return console.log('error', error);
    }
}

}

export default Youtube;