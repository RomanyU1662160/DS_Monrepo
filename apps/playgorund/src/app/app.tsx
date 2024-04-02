// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { Route, Routes, Link } from 'react-router-dom';
import { Button, Tick, TickList } from '@ds-monorepo/components-ui';
import Panel from '../components/common/Panel/Panel';
import ProductsList from '../components/Products/ProdouctList/Products';
import ProductsPage from '../pages/ProductsPage/Products';

export function App() {
  return (
    <div>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products list</Link>
          </li>
        </ul>
      </div>
      <hr />
      <TickList
        items={[{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }]}
      />
      <hr />
      <Panel />
      <hr />
      <Button
        // text="Welcome  btn"
        className="btn-primary-light btn-md"
        onClick={() => {
          console.log('clicked');
        }}
      >
        Welcome Button
      </Button>
      <hr />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
