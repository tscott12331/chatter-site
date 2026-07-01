import { useEffect, useState } from 'react'
import { parseParams } from '../util/uri';

export default function OauthRedirectPage() {
    const [accessToken, setAccessToken] = useState<string|undefined>();
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const hash = decodeURIComponent(location.hash);
        if(hash.length > 0) {
            const access_token = parseParams(hash.slice(1)).access_token;
            if(access_token && typeof access_token === 'string') setAccessToken(access_token);
        }
    }, []);

    const copyToClipboard = () => {
        if (accessToken) {
            navigator.clipboard.writeText(accessToken).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">Authentication Successful</h2>
                {accessToken ? (
                    <div className="space-y-4">
                        <p className="text-gray-400 text-sm">Your access token:</p>
                        <div className="bg-gray-900 p-4 rounded font-mono text-sm break-all border border-gray-700">
                            {accessToken}
                        </div>
                        <button
                            onClick={copyToClipboard}
                            className={`w-full py-2 px-4 rounded font-semibold transition ${copied ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'}`}
                        >
                            {copied ? 'Copied!' : 'Copy to Clipboard'}
                        </button>
                    </div>
                ) : (
                    <p className="text-center text-gray-400">Processing authentication...</p>
                )}
            </div>
        </div>
    )
}
