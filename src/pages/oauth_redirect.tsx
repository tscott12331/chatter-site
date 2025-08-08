import styles from './oauth_redirect.module.css';

import { useEffect, useState } from 'react'
import { parseParams } from '../util/uri';

export default function OauthRedirectPage() {
    const [accessToken, setAccessToken] = useState<string|undefined>();

    useEffect(() => {
        const hash = decodeURIComponent(location.hash);
        if(hash.length > 0) {
            console.log(parseParams(hash.slice(1)));
            const access_token = parseParams(hash.slice(1)).access_token;
            if(access_token && typeof access_token === 'string') setAccessToken(access_token);
        }
    }, []);

    return (
        <>
        {accessToken ?
        <p>access token: {accessToken}</p>
        :
        <p>helloge</p>
        }
        </>
    )
}
