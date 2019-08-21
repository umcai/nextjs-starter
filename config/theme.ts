export const accent = {
  '1': '#6FFFB0',
  '2': '#FD6FFF',
  '3': '#81FCED',
  '4': '#FFCA58'
}
export const neutral = {
  '1': '#00873D',
  '2': '#3D138D',
  '3': '#00739D',
  '4': '#A2423D'
}
export const status = {
  critical: '#FF4040',
  error: '#FF4040',
  warning: '#FFAA15',
  ok: '#00C781',
  unknown: '#CCCCCC',
  disabled: '#CCCCCC'
}
export const light = {
  '1': '#F8F8F8',
  '2': '#F2F2F2',
  '3': '#EDEDED',
  '4': '#DADADA',
  '5': '#DADADA',
  '6': '#DADADA'
}
export const dark = {
  '1': '#333333',
  '2': '#555555',
  '3': '#777777',
  '4': '#999999',
  '5': '#999999',
  '6': '#999999'
}
export const radiusSize = '2px'

export default {
  color: {
    headerBg: '#fefefe',
    menuBg: '#fefefe',
    contentBg: '#fefefe',
    primaryFont: dark['3'],
    primaryFontHover: dark['2'],
    secondaryFont: dark['4'],
    secondaryFontHover: dark['3'],
    lightList: [accent['1'], accent['2'], accent['3'], accent['4']],
    darkList: [neutral['1'], neutral['2'], neutral['3'], neutral['4']],
    black: dark['1'],
    white: light['1'],
    grey: light['3'],
  },
  size: {
    radius: radiusSize
  },
  font: {
    family: 'Verdana, Arial, Helvetica, "sans-serif"'
  }
}
