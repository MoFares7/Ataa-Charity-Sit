import React from "react";

export default function LatestNewApi() {

        return fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ce8a8fa5f89d4fd5afea5266802e0884')
                .then(response => response.json())
                .then(json => json)
                .catch(error => console.error(error));


}