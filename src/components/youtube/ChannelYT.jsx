import { useEffect, useState} from 'react'
import styled from 'styled-components';
import YoutubeComponent from '../YoutubeComponent';

const GridVideos = styled.div`
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    width: 80%;
    margin: 0 auto;
`;

const ChannelYT = () => {
    const [videosResults, setVideosResults] = useState([])
    const API = 'AIzaSyB65UagcE1m5dYUNzM5TTEG3HA9KmWBmxE'
    const channelID = 'UCCB9VqltMqGpb1kMura_ycg'
    const results = 9
    
    let channleURl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&maxResults=${results}&order=date&key=${API}`

    useEffect(() => {
        fetchVideosChannel(channleURl)
    }, []);

    function fetchVideosChannel(url) {
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                const resultVideos = result.items.map(item => item.id.videoId)
                setVideosResults(resultVideos)
            })
            .catch((error) => console.error(error))
    }

    const getVideosChannel = () => {
        return videosResults.map((videoId, key) => {
            console.log(' params ', key, videoId)
            return <YoutubeComponent className='video__grid' key={key} embedId={videoId} />
        })
    }

    return (
        <GridVideos>
            {getVideosChannel()}
        </GridVideos>
    )
}

export default ChannelYT
