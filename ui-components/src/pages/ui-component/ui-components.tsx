import { Link } from 'react-router-dom';
import styles from './ui-components.module.scss';
import { UIRoutes } from '../../routes/routes.constants';
import { Card } from '../../components/card/card';

export default function UiComponents() {
  return (
    <div className={styles['container']}>
      <div>
        <h1 style={{ textAlign: 'center' }}>Welcome to UiComponents!</h1>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        <div style={{ padding: 24 }}>
          <Link
            style={{ textDecoration: 'none' }}
            to={`/${UIRoutes.MEMORY_GAME}`}
          >
            <Card>
              <p>Click to go to memory game!</p>
            </Card>
          </Link>
        </div>

        <div style={{ padding: 24 }}>
          <Link style={{ textDecoration: 'none' }} to={'/random-error-page'}>
            <Card>
              <p> Redirect to error page</p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
