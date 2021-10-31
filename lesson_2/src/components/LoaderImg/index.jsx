import React, {Component} from 'react';
import puff from '@assets/puff.svg';
import './style.scss'


class LoaderImg extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            img: new Image(),
            src: props.src,
            title: props.title
        }
    }

    handleImageLoaded = () => {
        this.setState({
            ...this.state,
            timer: setTimeout(() => {
                this.setState({
                    ...this.state,
                    loading: false
                })
            }, 2000)
        })
    }

    handleImageErrored = () => {
        this.setState({
            ...this.state,
            timer: setTimeout(() => {
                this.setState({
                    ...this.state,
                    loading: false,
                    imageStatus: 'failed to load'
                })
            }, 2000)
        })
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            img: {
                ...this.state.img,
                src: this.state.src,
            }
        })
    }

    componentWillUnmount() {
        clearTimeout(this.state.timer)
    }

    render() {
        const {loading, title, imageStatus, img} = this.state
        const {handleImageLoaded, handleImageErrored} = this
        return (
            <div className='loading'>
                <h3>{title}</h3>
                <img hidden={!loading} src={puff} width="100" alt="loading"/>
                {imageStatus
                    ? imageStatus
                    : <img
                        onLoad={handleImageLoaded}
                        onError={handleImageErrored}
                        className='loading__img'
                        hidden={loading}
                        src={img.src}
                        title={title}
                        alt={title}/>}
            </div>
        )
    }
}

export default LoaderImg;