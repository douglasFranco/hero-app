import React from 'react'
import {connect} from 'react-redux'

const Cards = props => {
  const showCharacterDetails = (charData) => {
  localStorage.setItem('charData', JSON.stringify(charData))
    window.location.href = '#/character'
  }

  return (
    <div className="card m-2" onClick={() => showCharacterDetails(props.card)}>
      <img src={`${props.card.thumbnail.path}/portrait_fantastic.jpg`} className="card-img-top" />
      <div className="card-body">
        <h5 className="text-white">{props.card.name}</h5>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({list: state.character.list})
export default connect(mapStateToProps)(Cards)