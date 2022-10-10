import * as React from 'react';
import MediaCard from "../mediaComponent/mediaCard";


export default function ListView() {
    return (
        <div>
        <h1>Aktuelle Aufstellungen</h1>
            <MediaCard />
            <br/>
            <MediaCard />
        </div>
    );
}
