import { BaseLayout } from '@layouts/base.layout.tsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/">
          <Route path="dashboard" element={<></>} />
          <Route path="dashboard" element={<></>} />
        </Route>
        <Route path="/history">
          <Route path="overview" element={<></>} />
          <Route path="swaps" element={<></>} />
          <Route path="bridge" element={<></>} />
          <Route path="incasation" element={<></>} />
          <Route path="orders" element={<></>} />
          <Route path="deposits" element={<></>} />
          <Route path="withdrawal" element={<></>} />
          <Route path="transfer" element={<></>} />
          <Route path="affiliate-payouts" element={<></>} />
        </Route>
      </Routes>
    </BaseLayout>
  );
}

export default App;
