export default class Zoom extends React.Component {
    
        constructor(props) {
            super(props);
    
            this.state = {
                hovered: false,
                imageHover: false
            }
    
        }
    
        componentDidMount() {
    
            // Event listener for the image zoom function - reacting on mouse move over the element
    
            let elem = document.getElementById('preview');
    
            elem.addEventListener('mousemove', (event) => {
    
                let bounds = elem.getBoundingClientRect();
    
                let xposition = (event.clientX - bounds.left);
                let yposition = (event.clientY - bounds.top);
    
                let xpercent = Math.round(100 / (bounds.width / xposition));
                let ypercent = Math.round(100 / (bounds.height / yposition));
    
                document
                    .querySelector('.zoom-box')
                    .style
                    .backgroundPosition = xpercent + '% ' + ypercent + '%';
            })
        }
    
        loadImage() {
            // larger image lazy loads so it's not slowing down the page on load
            this.setState({imageHover: true});
        }
    
        render() {

            // images are backgrounds on divs
    
            let divShow = {
                backgroundImage: `url(${this.props.large})`
            }
    
            let divHide = {
                backgroundImage: 'none'
            }
    
            return (
                <div className="image-preview">
                    <img
                        id="preview"
                        src={this.props.preview}
                        onMouseEnter={this
                        .loadImage
                        .bind(this)}/> {this.state.imageHover
                        ? <div style={divShow} className="zoom-box"></div>
    
                        : <div style={divHide} className="zoom-box"></div>
                        }
    
                    <style jsx>
                        {
                            `img {
                                width: 100%;
                            }
    
                            .zoom-box {
                                width: 450px;
                                height: 450px;
                                border: 1px solid black;
                                position: absolute;
                                right: -450px;
                                top: 0;
                                display: none;
                            }
    
                            .image-preview {
                                position: relative;
                            }
    
                            .image-preview:hover {
                                cursor: zoom-in;
                            }
    
                            .image-preview:hover .zoom-box {
                                display: block;
                            }
    
                            @media(max-width: 767px) {
                                .image-preview:hover {
                                    cursor: pointer;
                                }
                                .image-preview:hover .zoom-box {
                                    display: none;
                                }
                            }
                             `
                        }</style>
                </div>
            )
    
        }
    }