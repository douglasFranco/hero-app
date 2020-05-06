import React from 'react'
import logo from '../assets/logo_marvel.svg'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {clear} from '../characters/charactersAction'
import './header.css'

const Menu = (props) => {
    return (
    <nav className="navbar navbar-dark">
      <a className="navbar-brand" href="#/characters" onClick={() => props.clear()}>
        <img src={logo} width="30" height="30" className="logo d-inline-block align-top" alt="Logo Marvel" />
      </a>
    </nav>
  )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({clear}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Menu)