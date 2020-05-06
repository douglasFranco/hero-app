import React, {useEffect} from 'react'
import Cards from './Cards'
import Pagination from "react-js-pagination"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {search, clear, changeTerm, pageChange} from './charactersAction'

const HeroesList = props => {
  useEffect(() => {
    props.search()
  },[])

  const renderCards = () => {
    const list = props.list.results
    return ( list &&
      list.map(card => {
        return (
          <Cards card={card}  key={card.id} />
        )
      })
    )
  }

  const handlePageChange = (pageNumber) => {
    props.pageChange(pageNumber)
    props.search()
  }

  return(
    <div className="container">
      <div className="input-group my-3">
        <input type="text" className="form-control" placeholder="Find character by name" 
          value={props.term}
          onChange={props.changeTerm} />
        <div className="input-group-append">
          <button className="btn btn-outline-danger" type="button" onClick={() => props.search()}>Search</button>
        </div>
      </div>
      <div className="container d-flex flex-row justify-content-between flex-wrap mb-4">
        {renderCards()}        
      </div>
      <Pagination
        className="p-3"
        itemClass="page-item"
        linkClass="page-link"
        activePage={props.pageNumber}          
        itemsCountPerPage={20}
        totalItemsCount={props.list.total}
        pageRangeDisplayed={5}
        onChange={handlePageChange.bind(this)}        
      />
    </div>   
  )
}

const mapStateToProps = state => ({
  term: state.character.term, 
  list: state.character.list, 
  pageNumber: state.character.pageNumber
})
const mapDispatchToProps = dispatch => 
  bindActionCreators({search, clear, changeTerm, pageChange}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(HeroesList)