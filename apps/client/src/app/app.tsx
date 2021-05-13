import styles from './app.module.scss';
import Feed from './feed/feed';
import { AuthProvider } from './auth-content/auth-content';

export function App() {
  return (
    <AuthProvider>
      <Feed />
    </AuthProvider>
  );
}

export default App;
