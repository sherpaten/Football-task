import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Components/NotFound';
import Layout from './Components/Layout';

// Static imports for all pages
import Index from './Pages/Index';
import AddData from './Pages/AddData';
import Debug from './Pages/debug';
import DeleteData from './Pages/DeleteData';
import DisplayTeam from './Pages/DisplayTeam';
import Games from './Pages/Games';
import Members from './Pages/Members';
import NewPage from './Pages/NewPage';
import Teams from './Pages/Teams';
import UpdateData from './Pages/UpdateData';

// Static route configuration
const routes = [
  { path: '/', component: Index },
  { path: '/AddData', component: AddData },
  { path: '/debug', component: Debug },
  { path: '/DeleteData', component: DeleteData },
  { path: '/DisplayTeam', component: DisplayTeam },
  { path: '/Games', component: Games },
  { path: '/Members', component: Members },
  { path: '/NewPage', component: NewPage },
  { path: '/Teams', component: Teams },
  { path: '/UpdateData', component: UpdateData },
];
function App() {

  // Since Vercel doesn't support dynamic imports, we need to use a workaround to load pages
  if (process.env.NODE_ENV === 'production') {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
  }


  const context = require.context('./Pages', false, /\.js$/);
  // special keys
  const Pages = context.keys().map(key => context(key).default);

  const specialNames = {
    'Index': '/',
  };
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {Pages.map(Page => {
          const name = Page.name;
          const path = specialNames[name] || `/${name}`;
          return <Route key={name} path={path} element={<Page />} />;
        })}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
