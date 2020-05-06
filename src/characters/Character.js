import React, {useEffect} from 'react'
import { useParams } from "react-router-dom";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ableToEdit, changeName, changeDescription, selectCharacter} from './charactersAction'


const Character = props => {
  useEffect(() => {
    props.selectCharacter(JSON.parse(localStorage.getItem('charData')))
  },[])
  const renderSeries = () => {
    const series = props.characterData.series
    return (
      series.map(serie => (
        <li className="seriesList list-group-item" key={serie.id}>{serie.name}</li>
      ))
    )    
  }

  return(
    props.characterData &&
    <div>
      <div className="jumbotron">
        <div className="media flex-wrap">        
          <img src={`${props.characterData.imgPath}/portrait_fantastic.jpg`} className="detailsImg mr-3" alt="..." />
          <div className="media-body">
            <button type="button" className={`btn'${props.editable ? ' btn-success' : ' btn-danger' }`} 
            onClick={() => props.ableToEdit()}>
              {props.editable ? 'Edit Infos': 'Save Infos'}
            </button>
            <input type="text" className="detailName my-2" 
              disabled={props.editable} 
              value={props.characterData.name} 
              onChange={props.changeName} />
            <textarea className="detailsDescription" 
              disabled={props.editable} 
              value={props.characterData.description} 
              onChange={props.changeDescription} />
          </div>
        </div>
      </div>      
      <div className="container">
        <h2 className="seriesTitle p-3">Series</h2>
        <ul className="list-group list-group-flush">
          {renderSeries()}
        </ul>      
      </div>
    </div>
    
  )
}

const mapStateToProps = state => ({
  characterData: {
    name: state.character.characterData.name,
    description: state.character.characterData.description,
    imgPath: state.character.characterData.imgPath,
    series: state.character.characterData.series
  },
  editable: state.character.editable
})
const mapDispatchToProps = dispatch => 
  bindActionCreators({ableToEdit, changeName, changeDescription, selectCharacter}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Character)