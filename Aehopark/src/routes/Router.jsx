import { Route, Routes } from 'react-router-dom';
import App from '../App';

//app component로 줬을 때는 정상 작동함
function Router() {
  return (
    <Routes>
      <Route path="/"></Route>
    </Routes>
  );
}

export default Router;
