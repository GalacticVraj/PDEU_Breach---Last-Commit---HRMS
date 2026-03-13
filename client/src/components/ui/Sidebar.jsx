import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, UserSearch, Target, Link as LinkIcon, BarChart3, Settings } from 'lucide-react';
import Badge from './Badge';

const navItems = [
  { id: 'dashboard', path: '/', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { id: 'candidates', path: '/candidates', label: 'Candidates', icon: <Users size={20} /> },
  { id: 'ai-search', path: '/ai-search', label: 'AI Search', icon: <UserSearch size={20} /> },
  { id: 'pipeline', path: '/pipeline', label: 'Pipeline', icon: <Target size={20} />, badge: '3' },
  { id: 'sources', path: '/sources', label: 'Sources', icon: <LinkIcon size={20} /> },
  { id: 'analytics', path: '/analytics', label: 'Analytics', icon: <BarChart3 size={20} /> },
  { id: 'settings', path: '/settings', label: 'Settings', icon: <Settings size={20} /> },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-full md:w-64 h-16 md:h-screen bg-white md:border-r border-t md:border-t-0 border-gray-200/80 flex justify-around md:flex-col fixed bottom-0 md:relative z-[60] md:z-10 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] md:shadow-none" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      
      {/* ━━━ LOGO (Desktop Only) ━━━ */}
      <div className="hidden md:flex items-center px-6 py-8">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#E55A00] flex items-center justify-center shadow-[0_4px_16px_rgba(255,107,0,0.3)] relative overflow-hidden">
           <span className="text-gray-900 text-2xl font-black mr-0.5">✦</span>
        </div>
        <span className="ml-3 text-gray-900 text-xl font-bold tracking-tight">TalentOS</span>
      </div>

      {/* ━━━ NAVIGATION LINKS ━━━ */}
      <nav className="flex-1 md:px-4 py-0 md:py-4 flex flex-row md:flex-col justify-around w-full">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={`flex flex-col md:flex-row items-center justify-center md:justify-start px-2 md:px-4 py-2 md:py-3 my-0 md:my-0.5 rounded-none md:rounded-xl transition-all relative group ${
                isActive 
                  ? 'text-[#FF6B00] md:bg-[#FF6B00]/8' 
                  : 'text-gray-500 hover:text-gray-900 md:hover:bg-gray-50'
              }`}
            >
              {/* Active Indicator Bar */}
              {isActive && (
                 <>
                   <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#FF6B00] rounded-r-full shadow-[0_0_8px_rgba(255,107,0,0.4)]" />
                   <div className="block md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#FF6B00] rounded-b-full shadow-[0_0_8px_rgba(255,107,0,0.4)]" />
                 </>
              )}
              
              <div className={`transition-transform duration-200 ${isActive ? 'md:translate-x-1' : 'group-hover:md:translate-x-1'}`}>
                {item.icon}
              </div>
              <span className={`text-[10px] md:text-sm font-semibold mt-1 md:mt-0 md:ml-3 transition-transform duration-200 ${isActive ? 'md:translate-x-1 block' : 'group-hover:md:translate-x-1 hidden md:block'}`}>
                {item.label}
              </span>
              
              {item.badge && (
                <Badge className="hidden md:flex ml-auto !bg-[#FF6B00] !text-gray-900 !border-none text-[10px] !px-1.5 shadow-[0_2px_8px_rgba(255,107,0,0.3)]">
                  {item.badge}
                </Badge>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* ━━━ USER PROFILE (Desktop Only) ━━━ */}
      <div className="hidden md:block px-4 py-6 border-t border-gray-100">
        <div className="flex items-center bg-gray-50 p-3 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors border border-gray-100">
          <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center">
             <span className="text-[#FF6B00] font-bold text-sm">SA</span>
          </div>
          <div className="ml-3 flex-1 overflow-hidden">
            <p className="text-gray-900 text-sm font-bold truncate">Sarah Admin</p>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mt-0.5 truncate">Recruitment Lead</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
