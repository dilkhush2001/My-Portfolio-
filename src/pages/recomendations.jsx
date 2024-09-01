import '../css/recomendations.css';
import Slick from './slider';
const Recommendations = () => {
    return (
        <div className='recomend_main'>
            {/* ------ Heading--------- */}
            <div className='rtitle_bar'>
                <div className="rtitle">
                    <div className='rtitle_heading'>Recommendations</div>
                    <div className='rtitle_description'>
                    Recommendations highlight quick learning, and effective problem-solving skills. Known for dedicated work and collaboration well with others.
                    </div>
                </div>
            </div>

            {/* --------------Carousel------------- */}
            <Slick/>       </div>
    );
};

export default Recommendations;
