module.exports = [
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
"[project]/src/lib/data:177251 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCandidate",
    ()=>$$RSC_SERVER_ACTION_12
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4040634522dfc711cbe6e69301736a194b905d5c62":"deleteCandidate"},"src/lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4040634522dfc711cbe6e69301736a194b905d5c62", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteCandidate");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJy4vZGJDb25maWcnO1xyXG5pbXBvcnQgeyBDYW5kaWRhdGVNb2RlbCwgVXNlck1vZGVsLCBEZXBhcnRtZW50TW9kZWwsIFF1ZXN0aW9uTW9kZWwsIElDYW5kaWRhdGUsIElVc2VyLCBJRGVwYXJ0bWVudCB9IGZyb20gJ0AvbW9kZWxzL21vZGVscyc7XHJcbmltcG9ydCB7IENhbmRpZGF0ZSwgQ2FuZGlkYXRlU3RhdHVzLCBJbnRlcnZpZXdlclJvbGUsIFNjb3JlU2hlZXQsIE1lbWJlciwgVXNlclJvbGUsIFVzZXIgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIEhlbHBlciB0byBlbnN1cmUgY29ubmVjdGlvblxyXG5hc3luYyBmdW5jdGlvbiBkYigpIHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gREVQQVJUTUVOVCBBQ1RJT05TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlcGFydG1lbnRzKCk6IFByb21pc2U8SURlcGFydG1lbnRbXT4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IGRlcHRzID0gYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmZpbmQoe30pLmxlYW4oKTtcclxuICAgIHJldHVybiBkZXB0cy5tYXAoKGQ6IGFueSkgPT4gKHsgLi4uZCwgX2lkOiBkLl9pZC50b1N0cmluZygpIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZERlcGFydG1lbnQobmFtZTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgY29uc3QgaWQgPSBgZGVwdF8ke25hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICdfJyl9YDtcclxuICAgIGNvbnN0IGV4aXN0cyA9IGF3YWl0IERlcGFydG1lbnRNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcbiAgICBpZiAoZXhpc3RzKSByZXR1cm47XHJcblxyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmNyZWF0ZSh7IGlkLCBuYW1lIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvbWVtYmVycy9hZGQnKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2FuZGlkYXRlcy9hZGQnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZURlcGFydG1lbnQoaWQ6IHN0cmluZywgbmV3TmFtZTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmZpbmRPbmVBbmRVcGRhdGUoeyBpZCB9LCB7IG5hbWU6IG5ld05hbWUgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzL2FkZCcpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzL2FkZCcpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGVwYXJ0bWVudChpZDogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmRlbGV0ZU9uZSh7IGlkIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVTRVIgQUNUSU9OUyAoTG9naW4pXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKCk6IFByb21pc2U8VXNlcltdPiB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2VyTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG4gICAgcmV0dXJuIHVzZXJzLm1hcCgodTogYW55KSA9PiAoe1xyXG4gICAgICAgIGlkOiB1LmlkLFxyXG4gICAgICAgIG5hbWU6IHUubmFtZSxcclxuICAgICAgICBlbWFpbDogdS5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZEhhc2g6IHUucGFzc3dvcmRIYXNoLFxyXG4gICAgICAgIHJvbGU6IHUucm9sZSBhcyBVc2VyUm9sZSxcclxuICAgICAgICBkZXBhcnRtZW50SWQ6IHUuZGVwYXJ0bWVudElkXHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDQU5ESURBVEUgQUNUSU9OU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzKCk6IFByb21pc2U8Q2FuZGlkYXRlW10+IHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG4gICAgLy8gTWFwIF9pZCBhbmQgZGF0ZXMgaWYgbmVjZXNzYXJ5LCB0aG91Z2ggbGVhbigpIGlzIG1vc3RseSBQT0pPLlxyXG4gICAgLy8gV2UgdXNlZCBhIGN1c3RvbSAnaWQnIHN0cmluZyBmaWVsZCwgc28gd2UgcmVseSBvbiB0aGF0LlxyXG4gICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjOiBhbnkpID0+ICh7XHJcbiAgICAgICAgLi4uYyxcclxuICAgICAgICBfaWQ6IGMuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgY3JlYXRlZEF0OiBjLmNyZWF0ZWRBdCA/IGMuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgaW50ZXJ2aWV3U3RhcnRUaW1lOiBjLmludGVydmlld1N0YXJ0VGltZSAvLyBpZiBleGlzdHNcclxuICAgIH0pKSBhcyB1bmtub3duIGFzIENhbmRpZGF0ZVtdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlKGlkOiBzdHJpbmcpOiBQcm9taXNlPENhbmRpZGF0ZSB8IHVuZGVmaW5lZD4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IENhbmRpZGF0ZU1vZGVsLmZpbmRPbmUoeyBpZCB9KS5sZWFuKCk7XHJcbiAgICBpZiAoIWNhbmRpZGF0ZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uY2FuZGlkYXRlLFxyXG4gICAgICAgIF9pZDogKGNhbmRpZGF0ZSBhcyBhbnkpLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogKGNhbmRpZGF0ZSBhcyBhbnkpLmNyZWF0ZWRBdD8udG9JU09TdHJpbmcoKVxyXG4gICAgfSBhcyB1bmtub3duIGFzIENhbmRpZGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZENhbmRpZGF0ZXMobmV3Q2FuZGlkYXRlczogQ2FuZGlkYXRlW10pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICAvLyBWYWxpZGF0ZSB1bmlxdWVuZXNzIGlmIG5lZWRlZCwgYnV0IGZvciBidWxrIGFkZCBqdXN0IHB1c2hcclxuICAgIGF3YWl0IENhbmRpZGF0ZU1vZGVsLmluc2VydE1hbnkobmV3Q2FuZGlkYXRlcyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NhbmRpZGF0ZXMnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhbmRpZGF0ZVN0YXR1cyhpZDogc3RyaW5nLCBzdGF0dXM6IENhbmRpZGF0ZVN0YXR1cykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHVwZGF0ZTogYW55ID0geyBzdGF0dXMgfTtcclxuICAgIGlmIChzdGF0dXMgPT09ICdJbi1Qcm9ncmVzcycpIHtcclxuICAgICAgICAvLyBPbmx5IHNldCBzdGFydCB0aW1lIGlmIG5vdCBzZXQ/IE9yIGFsd2F5cz8gTG9naWMgaW4gcHJldmlvdXMgd2FzOiBpZiBub3Qgc2V0LlxyXG4gICAgICAgIC8vIEJ1dCBkb2luZyBpdCBhdG9taWNhbGx5IGluIE1vbmdvIGlzIGhhcmRlciBpbiBvbmUgZ28gd2l0aG91dCBmZXRjaGluZy5cclxuICAgICAgICAvLyBMZXQncyBmZXRjaCBmaXJzdC5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcbiAgICBpZiAoY2FuZGlkYXRlKSB7XHJcbiAgICAgICAgY2FuZGlkYXRlLnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAnSW4tUHJvZ3Jlc3MnICYmICEoY2FuZGlkYXRlIGFzIGFueSkuaW50ZXJ2aWV3U3RhcnRUaW1lKSB7XHJcbiAgICAgICAgICAgIGNhbmRpZGF0ZS5zZXQoJ2ludGVydmlld1N0YXJ0VGltZScsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IGNhbmRpZGF0ZS5zYXZlKCk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9pbnRlcnZpZXcvJHtpZH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdFNjb3JlKGlkOiBzdHJpbmcsIHJvbGU6IHN0cmluZywgc2NvcmU6IFNjb3JlU2hlZXQpIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcblxyXG4gICAgaWYgKGNhbmRpZGF0ZSkge1xyXG4gICAgICAgIC8vIEluaXQgc2NvcmVzIGlmIG51bGwgKGhhbmRsZWQgYnkgU2NoZW1hIGRlZmF1bHQgdXN1YWxseSwgYnV0IHJvYnVzdCBjaGVjaylcclxuICAgICAgICBpZiAoIWNhbmRpZGF0ZS5zY29yZXMpIGNhbmRpZGF0ZS5zY29yZXMgPSB7IGludGVydmlld2VyMTogbnVsbCwgaW50ZXJ2aWV3ZXIyOiBudWxsIH07XHJcblxyXG4gICAgICAgIC8vIFdlIGFjY2VwdCBmbGV4aWJsZSBTY29yZVNoZWV0IHN0cnVjdHVyZVxyXG4gICAgICAgIC8vIERpcmVjdCBhc3NpZ25tZW50IHdvcmtzIGJlY2F1c2Ugb2YgTWl4ZWQgdHlwZVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY29yZXMgPSBjYW5kaWRhdGUuc2NvcmVzO1xyXG4gICAgICAgIGN1cnJlbnRTY29yZXNbcm9sZV0gPSBzY29yZTtcclxuXHJcbiAgICAgICAgLy8gTWFyayBhcyBtb2RpZmllZCBiZWNhdXNlICdzY29yZXMnIGlzIE1peGVkIHR5cGVcclxuICAgICAgICBjYW5kaWRhdGUubWFya01vZGlmaWVkKCdzY29yZXMnKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYm90aCBzdWJtaXR0ZWRcclxuICAgICAgICBjb25zdCBzMSA9IGN1cnJlbnRTY29yZXMuaW50ZXJ2aWV3ZXIxO1xyXG4gICAgICAgIGNvbnN0IHMyID0gY3VycmVudFNjb3Jlcy5pbnRlcnZpZXdlcjI7XHJcblxyXG4gICAgICAgIGlmIChzMSAmJiBzMikge1xyXG4gICAgICAgICAgICBjYW5kaWRhdGUuYXZlcmFnZVNjb3JlID0gKHMxLnRvdGFsICsgczIudG90YWwpIC8gMjtcclxuICAgICAgICAgICAgY29uc3QgcjEgPSBzMS5maW5hbFJhdGluZyB8fCAoczEudG90YWwgLyA1KTtcclxuICAgICAgICAgICAgY29uc3QgcjIgPSBzMi5maW5hbFJhdGluZyB8fCAoczIudG90YWwgLyA1KTtcclxuICAgICAgICAgICAgY2FuZGlkYXRlLmZpbmFsUmF0aW5nQXZlcmFnZSA9IHBhcnNlRmxvYXQoKChyMSArIHIyKSAvIDIpLnRvRml4ZWQoMSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNjb3JlLnJlY29tbWVuZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBjYW5kaWRhdGUucmVjb21tZW5kYXRpb24gPSBzY29yZS5yZWNvbW1lbmRhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZS5zdGF0dXMgPT09ICdJbi1Qcm9ncmVzcycpIHtcclxuICAgICAgICAgICAgICAgIGNhbmRpZGF0ZS5zdGF0dXMgPSAnSW50ZXJ2aWV3ZWQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gUGFydGlhbCB1cGRhdGUsIGZvcmNlIHNhdmUgb2YgdXNhZ2VcclxuICAgICAgICAgICAgY2FuZGlkYXRlLnNjb3JlcyA9IGN1cnJlbnRTY29yZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBjYW5kaWRhdGUuc2F2ZSgpO1xyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvaW50ZXJ2aWV3LyR7aWR9YCk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYW5kaWRhdGVOb3RlcyhpZDogc3RyaW5nLCBub3Rlczogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZmluZE9uZUFuZFVwZGF0ZSh7IGlkIH0sIHsgbm90ZXMgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlVGFncyhpZDogc3RyaW5nLCB0YWdzOiBzdHJpbmdbXSkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IENhbmRpZGF0ZU1vZGVsLmZpbmRPbmVBbmRVcGRhdGUoeyBpZCB9LCB7IHRhZ3MgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FuZGlkYXRlKGlkOiBzdHJpbmcpIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBhd2FpdCBDYW5kaWRhdGVNb2RlbC5kZWxldGVPbmUoeyBpZCB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2FuZGlkYXRlcycpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlRGV0YWlscyhpZDogc3RyaW5nLCBkYXRhOiBQYXJ0aWFsPENhbmRpZGF0ZT4pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lQW5kVXBkYXRlKHsgaWQgfSwgeyAkc2V0OiBkYXRhIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9yZXBvcnRzLyR7aWR9YCk7XHJcbn1cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTUVNQkVSIEFDVElPTlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBOT1RFOiBpbiBNb25nb0RCIHZlcnNpb24sIHdlIHRyZWF0IFwiTWVtYmVyXCIgKHByb2ZpbGUpIGFuZCBcIlVzZXJcIiAoYXV0aCkgYXMgbGlua2VkIGJ1dCBtYXliZSB3ZSBjYW4gbWVyZ2UgdGhlbT9cclxuLy8gVGhlIHByZXZpb3VzIGNvZGUga2VwdCB0aGVtIHNlcGFyYXRlIGFycmF5cy4gV2UnbGwgc3RpY2sgdG8gdGhhdCBsb2dpYyB0byBhdm9pZCBmcm9udGVuZCBicmVha2FnZS5cclxuLy8gJ2dldE1lbWJlcnMnIHJldHVybnMgdGhlIGxpc3Qgb2YgTWVtYmVyIHByb2ZpbGVzIChkaXNwbGF5ZWQgaW4gQWRtaW4gcGFuZWwpLlxyXG4vLyAnZ2V0VXNlcnMnIHJldHVybnMgdGhlIGxvZ2luIGNyZWRlbnRpYWxzICh1c2VkIGJ5IG1pZGRsZXdhcmUvYXV0aCkuXHJcblxyXG4vLyBTaW5jZSB3ZSBkZWZpbmVkIHNjaGVtYXMgZm9yIGJvdGgsIHdlIG1haW50YWluIGR1YWwgd3JpdGVzLlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lbWJlcnMoKTogUHJvbWlzZTxNZW1iZXJbXT4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgVXNlck1vZGVsLmZpbmQoe30pLmxlYW4oKTtcclxuICAgIC8vIFdlIG1hcCBVc2VycyB0byBNZW1iZXJzIHN0cnVjdHVyZSAoc2luY2UgdGhleSBhcmUgYmFzaWNhbGx5IHRoZSBzYW1lIGluIHRoaXMgYXBwKVxyXG4gICAgLy8gT3IgZGlkIHdlIHN0b3JlIGV4dHJhIGRhdGEgb24gTWVtYmVyP1xyXG4gICAgLy8gTG9va2luZyBhdCB0eXBlcy50czogTWVtYmVyIGV4dGVuZHMgVXNlci5cclxuICAgIC8vIEluIGRiLmpzb24sIHRoZXkgd2VyZSBzZXBhcmF0ZSBhcnJheXMuXHJcbiAgICAvLyBXZSB3aWxsIGp1c3QgZmV0Y2ggVXNlcnMgYW5kIG1hcCB0aGVtIHRvIE1lbWJlcltdIHRvIHNpbXBsaWZ5LCBPUiBmZXRjaCBzcGVjaWZpYyBtZW1iZXIgY29sbGVjdGlvbiBpZiB3ZSB3YW50LlxyXG4gICAgLy8gTGV0J3Mgc3RpY2sgdG8gdXNpbmcgVXNlck1vZGVsIGFzIHRoZSBzb3VyY2Ugb2YgdHJ1dGggZm9yIE1lbWJlcnMgdG9vLCB0byBub3JtYWxpemUgZGF0YS5cclxuICAgIHJldHVybiB1c2Vycy5tYXAoKHU6IGFueSkgPT4gKHtcclxuICAgICAgICBpZDogdS5pZCxcclxuICAgICAgICBuYW1lOiB1Lm5hbWUsXHJcbiAgICAgICAgZW1haWw6IHUuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmRIYXNoOiB1LnBhc3N3b3JkSGFzaCxcclxuICAgICAgICByb2xlOiB1LnJvbGUgYXMgVXNlclJvbGUsXHJcbiAgICAgICAgZGVwYXJ0bWVudElkOiB1LmRlcGFydG1lbnRJZCxcclxuICAgICAgICBzdGF0dXM6ICdBY3RpdmUnLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIC8vIE1vY2sgZmllbGRzIGlmIG1pc3NpbmdcclxuICAgIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZE1lbWJlcihtZW1iZXI6IE1lbWJlcikge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIC8vIENoZWNrIGlmIGV4aXN0c1xyXG4gICAgY29uc3QgZXhpc3RzID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoeyBlbWFpbDogbWVtYmVyLmVtYWlsIH0pO1xyXG4gICAgaWYgKGV4aXN0cykgcmV0dXJuO1xyXG5cclxuICAgIGF3YWl0IFVzZXJNb2RlbC5jcmVhdGUoe1xyXG4gICAgICAgIGlkOiBtZW1iZXIuaWQsXHJcbiAgICAgICAgbmFtZTogbWVtYmVyLm5hbWUsXHJcbiAgICAgICAgZW1haWw6IG1lbWJlci5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZEhhc2g6IG1lbWJlci5wYXNzd29yZEhhc2ggfHwgJ2llZWUxMjMnLFxyXG4gICAgICAgIHJvbGU6IG1lbWJlci5yb2xlLFxyXG4gICAgICAgIGRlcGFydG1lbnRJZDogbWVtYmVyLmRlcGFydG1lbnRJZFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZW1iZXIoaWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHUgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IGlkIH0pLmxlYW4oKTtcclxuICAgIGlmICghdSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IHUuaWQsXHJcbiAgICAgICAgbmFtZTogdS5uYW1lLFxyXG4gICAgICAgIGVtYWlsOiB1LmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkSGFzaDogdS5wYXNzd29yZEhhc2gsXHJcbiAgICAgICAgcm9sZTogdS5yb2xlIGFzIFVzZXJSb2xlLFxyXG4gICAgICAgIGRlcGFydG1lbnRJZDogdS5kZXBhcnRtZW50SWQsXHJcbiAgICAgICAgc3RhdHVzOiAnQWN0aXZlJyxcclxuICAgICAgICBzdGFydERhdGU6ICcnXHJcbiAgICB9IGFzIE1lbWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lbWJlcihpZDogc3RyaW5nLCBkYXRhOiBQYXJ0aWFsPE1lbWJlcj4pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICAvLyBGaW5kIFVzZXIgYnkgSUQgZmlyc3QsIG9yIEVtYWlsXHJcbiAgICAvLyBVcGRhdGluZyBVc2VyTW9kZWxcclxuICAgIGNvbnN0IHVwZGF0ZVBheWxvYWQ6IGFueSA9IHt9O1xyXG4gICAgaWYgKGRhdGEubmFtZSkgdXBkYXRlUGF5bG9hZC5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgaWYgKGRhdGEuZW1haWwpIHVwZGF0ZVBheWxvYWQuZW1haWwgPSBkYXRhLmVtYWlsO1xyXG4gICAgaWYgKGRhdGEucm9sZSkgdXBkYXRlUGF5bG9hZC5yb2xlID0gZGF0YS5yb2xlO1xyXG4gICAgaWYgKGRhdGEuZGVwYXJ0bWVudElkKSB1cGRhdGVQYXlsb2FkLmRlcGFydG1lbnRJZCA9IGRhdGEuZGVwYXJ0bWVudElkO1xyXG4gICAgaWYgKGRhdGEucGFzc3dvcmRIYXNoKSB1cGRhdGVQYXlsb2FkLnBhc3N3b3JkSGFzaCA9IGRhdGEucGFzc3dvcmRIYXNoO1xyXG5cclxuICAgIGF3YWl0IFVzZXJNb2RlbC5maW5kT25lQW5kVXBkYXRlKHsgaWQgfSwgeyAkc2V0OiB1cGRhdGVQYXlsb2FkIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVNZW1iZXIoaWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IFVzZXJNb2RlbC5kZWxldGVPbmUoeyBpZCB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvbWVtYmVycycpO1xyXG59XHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFFCQU5LIEFDVElPTlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UXVlc3Rpb25zKCkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGF3YWl0IFF1ZXN0aW9uTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG5cclxuICAgIGlmIChxdWVzdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgLy8gU2VlZFxyXG4gICAgICAgIGNvbnN0IGluaXRpYWxEYXRhID0gcmVxdWlyZSgnLi9kYXRhJykuUVVFU1RJT05fQkFOSztcclxuICAgICAgICAvLyBJbnNlcnQga2V5cyBhcyBjYXRlZ29yaWVzXHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IE9iamVjdC5lbnRyaWVzKGluaXRpYWxEYXRhKS5tYXAoKFtrLCB2XSkgPT4gKHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IGssXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uczogdlxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBhd2FpdCBRdWVzdGlvbk1vZGVsLmluc2VydE1hbnkocGF5bG9hZCk7XHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnZlcnQgYXJyYXkgYmFjayB0byBvYmplY3Q6IHsgY2F0ZWdvcnk6IFtxMSwgcTJdIH1cclxuICAgIGNvbnN0IHJlc3VsdDogYW55ID0ge307XHJcbiAgICBxdWVzdGlvbnMuZm9yRWFjaCgocTogYW55KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0W3EuY2F0ZWdvcnldID0gcS5xdWVzdGlvbnM7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVRdWVzdGlvbnMoY2F0ZWdvcnk6IHN0cmluZywgbmV3UXVlc3Rpb25zOiBzdHJpbmdbXSkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IFF1ZXN0aW9uTW9kZWwuZmluZE9uZUFuZFVwZGF0ZShcclxuICAgICAgICB7IGNhdGVnb3J5IH0sXHJcbiAgICAgICAgeyBxdWVzdGlvbnM6IG5ld1F1ZXN0aW9ucyB9LFxyXG4gICAgICAgIHsgdXBzZXJ0OiB0cnVlIH1cclxuICAgICk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL3FiYW5rJyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2ludGVydmlldy9baWRdJywgJ3BhZ2UnKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNZU1RFTSBBQ1RJT05TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0RGF0YWJhc2UoKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZGVsZXRlTWFueSh7fSk7XHJcbiAgICAvLyBXZSB0eXBpY2FsbHkgZG9uJ3QgZGVsZXRlIFVzZXJzL0RlcHRzIGluIHJlc2V0LCBqdXN0IGNhbmRpZGF0ZXM/XHJcbiAgICAvLyBUaGUgcHJldmlvdXMgY29kZTogZGIuY2FuZGlkYXRlcyA9IFtdLCBkYi5tZW1iZXJzID0gW11cclxuICAgIC8vIFNvIHdlIGRlbGV0ZSBDYW5kaWRhdGVzIGFuZCBVc2VycyAoZXhjZXB0IEFkbWluKS5cclxuICAgIC8vIExldCdzIHNhZmUtZGVsZXRlOiBLZWVwIFN1cGVyQWRtaW4uXHJcbiAgICBhd2FpdCBVc2VyTW9kZWwuZGVsZXRlTWFueSh7IHJvbGU6IHsgJG5lOiAnU3VwZXJBZG1pbicgfSB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoic1JBa0xzQiw4TEFBQSJ9
}),
"[project]/src/components/CandidateList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CandidateList",
    ()=>CandidateList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatusBadge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-ssr] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$177251__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:177251 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function CandidateList({ initialCandidates, userRole }) {
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const [trackFilter, setTrackFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const filtered = initialCandidates.filter((c)=>{
        const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
        const matchesTrack = trackFilter === 'All' || c.track === trackFilter;
        return matchesSearch && matchesStatus && matchesTrack;
    });
    const handleDelete = async (id)=>{
        if (confirm('Are you sure you want to delete this candidate?')) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$177251__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCandidate"])(id);
            router.refresh();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-2.5 text-slate-400",
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 35,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search candidates...",
                                className: "w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CandidateList.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "px-4 py-2 border border-slate-200 rounded-lg bg-white",
                        value: statusFilter,
                        onChange: (e)=>setStatusFilter(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "All",
                                children: "All Statuses"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Pending",
                                children: "Pending"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "In-Progress",
                                children: "In-Progress"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 52,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Interviewed",
                                children: "Interviewed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Selected",
                                children: "Selected"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Rejected",
                                children: "Rejected"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CandidateList.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "px-4 py-2 border border-slate-200 rounded-lg bg-white",
                        value: trackFilter,
                        onChange: (e)=>setTrackFilter(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "All",
                                children: "All Tracks"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 63,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Web",
                                children: "Web"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 64,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "AI-ML",
                                children: "AI-ML"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Event-Tech",
                                children: "Event-Tech"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "General",
                                children: "General"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CandidateList.tsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CandidateList.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-left border-collapse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-slate-50 border-b border-slate-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-4 text-left font-bold text-slate-500",
                                        children: "Candidate"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CandidateList.tsx",
                                        lineNumber: 75,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-4 text-left font-bold text-slate-500",
                                        children: "Track/Year"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CandidateList.tsx",
                                        lineNumber: 76,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-4 text-left font-bold text-slate-500",
                                        children: "Rating"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CandidateList.tsx",
                                        lineNumber: 77,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-4 text-left font-bold text-slate-500",
                                        children: "Recommendation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CandidateList.tsx",
                                        lineNumber: 78,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-4 text-left font-bold text-slate-500",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CandidateList.tsx",
                                        lineNumber: 79,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-4 text-left font-bold text-slate-500",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CandidateList.tsx",
                                        lineNumber: 80,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 74,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CandidateList.tsx",
                            lineNumber: 73,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-slate-100",
                            children: [
                                filtered.map((candidate)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "hover:bg-slate-50 transition-colors group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-slate-900 capitalize",
                                                        children: candidate.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CandidateList.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-slate-500",
                                                        children: candidate.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CandidateList.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CandidateList.tsx",
                                                lineNumber: 86,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-slate-700",
                                                        children: candidate.track
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CandidateList.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-slate-500",
                                                        children: [
                                                            candidate.branch,
                                                            " • ",
                                                            candidate.year
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CandidateList.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CandidateList.tsx",
                                                lineNumber: 90,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: candidate.averageScore ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-blue-600 text-lg",
                                                    children: candidate.averageScore
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CandidateList.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-300",
                                                    children: "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CandidateList.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CandidateList.tsx",
                                                lineNumber: 94,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: candidate.recommendation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs px-2 py-1 bg-slate-100 rounded border border-slate-200 font-medium",
                                                    children: candidate.recommendation
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CandidateList.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-300",
                                                    children: "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CandidateList.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CandidateList.tsx",
                                                lineNumber: 101,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBadge"], {
                                                    status: candidate.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CandidateList.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CandidateList.tsx",
                                                lineNumber: 110,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/interview/${candidate.id}`,
                                                            className: "p-2 bg-slate-900 text-white rounded hover:bg-slate-700",
                                                            title: "Start Interview",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CandidateList.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CandidateList.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/reports/${candidate.id}`,
                                                            className: "p-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100",
                                                            title: "View Report",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CandidateList.tsx",
                                                                lineNumber: 127,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CandidateList.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/candidates/${candidate.id}/edit`,
                                                            className: "p-2 bg-slate-50 text-slate-600 rounded hover:bg-slate-200",
                                                            title: "Edit Details",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CandidateList.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CandidateList.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleDelete(candidate.id),
                                                            className: "p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded",
                                                            title: "Delete",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CandidateList.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CandidateList.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CandidateList.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CandidateList.tsx",
                                                lineNumber: 113,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, candidate.id, true, {
                                        fileName: "[project]/src/components/CandidateList.tsx",
                                        lineNumber: 85,
                                        columnNumber: 29
                                    }, this)),
                                filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 6,
                                        className: "px-6 py-8 text-center text-slate-500",
                                        children: "No candidates found."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CandidateList.tsx",
                                        lineNumber: 149,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CandidateList.tsx",
                                    lineNumber: 148,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CandidateList.tsx",
                            lineNumber: 83,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CandidateList.tsx",
                    lineNumber: 72,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CandidateList.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CandidateList.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[project]/src/lib/data:6da2e7 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCandidates",
    ()=>$$RSC_SERVER_ACTION_7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4054adef7d27212948087d51169d01b03e2bb563d8":"addCandidates"},"src/lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4054adef7d27212948087d51169d01b03e2bb563d8", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addCandidates");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJy4vZGJDb25maWcnO1xyXG5pbXBvcnQgeyBDYW5kaWRhdGVNb2RlbCwgVXNlck1vZGVsLCBEZXBhcnRtZW50TW9kZWwsIFF1ZXN0aW9uTW9kZWwsIElDYW5kaWRhdGUsIElVc2VyLCBJRGVwYXJ0bWVudCB9IGZyb20gJ0AvbW9kZWxzL21vZGVscyc7XHJcbmltcG9ydCB7IENhbmRpZGF0ZSwgQ2FuZGlkYXRlU3RhdHVzLCBJbnRlcnZpZXdlclJvbGUsIFNjb3JlU2hlZXQsIE1lbWJlciwgVXNlclJvbGUsIFVzZXIgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIEhlbHBlciB0byBlbnN1cmUgY29ubmVjdGlvblxyXG5hc3luYyBmdW5jdGlvbiBkYigpIHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gREVQQVJUTUVOVCBBQ1RJT05TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlcGFydG1lbnRzKCk6IFByb21pc2U8SURlcGFydG1lbnRbXT4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IGRlcHRzID0gYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmZpbmQoe30pLmxlYW4oKTtcclxuICAgIHJldHVybiBkZXB0cy5tYXAoKGQ6IGFueSkgPT4gKHsgLi4uZCwgX2lkOiBkLl9pZC50b1N0cmluZygpIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZERlcGFydG1lbnQobmFtZTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgY29uc3QgaWQgPSBgZGVwdF8ke25hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICdfJyl9YDtcclxuICAgIGNvbnN0IGV4aXN0cyA9IGF3YWl0IERlcGFydG1lbnRNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcbiAgICBpZiAoZXhpc3RzKSByZXR1cm47XHJcblxyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmNyZWF0ZSh7IGlkLCBuYW1lIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvbWVtYmVycy9hZGQnKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2FuZGlkYXRlcy9hZGQnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZURlcGFydG1lbnQoaWQ6IHN0cmluZywgbmV3TmFtZTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmZpbmRPbmVBbmRVcGRhdGUoeyBpZCB9LCB7IG5hbWU6IG5ld05hbWUgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzL2FkZCcpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzL2FkZCcpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGVwYXJ0bWVudChpZDogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmRlbGV0ZU9uZSh7IGlkIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVTRVIgQUNUSU9OUyAoTG9naW4pXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKCk6IFByb21pc2U8VXNlcltdPiB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2VyTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG4gICAgcmV0dXJuIHVzZXJzLm1hcCgodTogYW55KSA9PiAoe1xyXG4gICAgICAgIGlkOiB1LmlkLFxyXG4gICAgICAgIG5hbWU6IHUubmFtZSxcclxuICAgICAgICBlbWFpbDogdS5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZEhhc2g6IHUucGFzc3dvcmRIYXNoLFxyXG4gICAgICAgIHJvbGU6IHUucm9sZSBhcyBVc2VyUm9sZSxcclxuICAgICAgICBkZXBhcnRtZW50SWQ6IHUuZGVwYXJ0bWVudElkXHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDQU5ESURBVEUgQUNUSU9OU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzKCk6IFByb21pc2U8Q2FuZGlkYXRlW10+IHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG4gICAgLy8gTWFwIF9pZCBhbmQgZGF0ZXMgaWYgbmVjZXNzYXJ5LCB0aG91Z2ggbGVhbigpIGlzIG1vc3RseSBQT0pPLlxyXG4gICAgLy8gV2UgdXNlZCBhIGN1c3RvbSAnaWQnIHN0cmluZyBmaWVsZCwgc28gd2UgcmVseSBvbiB0aGF0LlxyXG4gICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjOiBhbnkpID0+ICh7XHJcbiAgICAgICAgLi4uYyxcclxuICAgICAgICBfaWQ6IGMuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgY3JlYXRlZEF0OiBjLmNyZWF0ZWRBdCA/IGMuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgaW50ZXJ2aWV3U3RhcnRUaW1lOiBjLmludGVydmlld1N0YXJ0VGltZSAvLyBpZiBleGlzdHNcclxuICAgIH0pKSBhcyB1bmtub3duIGFzIENhbmRpZGF0ZVtdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlKGlkOiBzdHJpbmcpOiBQcm9taXNlPENhbmRpZGF0ZSB8IHVuZGVmaW5lZD4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IENhbmRpZGF0ZU1vZGVsLmZpbmRPbmUoeyBpZCB9KS5sZWFuKCk7XHJcbiAgICBpZiAoIWNhbmRpZGF0ZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uY2FuZGlkYXRlLFxyXG4gICAgICAgIF9pZDogKGNhbmRpZGF0ZSBhcyBhbnkpLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogKGNhbmRpZGF0ZSBhcyBhbnkpLmNyZWF0ZWRBdD8udG9JU09TdHJpbmcoKVxyXG4gICAgfSBhcyB1bmtub3duIGFzIENhbmRpZGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZENhbmRpZGF0ZXMobmV3Q2FuZGlkYXRlczogQ2FuZGlkYXRlW10pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICAvLyBWYWxpZGF0ZSB1bmlxdWVuZXNzIGlmIG5lZWRlZCwgYnV0IGZvciBidWxrIGFkZCBqdXN0IHB1c2hcclxuICAgIGF3YWl0IENhbmRpZGF0ZU1vZGVsLmluc2VydE1hbnkobmV3Q2FuZGlkYXRlcyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NhbmRpZGF0ZXMnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhbmRpZGF0ZVN0YXR1cyhpZDogc3RyaW5nLCBzdGF0dXM6IENhbmRpZGF0ZVN0YXR1cykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHVwZGF0ZTogYW55ID0geyBzdGF0dXMgfTtcclxuICAgIGlmIChzdGF0dXMgPT09ICdJbi1Qcm9ncmVzcycpIHtcclxuICAgICAgICAvLyBPbmx5IHNldCBzdGFydCB0aW1lIGlmIG5vdCBzZXQ/IE9yIGFsd2F5cz8gTG9naWMgaW4gcHJldmlvdXMgd2FzOiBpZiBub3Qgc2V0LlxyXG4gICAgICAgIC8vIEJ1dCBkb2luZyBpdCBhdG9taWNhbGx5IGluIE1vbmdvIGlzIGhhcmRlciBpbiBvbmUgZ28gd2l0aG91dCBmZXRjaGluZy5cclxuICAgICAgICAvLyBMZXQncyBmZXRjaCBmaXJzdC5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcbiAgICBpZiAoY2FuZGlkYXRlKSB7XHJcbiAgICAgICAgY2FuZGlkYXRlLnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAnSW4tUHJvZ3Jlc3MnICYmICEoY2FuZGlkYXRlIGFzIGFueSkuaW50ZXJ2aWV3U3RhcnRUaW1lKSB7XHJcbiAgICAgICAgICAgIGNhbmRpZGF0ZS5zZXQoJ2ludGVydmlld1N0YXJ0VGltZScsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IGNhbmRpZGF0ZS5zYXZlKCk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9pbnRlcnZpZXcvJHtpZH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdFNjb3JlKGlkOiBzdHJpbmcsIHJvbGU6IHN0cmluZywgc2NvcmU6IFNjb3JlU2hlZXQpIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcblxyXG4gICAgaWYgKGNhbmRpZGF0ZSkge1xyXG4gICAgICAgIC8vIEluaXQgc2NvcmVzIGlmIG51bGwgKGhhbmRsZWQgYnkgU2NoZW1hIGRlZmF1bHQgdXN1YWxseSwgYnV0IHJvYnVzdCBjaGVjaylcclxuICAgICAgICBpZiAoIWNhbmRpZGF0ZS5zY29yZXMpIGNhbmRpZGF0ZS5zY29yZXMgPSB7IGludGVydmlld2VyMTogbnVsbCwgaW50ZXJ2aWV3ZXIyOiBudWxsIH07XHJcblxyXG4gICAgICAgIC8vIFdlIGFjY2VwdCBmbGV4aWJsZSBTY29yZVNoZWV0IHN0cnVjdHVyZVxyXG4gICAgICAgIC8vIERpcmVjdCBhc3NpZ25tZW50IHdvcmtzIGJlY2F1c2Ugb2YgTWl4ZWQgdHlwZVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY29yZXMgPSBjYW5kaWRhdGUuc2NvcmVzO1xyXG4gICAgICAgIGN1cnJlbnRTY29yZXNbcm9sZV0gPSBzY29yZTtcclxuXHJcbiAgICAgICAgLy8gTWFyayBhcyBtb2RpZmllZCBiZWNhdXNlICdzY29yZXMnIGlzIE1peGVkIHR5cGVcclxuICAgICAgICBjYW5kaWRhdGUubWFya01vZGlmaWVkKCdzY29yZXMnKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYm90aCBzdWJtaXR0ZWRcclxuICAgICAgICBjb25zdCBzMSA9IGN1cnJlbnRTY29yZXMuaW50ZXJ2aWV3ZXIxO1xyXG4gICAgICAgIGNvbnN0IHMyID0gY3VycmVudFNjb3Jlcy5pbnRlcnZpZXdlcjI7XHJcblxyXG4gICAgICAgIGlmIChzMSAmJiBzMikge1xyXG4gICAgICAgICAgICBjYW5kaWRhdGUuYXZlcmFnZVNjb3JlID0gKHMxLnRvdGFsICsgczIudG90YWwpIC8gMjtcclxuICAgICAgICAgICAgY29uc3QgcjEgPSBzMS5maW5hbFJhdGluZyB8fCAoczEudG90YWwgLyA1KTtcclxuICAgICAgICAgICAgY29uc3QgcjIgPSBzMi5maW5hbFJhdGluZyB8fCAoczIudG90YWwgLyA1KTtcclxuICAgICAgICAgICAgY2FuZGlkYXRlLmZpbmFsUmF0aW5nQXZlcmFnZSA9IHBhcnNlRmxvYXQoKChyMSArIHIyKSAvIDIpLnRvRml4ZWQoMSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNjb3JlLnJlY29tbWVuZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBjYW5kaWRhdGUucmVjb21tZW5kYXRpb24gPSBzY29yZS5yZWNvbW1lbmRhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZS5zdGF0dXMgPT09ICdJbi1Qcm9ncmVzcycpIHtcclxuICAgICAgICAgICAgICAgIGNhbmRpZGF0ZS5zdGF0dXMgPSAnSW50ZXJ2aWV3ZWQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gUGFydGlhbCB1cGRhdGUsIGZvcmNlIHNhdmUgb2YgdXNhZ2VcclxuICAgICAgICAgICAgY2FuZGlkYXRlLnNjb3JlcyA9IGN1cnJlbnRTY29yZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBjYW5kaWRhdGUuc2F2ZSgpO1xyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvaW50ZXJ2aWV3LyR7aWR9YCk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYW5kaWRhdGVOb3RlcyhpZDogc3RyaW5nLCBub3Rlczogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZmluZE9uZUFuZFVwZGF0ZSh7IGlkIH0sIHsgbm90ZXMgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlVGFncyhpZDogc3RyaW5nLCB0YWdzOiBzdHJpbmdbXSkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IENhbmRpZGF0ZU1vZGVsLmZpbmRPbmVBbmRVcGRhdGUoeyBpZCB9LCB7IHRhZ3MgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FuZGlkYXRlKGlkOiBzdHJpbmcpIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBhd2FpdCBDYW5kaWRhdGVNb2RlbC5kZWxldGVPbmUoeyBpZCB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2FuZGlkYXRlcycpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlRGV0YWlscyhpZDogc3RyaW5nLCBkYXRhOiBQYXJ0aWFsPENhbmRpZGF0ZT4pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lQW5kVXBkYXRlKHsgaWQgfSwgeyAkc2V0OiBkYXRhIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9yZXBvcnRzLyR7aWR9YCk7XHJcbn1cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTUVNQkVSIEFDVElPTlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBOT1RFOiBpbiBNb25nb0RCIHZlcnNpb24sIHdlIHRyZWF0IFwiTWVtYmVyXCIgKHByb2ZpbGUpIGFuZCBcIlVzZXJcIiAoYXV0aCkgYXMgbGlua2VkIGJ1dCBtYXliZSB3ZSBjYW4gbWVyZ2UgdGhlbT9cclxuLy8gVGhlIHByZXZpb3VzIGNvZGUga2VwdCB0aGVtIHNlcGFyYXRlIGFycmF5cy4gV2UnbGwgc3RpY2sgdG8gdGhhdCBsb2dpYyB0byBhdm9pZCBmcm9udGVuZCBicmVha2FnZS5cclxuLy8gJ2dldE1lbWJlcnMnIHJldHVybnMgdGhlIGxpc3Qgb2YgTWVtYmVyIHByb2ZpbGVzIChkaXNwbGF5ZWQgaW4gQWRtaW4gcGFuZWwpLlxyXG4vLyAnZ2V0VXNlcnMnIHJldHVybnMgdGhlIGxvZ2luIGNyZWRlbnRpYWxzICh1c2VkIGJ5IG1pZGRsZXdhcmUvYXV0aCkuXHJcblxyXG4vLyBTaW5jZSB3ZSBkZWZpbmVkIHNjaGVtYXMgZm9yIGJvdGgsIHdlIG1haW50YWluIGR1YWwgd3JpdGVzLlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lbWJlcnMoKTogUHJvbWlzZTxNZW1iZXJbXT4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgVXNlck1vZGVsLmZpbmQoe30pLmxlYW4oKTtcclxuICAgIC8vIFdlIG1hcCBVc2VycyB0byBNZW1iZXJzIHN0cnVjdHVyZSAoc2luY2UgdGhleSBhcmUgYmFzaWNhbGx5IHRoZSBzYW1lIGluIHRoaXMgYXBwKVxyXG4gICAgLy8gT3IgZGlkIHdlIHN0b3JlIGV4dHJhIGRhdGEgb24gTWVtYmVyP1xyXG4gICAgLy8gTG9va2luZyBhdCB0eXBlcy50czogTWVtYmVyIGV4dGVuZHMgVXNlci5cclxuICAgIC8vIEluIGRiLmpzb24sIHRoZXkgd2VyZSBzZXBhcmF0ZSBhcnJheXMuXHJcbiAgICAvLyBXZSB3aWxsIGp1c3QgZmV0Y2ggVXNlcnMgYW5kIG1hcCB0aGVtIHRvIE1lbWJlcltdIHRvIHNpbXBsaWZ5LCBPUiBmZXRjaCBzcGVjaWZpYyBtZW1iZXIgY29sbGVjdGlvbiBpZiB3ZSB3YW50LlxyXG4gICAgLy8gTGV0J3Mgc3RpY2sgdG8gdXNpbmcgVXNlck1vZGVsIGFzIHRoZSBzb3VyY2Ugb2YgdHJ1dGggZm9yIE1lbWJlcnMgdG9vLCB0byBub3JtYWxpemUgZGF0YS5cclxuICAgIHJldHVybiB1c2Vycy5tYXAoKHU6IGFueSkgPT4gKHtcclxuICAgICAgICBpZDogdS5pZCxcclxuICAgICAgICBuYW1lOiB1Lm5hbWUsXHJcbiAgICAgICAgZW1haWw6IHUuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmRIYXNoOiB1LnBhc3N3b3JkSGFzaCxcclxuICAgICAgICByb2xlOiB1LnJvbGUgYXMgVXNlclJvbGUsXHJcbiAgICAgICAgZGVwYXJ0bWVudElkOiB1LmRlcGFydG1lbnRJZCxcclxuICAgICAgICBzdGF0dXM6ICdBY3RpdmUnLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIC8vIE1vY2sgZmllbGRzIGlmIG1pc3NpbmdcclxuICAgIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZE1lbWJlcihtZW1iZXI6IE1lbWJlcikge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIC8vIENoZWNrIGlmIGV4aXN0c1xyXG4gICAgY29uc3QgZXhpc3RzID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoeyBlbWFpbDogbWVtYmVyLmVtYWlsIH0pO1xyXG4gICAgaWYgKGV4aXN0cykgcmV0dXJuO1xyXG5cclxuICAgIGF3YWl0IFVzZXJNb2RlbC5jcmVhdGUoe1xyXG4gICAgICAgIGlkOiBtZW1iZXIuaWQsXHJcbiAgICAgICAgbmFtZTogbWVtYmVyLm5hbWUsXHJcbiAgICAgICAgZW1haWw6IG1lbWJlci5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZEhhc2g6IG1lbWJlci5wYXNzd29yZEhhc2ggfHwgJ2llZWUxMjMnLFxyXG4gICAgICAgIHJvbGU6IG1lbWJlci5yb2xlLFxyXG4gICAgICAgIGRlcGFydG1lbnRJZDogbWVtYmVyLmRlcGFydG1lbnRJZFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZW1iZXIoaWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHUgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IGlkIH0pLmxlYW4oKTtcclxuICAgIGlmICghdSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IHUuaWQsXHJcbiAgICAgICAgbmFtZTogdS5uYW1lLFxyXG4gICAgICAgIGVtYWlsOiB1LmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkSGFzaDogdS5wYXNzd29yZEhhc2gsXHJcbiAgICAgICAgcm9sZTogdS5yb2xlIGFzIFVzZXJSb2xlLFxyXG4gICAgICAgIGRlcGFydG1lbnRJZDogdS5kZXBhcnRtZW50SWQsXHJcbiAgICAgICAgc3RhdHVzOiAnQWN0aXZlJyxcclxuICAgICAgICBzdGFydERhdGU6ICcnXHJcbiAgICB9IGFzIE1lbWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lbWJlcihpZDogc3RyaW5nLCBkYXRhOiBQYXJ0aWFsPE1lbWJlcj4pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICAvLyBGaW5kIFVzZXIgYnkgSUQgZmlyc3QsIG9yIEVtYWlsXHJcbiAgICAvLyBVcGRhdGluZyBVc2VyTW9kZWxcclxuICAgIGNvbnN0IHVwZGF0ZVBheWxvYWQ6IGFueSA9IHt9O1xyXG4gICAgaWYgKGRhdGEubmFtZSkgdXBkYXRlUGF5bG9hZC5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgaWYgKGRhdGEuZW1haWwpIHVwZGF0ZVBheWxvYWQuZW1haWwgPSBkYXRhLmVtYWlsO1xyXG4gICAgaWYgKGRhdGEucm9sZSkgdXBkYXRlUGF5bG9hZC5yb2xlID0gZGF0YS5yb2xlO1xyXG4gICAgaWYgKGRhdGEuZGVwYXJ0bWVudElkKSB1cGRhdGVQYXlsb2FkLmRlcGFydG1lbnRJZCA9IGRhdGEuZGVwYXJ0bWVudElkO1xyXG4gICAgaWYgKGRhdGEucGFzc3dvcmRIYXNoKSB1cGRhdGVQYXlsb2FkLnBhc3N3b3JkSGFzaCA9IGRhdGEucGFzc3dvcmRIYXNoO1xyXG5cclxuICAgIGF3YWl0IFVzZXJNb2RlbC5maW5kT25lQW5kVXBkYXRlKHsgaWQgfSwgeyAkc2V0OiB1cGRhdGVQYXlsb2FkIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVNZW1iZXIoaWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IFVzZXJNb2RlbC5kZWxldGVPbmUoeyBpZCB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvbWVtYmVycycpO1xyXG59XHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFFCQU5LIEFDVElPTlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UXVlc3Rpb25zKCkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGF3YWl0IFF1ZXN0aW9uTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG5cclxuICAgIGlmIChxdWVzdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgLy8gU2VlZFxyXG4gICAgICAgIGNvbnN0IGluaXRpYWxEYXRhID0gcmVxdWlyZSgnLi9kYXRhJykuUVVFU1RJT05fQkFOSztcclxuICAgICAgICAvLyBJbnNlcnQga2V5cyBhcyBjYXRlZ29yaWVzXHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IE9iamVjdC5lbnRyaWVzKGluaXRpYWxEYXRhKS5tYXAoKFtrLCB2XSkgPT4gKHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IGssXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uczogdlxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBhd2FpdCBRdWVzdGlvbk1vZGVsLmluc2VydE1hbnkocGF5bG9hZCk7XHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnZlcnQgYXJyYXkgYmFjayB0byBvYmplY3Q6IHsgY2F0ZWdvcnk6IFtxMSwgcTJdIH1cclxuICAgIGNvbnN0IHJlc3VsdDogYW55ID0ge307XHJcbiAgICBxdWVzdGlvbnMuZm9yRWFjaCgocTogYW55KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0W3EuY2F0ZWdvcnldID0gcS5xdWVzdGlvbnM7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVRdWVzdGlvbnMoY2F0ZWdvcnk6IHN0cmluZywgbmV3UXVlc3Rpb25zOiBzdHJpbmdbXSkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IFF1ZXN0aW9uTW9kZWwuZmluZE9uZUFuZFVwZGF0ZShcclxuICAgICAgICB7IGNhdGVnb3J5IH0sXHJcbiAgICAgICAgeyBxdWVzdGlvbnM6IG5ld1F1ZXN0aW9ucyB9LFxyXG4gICAgICAgIHsgdXBzZXJ0OiB0cnVlIH1cclxuICAgICk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL3FiYW5rJyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2ludGVydmlldy9baWRdJywgJ3BhZ2UnKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNZU1RFTSBBQ1RJT05TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0RGF0YWJhc2UoKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZGVsZXRlTWFueSh7fSk7XHJcbiAgICAvLyBXZSB0eXBpY2FsbHkgZG9uJ3QgZGVsZXRlIFVzZXJzL0RlcHRzIGluIHJlc2V0LCBqdXN0IGNhbmRpZGF0ZXM/XHJcbiAgICAvLyBUaGUgcHJldmlvdXMgY29kZTogZGIuY2FuZGlkYXRlcyA9IFtdLCBkYi5tZW1iZXJzID0gW11cclxuICAgIC8vIFNvIHdlIGRlbGV0ZSBDYW5kaWRhdGVzIGFuZCBVc2VycyAoZXhjZXB0IEFkbWluKS5cclxuICAgIC8vIExldCdzIHNhZmUtZGVsZXRlOiBLZWVwIFN1cGVyQWRtaW4uXHJcbiAgICBhd2FpdCBVc2VyTW9kZWwuZGVsZXRlTWFueSh7IHJvbGU6IHsgJG5lOiAnU3VwZXJBZG1pbicgfSB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib1JBNkZzQiwwTEFBQSJ9
}),
"[project]/src/components/CSVImporter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CSVImporter",
    ()=>CSVImporter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/papaparse/papaparse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$6da2e7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:6da2e7 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function CSVImporter() {
    const [isImporting, setIsImporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleFileUpload = (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        setIsImporting(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].parse(file, {
            header: true,
            complete: async (results)=>{
                const newCandidates = results.data.filter((row)=>row['Full Name'] || row['Name']) // Basic validation
                .map((row)=>({
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
                        name: row['Full Name'] || row['Name'] || 'Unknown',
                        branch: row['Branch'] || '',
                        year: row['Year'] || '',
                        email: row['Email'] || '',
                        phone: row['Phone'] || '',
                        track: row['Track'] || row['Interest Area'] || 'General',
                        whyIeee: row['Why IEEE?'] || '',
                        skills: row['Skills'] || '',
                        pastActivities: row['Past Activities'] || '',
                        scores: {
                            interviewer1: null,
                            interviewer2: null
                        },
                        averageScore: 0,
                        finalRatingAverage: 0,
                        notes: '',
                        tags: [],
                        status: 'Pending',
                        createdAt: new Date().toISOString()
                    }));
                if (newCandidates.length > 0) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$6da2e7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addCandidates"])(newCandidates);
                    router.refresh();
                }
                setIsImporting(false);
            },
            error: (error)=>{
                console.error('CSV Error:', error);
                setIsImporting(false);
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                accept: ".csv",
                onChange: handleFileUpload,
                className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer",
                disabled: isImporting
            }, void 0, false, {
                fileName: "[project]/src/components/CSVImporter.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50",
                children: [
                    isImporting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "animate-spin",
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/components/CSVImporter.tsx",
                        lineNumber: 69,
                        columnNumber: 32
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/components/CSVImporter.tsx",
                        lineNumber: 69,
                        columnNumber: 81
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: isImporting ? 'Importing...' : 'Import CSV'
                    }, void 0, false, {
                        fileName: "[project]/src/components/CSVImporter.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CSVImporter.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CSVImporter.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/ExportButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExportButton",
    ()=>ExportButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
'use client';
;
;
function ExportButton({ candidates }) {
    const handleExport = ()=>{
        // Define headers
        const headers = [
            'ID',
            'Name',
            'Email',
            'Phone',
            'Branch',
            'Year',
            'Track',
            'Why IEEE',
            'Status',
            'Average Score (50)',
            'Final Rating (10)',
            'Tags',
            'Interviewer 1 Name',
            'Inv 1 Score',
            'Inv 1 Rec',
            'Interviewer 2 Name',
            'Inv 2 Score',
            'Inv 2 Rec',
            'Notes'
        ];
        // Map data to rows
        const rows = candidates.map((c)=>[
                c.id,
                `"${c.name}"`,
                c.email,
                c.phone,
                c.branch,
                c.year,
                c.track,
                `"${c.whyIeee.replace(/"/g, '""')}"`,
                c.status,
                c.averageScore,
                c.finalRatingAverage,
                `"${c.tags.join(', ')}"`,
                c.scores.interviewer1?.interviewerName || '',
                c.scores.interviewer1?.total || '',
                c.scores.interviewer1?.recommendation || '',
                c.scores.interviewer2?.interviewerName || '',
                c.scores.interviewer2?.total || '',
                c.scores.interviewer2?.recommendation || '',
                `"${c.notes.replace(/"/g, '""')}"`
            ]);
        const csvContent = [
            headers.join(','),
            ...rows.map((row)=>row.join(','))
        ].join('\n');
        const blob = new Blob([
            csvContent
        ], {
            type: 'text/csv;charset=utf-8;'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'ieee_candidates_export.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleExport,
        className: "flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-bold text-sm shadow-sm transition-all active:scale-95",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/components/ExportButton.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            " Export CSV"
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ExportButton.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, this);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Search
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Play
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
            key: "10ikf1"
        }
    ]
];
const Play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("play", __iconNode);
;
 //# sourceMappingURL=play.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Play",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Trash2
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 11v6",
            key: "nco0om"
        }
    ],
    [
        "path",
        {
            d: "M14 11v6",
            key: "outv1u"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
            key: "miytrc"
        }
    ],
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
            key: "e791ji"
        }
    ]
];
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("trash-2", __iconNode);
;
 //# sourceMappingURL=trash-2.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>UserPlus
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "line",
        {
            x1: "19",
            x2: "19",
            y1: "8",
            y2: "14",
            key: "1bvyxn"
        }
    ],
    [
        "line",
        {
            x1: "22",
            x2: "16",
            y1: "11",
            y2: "11",
            key: "1shjgl"
        }
    ]
];
const UserPlus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("user-plus", __iconNode);
;
 //# sourceMappingURL=user-plus.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-ssr] (ecmascript) <export default as UserPlus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserPlus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>FileText
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
            key: "1oefj6"
        }
    ],
    [
        "path",
        {
            d: "M14 2v5a1 1 0 0 0 1 1h5",
            key: "wfsgrz"
        }
    ],
    [
        "path",
        {
            d: "M10 9H8",
            key: "b1mrlr"
        }
    ],
    [
        "path",
        {
            d: "M16 13H8",
            key: "t4e002"
        }
    ],
    [
        "path",
        {
            d: "M16 17H8",
            key: "z1uh3a"
        }
    ]
];
const FileText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("file-text", __iconNode);
;
 //# sourceMappingURL=file-text.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/papaparse/papaparse.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/ (function(root, factory) {
    /* globals define */ if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        ((r)=>r !== undefined && __turbopack_context__.v(r))(factory());
    } else if ("TURBOPACK compile-time truthy", 1) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else //TURBOPACK unreachable
    ;
// in strict mode we cannot access arguments.callee, so we need a named reference to
// stringify the factory method for the blob worker
// eslint-disable-next-line func-name
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function moduleFactory() {
    'use strict';
    var global = function() {
        // alternative method, similar to `Function('return this')()`
        // but without using `eval` (which is disabled when
        // using Content Security Policy).
        if (typeof self !== 'undefined') {
            return self;
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (typeof global !== 'undefined') {
            return global;
        }
        // When running tests none of the above have been defined
        return {};
    }();
    function getWorkerBlob() {
        var URL = global.URL || global.webkitURL || null;
        var code = moduleFactory.toString();
        return Papa.BLOB_URL || (Papa.BLOB_URL = URL.createObjectURL(new Blob([
            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
            '(',
            code,
            ')();'
        ], {
            type: 'text/javascript'
        })));
    }
    var IS_WORKER = !global.document && !!global.postMessage, IS_PAPA_WORKER = global.IS_PAPA_WORKER || false;
    var workers = {}, workerIdCounter = 0;
    var Papa = {};
    Papa.parse = CsvToJson;
    Papa.unparse = JsonToCsv;
    Papa.RECORD_SEP = String.fromCharCode(30);
    Papa.UNIT_SEP = String.fromCharCode(31);
    Papa.BYTE_ORDER_MARK = '\ufeff';
    Papa.BAD_DELIMITERS = [
        '\r',
        '\n',
        '"',
        Papa.BYTE_ORDER_MARK
    ];
    Papa.WORKERS_SUPPORTED = !IS_WORKER && !!global.Worker;
    Papa.NODE_STREAM_INPUT = 1;
    // Configurable chunk sizes for local and remote files, respectively
    Papa.LocalChunkSize = 1024 * 1024 * 10; // 10 MB
    Papa.RemoteChunkSize = 1024 * 1024 * 5; // 5 MB
    Papa.DefaultDelimiter = ','; // Used if not specified and detection fails
    // Exposed for testing and development only
    Papa.Parser = Parser;
    Papa.ParserHandle = ParserHandle;
    Papa.NetworkStreamer = NetworkStreamer;
    Papa.FileStreamer = FileStreamer;
    Papa.StringStreamer = StringStreamer;
    Papa.ReadableStreamStreamer = ReadableStreamStreamer;
    if (typeof PAPA_BROWSER_CONTEXT === 'undefined') {
        Papa.DuplexStreamStreamer = DuplexStreamStreamer;
    }
    if (global.jQuery) {
        var $ = global.jQuery;
        $.fn.parse = function(options) {
            var config = options.config || {};
            var queue = [];
            this.each(function(idx) {
                var supported = $(this).prop('tagName').toUpperCase() === 'INPUT' && $(this).attr('type').toLowerCase() === 'file' && global.FileReader;
                if (!supported || !this.files || this.files.length === 0) return true; // continue to next input element
                for(var i = 0; i < this.files.length; i++){
                    queue.push({
                        file: this.files[i],
                        inputElem: this,
                        instanceConfig: $.extend({}, config)
                    });
                }
            });
            parseNextFile(); // begin parsing
            return this; // maintains chainability
            //TURBOPACK unreachable
            ;
            function parseNextFile() {
                if (queue.length === 0) {
                    if (isFunction(options.complete)) options.complete();
                    return;
                }
                var f = queue[0];
                if (isFunction(options.before)) {
                    var returned = options.before(f.file, f.inputElem);
                    if (typeof returned === 'object') {
                        if (returned.action === 'abort') {
                            error('AbortError', f.file, f.inputElem, returned.reason);
                            return; // Aborts all queued files immediately
                        } else if (returned.action === 'skip') {
                            fileComplete(); // parse the next file in the queue, if any
                            return;
                        } else if (typeof returned.config === 'object') f.instanceConfig = $.extend(f.instanceConfig, returned.config);
                    } else if (returned === 'skip') {
                        fileComplete(); // parse the next file in the queue, if any
                        return;
                    }
                }
                // Wrap up the user's complete callback, if any, so that ours also gets executed
                var userCompleteFunc = f.instanceConfig.complete;
                f.instanceConfig.complete = function(results) {
                    if (isFunction(userCompleteFunc)) userCompleteFunc(results, f.file, f.inputElem);
                    fileComplete();
                };
                Papa.parse(f.file, f.instanceConfig);
            }
            function error(name, file, elem, reason) {
                if (isFunction(options.error)) options.error({
                    name: name
                }, file, elem, reason);
            }
            function fileComplete() {
                queue.splice(0, 1);
                parseNextFile();
            }
        };
    }
    if (IS_PAPA_WORKER) {
        global.onmessage = workerThreadReceivedMessage;
    }
    function CsvToJson(_input, _config) {
        _config = _config || {};
        var dynamicTyping = _config.dynamicTyping || false;
        if (isFunction(dynamicTyping)) {
            _config.dynamicTypingFunction = dynamicTyping;
            // Will be filled on first row call
            dynamicTyping = {};
        }
        _config.dynamicTyping = dynamicTyping;
        _config.transform = isFunction(_config.transform) ? _config.transform : false;
        if (_config.worker && Papa.WORKERS_SUPPORTED) {
            var w = newWorker();
            w.userStep = _config.step;
            w.userChunk = _config.chunk;
            w.userComplete = _config.complete;
            w.userError = _config.error;
            _config.step = isFunction(_config.step);
            _config.chunk = isFunction(_config.chunk);
            _config.complete = isFunction(_config.complete);
            _config.error = isFunction(_config.error);
            delete _config.worker; // prevent infinite loop
            w.postMessage({
                input: _input,
                config: _config,
                workerId: w.id
            });
            return;
        }
        var streamer = null;
        if (_input === Papa.NODE_STREAM_INPUT && typeof PAPA_BROWSER_CONTEXT === 'undefined') {
            // create a node Duplex stream for use
            // with .pipe
            streamer = new DuplexStreamStreamer(_config);
            return streamer.getStream();
        } else if (typeof _input === 'string') {
            _input = stripBom(_input);
            if (_config.download) streamer = new NetworkStreamer(_config);
            else streamer = new StringStreamer(_config);
        } else if (_input.readable === true && isFunction(_input.read) && isFunction(_input.on)) {
            streamer = new ReadableStreamStreamer(_config);
        } else if (global.File && _input instanceof File || _input instanceof Object) streamer = new FileStreamer(_config);
        return streamer.stream(_input);
        //TURBOPACK unreachable
        ;
        // Strip character from UTF-8 BOM encoded files that cause issue parsing the file
        function stripBom(string) {
            if (string.charCodeAt(0) === 0xfeff) {
                return string.slice(1);
            }
            return string;
        }
    }
    function JsonToCsv(_input, _config) {
        // Default configuration
        /** whether to surround every datum with quotes */ var _quotes = false;
        /** whether to write headers */ var _writeHeader = true;
        /** delimiting character(s) */ var _delimiter = ',';
        /** newline character(s) */ var _newline = '\r\n';
        /** quote character */ var _quoteChar = '"';
        /** escaped quote character, either "" or <config.escapeChar>" */ var _escapedQuote = _quoteChar + _quoteChar;
        /** whether to skip empty lines */ var _skipEmptyLines = false;
        /** the columns (keys) we expect when we unparse objects */ var _columns = null;
        /** whether to prevent outputting cells that can be parsed as formulae by spreadsheet software (Excel and LibreOffice) */ var _escapeFormulae = false;
        unpackConfig();
        var quoteCharRegex = new RegExp(escapeRegExp(_quoteChar), 'g');
        if (typeof _input === 'string') _input = JSON.parse(_input);
        if (Array.isArray(_input)) {
            if (!_input.length || Array.isArray(_input[0])) return serialize(null, _input, _skipEmptyLines);
            else if (typeof _input[0] === 'object') return serialize(_columns || Object.keys(_input[0]), _input, _skipEmptyLines);
        } else if (typeof _input === 'object') {
            if (typeof _input.data === 'string') _input.data = JSON.parse(_input.data);
            if (Array.isArray(_input.data)) {
                if (!_input.fields) _input.fields = _input.meta && _input.meta.fields || _columns;
                if (!_input.fields) _input.fields = Array.isArray(_input.data[0]) ? _input.fields : typeof _input.data[0] === 'object' ? Object.keys(_input.data[0]) : [];
                if (!Array.isArray(_input.data[0]) && typeof _input.data[0] !== 'object') _input.data = [
                    _input.data
                ]; // handles input like [1,2,3] or ['asdf']
            }
            return serialize(_input.fields || [], _input.data || [], _skipEmptyLines);
        }
        // Default (any valid paths should return before this)
        throw new Error('Unable to serialize unrecognized input');
        function unpackConfig() {
            if (typeof _config !== 'object') return;
            if (typeof _config.delimiter === 'string' && !Papa.BAD_DELIMITERS.filter(function(value) {
                return _config.delimiter.indexOf(value) !== -1;
            }).length) {
                _delimiter = _config.delimiter;
            }
            if (typeof _config.quotes === 'boolean' || typeof _config.quotes === 'function' || Array.isArray(_config.quotes)) _quotes = _config.quotes;
            if (typeof _config.skipEmptyLines === 'boolean' || typeof _config.skipEmptyLines === 'string') _skipEmptyLines = _config.skipEmptyLines;
            if (typeof _config.newline === 'string') _newline = _config.newline;
            if (typeof _config.quoteChar === 'string') _quoteChar = _config.quoteChar;
            if (typeof _config.header === 'boolean') _writeHeader = _config.header;
            if (Array.isArray(_config.columns)) {
                if (_config.columns.length === 0) throw new Error('Option columns is empty');
                _columns = _config.columns;
            }
            if (_config.escapeChar !== undefined) {
                _escapedQuote = _config.escapeChar + _quoteChar;
            }
            if (_config.escapeFormulae instanceof RegExp) {
                _escapeFormulae = _config.escapeFormulae;
            } else if (typeof _config.escapeFormulae === 'boolean' && _config.escapeFormulae) {
                _escapeFormulae = /^[=+\-@\t\r].*$/;
            }
        }
        /** The double for loop that iterates the data and writes out a CSV string including header row */ function serialize(fields, data, skipEmptyLines) {
            var csv = '';
            if (typeof fields === 'string') fields = JSON.parse(fields);
            if (typeof data === 'string') data = JSON.parse(data);
            var hasHeader = Array.isArray(fields) && fields.length > 0;
            var dataKeyedByField = !Array.isArray(data[0]);
            // If there a header row, write it first
            if (hasHeader && _writeHeader) {
                for(var i = 0; i < fields.length; i++){
                    if (i > 0) csv += _delimiter;
                    csv += safe(fields[i], i);
                }
                if (data.length > 0) csv += _newline;
            }
            // Then write out the data
            for(var row = 0; row < data.length; row++){
                var maxCol = hasHeader ? fields.length : data[row].length;
                var emptyLine = false;
                var nullLine = hasHeader ? Object.keys(data[row]).length === 0 : data[row].length === 0;
                if (skipEmptyLines && !hasHeader) {
                    emptyLine = skipEmptyLines === 'greedy' ? data[row].join('').trim() === '' : data[row].length === 1 && data[row][0].length === 0;
                }
                if (skipEmptyLines === 'greedy' && hasHeader) {
                    var line = [];
                    for(var c = 0; c < maxCol; c++){
                        var cx = dataKeyedByField ? fields[c] : c;
                        line.push(data[row][cx]);
                    }
                    emptyLine = line.join('').trim() === '';
                }
                if (!emptyLine) {
                    for(var col = 0; col < maxCol; col++){
                        if (col > 0 && !nullLine) csv += _delimiter;
                        var colIdx = hasHeader && dataKeyedByField ? fields[col] : col;
                        csv += safe(data[row][colIdx], col);
                    }
                    if (row < data.length - 1 && (!skipEmptyLines || maxCol > 0 && !nullLine)) {
                        csv += _newline;
                    }
                }
            }
            return csv;
        }
        /** Encloses a value around quotes if needed (makes a value safe for CSV insertion) */ function safe(str, col) {
            if (typeof str === 'undefined' || str === null) return '';
            if (str.constructor === Date) return JSON.stringify(str).slice(1, 25);
            var needsQuotes = false;
            if (_escapeFormulae && typeof str === "string" && _escapeFormulae.test(str)) {
                str = "'" + str;
                needsQuotes = true;
            }
            var escapedQuoteStr = str.toString().replace(quoteCharRegex, _escapedQuote);
            needsQuotes = needsQuotes || _quotes === true || typeof _quotes === 'function' && _quotes(str, col) || Array.isArray(_quotes) && _quotes[col] || hasAny(escapedQuoteStr, Papa.BAD_DELIMITERS) || escapedQuoteStr.indexOf(_delimiter) > -1 || escapedQuoteStr.charAt(0) === ' ' || escapedQuoteStr.charAt(escapedQuoteStr.length - 1) === ' ';
            return needsQuotes ? _quoteChar + escapedQuoteStr + _quoteChar : escapedQuoteStr;
        }
        function hasAny(str, substrings) {
            for(var i = 0; i < substrings.length; i++)if (str.indexOf(substrings[i]) > -1) return true;
            return false;
        }
    }
    /** ChunkStreamer is the base prototype for various streamer implementations. */ function ChunkStreamer(config) {
        this._handle = null;
        this._finished = false;
        this._completed = false;
        this._halted = false;
        this._input = null;
        this._baseIndex = 0;
        this._partialLine = '';
        this._rowCount = 0;
        this._start = 0;
        this._nextChunk = null;
        this.isFirstChunk = true;
        this._completeResults = {
            data: [],
            errors: [],
            meta: {}
        };
        replaceConfig.call(this, config);
        this.parseChunk = function(chunk, isFakeChunk) {
            // First chunk pre-processing
            const skipFirstNLines = parseInt(this._config.skipFirstNLines) || 0;
            if (this.isFirstChunk && skipFirstNLines > 0) {
                let _newline = this._config.newline;
                if (!_newline) {
                    const quoteChar = this._config.quoteChar || '"';
                    _newline = this._handle.guessLineEndings(chunk, quoteChar);
                }
                const splitChunk = chunk.split(_newline);
                chunk = [
                    ...splitChunk.slice(skipFirstNLines)
                ].join(_newline);
            }
            if (this.isFirstChunk && isFunction(this._config.beforeFirstChunk)) {
                var modifiedChunk = this._config.beforeFirstChunk(chunk);
                if (modifiedChunk !== undefined) chunk = modifiedChunk;
            }
            this.isFirstChunk = false;
            this._halted = false;
            // Rejoin the line we likely just split in two by chunking the file
            var aggregate = this._partialLine + chunk;
            this._partialLine = '';
            var results = this._handle.parse(aggregate, this._baseIndex, !this._finished);
            if (this._handle.paused() || this._handle.aborted()) {
                this._halted = true;
                return;
            }
            var lastIndex = results.meta.cursor;
            if (!this._finished) {
                this._partialLine = aggregate.substring(lastIndex - this._baseIndex);
                this._baseIndex = lastIndex;
            }
            if (results && results.data) this._rowCount += results.data.length;
            var finishedIncludingPreview = this._finished || this._config.preview && this._rowCount >= this._config.preview;
            if (IS_PAPA_WORKER) {
                global.postMessage({
                    results: results,
                    workerId: Papa.WORKER_ID,
                    finished: finishedIncludingPreview
                });
            } else if (isFunction(this._config.chunk) && !isFakeChunk) {
                this._config.chunk(results, this._handle);
                if (this._handle.paused() || this._handle.aborted()) {
                    this._halted = true;
                    return;
                }
                results = undefined;
                this._completeResults = undefined;
            }
            if (!this._config.step && !this._config.chunk) {
                this._completeResults.data = this._completeResults.data.concat(results.data);
                this._completeResults.errors = this._completeResults.errors.concat(results.errors);
                this._completeResults.meta = results.meta;
            }
            if (!this._completed && finishedIncludingPreview && isFunction(this._config.complete) && (!results || !results.meta.aborted)) {
                this._config.complete(this._completeResults, this._input);
                this._completed = true;
            }
            if (!finishedIncludingPreview && (!results || !results.meta.paused)) this._nextChunk();
            return results;
        };
        this._sendError = function(error) {
            if (isFunction(this._config.error)) this._config.error(error);
            else if (IS_PAPA_WORKER && this._config.error) {
                global.postMessage({
                    workerId: Papa.WORKER_ID,
                    error: error,
                    finished: false
                });
            }
        };
        function replaceConfig(config) {
            // Deep-copy the config so we can edit it
            var configCopy = copy(config);
            configCopy.chunkSize = parseInt(configCopy.chunkSize); // parseInt VERY important so we don't concatenate strings!
            if (!config.step && !config.chunk) configCopy.chunkSize = null; // disable Range header if not streaming; bad values break IIS - see issue #196
            this._handle = new ParserHandle(configCopy);
            this._handle.streamer = this;
            this._config = configCopy; // persist the copy to the caller
        }
    }
    function NetworkStreamer(config) {
        config = config || {};
        if (!config.chunkSize) config.chunkSize = Papa.RemoteChunkSize;
        ChunkStreamer.call(this, config);
        var xhr;
        if (IS_WORKER) {
            this._nextChunk = function() {
                this._readChunk();
                this._chunkLoaded();
            };
        } else {
            this._nextChunk = function() {
                this._readChunk();
            };
        }
        this.stream = function(url) {
            this._input = url;
            this._nextChunk(); // Starts streaming
        };
        this._readChunk = function() {
            if (this._finished) {
                this._chunkLoaded();
                return;
            }
            xhr = new XMLHttpRequest();
            if (this._config.withCredentials) {
                xhr.withCredentials = this._config.withCredentials;
            }
            if (!IS_WORKER) {
                xhr.onload = bindFunction(this._chunkLoaded, this);
                xhr.onerror = bindFunction(this._chunkError, this);
            }
            xhr.open(this._config.downloadRequestBody ? 'POST' : 'GET', this._input, !IS_WORKER);
            // Headers can only be set when once the request state is OPENED
            if (this._config.downloadRequestHeaders) {
                var headers = this._config.downloadRequestHeaders;
                for(var headerName in headers){
                    xhr.setRequestHeader(headerName, headers[headerName]);
                }
            }
            if (this._config.chunkSize) {
                var end = this._start + this._config.chunkSize - 1; // minus one because byte range is inclusive
                xhr.setRequestHeader('Range', 'bytes=' + this._start + '-' + end);
            }
            try {
                xhr.send(this._config.downloadRequestBody);
            } catch (err) {
                this._chunkError(err.message);
            }
            if (IS_WORKER && xhr.status === 0) this._chunkError();
        };
        this._chunkLoaded = function() {
            if (xhr.readyState !== 4) return;
            if (xhr.status < 200 || xhr.status >= 400) {
                this._chunkError();
                return;
            }
            // Use chunckSize as it may be a diference on reponse lentgh due to characters with more than 1 byte
            this._start += this._config.chunkSize ? this._config.chunkSize : xhr.responseText.length;
            this._finished = !this._config.chunkSize || this._start >= getFileSize(xhr);
            this.parseChunk(xhr.responseText);
        };
        this._chunkError = function(errorMessage) {
            var errorText = xhr.statusText || errorMessage;
            this._sendError(new Error(errorText));
        };
        function getFileSize(xhr) {
            var contentRange = xhr.getResponseHeader('Content-Range');
            if (contentRange === null) {
                return -1;
            }
            return parseInt(contentRange.substring(contentRange.lastIndexOf('/') + 1));
        }
    }
    NetworkStreamer.prototype = Object.create(ChunkStreamer.prototype);
    NetworkStreamer.prototype.constructor = NetworkStreamer;
    function FileStreamer(config) {
        config = config || {};
        if (!config.chunkSize) config.chunkSize = Papa.LocalChunkSize;
        ChunkStreamer.call(this, config);
        var reader, slice;
        // FileReader is better than FileReaderSync (even in worker) - see http://stackoverflow.com/q/24708649/1048862
        // But Firefox is a pill, too - see issue #76: https://github.com/mholt/PapaParse/issues/76
        var usingAsyncReader = typeof FileReader !== 'undefined'; // Safari doesn't consider it a function - see issue #105
        this.stream = function(file) {
            this._input = file;
            slice = file.slice || file.webkitSlice || file.mozSlice;
            if (usingAsyncReader) {
                reader = new FileReader(); // Preferred method of reading files, even in workers
                reader.onload = bindFunction(this._chunkLoaded, this);
                reader.onerror = bindFunction(this._chunkError, this);
            } else reader = new FileReaderSync(); // Hack for running in a web worker in Firefox
            this._nextChunk(); // Starts streaming
        };
        this._nextChunk = function() {
            if (!this._finished && (!this._config.preview || this._rowCount < this._config.preview)) this._readChunk();
        };
        this._readChunk = function() {
            var input = this._input;
            if (this._config.chunkSize) {
                var end = Math.min(this._start + this._config.chunkSize, this._input.size);
                input = slice.call(input, this._start, end);
            }
            var txt = reader.readAsText(input, this._config.encoding);
            if (!usingAsyncReader) this._chunkLoaded({
                target: {
                    result: txt
                }
            }); // mimic the async signature
        };
        this._chunkLoaded = function(event) {
            // Very important to increment start each time before handling results
            this._start += this._config.chunkSize;
            this._finished = !this._config.chunkSize || this._start >= this._input.size;
            this.parseChunk(event.target.result);
        };
        this._chunkError = function() {
            this._sendError(reader.error);
        };
    }
    FileStreamer.prototype = Object.create(ChunkStreamer.prototype);
    FileStreamer.prototype.constructor = FileStreamer;
    function StringStreamer(config) {
        config = config || {};
        ChunkStreamer.call(this, config);
        var remaining;
        this.stream = function(s) {
            remaining = s;
            return this._nextChunk();
        };
        this._nextChunk = function() {
            if (this._finished) return;
            var size = this._config.chunkSize;
            var chunk;
            if (size) {
                chunk = remaining.substring(0, size);
                remaining = remaining.substring(size);
            } else {
                chunk = remaining;
                remaining = '';
            }
            this._finished = !remaining;
            return this.parseChunk(chunk);
        };
    }
    StringStreamer.prototype = Object.create(StringStreamer.prototype);
    StringStreamer.prototype.constructor = StringStreamer;
    function ReadableStreamStreamer(config) {
        config = config || {};
        ChunkStreamer.call(this, config);
        var queue = [];
        var parseOnData = true;
        var streamHasEnded = false;
        this.pause = function() {
            ChunkStreamer.prototype.pause.apply(this, arguments);
            this._input.pause();
        };
        this.resume = function() {
            ChunkStreamer.prototype.resume.apply(this, arguments);
            this._input.resume();
        };
        this.stream = function(stream) {
            this._input = stream;
            this._input.on('data', this._streamData);
            this._input.on('end', this._streamEnd);
            this._input.on('error', this._streamError);
        };
        this._checkIsFinished = function() {
            if (streamHasEnded && queue.length === 1) {
                this._finished = true;
            }
        };
        this._nextChunk = function() {
            this._checkIsFinished();
            if (queue.length) {
                this.parseChunk(queue.shift());
            } else {
                parseOnData = true;
            }
        };
        this._streamData = bindFunction(function(chunk) {
            try {
                queue.push(typeof chunk === 'string' ? chunk : chunk.toString(this._config.encoding));
                if (parseOnData) {
                    parseOnData = false;
                    this._checkIsFinished();
                    this.parseChunk(queue.shift());
                }
            } catch (error) {
                this._streamError(error);
            }
        }, this);
        this._streamError = bindFunction(function(error) {
            this._streamCleanUp();
            this._sendError(error);
        }, this);
        this._streamEnd = bindFunction(function() {
            this._streamCleanUp();
            streamHasEnded = true;
            this._streamData('');
        }, this);
        this._streamCleanUp = bindFunction(function() {
            this._input.removeListener('data', this._streamData);
            this._input.removeListener('end', this._streamEnd);
            this._input.removeListener('error', this._streamError);
        }, this);
    }
    ReadableStreamStreamer.prototype = Object.create(ChunkStreamer.prototype);
    ReadableStreamStreamer.prototype.constructor = ReadableStreamStreamer;
    function DuplexStreamStreamer(_config) {
        var Duplex = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Duplex;
        var config = copy(_config);
        var parseOnWrite = true;
        var writeStreamHasFinished = false;
        var parseCallbackQueue = [];
        var stream = null;
        this._onCsvData = function(results) {
            var data = results.data;
            if (!stream.push(data) && !this._handle.paused()) {
                // the writeable consumer buffer has filled up
                // so we need to pause until more items
                // can be processed
                this._handle.pause();
            }
        };
        this._onCsvComplete = function() {
            // node will finish the read stream when
            // null is pushed
            stream.push(null);
        };
        config.step = bindFunction(this._onCsvData, this);
        config.complete = bindFunction(this._onCsvComplete, this);
        ChunkStreamer.call(this, config);
        this._nextChunk = function() {
            if (writeStreamHasFinished && parseCallbackQueue.length === 1) {
                this._finished = true;
            }
            if (parseCallbackQueue.length) {
                parseCallbackQueue.shift()();
            } else {
                parseOnWrite = true;
            }
        };
        this._addToParseQueue = function(chunk, callback) {
            // add to queue so that we can indicate
            // completion via callback
            // node will automatically pause the incoming stream
            // when too many items have been added without their
            // callback being invoked
            parseCallbackQueue.push(bindFunction(function() {
                this.parseChunk(typeof chunk === 'string' ? chunk : chunk.toString(config.encoding));
                if (isFunction(callback)) {
                    return callback();
                }
            }, this));
            if (parseOnWrite) {
                parseOnWrite = false;
                this._nextChunk();
            }
        };
        this._onRead = function() {
            if (this._handle.paused()) {
                // the writeable consumer can handle more data
                // so resume the chunk parsing
                this._handle.resume();
            }
        };
        this._onWrite = function(chunk, encoding, callback) {
            this._addToParseQueue(chunk, callback);
        };
        this._onWriteComplete = function() {
            writeStreamHasFinished = true;
            // have to write empty string
            // so parser knows its done
            this._addToParseQueue('');
        };
        this.getStream = function() {
            return stream;
        };
        stream = new Duplex({
            readableObjectMode: true,
            decodeStrings: false,
            read: bindFunction(this._onRead, this),
            write: bindFunction(this._onWrite, this)
        });
        stream.once('finish', bindFunction(this._onWriteComplete, this));
    }
    if (typeof PAPA_BROWSER_CONTEXT === 'undefined') {
        DuplexStreamStreamer.prototype = Object.create(ChunkStreamer.prototype);
        DuplexStreamStreamer.prototype.constructor = DuplexStreamStreamer;
    }
    // Use one ParserHandle per entire CSV file or string
    function ParserHandle(_config) {
        // One goal is to minimize the use of regular expressions...
        var MAX_FLOAT = Math.pow(2, 53);
        var MIN_FLOAT = -MAX_FLOAT;
        var FLOAT = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/;
        var ISO_DATE = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/;
        var self1 = this;
        var _stepCounter = 0; // Number of times step was called (number of rows parsed)
        var _rowCounter = 0; // Number of rows that have been parsed so far
        var _input; // The input being parsed
        var _parser; // The core parser being used
        var _paused = false; // Whether we are paused or not
        var _aborted = false; // Whether the parser has aborted or not
        var _delimiterError; // Temporary state between delimiter detection and processing results
        var _fields = []; // Fields are from the header row of the input, if there is one
        var _results = {
            data: [],
            errors: [],
            meta: {}
        };
        if (isFunction(_config.step)) {
            var userStep = _config.step;
            _config.step = function(results) {
                _results = results;
                if (needsHeaderRow()) processResults();
                else {
                    processResults();
                    // It's possbile that this line was empty and there's no row here after all
                    if (_results.data.length === 0) return;
                    _stepCounter += results.data.length;
                    if (_config.preview && _stepCounter > _config.preview) _parser.abort();
                    else {
                        _results.data = _results.data[0];
                        userStep(_results, self1);
                    }
                }
            };
        }
        /**
		 * Parses input. Most users won't need, and shouldn't mess with, the baseIndex
		 * and ignoreLastRow parameters. They are used by streamers (wrapper functions)
		 * when an input comes in multiple chunks, like from a file.
		 */ this.parse = function(input, baseIndex, ignoreLastRow) {
            var quoteChar = _config.quoteChar || '"';
            if (!_config.newline) _config.newline = this.guessLineEndings(input, quoteChar);
            _delimiterError = false;
            if (!_config.delimiter) {
                var delimGuess = guessDelimiter(input, _config.newline, _config.skipEmptyLines, _config.comments, _config.delimitersToGuess);
                if (delimGuess.successful) _config.delimiter = delimGuess.bestDelimiter;
                else {
                    _delimiterError = true; // add error after parsing (otherwise it would be overwritten)
                    _config.delimiter = Papa.DefaultDelimiter;
                }
                _results.meta.delimiter = _config.delimiter;
            } else if (isFunction(_config.delimiter)) {
                _config.delimiter = _config.delimiter(input);
                _results.meta.delimiter = _config.delimiter;
            }
            var parserConfig = copy(_config);
            if (_config.preview && _config.header) parserConfig.preview++; // to compensate for header row
            _input = input;
            _parser = new Parser(parserConfig);
            _results = _parser.parse(_input, baseIndex, ignoreLastRow);
            processResults();
            return _paused ? {
                meta: {
                    paused: true
                }
            } : _results || {
                meta: {
                    paused: false
                }
            };
        };
        this.paused = function() {
            return _paused;
        };
        this.pause = function() {
            _paused = true;
            _parser.abort();
            // If it is streaming via "chunking", the reader will start appending correctly already so no need to substring,
            // otherwise we can get duplicate content within a row
            _input = isFunction(_config.chunk) ? "" : _input.substring(_parser.getCharIndex());
        };
        this.resume = function() {
            if (self1.streamer._halted) {
                _paused = false;
                self1.streamer.parseChunk(_input, true);
            } else {
                // Bugfix: #636 In case the processing hasn't halted yet
                // wait for it to halt in order to resume
                setTimeout(self1.resume, 3);
            }
        };
        this.aborted = function() {
            return _aborted;
        };
        this.abort = function() {
            _aborted = true;
            _parser.abort();
            _results.meta.aborted = true;
            if (isFunction(_config.complete)) _config.complete(_results);
            _input = '';
        };
        this.guessLineEndings = function(input, quoteChar) {
            input = input.substring(0, 1024 * 1024); // max length 1 MB
            // Replace all the text inside quotes
            var re = new RegExp(escapeRegExp(quoteChar) + '([^]*?)' + escapeRegExp(quoteChar), 'gm');
            input = input.replace(re, '');
            var r = input.split('\r');
            var n = input.split('\n');
            var nAppearsFirst = n.length > 1 && n[0].length < r[0].length;
            if (r.length === 1 || nAppearsFirst) return '\n';
            var numWithN = 0;
            for(var i = 0; i < r.length; i++){
                if (r[i][0] === '\n') numWithN++;
            }
            return numWithN >= r.length / 2 ? '\r\n' : '\r';
        };
        function testEmptyLine(s) {
            return _config.skipEmptyLines === 'greedy' ? s.join('').trim() === '' : s.length === 1 && s[0].length === 0;
        }
        function testFloat(s) {
            if (FLOAT.test(s)) {
                var floatValue = parseFloat(s);
                if (floatValue > MIN_FLOAT && floatValue < MAX_FLOAT) {
                    return true;
                }
            }
            return false;
        }
        function processResults() {
            if (_results && _delimiterError) {
                addError('Delimiter', 'UndetectableDelimiter', 'Unable to auto-detect delimiting character; defaulted to \'' + Papa.DefaultDelimiter + '\'');
                _delimiterError = false;
            }
            if (_config.skipEmptyLines) {
                _results.data = _results.data.filter(function(d) {
                    return !testEmptyLine(d);
                });
            }
            if (needsHeaderRow()) fillHeaderFields();
            return applyHeaderAndDynamicTypingAndTransformation();
        }
        function needsHeaderRow() {
            return _config.header && _fields.length === 0;
        }
        function fillHeaderFields() {
            if (!_results) return;
            function addHeader(header, i) {
                if (isFunction(_config.transformHeader)) header = _config.transformHeader(header, i);
                _fields.push(header);
            }
            if (Array.isArray(_results.data[0])) {
                for(var i = 0; needsHeaderRow() && i < _results.data.length; i++)_results.data[i].forEach(addHeader);
                _results.data.splice(0, 1);
            } else _results.data.forEach(addHeader);
        }
        function shouldApplyDynamicTyping(field) {
            // Cache function values to avoid calling it for each row
            if (_config.dynamicTypingFunction && _config.dynamicTyping[field] === undefined) {
                _config.dynamicTyping[field] = _config.dynamicTypingFunction(field);
            }
            return (_config.dynamicTyping[field] || _config.dynamicTyping) === true;
        }
        function parseDynamic(field, value) {
            if (shouldApplyDynamicTyping(field)) {
                if (value === 'true' || value === 'TRUE') return true;
                else if (value === 'false' || value === 'FALSE') return false;
                else if (testFloat(value)) return parseFloat(value);
                else if (ISO_DATE.test(value)) return new Date(value);
                else return value === '' ? null : value;
            }
            return value;
        }
        function applyHeaderAndDynamicTypingAndTransformation() {
            if (!_results || !_config.header && !_config.dynamicTyping && !_config.transform) return _results;
            function processRow(rowSource, i) {
                var row = _config.header ? {} : [];
                var j;
                for(j = 0; j < rowSource.length; j++){
                    var field = j;
                    var value = rowSource[j];
                    if (_config.header) field = j >= _fields.length ? '__parsed_extra' : _fields[j];
                    if (_config.transform) value = _config.transform(value, field);
                    value = parseDynamic(field, value);
                    if (field === '__parsed_extra') {
                        row[field] = row[field] || [];
                        row[field].push(value);
                    } else row[field] = value;
                }
                if (_config.header) {
                    if (j > _fields.length) addError('FieldMismatch', 'TooManyFields', 'Too many fields: expected ' + _fields.length + ' fields but parsed ' + j, _rowCounter + i);
                    else if (j < _fields.length) addError('FieldMismatch', 'TooFewFields', 'Too few fields: expected ' + _fields.length + ' fields but parsed ' + j, _rowCounter + i);
                }
                return row;
            }
            var incrementBy = 1;
            if (!_results.data.length || Array.isArray(_results.data[0])) {
                _results.data = _results.data.map(processRow);
                incrementBy = _results.data.length;
            } else _results.data = processRow(_results.data, 0);
            if (_config.header && _results.meta) _results.meta.fields = _fields;
            _rowCounter += incrementBy;
            return _results;
        }
        function guessDelimiter(input, newline, skipEmptyLines, comments, delimitersToGuess) {
            var bestDelim, bestDelta, fieldCountPrevRow, maxFieldCount;
            delimitersToGuess = delimitersToGuess || [
                ',',
                '\t',
                '|',
                ';',
                Papa.RECORD_SEP,
                Papa.UNIT_SEP
            ];
            for(var i = 0; i < delimitersToGuess.length; i++){
                var delim = delimitersToGuess[i];
                var delta = 0, avgFieldCount = 0, emptyLinesCount = 0;
                fieldCountPrevRow = undefined;
                var preview = new Parser({
                    comments: comments,
                    delimiter: delim,
                    newline: newline,
                    preview: 10
                }).parse(input);
                for(var j = 0; j < preview.data.length; j++){
                    if (skipEmptyLines && testEmptyLine(preview.data[j])) {
                        emptyLinesCount++;
                        continue;
                    }
                    var fieldCount = preview.data[j].length;
                    avgFieldCount += fieldCount;
                    if (typeof fieldCountPrevRow === 'undefined') {
                        fieldCountPrevRow = fieldCount;
                        continue;
                    } else if (fieldCount > 0) {
                        delta += Math.abs(fieldCount - fieldCountPrevRow);
                        fieldCountPrevRow = fieldCount;
                    }
                }
                if (preview.data.length > 0) avgFieldCount /= preview.data.length - emptyLinesCount;
                if ((typeof bestDelta === 'undefined' || delta <= bestDelta) && (typeof maxFieldCount === 'undefined' || avgFieldCount > maxFieldCount) && avgFieldCount > 1.99) {
                    bestDelta = delta;
                    bestDelim = delim;
                    maxFieldCount = avgFieldCount;
                }
            }
            _config.delimiter = bestDelim;
            return {
                successful: !!bestDelim,
                bestDelimiter: bestDelim
            };
        }
        function addError(type, code, msg, row) {
            var error = {
                type: type,
                code: code,
                message: msg
            };
            if (row !== undefined) {
                error.row = row;
            }
            _results.errors.push(error);
        }
    }
    /** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions */ function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
    /** The core parser implements speedy and correct CSV parsing */ function Parser(config) {
        // Unpack the config object
        config = config || {};
        var delim = config.delimiter;
        var newline = config.newline;
        var comments = config.comments;
        var step = config.step;
        var preview = config.preview;
        var fastMode = config.fastMode;
        var quoteChar;
        var renamedHeaders = null;
        var headerParsed = false;
        if (config.quoteChar === undefined || config.quoteChar === null) {
            quoteChar = '"';
        } else {
            quoteChar = config.quoteChar;
        }
        var escapeChar = quoteChar;
        if (config.escapeChar !== undefined) {
            escapeChar = config.escapeChar;
        }
        // Delimiter must be valid
        if (typeof delim !== 'string' || Papa.BAD_DELIMITERS.indexOf(delim) > -1) delim = ',';
        // Comment character must be valid
        if (comments === delim) throw new Error('Comment character same as delimiter');
        else if (comments === true) comments = '#';
        else if (typeof comments !== 'string' || Papa.BAD_DELIMITERS.indexOf(comments) > -1) comments = false;
        // Newline must be valid: \r, \n, or \r\n
        if (newline !== '\n' && newline !== '\r' && newline !== '\r\n') newline = '\n';
        // We're gonna need these at the Parser scope
        var cursor = 0;
        var aborted = false;
        this.parse = function(input, baseIndex, ignoreLastRow) {
            // For some reason, in Chrome, this speeds things up (!?)
            if (typeof input !== 'string') throw new Error('Input must be a string');
            // We don't need to compute some of these every time parse() is called,
            // but having them in a more local scope seems to perform better
            var inputLen = input.length, delimLen = delim.length, newlineLen = newline.length, commentsLen = comments.length;
            var stepIsFunction = isFunction(step);
            // Establish starting state
            cursor = 0;
            var data = [], errors = [], row = [], lastCursor = 0;
            if (!input) return returnable();
            if (fastMode || fastMode !== false && input.indexOf(quoteChar) === -1) {
                var rows = input.split(newline);
                for(var i = 0; i < rows.length; i++){
                    row = rows[i];
                    cursor += row.length;
                    if (i !== rows.length - 1) cursor += newline.length;
                    else if (ignoreLastRow) return returnable();
                    if (comments && row.substring(0, commentsLen) === comments) continue;
                    if (stepIsFunction) {
                        data = [];
                        pushRow(row.split(delim));
                        doStep();
                        if (aborted) return returnable();
                    } else pushRow(row.split(delim));
                    if (preview && i >= preview) {
                        data = data.slice(0, preview);
                        return returnable(true);
                    }
                }
                return returnable();
            }
            var nextDelim = input.indexOf(delim, cursor);
            var nextNewline = input.indexOf(newline, cursor);
            var quoteCharRegex = new RegExp(escapeRegExp(escapeChar) + escapeRegExp(quoteChar), 'g');
            var quoteSearch = input.indexOf(quoteChar, cursor);
            // Parser loop
            for(;;){
                // Field has opening quote
                if (input[cursor] === quoteChar) {
                    // Start our search for the closing quote where the cursor is
                    quoteSearch = cursor;
                    // Skip the opening quote
                    cursor++;
                    for(;;){
                        // Find closing quote
                        quoteSearch = input.indexOf(quoteChar, quoteSearch + 1);
                        //No other quotes are found - no other delimiters
                        if (quoteSearch === -1) {
                            if (!ignoreLastRow) {
                                // No closing quote... what a pity
                                errors.push({
                                    type: 'Quotes',
                                    code: 'MissingQuotes',
                                    message: 'Quoted field unterminated',
                                    row: data.length,
                                    index: cursor
                                });
                            }
                            return finish();
                        }
                        // Closing quote at EOF
                        if (quoteSearch === inputLen - 1) {
                            var value = input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar);
                            return finish(value);
                        }
                        // If this quote is escaped, it's part of the data; skip it
                        // If the quote character is the escape character, then check if the next character is the escape character
                        if (quoteChar === escapeChar && input[quoteSearch + 1] === escapeChar) {
                            quoteSearch++;
                            continue;
                        }
                        // If the quote character is not the escape character, then check if the previous character was the escape character
                        if (quoteChar !== escapeChar && quoteSearch !== 0 && input[quoteSearch - 1] === escapeChar) {
                            continue;
                        }
                        if (nextDelim !== -1 && nextDelim < quoteSearch + 1) {
                            nextDelim = input.indexOf(delim, quoteSearch + 1);
                        }
                        if (nextNewline !== -1 && nextNewline < quoteSearch + 1) {
                            nextNewline = input.indexOf(newline, quoteSearch + 1);
                        }
                        // Check up to nextDelim or nextNewline, whichever is closest
                        var checkUpTo = nextNewline === -1 ? nextDelim : Math.min(nextDelim, nextNewline);
                        var spacesBetweenQuoteAndDelimiter = extraSpaces(checkUpTo);
                        // Closing quote followed by delimiter or 'unnecessary spaces + delimiter'
                        if (input.substr(quoteSearch + 1 + spacesBetweenQuoteAndDelimiter, delimLen) === delim) {
                            row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
                            cursor = quoteSearch + 1 + spacesBetweenQuoteAndDelimiter + delimLen;
                            // If char after following delimiter is not quoteChar, we find next quote char position
                            if (input[quoteSearch + 1 + spacesBetweenQuoteAndDelimiter + delimLen] !== quoteChar) {
                                quoteSearch = input.indexOf(quoteChar, cursor);
                            }
                            nextDelim = input.indexOf(delim, cursor);
                            nextNewline = input.indexOf(newline, cursor);
                            break;
                        }
                        var spacesBetweenQuoteAndNewLine = extraSpaces(nextNewline);
                        // Closing quote followed by newline or 'unnecessary spaces + newLine'
                        if (input.substring(quoteSearch + 1 + spacesBetweenQuoteAndNewLine, quoteSearch + 1 + spacesBetweenQuoteAndNewLine + newlineLen) === newline) {
                            row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
                            saveRow(quoteSearch + 1 + spacesBetweenQuoteAndNewLine + newlineLen);
                            nextDelim = input.indexOf(delim, cursor); // because we may have skipped the nextDelim in the quoted field
                            quoteSearch = input.indexOf(quoteChar, cursor); // we search for first quote in next line
                            if (stepIsFunction) {
                                doStep();
                                if (aborted) return returnable();
                            }
                            if (preview && data.length >= preview) return returnable(true);
                            break;
                        }
                        // Checks for valid closing quotes are complete (escaped quotes or quote followed by EOF/delimiter/newline) -- assume these quotes are part of an invalid text string
                        errors.push({
                            type: 'Quotes',
                            code: 'InvalidQuotes',
                            message: 'Trailing quote on quoted field is malformed',
                            row: data.length,
                            index: cursor
                        });
                        quoteSearch++;
                        continue;
                    }
                    continue;
                }
                // Comment found at start of new line
                if (comments && row.length === 0 && input.substring(cursor, cursor + commentsLen) === comments) {
                    if (nextNewline === -1) return returnable();
                    cursor = nextNewline + newlineLen;
                    nextNewline = input.indexOf(newline, cursor);
                    nextDelim = input.indexOf(delim, cursor);
                    continue;
                }
                // Next delimiter comes before next newline, so we've reached end of field
                if (nextDelim !== -1 && (nextDelim < nextNewline || nextNewline === -1)) {
                    row.push(input.substring(cursor, nextDelim));
                    cursor = nextDelim + delimLen;
                    // we look for next delimiter char
                    nextDelim = input.indexOf(delim, cursor);
                    continue;
                }
                // End of row
                if (nextNewline !== -1) {
                    row.push(input.substring(cursor, nextNewline));
                    saveRow(nextNewline + newlineLen);
                    if (stepIsFunction) {
                        doStep();
                        if (aborted) return returnable();
                    }
                    if (preview && data.length >= preview) return returnable(true);
                    continue;
                }
                break;
            }
            return finish();
            //TURBOPACK unreachable
            ;
            function pushRow(row) {
                data.push(row);
                lastCursor = cursor;
            }
            /**
             * checks if there are extra spaces after closing quote and given index without any text
             * if Yes, returns the number of spaces
             */ function extraSpaces(index) {
                var spaceLength = 0;
                if (index !== -1) {
                    var textBetweenClosingQuoteAndIndex = input.substring(quoteSearch + 1, index);
                    if (textBetweenClosingQuoteAndIndex && textBetweenClosingQuoteAndIndex.trim() === '') {
                        spaceLength = textBetweenClosingQuoteAndIndex.length;
                    }
                }
                return spaceLength;
            }
            /**
			 * Appends the remaining input from cursor to the end into
			 * row, saves the row, calls step, and returns the results.
			 */ function finish(value) {
                if (ignoreLastRow) return returnable();
                if (typeof value === 'undefined') value = input.substring(cursor);
                row.push(value);
                cursor = inputLen; // important in case parsing is paused
                pushRow(row);
                if (stepIsFunction) doStep();
                return returnable();
            }
            /**
			 * Appends the current row to the results. It sets the cursor
			 * to newCursor and finds the nextNewline. The caller should
			 * take care to execute user's step function and check for
			 * preview and end parsing if necessary.
			 */ function saveRow(newCursor) {
                cursor = newCursor;
                pushRow(row);
                row = [];
                nextNewline = input.indexOf(newline, cursor);
            }
            /** Returns an object with the results, errors, and meta. */ function returnable(stopped) {
                if (config.header && !baseIndex && data.length && !headerParsed) {
                    const result = data[0];
                    const headerCount = Object.create(null); // To track the count of each base header
                    const usedHeaders = new Set(result); // To track used headers and avoid duplicates
                    let duplicateHeaders = false;
                    for(let i = 0; i < result.length; i++){
                        let header = result[i];
                        if (isFunction(config.transformHeader)) header = config.transformHeader(header, i);
                        if (!headerCount[header]) {
                            headerCount[header] = 1;
                            result[i] = header;
                        } else {
                            let newHeader;
                            let suffixCount = headerCount[header];
                            // Find a unique new header
                            do {
                                newHeader = `${header}_${suffixCount}`;
                                suffixCount++;
                            }while (usedHeaders.has(newHeader))
                            usedHeaders.add(newHeader); // Mark this new Header as used
                            result[i] = newHeader;
                            headerCount[header]++;
                            duplicateHeaders = true;
                            if (renamedHeaders === null) {
                                renamedHeaders = {};
                            }
                            renamedHeaders[newHeader] = header;
                        }
                        usedHeaders.add(header); // Ensure the original header is marked as used
                    }
                    if (duplicateHeaders) {
                        console.warn('Duplicate headers found and renamed.');
                    }
                    headerParsed = true;
                }
                return {
                    data: data,
                    errors: errors,
                    meta: {
                        delimiter: delim,
                        linebreak: newline,
                        aborted: aborted,
                        truncated: !!stopped,
                        cursor: lastCursor + (baseIndex || 0),
                        renamedHeaders: renamedHeaders
                    }
                };
            }
            /** Executes the user's step function and resets data & errors. */ function doStep() {
                step(returnable());
                data = [];
                errors = [];
            }
        };
        /** Sets the abort flag */ this.abort = function() {
            aborted = true;
        };
        /** Gets the cursor position */ this.getCharIndex = function() {
            return cursor;
        };
    }
    function newWorker() {
        if (!Papa.WORKERS_SUPPORTED) return false;
        var workerUrl = getWorkerBlob();
        var w = new global.Worker(workerUrl);
        w.onmessage = mainThreadReceivedMessage;
        w.id = workerIdCounter++;
        workers[w.id] = w;
        return w;
    }
    /** Callback when main thread receives a message */ function mainThreadReceivedMessage(e) {
        var msg = e.data;
        var worker = workers[msg.workerId];
        var aborted = false;
        if (msg.error) worker.userError(msg.error, msg.file);
        else if (msg.results && msg.results.data) {
            var abort = function() {
                aborted = true;
                completeWorker(msg.workerId, {
                    data: [],
                    errors: [],
                    meta: {
                        aborted: true
                    }
                });
            };
            var handle = {
                abort: abort,
                pause: notImplemented,
                resume: notImplemented
            };
            if (isFunction(worker.userStep)) {
                for(var i = 0; i < msg.results.data.length; i++){
                    worker.userStep({
                        data: msg.results.data[i],
                        errors: msg.results.errors,
                        meta: msg.results.meta
                    }, handle);
                    if (aborted) break;
                }
                delete msg.results; // free memory ASAP
            } else if (isFunction(worker.userChunk)) {
                worker.userChunk(msg.results, handle, msg.file);
                delete msg.results;
            }
        }
        if (msg.finished && !aborted) completeWorker(msg.workerId, msg.results);
    }
    function completeWorker(workerId, results) {
        var worker = workers[workerId];
        if (isFunction(worker.userComplete)) worker.userComplete(results);
        worker.terminate();
        delete workers[workerId];
    }
    function notImplemented() {
        throw new Error('Not implemented.');
    }
    /** Callback when worker thread receives a message */ function workerThreadReceivedMessage(e) {
        var msg = e.data;
        if (typeof Papa.WORKER_ID === 'undefined' && msg) Papa.WORKER_ID = msg.workerId;
        if (typeof msg.input === 'string') {
            global.postMessage({
                workerId: Papa.WORKER_ID,
                results: Papa.parse(msg.input, msg.config),
                finished: true
            });
        } else if (global.File && msg.input instanceof File || msg.input instanceof Object) {
            var results = Papa.parse(msg.input, msg.config);
            if (results) global.postMessage({
                workerId: Papa.WORKER_ID,
                results: results,
                finished: true
            });
        }
    }
    /** Makes a deep copy of an array or object (mostly) */ function copy(obj) {
        if (typeof obj !== 'object' || obj === null) return obj;
        var cpy = Array.isArray(obj) ? [] : {};
        for(var key in obj)cpy[key] = copy(obj[key]);
        return cpy;
    }
    function bindFunction(f, self1) {
        return function() {
            f.apply(self1, arguments);
        };
    }
    function isFunction(func) {
        return typeof func === 'function';
    }
    return Papa;
});
}),
"[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Upload
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 3v12",
            key: "1x0j5s"
        }
    ],
    [
        "path",
        {
            d: "m17 8-5-5-5 5",
            key: "7q97r8"
        }
    ],
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ]
];
const Upload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("upload", __iconNode);
;
 //# sourceMappingURL=upload.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Upload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>LoaderCircle
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
];
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("loader-circle", __iconNode);
;
 //# sourceMappingURL=loader-circle.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Download
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 15V3",
            key: "m9g1x1"
        }
    ],
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "path",
        {
            d: "m7 10 5 5 5-5",
            key: "brsn70"
        }
    ]
];
const Download = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("download", __iconNode);
;
 //# sourceMappingURL=download.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Download",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cb23c29f._.js.map