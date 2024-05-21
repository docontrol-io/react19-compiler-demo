export const useWithPromiseExample = `
import {use} from 'react';

function Users({usersPromise}) {
  // \`use\` will suspend until the promise resolves.
  const users = use(usersPromise);
  return users.map(user => <p key={user.id}>{user.name}</p>);
}

function Page({usersPromise}) {
  // When \`use\` suspends in Users,
  // this Suspense boundary will be shown.
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Users usersPromise={usersPromise} />
    </Suspense>
  )
}
`

export const useWithContextExample = `
const ThemeContext = createContext('');

function App({children}) {
  return (
    <ThemeContext value="dark">
      {children}
    </ThemeContext>
  );  
}
//=================================================
import {use} from 'react';
import ThemeContext from './ThemeContext'

function Heading({children}) {
  if (children == null) {
    return null;
  }
  
  // This would not work with useContext
  // because of the early return.
  const theme = use(ThemeContext);
  return (
    <h1 style={{color: theme.color}}>
      {children}
    </h1>
  );
}
`