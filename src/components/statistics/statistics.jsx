import { PropTypes } from 'prop-types';
import css from './statistics.module.css';

export const Statistics = ({ title, array }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title ? 'Upload stats' : null}</h2>

      <ul className="stat-list">
        {array.map(el => (
          <li key={el.id}>
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}</span>
          </li>
        ))}
        {/* <li className="item">
          <span className="label">.docx</span>
          <span className="percentage">4%</span>
        </li>
        <li className="item">
          <span className="label">.mp3</span>
          <span className="percentage">14%</span>
        </li>
        <li className="item">
          <span className="label">.pdf</span>
          <span className="percentage">41%</span>
        </li>
        <li className="item">
          <span className="label">.mp4</span>
          <span className="percentage">12%</span>
        </li> */}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
