import React from "react"
import ProfilePage from './ProfilePage/ProfilePage';
import FeedPage from './FeedPage/FeedPage';
import NetworkPage from './NetworkPage/NetworkPage';
import { Route, Routes } from 'react-router-dom';
import JobsPage from "./JobsPage/JobsPage";
import ChatPage from "./ChatPage/ChatPage";
import NoticesPage from "./NoticesPage/NoticesPage";

const Content = () => {
    return (
        <div className="content_wrap">
            <Routes>
                <Route path='/ProfilePage' element={<ProfilePage />}></Route>
                <Route path='/FeedPage' element={<FeedPage />}></Route>
                <Route path='/NetworkPage' element={<NetworkPage />}></Route>
                <Route path='/JobsPage' element={<JobsPage />}></Route>
                <Route path='/ChatPage' element={<ChatPage />}></Route>
                <Route path='/NoticesPage' element={<NoticesPage />}></Route>
            </Routes>
        </div>
    );
}

export default Content;