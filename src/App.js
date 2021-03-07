import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')){
        return (
            // <Router>
            //     <div className="Navigation">
            //         <Switch>
            //             <Route path="/" exact component={LoginForm} />
            //             <Route path="/signup" component={SignupForm} />
            //         </Switch>
            //     </div>
            // </Router>
            <LoginForm />
        )
    }

    return (
        <ChatEngine 
            height="100vh"
            projectID="3078a2d4-ba2d-4449-93bb-a33919c05bcc"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;