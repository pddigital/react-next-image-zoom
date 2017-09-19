import Zoom from '../components/zoom';

export default ()=>(
    <div className="zoom-container">
    <h1>Image Zoom Example With Burt Reynolds</h1>
    <Zoom large="../static/burt-reynolds-large.jpg" preview="../static/burt-reynolds-preview.jpg" />
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