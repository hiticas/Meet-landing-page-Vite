import Typography from '../Typography/Typography';
import './SectionCounter.scss';

function SectionCounter({ label }) {
  return (
    <div className="section-counter">
      <span className='line'></span>
        <Typography className='label' type="preset-5" color="slate-300">{label}</Typography>
    </div>
  );
}

export default SectionCounter;
