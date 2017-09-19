import Zoom from '../components/zoom';

export default ()=>(
    <div className="zoom-container">
    <h1>Image Zoom Example with Sloth</h1>
    <Zoom large="../static/sloth-large.jpg" preview="../static/sloth-preview.jpg" />
    <style jsx>
        {
            `
            .zoom-container {
                width: 600px;
                margin: auto;
            }
            
            `
        }
    </style>
    </div>

)