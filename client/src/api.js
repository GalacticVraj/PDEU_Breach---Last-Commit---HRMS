import axios from 'axios';
import { applyDemoInterceptors } from './mockApi';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api/v1';
const IS_DEMO = import.meta.env.VITE_DEMO_MODE === 'true';

if (IS_DEMO) {
  console.log('🎭 HireX running in DEMO MODE — backend not connected');
} else {
  console.log('✅ API Configuration');
  console.log('🔗 Base URL:', API_BASE_URL);
}

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

if (IS_DEMO) {
  applyDemoInterceptors(api);
}

export default api;
export { IS_DEMO };
