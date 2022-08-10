import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import Users from '../components/users'
export interface IHomePageProps { }

  export default function HomePage() {
    const auth = getAuth();
    const navigate = useNavigate();
    return (
        <div>
            <p>Home Page (Protected by Firebase!)</p>
            <button type="button" onClick={e=> navigate('/CreateSystem')}>Create System</button>
            <button type="button" onClick={e=> navigate('/Systems')}>Systems</button>
            <button onClick={() => signOut(auth)}>Sign out of Firebase</button>
        </div>
    );
};
