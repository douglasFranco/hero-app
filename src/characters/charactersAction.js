import axios from 'axios'
import constants from '../commom/constants'

const ableToEdit = () => {
  return {type: 'CHARACTER_ABLETOEDIT'}
}

const changeDescription = (event) => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
})

const changeName = (event) => ({
  type: 'NAME_CHANGED',
  payload: event.target.value
})

const changeTerm = (event) => ({
  type: 'TERM_CHANGED',
  payload: event.target.value
})

const clear = () => {
  return [{type: 'TERM_CLEAR'}, search()]
}

const selectCharacter = (charData) => {
  return {
    type: 'CHARACTER_SELECTED', 
    payload: charData
  }
}

const pageChange = (pageNumber) => {
  return [{type: 'CHARACTERS_PAGECHANGE', payload: pageNumber}]
}

const search = () => {    
  return (dispatch, getState) =>  {
    const pageNumber = getState().character.pageNumber
    const term = getState().character.term
    const offset = (pageNumber > 1) ? `offset=${(pageNumber - 1) * 20}` : ''
    const search = term ? `nameStartsWith=${term}&` : ''
    axios.get(constants.BASE_URL + offset + search + constants.AUTH)
    .then(resp => {
      dispatch({type: 'CHARACTERS_SEARCHED', payload: resp.data.data})
    })
  }
}

export {ableToEdit, changeName, changeDescription, clear, changeTerm, 
  pageChange, selectCharacter, search}