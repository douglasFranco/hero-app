const INITIAL_STATE = {
  term: '', 
  list: [], 
  characterData: {
    name: '',
    description: '',
    imgPath: '',
    series: []
  },
  pageNumber: 1,
  editable: true,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TERM_CHANGED':
            return {...state, term: action.payload}
        case 'CHARACTERS_SEARCHED':
            return {...state, list: action.payload}
        case 'TERM_CLEAR':
            return {...state, term: '', pageNumber: 1}
        case 'CHARACTER_SELECTED':
            return {...state, 
                characterData: {
                  name: action.payload.name,
                  description: action.payload.description,
                  imgPath: action.payload.thumbnail.path,
                  series: action.payload.series.items
                }
            }
        case 'CHARACTERS_PAGECHANGE':
            return {...state, pageNumber: action.payload}
        case 'CHARACTER_ABLETOEDIT':
            return {...state, editable: !state.editable}
        case 'NAME_CHANGED':
            return {...state, 
              characterData: {
                name: action.payload,
                description: state.characterData.description,
                imgPath: state.characterData.imgPath,
                series: state.characterData.series
              } 
          }
        case 'DESCRIPTION_CHANGED':
          return {...state, 
            characterData: {
              name: state.characterData.name,
              description: action.payload,
              imgPath: state.characterData.imgPath,
              series: state.characterData.series
            } 
        }
        default:
            return state
    }
}