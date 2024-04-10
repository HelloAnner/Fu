import {Component} from "react";

class QRCode extends Component {
    constructor(props) {
        super(props);

        // bind
        this.handleClick = this.handleClick.bind(this)
        this.handleClickQr = this.handleClickQr.bind(this)

        this.state = {
            active: false
        };
    }

    componentDidMount() {
        document.body.addEventListener('click', e => {
            this.setState({
                active: false
            })
        })
    }

    componentWillUnmount() {
        // 防止内存泄漏
        // document.body.removeEventListener('click')
    }

    handleClick() {
        this.setState({
            active: !this.state.active
        });
    }

    handleClickQr(e) {
        // 防止事件继续向上传播
        e.stopPropagation();
    }

    render() {
        return (
            <div className='qr-wrapper'>
                <button className='qr' onClick={this.handleClick}>二维码</button>
                <div
                    className="code"
                    style={{display: this.state.active ? 'block' : 'none'}}
                    onClick={this.handleClickQr}
                >
                    <img src='../logo.svg' alt='qr'/>
                </div>
            </div>
        )
    }
}

export default QRCode