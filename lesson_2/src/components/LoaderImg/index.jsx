import React, {Component} from 'react';
import puff from '@assets/puff.svg';
import './style.scss'


class LoaderImg extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            src: `${props.src}?${new Date().getTime()}`,
            title: props.title
        }
    }

    handleImageLoaded = () => {
        this.setState({
            ...this.state,
            timer: setTimeout(() => {
                console.log('loading')
                this.setState({
                    ...this.state,
                    loading: false
                })
            }, 1000)
        })
    }

    handleImageErrored = () => {
        this.setState({
            ...this.state,
            timer: setTimeout(() => {
                console.log('loading')
                this.setState({
                    ...this.state,
                    loading: false,
                    imageStatus: 'failed to load'
                })
            }, 1000)
        })
    }

    componentDidMount() {
        const imageToLoad = new Image();
        imageToLoad.src = this.state.src;
        imageToLoad.onload = () => {
            this.handleImageLoaded()
        }
    }

    componentWillUnmount() {
        clearTimeout(this.state.timer)
    }

    render() {
        const {loading, src, title, imageStatus} = this.state
        const {handleImageErrored} = this
        return (
            <div className='loading'>
                <h3>{title}</h3>
                <img hidden={!loading} src={puff} width="100" alt="loading"/>
                {imageStatus
                    ? imageStatus
                    : <img
                        onError={handleImageErrored}
                        className='loading__img'
                        hidden={loading}
                        src={src}
                        title={title}
                        alt={title}/>}
            </div>
        )
    }
}

export default LoaderImg;