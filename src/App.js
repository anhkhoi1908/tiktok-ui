import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layouts';

export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.page;

                        // Hiển thị layout theo trang có layout khác nhau
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        // const Layout = route.layout === null ? Fragment : DefaultLayout;
                        //   const isCheckAuth = !route.isPrivate || user.isAdmin
                        //   const Layout = route.isShowHeader ? Default : Fragment
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}
