import { PropTypes } from 'prop-types';
import css from './statistics.module.css';

export const Statistics = ({ title, array }) => {
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>Upload stats</h2> : undefined}

      <ul className={css.statList}>
        {array.map(el => (
          <li key={el.id} className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
            <span className={css.label}>{el.label}</span>
            <span className={css.percentage}>{`${el.percentage}%`}</span>
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
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
