import React, { 
  useState, 
  useMemo, 
  useCallback, 
  useRef, 
  useContext, 
  useImperativeHandle, 
  useReducer 
} from 'react';

interface User {
  name: string
  login: string;
  avatar_url: string;
}

function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [users, setUser] = useState<User>()
  const names = useMemo(() => users?.map(user => user.name).join(',') || '', [users])

  const grreting = useCallback(
    (user: User) => alert(`hello ${user.name}`),
    []
  )
   function focusInput(){
    
     inputRef.current?.focus()
   }
  return (
    <div >
    <form action=''>
      <input type='text' ref={inputRef}/>

    </form>
    </div>
  );
}

export default App;
