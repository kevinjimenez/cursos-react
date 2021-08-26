import React from "react";

function useInicialState(API: string) {
    const [videos, setVideos] = React.useState<any>([]);
    React.useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                console.log('data de la api')
                console.log(data)
                return setVideos(data.results)
            })
    }, [])
    return videos;
}

export {useInicialState}
