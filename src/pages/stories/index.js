import React, { Component } from 'react'
import styled from 'styled-components'
import NavBar from '../../components/navbar'
import Result from './result'
import { map } from 'lodash'
import { spaces } from '../../styles'
import firebase from '../../firebase'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: ${spaces.cozy * 6}px;
  max-width: ${spaces.cozy * 80}px;
  padding: 0 ${spaces.comfortable}px;
`

const results = [
  {
    coupleNames: 'Bettina Gorra & Roberto Valderrama Lozada',
    link: '/registry/bettinaandroberto',
    weddingDate: 1559347200000
  },
  {
    coupleNames: 'Kayla Limphaibule & Roberto Bejar',
    link: '/wedding/robertoandkayla2019',
    weddingDate: 1559865600000
  },
  {
    coupleNames: 'Maritza Fontanez & Roberto Martinez',
    link: '/wedding/marigotrobbed',
    weddingDate: 1559347200000
  },
  {
    coupleNames: 'Monica Giron & Roberto Guevara',
    link: '/wedding/monica-roberto',
    weddingDate: 1558742400000
  },
  {
    coupleNames: 'Roberto Andrade & Kalin Chambers',
    link: '/wedding/robertoandkalin',
    weddingDate: 1559347200000
  },
  {
    coupleNames: 'Vanessa Matos & Roberto Baptista',
    link: '/registry/bama',
    weddingDate: 1558742400000
  },
  {
    coupleNames: 'Claudia Guerra & Roberto López',
    link: '/wedding/robyclau2019',
    weddingDate: 1560470400000
  },
  {
    coupleNames: 'Dora Varga & Roberto Parodi',
    link: '/registry/doraandroberto',
    weddingDate: 1558137600000
  },
  {
    coupleNames: 'Erika Korowin & Roberto Assef',
    link: '/registry/erikaandrobertoassef',
    weddingDate: 1559952000000
  },
  {
    coupleNames: 'Evgenia Pavlova & Roberto Bueso',
    link: '/registry/evgeniaandroberto',
    weddingDate: 1558137600000
  },
  {
    coupleNames: 'Ewa Rajski & Roberto Carranco',
    link: '/registry/ewaandroberto',
    weddingDate: 1559952000000
  },
  {
    coupleNames: 'Kelli michanowicz & Roberto Castrillon',
    link: '/wedding/chimmyandkelli',
    weddingDate: 1559952000000
  },
  {
    coupleNames: 'Kyra Wyandt & Roberto Stocchi',
    link: '/wedding/kyraandroberto',
    weddingDate: 1558137600000
  },
  {
    coupleNames: 'Roberto Rodriguez & Fatima Matos',
    link: '/wedding/robertoandfatima',
    weddingDate: 1558137600000
  },
  {
    coupleNames: 'Sarah Bradley & Roberto Cueva',
    link: '/wedding/sarah-roberto',
    weddingDate: 1559952000000
  },
  {
    coupleNames: 'Stephanie Dalmau & Roberto Sanchez',
    link: '/wedding/robertoystephanie',
    weddingDate: 1559952000000
  },
  {
    coupleNames: 'Alexia Anagnostakis & Roberto Ugalde',
    link: '/registry/alexiaandroberto',
    weddingDate: 1557532800000
  },
  {
    coupleNames: 'Deyvis Roberto Rodriguez & Jamie Marshall Luther',
    link: '/registry/deyvisandjamie',
    weddingDate: 1557619200000
  },
  {
    coupleNames: 'Judi Malone & Roberto Merlos',
    link: '/wedding/judiandroberto',
    weddingDate: 1560556800000
  },
  {
    coupleNames: 'Merari Garza & Roberto Bautista',
    link: '/wedding/merariandroberto',
    weddingDate: 1557964800000
  },
  {
    coupleNames: 'Ornella Greci & Roberto Oliver',
    link: '/registry/ornellayroberto',
    weddingDate: 1560988800000
  },
  {
    coupleNames: 'Shelli Harsche-Herman & Roberto Lugo',
    link: '/wedding/shelliandroberto2018',
    weddingDate: 1558051200000
  },
  {
    coupleNames: 'Elvira Sanchez & Roberto Hernandez',
    link: '/registry/elviraandroberto',
    weddingDate: 1557446400000
  },
  {
    coupleNames: 'Ruby Nuño & Roberto Rivadulla',
    link: '/wedding/rubyandrobertosantos',
    weddingDate: 1556928000000
  },
  {
    coupleNames: 'Stacey Petty & Tim Roberto',
    link: '/registry/stacey-tim',
    weddingDate: 1561161600000
  },
  {
    coupleNames: 'Trisha Baltazar & Roberto Guzman',
    link: '/wedding/trishaandroberto',
    weddingDate: 1561161600000
  },
  {
    coupleNames: 'Erika Rice & Roberto Barraza Jr',
    link: '/wedding/robertoanderika',
    weddingDate: 1561766400000
  },
  {
    coupleNames: 'Marcela Diaz Alvarez & Roberto Davila',
    link: '/wedding/marcelaandroberto2019',
    weddingDate: 1561766400000
  },
  {
    coupleNames: 'Estefani Portillo & Roberto Garza',
    link: '/wedding/estefaniandroberto2019',
    weddingDate: 1555113600000
  },
  {
    coupleNames: 'RACHEL MERRITT & ROBERTO TAMAYO',
    link: '/wedding/robertoandrachel',
    weddingDate: 1562976000000
  },
  {
    coupleNames: 'Vanessa Ortiz Medina & Roberto L Gonzalez Odriozola',
    link: '/wedding/vanessaandroberto2019',
    weddingDate: 1562976000000
  },
  {
    coupleNames: 'Carmen Ortiz & Roberto DeJesus',
    link: '/wedding/carmenandroberto',
    weddingDate: 1564099200000
  },
  {
    coupleNames: 'JoMarie Yambao & Roberto Brito',
    link: '/wedding/jomarieandroberto',
    weddingDate: 1564099200000
  },
  {
    coupleNames: 'Jessica Rios & Roberto Rios',
    link: '/wedding/robertoandjessica2019',
    weddingDate: 1564185600000
  },
  {
    coupleNames: 'Leah Collins & Roberto Aviles',
    link: '/wedding/leahyrob',
    weddingDate: 1554076800000
  },
  {
    coupleNames: 'Melinda McNally & Roberto Franchetti',
    link: '/registry/melindaandroberto',
    weddingDate: 1564185600000
  },
  {
    coupleNames: 'Natalia Castillo & Roberto Garcia',
    link: '/wedding/nataliaandrobertocarlos',
    weddingDate: 1564185600000
  },
  {
    coupleNames: 'Catherine Roberto & Michael Ziegler',
    link: '/registry/catherineandmichaelz',
    weddingDate: 1553299200000
  },
  {
    coupleNames: 'Chantel Pardee & Roberto Cabrera',
    link: '/wedding/robertandchantel',
    weddingDate: 1553472000000
  },
  {
    coupleNames: 'Katie Eash & Roberto Mantica',
    link: '/registry/katieandroberto',
    weddingDate: 1565308800000
  },
  {
    coupleNames: 'Lisset Byrne & Roberto Pancorbo',
    link: '/wedding/robertoandlisset',
    weddingDate: 1553299200000
  },
  {
    coupleNames: 'Roberto Thornton & Keiasha Roland',
    link: '/registry/keiashaandroberto',
    weddingDate: 1564790400000
  },
  {
    coupleNames: 'Robyn Lopez & Roberto R. Mendoza III',
    link: '/wedding/robertoandrobyn',
    weddingDate: 1564790400000
  },
  {
    coupleNames: 'Janneth Estrada & Roberto Martinez',
    link: '/wedding/jannethandroberto',
    weddingDate: 1552694400000
  },
  {
    coupleNames: 'solange oliver & roberto macotto',
    link: '/registry/solangeandroberto',
    weddingDate: 1552176000000
  },
  {
    coupleNames: 'Kwai Tei Chan & Roberto Lacayo',
    link: '/registry/kwaiteiandroberto',
    weddingDate: 1551484800000
  },
  {
    coupleNames: 'Roxy Luna & Roberto Jara',
    link: '/wedding/roxyandroberto',
    weddingDate: 1566604800000
  },
  {
    coupleNames: 'Rebecca Hallmark & Roberto De Vecchi',
    link: '/registry/robertoandrebecca',
    weddingDate: 1567296000000
  },
  {
    coupleNames: 'Sashaa Plair Torres & Roberto Decker Molina',
    link: '/wedding/sashaaandroberto',
    weddingDate: 1567296000000
  },
  {
    coupleNames: 'Alexandria Angelina Warden & Roberto Carlos Martinez',
    link: '/wedding/alexandriaandroberto',
    weddingDate: 1567814400000
  }
]

class Stories extends Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)

    this.document = 'views/' + this.props.user.uid

    this.viewsRef = firebase.database().ref(this.document)
  }

  onClick(value) {
    this.viewsRef.push({ value })
  }

  render() {
    return (
      <>
        <NavBar user={this.props.user} />
        <Container>
          {map(results, result => {
            return <Result key={result.link} {...result} onClick={this.onClick} />
          })}
        </Container>
      </>
    )
  }
}

export default Stories
