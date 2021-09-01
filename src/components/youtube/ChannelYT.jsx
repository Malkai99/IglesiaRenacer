import { useEffect, useState} from 'react'
import styled from 'styled-components';
import { device } from '../../styles/utilities/media_queries.styled';
import YoutubeComponent from '../YoutubeComponent';


const GridVideos = styled.div`
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap; */
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    width: 80%;
    margin: 0 auto;
    @media ${device.sm}{
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${device.lg}{
        grid-template-columns: repeat(3, 1fr);
    }
`;

const ChannelYT = () => {
    const [videosResults, setVideosResults] = useState([])
    const API = 'AIzaSyB65UagcE1m5dYUNzM5TTEG3HA9KmWBmxE'
    const channelID = 'UCCB9VqltMqGpb1kMura_ycg'
    const results = 50
    
    let channelUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&maxResults=${results}&order=date&key=${API}`

    useEffect(() => {
        if(videosResults.length !== 0) return;
        fetchVideosChannel(channelUrl)
    }, []);

    function getRandomElements(arr, num) {
        let result = new Array(num),
        len = arr.length,
        taken = new Array(len);
        if (num > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (num--) {
            var x = Math.floor(Math.random() * len);
            result[num] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    function fetchVideosChannel(url) {
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                const resultVideos = result.items.map(item => item.id.videoId)
                // const videoIDs = resultVideos[Math.floor(Math.random() * resultVideos.length)]
                const videoIDs = getRandomElements(resultVideos,9)
                setVideosResults(videoIDs)
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
