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

    const maskedToken = accessToken
        ? `${accessToken.slice(0, 4)}${'•'.repeat(Math.max(8, accessToken.length - 8))}${accessToken.slice(-4)}`
        : '';

    return (
        <div className="min-h-screen bg-chatter-bg text-chatter-text-primary flex items-center justify-center p-4">
            <div className="bg-chatter-surface p-8 rounded-lg shadow-xl max-w-md w-full">
                <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-600/20 text-green-500">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" />
                        </svg>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-center">Authentication Successful</h2>
                {accessToken ? (
                    <div className="space-y-4">
                        <p className="text-chatter-text-secondary text-sm text-center">
                            Return to Chatter and paste this token to log in.
                        </p>
                        <div className="bg-chatter-bg p-4 rounded font-mono text-sm break-all border border-chatter-surface text-center">
                            {maskedToken}
                        </div>
                        <button
                            onClick={copyToClipboard}
                            className={`w-full py-2 px-4 rounded font-semibold transition ${copied ? 'bg-green-600' : 'bg-chatter-accent hover:opacity-90'}`}
                        >
                            {copied ? 'Copied!' : 'Copy to Clipboard'}
                        </button>
                    </div>
                ) : (
                    <p className="text-center text-chatter-text-secondary">Processing authentication...</p>
                )}
            </div>
        </div>
    )
}
