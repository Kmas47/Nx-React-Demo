import { Link } from 'react-router-dom';
import styles from './ui-components.module.scss';

export default function UiComponents() {
  return (
    <div className={styles['container']}>
      <div>
        <h1>Welcome to UiComponents!</h1>
      </div>
      <div>
        <Link to={'/random-error-page'}>Redirect to error page</Link>
      </div>
    </div>
  );
}
