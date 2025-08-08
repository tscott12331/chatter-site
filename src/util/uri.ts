export type TParamReturn = Record<string, string|string[]|boolean>;

export function parseParams(paramString: string): TParamReturn {
    const pairs = paramString.split('&');
    const obj: TParamReturn = {};
    for(const pair of pairs) {
        const pairSplit = pair.split('=');
        const key = pairSplit.at(0);
        if(!key) continue;

        const value = pairSplit.at(1);
        if(value) {
            const parsedValue = URL.canParse(value) ? URL.parse(value) : value;
            obj[key] = parsedValue?.toString() ?? value;
        } else {
            obj[key] = true;
        }

    }

    return obj;
}

