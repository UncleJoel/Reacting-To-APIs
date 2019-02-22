import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import FilmCard from './filmcard';
import PeopleCard from './peoplecard'
import logo from './logo.png';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [],
            people: [],
            loadFilms: false,
            loadPeople: false,
        }
    
    }
    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(data => {
                this.setState({ films: data })
            })
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(spec => spec.json())
            .then(pepData => {
                this.setState({ people: pepData })
            })
    }

    handleFilms() {
        this.setState({
            loadFilms: true,
        })
    }

    handlePeople() {
        this.setState({
            loadPeople: true,
        })
    }

    reset() {
        this.setState({
            loadFilms: false,
            loadPeople: false,
        })
    }
    
    


    render() {
        if (this.state.loadFilms === false && this.state.loadPeople === false) {
            return (
                <>
                <div className='container text-center text-light mt-5'>
                <img src={logo} alt="logo.png" srcset=""/>
                <div className='row'></div>
                <button type='button' className='center btn-info m-5 rounded' onClick={(e) => this.handleFilms(e)}>Films</button>
                <button type='button' className='center btn-info m-5 rounded' onClick={(e) => this.handlePeople(e)}>People</button>
                </div>
                </>
                   )
        } if(this.state.loadFilms === true) {
            return (
                <>
                    <div className='container-fluid'>
                        <h1 className='text-center col-5 mx-auto rounded text-light border p-2 border-info bg-dark'>Studio Ghibili Films:</h1>
                        <div className='row'>
                            <button type = 'button' className ='center btn-info mx-auto col-1 rounded' onClick={(e) => this.reset(e)}>Home</button>
                        </div>
                        <FilmCard films={this.state.films} />
                    </div>
                </>
            )
        } if(this.state.loadPeople === true)  {
            return (
                <>
                    <div className='container-fluid'>
                        <h1 className='text-center col-5 mx-auto rounded text-light border p-2 border-info bg-dark'>Studio Ghibili People:</h1>
                        <div className='row'>
                            <button type = 'button' className ='center btn-info mx-auto col-1 rounded' onClick={(e) => this.reset(e)}>Home</button>
                        </div>
                        <PeopleCard people={this.state.people} />
                    </div>
                </>
            )
        }
    }
}

export default App;