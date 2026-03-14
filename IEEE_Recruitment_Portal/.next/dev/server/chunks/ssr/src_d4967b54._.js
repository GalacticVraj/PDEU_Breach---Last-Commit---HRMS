module.exports = [
"[project]/src/components/Timer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timer",
    ()=>Timer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Timer({ initialSeconds = 1200 }) {
    const [seconds, setSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialSeconds);
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let interval;
        if (isRunning && seconds > 0) {
            interval = setInterval(()=>{
                setSeconds((s)=>s - 1);
            }, 1000);
        }
        return ()=>clearInterval(interval);
    }, [
        isRunning,
        seconds
    ]);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    // Color logic
    // Green: > 10 mins (600s)
    // Orange: 3-10 mins (180s - 600s)
    // Red: < 3 mins (180s)
    let colorClass = "bg-green-100 text-green-700";
    if (seconds < 600) colorClass = "bg-amber-100 text-amber-700";
    if (seconds < 180) colorClass = "bg-red-100 text-red-700 animate-pulse";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 px-4 py-2 rounded-lg font-mono font-bold text-xl", colorClass),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/src/components/Timer.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    String(minutes).padStart(2, '0'),
                    ":",
                    String(remainingSeconds).padStart(2, '0')
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Timer.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsRunning(!isRunning),
                className: "ml-2 opacity-50 hover:opacity-100 text-xs uppercase tracking-wider",
                children: isRunning ? 'Pause' : 'Resume'
            }, void 0, false, {
                fileName: "[project]/src/components/Timer.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Timer.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/lib/data:db9639 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "submitScore",
    ()=>$$RSC_SERVER_ACTION_9
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"70261150cef95359df2310e8bad495d18d9cf4baa8":"submitScore"},"src/lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("70261150cef95359df2310e8bad495d18d9cf4baa8", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "submitScore");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJy4vZGJDb25maWcnO1xyXG5pbXBvcnQgeyBDYW5kaWRhdGVNb2RlbCwgVXNlck1vZGVsLCBEZXBhcnRtZW50TW9kZWwsIFF1ZXN0aW9uTW9kZWwsIElDYW5kaWRhdGUsIElVc2VyLCBJRGVwYXJ0bWVudCB9IGZyb20gJ0AvbW9kZWxzL21vZGVscyc7XHJcbmltcG9ydCB7IENhbmRpZGF0ZSwgQ2FuZGlkYXRlU3RhdHVzLCBJbnRlcnZpZXdlclJvbGUsIFNjb3JlU2hlZXQsIE1lbWJlciwgVXNlclJvbGUsIFVzZXIgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIEhlbHBlciB0byBlbnN1cmUgY29ubmVjdGlvblxyXG5hc3luYyBmdW5jdGlvbiBkYigpIHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gREVQQVJUTUVOVCBBQ1RJT05TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlcGFydG1lbnRzKCk6IFByb21pc2U8SURlcGFydG1lbnRbXT4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IGRlcHRzID0gYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmZpbmQoe30pLmxlYW4oKTtcclxuICAgIHJldHVybiBkZXB0cy5tYXAoKGQ6IGFueSkgPT4gKHsgLi4uZCwgX2lkOiBkLl9pZC50b1N0cmluZygpIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZERlcGFydG1lbnQobmFtZTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgY29uc3QgaWQgPSBgZGVwdF8ke25hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICdfJyl9YDtcclxuICAgIGNvbnN0IGV4aXN0cyA9IGF3YWl0IERlcGFydG1lbnRNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcbiAgICBpZiAoZXhpc3RzKSByZXR1cm47XHJcblxyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmNyZWF0ZSh7IGlkLCBuYW1lIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvbWVtYmVycy9hZGQnKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2FuZGlkYXRlcy9hZGQnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZURlcGFydG1lbnQoaWQ6IHN0cmluZywgbmV3TmFtZTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmZpbmRPbmVBbmRVcGRhdGUoeyBpZCB9LCB7IG5hbWU6IG5ld05hbWUgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzL2FkZCcpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzL2FkZCcpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGVwYXJ0bWVudChpZDogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmRlbGV0ZU9uZSh7IGlkIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVTRVIgQUNUSU9OUyAoTG9naW4pXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKCk6IFByb21pc2U8VXNlcltdPiB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2VyTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG4gICAgcmV0dXJuIHVzZXJzLm1hcCgodTogYW55KSA9PiAoe1xyXG4gICAgICAgIGlkOiB1LmlkLFxyXG4gICAgICAgIG5hbWU6IHUubmFtZSxcclxuICAgICAgICBlbWFpbDogdS5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZEhhc2g6IHUucGFzc3dvcmRIYXNoLFxyXG4gICAgICAgIHJvbGU6IHUucm9sZSBhcyBVc2VyUm9sZSxcclxuICAgICAgICBkZXBhcnRtZW50SWQ6IHUuZGVwYXJ0bWVudElkXHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDQU5ESURBVEUgQUNUSU9OU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzKCk6IFByb21pc2U8Q2FuZGlkYXRlW10+IHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG4gICAgLy8gTWFwIF9pZCBhbmQgZGF0ZXMgaWYgbmVjZXNzYXJ5LCB0aG91Z2ggbGVhbigpIGlzIG1vc3RseSBQT0pPLlxyXG4gICAgLy8gV2UgdXNlZCBhIGN1c3RvbSAnaWQnIHN0cmluZyBmaWVsZCwgc28gd2UgcmVseSBvbiB0aGF0LlxyXG4gICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjOiBhbnkpID0+ICh7XHJcbiAgICAgICAgLi4uYyxcclxuICAgICAgICBfaWQ6IGMuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgY3JlYXRlZEF0OiBjLmNyZWF0ZWRBdCA/IGMuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgaW50ZXJ2aWV3U3RhcnRUaW1lOiBjLmludGVydmlld1N0YXJ0VGltZSAvLyBpZiBleGlzdHNcclxuICAgIH0pKSBhcyB1bmtub3duIGFzIENhbmRpZGF0ZVtdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlKGlkOiBzdHJpbmcpOiBQcm9taXNlPENhbmRpZGF0ZSB8IHVuZGVmaW5lZD4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IENhbmRpZGF0ZU1vZGVsLmZpbmRPbmUoeyBpZCB9KS5sZWFuKCk7XHJcbiAgICBpZiAoIWNhbmRpZGF0ZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uY2FuZGlkYXRlLFxyXG4gICAgICAgIF9pZDogKGNhbmRpZGF0ZSBhcyBhbnkpLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogKGNhbmRpZGF0ZSBhcyBhbnkpLmNyZWF0ZWRBdD8udG9JU09TdHJpbmcoKVxyXG4gICAgfSBhcyB1bmtub3duIGFzIENhbmRpZGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZENhbmRpZGF0ZXMobmV3Q2FuZGlkYXRlczogQ2FuZGlkYXRlW10pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICAvLyBWYWxpZGF0ZSB1bmlxdWVuZXNzIGlmIG5lZWRlZCwgYnV0IGZvciBidWxrIGFkZCBqdXN0IHB1c2hcclxuICAgIGF3YWl0IENhbmRpZGF0ZU1vZGVsLmluc2VydE1hbnkobmV3Q2FuZGlkYXRlcyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NhbmRpZGF0ZXMnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhbmRpZGF0ZVN0YXR1cyhpZDogc3RyaW5nLCBzdGF0dXM6IENhbmRpZGF0ZVN0YXR1cykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHVwZGF0ZTogYW55ID0geyBzdGF0dXMgfTtcclxuICAgIGlmIChzdGF0dXMgPT09ICdJbi1Qcm9ncmVzcycpIHtcclxuICAgICAgICAvLyBPbmx5IHNldCBzdGFydCB0aW1lIGlmIG5vdCBzZXQ/IE9yIGFsd2F5cz8gTG9naWMgaW4gcHJldmlvdXMgd2FzOiBpZiBub3Qgc2V0LlxyXG4gICAgICAgIC8vIEJ1dCBkb2luZyBpdCBhdG9taWNhbGx5IGluIE1vbmdvIGlzIGhhcmRlciBpbiBvbmUgZ28gd2l0aG91dCBmZXRjaGluZy5cclxuICAgICAgICAvLyBMZXQncyBmZXRjaCBmaXJzdC5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcbiAgICBpZiAoY2FuZGlkYXRlKSB7XHJcbiAgICAgICAgY2FuZGlkYXRlLnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAnSW4tUHJvZ3Jlc3MnICYmICEoY2FuZGlkYXRlIGFzIGFueSkuaW50ZXJ2aWV3U3RhcnRUaW1lKSB7XHJcbiAgICAgICAgICAgIGNhbmRpZGF0ZS5zZXQoJ2ludGVydmlld1N0YXJ0VGltZScsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IGNhbmRpZGF0ZS5zYXZlKCk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9pbnRlcnZpZXcvJHtpZH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdFNjb3JlKGlkOiBzdHJpbmcsIHJvbGU6IHN0cmluZywgc2NvcmU6IFNjb3JlU2hlZXQpIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcblxyXG4gICAgaWYgKGNhbmRpZGF0ZSkge1xyXG4gICAgICAgIC8vIEluaXQgc2NvcmVzIGlmIG51bGwgKGhhbmRsZWQgYnkgU2NoZW1hIGRlZmF1bHQgdXN1YWxseSwgYnV0IHJvYnVzdCBjaGVjaylcclxuICAgICAgICBpZiAoIWNhbmRpZGF0ZS5zY29yZXMpIGNhbmRpZGF0ZS5zY29yZXMgPSB7IGludGVydmlld2VyMTogbnVsbCwgaW50ZXJ2aWV3ZXIyOiBudWxsIH07XHJcblxyXG4gICAgICAgIC8vIFdlIGFjY2VwdCBmbGV4aWJsZSBTY29yZVNoZWV0IHN0cnVjdHVyZVxyXG4gICAgICAgIC8vIERpcmVjdCBhc3NpZ25tZW50IHdvcmtzIGJlY2F1c2Ugb2YgTWl4ZWQgdHlwZVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY29yZXMgPSBjYW5kaWRhdGUuc2NvcmVzO1xyXG4gICAgICAgIGN1cnJlbnRTY29yZXNbcm9sZV0gPSBzY29yZTtcclxuXHJcbiAgICAgICAgLy8gTWFyayBhcyBtb2RpZmllZCBiZWNhdXNlICdzY29yZXMnIGlzIE1peGVkIHR5cGVcclxuICAgICAgICBjYW5kaWRhdGUubWFya01vZGlmaWVkKCdzY29yZXMnKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYm90aCBzdWJtaXR0ZWRcclxuICAgICAgICBjb25zdCBzMSA9IGN1cnJlbnRTY29yZXMuaW50ZXJ2aWV3ZXIxO1xyXG4gICAgICAgIGNvbnN0IHMyID0gY3VycmVudFNjb3Jlcy5pbnRlcnZpZXdlcjI7XHJcblxyXG4gICAgICAgIGlmIChzMSAmJiBzMikge1xyXG4gICAgICAgICAgICBjYW5kaWRhdGUuYXZlcmFnZVNjb3JlID0gKHMxLnRvdGFsICsgczIudG90YWwpIC8gMjtcclxuICAgICAgICAgICAgY29uc3QgcjEgPSBzMS5maW5hbFJhdGluZyB8fCAoczEudG90YWwgLyA1KTtcclxuICAgICAgICAgICAgY29uc3QgcjIgPSBzMi5maW5hbFJhdGluZyB8fCAoczIudG90YWwgLyA1KTtcclxuICAgICAgICAgICAgY2FuZGlkYXRlLmZpbmFsUmF0aW5nQXZlcmFnZSA9IHBhcnNlRmxvYXQoKChyMSArIHIyKSAvIDIpLnRvRml4ZWQoMSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNjb3JlLnJlY29tbWVuZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBjYW5kaWRhdGUucmVjb21tZW5kYXRpb24gPSBzY29yZS5yZWNvbW1lbmRhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZS5zdGF0dXMgPT09ICdJbi1Qcm9ncmVzcycpIHtcclxuICAgICAgICAgICAgICAgIGNhbmRpZGF0ZS5zdGF0dXMgPSAnSW50ZXJ2aWV3ZWQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gUGFydGlhbCB1cGRhdGUsIGZvcmNlIHNhdmUgb2YgdXNhZ2VcclxuICAgICAgICAgICAgY2FuZGlkYXRlLnNjb3JlcyA9IGN1cnJlbnRTY29yZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBjYW5kaWRhdGUuc2F2ZSgpO1xyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvaW50ZXJ2aWV3LyR7aWR9YCk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYW5kaWRhdGVOb3RlcyhpZDogc3RyaW5nLCBub3Rlczogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZmluZE9uZUFuZFVwZGF0ZSh7IGlkIH0sIHsgbm90ZXMgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlVGFncyhpZDogc3RyaW5nLCB0YWdzOiBzdHJpbmdbXSkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IENhbmRpZGF0ZU1vZGVsLmZpbmRPbmVBbmRVcGRhdGUoeyBpZCB9LCB7IHRhZ3MgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FuZGlkYXRlKGlkOiBzdHJpbmcpIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBhd2FpdCBDYW5kaWRhdGVNb2RlbC5kZWxldGVPbmUoeyBpZCB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2FuZGlkYXRlcycpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlRGV0YWlscyhpZDogc3RyaW5nLCBkYXRhOiBQYXJ0aWFsPENhbmRpZGF0ZT4pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lQW5kVXBkYXRlKHsgaWQgfSwgeyAkc2V0OiBkYXRhIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9yZXBvcnRzLyR7aWR9YCk7XHJcbn1cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTUVNQkVSIEFDVElPTlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBOT1RFOiBpbiBNb25nb0RCIHZlcnNpb24sIHdlIHRyZWF0IFwiTWVtYmVyXCIgKHByb2ZpbGUpIGFuZCBcIlVzZXJcIiAoYXV0aCkgYXMgbGlua2VkIGJ1dCBtYXliZSB3ZSBjYW4gbWVyZ2UgdGhlbT9cclxuLy8gVGhlIHByZXZpb3VzIGNvZGUga2VwdCB0aGVtIHNlcGFyYXRlIGFycmF5cy4gV2UnbGwgc3RpY2sgdG8gdGhhdCBsb2dpYyB0byBhdm9pZCBmcm9udGVuZCBicmVha2FnZS5cclxuLy8gJ2dldE1lbWJlcnMnIHJldHVybnMgdGhlIGxpc3Qgb2YgTWVtYmVyIHByb2ZpbGVzIChkaXNwbGF5ZWQgaW4gQWRtaW4gcGFuZWwpLlxyXG4vLyAnZ2V0VXNlcnMnIHJldHVybnMgdGhlIGxvZ2luIGNyZWRlbnRpYWxzICh1c2VkIGJ5IG1pZGRsZXdhcmUvYXV0aCkuXHJcblxyXG4vLyBTaW5jZSB3ZSBkZWZpbmVkIHNjaGVtYXMgZm9yIGJvdGgsIHdlIG1haW50YWluIGR1YWwgd3JpdGVzLlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lbWJlcnMoKTogUHJvbWlzZTxNZW1iZXJbXT4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgVXNlck1vZGVsLmZpbmQoe30pLmxlYW4oKTtcclxuICAgIC8vIFdlIG1hcCBVc2VycyB0byBNZW1iZXJzIHN0cnVjdHVyZSAoc2luY2UgdGhleSBhcmUgYmFzaWNhbGx5IHRoZSBzYW1lIGluIHRoaXMgYXBwKVxyXG4gICAgLy8gT3IgZGlkIHdlIHN0b3JlIGV4dHJhIGRhdGEgb24gTWVtYmVyP1xyXG4gICAgLy8gTG9va2luZyBhdCB0eXBlcy50czogTWVtYmVyIGV4dGVuZHMgVXNlci5cclxuICAgIC8vIEluIGRiLmpzb24sIHRoZXkgd2VyZSBzZXBhcmF0ZSBhcnJheXMuXHJcbiAgICAvLyBXZSB3aWxsIGp1c3QgZmV0Y2ggVXNlcnMgYW5kIG1hcCB0aGVtIHRvIE1lbWJlcltdIHRvIHNpbXBsaWZ5LCBPUiBmZXRjaCBzcGVjaWZpYyBtZW1iZXIgY29sbGVjdGlvbiBpZiB3ZSB3YW50LlxyXG4gICAgLy8gTGV0J3Mgc3RpY2sgdG8gdXNpbmcgVXNlck1vZGVsIGFzIHRoZSBzb3VyY2Ugb2YgdHJ1dGggZm9yIE1lbWJlcnMgdG9vLCB0byBub3JtYWxpemUgZGF0YS5cclxuICAgIHJldHVybiB1c2Vycy5tYXAoKHU6IGFueSkgPT4gKHtcclxuICAgICAgICBpZDogdS5pZCxcclxuICAgICAgICBuYW1lOiB1Lm5hbWUsXHJcbiAgICAgICAgZW1haWw6IHUuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmRIYXNoOiB1LnBhc3N3b3JkSGFzaCxcclxuICAgICAgICByb2xlOiB1LnJvbGUgYXMgVXNlclJvbGUsXHJcbiAgICAgICAgZGVwYXJ0bWVudElkOiB1LmRlcGFydG1lbnRJZCxcclxuICAgICAgICBzdGF0dXM6ICdBY3RpdmUnLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIC8vIE1vY2sgZmllbGRzIGlmIG1pc3NpbmdcclxuICAgIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZE1lbWJlcihtZW1iZXI6IE1lbWJlcikge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIC8vIENoZWNrIGlmIGV4aXN0c1xyXG4gICAgY29uc3QgZXhpc3RzID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoeyBlbWFpbDogbWVtYmVyLmVtYWlsIH0pO1xyXG4gICAgaWYgKGV4aXN0cykgcmV0dXJuO1xyXG5cclxuICAgIGF3YWl0IFVzZXJNb2RlbC5jcmVhdGUoe1xyXG4gICAgICAgIGlkOiBtZW1iZXIuaWQsXHJcbiAgICAgICAgbmFtZTogbWVtYmVyLm5hbWUsXHJcbiAgICAgICAgZW1haWw6IG1lbWJlci5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZEhhc2g6IG1lbWJlci5wYXNzd29yZEhhc2ggfHwgJ2llZWUxMjMnLFxyXG4gICAgICAgIHJvbGU6IG1lbWJlci5yb2xlLFxyXG4gICAgICAgIGRlcGFydG1lbnRJZDogbWVtYmVyLmRlcGFydG1lbnRJZFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZW1iZXIoaWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHUgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IGlkIH0pLmxlYW4oKTtcclxuICAgIGlmICghdSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IHUuaWQsXHJcbiAgICAgICAgbmFtZTogdS5uYW1lLFxyXG4gICAgICAgIGVtYWlsOiB1LmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkSGFzaDogdS5wYXNzd29yZEhhc2gsXHJcbiAgICAgICAgcm9sZTogdS5yb2xlIGFzIFVzZXJSb2xlLFxyXG4gICAgICAgIGRlcGFydG1lbnRJZDogdS5kZXBhcnRtZW50SWQsXHJcbiAgICAgICAgc3RhdHVzOiAnQWN0aXZlJyxcclxuICAgICAgICBzdGFydERhdGU6ICcnXHJcbiAgICB9IGFzIE1lbWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lbWJlcihpZDogc3RyaW5nLCBkYXRhOiBQYXJ0aWFsPE1lbWJlcj4pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICAvLyBGaW5kIFVzZXIgYnkgSUQgZmlyc3QsIG9yIEVtYWlsXHJcbiAgICAvLyBVcGRhdGluZyBVc2VyTW9kZWxcclxuICAgIGNvbnN0IHVwZGF0ZVBheWxvYWQ6IGFueSA9IHt9O1xyXG4gICAgaWYgKGRhdGEubmFtZSkgdXBkYXRlUGF5bG9hZC5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgaWYgKGRhdGEuZW1haWwpIHVwZGF0ZVBheWxvYWQuZW1haWwgPSBkYXRhLmVtYWlsO1xyXG4gICAgaWYgKGRhdGEucm9sZSkgdXBkYXRlUGF5bG9hZC5yb2xlID0gZGF0YS5yb2xlO1xyXG4gICAgaWYgKGRhdGEuZGVwYXJ0bWVudElkKSB1cGRhdGVQYXlsb2FkLmRlcGFydG1lbnRJZCA9IGRhdGEuZGVwYXJ0bWVudElkO1xyXG4gICAgaWYgKGRhdGEucGFzc3dvcmRIYXNoKSB1cGRhdGVQYXlsb2FkLnBhc3N3b3JkSGFzaCA9IGRhdGEucGFzc3dvcmRIYXNoO1xyXG5cclxuICAgIGF3YWl0IFVzZXJNb2RlbC5maW5kT25lQW5kVXBkYXRlKHsgaWQgfSwgeyAkc2V0OiB1cGRhdGVQYXlsb2FkIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVNZW1iZXIoaWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IFVzZXJNb2RlbC5kZWxldGVPbmUoeyBpZCB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvbWVtYmVycycpO1xyXG59XHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFFCQU5LIEFDVElPTlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UXVlc3Rpb25zKCkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGF3YWl0IFF1ZXN0aW9uTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG5cclxuICAgIGlmIChxdWVzdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgLy8gU2VlZFxyXG4gICAgICAgIGNvbnN0IGluaXRpYWxEYXRhID0gcmVxdWlyZSgnLi9kYXRhJykuUVVFU1RJT05fQkFOSztcclxuICAgICAgICAvLyBJbnNlcnQga2V5cyBhcyBjYXRlZ29yaWVzXHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IE9iamVjdC5lbnRyaWVzKGluaXRpYWxEYXRhKS5tYXAoKFtrLCB2XSkgPT4gKHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IGssXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uczogdlxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBhd2FpdCBRdWVzdGlvbk1vZGVsLmluc2VydE1hbnkocGF5bG9hZCk7XHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnZlcnQgYXJyYXkgYmFjayB0byBvYmplY3Q6IHsgY2F0ZWdvcnk6IFtxMSwgcTJdIH1cclxuICAgIGNvbnN0IHJlc3VsdDogYW55ID0ge307XHJcbiAgICBxdWVzdGlvbnMuZm9yRWFjaCgocTogYW55KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0W3EuY2F0ZWdvcnldID0gcS5xdWVzdGlvbnM7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVRdWVzdGlvbnMoY2F0ZWdvcnk6IHN0cmluZywgbmV3UXVlc3Rpb25zOiBzdHJpbmdbXSkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IFF1ZXN0aW9uTW9kZWwuZmluZE9uZUFuZFVwZGF0ZShcclxuICAgICAgICB7IGNhdGVnb3J5IH0sXHJcbiAgICAgICAgeyBxdWVzdGlvbnM6IG5ld1F1ZXN0aW9ucyB9LFxyXG4gICAgICAgIHsgdXBzZXJ0OiB0cnVlIH1cclxuICAgICk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL3FiYW5rJyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2ludGVydmlldy9baWRdJywgJ3BhZ2UnKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNZU1RFTSBBQ1RJT05TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gLi4uIGV4aXN0aW5nIGNvZGUgLi4uXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXRDYW5kaWRhdGUoaWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IENhbmRpZGF0ZU1vZGVsLmZpbmRPbmUoeyBpZCB9KTtcclxuICAgIGlmIChjYW5kaWRhdGUpIHtcclxuICAgICAgICBjYW5kaWRhdGUuc3RhdHVzID0gJ1BlbmRpbmcnO1xyXG4gICAgICAgIC8vIFJlc2V0IHNjb3Jlc1xyXG4gICAgICAgIGNhbmRpZGF0ZS5zY29yZXMgPSB7IGludGVydmlld2VyMTogbnVsbCwgaW50ZXJ2aWV3ZXIyOiBudWxsIH07XHJcbiAgICAgICAgY2FuZGlkYXRlLmF2ZXJhZ2VTY29yZSA9IDA7XHJcbiAgICAgICAgY2FuZGlkYXRlLmZpbmFsUmF0aW5nQXZlcmFnZSA9IDA7XHJcbiAgICAgICAgY2FuZGlkYXRlLnJlY29tbWVuZGF0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8vIE9wdGlvbmFsOiBBZGQgYSBub3RlIG9yIGtlZXAgZXhpc3Rpbmcgbm90ZXNcclxuICAgICAgICBjYW5kaWRhdGUubm90ZXMgPSAoY2FuZGlkYXRlLm5vdGVzIHx8ICcnKSArICdcXG5bU3lzdGVtXSBJbnRlcnZpZXcgcmVzZXQgYnkgQWRtaW4gb24gJyArIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcclxuXHJcbiAgICAgICAgLy8gQmVjYXVzZSAnc2NvcmVzJyBpcyBNaXhlZCB0eXBlLCBtYXJrIGFzIG1vZGlmaWVkXHJcbiAgICAgICAgY2FuZGlkYXRlLm1hcmtNb2RpZmllZCgnc2NvcmVzJyk7XHJcblxyXG4gICAgICAgIGF3YWl0IGNhbmRpZGF0ZS5zYXZlKCk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9pbnRlcnZpZXcvJHtpZH1gKTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aChgL3JlcG9ydHMvJHtpZH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0RGF0YWJhc2UoKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZGVsZXRlTWFueSh7fSk7XHJcbiAgICAvLyBXZSB0eXBpY2FsbHkgZG9uJ3QgZGVsZXRlIFVzZXJzL0RlcHRzIGluIHJlc2V0LCBqdXN0IGNhbmRpZGF0ZXM/XHJcbiAgICAvLyBUaGUgcHJldmlvdXMgY29kZTogZGIuY2FuZGlkYXRlcyA9IFtdLCBkYi5tZW1iZXJzID0gW11cclxuICAgIC8vIFNvIHdlIGRlbGV0ZSBDYW5kaWRhdGVzIGFuZCBVc2VycyAoZXhjZXB0IEFkbWluKS5cclxuICAgIC8vIExldCdzIHNhZmUtZGVsZXRlOiBLZWVwIFN1cGVyQWRtaW4uXHJcbiAgICBhd2FpdCBVc2VyTW9kZWwuZGVsZXRlTWFueSh7IHJvbGU6IHsgJG5lOiAnU3VwZXJBZG1pbicgfSB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoia1JBeUhzQix3TEFBQSJ9
}),
"[project]/src/components/ScoringPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScoringPanel",
    ()=>ScoringPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-open.js [app-ssr] (ecmascript) <export default as Unlock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-ssr] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-down.js [app-ssr] (ecmascript) <export default as ThumbsDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$db9639__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:db9639 [app-ssr] (ecmascript) <text/javascript>");
'use client';
;
;
;
;
;
function ScoringPanel({ candidateId, role, existingScore, isLocked: initialLocked, interviewerName }) {
    const [scores, setScores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        communication: existingScore?.communication || 0,
        technical: existingScore?.technical || 0,
        leadership: existingScore?.leadership || 0,
        teamwork: existingScore?.teamwork || 0,
        initiative: existingScore?.initiative || 0
    });
    // Details
    const [interviewerPos, setInterviewerPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existingScore?.interviewerPosition || '');
    const [interviewerDomain, setInterviewerDomain] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existingScore?.interviewerDomain || '');
    // Qualitative
    const [roleUnderstanding, setRoleUnderstanding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existingScore?.roleUnderstanding);
    const [roleUnderstandingComments, setRoleUnderstandingComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existingScore?.roleUnderstandingComments || '');
    const [strengths, setStrengths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existingScore?.strengths || '');
    const [improvements, setImprovements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existingScore?.improvements || '');
    const [vision, setVision] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existingScore?.vision || '');
    const [behavioralResponse, setBehavioralResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existingScore?.behavioralResponse || '');
    const [selectionReason, setSelectionReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existingScore?.selectionReason || '');
    const [rejectionReason, setRejectionReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existingScore?.rejectionReason || '');
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existingScore?.feedback || '');
    const [recommendation, setRecommendation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existingScore?.recommendation);
    // Auto-calculate rating / 10 based on total score / 50
    const calculatedRating = parseFloat(((scores.communication + scores.technical + scores.leadership + scores.teamwork + scores.initiative) / 5).toFixed(1));
    const [finalRatingOverride, setFinalRatingOverride] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existingScore?.finalRating);
    const [locked, setLocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialLocked);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('skills');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (existingScore) {
            setLocked(true);
        }
    }, [
        existingScore
    ]);
    const total = scores.communication + scores.technical + scores.leadership + scores.teamwork + scores.initiative;
    const finalRating = finalRatingOverride !== undefined ? finalRatingOverride : calculatedRating;
    const handleSubmit = async ()=>{
        if (!interviewerName.trim()) {
            alert('Please enter your name at the top first.');
            return;
        }
        if (!interviewerPos.trim() || !interviewerDomain.trim()) {
            alert('Please enter your Position and Domain in the "Qualitative" tab.');
            setActiveTab('assessment');
            return;
        }
        if (!recommendation) {
            alert('Please select a Recommendation level.');
            setActiveTab('final');
            return;
        }
        if (!confirm('Lock assessment? This cannot be undone.')) return;
        setLoading(true);
        const sheet = {
            ...scores,
            total,
            interviewerName,
            interviewerPosition: interviewerPos,
            interviewerDomain,
            roleUnderstanding,
            roleUnderstandingComments,
            strengths,
            improvements,
            vision,
            behavioralResponse,
            selectionReason,
            rejectionReason,
            feedback,
            recommendation,
            finalRating,
            date: new Date().toLocaleDateString()
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$db9639__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["submitScore"])(candidateId, role, sheet);
        setLocked(true);
        setLoading(false);
    };
    // Helper for Big Buttons
    const ScoreButtons = ({ value, onChange, disabled })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-11 gap-1 mt-2",
            children: [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10
            ].map((v)=>{
                let colorClass = "bg-slate-50 text-slate-400 hover:bg-slate-200";
                if (value === v) {
                    if (v <= 3) colorClass = "bg-red-500 text-white";
                    else if (v <= 7) colorClass = "bg-amber-500 text-white";
                    else colorClass = "bg-green-600 text-white";
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    disabled: disabled,
                    onClick: ()=>onChange(v),
                    type: "button",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-10 rounded font-bold text-sm transition-all active:scale-95", colorClass, disabled && value !== v && "opacity-10", value === v && "ring-2 ring-offset-1 ring-slate-900 z-10 scale-110 shadow-md"),
                    children: v
                }, v, false, {
                    fileName: "[project]/src/components/ScoringPanel.tsx",
                    lineNumber: 114,
                    columnNumber: 21
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/ScoringPanel.tsx",
            lineNumber: 105,
            columnNumber: 9
        }, this);
    const TabBtn = ({ id, label, icon: Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>setActiveTab(id),
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 py-3 text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-colors", activeTab === id ? "border-blue-600 text-blue-600 bg-blue-50" : "border-transparent text-slate-500 hover:bg-slate-50"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/src/components/ScoringPanel.tsx",
                    lineNumber: 141,
                    columnNumber: 13
                }, this),
                " ",
                label
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ScoringPanel.tsx",
            lineNumber: 134,
            columnNumber: 9
        }, this);
    if (locked) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow border border-slate-200 p-8 flex flex-col items-center justify-center h-full text-center space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                        size: 40
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScoringPanel.tsx",
                        lineNumber: 149,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ScoringPanel.tsx",
                    lineNumber: 148,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-slate-900",
                    children: "Assessment Locked"
                }, void 0, false, {
                    fileName: "[project]/src/components/ScoringPanel.tsx",
                    lineNumber: 151,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-500",
                    children: "You have successfully submitted your evaluation for this candidate."
                }, void 0, false, {
                    fileName: "[project]/src/components/ScoringPanel.tsx",
                    lineNumber: 152,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-50 rounded-lg p-4 w-full max-w-xs border border-slate-200 mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-sm mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-500 font-bold uppercase",
                                    children: "Total Score"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ScoringPanel.tsx",
                                    lineNumber: 155,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-slate-900",
                                    children: [
                                        total,
                                        " / 50"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ScoringPanel.tsx",
                                    lineNumber: 156,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ScoringPanel.tsx",
                            lineNumber: 154,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-sm mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-500 font-bold uppercase",
                                    children: "Rating"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ScoringPanel.tsx",
                                    lineNumber: 159,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-blue-600 text-lg",
                                    children: [
                                        finalRating,
                                        " / 10"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ScoringPanel.tsx",
                                    lineNumber: 160,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ScoringPanel.tsx",
                            lineNumber: 158,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 border-t border-slate-200 mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-block px-3 py-1 rounded-full text-xs font-bold uppercase", recommendation === 'Strongly Recommend' ? "bg-green-100 text-green-700" : recommendation === 'Recommend' ? "bg-blue-100 text-blue-700" : recommendation === 'Consider if Required' ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"),
                                children: recommendation
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                lineNumber: 163,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ScoringPanel.tsx",
                            lineNumber: 162,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ScoringPanel.tsx",
                    lineNumber: 153,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        if (confirm('Review Mode: Unlocking this score will allow you to overwrite the previous submission. Proceed?')) {
                            setLocked(false);
                        }
                    },
                    className: "mt-6 flex items-center gap-2 text-sm text-slate-400 hover:text-red-500 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__["Unlock"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/src/components/ScoringPanel.tsx",
                            lineNumber: 183,
                            columnNumber: 21
                        }, this),
                        " Edit / Review Submission"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ScoringPanel.tsx",
                    lineNumber: 175,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ScoringPanel.tsx",
            lineNumber: 147,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl shadow-lg border border-slate-200 flex flex-col h-[calc(100vh-8rem)] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex border-b border-slate-200 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabBtn, {
                        id: "assessment",
                        label: "Qualitative",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScoringPanel.tsx",
                        lineNumber: 193,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabBtn, {
                        id: "skills",
                        label: "Scoring",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScoringPanel.tsx",
                        lineNumber: 194,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabBtn, {
                        id: "final",
                        label: "Decision",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScoringPanel.tsx",
                        lineNumber: 195,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ScoringPanel.tsx",
                lineNumber: 192,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-6 bg-slate-50/50",
                children: [
                    activeTab === 'skills' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-bold text-slate-700",
                                                children: "Communication Skills"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 206,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-lg text-slate-900",
                                                children: scores.communication
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 207,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 205,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreButtons, {
                                        value: scores.communication,
                                        onChange: (v)=>setScores({
                                                ...scores,
                                                communication: v
                                            }),
                                        disabled: locked
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 209,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                lineNumber: 204,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-bold text-slate-700",
                                                children: "Technical / Domain Knowledge"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 214,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-lg text-slate-900",
                                                children: scores.technical
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 215,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 213,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreButtons, {
                                        value: scores.technical,
                                        onChange: (v)=>setScores({
                                                ...scores,
                                                technical: v
                                            }),
                                        disabled: locked
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 217,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                lineNumber: 212,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-bold text-slate-700",
                                                children: "Leadership Potential"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 222,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-lg text-slate-900",
                                                children: scores.leadership
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 223,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 221,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreButtons, {
                                        value: scores.leadership,
                                        onChange: (v)=>setScores({
                                                ...scores,
                                                leadership: v
                                            }),
                                        disabled: locked
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 225,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                lineNumber: 220,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-bold text-slate-700",
                                                children: "Teamwork & Collaboration"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 230,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-lg text-slate-900",
                                                children: scores.teamwork
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 231,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 229,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreButtons, {
                                        value: scores.teamwork,
                                        onChange: (v)=>setScores({
                                                ...scores,
                                                teamwork: v
                                            }),
                                        disabled: locked
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 233,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                lineNumber: 228,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-bold text-slate-700",
                                                children: "Initiative & Enthusiasm"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 238,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-lg text-slate-900",
                                                children: scores.initiative
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 239,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 237,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreButtons, {
                                        value: scores.initiative,
                                        onChange: (v)=>setScores({
                                                ...scores,
                                                initiative: v
                                            }),
                                        disabled: locked
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 241,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                lineNumber: 236,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-blue-50 rounded-lg flex justify-between items-center border border-blue-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-800 font-bold uppercase text-sm",
                                        children: "Total Score"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 245,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl font-extrabold text-blue-700",
                                        children: [
                                            total,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-blue-400",
                                                children: "/ 50"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 246,
                                                columnNumber: 93
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 246,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                lineNumber: 244,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('assessment'),
                                className: "w-full py-3 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-700 transition-colors",
                                children: "Next: Qualitative Assessment"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                lineNumber: 249,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScoringPanel.tsx",
                        lineNumber: 203,
                        columnNumber: 21
                    }, this),
                    activeTab === 'assessment' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4 border-b pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs uppercase font-bold text-slate-500 mb-1",
                                                children: "Your Position"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 262,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "w-full p-2 text-sm border rounded bg-white",
                                                placeholder: "e.g. Chairperson",
                                                value: interviewerPos,
                                                onChange: (e)=>setInterviewerPos(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 263,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 261,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs uppercase font-bold text-slate-500 mb-1",
                                                children: "Domain/Committee"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 266,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "w-full p-2 text-sm border rounded bg-white",
                                                placeholder: "e.g. Technical",
                                                value: interviewerDomain,
                                                onChange: (e)=>setInterviewerDomain(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 267,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 265,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                lineNumber: 260,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-bold text-slate-700 mb-2",
                                        children: "Understanding of Role"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 273,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2 mb-2",
                                        children: [
                                            'Excellent',
                                            'Good',
                                            'Average',
                                            'Needs Improvement'
                                        ].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setRoleUnderstanding(opt),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("py-2 text-xs font-bold rounded border transition-all", roleUnderstanding === opt ? "bg-slate-800 text-white border-slate-800" : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"),
                                                children: opt
                                            }, opt, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 276,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 274,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "w-full p-2 text-sm border rounded bg-white",
                                        placeholder: "Brief comments...",
                                        value: roleUnderstandingComments,
                                        onChange: (e)=>setRoleUnderstandingComments(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 290,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                lineNumber: 272,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs uppercase font-bold text-slate-500 mb-1",
                                                children: "Strengths Observed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 295,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                rows: 2,
                                                className: "w-full p-2 text-sm border rounded bg-white",
                                                placeholder: "Key strengths...",
                                                value: strengths,
                                                onChange: (e)=>setStrengths(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 296,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 294,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs uppercase font-bold text-slate-500 mb-1",
                                                children: "Areas of Improvement"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 299,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                rows: 2,
                                                className: "w-full p-2 text-sm border rounded bg-white",
                                                placeholder: "Weaknesses...",
                                                value: improvements,
                                                onChange: (e)=>setImprovements(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 300,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 298,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                lineNumber: 293,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs uppercase font-bold text-slate-500 mb-1",
                                        children: "Candidate's Vision"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 305,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: 2,
                                        className: "w-full p-2 text-sm border rounded bg-white",
                                        placeholder: "Plans for IEEE...",
                                        value: vision,
                                        onChange: (e)=>setVision(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 306,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                lineNumber: 304,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs uppercase font-bold text-slate-500 mb-1",
                                        children: "Behavioral Response"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 309,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: 2,
                                        className: "w-full p-2 text-sm border rounded bg-white",
                                        placeholder: "Situational handling...",
                                        value: behavioralResponse,
                                        onChange: (e)=>setBehavioralResponse(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 310,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                lineNumber: 308,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('final'),
                                className: "w-full py-3 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-700 transition-colors",
                                children: "Next: Final Decision"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                lineNumber: 313,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScoringPanel.tsx",
                        lineNumber: 258,
                        columnNumber: 21
                    }, this),
                    activeTab === 'final' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-4 rounded-xl border shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-slate-700",
                                                children: "Calculated Rating"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 326,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-2xl text-slate-900",
                                                children: [
                                                    calculatedRating,
                                                    "/10"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 327,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 325,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs uppercase font-bold text-slate-500 mb-1",
                                                children: "Why Select?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 330,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                rows: 2,
                                                className: "w-full p-2 text-sm border rounded bg-slate-50 focus:bg-white",
                                                placeholder: "Justification...",
                                                value: selectionReason,
                                                onChange: (e)=>setSelectionReason(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 331,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 329,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs uppercase font-bold text-slate-500 mb-1",
                                                children: "Why Not Select?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 334,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                rows: 2,
                                                className: "w-full p-2 text-sm border rounded bg-slate-50 focus:bg-white",
                                                placeholder: "Concerns...",
                                                value: rejectionReason,
                                                onChange: (e)=>setRejectionReason(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 335,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 333,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                lineNumber: 324,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-bold text-slate-900 mb-3 text-center uppercase tracking-wide",
                                        children: "Final Recommendation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 341,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setRecommendation('Strongly Recommend'),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-4 rounded-xl border-2 font-bold text-lg flex items-center justify-center gap-3 transition-all", recommendation === 'Strongly Recommend' ? "bg-green-100 border-green-500 text-green-700 shadow-md" : "bg-white border-green-100 text-green-600 hover:bg-green-50"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 37
                                                    }, this),
                                                    " Strongly Recommend"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 343,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setRecommendation('Recommend'),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-4 rounded-xl border-2 font-bold text-lg flex items-center justify-center gap-3 transition-all", recommendation === 'Recommend' ? "bg-blue-100 border-blue-500 text-blue-700 shadow-md" : "bg-white border-blue-100 text-blue-600 hover:bg-blue-50"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 37
                                                    }, this),
                                                    " Recommend"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 352,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setRecommendation('Consider if Required'),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-4 rounded-xl border-2 font-bold text-lg flex items-center justify-center gap-3 transition-all", recommendation === 'Consider if Required' ? "bg-amber-100 border-amber-500 text-amber-700 shadow-md" : "bg-white border-amber-100 text-amber-600 hover:bg-amber-50"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 37
                                                    }, this),
                                                    " Consider if Required"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 361,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setRecommendation('Not Recommended'),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-4 rounded-xl border-2 font-bold text-lg flex items-center justify-center gap-3 transition-all", recommendation === 'Not Recommended' ? "bg-red-100 border-red-500 text-red-700 shadow-md" : "bg-white border-red-100 text-red-600 hover:bg-red-50"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsDown$3e$__["ThumbsDown"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 37
                                                    }, this),
                                                    " Not Recommended"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 370,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 342,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                lineNumber: 340,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs uppercase font-bold text-slate-500 mb-1",
                                        children: "Constructive Feedback (Well did / Improvements)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 383,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: 3,
                                        className: "w-full p-2 text-sm border rounded bg-white",
                                        placeholder: "What they did well & suggestions...",
                                        value: feedback,
                                        onChange: (e)=>setFeedback(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScoringPanel.tsx",
                                        lineNumber: 384,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                lineNumber: 382,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4 pb-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSubmit,
                                    disabled: loading,
                                    className: "w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 active:scale-95",
                                    children: loading ? 'Submitting...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                                lineNumber: 393,
                                                columnNumber: 64
                                            }, this),
                                            " Lock & Submit Assessment"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ScoringPanel.tsx",
                                    lineNumber: 388,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScoringPanel.tsx",
                                lineNumber: 387,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScoringPanel.tsx",
                        lineNumber: 322,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ScoringPanel.tsx",
                lineNumber: 199,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ScoringPanel.tsx",
        lineNumber: 190,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QUESTION_BANK",
    ()=>QUESTION_BANK,
    "SCORING_RUBRIC",
    ()=>SCORING_RUBRIC,
    "TAG_OPTIONS",
    ()=>TAG_OPTIONS
]);
const SCORING_RUBRIC = [
    {
        category: 'Communication Skills',
        max: 10,
        guide: [
            {
                range: '0-2',
                desc: 'Incoherent / Struggling'
            },
            {
                range: '3-4',
                desc: 'Average / Basic fluency'
            },
            {
                range: '5-6',
                desc: 'clear points, decent flow'
            },
            {
                range: '7-8',
                desc: 'Articulate, confident, structured'
            },
            {
                range: '9-10',
                desc: 'Exceptional, persuasive, professional'
            }
        ]
    },
    {
        category: 'Technical / Domain Knowledge',
        max: 10,
        guide: [
            {
                range: '0-2',
                desc: 'No basics / Wrong answers'
            },
            {
                range: '3-4',
                desc: 'Weak basics'
            },
            {
                range: '5-6',
                desc: 'Textbook knowledge / Average'
            },
            {
                range: '7-8',
                desc: 'Strong concepts & practical sense'
            },
            {
                range: '9-10',
                desc: 'Expert / Deep understanding'
            }
        ]
    },
    {
        category: 'Leadership Potential',
        max: 10,
        guide: [
            {
                range: '0-2',
                desc: 'Passive / Avoids responsibility'
            },
            {
                range: '3-4',
                desc: 'Follower mindset only'
            },
            {
                range: '5-6',
                desc: 'Can manage small tasks'
            },
            {
                range: '7-8',
                desc: 'Takes initiative, guides others'
            },
            {
                range: '9-10',
                desc: 'Visionary, inspirer, decisive'
            }
        ]
    },
    {
        category: 'Teamwork & Collaboration',
        max: 10,
        guide: [
            {
                range: '0-2',
                desc: 'Egoistic / Disruptive'
            },
            {
                range: '3-4',
                desc: 'Loner, hesitant to share'
            },
            {
                range: '5-6',
                desc: 'Cooperative'
            },
            {
                range: '7-8',
                desc: 'Supportive, reliable team player'
            },
            {
                range: '9-10',
                desc: 'Elevates the whole team'
            }
        ]
    },
    {
        category: 'Initiative & Enthusiasm',
        max: 10,
        guide: [
            {
                range: '0-2',
                desc: 'Uninterested / Bored'
            },
            {
                range: '3-4',
                desc: 'Did minimum required'
            },
            {
                range: '5-6',
                desc: 'Interested'
            },
            {
                range: '7-8',
                desc: 'Proactive, research done'
            },
            {
                range: '9-10',
                desc: 'Highly driven, overflowing energy'
            }
        ]
    }
];
const QUESTION_BANK = {
    'Ice Breakers & Intro': [
        "Tell us something about yourself that isn't on your resume.",
        "If you could have any superpower, what would it be and why?",
        "What's the last interesting thing you read or watched?",
        "Describe your ideal weekend.",
        "Which fictional character do you relate to the most?"
    ],
    'Motivation & IEEE Fit': [
        "Why specifically IEEE SBNU over other clubs?",
        "What do you hope to gain from this technical team in 1 year?",
        "If you were selected, what is the FIRST thing you'd want to work on?",
        "How do you prioritize college academics vs club work?",
        "Tell us about a time you volunteered for something voluntarily."
    ],
    'General Technical (All Tracks)': [
        "Explain the internet to a 5-year-old.",
        "How do you approach a bug you can't solve for hours?",
        "What is your favorite shortcut or tool that makes you productive?",
        "Walk us through how you built your most recent project.",
        "Tech changes fast. How do you keep up?",
        "Rank these: Code Quality, Speed of Delivery, User Experience. Why?"
    ],
    'Technical: Web Development': [
        "Difference between usage of <div>, <span>, and <section>?",
        "What is the Box Model in CSS?",
        "Explain 'Responsive Design' without saying 'mobile friendly'.",
        "Why is React/Next.js popular compared to plain HTML/JS?",
        "What is an API? How does a frontend 'talk' to a backend?",
        "How would you optimize a slow-loading website?",
        "What are Cookies vs LocalStorage?",
        "SQL vs NoSQL: When to use which?",
        "Authentication vs Authorization - what's the difference?"
    ],
    'Technical: AI / ML / Data Science': [
        "What is the difference between AI, ML, and Deep Learning?",
        "Explain Overfitting vs Underfitting like I'm a layman.",
        "Supervised vs Unsupervised learning - give real world examples.",
        "How would you explain a Neural Network to your grandmother?",
        "What are the ethical concerns of AI today?",
        "Why do we need to split data into Training and Testing sets?",
        "Python vs R vs C++ for AI? Thoughts."
    ],
    'Creative & Design': [
        "What makes a 'Bad' User Interface?",
        "How do you decide on a color palette for a project?",
        "Figma vs Adobe XD vs Pen & Paper - what's your process?",
        "Critique the design of the current IEEE website (hypothetically).",
        "How do you handle feedback that says 'I hate this design'?",
        "Explain the difference between Vector and Raster images.",
        "What is visual hierarchy?"
    ],
    'Editor & Content': [
        "What is the difference between 'editing' and 'proofreading'?",
        "How do you make a boring technical topic interesting to read?",
        "Draft a 2-line catchy caption for an upcoming AI Workshop.",
        "Check this sentence for grammar: 'Me and him went to the hackathon.'",
        "How do you handle writer's block when a deadline is approaching?",
        "What tools do you use for content creation? (ChatGPT, Grammarly, etc.)"
    ],
    'Social Media': [
        "How does the Instagram Algorithm work (in your opinion)?",
        "Reels vs Posts vs Stories: How would you use them for an event promotion?",
        "How do you handle negative comments on a post?",
        "What is a 'Call to Action' (CTA)? Give an example.",
        "What metrics matter most? Likes, Shares, or Saves?",
        "Plan a 1-week social media campaign for a recruitment drive."
    ],
    'Membership, Marketing & Sponsorship (MDSO)': [
        "How would you pitch IEEE SBNU to a potential sponsor?",
        "Convince a 1st year student to join IEEE with just 3 sentences.",
        "What value does a sponsor get from supporting a college event?",
        "How would you increase event attendance if registrations are low?",
        "Coldcalling vs Emailing: Which is better for sponsorship and why?",
        "Draft a generic sponsorship email subject line that gets opened."
    ],
    'Situational & Behavioural': [
        "You have an exam tomorrow but a critical server bug today. What do you do?",
        "Describe a conflict you had in a team and how YOU resolved it.",
        "Would you rather be a leader who is feared or a leader who is loved?",
        "You made a mistake that deleted user data. How do you tell the lead?",
        "Your teammate is taking credit for your code. How do you handle it?"
    ],
    'Integrity & Values': [
        "Did you use ChatGPT/AI for your application answers? Be honest.",
        "What is one thing you don't know but are pretending to know?",
        "If you realize you can't finish a task by the deadline, when do you tell us?",
        "Have you ever broken a rule to get something done? Was it worth it?"
    ]
};
const TAG_OPTIONS = {
    positive: [
        'Strong Learner',
        'Leadership Potential',
        'Creative Thinker',
        'Reliable',
        'Calm Problem Solver',
        'Tech Wizard',
        'Good Communicator'
    ],
    negative: [
        'Ego Issue',
        'Copy-Paste Mindset',
        'Unreliable Tone',
        'Only-Certificate',
        'Passive',
        'Argumentative',
        'Low Availability'
    ]
};
}),
"[project]/src/components/QuestionPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuestionPanel",
    ()=>QuestionPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
'use client';
;
;
;
;
function QuestionPanel({ candidateTrack }) {
    // Default to candidate's track or 'Motivation'
    const initialCat = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTION_BANK"][`Technical — ${candidateTrack}`] ? `Technical — ${candidateTrack}` : 'Motivation & Fit';
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialCat);
    const [qIndex, setQIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const questions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTION_BANK"][category] || [];
    const currentQ = questions[qIndex] || "No questions available in this category.";
    const nextQuestion = ()=>{
        setQIndex((prev)=>(prev + 1) % questions.length);
    };
    const categories = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTION_BANK"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl shadow-sm border border-slate-200 p-8 flex flex-col h-full relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 p-4 opacity-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                    size: 120
                }, void 0, false, {
                    fileName: "[project]/src/components/QuestionPanel.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/QuestionPanel.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex-1 flex flex-col justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block",
                                children: "Current Category"
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuestionPanel.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: category,
                                onChange: (e)=>{
                                    setCategory(e.target.value);
                                    setQIndex(0);
                                },
                                className: "bg-slate-100 border-none rounded-lg px-3 py-1 text-sm font-semibold text-slate-700 cursor-pointer hover:bg-slate-200 transition-colors",
                                children: categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: c,
                                        children: c
                                    }, c, false, {
                                        fileName: "[project]/src/components/QuestionPanel.tsx",
                                        lineNumber: 40,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuestionPanel.tsx",
                                lineNumber: 34,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/QuestionPanel.tsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-3xl font-bold text-slate-900 leading-tight min-h-[120px]",
                        children: currentQ
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuestionPanel.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuestionPanel.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 pt-6 border-t border-slate-100 flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: nextQuestion,
                        className: "flex-1 py-3 px-6 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuestionPanel.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this),
                            " Next Question"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/QuestionPanel.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            // Cycle category
                            const currIdx = categories.indexOf(category);
                            const nextCat = categories[(currIdx + 1) % categories.length];
                            setCategory(nextCat);
                            setQIndex(0);
                        },
                        className: "px-6 py-3 bg-slate-100 text-slate-600 rounded-lg font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuestionPanel.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this),
                            " Change Topic"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/QuestionPanel.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuestionPanel.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/QuestionPanel.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/StatusBadge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusBadge",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
const statusStyles = {
    'Pending': 'bg-slate-100 text-slate-600 border-slate-200',
    'In-Progress': 'bg-amber-100 text-amber-700 border-amber-200',
    'Interviewed': 'bg-blue-100 text-blue-700 border-blue-200',
    'Selected': 'bg-green-100 text-green-700 border-green-200',
    'Backup': 'bg-purple-100 text-purple-700 border-purple-200',
    'Rejected': 'bg-red-100 text-red-700 border-red-200'
};
function StatusBadge({ status }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2.5 py-0.5 rounded-full text-xs font-medium border", statusStyles[status] || statusStyles['Pending']),
        children: status
    }, void 0, false, {
        fileName: "[project]/src/components/StatusBadge.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/lib/data:683258 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateCandidateNotes",
    ()=>$$RSC_SERVER_ACTION_10
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60f970f54a3b208bf42c232c0a1b35ac3f4ab44641":"updateCandidateNotes"},"src/lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60f970f54a3b208bf42c232c0a1b35ac3f4ab44641", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateCandidateNotes");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJy4vZGJDb25maWcnO1xyXG5pbXBvcnQgeyBDYW5kaWRhdGVNb2RlbCwgVXNlck1vZGVsLCBEZXBhcnRtZW50TW9kZWwsIFF1ZXN0aW9uTW9kZWwsIElDYW5kaWRhdGUsIElVc2VyLCBJRGVwYXJ0bWVudCB9IGZyb20gJ0AvbW9kZWxzL21vZGVscyc7XHJcbmltcG9ydCB7IENhbmRpZGF0ZSwgQ2FuZGlkYXRlU3RhdHVzLCBJbnRlcnZpZXdlclJvbGUsIFNjb3JlU2hlZXQsIE1lbWJlciwgVXNlclJvbGUsIFVzZXIgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIEhlbHBlciB0byBlbnN1cmUgY29ubmVjdGlvblxyXG5hc3luYyBmdW5jdGlvbiBkYigpIHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gREVQQVJUTUVOVCBBQ1RJT05TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlcGFydG1lbnRzKCk6IFByb21pc2U8SURlcGFydG1lbnRbXT4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IGRlcHRzID0gYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmZpbmQoe30pLmxlYW4oKTtcclxuICAgIHJldHVybiBkZXB0cy5tYXAoKGQ6IGFueSkgPT4gKHsgLi4uZCwgX2lkOiBkLl9pZC50b1N0cmluZygpIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZERlcGFydG1lbnQobmFtZTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgY29uc3QgaWQgPSBgZGVwdF8ke25hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICdfJyl9YDtcclxuICAgIGNvbnN0IGV4aXN0cyA9IGF3YWl0IERlcGFydG1lbnRNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcbiAgICBpZiAoZXhpc3RzKSByZXR1cm47XHJcblxyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmNyZWF0ZSh7IGlkLCBuYW1lIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvbWVtYmVycy9hZGQnKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2FuZGlkYXRlcy9hZGQnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZURlcGFydG1lbnQoaWQ6IHN0cmluZywgbmV3TmFtZTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmZpbmRPbmVBbmRVcGRhdGUoeyBpZCB9LCB7IG5hbWU6IG5ld05hbWUgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzL2FkZCcpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzL2FkZCcpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGVwYXJ0bWVudChpZDogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmRlbGV0ZU9uZSh7IGlkIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVTRVIgQUNUSU9OUyAoTG9naW4pXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKCk6IFByb21pc2U8VXNlcltdPiB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2VyTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG4gICAgcmV0dXJuIHVzZXJzLm1hcCgodTogYW55KSA9PiAoe1xyXG4gICAgICAgIGlkOiB1LmlkLFxyXG4gICAgICAgIG5hbWU6IHUubmFtZSxcclxuICAgICAgICBlbWFpbDogdS5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZEhhc2g6IHUucGFzc3dvcmRIYXNoLFxyXG4gICAgICAgIHJvbGU6IHUucm9sZSBhcyBVc2VyUm9sZSxcclxuICAgICAgICBkZXBhcnRtZW50SWQ6IHUuZGVwYXJ0bWVudElkXHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDQU5ESURBVEUgQUNUSU9OU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzKCk6IFByb21pc2U8Q2FuZGlkYXRlW10+IHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG4gICAgLy8gTWFwIF9pZCBhbmQgZGF0ZXMgaWYgbmVjZXNzYXJ5LCB0aG91Z2ggbGVhbigpIGlzIG1vc3RseSBQT0pPLlxyXG4gICAgLy8gV2UgdXNlZCBhIGN1c3RvbSAnaWQnIHN0cmluZyBmaWVsZCwgc28gd2UgcmVseSBvbiB0aGF0LlxyXG4gICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjOiBhbnkpID0+ICh7XHJcbiAgICAgICAgLi4uYyxcclxuICAgICAgICBfaWQ6IGMuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgY3JlYXRlZEF0OiBjLmNyZWF0ZWRBdCA/IGMuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgaW50ZXJ2aWV3U3RhcnRUaW1lOiBjLmludGVydmlld1N0YXJ0VGltZSAvLyBpZiBleGlzdHNcclxuICAgIH0pKSBhcyB1bmtub3duIGFzIENhbmRpZGF0ZVtdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlKGlkOiBzdHJpbmcpOiBQcm9taXNlPENhbmRpZGF0ZSB8IHVuZGVmaW5lZD4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IENhbmRpZGF0ZU1vZGVsLmZpbmRPbmUoeyBpZCB9KS5sZWFuKCk7XHJcbiAgICBpZiAoIWNhbmRpZGF0ZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uY2FuZGlkYXRlLFxyXG4gICAgICAgIF9pZDogKGNhbmRpZGF0ZSBhcyBhbnkpLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogKGNhbmRpZGF0ZSBhcyBhbnkpLmNyZWF0ZWRBdD8udG9JU09TdHJpbmcoKVxyXG4gICAgfSBhcyB1bmtub3duIGFzIENhbmRpZGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZENhbmRpZGF0ZXMobmV3Q2FuZGlkYXRlczogQ2FuZGlkYXRlW10pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICAvLyBWYWxpZGF0ZSB1bmlxdWVuZXNzIGlmIG5lZWRlZCwgYnV0IGZvciBidWxrIGFkZCBqdXN0IHB1c2hcclxuICAgIGF3YWl0IENhbmRpZGF0ZU1vZGVsLmluc2VydE1hbnkobmV3Q2FuZGlkYXRlcyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NhbmRpZGF0ZXMnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhbmRpZGF0ZVN0YXR1cyhpZDogc3RyaW5nLCBzdGF0dXM6IENhbmRpZGF0ZVN0YXR1cykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHVwZGF0ZTogYW55ID0geyBzdGF0dXMgfTtcclxuICAgIGlmIChzdGF0dXMgPT09ICdJbi1Qcm9ncmVzcycpIHtcclxuICAgICAgICAvLyBPbmx5IHNldCBzdGFydCB0aW1lIGlmIG5vdCBzZXQ/IE9yIGFsd2F5cz8gTG9naWMgaW4gcHJldmlvdXMgd2FzOiBpZiBub3Qgc2V0LlxyXG4gICAgICAgIC8vIEJ1dCBkb2luZyBpdCBhdG9taWNhbGx5IGluIE1vbmdvIGlzIGhhcmRlciBpbiBvbmUgZ28gd2l0aG91dCBmZXRjaGluZy5cclxuICAgICAgICAvLyBMZXQncyBmZXRjaCBmaXJzdC5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcbiAgICBpZiAoY2FuZGlkYXRlKSB7XHJcbiAgICAgICAgY2FuZGlkYXRlLnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAnSW4tUHJvZ3Jlc3MnICYmICEoY2FuZGlkYXRlIGFzIGFueSkuaW50ZXJ2aWV3U3RhcnRUaW1lKSB7XHJcbiAgICAgICAgICAgIGNhbmRpZGF0ZS5zZXQoJ2ludGVydmlld1N0YXJ0VGltZScsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IGNhbmRpZGF0ZS5zYXZlKCk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9pbnRlcnZpZXcvJHtpZH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdFNjb3JlKGlkOiBzdHJpbmcsIHJvbGU6IHN0cmluZywgc2NvcmU6IFNjb3JlU2hlZXQpIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcblxyXG4gICAgaWYgKGNhbmRpZGF0ZSkge1xyXG4gICAgICAgIC8vIEluaXQgc2NvcmVzIGlmIG51bGwgKGhhbmRsZWQgYnkgU2NoZW1hIGRlZmF1bHQgdXN1YWxseSwgYnV0IHJvYnVzdCBjaGVjaylcclxuICAgICAgICBpZiAoIWNhbmRpZGF0ZS5zY29yZXMpIGNhbmRpZGF0ZS5zY29yZXMgPSB7IGludGVydmlld2VyMTogbnVsbCwgaW50ZXJ2aWV3ZXIyOiBudWxsIH07XHJcblxyXG4gICAgICAgIC8vIFdlIGFjY2VwdCBmbGV4aWJsZSBTY29yZVNoZWV0IHN0cnVjdHVyZVxyXG4gICAgICAgIC8vIERpcmVjdCBhc3NpZ25tZW50IHdvcmtzIGJlY2F1c2Ugb2YgTWl4ZWQgdHlwZVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY29yZXMgPSBjYW5kaWRhdGUuc2NvcmVzO1xyXG4gICAgICAgIGN1cnJlbnRTY29yZXNbcm9sZV0gPSBzY29yZTtcclxuXHJcbiAgICAgICAgLy8gTWFyayBhcyBtb2RpZmllZCBiZWNhdXNlICdzY29yZXMnIGlzIE1peGVkIHR5cGVcclxuICAgICAgICBjYW5kaWRhdGUubWFya01vZGlmaWVkKCdzY29yZXMnKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYm90aCBzdWJtaXR0ZWRcclxuICAgICAgICBjb25zdCBzMSA9IGN1cnJlbnRTY29yZXMuaW50ZXJ2aWV3ZXIxO1xyXG4gICAgICAgIGNvbnN0IHMyID0gY3VycmVudFNjb3Jlcy5pbnRlcnZpZXdlcjI7XHJcblxyXG4gICAgICAgIGlmIChzMSAmJiBzMikge1xyXG4gICAgICAgICAgICBjYW5kaWRhdGUuYXZlcmFnZVNjb3JlID0gKHMxLnRvdGFsICsgczIudG90YWwpIC8gMjtcclxuICAgICAgICAgICAgY29uc3QgcjEgPSBzMS5maW5hbFJhdGluZyB8fCAoczEudG90YWwgLyA1KTtcclxuICAgICAgICAgICAgY29uc3QgcjIgPSBzMi5maW5hbFJhdGluZyB8fCAoczIudG90YWwgLyA1KTtcclxuICAgICAgICAgICAgY2FuZGlkYXRlLmZpbmFsUmF0aW5nQXZlcmFnZSA9IHBhcnNlRmxvYXQoKChyMSArIHIyKSAvIDIpLnRvRml4ZWQoMSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNjb3JlLnJlY29tbWVuZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBjYW5kaWRhdGUucmVjb21tZW5kYXRpb24gPSBzY29yZS5yZWNvbW1lbmRhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZS5zdGF0dXMgPT09ICdJbi1Qcm9ncmVzcycpIHtcclxuICAgICAgICAgICAgICAgIGNhbmRpZGF0ZS5zdGF0dXMgPSAnSW50ZXJ2aWV3ZWQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gUGFydGlhbCB1cGRhdGUsIGZvcmNlIHNhdmUgb2YgdXNhZ2VcclxuICAgICAgICAgICAgY2FuZGlkYXRlLnNjb3JlcyA9IGN1cnJlbnRTY29yZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBjYW5kaWRhdGUuc2F2ZSgpO1xyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvaW50ZXJ2aWV3LyR7aWR9YCk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYW5kaWRhdGVOb3RlcyhpZDogc3RyaW5nLCBub3Rlczogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZmluZE9uZUFuZFVwZGF0ZSh7IGlkIH0sIHsgbm90ZXMgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlVGFncyhpZDogc3RyaW5nLCB0YWdzOiBzdHJpbmdbXSkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IENhbmRpZGF0ZU1vZGVsLmZpbmRPbmVBbmRVcGRhdGUoeyBpZCB9LCB7IHRhZ3MgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FuZGlkYXRlKGlkOiBzdHJpbmcpIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBhd2FpdCBDYW5kaWRhdGVNb2RlbC5kZWxldGVPbmUoeyBpZCB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2FuZGlkYXRlcycpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlRGV0YWlscyhpZDogc3RyaW5nLCBkYXRhOiBQYXJ0aWFsPENhbmRpZGF0ZT4pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lQW5kVXBkYXRlKHsgaWQgfSwgeyAkc2V0OiBkYXRhIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9yZXBvcnRzLyR7aWR9YCk7XHJcbn1cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTUVNQkVSIEFDVElPTlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBOT1RFOiBpbiBNb25nb0RCIHZlcnNpb24sIHdlIHRyZWF0IFwiTWVtYmVyXCIgKHByb2ZpbGUpIGFuZCBcIlVzZXJcIiAoYXV0aCkgYXMgbGlua2VkIGJ1dCBtYXliZSB3ZSBjYW4gbWVyZ2UgdGhlbT9cclxuLy8gVGhlIHByZXZpb3VzIGNvZGUga2VwdCB0aGVtIHNlcGFyYXRlIGFycmF5cy4gV2UnbGwgc3RpY2sgdG8gdGhhdCBsb2dpYyB0byBhdm9pZCBmcm9udGVuZCBicmVha2FnZS5cclxuLy8gJ2dldE1lbWJlcnMnIHJldHVybnMgdGhlIGxpc3Qgb2YgTWVtYmVyIHByb2ZpbGVzIChkaXNwbGF5ZWQgaW4gQWRtaW4gcGFuZWwpLlxyXG4vLyAnZ2V0VXNlcnMnIHJldHVybnMgdGhlIGxvZ2luIGNyZWRlbnRpYWxzICh1c2VkIGJ5IG1pZGRsZXdhcmUvYXV0aCkuXHJcblxyXG4vLyBTaW5jZSB3ZSBkZWZpbmVkIHNjaGVtYXMgZm9yIGJvdGgsIHdlIG1haW50YWluIGR1YWwgd3JpdGVzLlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lbWJlcnMoKTogUHJvbWlzZTxNZW1iZXJbXT4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgVXNlck1vZGVsLmZpbmQoe30pLmxlYW4oKTtcclxuICAgIC8vIFdlIG1hcCBVc2VycyB0byBNZW1iZXJzIHN0cnVjdHVyZSAoc2luY2UgdGhleSBhcmUgYmFzaWNhbGx5IHRoZSBzYW1lIGluIHRoaXMgYXBwKVxyXG4gICAgLy8gT3IgZGlkIHdlIHN0b3JlIGV4dHJhIGRhdGEgb24gTWVtYmVyP1xyXG4gICAgLy8gTG9va2luZyBhdCB0eXBlcy50czogTWVtYmVyIGV4dGVuZHMgVXNlci5cclxuICAgIC8vIEluIGRiLmpzb24sIHRoZXkgd2VyZSBzZXBhcmF0ZSBhcnJheXMuXHJcbiAgICAvLyBXZSB3aWxsIGp1c3QgZmV0Y2ggVXNlcnMgYW5kIG1hcCB0aGVtIHRvIE1lbWJlcltdIHRvIHNpbXBsaWZ5LCBPUiBmZXRjaCBzcGVjaWZpYyBtZW1iZXIgY29sbGVjdGlvbiBpZiB3ZSB3YW50LlxyXG4gICAgLy8gTGV0J3Mgc3RpY2sgdG8gdXNpbmcgVXNlck1vZGVsIGFzIHRoZSBzb3VyY2Ugb2YgdHJ1dGggZm9yIE1lbWJlcnMgdG9vLCB0byBub3JtYWxpemUgZGF0YS5cclxuICAgIHJldHVybiB1c2Vycy5tYXAoKHU6IGFueSkgPT4gKHtcclxuICAgICAgICBpZDogdS5pZCxcclxuICAgICAgICBuYW1lOiB1Lm5hbWUsXHJcbiAgICAgICAgZW1haWw6IHUuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmRIYXNoOiB1LnBhc3N3b3JkSGFzaCxcclxuICAgICAgICByb2xlOiB1LnJvbGUgYXMgVXNlclJvbGUsXHJcbiAgICAgICAgZGVwYXJ0bWVudElkOiB1LmRlcGFydG1lbnRJZCxcclxuICAgICAgICBzdGF0dXM6ICdBY3RpdmUnLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIC8vIE1vY2sgZmllbGRzIGlmIG1pc3NpbmdcclxuICAgIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZE1lbWJlcihtZW1iZXI6IE1lbWJlcikge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIC8vIENoZWNrIGlmIGV4aXN0c1xyXG4gICAgY29uc3QgZXhpc3RzID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoeyBlbWFpbDogbWVtYmVyLmVtYWlsIH0pO1xyXG4gICAgaWYgKGV4aXN0cykgcmV0dXJuO1xyXG5cclxuICAgIGF3YWl0IFVzZXJNb2RlbC5jcmVhdGUoe1xyXG4gICAgICAgIGlkOiBtZW1iZXIuaWQsXHJcbiAgICAgICAgbmFtZTogbWVtYmVyLm5hbWUsXHJcbiAgICAgICAgZW1haWw6IG1lbWJlci5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZEhhc2g6IG1lbWJlci5wYXNzd29yZEhhc2ggfHwgJ2llZWUxMjMnLFxyXG4gICAgICAgIHJvbGU6IG1lbWJlci5yb2xlLFxyXG4gICAgICAgIGRlcGFydG1lbnRJZDogbWVtYmVyLmRlcGFydG1lbnRJZFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZW1iZXIoaWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHUgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IGlkIH0pLmxlYW4oKTtcclxuICAgIGlmICghdSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IHUuaWQsXHJcbiAgICAgICAgbmFtZTogdS5uYW1lLFxyXG4gICAgICAgIGVtYWlsOiB1LmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkSGFzaDogdS5wYXNzd29yZEhhc2gsXHJcbiAgICAgICAgcm9sZTogdS5yb2xlIGFzIFVzZXJSb2xlLFxyXG4gICAgICAgIGRlcGFydG1lbnRJZDogdS5kZXBhcnRtZW50SWQsXHJcbiAgICAgICAgc3RhdHVzOiAnQWN0aXZlJyxcclxuICAgICAgICBzdGFydERhdGU6ICcnXHJcbiAgICB9IGFzIE1lbWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lbWJlcihpZDogc3RyaW5nLCBkYXRhOiBQYXJ0aWFsPE1lbWJlcj4pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICAvLyBGaW5kIFVzZXIgYnkgSUQgZmlyc3QsIG9yIEVtYWlsXHJcbiAgICAvLyBVcGRhdGluZyBVc2VyTW9kZWxcclxuICAgIGNvbnN0IHVwZGF0ZVBheWxvYWQ6IGFueSA9IHt9O1xyXG4gICAgaWYgKGRhdGEubmFtZSkgdXBkYXRlUGF5bG9hZC5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgaWYgKGRhdGEuZW1haWwpIHVwZGF0ZVBheWxvYWQuZW1haWwgPSBkYXRhLmVtYWlsO1xyXG4gICAgaWYgKGRhdGEucm9sZSkgdXBkYXRlUGF5bG9hZC5yb2xlID0gZGF0YS5yb2xlO1xyXG4gICAgaWYgKGRhdGEuZGVwYXJ0bWVudElkKSB1cGRhdGVQYXlsb2FkLmRlcGFydG1lbnRJZCA9IGRhdGEuZGVwYXJ0bWVudElkO1xyXG4gICAgaWYgKGRhdGEucGFzc3dvcmRIYXNoKSB1cGRhdGVQYXlsb2FkLnBhc3N3b3JkSGFzaCA9IGRhdGEucGFzc3dvcmRIYXNoO1xyXG5cclxuICAgIGF3YWl0IFVzZXJNb2RlbC5maW5kT25lQW5kVXBkYXRlKHsgaWQgfSwgeyAkc2V0OiB1cGRhdGVQYXlsb2FkIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVNZW1iZXIoaWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IFVzZXJNb2RlbC5kZWxldGVPbmUoeyBpZCB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvbWVtYmVycycpO1xyXG59XHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFFCQU5LIEFDVElPTlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UXVlc3Rpb25zKCkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGF3YWl0IFF1ZXN0aW9uTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG5cclxuICAgIGlmIChxdWVzdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgLy8gU2VlZFxyXG4gICAgICAgIGNvbnN0IGluaXRpYWxEYXRhID0gcmVxdWlyZSgnLi9kYXRhJykuUVVFU1RJT05fQkFOSztcclxuICAgICAgICAvLyBJbnNlcnQga2V5cyBhcyBjYXRlZ29yaWVzXHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IE9iamVjdC5lbnRyaWVzKGluaXRpYWxEYXRhKS5tYXAoKFtrLCB2XSkgPT4gKHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IGssXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uczogdlxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBhd2FpdCBRdWVzdGlvbk1vZGVsLmluc2VydE1hbnkocGF5bG9hZCk7XHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnZlcnQgYXJyYXkgYmFjayB0byBvYmplY3Q6IHsgY2F0ZWdvcnk6IFtxMSwgcTJdIH1cclxuICAgIGNvbnN0IHJlc3VsdDogYW55ID0ge307XHJcbiAgICBxdWVzdGlvbnMuZm9yRWFjaCgocTogYW55KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0W3EuY2F0ZWdvcnldID0gcS5xdWVzdGlvbnM7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVRdWVzdGlvbnMoY2F0ZWdvcnk6IHN0cmluZywgbmV3UXVlc3Rpb25zOiBzdHJpbmdbXSkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IFF1ZXN0aW9uTW9kZWwuZmluZE9uZUFuZFVwZGF0ZShcclxuICAgICAgICB7IGNhdGVnb3J5IH0sXHJcbiAgICAgICAgeyBxdWVzdGlvbnM6IG5ld1F1ZXN0aW9ucyB9LFxyXG4gICAgICAgIHsgdXBzZXJ0OiB0cnVlIH1cclxuICAgICk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL3FiYW5rJyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2ludGVydmlldy9baWRdJywgJ3BhZ2UnKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNZU1RFTSBBQ1RJT05TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gLi4uIGV4aXN0aW5nIGNvZGUgLi4uXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXRDYW5kaWRhdGUoaWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IENhbmRpZGF0ZU1vZGVsLmZpbmRPbmUoeyBpZCB9KTtcclxuICAgIGlmIChjYW5kaWRhdGUpIHtcclxuICAgICAgICBjYW5kaWRhdGUuc3RhdHVzID0gJ1BlbmRpbmcnO1xyXG4gICAgICAgIC8vIFJlc2V0IHNjb3Jlc1xyXG4gICAgICAgIGNhbmRpZGF0ZS5zY29yZXMgPSB7IGludGVydmlld2VyMTogbnVsbCwgaW50ZXJ2aWV3ZXIyOiBudWxsIH07XHJcbiAgICAgICAgY2FuZGlkYXRlLmF2ZXJhZ2VTY29yZSA9IDA7XHJcbiAgICAgICAgY2FuZGlkYXRlLmZpbmFsUmF0aW5nQXZlcmFnZSA9IDA7XHJcbiAgICAgICAgY2FuZGlkYXRlLnJlY29tbWVuZGF0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8vIE9wdGlvbmFsOiBBZGQgYSBub3RlIG9yIGtlZXAgZXhpc3Rpbmcgbm90ZXNcclxuICAgICAgICBjYW5kaWRhdGUubm90ZXMgPSAoY2FuZGlkYXRlLm5vdGVzIHx8ICcnKSArICdcXG5bU3lzdGVtXSBJbnRlcnZpZXcgcmVzZXQgYnkgQWRtaW4gb24gJyArIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcclxuXHJcbiAgICAgICAgLy8gQmVjYXVzZSAnc2NvcmVzJyBpcyBNaXhlZCB0eXBlLCBtYXJrIGFzIG1vZGlmaWVkXHJcbiAgICAgICAgY2FuZGlkYXRlLm1hcmtNb2RpZmllZCgnc2NvcmVzJyk7XHJcblxyXG4gICAgICAgIGF3YWl0IGNhbmRpZGF0ZS5zYXZlKCk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9pbnRlcnZpZXcvJHtpZH1gKTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aChgL3JlcG9ydHMvJHtpZH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0RGF0YWJhc2UoKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZGVsZXRlTWFueSh7fSk7XHJcbiAgICAvLyBXZSB0eXBpY2FsbHkgZG9uJ3QgZGVsZXRlIFVzZXJzL0RlcHRzIGluIHJlc2V0LCBqdXN0IGNhbmRpZGF0ZXM/XHJcbiAgICAvLyBUaGUgcHJldmlvdXMgY29kZTogZGIuY2FuZGlkYXRlcyA9IFtdLCBkYi5tZW1iZXJzID0gW11cclxuICAgIC8vIFNvIHdlIGRlbGV0ZSBDYW5kaWRhdGVzIGFuZCBVc2VycyAoZXhjZXB0IEFkbWluKS5cclxuICAgIC8vIExldCdzIHNhZmUtZGVsZXRlOiBLZWVwIFN1cGVyQWRtaW4uXHJcbiAgICBhd2FpdCBVc2VyTW9kZWwuZGVsZXRlTWFueSh7IHJvbGU6IHsgJG5lOiAnU3VwZXJBZG1pbicgfSB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMlJBc0tzQixtTUFBQSJ9
}),
"[project]/src/lib/data:6f7f04 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateCandidateStatus",
    ()=>$$RSC_SERVER_ACTION_8
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60f8d08d4e64905806d39cb526408d4a6590ee76d6":"updateCandidateStatus"},"src/lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60f8d08d4e64905806d39cb526408d4a6590ee76d6", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateCandidateStatus");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJy4vZGJDb25maWcnO1xyXG5pbXBvcnQgeyBDYW5kaWRhdGVNb2RlbCwgVXNlck1vZGVsLCBEZXBhcnRtZW50TW9kZWwsIFF1ZXN0aW9uTW9kZWwsIElDYW5kaWRhdGUsIElVc2VyLCBJRGVwYXJ0bWVudCB9IGZyb20gJ0AvbW9kZWxzL21vZGVscyc7XHJcbmltcG9ydCB7IENhbmRpZGF0ZSwgQ2FuZGlkYXRlU3RhdHVzLCBJbnRlcnZpZXdlclJvbGUsIFNjb3JlU2hlZXQsIE1lbWJlciwgVXNlclJvbGUsIFVzZXIgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIEhlbHBlciB0byBlbnN1cmUgY29ubmVjdGlvblxyXG5hc3luYyBmdW5jdGlvbiBkYigpIHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gREVQQVJUTUVOVCBBQ1RJT05TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlcGFydG1lbnRzKCk6IFByb21pc2U8SURlcGFydG1lbnRbXT4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IGRlcHRzID0gYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmZpbmQoe30pLmxlYW4oKTtcclxuICAgIHJldHVybiBkZXB0cy5tYXAoKGQ6IGFueSkgPT4gKHsgLi4uZCwgX2lkOiBkLl9pZC50b1N0cmluZygpIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZERlcGFydG1lbnQobmFtZTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgY29uc3QgaWQgPSBgZGVwdF8ke25hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICdfJyl9YDtcclxuICAgIGNvbnN0IGV4aXN0cyA9IGF3YWl0IERlcGFydG1lbnRNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcbiAgICBpZiAoZXhpc3RzKSByZXR1cm47XHJcblxyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmNyZWF0ZSh7IGlkLCBuYW1lIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvbWVtYmVycy9hZGQnKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2FuZGlkYXRlcy9hZGQnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZURlcGFydG1lbnQoaWQ6IHN0cmluZywgbmV3TmFtZTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmZpbmRPbmVBbmRVcGRhdGUoeyBpZCB9LCB7IG5hbWU6IG5ld05hbWUgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzL2FkZCcpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzL2FkZCcpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGVwYXJ0bWVudChpZDogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmRlbGV0ZU9uZSh7IGlkIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVTRVIgQUNUSU9OUyAoTG9naW4pXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKCk6IFByb21pc2U8VXNlcltdPiB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2VyTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG4gICAgcmV0dXJuIHVzZXJzLm1hcCgodTogYW55KSA9PiAoe1xyXG4gICAgICAgIGlkOiB1LmlkLFxyXG4gICAgICAgIG5hbWU6IHUubmFtZSxcclxuICAgICAgICBlbWFpbDogdS5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZEhhc2g6IHUucGFzc3dvcmRIYXNoLFxyXG4gICAgICAgIHJvbGU6IHUucm9sZSBhcyBVc2VyUm9sZSxcclxuICAgICAgICBkZXBhcnRtZW50SWQ6IHUuZGVwYXJ0bWVudElkXHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDQU5ESURBVEUgQUNUSU9OU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzKCk6IFByb21pc2U8Q2FuZGlkYXRlW10+IHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG4gICAgLy8gTWFwIF9pZCBhbmQgZGF0ZXMgaWYgbmVjZXNzYXJ5LCB0aG91Z2ggbGVhbigpIGlzIG1vc3RseSBQT0pPLlxyXG4gICAgLy8gV2UgdXNlZCBhIGN1c3RvbSAnaWQnIHN0cmluZyBmaWVsZCwgc28gd2UgcmVseSBvbiB0aGF0LlxyXG4gICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjOiBhbnkpID0+ICh7XHJcbiAgICAgICAgLi4uYyxcclxuICAgICAgICBfaWQ6IGMuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgY3JlYXRlZEF0OiBjLmNyZWF0ZWRBdCA/IGMuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgaW50ZXJ2aWV3U3RhcnRUaW1lOiBjLmludGVydmlld1N0YXJ0VGltZSAvLyBpZiBleGlzdHNcclxuICAgIH0pKSBhcyB1bmtub3duIGFzIENhbmRpZGF0ZVtdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlKGlkOiBzdHJpbmcpOiBQcm9taXNlPENhbmRpZGF0ZSB8IHVuZGVmaW5lZD4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IENhbmRpZGF0ZU1vZGVsLmZpbmRPbmUoeyBpZCB9KS5sZWFuKCk7XHJcbiAgICBpZiAoIWNhbmRpZGF0ZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uY2FuZGlkYXRlLFxyXG4gICAgICAgIF9pZDogKGNhbmRpZGF0ZSBhcyBhbnkpLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogKGNhbmRpZGF0ZSBhcyBhbnkpLmNyZWF0ZWRBdD8udG9JU09TdHJpbmcoKVxyXG4gICAgfSBhcyB1bmtub3duIGFzIENhbmRpZGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZENhbmRpZGF0ZXMobmV3Q2FuZGlkYXRlczogQ2FuZGlkYXRlW10pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICAvLyBWYWxpZGF0ZSB1bmlxdWVuZXNzIGlmIG5lZWRlZCwgYnV0IGZvciBidWxrIGFkZCBqdXN0IHB1c2hcclxuICAgIGF3YWl0IENhbmRpZGF0ZU1vZGVsLmluc2VydE1hbnkobmV3Q2FuZGlkYXRlcyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NhbmRpZGF0ZXMnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhbmRpZGF0ZVN0YXR1cyhpZDogc3RyaW5nLCBzdGF0dXM6IENhbmRpZGF0ZVN0YXR1cykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHVwZGF0ZTogYW55ID0geyBzdGF0dXMgfTtcclxuICAgIGlmIChzdGF0dXMgPT09ICdJbi1Qcm9ncmVzcycpIHtcclxuICAgICAgICAvLyBPbmx5IHNldCBzdGFydCB0aW1lIGlmIG5vdCBzZXQ/IE9yIGFsd2F5cz8gTG9naWMgaW4gcHJldmlvdXMgd2FzOiBpZiBub3Qgc2V0LlxyXG4gICAgICAgIC8vIEJ1dCBkb2luZyBpdCBhdG9taWNhbGx5IGluIE1vbmdvIGlzIGhhcmRlciBpbiBvbmUgZ28gd2l0aG91dCBmZXRjaGluZy5cclxuICAgICAgICAvLyBMZXQncyBmZXRjaCBmaXJzdC5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcbiAgICBpZiAoY2FuZGlkYXRlKSB7XHJcbiAgICAgICAgY2FuZGlkYXRlLnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAnSW4tUHJvZ3Jlc3MnICYmICEoY2FuZGlkYXRlIGFzIGFueSkuaW50ZXJ2aWV3U3RhcnRUaW1lKSB7XHJcbiAgICAgICAgICAgIGNhbmRpZGF0ZS5zZXQoJ2ludGVydmlld1N0YXJ0VGltZScsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IGNhbmRpZGF0ZS5zYXZlKCk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9pbnRlcnZpZXcvJHtpZH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdFNjb3JlKGlkOiBzdHJpbmcsIHJvbGU6IHN0cmluZywgc2NvcmU6IFNjb3JlU2hlZXQpIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcblxyXG4gICAgaWYgKGNhbmRpZGF0ZSkge1xyXG4gICAgICAgIC8vIEluaXQgc2NvcmVzIGlmIG51bGwgKGhhbmRsZWQgYnkgU2NoZW1hIGRlZmF1bHQgdXN1YWxseSwgYnV0IHJvYnVzdCBjaGVjaylcclxuICAgICAgICBpZiAoIWNhbmRpZGF0ZS5zY29yZXMpIGNhbmRpZGF0ZS5zY29yZXMgPSB7IGludGVydmlld2VyMTogbnVsbCwgaW50ZXJ2aWV3ZXIyOiBudWxsIH07XHJcblxyXG4gICAgICAgIC8vIFdlIGFjY2VwdCBmbGV4aWJsZSBTY29yZVNoZWV0IHN0cnVjdHVyZVxyXG4gICAgICAgIC8vIERpcmVjdCBhc3NpZ25tZW50IHdvcmtzIGJlY2F1c2Ugb2YgTWl4ZWQgdHlwZVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY29yZXMgPSBjYW5kaWRhdGUuc2NvcmVzO1xyXG4gICAgICAgIGN1cnJlbnRTY29yZXNbcm9sZV0gPSBzY29yZTtcclxuXHJcbiAgICAgICAgLy8gTWFyayBhcyBtb2RpZmllZCBiZWNhdXNlICdzY29yZXMnIGlzIE1peGVkIHR5cGVcclxuICAgICAgICBjYW5kaWRhdGUubWFya01vZGlmaWVkKCdzY29yZXMnKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYm90aCBzdWJtaXR0ZWRcclxuICAgICAgICBjb25zdCBzMSA9IGN1cnJlbnRTY29yZXMuaW50ZXJ2aWV3ZXIxO1xyXG4gICAgICAgIGNvbnN0IHMyID0gY3VycmVudFNjb3Jlcy5pbnRlcnZpZXdlcjI7XHJcblxyXG4gICAgICAgIGlmIChzMSAmJiBzMikge1xyXG4gICAgICAgICAgICBjYW5kaWRhdGUuYXZlcmFnZVNjb3JlID0gKHMxLnRvdGFsICsgczIudG90YWwpIC8gMjtcclxuICAgICAgICAgICAgY29uc3QgcjEgPSBzMS5maW5hbFJhdGluZyB8fCAoczEudG90YWwgLyA1KTtcclxuICAgICAgICAgICAgY29uc3QgcjIgPSBzMi5maW5hbFJhdGluZyB8fCAoczIudG90YWwgLyA1KTtcclxuICAgICAgICAgICAgY2FuZGlkYXRlLmZpbmFsUmF0aW5nQXZlcmFnZSA9IHBhcnNlRmxvYXQoKChyMSArIHIyKSAvIDIpLnRvRml4ZWQoMSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNjb3JlLnJlY29tbWVuZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBjYW5kaWRhdGUucmVjb21tZW5kYXRpb24gPSBzY29yZS5yZWNvbW1lbmRhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZS5zdGF0dXMgPT09ICdJbi1Qcm9ncmVzcycpIHtcclxuICAgICAgICAgICAgICAgIGNhbmRpZGF0ZS5zdGF0dXMgPSAnSW50ZXJ2aWV3ZWQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gUGFydGlhbCB1cGRhdGUsIGZvcmNlIHNhdmUgb2YgdXNhZ2VcclxuICAgICAgICAgICAgY2FuZGlkYXRlLnNjb3JlcyA9IGN1cnJlbnRTY29yZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBjYW5kaWRhdGUuc2F2ZSgpO1xyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvaW50ZXJ2aWV3LyR7aWR9YCk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYW5kaWRhdGVOb3RlcyhpZDogc3RyaW5nLCBub3Rlczogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZmluZE9uZUFuZFVwZGF0ZSh7IGlkIH0sIHsgbm90ZXMgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlVGFncyhpZDogc3RyaW5nLCB0YWdzOiBzdHJpbmdbXSkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IENhbmRpZGF0ZU1vZGVsLmZpbmRPbmVBbmRVcGRhdGUoeyBpZCB9LCB7IHRhZ3MgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FuZGlkYXRlKGlkOiBzdHJpbmcpIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBhd2FpdCBDYW5kaWRhdGVNb2RlbC5kZWxldGVPbmUoeyBpZCB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2FuZGlkYXRlcycpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlRGV0YWlscyhpZDogc3RyaW5nLCBkYXRhOiBQYXJ0aWFsPENhbmRpZGF0ZT4pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lQW5kVXBkYXRlKHsgaWQgfSwgeyAkc2V0OiBkYXRhIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9yZXBvcnRzLyR7aWR9YCk7XHJcbn1cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTUVNQkVSIEFDVElPTlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBOT1RFOiBpbiBNb25nb0RCIHZlcnNpb24sIHdlIHRyZWF0IFwiTWVtYmVyXCIgKHByb2ZpbGUpIGFuZCBcIlVzZXJcIiAoYXV0aCkgYXMgbGlua2VkIGJ1dCBtYXliZSB3ZSBjYW4gbWVyZ2UgdGhlbT9cclxuLy8gVGhlIHByZXZpb3VzIGNvZGUga2VwdCB0aGVtIHNlcGFyYXRlIGFycmF5cy4gV2UnbGwgc3RpY2sgdG8gdGhhdCBsb2dpYyB0byBhdm9pZCBmcm9udGVuZCBicmVha2FnZS5cclxuLy8gJ2dldE1lbWJlcnMnIHJldHVybnMgdGhlIGxpc3Qgb2YgTWVtYmVyIHByb2ZpbGVzIChkaXNwbGF5ZWQgaW4gQWRtaW4gcGFuZWwpLlxyXG4vLyAnZ2V0VXNlcnMnIHJldHVybnMgdGhlIGxvZ2luIGNyZWRlbnRpYWxzICh1c2VkIGJ5IG1pZGRsZXdhcmUvYXV0aCkuXHJcblxyXG4vLyBTaW5jZSB3ZSBkZWZpbmVkIHNjaGVtYXMgZm9yIGJvdGgsIHdlIG1haW50YWluIGR1YWwgd3JpdGVzLlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lbWJlcnMoKTogUHJvbWlzZTxNZW1iZXJbXT4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgVXNlck1vZGVsLmZpbmQoe30pLmxlYW4oKTtcclxuICAgIC8vIFdlIG1hcCBVc2VycyB0byBNZW1iZXJzIHN0cnVjdHVyZSAoc2luY2UgdGhleSBhcmUgYmFzaWNhbGx5IHRoZSBzYW1lIGluIHRoaXMgYXBwKVxyXG4gICAgLy8gT3IgZGlkIHdlIHN0b3JlIGV4dHJhIGRhdGEgb24gTWVtYmVyP1xyXG4gICAgLy8gTG9va2luZyBhdCB0eXBlcy50czogTWVtYmVyIGV4dGVuZHMgVXNlci5cclxuICAgIC8vIEluIGRiLmpzb24sIHRoZXkgd2VyZSBzZXBhcmF0ZSBhcnJheXMuXHJcbiAgICAvLyBXZSB3aWxsIGp1c3QgZmV0Y2ggVXNlcnMgYW5kIG1hcCB0aGVtIHRvIE1lbWJlcltdIHRvIHNpbXBsaWZ5LCBPUiBmZXRjaCBzcGVjaWZpYyBtZW1iZXIgY29sbGVjdGlvbiBpZiB3ZSB3YW50LlxyXG4gICAgLy8gTGV0J3Mgc3RpY2sgdG8gdXNpbmcgVXNlck1vZGVsIGFzIHRoZSBzb3VyY2Ugb2YgdHJ1dGggZm9yIE1lbWJlcnMgdG9vLCB0byBub3JtYWxpemUgZGF0YS5cclxuICAgIHJldHVybiB1c2Vycy5tYXAoKHU6IGFueSkgPT4gKHtcclxuICAgICAgICBpZDogdS5pZCxcclxuICAgICAgICBuYW1lOiB1Lm5hbWUsXHJcbiAgICAgICAgZW1haWw6IHUuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmRIYXNoOiB1LnBhc3N3b3JkSGFzaCxcclxuICAgICAgICByb2xlOiB1LnJvbGUgYXMgVXNlclJvbGUsXHJcbiAgICAgICAgZGVwYXJ0bWVudElkOiB1LmRlcGFydG1lbnRJZCxcclxuICAgICAgICBzdGF0dXM6ICdBY3RpdmUnLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIC8vIE1vY2sgZmllbGRzIGlmIG1pc3NpbmdcclxuICAgIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZE1lbWJlcihtZW1iZXI6IE1lbWJlcikge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIC8vIENoZWNrIGlmIGV4aXN0c1xyXG4gICAgY29uc3QgZXhpc3RzID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoeyBlbWFpbDogbWVtYmVyLmVtYWlsIH0pO1xyXG4gICAgaWYgKGV4aXN0cykgcmV0dXJuO1xyXG5cclxuICAgIGF3YWl0IFVzZXJNb2RlbC5jcmVhdGUoe1xyXG4gICAgICAgIGlkOiBtZW1iZXIuaWQsXHJcbiAgICAgICAgbmFtZTogbWVtYmVyLm5hbWUsXHJcbiAgICAgICAgZW1haWw6IG1lbWJlci5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZEhhc2g6IG1lbWJlci5wYXNzd29yZEhhc2ggfHwgJ2llZWUxMjMnLFxyXG4gICAgICAgIHJvbGU6IG1lbWJlci5yb2xlLFxyXG4gICAgICAgIGRlcGFydG1lbnRJZDogbWVtYmVyLmRlcGFydG1lbnRJZFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZW1iZXIoaWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHUgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IGlkIH0pLmxlYW4oKTtcclxuICAgIGlmICghdSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IHUuaWQsXHJcbiAgICAgICAgbmFtZTogdS5uYW1lLFxyXG4gICAgICAgIGVtYWlsOiB1LmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkSGFzaDogdS5wYXNzd29yZEhhc2gsXHJcbiAgICAgICAgcm9sZTogdS5yb2xlIGFzIFVzZXJSb2xlLFxyXG4gICAgICAgIGRlcGFydG1lbnRJZDogdS5kZXBhcnRtZW50SWQsXHJcbiAgICAgICAgc3RhdHVzOiAnQWN0aXZlJyxcclxuICAgICAgICBzdGFydERhdGU6ICcnXHJcbiAgICB9IGFzIE1lbWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lbWJlcihpZDogc3RyaW5nLCBkYXRhOiBQYXJ0aWFsPE1lbWJlcj4pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICAvLyBGaW5kIFVzZXIgYnkgSUQgZmlyc3QsIG9yIEVtYWlsXHJcbiAgICAvLyBVcGRhdGluZyBVc2VyTW9kZWxcclxuICAgIGNvbnN0IHVwZGF0ZVBheWxvYWQ6IGFueSA9IHt9O1xyXG4gICAgaWYgKGRhdGEubmFtZSkgdXBkYXRlUGF5bG9hZC5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgaWYgKGRhdGEuZW1haWwpIHVwZGF0ZVBheWxvYWQuZW1haWwgPSBkYXRhLmVtYWlsO1xyXG4gICAgaWYgKGRhdGEucm9sZSkgdXBkYXRlUGF5bG9hZC5yb2xlID0gZGF0YS5yb2xlO1xyXG4gICAgaWYgKGRhdGEuZGVwYXJ0bWVudElkKSB1cGRhdGVQYXlsb2FkLmRlcGFydG1lbnRJZCA9IGRhdGEuZGVwYXJ0bWVudElkO1xyXG4gICAgaWYgKGRhdGEucGFzc3dvcmRIYXNoKSB1cGRhdGVQYXlsb2FkLnBhc3N3b3JkSGFzaCA9IGRhdGEucGFzc3dvcmRIYXNoO1xyXG5cclxuICAgIGF3YWl0IFVzZXJNb2RlbC5maW5kT25lQW5kVXBkYXRlKHsgaWQgfSwgeyAkc2V0OiB1cGRhdGVQYXlsb2FkIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVNZW1iZXIoaWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IFVzZXJNb2RlbC5kZWxldGVPbmUoeyBpZCB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvbWVtYmVycycpO1xyXG59XHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFFCQU5LIEFDVElPTlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UXVlc3Rpb25zKCkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGF3YWl0IFF1ZXN0aW9uTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG5cclxuICAgIGlmIChxdWVzdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgLy8gU2VlZFxyXG4gICAgICAgIGNvbnN0IGluaXRpYWxEYXRhID0gcmVxdWlyZSgnLi9kYXRhJykuUVVFU1RJT05fQkFOSztcclxuICAgICAgICAvLyBJbnNlcnQga2V5cyBhcyBjYXRlZ29yaWVzXHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IE9iamVjdC5lbnRyaWVzKGluaXRpYWxEYXRhKS5tYXAoKFtrLCB2XSkgPT4gKHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IGssXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uczogdlxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBhd2FpdCBRdWVzdGlvbk1vZGVsLmluc2VydE1hbnkocGF5bG9hZCk7XHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnZlcnQgYXJyYXkgYmFjayB0byBvYmplY3Q6IHsgY2F0ZWdvcnk6IFtxMSwgcTJdIH1cclxuICAgIGNvbnN0IHJlc3VsdDogYW55ID0ge307XHJcbiAgICBxdWVzdGlvbnMuZm9yRWFjaCgocTogYW55KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0W3EuY2F0ZWdvcnldID0gcS5xdWVzdGlvbnM7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVRdWVzdGlvbnMoY2F0ZWdvcnk6IHN0cmluZywgbmV3UXVlc3Rpb25zOiBzdHJpbmdbXSkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IFF1ZXN0aW9uTW9kZWwuZmluZE9uZUFuZFVwZGF0ZShcclxuICAgICAgICB7IGNhdGVnb3J5IH0sXHJcbiAgICAgICAgeyBxdWVzdGlvbnM6IG5ld1F1ZXN0aW9ucyB9LFxyXG4gICAgICAgIHsgdXBzZXJ0OiB0cnVlIH1cclxuICAgICk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL3FiYW5rJyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2ludGVydmlldy9baWRdJywgJ3BhZ2UnKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNZU1RFTSBBQ1RJT05TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gLi4uIGV4aXN0aW5nIGNvZGUgLi4uXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXRDYW5kaWRhdGUoaWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IENhbmRpZGF0ZU1vZGVsLmZpbmRPbmUoeyBpZCB9KTtcclxuICAgIGlmIChjYW5kaWRhdGUpIHtcclxuICAgICAgICBjYW5kaWRhdGUuc3RhdHVzID0gJ1BlbmRpbmcnO1xyXG4gICAgICAgIC8vIFJlc2V0IHNjb3Jlc1xyXG4gICAgICAgIGNhbmRpZGF0ZS5zY29yZXMgPSB7IGludGVydmlld2VyMTogbnVsbCwgaW50ZXJ2aWV3ZXIyOiBudWxsIH07XHJcbiAgICAgICAgY2FuZGlkYXRlLmF2ZXJhZ2VTY29yZSA9IDA7XHJcbiAgICAgICAgY2FuZGlkYXRlLmZpbmFsUmF0aW5nQXZlcmFnZSA9IDA7XHJcbiAgICAgICAgY2FuZGlkYXRlLnJlY29tbWVuZGF0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8vIE9wdGlvbmFsOiBBZGQgYSBub3RlIG9yIGtlZXAgZXhpc3Rpbmcgbm90ZXNcclxuICAgICAgICBjYW5kaWRhdGUubm90ZXMgPSAoY2FuZGlkYXRlLm5vdGVzIHx8ICcnKSArICdcXG5bU3lzdGVtXSBJbnRlcnZpZXcgcmVzZXQgYnkgQWRtaW4gb24gJyArIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcclxuXHJcbiAgICAgICAgLy8gQmVjYXVzZSAnc2NvcmVzJyBpcyBNaXhlZCB0eXBlLCBtYXJrIGFzIG1vZGlmaWVkXHJcbiAgICAgICAgY2FuZGlkYXRlLm1hcmtNb2RpZmllZCgnc2NvcmVzJyk7XHJcblxyXG4gICAgICAgIGF3YWl0IGNhbmRpZGF0ZS5zYXZlKCk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9pbnRlcnZpZXcvJHtpZH1gKTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aChgL3JlcG9ydHMvJHtpZH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0RGF0YWJhc2UoKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZGVsZXRlTWFueSh7fSk7XHJcbiAgICAvLyBXZSB0eXBpY2FsbHkgZG9uJ3QgZGVsZXRlIFVzZXJzL0RlcHRzIGluIHJlc2V0LCBqdXN0IGNhbmRpZGF0ZXM/XHJcbiAgICAvLyBUaGUgcHJldmlvdXMgY29kZTogZGIuY2FuZGlkYXRlcyA9IFtdLCBkYi5tZW1iZXJzID0gW11cclxuICAgIC8vIFNvIHdlIGRlbGV0ZSBDYW5kaWRhdGVzIGFuZCBVc2VycyAoZXhjZXB0IEFkbWluKS5cclxuICAgIC8vIExldCdzIHNhZmUtZGVsZXRlOiBLZWVwIFN1cGVyQWRtaW4uXHJcbiAgICBhd2FpdCBVc2VyTW9kZWwuZGVsZXRlTWFueSh7IHJvbGU6IHsgJG5lOiAnU3VwZXJBZG1pbicgfSB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNFJBb0dzQixrTUFBQSJ9
}),
"[project]/src/lib/data:e37c25 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateCandidateTags",
    ()=>$$RSC_SERVER_ACTION_11
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60e0e7cf51e16f112a3b17274520777b6b9954ae5c":"updateCandidateTags"},"src/lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60e0e7cf51e16f112a3b17274520777b6b9954ae5c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateCandidateTags");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJy4vZGJDb25maWcnO1xyXG5pbXBvcnQgeyBDYW5kaWRhdGVNb2RlbCwgVXNlck1vZGVsLCBEZXBhcnRtZW50TW9kZWwsIFF1ZXN0aW9uTW9kZWwsIElDYW5kaWRhdGUsIElVc2VyLCBJRGVwYXJ0bWVudCB9IGZyb20gJ0AvbW9kZWxzL21vZGVscyc7XHJcbmltcG9ydCB7IENhbmRpZGF0ZSwgQ2FuZGlkYXRlU3RhdHVzLCBJbnRlcnZpZXdlclJvbGUsIFNjb3JlU2hlZXQsIE1lbWJlciwgVXNlclJvbGUsIFVzZXIgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIEhlbHBlciB0byBlbnN1cmUgY29ubmVjdGlvblxyXG5hc3luYyBmdW5jdGlvbiBkYigpIHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gREVQQVJUTUVOVCBBQ1RJT05TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlcGFydG1lbnRzKCk6IFByb21pc2U8SURlcGFydG1lbnRbXT4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IGRlcHRzID0gYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmZpbmQoe30pLmxlYW4oKTtcclxuICAgIHJldHVybiBkZXB0cy5tYXAoKGQ6IGFueSkgPT4gKHsgLi4uZCwgX2lkOiBkLl9pZC50b1N0cmluZygpIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZERlcGFydG1lbnQobmFtZTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgY29uc3QgaWQgPSBgZGVwdF8ke25hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICdfJyl9YDtcclxuICAgIGNvbnN0IGV4aXN0cyA9IGF3YWl0IERlcGFydG1lbnRNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcbiAgICBpZiAoZXhpc3RzKSByZXR1cm47XHJcblxyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmNyZWF0ZSh7IGlkLCBuYW1lIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvbWVtYmVycy9hZGQnKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2FuZGlkYXRlcy9hZGQnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZURlcGFydG1lbnQoaWQ6IHN0cmluZywgbmV3TmFtZTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmZpbmRPbmVBbmRVcGRhdGUoeyBpZCB9LCB7IG5hbWU6IG5ld05hbWUgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzL2FkZCcpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzL2FkZCcpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGVwYXJ0bWVudChpZDogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmRlbGV0ZU9uZSh7IGlkIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVTRVIgQUNUSU9OUyAoTG9naW4pXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKCk6IFByb21pc2U8VXNlcltdPiB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2VyTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG4gICAgcmV0dXJuIHVzZXJzLm1hcCgodTogYW55KSA9PiAoe1xyXG4gICAgICAgIGlkOiB1LmlkLFxyXG4gICAgICAgIG5hbWU6IHUubmFtZSxcclxuICAgICAgICBlbWFpbDogdS5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZEhhc2g6IHUucGFzc3dvcmRIYXNoLFxyXG4gICAgICAgIHJvbGU6IHUucm9sZSBhcyBVc2VyUm9sZSxcclxuICAgICAgICBkZXBhcnRtZW50SWQ6IHUuZGVwYXJ0bWVudElkXHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDQU5ESURBVEUgQUNUSU9OU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzKCk6IFByb21pc2U8Q2FuZGlkYXRlW10+IHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG4gICAgLy8gTWFwIF9pZCBhbmQgZGF0ZXMgaWYgbmVjZXNzYXJ5LCB0aG91Z2ggbGVhbigpIGlzIG1vc3RseSBQT0pPLlxyXG4gICAgLy8gV2UgdXNlZCBhIGN1c3RvbSAnaWQnIHN0cmluZyBmaWVsZCwgc28gd2UgcmVseSBvbiB0aGF0LlxyXG4gICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjOiBhbnkpID0+ICh7XHJcbiAgICAgICAgLi4uYyxcclxuICAgICAgICBfaWQ6IGMuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgY3JlYXRlZEF0OiBjLmNyZWF0ZWRBdCA/IGMuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgaW50ZXJ2aWV3U3RhcnRUaW1lOiBjLmludGVydmlld1N0YXJ0VGltZSAvLyBpZiBleGlzdHNcclxuICAgIH0pKSBhcyB1bmtub3duIGFzIENhbmRpZGF0ZVtdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlKGlkOiBzdHJpbmcpOiBQcm9taXNlPENhbmRpZGF0ZSB8IHVuZGVmaW5lZD4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IENhbmRpZGF0ZU1vZGVsLmZpbmRPbmUoeyBpZCB9KS5sZWFuKCk7XHJcbiAgICBpZiAoIWNhbmRpZGF0ZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uY2FuZGlkYXRlLFxyXG4gICAgICAgIF9pZDogKGNhbmRpZGF0ZSBhcyBhbnkpLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogKGNhbmRpZGF0ZSBhcyBhbnkpLmNyZWF0ZWRBdD8udG9JU09TdHJpbmcoKVxyXG4gICAgfSBhcyB1bmtub3duIGFzIENhbmRpZGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZENhbmRpZGF0ZXMobmV3Q2FuZGlkYXRlczogQ2FuZGlkYXRlW10pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICAvLyBWYWxpZGF0ZSB1bmlxdWVuZXNzIGlmIG5lZWRlZCwgYnV0IGZvciBidWxrIGFkZCBqdXN0IHB1c2hcclxuICAgIGF3YWl0IENhbmRpZGF0ZU1vZGVsLmluc2VydE1hbnkobmV3Q2FuZGlkYXRlcyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NhbmRpZGF0ZXMnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhbmRpZGF0ZVN0YXR1cyhpZDogc3RyaW5nLCBzdGF0dXM6IENhbmRpZGF0ZVN0YXR1cykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHVwZGF0ZTogYW55ID0geyBzdGF0dXMgfTtcclxuICAgIGlmIChzdGF0dXMgPT09ICdJbi1Qcm9ncmVzcycpIHtcclxuICAgICAgICAvLyBPbmx5IHNldCBzdGFydCB0aW1lIGlmIG5vdCBzZXQ/IE9yIGFsd2F5cz8gTG9naWMgaW4gcHJldmlvdXMgd2FzOiBpZiBub3Qgc2V0LlxyXG4gICAgICAgIC8vIEJ1dCBkb2luZyBpdCBhdG9taWNhbGx5IGluIE1vbmdvIGlzIGhhcmRlciBpbiBvbmUgZ28gd2l0aG91dCBmZXRjaGluZy5cclxuICAgICAgICAvLyBMZXQncyBmZXRjaCBmaXJzdC5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcbiAgICBpZiAoY2FuZGlkYXRlKSB7XHJcbiAgICAgICAgY2FuZGlkYXRlLnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAnSW4tUHJvZ3Jlc3MnICYmICEoY2FuZGlkYXRlIGFzIGFueSkuaW50ZXJ2aWV3U3RhcnRUaW1lKSB7XHJcbiAgICAgICAgICAgIGNhbmRpZGF0ZS5zZXQoJ2ludGVydmlld1N0YXJ0VGltZScsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IGNhbmRpZGF0ZS5zYXZlKCk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9pbnRlcnZpZXcvJHtpZH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdFNjb3JlKGlkOiBzdHJpbmcsIHJvbGU6IHN0cmluZywgc2NvcmU6IFNjb3JlU2hlZXQpIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcblxyXG4gICAgaWYgKGNhbmRpZGF0ZSkge1xyXG4gICAgICAgIC8vIEluaXQgc2NvcmVzIGlmIG51bGwgKGhhbmRsZWQgYnkgU2NoZW1hIGRlZmF1bHQgdXN1YWxseSwgYnV0IHJvYnVzdCBjaGVjaylcclxuICAgICAgICBpZiAoIWNhbmRpZGF0ZS5zY29yZXMpIGNhbmRpZGF0ZS5zY29yZXMgPSB7IGludGVydmlld2VyMTogbnVsbCwgaW50ZXJ2aWV3ZXIyOiBudWxsIH07XHJcblxyXG4gICAgICAgIC8vIFdlIGFjY2VwdCBmbGV4aWJsZSBTY29yZVNoZWV0IHN0cnVjdHVyZVxyXG4gICAgICAgIC8vIERpcmVjdCBhc3NpZ25tZW50IHdvcmtzIGJlY2F1c2Ugb2YgTWl4ZWQgdHlwZVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY29yZXMgPSBjYW5kaWRhdGUuc2NvcmVzO1xyXG4gICAgICAgIGN1cnJlbnRTY29yZXNbcm9sZV0gPSBzY29yZTtcclxuXHJcbiAgICAgICAgLy8gTWFyayBhcyBtb2RpZmllZCBiZWNhdXNlICdzY29yZXMnIGlzIE1peGVkIHR5cGVcclxuICAgICAgICBjYW5kaWRhdGUubWFya01vZGlmaWVkKCdzY29yZXMnKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYm90aCBzdWJtaXR0ZWRcclxuICAgICAgICBjb25zdCBzMSA9IGN1cnJlbnRTY29yZXMuaW50ZXJ2aWV3ZXIxO1xyXG4gICAgICAgIGNvbnN0IHMyID0gY3VycmVudFNjb3Jlcy5pbnRlcnZpZXdlcjI7XHJcblxyXG4gICAgICAgIGlmIChzMSAmJiBzMikge1xyXG4gICAgICAgICAgICBjYW5kaWRhdGUuYXZlcmFnZVNjb3JlID0gKHMxLnRvdGFsICsgczIudG90YWwpIC8gMjtcclxuICAgICAgICAgICAgY29uc3QgcjEgPSBzMS5maW5hbFJhdGluZyB8fCAoczEudG90YWwgLyA1KTtcclxuICAgICAgICAgICAgY29uc3QgcjIgPSBzMi5maW5hbFJhdGluZyB8fCAoczIudG90YWwgLyA1KTtcclxuICAgICAgICAgICAgY2FuZGlkYXRlLmZpbmFsUmF0aW5nQXZlcmFnZSA9IHBhcnNlRmxvYXQoKChyMSArIHIyKSAvIDIpLnRvRml4ZWQoMSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNjb3JlLnJlY29tbWVuZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBjYW5kaWRhdGUucmVjb21tZW5kYXRpb24gPSBzY29yZS5yZWNvbW1lbmRhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZS5zdGF0dXMgPT09ICdJbi1Qcm9ncmVzcycpIHtcclxuICAgICAgICAgICAgICAgIGNhbmRpZGF0ZS5zdGF0dXMgPSAnSW50ZXJ2aWV3ZWQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gUGFydGlhbCB1cGRhdGUsIGZvcmNlIHNhdmUgb2YgdXNhZ2VcclxuICAgICAgICAgICAgY2FuZGlkYXRlLnNjb3JlcyA9IGN1cnJlbnRTY29yZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBjYW5kaWRhdGUuc2F2ZSgpO1xyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvaW50ZXJ2aWV3LyR7aWR9YCk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYW5kaWRhdGVOb3RlcyhpZDogc3RyaW5nLCBub3Rlczogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZmluZE9uZUFuZFVwZGF0ZSh7IGlkIH0sIHsgbm90ZXMgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlVGFncyhpZDogc3RyaW5nLCB0YWdzOiBzdHJpbmdbXSkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IENhbmRpZGF0ZU1vZGVsLmZpbmRPbmVBbmRVcGRhdGUoeyBpZCB9LCB7IHRhZ3MgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FuZGlkYXRlKGlkOiBzdHJpbmcpIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBhd2FpdCBDYW5kaWRhdGVNb2RlbC5kZWxldGVPbmUoeyBpZCB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2FuZGlkYXRlcycpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlRGV0YWlscyhpZDogc3RyaW5nLCBkYXRhOiBQYXJ0aWFsPENhbmRpZGF0ZT4pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lQW5kVXBkYXRlKHsgaWQgfSwgeyAkc2V0OiBkYXRhIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9yZXBvcnRzLyR7aWR9YCk7XHJcbn1cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTUVNQkVSIEFDVElPTlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBOT1RFOiBpbiBNb25nb0RCIHZlcnNpb24sIHdlIHRyZWF0IFwiTWVtYmVyXCIgKHByb2ZpbGUpIGFuZCBcIlVzZXJcIiAoYXV0aCkgYXMgbGlua2VkIGJ1dCBtYXliZSB3ZSBjYW4gbWVyZ2UgdGhlbT9cclxuLy8gVGhlIHByZXZpb3VzIGNvZGUga2VwdCB0aGVtIHNlcGFyYXRlIGFycmF5cy4gV2UnbGwgc3RpY2sgdG8gdGhhdCBsb2dpYyB0byBhdm9pZCBmcm9udGVuZCBicmVha2FnZS5cclxuLy8gJ2dldE1lbWJlcnMnIHJldHVybnMgdGhlIGxpc3Qgb2YgTWVtYmVyIHByb2ZpbGVzIChkaXNwbGF5ZWQgaW4gQWRtaW4gcGFuZWwpLlxyXG4vLyAnZ2V0VXNlcnMnIHJldHVybnMgdGhlIGxvZ2luIGNyZWRlbnRpYWxzICh1c2VkIGJ5IG1pZGRsZXdhcmUvYXV0aCkuXHJcblxyXG4vLyBTaW5jZSB3ZSBkZWZpbmVkIHNjaGVtYXMgZm9yIGJvdGgsIHdlIG1haW50YWluIGR1YWwgd3JpdGVzLlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lbWJlcnMoKTogUHJvbWlzZTxNZW1iZXJbXT4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgVXNlck1vZGVsLmZpbmQoe30pLmxlYW4oKTtcclxuICAgIC8vIFdlIG1hcCBVc2VycyB0byBNZW1iZXJzIHN0cnVjdHVyZSAoc2luY2UgdGhleSBhcmUgYmFzaWNhbGx5IHRoZSBzYW1lIGluIHRoaXMgYXBwKVxyXG4gICAgLy8gT3IgZGlkIHdlIHN0b3JlIGV4dHJhIGRhdGEgb24gTWVtYmVyP1xyXG4gICAgLy8gTG9va2luZyBhdCB0eXBlcy50czogTWVtYmVyIGV4dGVuZHMgVXNlci5cclxuICAgIC8vIEluIGRiLmpzb24sIHRoZXkgd2VyZSBzZXBhcmF0ZSBhcnJheXMuXHJcbiAgICAvLyBXZSB3aWxsIGp1c3QgZmV0Y2ggVXNlcnMgYW5kIG1hcCB0aGVtIHRvIE1lbWJlcltdIHRvIHNpbXBsaWZ5LCBPUiBmZXRjaCBzcGVjaWZpYyBtZW1iZXIgY29sbGVjdGlvbiBpZiB3ZSB3YW50LlxyXG4gICAgLy8gTGV0J3Mgc3RpY2sgdG8gdXNpbmcgVXNlck1vZGVsIGFzIHRoZSBzb3VyY2Ugb2YgdHJ1dGggZm9yIE1lbWJlcnMgdG9vLCB0byBub3JtYWxpemUgZGF0YS5cclxuICAgIHJldHVybiB1c2Vycy5tYXAoKHU6IGFueSkgPT4gKHtcclxuICAgICAgICBpZDogdS5pZCxcclxuICAgICAgICBuYW1lOiB1Lm5hbWUsXHJcbiAgICAgICAgZW1haWw6IHUuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmRIYXNoOiB1LnBhc3N3b3JkSGFzaCxcclxuICAgICAgICByb2xlOiB1LnJvbGUgYXMgVXNlclJvbGUsXHJcbiAgICAgICAgZGVwYXJ0bWVudElkOiB1LmRlcGFydG1lbnRJZCxcclxuICAgICAgICBzdGF0dXM6ICdBY3RpdmUnLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIC8vIE1vY2sgZmllbGRzIGlmIG1pc3NpbmdcclxuICAgIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZE1lbWJlcihtZW1iZXI6IE1lbWJlcikge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIC8vIENoZWNrIGlmIGV4aXN0c1xyXG4gICAgY29uc3QgZXhpc3RzID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoeyBlbWFpbDogbWVtYmVyLmVtYWlsIH0pO1xyXG4gICAgaWYgKGV4aXN0cykgcmV0dXJuO1xyXG5cclxuICAgIGF3YWl0IFVzZXJNb2RlbC5jcmVhdGUoe1xyXG4gICAgICAgIGlkOiBtZW1iZXIuaWQsXHJcbiAgICAgICAgbmFtZTogbWVtYmVyLm5hbWUsXHJcbiAgICAgICAgZW1haWw6IG1lbWJlci5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZEhhc2g6IG1lbWJlci5wYXNzd29yZEhhc2ggfHwgJ2llZWUxMjMnLFxyXG4gICAgICAgIHJvbGU6IG1lbWJlci5yb2xlLFxyXG4gICAgICAgIGRlcGFydG1lbnRJZDogbWVtYmVyLmRlcGFydG1lbnRJZFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZW1iZXIoaWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHUgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IGlkIH0pLmxlYW4oKTtcclxuICAgIGlmICghdSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IHUuaWQsXHJcbiAgICAgICAgbmFtZTogdS5uYW1lLFxyXG4gICAgICAgIGVtYWlsOiB1LmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkSGFzaDogdS5wYXNzd29yZEhhc2gsXHJcbiAgICAgICAgcm9sZTogdS5yb2xlIGFzIFVzZXJSb2xlLFxyXG4gICAgICAgIGRlcGFydG1lbnRJZDogdS5kZXBhcnRtZW50SWQsXHJcbiAgICAgICAgc3RhdHVzOiAnQWN0aXZlJyxcclxuICAgICAgICBzdGFydERhdGU6ICcnXHJcbiAgICB9IGFzIE1lbWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lbWJlcihpZDogc3RyaW5nLCBkYXRhOiBQYXJ0aWFsPE1lbWJlcj4pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICAvLyBGaW5kIFVzZXIgYnkgSUQgZmlyc3QsIG9yIEVtYWlsXHJcbiAgICAvLyBVcGRhdGluZyBVc2VyTW9kZWxcclxuICAgIGNvbnN0IHVwZGF0ZVBheWxvYWQ6IGFueSA9IHt9O1xyXG4gICAgaWYgKGRhdGEubmFtZSkgdXBkYXRlUGF5bG9hZC5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgaWYgKGRhdGEuZW1haWwpIHVwZGF0ZVBheWxvYWQuZW1haWwgPSBkYXRhLmVtYWlsO1xyXG4gICAgaWYgKGRhdGEucm9sZSkgdXBkYXRlUGF5bG9hZC5yb2xlID0gZGF0YS5yb2xlO1xyXG4gICAgaWYgKGRhdGEuZGVwYXJ0bWVudElkKSB1cGRhdGVQYXlsb2FkLmRlcGFydG1lbnRJZCA9IGRhdGEuZGVwYXJ0bWVudElkO1xyXG4gICAgaWYgKGRhdGEucGFzc3dvcmRIYXNoKSB1cGRhdGVQYXlsb2FkLnBhc3N3b3JkSGFzaCA9IGRhdGEucGFzc3dvcmRIYXNoO1xyXG5cclxuICAgIGF3YWl0IFVzZXJNb2RlbC5maW5kT25lQW5kVXBkYXRlKHsgaWQgfSwgeyAkc2V0OiB1cGRhdGVQYXlsb2FkIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVNZW1iZXIoaWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IFVzZXJNb2RlbC5kZWxldGVPbmUoeyBpZCB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvbWVtYmVycycpO1xyXG59XHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFFCQU5LIEFDVElPTlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UXVlc3Rpb25zKCkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGF3YWl0IFF1ZXN0aW9uTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG5cclxuICAgIGlmIChxdWVzdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgLy8gU2VlZFxyXG4gICAgICAgIGNvbnN0IGluaXRpYWxEYXRhID0gcmVxdWlyZSgnLi9kYXRhJykuUVVFU1RJT05fQkFOSztcclxuICAgICAgICAvLyBJbnNlcnQga2V5cyBhcyBjYXRlZ29yaWVzXHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IE9iamVjdC5lbnRyaWVzKGluaXRpYWxEYXRhKS5tYXAoKFtrLCB2XSkgPT4gKHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IGssXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uczogdlxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBhd2FpdCBRdWVzdGlvbk1vZGVsLmluc2VydE1hbnkocGF5bG9hZCk7XHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnZlcnQgYXJyYXkgYmFjayB0byBvYmplY3Q6IHsgY2F0ZWdvcnk6IFtxMSwgcTJdIH1cclxuICAgIGNvbnN0IHJlc3VsdDogYW55ID0ge307XHJcbiAgICBxdWVzdGlvbnMuZm9yRWFjaCgocTogYW55KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0W3EuY2F0ZWdvcnldID0gcS5xdWVzdGlvbnM7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVRdWVzdGlvbnMoY2F0ZWdvcnk6IHN0cmluZywgbmV3UXVlc3Rpb25zOiBzdHJpbmdbXSkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IFF1ZXN0aW9uTW9kZWwuZmluZE9uZUFuZFVwZGF0ZShcclxuICAgICAgICB7IGNhdGVnb3J5IH0sXHJcbiAgICAgICAgeyBxdWVzdGlvbnM6IG5ld1F1ZXN0aW9ucyB9LFxyXG4gICAgICAgIHsgdXBzZXJ0OiB0cnVlIH1cclxuICAgICk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL3FiYW5rJyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2ludGVydmlldy9baWRdJywgJ3BhZ2UnKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNZU1RFTSBBQ1RJT05TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gLi4uIGV4aXN0aW5nIGNvZGUgLi4uXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXRDYW5kaWRhdGUoaWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IENhbmRpZGF0ZU1vZGVsLmZpbmRPbmUoeyBpZCB9KTtcclxuICAgIGlmIChjYW5kaWRhdGUpIHtcclxuICAgICAgICBjYW5kaWRhdGUuc3RhdHVzID0gJ1BlbmRpbmcnO1xyXG4gICAgICAgIC8vIFJlc2V0IHNjb3Jlc1xyXG4gICAgICAgIGNhbmRpZGF0ZS5zY29yZXMgPSB7IGludGVydmlld2VyMTogbnVsbCwgaW50ZXJ2aWV3ZXIyOiBudWxsIH07XHJcbiAgICAgICAgY2FuZGlkYXRlLmF2ZXJhZ2VTY29yZSA9IDA7XHJcbiAgICAgICAgY2FuZGlkYXRlLmZpbmFsUmF0aW5nQXZlcmFnZSA9IDA7XHJcbiAgICAgICAgY2FuZGlkYXRlLnJlY29tbWVuZGF0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8vIE9wdGlvbmFsOiBBZGQgYSBub3RlIG9yIGtlZXAgZXhpc3Rpbmcgbm90ZXNcclxuICAgICAgICBjYW5kaWRhdGUubm90ZXMgPSAoY2FuZGlkYXRlLm5vdGVzIHx8ICcnKSArICdcXG5bU3lzdGVtXSBJbnRlcnZpZXcgcmVzZXQgYnkgQWRtaW4gb24gJyArIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcclxuXHJcbiAgICAgICAgLy8gQmVjYXVzZSAnc2NvcmVzJyBpcyBNaXhlZCB0eXBlLCBtYXJrIGFzIG1vZGlmaWVkXHJcbiAgICAgICAgY2FuZGlkYXRlLm1hcmtNb2RpZmllZCgnc2NvcmVzJyk7XHJcblxyXG4gICAgICAgIGF3YWl0IGNhbmRpZGF0ZS5zYXZlKCk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9pbnRlcnZpZXcvJHtpZH1gKTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aChgL3JlcG9ydHMvJHtpZH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0RGF0YWJhc2UoKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZGVsZXRlTWFueSh7fSk7XHJcbiAgICAvLyBXZSB0eXBpY2FsbHkgZG9uJ3QgZGVsZXRlIFVzZXJzL0RlcHRzIGluIHJlc2V0LCBqdXN0IGNhbmRpZGF0ZXM/XHJcbiAgICAvLyBUaGUgcHJldmlvdXMgY29kZTogZGIuY2FuZGlkYXRlcyA9IFtdLCBkYi5tZW1iZXJzID0gW11cclxuICAgIC8vIFNvIHdlIGRlbGV0ZSBDYW5kaWRhdGVzIGFuZCBVc2VycyAoZXhjZXB0IEFkbWluKS5cclxuICAgIC8vIExldCdzIHNhZmUtZGVsZXRlOiBLZWVwIFN1cGVyQWRtaW4uXHJcbiAgICBhd2FpdCBVc2VyTW9kZWwuZGVsZXRlTWFueSh7IHJvbGU6IHsgJG5lOiAnU3VwZXJBZG1pbicgfSB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMFJBNEtzQixrTUFBQSJ9
}),
"[project]/src/components/InterviewSession.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InterviewSession",
    ()=>InterviewSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Timer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScoringPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScoringPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/QuestionPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatusBadge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$683258__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:683258 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$6f7f04__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:6f7f04 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$e37c25__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:e37c25 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-ssr] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-user.js [app-ssr] (ecmascript) <export default as UserCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-ssr] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function InterviewSession({ candidate, initialQuestionBank }) {
    // Basic state fallback
    const [questionBank] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialQuestionBank);
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('interviewer1');
    const [interviewerName, setInterviewerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isEditingName, setIsEditingName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(candidate.notes || '');
    const [tags, setTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(candidate.tags || []);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedRole = localStorage.getItem('interviewerRole');
        const savedName = localStorage.getItem('interviewerName');
        if (savedRole && (savedRole === 'interviewer1' || savedRole === 'interviewer2')) {
            setRole(savedRole);
        }
        if (savedName) {
            setInterviewerName(savedName);
        } else {
            setIsEditingName(true); // Prompt for name if not set
        }
    }, []);
    const handleNameSave = ()=>{
        if (interviewerName.trim()) {
            localStorage.setItem('interviewerName', interviewerName.trim());
            setIsEditingName(false);
        }
    };
    // Update status to 'In-Progress' on mount if still Pending
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (candidate.status === 'Pending') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$6f7f04__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateCandidateStatus"])(candidate.id, 'In-Progress');
        }
    }, [
        candidate.id,
        candidate.status
    ]);
    const handleSaveNotes = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$683258__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateCandidateNotes"])(candidate.id, notes);
    };
    const handleToggleTag = async (tag)=>{
        const newTags = tags.includes(tag) ? tags.filter((t)=>t !== tag) : [
            ...tags,
            tag
        ];
        setTags(newTags);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$e37c25__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateCandidateTags"])(candidate.id, newTags);
    };
    const myScore = candidate.scores?.[role];
    const partnerRole = role === 'interviewer1' ? 'interviewer2' : 'interviewer1';
    const partnerScore = candidate.scores?.[partnerRole];
    const isFinished = candidate.status === 'Interviewed' || candidate.status === 'Selected' || candidate.status === 'Rejected';
    const [leftTab, setLeftTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('interview');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col gap-6 p-1",
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between sticky top-0 z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/candidates",
                                className: "p-2 hover:bg-slate-100 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InterviewSession.tsx",
                                    lineNumber: 80,
                                    columnNumber: 112
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/InterviewSession.tsx",
                                lineNumber: 80,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-bold text-slate-900",
                                        children: candidate.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                        lineNumber: 82,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex text-sm text-slate-500 gap-2 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    candidate.branch,
                                                    " (",
                                                    candidate.year,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                lineNumber: 84,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                lineNumber: 85,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-blue-600",
                                                children: candidate.track
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                lineNumber: 86,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                        lineNumber: 83,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InterviewSession.tsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBadge"], {
                                status: candidate.status
                            }, void 0, false, {
                                fileName: "[project]/src/components/InterviewSession.tsx",
                                lineNumber: 89,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InterviewSession.tsx",
                        lineNumber: 79,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex bg-slate-100 p-1 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setLeftTab('interview'),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-4 py-1.5 rounded-md text-sm font-bold transition-all", leftTab === 'interview' ? "bg-white shadow text-slate-900" : "text-slate-500 hover:text-slate-700"),
                                children: "Live Panel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InterviewSession.tsx",
                                lineNumber: 94,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setLeftTab('rubric'),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-4 py-1.5 rounded-md text-sm font-bold transition-all", leftTab === 'rubric' ? "bg-white shadow text-slate-900" : "text-slate-500 hover:text-slate-700"),
                                children: "Scoring Guide"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InterviewSession.tsx",
                                lineNumber: 95,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setLeftTab('all-questions'),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-4 py-1.5 rounded-md text-sm font-bold transition-all", leftTab === 'all-questions' ? "bg-white shadow text-slate-900" : "text-slate-500 hover:text-slate-700"),
                                children: "Question Bank"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InterviewSession.tsx",
                                lineNumber: 96,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InterviewSession.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-50 px-3 py-2 rounded-lg border border-slate-200 flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-1.5 rounded-full shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle$3e$__["UserCircle"], {
                                            size: 20,
                                            className: "text-slate-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InterviewSession.tsx",
                                            lineNumber: 102,
                                            columnNumber: 80
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                        lineNumber: 102,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: role,
                                                onChange: (e)=>{
                                                    const newRole = e.target.value;
                                                    setRole(newRole);
                                                    localStorage.setItem('interviewerRole', newRole);
                                                },
                                                className: "text-[10px] text-slate-400 uppercase font-bold tracking-wide bg-transparent border-none p-0 focus:ring-0 cursor-pointer hover:text-blue-600 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "interviewer1",
                                                        children: "Interviewer 1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "interviewer2",
                                                        children: "Interviewer 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                lineNumber: 104,
                                                columnNumber: 29
                                            }, this),
                                            isEditingName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        autoFocus: true,
                                                        className: "text-sm font-bold text-slate-900 bg-white border border-slate-300 rounded px-1 w-32 focus:outline-blue-500",
                                                        placeholder: "Your Name",
                                                        value: interviewerName,
                                                        onChange: (e)=>setInterviewerName(e.target.value),
                                                        onBlur: handleNameSave,
                                                        onKeyDown: (e)=>e.key === 'Enter' && handleNameSave()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleNameSave,
                                                        className: "text-xs text-blue-600 font-bold hover:underline",
                                                        children: "Save"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                lineNumber: 117,
                                                columnNumber: 33
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 group cursor-pointer",
                                                onClick: ()=>setIsEditingName(true),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-slate-900",
                                                        children: interviewerName || 'Set Name'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                        size: 12,
                                                        className: "text-slate-400 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                lineNumber: 130,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                        lineNumber: 103,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InterviewSession.tsx",
                                lineNumber: 101,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6 pl-4 border-l border-slate-200",
                                children: [
                                    isFinished ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right px-4 py-1.5 bg-green-50 border border-green-100 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-green-600 uppercase font-bold",
                                                children: "Final Score"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                lineNumber: 141,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold text-green-700 leading-none",
                                                children: candidate.averageScore
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                lineNumber: 142,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                        lineNumber: 140,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right px-2 opacity-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-slate-500 uppercase font-bold",
                                                children: "Total"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                lineNumber: 146,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-bold text-slate-400 leading-none",
                                                children: "HIDDEN"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                lineNumber: 147,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                        lineNumber: 145,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timer"], {}, void 0, false, {
                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                        lineNumber: 150,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InterviewSession.tsx",
                                lineNumber: 138,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InterviewSession.tsx",
                        lineNumber: 100,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InterviewSession.tsx",
                lineNumber: 78,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-12 gap-6 items-start pb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-8 flex flex-col gap-6",
                        children: [
                            leftTab === 'interview' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-h-[300px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuestionPanel"], {
                                            candidateTrack: candidate.track
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InterviewSession.tsx",
                                            lineNumber: 165,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                        lineNumber: 164,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col h-[300px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-bold text-slate-700",
                                                                children: "Interview Notes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleSaveNotes,
                                                                className: "p-1 hover:bg-slate-100 rounded text-blue-600",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InterviewSession.tsx",
                                                                    lineNumber: 173,
                                                                    columnNumber: 132
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        className: "flex-1 w-full bg-slate-50 p-3 rounded-lg text-sm focus:outline-blue-500 resize-none font-medium text-slate-700",
                                                        value: notes,
                                                        onChange: (e)=>setNotes(e.target.value),
                                                        placeholder: "Type remarks here...",
                                                        onBlur: handleSaveNotes
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                lineNumber: 170,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white p-4 rounded-xl shadow-sm border border-slate-200 h-[300px] overflow-y-auto",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-bold text-slate-700 mb-4 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                                lineNumber: 185,
                                                                columnNumber: 118
                                                            }, this),
                                                            " Quick Tags"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs uppercase text-green-600 font-extrabold mb-2 tracking-wider flex items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                                size: 12
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                                                lineNumber: 189,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            " Strengths"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                                                        lineNumber: 188,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap gap-2",
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TAG_OPTIONS"].positive.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleToggleTag(tag),
                                                                                className: `text-xs px-3 py-1.5 rounded-full border-2 transition-all font-bold ${tags.includes(tag) ? 'bg-green-500 border-green-500 text-white shadow-md transform scale-105' : 'bg-white border-slate-200 text-slate-500 hover:border-green-300 hover:text-green-600'}`,
                                                                                children: tag
                                                                            }, tag, false, {
                                                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                                                lineNumber: 193,
                                                                                columnNumber: 53
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                                                        lineNumber: 191,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "border-t pt-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs uppercase text-red-600 font-extrabold mb-2 tracking-wider flex items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                size: 12
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                                                lineNumber: 208,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            " Red Flags"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                                                        lineNumber: 207,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap gap-2",
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TAG_OPTIONS"].negative.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleToggleTag(tag),
                                                                                className: `text-xs px-3 py-1.5 rounded-full border-2 transition-all font-bold ${tags.includes(tag) ? 'bg-red-500 border-red-500 text-white shadow-md transform scale-105' : 'bg-white border-slate-200 text-slate-500 hover:border-red-300 hover:text-red-600'}`,
                                                                                children: tag
                                                                            }, tag, false, {
                                                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                                                lineNumber: 212,
                                                                                columnNumber: 53
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                                                        lineNumber: 210,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                lineNumber: 184,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                        lineNumber: 169,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true),
                            leftTab === 'rubric' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-[600px] overflow-y-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold mb-4",
                                        children: "Scoring Guide (Rubric)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                        lineNumber: 233,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: __turbopack_context__.r("[project]/src/lib/data.ts [app-ssr] (ecmascript)").SCORING_RUBRIC.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-b pb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-blue-800 mb-2",
                                                        children: [
                                                            section.category,
                                                            " (Max ",
                                                            section.max,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-1",
                                                        children: section.guide.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-4 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-bold text-slate-500",
                                                                        children: g.range
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                                                        lineNumber: 241,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "col-span-3 text-slate-800",
                                                                        children: g.desc
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                                                        lineNumber: 242,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, g.range, true, {
                                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 49
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, section.category, true, {
                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                lineNumber: 236,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                        lineNumber: 234,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InterviewSession.tsx",
                                lineNumber: 232,
                                columnNumber: 25
                            }, this),
                            leftTab === 'all-questions' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-[600px] overflow-y-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold mb-4",
                                        children: "Complete Question Bank"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                        lineNumber: 254,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: Object.entries(questionBank).sort(([a], [b])=>{
                                            const track = candidate.track || '';
                                            // Simple heuristic to prioritize match
                                            const isMatchA = a.toLowerCase().includes(track.toLowerCase()) || track === 'General' && a.includes('General');
                                            const isMatchB = b.toLowerCase().includes(track.toLowerCase()) || track === 'General' && b.includes('General');
                                            if (isMatchA && !isMatchB) return -1;
                                            if (!isMatchA && isMatchB) return 1;
                                            return 0;
                                        }).map(([category, questions])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `font-bold p-2 rounded mb-2 ${category.toLowerCase().includes((candidate.track || '').toLowerCase()) ? 'bg-blue-100 text-blue-900 border border-blue-200' : 'bg-slate-50 text-slate-800'}`,
                                                        children: [
                                                            category,
                                                            " ",
                                                            category.toLowerCase().includes((candidate.track || '').toLowerCase()) && '(Recommended)'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-disc pl-5 text-sm space-y-1 text-slate-700",
                                                        children: questions.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: q
                                                            }, q, false, {
                                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                                lineNumber: 272,
                                                                columnNumber: 79
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, category, true, {
                                                fileName: "[project]/src/components/InterviewSession.tsx",
                                                lineNumber: 267,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InterviewSession.tsx",
                                        lineNumber: 255,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InterviewSession.tsx",
                                lineNumber: 253,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InterviewSession.tsx",
                        lineNumber: 160,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-4 flex flex-col gap-4 h-[calc(100vh-8rem)] sticky top-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScoringPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScoringPanel"], {
                            candidateId: candidate.id,
                            role: role,
                            existingScore: myScore || null,
                            isLocked: !!myScore,
                            interviewerName: interviewerName
                        }, role, false, {
                            fileName: "[project]/src/components/InterviewSession.tsx",
                            lineNumber: 283,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/InterviewSession.tsx",
                        lineNumber: 282,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InterviewSession.tsx",
                lineNumber: 157,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/InterviewSession.tsx",
        lineNumber: 76,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_d4967b54._.js.map