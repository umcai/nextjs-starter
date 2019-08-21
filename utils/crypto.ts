const encodeType = 'base64'
const decodeType = 'utf8'

export default {
    encode: (str = '') => Buffer.from(str, decodeType).toString(encodeType),
    decode: (str = '', formatType?: string) => {
        const decodeStr = Buffer.from(str, encodeType).toString(decodeType)
        switch (formatType) {
            case 'string':
                return decodeStr.replace(/\n/g, '')
            case 'array':
                return decodeStr.split('\n')
            case 'parse':
                return JSON.parse(decodeStr)
            default:
                return decodeStr
        }
    }
}
