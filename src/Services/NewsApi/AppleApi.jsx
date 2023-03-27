import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function AppleApi() {

        return fetch('https://newsapi.org/v2/everything?q=apple&from=2023-03-25&to=2023-03-25&sortBy=popularity&apiKey=ce8a8fa5f89d4fd5afea5266802e0884')
                .then(response => response.json())
                .then(json => json)
                .catch(error => console.error(error));


}