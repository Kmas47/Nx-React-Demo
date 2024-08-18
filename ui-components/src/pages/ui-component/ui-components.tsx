import { Link } from 'react-router-dom';
import { UIRoutes } from '../../routes/routes.constants';
import { Card } from '../../components/card/card';

export default function UiComponents() {
  return (
    <div>
      <div>
        <h1 style={{ textAlign: 'center' }}>Welcome to Dashboard!</h1>
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
