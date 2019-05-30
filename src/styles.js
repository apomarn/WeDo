const family = `
    font-family: 'Roboto Slab';
`

const bold = `
    ${family}
    font-weight: 700;
`

const regular = `
    ${family}
    font-weight: 400;
`

const h1Bold = `
    ${bold}
    font-size: 50px;
`

const h2Bold = `
    ${bold}
    font-size: 37px;
`

const h3Bold = `
    ${bold}
    font-size: 28px;
`

const h4Bold = `
    ${bold}
    font-size: 21px;
`

const h5Bold = `
    ${bold}
    font-size: 16px;
`

const h6Bold = `
    ${bold}
    font-size: 12px;
`
const h1 = `
    font-size: 50px;
    ${regular}
`

const h2 = `
    font-size: 37px;
    ${regular}
`

const h3 = `
    font-size: 28px;
    ${regular}
`

const h4 = `
    font-size: 21px;
    ${regular}
`

const h5 = `
    font-size: 16px;
    ${regular}
`

const h6 = `
    font-size: 12px;
    ${regular}
`

export const textStyles = {
  h1Bold,
  h2Bold,
  h3Bold,
  h4Bold,
  h5Bold,
  h6Bold,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6
}

export const colors = {
  primary: '#f4acb7',
  secondary: '#fff0f0',
  green: '#d8e3dc',
  brown: '#9d8189',
  black: '#000000',
  white: '#ffffff'
}

export const spaces = {
  compact: 4,
  cozy: 8,
  comfortable: 16,
  relax: 24
}

export const breakpoints = {
  desktop: 768
}
