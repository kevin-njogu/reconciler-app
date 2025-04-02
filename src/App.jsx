import { BrowserRouter, Route, Routes } from 'react-router';
import LoginForm from './components/auth/login/LoginForm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/layout/Layout';
import UploadStatementsForm from './components/recon/upload/UploadStatementsForm';
import ReconcileForm from './components/recon/reconcile/ReconcileForm';
import DownloadForm from './components/recon/download/DownloadForm';
import { PaginationProvider } from './components/context/PaginationContext';
import UnMatchedEquity from './components/recon/unmatched/equity/UnMatchedEquity';
import UnMatchedWpEquity from './components/recon/unmatched/wpequity/UnMatchedWpEquity';
import ProtectedRoute from './components/auth/protectedroute/ProtectedRoute';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <PaginationProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginForm />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route
                            path="/home"
                            element={
                                <ProtectedRoute>
                                    <Layout />
                                </ProtectedRoute>
                            }
                        >
                            <Route path="upload" element={<UploadStatementsForm />} />
                            <Route path="reconcile" element={<ReconcileForm />} />
                            <Route path="download" element={<DownloadForm />} />
                            <Route path="unmatched-equity" element={<UnMatchedEquity />} />
                            <Route path="unmatched-wpequity" element={<UnMatchedWpEquity />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </PaginationProvider>
        </QueryClientProvider>
    );
}

export default App;
