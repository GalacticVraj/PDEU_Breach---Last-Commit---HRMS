(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/StatusBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusBadge",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2.5 py-0.5 rounded-full text-xs font-medium border", statusStyles[status] || statusStyles['Pending']),
        children: status
    }, void 0, false, {
        fileName: "[project]/src/components/StatusBadge.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
_c = StatusBadge;
var _c;
__turbopack_context__.k.register(_c, "StatusBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data:177251 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCandidate",
    ()=>$$RSC_SERVER_ACTION_12
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4040634522dfc711cbe6e69301736a194b905d5c62":"deleteCandidate"},"src/lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4040634522dfc711cbe6e69301736a194b905d5c62", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteCandidate");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJy4vZGJDb25maWcnO1xyXG5pbXBvcnQgeyBDYW5kaWRhdGVNb2RlbCwgVXNlck1vZGVsLCBEZXBhcnRtZW50TW9kZWwsIFF1ZXN0aW9uTW9kZWwsIElDYW5kaWRhdGUsIElVc2VyLCBJRGVwYXJ0bWVudCB9IGZyb20gJ0AvbW9kZWxzL21vZGVscyc7XHJcbmltcG9ydCB7IENhbmRpZGF0ZSwgQ2FuZGlkYXRlU3RhdHVzLCBJbnRlcnZpZXdlclJvbGUsIFNjb3JlU2hlZXQsIE1lbWJlciwgVXNlclJvbGUsIFVzZXIgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIEhlbHBlciB0byBlbnN1cmUgY29ubmVjdGlvblxyXG5hc3luYyBmdW5jdGlvbiBkYigpIHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gREVQQVJUTUVOVCBBQ1RJT05TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlcGFydG1lbnRzKCk6IFByb21pc2U8SURlcGFydG1lbnRbXT4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IGRlcHRzID0gYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmZpbmQoe30pLmxlYW4oKTtcclxuICAgIHJldHVybiBkZXB0cy5tYXAoKGQ6IGFueSkgPT4gKHsgLi4uZCwgX2lkOiBkLl9pZC50b1N0cmluZygpIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZERlcGFydG1lbnQobmFtZTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgY29uc3QgaWQgPSBgZGVwdF8ke25hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICdfJyl9YDtcclxuICAgIGNvbnN0IGV4aXN0cyA9IGF3YWl0IERlcGFydG1lbnRNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcbiAgICBpZiAoZXhpc3RzKSByZXR1cm47XHJcblxyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmNyZWF0ZSh7IGlkLCBuYW1lIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvbWVtYmVycy9hZGQnKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2FuZGlkYXRlcy9hZGQnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZURlcGFydG1lbnQoaWQ6IHN0cmluZywgbmV3TmFtZTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmZpbmRPbmVBbmRVcGRhdGUoeyBpZCB9LCB7IG5hbWU6IG5ld05hbWUgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzL2FkZCcpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzL2FkZCcpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGVwYXJ0bWVudChpZDogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmRlbGV0ZU9uZSh7IGlkIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVTRVIgQUNUSU9OUyAoTG9naW4pXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKCk6IFByb21pc2U8VXNlcltdPiB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2VyTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG4gICAgcmV0dXJuIHVzZXJzLm1hcCgodTogYW55KSA9PiAoe1xyXG4gICAgICAgIGlkOiB1LmlkLFxyXG4gICAgICAgIG5hbWU6IHUubmFtZSxcclxuICAgICAgICBlbWFpbDogdS5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZEhhc2g6IHUucGFzc3dvcmRIYXNoLFxyXG4gICAgICAgIHJvbGU6IHUucm9sZSBhcyBVc2VyUm9sZSxcclxuICAgICAgICBkZXBhcnRtZW50SWQ6IHUuZGVwYXJ0bWVudElkXHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDQU5ESURBVEUgQUNUSU9OU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzKCk6IFByb21pc2U8Q2FuZGlkYXRlW10+IHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG4gICAgLy8gTWFwIF9pZCBhbmQgZGF0ZXMgaWYgbmVjZXNzYXJ5LCB0aG91Z2ggbGVhbigpIGlzIG1vc3RseSBQT0pPLlxyXG4gICAgLy8gV2UgdXNlZCBhIGN1c3RvbSAnaWQnIHN0cmluZyBmaWVsZCwgc28gd2UgcmVseSBvbiB0aGF0LlxyXG4gICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjOiBhbnkpID0+ICh7XHJcbiAgICAgICAgLi4uYyxcclxuICAgICAgICBfaWQ6IGMuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgY3JlYXRlZEF0OiBjLmNyZWF0ZWRBdCA/IGMuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgaW50ZXJ2aWV3U3RhcnRUaW1lOiBjLmludGVydmlld1N0YXJ0VGltZSAvLyBpZiBleGlzdHNcclxuICAgIH0pKSBhcyB1bmtub3duIGFzIENhbmRpZGF0ZVtdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlKGlkOiBzdHJpbmcpOiBQcm9taXNlPENhbmRpZGF0ZSB8IHVuZGVmaW5lZD4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IENhbmRpZGF0ZU1vZGVsLmZpbmRPbmUoeyBpZCB9KS5sZWFuKCk7XHJcbiAgICBpZiAoIWNhbmRpZGF0ZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uY2FuZGlkYXRlLFxyXG4gICAgICAgIF9pZDogKGNhbmRpZGF0ZSBhcyBhbnkpLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogKGNhbmRpZGF0ZSBhcyBhbnkpLmNyZWF0ZWRBdD8udG9JU09TdHJpbmcoKVxyXG4gICAgfSBhcyB1bmtub3duIGFzIENhbmRpZGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZENhbmRpZGF0ZXMobmV3Q2FuZGlkYXRlczogQ2FuZGlkYXRlW10pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICAvLyBWYWxpZGF0ZSB1bmlxdWVuZXNzIGlmIG5lZWRlZCwgYnV0IGZvciBidWxrIGFkZCBqdXN0IHB1c2hcclxuICAgIGF3YWl0IENhbmRpZGF0ZU1vZGVsLmluc2VydE1hbnkobmV3Q2FuZGlkYXRlcyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NhbmRpZGF0ZXMnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhbmRpZGF0ZVN0YXR1cyhpZDogc3RyaW5nLCBzdGF0dXM6IENhbmRpZGF0ZVN0YXR1cykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHVwZGF0ZTogYW55ID0geyBzdGF0dXMgfTtcclxuICAgIGlmIChzdGF0dXMgPT09ICdJbi1Qcm9ncmVzcycpIHtcclxuICAgICAgICAvLyBPbmx5IHNldCBzdGFydCB0aW1lIGlmIG5vdCBzZXQ/IE9yIGFsd2F5cz8gTG9naWMgaW4gcHJldmlvdXMgd2FzOiBpZiBub3Qgc2V0LlxyXG4gICAgICAgIC8vIEJ1dCBkb2luZyBpdCBhdG9taWNhbGx5IGluIE1vbmdvIGlzIGhhcmRlciBpbiBvbmUgZ28gd2l0aG91dCBmZXRjaGluZy5cclxuICAgICAgICAvLyBMZXQncyBmZXRjaCBmaXJzdC5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcbiAgICBpZiAoY2FuZGlkYXRlKSB7XHJcbiAgICAgICAgY2FuZGlkYXRlLnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAnSW4tUHJvZ3Jlc3MnICYmICEoY2FuZGlkYXRlIGFzIGFueSkuaW50ZXJ2aWV3U3RhcnRUaW1lKSB7XHJcbiAgICAgICAgICAgIGNhbmRpZGF0ZS5zZXQoJ2ludGVydmlld1N0YXJ0VGltZScsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IGNhbmRpZGF0ZS5zYXZlKCk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9pbnRlcnZpZXcvJHtpZH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdFNjb3JlKGlkOiBzdHJpbmcsIHJvbGU6IHN0cmluZywgc2NvcmU6IFNjb3JlU2hlZXQpIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcblxyXG4gICAgaWYgKGNhbmRpZGF0ZSkge1xyXG4gICAgICAgIC8vIEluaXQgc2NvcmVzIGlmIG51bGwgKGhhbmRsZWQgYnkgU2NoZW1hIGRlZmF1bHQgdXN1YWxseSwgYnV0IHJvYnVzdCBjaGVjaylcclxuICAgICAgICBpZiAoIWNhbmRpZGF0ZS5zY29yZXMpIGNhbmRpZGF0ZS5zY29yZXMgPSB7IGludGVydmlld2VyMTogbnVsbCwgaW50ZXJ2aWV3ZXIyOiBudWxsIH07XHJcblxyXG4gICAgICAgIC8vIFdlIGFjY2VwdCBmbGV4aWJsZSBTY29yZVNoZWV0IHN0cnVjdHVyZVxyXG4gICAgICAgIC8vIERpcmVjdCBhc3NpZ25tZW50IHdvcmtzIGJlY2F1c2Ugb2YgTWl4ZWQgdHlwZVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY29yZXMgPSBjYW5kaWRhdGUuc2NvcmVzO1xyXG4gICAgICAgIGN1cnJlbnRTY29yZXNbcm9sZV0gPSBzY29yZTtcclxuXHJcbiAgICAgICAgLy8gTWFyayBhcyBtb2RpZmllZCBiZWNhdXNlICdzY29yZXMnIGlzIE1peGVkIHR5cGVcclxuICAgICAgICBjYW5kaWRhdGUubWFya01vZGlmaWVkKCdzY29yZXMnKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYm90aCBzdWJtaXR0ZWRcclxuICAgICAgICBjb25zdCBzMSA9IGN1cnJlbnRTY29yZXMuaW50ZXJ2aWV3ZXIxO1xyXG4gICAgICAgIGNvbnN0IHMyID0gY3VycmVudFNjb3Jlcy5pbnRlcnZpZXdlcjI7XHJcblxyXG4gICAgICAgIGlmIChzMSAmJiBzMikge1xyXG4gICAgICAgICAgICBjYW5kaWRhdGUuYXZlcmFnZVNjb3JlID0gKHMxLnRvdGFsICsgczIudG90YWwpIC8gMjtcclxuICAgICAgICAgICAgY29uc3QgcjEgPSBzMS5maW5hbFJhdGluZyB8fCAoczEudG90YWwgLyA1KTtcclxuICAgICAgICAgICAgY29uc3QgcjIgPSBzMi5maW5hbFJhdGluZyB8fCAoczIudG90YWwgLyA1KTtcclxuICAgICAgICAgICAgY2FuZGlkYXRlLmZpbmFsUmF0aW5nQXZlcmFnZSA9IHBhcnNlRmxvYXQoKChyMSArIHIyKSAvIDIpLnRvRml4ZWQoMSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNjb3JlLnJlY29tbWVuZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBjYW5kaWRhdGUucmVjb21tZW5kYXRpb24gPSBzY29yZS5yZWNvbW1lbmRhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZS5zdGF0dXMgPT09ICdJbi1Qcm9ncmVzcycpIHtcclxuICAgICAgICAgICAgICAgIGNhbmRpZGF0ZS5zdGF0dXMgPSAnSW50ZXJ2aWV3ZWQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gUGFydGlhbCB1cGRhdGUsIGZvcmNlIHNhdmUgb2YgdXNhZ2VcclxuICAgICAgICAgICAgY2FuZGlkYXRlLnNjb3JlcyA9IGN1cnJlbnRTY29yZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBjYW5kaWRhdGUuc2F2ZSgpO1xyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvaW50ZXJ2aWV3LyR7aWR9YCk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYW5kaWRhdGVOb3RlcyhpZDogc3RyaW5nLCBub3Rlczogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZmluZE9uZUFuZFVwZGF0ZSh7IGlkIH0sIHsgbm90ZXMgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlVGFncyhpZDogc3RyaW5nLCB0YWdzOiBzdHJpbmdbXSkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IENhbmRpZGF0ZU1vZGVsLmZpbmRPbmVBbmRVcGRhdGUoeyBpZCB9LCB7IHRhZ3MgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FuZGlkYXRlKGlkOiBzdHJpbmcpIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBhd2FpdCBDYW5kaWRhdGVNb2RlbC5kZWxldGVPbmUoeyBpZCB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2FuZGlkYXRlcycpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlRGV0YWlscyhpZDogc3RyaW5nLCBkYXRhOiBQYXJ0aWFsPENhbmRpZGF0ZT4pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lQW5kVXBkYXRlKHsgaWQgfSwgeyAkc2V0OiBkYXRhIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9yZXBvcnRzLyR7aWR9YCk7XHJcbn1cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTUVNQkVSIEFDVElPTlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBOT1RFOiBpbiBNb25nb0RCIHZlcnNpb24sIHdlIHRyZWF0IFwiTWVtYmVyXCIgKHByb2ZpbGUpIGFuZCBcIlVzZXJcIiAoYXV0aCkgYXMgbGlua2VkIGJ1dCBtYXliZSB3ZSBjYW4gbWVyZ2UgdGhlbT9cclxuLy8gVGhlIHByZXZpb3VzIGNvZGUga2VwdCB0aGVtIHNlcGFyYXRlIGFycmF5cy4gV2UnbGwgc3RpY2sgdG8gdGhhdCBsb2dpYyB0byBhdm9pZCBmcm9udGVuZCBicmVha2FnZS5cclxuLy8gJ2dldE1lbWJlcnMnIHJldHVybnMgdGhlIGxpc3Qgb2YgTWVtYmVyIHByb2ZpbGVzIChkaXNwbGF5ZWQgaW4gQWRtaW4gcGFuZWwpLlxyXG4vLyAnZ2V0VXNlcnMnIHJldHVybnMgdGhlIGxvZ2luIGNyZWRlbnRpYWxzICh1c2VkIGJ5IG1pZGRsZXdhcmUvYXV0aCkuXHJcblxyXG4vLyBTaW5jZSB3ZSBkZWZpbmVkIHNjaGVtYXMgZm9yIGJvdGgsIHdlIG1haW50YWluIGR1YWwgd3JpdGVzLlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lbWJlcnMoKTogUHJvbWlzZTxNZW1iZXJbXT4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgVXNlck1vZGVsLmZpbmQoe30pLmxlYW4oKTtcclxuICAgIC8vIFdlIG1hcCBVc2VycyB0byBNZW1iZXJzIHN0cnVjdHVyZSAoc2luY2UgdGhleSBhcmUgYmFzaWNhbGx5IHRoZSBzYW1lIGluIHRoaXMgYXBwKVxyXG4gICAgLy8gT3IgZGlkIHdlIHN0b3JlIGV4dHJhIGRhdGEgb24gTWVtYmVyP1xyXG4gICAgLy8gTG9va2luZyBhdCB0eXBlcy50czogTWVtYmVyIGV4dGVuZHMgVXNlci5cclxuICAgIC8vIEluIGRiLmpzb24sIHRoZXkgd2VyZSBzZXBhcmF0ZSBhcnJheXMuXHJcbiAgICAvLyBXZSB3aWxsIGp1c3QgZmV0Y2ggVXNlcnMgYW5kIG1hcCB0aGVtIHRvIE1lbWJlcltdIHRvIHNpbXBsaWZ5LCBPUiBmZXRjaCBzcGVjaWZpYyBtZW1iZXIgY29sbGVjdGlvbiBpZiB3ZSB3YW50LlxyXG4gICAgLy8gTGV0J3Mgc3RpY2sgdG8gdXNpbmcgVXNlck1vZGVsIGFzIHRoZSBzb3VyY2Ugb2YgdHJ1dGggZm9yIE1lbWJlcnMgdG9vLCB0byBub3JtYWxpemUgZGF0YS5cclxuICAgIHJldHVybiB1c2Vycy5tYXAoKHU6IGFueSkgPT4gKHtcclxuICAgICAgICBpZDogdS5pZCxcclxuICAgICAgICBuYW1lOiB1Lm5hbWUsXHJcbiAgICAgICAgZW1haWw6IHUuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmRIYXNoOiB1LnBhc3N3b3JkSGFzaCxcclxuICAgICAgICByb2xlOiB1LnJvbGUgYXMgVXNlclJvbGUsXHJcbiAgICAgICAgZGVwYXJ0bWVudElkOiB1LmRlcGFydG1lbnRJZCxcclxuICAgICAgICBzdGF0dXM6ICdBY3RpdmUnLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIC8vIE1vY2sgZmllbGRzIGlmIG1pc3NpbmdcclxuICAgIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZE1lbWJlcihtZW1iZXI6IE1lbWJlcikge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIC8vIENoZWNrIGlmIGV4aXN0c1xyXG4gICAgY29uc3QgZXhpc3RzID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoeyBlbWFpbDogbWVtYmVyLmVtYWlsIH0pO1xyXG4gICAgaWYgKGV4aXN0cykgcmV0dXJuO1xyXG5cclxuICAgIGF3YWl0IFVzZXJNb2RlbC5jcmVhdGUoe1xyXG4gICAgICAgIGlkOiBtZW1iZXIuaWQsXHJcbiAgICAgICAgbmFtZTogbWVtYmVyLm5hbWUsXHJcbiAgICAgICAgZW1haWw6IG1lbWJlci5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZEhhc2g6IG1lbWJlci5wYXNzd29yZEhhc2ggfHwgJ2llZWUxMjMnLFxyXG4gICAgICAgIHJvbGU6IG1lbWJlci5yb2xlLFxyXG4gICAgICAgIGRlcGFydG1lbnRJZDogbWVtYmVyLmRlcGFydG1lbnRJZFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZW1iZXIoaWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHUgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IGlkIH0pLmxlYW4oKTtcclxuICAgIGlmICghdSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IHUuaWQsXHJcbiAgICAgICAgbmFtZTogdS5uYW1lLFxyXG4gICAgICAgIGVtYWlsOiB1LmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkSGFzaDogdS5wYXNzd29yZEhhc2gsXHJcbiAgICAgICAgcm9sZTogdS5yb2xlIGFzIFVzZXJSb2xlLFxyXG4gICAgICAgIGRlcGFydG1lbnRJZDogdS5kZXBhcnRtZW50SWQsXHJcbiAgICAgICAgc3RhdHVzOiAnQWN0aXZlJyxcclxuICAgICAgICBzdGFydERhdGU6ICcnXHJcbiAgICB9IGFzIE1lbWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lbWJlcihpZDogc3RyaW5nLCBkYXRhOiBQYXJ0aWFsPE1lbWJlcj4pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICAvLyBGaW5kIFVzZXIgYnkgSUQgZmlyc3QsIG9yIEVtYWlsXHJcbiAgICAvLyBVcGRhdGluZyBVc2VyTW9kZWxcclxuICAgIGNvbnN0IHVwZGF0ZVBheWxvYWQ6IGFueSA9IHt9O1xyXG4gICAgaWYgKGRhdGEubmFtZSkgdXBkYXRlUGF5bG9hZC5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgaWYgKGRhdGEuZW1haWwpIHVwZGF0ZVBheWxvYWQuZW1haWwgPSBkYXRhLmVtYWlsO1xyXG4gICAgaWYgKGRhdGEucm9sZSkgdXBkYXRlUGF5bG9hZC5yb2xlID0gZGF0YS5yb2xlO1xyXG4gICAgaWYgKGRhdGEuZGVwYXJ0bWVudElkKSB1cGRhdGVQYXlsb2FkLmRlcGFydG1lbnRJZCA9IGRhdGEuZGVwYXJ0bWVudElkO1xyXG4gICAgaWYgKGRhdGEucGFzc3dvcmRIYXNoKSB1cGRhdGVQYXlsb2FkLnBhc3N3b3JkSGFzaCA9IGRhdGEucGFzc3dvcmRIYXNoO1xyXG5cclxuICAgIGF3YWl0IFVzZXJNb2RlbC5maW5kT25lQW5kVXBkYXRlKHsgaWQgfSwgeyAkc2V0OiB1cGRhdGVQYXlsb2FkIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVNZW1iZXIoaWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IFVzZXJNb2RlbC5kZWxldGVPbmUoeyBpZCB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvbWVtYmVycycpO1xyXG59XHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFFCQU5LIEFDVElPTlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UXVlc3Rpb25zKCkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGF3YWl0IFF1ZXN0aW9uTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG5cclxuICAgIGlmIChxdWVzdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgLy8gU2VlZFxyXG4gICAgICAgIGNvbnN0IGluaXRpYWxEYXRhID0gcmVxdWlyZSgnLi9kYXRhJykuUVVFU1RJT05fQkFOSztcclxuICAgICAgICAvLyBJbnNlcnQga2V5cyBhcyBjYXRlZ29yaWVzXHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IE9iamVjdC5lbnRyaWVzKGluaXRpYWxEYXRhKS5tYXAoKFtrLCB2XSkgPT4gKHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IGssXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uczogdlxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBhd2FpdCBRdWVzdGlvbk1vZGVsLmluc2VydE1hbnkocGF5bG9hZCk7XHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnZlcnQgYXJyYXkgYmFjayB0byBvYmplY3Q6IHsgY2F0ZWdvcnk6IFtxMSwgcTJdIH1cclxuICAgIGNvbnN0IHJlc3VsdDogYW55ID0ge307XHJcbiAgICBxdWVzdGlvbnMuZm9yRWFjaCgocTogYW55KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0W3EuY2F0ZWdvcnldID0gcS5xdWVzdGlvbnM7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVRdWVzdGlvbnMoY2F0ZWdvcnk6IHN0cmluZywgbmV3UXVlc3Rpb25zOiBzdHJpbmdbXSkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IFF1ZXN0aW9uTW9kZWwuZmluZE9uZUFuZFVwZGF0ZShcclxuICAgICAgICB7IGNhdGVnb3J5IH0sXHJcbiAgICAgICAgeyBxdWVzdGlvbnM6IG5ld1F1ZXN0aW9ucyB9LFxyXG4gICAgICAgIHsgdXBzZXJ0OiB0cnVlIH1cclxuICAgICk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL3FiYW5rJyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2ludGVydmlldy9baWRdJywgJ3BhZ2UnKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNZU1RFTSBBQ1RJT05TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0RGF0YWJhc2UoKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZGVsZXRlTWFueSh7fSk7XHJcbiAgICAvLyBXZSB0eXBpY2FsbHkgZG9uJ3QgZGVsZXRlIFVzZXJzL0RlcHRzIGluIHJlc2V0LCBqdXN0IGNhbmRpZGF0ZXM/XHJcbiAgICAvLyBUaGUgcHJldmlvdXMgY29kZTogZGIuY2FuZGlkYXRlcyA9IFtdLCBkYi5tZW1iZXJzID0gW11cclxuICAgIC8vIFNvIHdlIGRlbGV0ZSBDYW5kaWRhdGVzIGFuZCBVc2VycyAoZXhjZXB0IEFkbWluKS5cclxuICAgIC8vIExldCdzIHNhZmUtZGVsZXRlOiBLZWVwIFN1cGVyQWRtaW4uXHJcbiAgICBhd2FpdCBVc2VyTW9kZWwuZGVsZXRlTWFueSh7IHJvbGU6IHsgJG5lOiAnU3VwZXJBZG1pbicgfSB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoic1JBa0xzQiw4TEFBQSJ9
}),
"[project]/src/components/CandidateList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CandidateList",
    ()=>CandidateList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatusBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$177251__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:177251 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function CandidateList({ initialCandidates, userRole }) {
    _s();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [trackFilter, setTrackFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const filtered = initialCandidates.filter((c)=>{
        const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
        const matchesTrack = trackFilter === 'All' || c.track === trackFilter;
        return matchesSearch && matchesStatus && matchesTrack;
    });
    const handleDelete = async (id)=>{
        if (confirm('Are you sure you want to delete this candidate?')) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$177251__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCandidate"])(id);
            router.refresh();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-2.5 text-slate-400",
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 35,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "px-4 py-2 border border-slate-200 rounded-lg bg-white",
                        value: statusFilter,
                        onChange: (e)=>setStatusFilter(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "All",
                                children: "All Statuses"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Pending",
                                children: "Pending"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "In-Progress",
                                children: "In-Progress"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 52,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Interviewed",
                                children: "Interviewed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Selected",
                                children: "Selected"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "px-4 py-2 border border-slate-200 rounded-lg bg-white",
                        value: trackFilter,
                        onChange: (e)=>setTrackFilter(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "All",
                                children: "All Tracks"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 63,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Web",
                                children: "Web"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 64,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "AI-ML",
                                children: "AI-ML"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Event-Tech",
                                children: "Event-Tech"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CandidateList.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-left border-collapse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-slate-50 border-b border-slate-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-4 text-left font-bold text-slate-500",
                                        children: "Candidate"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CandidateList.tsx",
                                        lineNumber: 75,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-4 text-left font-bold text-slate-500",
                                        children: "Track/Year"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CandidateList.tsx",
                                        lineNumber: 76,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-4 text-left font-bold text-slate-500",
                                        children: "Rating"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CandidateList.tsx",
                                        lineNumber: 77,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-4 text-left font-bold text-slate-500",
                                        children: "Recommendation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CandidateList.tsx",
                                        lineNumber: 78,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-4 text-left font-bold text-slate-500",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CandidateList.tsx",
                                        lineNumber: 79,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-slate-100",
                            children: [
                                filtered.map((candidate)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "hover:bg-slate-50 transition-colors group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-slate-900 capitalize",
                                                        children: candidate.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CandidateList.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-slate-700",
                                                        children: candidate.track
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CandidateList.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: candidate.averageScore ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-blue-600 text-lg",
                                                    children: candidate.averageScore
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CandidateList.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: candidate.recommendation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs px-2 py-1 bg-slate-100 rounded border border-slate-200 font-medium",
                                                    children: candidate.recommendation
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CandidateList.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusBadge"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/interview/${candidate.id}`,
                                                            className: "p-2 bg-slate-900 text-white rounded hover:bg-slate-700",
                                                            title: "Start Interview",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/reports/${candidate.id}`,
                                                            className: "p-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100",
                                                            title: "View Report",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/candidates/${candidate.id}/edit`,
                                                            className: "p-2 bg-slate-50 text-slate-600 rounded hover:bg-slate-200",
                                                            title: "Edit Details",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleDelete(candidate.id),
                                                            className: "p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded",
                                                            title: "Delete",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
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
                                filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
_s(CandidateList, "DT3rgD1lx66zvcvwBvkXYuMOW7o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CandidateList;
var _c;
__turbopack_context__.k.register(_c, "CandidateList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data:6da2e7 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCandidates",
    ()=>$$RSC_SERVER_ACTION_7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4054adef7d27212948087d51169d01b03e2bb563d8":"addCandidates"},"src/lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4054adef7d27212948087d51169d01b03e2bb563d8", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addCandidates");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJy4vZGJDb25maWcnO1xyXG5pbXBvcnQgeyBDYW5kaWRhdGVNb2RlbCwgVXNlck1vZGVsLCBEZXBhcnRtZW50TW9kZWwsIFF1ZXN0aW9uTW9kZWwsIElDYW5kaWRhdGUsIElVc2VyLCBJRGVwYXJ0bWVudCB9IGZyb20gJ0AvbW9kZWxzL21vZGVscyc7XHJcbmltcG9ydCB7IENhbmRpZGF0ZSwgQ2FuZGlkYXRlU3RhdHVzLCBJbnRlcnZpZXdlclJvbGUsIFNjb3JlU2hlZXQsIE1lbWJlciwgVXNlclJvbGUsIFVzZXIgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIEhlbHBlciB0byBlbnN1cmUgY29ubmVjdGlvblxyXG5hc3luYyBmdW5jdGlvbiBkYigpIHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gREVQQVJUTUVOVCBBQ1RJT05TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlcGFydG1lbnRzKCk6IFByb21pc2U8SURlcGFydG1lbnRbXT4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IGRlcHRzID0gYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmZpbmQoe30pLmxlYW4oKTtcclxuICAgIHJldHVybiBkZXB0cy5tYXAoKGQ6IGFueSkgPT4gKHsgLi4uZCwgX2lkOiBkLl9pZC50b1N0cmluZygpIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZERlcGFydG1lbnQobmFtZTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgY29uc3QgaWQgPSBgZGVwdF8ke25hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICdfJyl9YDtcclxuICAgIGNvbnN0IGV4aXN0cyA9IGF3YWl0IERlcGFydG1lbnRNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcbiAgICBpZiAoZXhpc3RzKSByZXR1cm47XHJcblxyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmNyZWF0ZSh7IGlkLCBuYW1lIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvbWVtYmVycy9hZGQnKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2FuZGlkYXRlcy9hZGQnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmFtZURlcGFydG1lbnQoaWQ6IHN0cmluZywgbmV3TmFtZTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmZpbmRPbmVBbmRVcGRhdGUoeyBpZCB9LCB7IG5hbWU6IG5ld05hbWUgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzL2FkZCcpO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzL2FkZCcpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGVwYXJ0bWVudChpZDogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgRGVwYXJ0bWVudE1vZGVsLmRlbGV0ZU9uZSh7IGlkIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVTRVIgQUNUSU9OUyAoTG9naW4pXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKCk6IFByb21pc2U8VXNlcltdPiB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2VyTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG4gICAgcmV0dXJuIHVzZXJzLm1hcCgodTogYW55KSA9PiAoe1xyXG4gICAgICAgIGlkOiB1LmlkLFxyXG4gICAgICAgIG5hbWU6IHUubmFtZSxcclxuICAgICAgICBlbWFpbDogdS5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZEhhc2g6IHUucGFzc3dvcmRIYXNoLFxyXG4gICAgICAgIHJvbGU6IHUucm9sZSBhcyBVc2VyUm9sZSxcclxuICAgICAgICBkZXBhcnRtZW50SWQ6IHUuZGVwYXJ0bWVudElkXHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDQU5ESURBVEUgQUNUSU9OU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYW5kaWRhdGVzKCk6IFByb21pc2U8Q2FuZGlkYXRlW10+IHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGVzID0gYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG4gICAgLy8gTWFwIF9pZCBhbmQgZGF0ZXMgaWYgbmVjZXNzYXJ5LCB0aG91Z2ggbGVhbigpIGlzIG1vc3RseSBQT0pPLlxyXG4gICAgLy8gV2UgdXNlZCBhIGN1c3RvbSAnaWQnIHN0cmluZyBmaWVsZCwgc28gd2UgcmVseSBvbiB0aGF0LlxyXG4gICAgcmV0dXJuIGNhbmRpZGF0ZXMubWFwKChjOiBhbnkpID0+ICh7XHJcbiAgICAgICAgLi4uYyxcclxuICAgICAgICBfaWQ6IGMuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgY3JlYXRlZEF0OiBjLmNyZWF0ZWRBdCA/IGMuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgaW50ZXJ2aWV3U3RhcnRUaW1lOiBjLmludGVydmlld1N0YXJ0VGltZSAvLyBpZiBleGlzdHNcclxuICAgIH0pKSBhcyB1bmtub3duIGFzIENhbmRpZGF0ZVtdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlKGlkOiBzdHJpbmcpOiBQcm9taXNlPENhbmRpZGF0ZSB8IHVuZGVmaW5lZD4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGF3YWl0IENhbmRpZGF0ZU1vZGVsLmZpbmRPbmUoeyBpZCB9KS5sZWFuKCk7XHJcbiAgICBpZiAoIWNhbmRpZGF0ZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uY2FuZGlkYXRlLFxyXG4gICAgICAgIF9pZDogKGNhbmRpZGF0ZSBhcyBhbnkpLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogKGNhbmRpZGF0ZSBhcyBhbnkpLmNyZWF0ZWRBdD8udG9JU09TdHJpbmcoKVxyXG4gICAgfSBhcyB1bmtub3duIGFzIENhbmRpZGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZENhbmRpZGF0ZXMobmV3Q2FuZGlkYXRlczogQ2FuZGlkYXRlW10pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICAvLyBWYWxpZGF0ZSB1bmlxdWVuZXNzIGlmIG5lZWRlZCwgYnV0IGZvciBidWxrIGFkZCBqdXN0IHB1c2hcclxuICAgIGF3YWl0IENhbmRpZGF0ZU1vZGVsLmluc2VydE1hbnkobmV3Q2FuZGlkYXRlcyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2NhbmRpZGF0ZXMnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhbmRpZGF0ZVN0YXR1cyhpZDogc3RyaW5nLCBzdGF0dXM6IENhbmRpZGF0ZVN0YXR1cykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHVwZGF0ZTogYW55ID0geyBzdGF0dXMgfTtcclxuICAgIGlmIChzdGF0dXMgPT09ICdJbi1Qcm9ncmVzcycpIHtcclxuICAgICAgICAvLyBPbmx5IHNldCBzdGFydCB0aW1lIGlmIG5vdCBzZXQ/IE9yIGFsd2F5cz8gTG9naWMgaW4gcHJldmlvdXMgd2FzOiBpZiBub3Qgc2V0LlxyXG4gICAgICAgIC8vIEJ1dCBkb2luZyBpdCBhdG9taWNhbGx5IGluIE1vbmdvIGlzIGhhcmRlciBpbiBvbmUgZ28gd2l0aG91dCBmZXRjaGluZy5cclxuICAgICAgICAvLyBMZXQncyBmZXRjaCBmaXJzdC5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcbiAgICBpZiAoY2FuZGlkYXRlKSB7XHJcbiAgICAgICAgY2FuZGlkYXRlLnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAnSW4tUHJvZ3Jlc3MnICYmICEoY2FuZGlkYXRlIGFzIGFueSkuaW50ZXJ2aWV3U3RhcnRUaW1lKSB7XHJcbiAgICAgICAgICAgIGNhbmRpZGF0ZS5zZXQoJ2ludGVydmlld1N0YXJ0VGltZScsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IGNhbmRpZGF0ZS5zYXZlKCk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9pbnRlcnZpZXcvJHtpZH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdFNjb3JlKGlkOiBzdHJpbmcsIHJvbGU6IHN0cmluZywgc2NvcmU6IFNjb3JlU2hlZXQpIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBjb25zdCBjYW5kaWRhdGUgPSBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lKHsgaWQgfSk7XHJcblxyXG4gICAgaWYgKGNhbmRpZGF0ZSkge1xyXG4gICAgICAgIC8vIEluaXQgc2NvcmVzIGlmIG51bGwgKGhhbmRsZWQgYnkgU2NoZW1hIGRlZmF1bHQgdXN1YWxseSwgYnV0IHJvYnVzdCBjaGVjaylcclxuICAgICAgICBpZiAoIWNhbmRpZGF0ZS5zY29yZXMpIGNhbmRpZGF0ZS5zY29yZXMgPSB7IGludGVydmlld2VyMTogbnVsbCwgaW50ZXJ2aWV3ZXIyOiBudWxsIH07XHJcblxyXG4gICAgICAgIC8vIFdlIGFjY2VwdCBmbGV4aWJsZSBTY29yZVNoZWV0IHN0cnVjdHVyZVxyXG4gICAgICAgIC8vIERpcmVjdCBhc3NpZ25tZW50IHdvcmtzIGJlY2F1c2Ugb2YgTWl4ZWQgdHlwZVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY29yZXMgPSBjYW5kaWRhdGUuc2NvcmVzO1xyXG4gICAgICAgIGN1cnJlbnRTY29yZXNbcm9sZV0gPSBzY29yZTtcclxuXHJcbiAgICAgICAgLy8gTWFyayBhcyBtb2RpZmllZCBiZWNhdXNlICdzY29yZXMnIGlzIE1peGVkIHR5cGVcclxuICAgICAgICBjYW5kaWRhdGUubWFya01vZGlmaWVkKCdzY29yZXMnKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYm90aCBzdWJtaXR0ZWRcclxuICAgICAgICBjb25zdCBzMSA9IGN1cnJlbnRTY29yZXMuaW50ZXJ2aWV3ZXIxO1xyXG4gICAgICAgIGNvbnN0IHMyID0gY3VycmVudFNjb3Jlcy5pbnRlcnZpZXdlcjI7XHJcblxyXG4gICAgICAgIGlmIChzMSAmJiBzMikge1xyXG4gICAgICAgICAgICBjYW5kaWRhdGUuYXZlcmFnZVNjb3JlID0gKHMxLnRvdGFsICsgczIudG90YWwpIC8gMjtcclxuICAgICAgICAgICAgY29uc3QgcjEgPSBzMS5maW5hbFJhdGluZyB8fCAoczEudG90YWwgLyA1KTtcclxuICAgICAgICAgICAgY29uc3QgcjIgPSBzMi5maW5hbFJhdGluZyB8fCAoczIudG90YWwgLyA1KTtcclxuICAgICAgICAgICAgY2FuZGlkYXRlLmZpbmFsUmF0aW5nQXZlcmFnZSA9IHBhcnNlRmxvYXQoKChyMSArIHIyKSAvIDIpLnRvRml4ZWQoMSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNjb3JlLnJlY29tbWVuZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBjYW5kaWRhdGUucmVjb21tZW5kYXRpb24gPSBzY29yZS5yZWNvbW1lbmRhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZS5zdGF0dXMgPT09ICdJbi1Qcm9ncmVzcycpIHtcclxuICAgICAgICAgICAgICAgIGNhbmRpZGF0ZS5zdGF0dXMgPSAnSW50ZXJ2aWV3ZWQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gUGFydGlhbCB1cGRhdGUsIGZvcmNlIHNhdmUgb2YgdXNhZ2VcclxuICAgICAgICAgICAgY2FuZGlkYXRlLnNjb3JlcyA9IGN1cnJlbnRTY29yZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBjYW5kaWRhdGUuc2F2ZSgpO1xyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvaW50ZXJ2aWV3LyR7aWR9YCk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYW5kaWRhdGVOb3RlcyhpZDogc3RyaW5nLCBub3Rlczogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZmluZE9uZUFuZFVwZGF0ZSh7IGlkIH0sIHsgbm90ZXMgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlVGFncyhpZDogc3RyaW5nLCB0YWdzOiBzdHJpbmdbXSkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IENhbmRpZGF0ZU1vZGVsLmZpbmRPbmVBbmRVcGRhdGUoeyBpZCB9LCB7IHRhZ3MgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FuZGlkYXRlKGlkOiBzdHJpbmcpIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBhd2FpdCBDYW5kaWRhdGVNb2RlbC5kZWxldGVPbmUoeyBpZCB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvY2FuZGlkYXRlcycpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlRGV0YWlscyhpZDogc3RyaW5nLCBkYXRhOiBQYXJ0aWFsPENhbmRpZGF0ZT4pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICBhd2FpdCBDYW5kaWRhdGVNb2RlbC5maW5kT25lQW5kVXBkYXRlKHsgaWQgfSwgeyAkc2V0OiBkYXRhIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9jYW5kaWRhdGVzJyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChgL2ludGVydmlldy8ke2lkfWApO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9yZXBvcnRzLyR7aWR9YCk7XHJcbn1cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTUVNQkVSIEFDVElPTlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBOT1RFOiBpbiBNb25nb0RCIHZlcnNpb24sIHdlIHRyZWF0IFwiTWVtYmVyXCIgKHByb2ZpbGUpIGFuZCBcIlVzZXJcIiAoYXV0aCkgYXMgbGlua2VkIGJ1dCBtYXliZSB3ZSBjYW4gbWVyZ2UgdGhlbT9cclxuLy8gVGhlIHByZXZpb3VzIGNvZGUga2VwdCB0aGVtIHNlcGFyYXRlIGFycmF5cy4gV2UnbGwgc3RpY2sgdG8gdGhhdCBsb2dpYyB0byBhdm9pZCBmcm9udGVuZCBicmVha2FnZS5cclxuLy8gJ2dldE1lbWJlcnMnIHJldHVybnMgdGhlIGxpc3Qgb2YgTWVtYmVyIHByb2ZpbGVzIChkaXNwbGF5ZWQgaW4gQWRtaW4gcGFuZWwpLlxyXG4vLyAnZ2V0VXNlcnMnIHJldHVybnMgdGhlIGxvZ2luIGNyZWRlbnRpYWxzICh1c2VkIGJ5IG1pZGRsZXdhcmUvYXV0aCkuXHJcblxyXG4vLyBTaW5jZSB3ZSBkZWZpbmVkIHNjaGVtYXMgZm9yIGJvdGgsIHdlIG1haW50YWluIGR1YWwgd3JpdGVzLlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lbWJlcnMoKTogUHJvbWlzZTxNZW1iZXJbXT4ge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgVXNlck1vZGVsLmZpbmQoe30pLmxlYW4oKTtcclxuICAgIC8vIFdlIG1hcCBVc2VycyB0byBNZW1iZXJzIHN0cnVjdHVyZSAoc2luY2UgdGhleSBhcmUgYmFzaWNhbGx5IHRoZSBzYW1lIGluIHRoaXMgYXBwKVxyXG4gICAgLy8gT3IgZGlkIHdlIHN0b3JlIGV4dHJhIGRhdGEgb24gTWVtYmVyP1xyXG4gICAgLy8gTG9va2luZyBhdCB0eXBlcy50czogTWVtYmVyIGV4dGVuZHMgVXNlci5cclxuICAgIC8vIEluIGRiLmpzb24sIHRoZXkgd2VyZSBzZXBhcmF0ZSBhcnJheXMuXHJcbiAgICAvLyBXZSB3aWxsIGp1c3QgZmV0Y2ggVXNlcnMgYW5kIG1hcCB0aGVtIHRvIE1lbWJlcltdIHRvIHNpbXBsaWZ5LCBPUiBmZXRjaCBzcGVjaWZpYyBtZW1iZXIgY29sbGVjdGlvbiBpZiB3ZSB3YW50LlxyXG4gICAgLy8gTGV0J3Mgc3RpY2sgdG8gdXNpbmcgVXNlck1vZGVsIGFzIHRoZSBzb3VyY2Ugb2YgdHJ1dGggZm9yIE1lbWJlcnMgdG9vLCB0byBub3JtYWxpemUgZGF0YS5cclxuICAgIHJldHVybiB1c2Vycy5tYXAoKHU6IGFueSkgPT4gKHtcclxuICAgICAgICBpZDogdS5pZCxcclxuICAgICAgICBuYW1lOiB1Lm5hbWUsXHJcbiAgICAgICAgZW1haWw6IHUuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmRIYXNoOiB1LnBhc3N3b3JkSGFzaCxcclxuICAgICAgICByb2xlOiB1LnJvbGUgYXMgVXNlclJvbGUsXHJcbiAgICAgICAgZGVwYXJ0bWVudElkOiB1LmRlcGFydG1lbnRJZCxcclxuICAgICAgICBzdGF0dXM6ICdBY3RpdmUnLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIC8vIE1vY2sgZmllbGRzIGlmIG1pc3NpbmdcclxuICAgIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZE1lbWJlcihtZW1iZXI6IE1lbWJlcikge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIC8vIENoZWNrIGlmIGV4aXN0c1xyXG4gICAgY29uc3QgZXhpc3RzID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoeyBlbWFpbDogbWVtYmVyLmVtYWlsIH0pO1xyXG4gICAgaWYgKGV4aXN0cykgcmV0dXJuO1xyXG5cclxuICAgIGF3YWl0IFVzZXJNb2RlbC5jcmVhdGUoe1xyXG4gICAgICAgIGlkOiBtZW1iZXIuaWQsXHJcbiAgICAgICAgbmFtZTogbWVtYmVyLm5hbWUsXHJcbiAgICAgICAgZW1haWw6IG1lbWJlci5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZEhhc2g6IG1lbWJlci5wYXNzd29yZEhhc2ggfHwgJ2llZWUxMjMnLFxyXG4gICAgICAgIHJvbGU6IG1lbWJlci5yb2xlLFxyXG4gICAgICAgIGRlcGFydG1lbnRJZDogbWVtYmVyLmRlcGFydG1lbnRJZFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZW1iZXIoaWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHUgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7IGlkIH0pLmxlYW4oKTtcclxuICAgIGlmICghdSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IHUuaWQsXHJcbiAgICAgICAgbmFtZTogdS5uYW1lLFxyXG4gICAgICAgIGVtYWlsOiB1LmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkSGFzaDogdS5wYXNzd29yZEhhc2gsXHJcbiAgICAgICAgcm9sZTogdS5yb2xlIGFzIFVzZXJSb2xlLFxyXG4gICAgICAgIGRlcGFydG1lbnRJZDogdS5kZXBhcnRtZW50SWQsXHJcbiAgICAgICAgc3RhdHVzOiAnQWN0aXZlJyxcclxuICAgICAgICBzdGFydERhdGU6ICcnXHJcbiAgICB9IGFzIE1lbWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lbWJlcihpZDogc3RyaW5nLCBkYXRhOiBQYXJ0aWFsPE1lbWJlcj4pIHtcclxuICAgIGF3YWl0IGRiKCk7XHJcbiAgICAvLyBGaW5kIFVzZXIgYnkgSUQgZmlyc3QsIG9yIEVtYWlsXHJcbiAgICAvLyBVcGRhdGluZyBVc2VyTW9kZWxcclxuICAgIGNvbnN0IHVwZGF0ZVBheWxvYWQ6IGFueSA9IHt9O1xyXG4gICAgaWYgKGRhdGEubmFtZSkgdXBkYXRlUGF5bG9hZC5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgaWYgKGRhdGEuZW1haWwpIHVwZGF0ZVBheWxvYWQuZW1haWwgPSBkYXRhLmVtYWlsO1xyXG4gICAgaWYgKGRhdGEucm9sZSkgdXBkYXRlUGF5bG9hZC5yb2xlID0gZGF0YS5yb2xlO1xyXG4gICAgaWYgKGRhdGEuZGVwYXJ0bWVudElkKSB1cGRhdGVQYXlsb2FkLmRlcGFydG1lbnRJZCA9IGRhdGEuZGVwYXJ0bWVudElkO1xyXG4gICAgaWYgKGRhdGEucGFzc3dvcmRIYXNoKSB1cGRhdGVQYXlsb2FkLnBhc3N3b3JkSGFzaCA9IGRhdGEucGFzc3dvcmRIYXNoO1xyXG5cclxuICAgIGF3YWl0IFVzZXJNb2RlbC5maW5kT25lQW5kVXBkYXRlKHsgaWQgfSwgeyAkc2V0OiB1cGRhdGVQYXlsb2FkIH0pO1xyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9tZW1iZXJzJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVNZW1iZXIoaWQ6IHN0cmluZykge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IFVzZXJNb2RlbC5kZWxldGVPbmUoeyBpZCB9KTtcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvbWVtYmVycycpO1xyXG59XHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFFCQU5LIEFDVElPTlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UXVlc3Rpb25zKCkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGF3YWl0IFF1ZXN0aW9uTW9kZWwuZmluZCh7fSkubGVhbigpO1xyXG5cclxuICAgIGlmIChxdWVzdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgLy8gU2VlZFxyXG4gICAgICAgIGNvbnN0IGluaXRpYWxEYXRhID0gcmVxdWlyZSgnLi9kYXRhJykuUVVFU1RJT05fQkFOSztcclxuICAgICAgICAvLyBJbnNlcnQga2V5cyBhcyBjYXRlZ29yaWVzXHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IE9iamVjdC5lbnRyaWVzKGluaXRpYWxEYXRhKS5tYXAoKFtrLCB2XSkgPT4gKHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IGssXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uczogdlxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBhd2FpdCBRdWVzdGlvbk1vZGVsLmluc2VydE1hbnkocGF5bG9hZCk7XHJcbiAgICAgICAgcmV0dXJuIGluaXRpYWxEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnZlcnQgYXJyYXkgYmFjayB0byBvYmplY3Q6IHsgY2F0ZWdvcnk6IFtxMSwgcTJdIH1cclxuICAgIGNvbnN0IHJlc3VsdDogYW55ID0ge307XHJcbiAgICBxdWVzdGlvbnMuZm9yRWFjaCgocTogYW55KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0W3EuY2F0ZWdvcnldID0gcS5xdWVzdGlvbnM7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVRdWVzdGlvbnMoY2F0ZWdvcnk6IHN0cmluZywgbmV3UXVlc3Rpb25zOiBzdHJpbmdbXSkge1xyXG4gICAgYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IFF1ZXN0aW9uTW9kZWwuZmluZE9uZUFuZFVwZGF0ZShcclxuICAgICAgICB7IGNhdGVnb3J5IH0sXHJcbiAgICAgICAgeyBxdWVzdGlvbnM6IG5ld1F1ZXN0aW9ucyB9LFxyXG4gICAgICAgIHsgdXBzZXJ0OiB0cnVlIH1cclxuICAgICk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL3FiYW5rJyk7XHJcbiAgICByZXZhbGlkYXRlUGF0aCgnL2ludGVydmlldy9baWRdJywgJ3BhZ2UnKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNZU1RFTSBBQ1RJT05TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0RGF0YWJhc2UoKSB7XHJcbiAgICBhd2FpdCBkYigpO1xyXG4gICAgYXdhaXQgQ2FuZGlkYXRlTW9kZWwuZGVsZXRlTWFueSh7fSk7XHJcbiAgICAvLyBXZSB0eXBpY2FsbHkgZG9uJ3QgZGVsZXRlIFVzZXJzL0RlcHRzIGluIHJlc2V0LCBqdXN0IGNhbmRpZGF0ZXM/XHJcbiAgICAvLyBUaGUgcHJldmlvdXMgY29kZTogZGIuY2FuZGlkYXRlcyA9IFtdLCBkYi5tZW1iZXJzID0gW11cclxuICAgIC8vIFNvIHdlIGRlbGV0ZSBDYW5kaWRhdGVzIGFuZCBVc2VycyAoZXhjZXB0IEFkbWluKS5cclxuICAgIC8vIExldCdzIHNhZmUtZGVsZXRlOiBLZWVwIFN1cGVyQWRtaW4uXHJcbiAgICBhd2FpdCBVc2VyTW9kZWwuZGVsZXRlTWFueSh7IHJvbGU6IHsgJG5lOiAnU3VwZXJBZG1pbicgfSB9KTtcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib1JBNkZzQiwwTEFBQSJ9
}),
"[project]/src/components/CSVImporter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CSVImporter",
    ()=>CSVImporter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$6da2e7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:6da2e7 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function CSVImporter() {
    _s();
    const [isImporting, setIsImporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleFileUpload = (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        setIsImporting(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(file, {
            header: true,
            complete: async (results)=>{
                const newCandidates = results.data.filter((row)=>row['Full Name'] || row['Name']) // Basic validation
                .map((row)=>({
                        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
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
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$6da2e7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addCandidates"])(newCandidates);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50",
                children: [
                    isImporting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "animate-spin",
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/components/CSVImporter.tsx",
                        lineNumber: 69,
                        columnNumber: 32
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/components/CSVImporter.tsx",
                        lineNumber: 69,
                        columnNumber: 81
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(CSVImporter, "L/of+vCbmi2hPI698DdHZg4i/NY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CSVImporter;
var _c;
__turbopack_context__.k.register(_c, "CSVImporter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ExportButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExportButton",
    ()=>ExportButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleExport,
        className: "flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-bold text-sm shadow-sm transition-all active:scale-95",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
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
_c = ExportButton;
var _c;
__turbopack_context__.k.register(_c, "ExportButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
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
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
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
const Play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("play", __iconNode);
;
 //# sourceMappingURL=play.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Play",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
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
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("trash-2", __iconNode);
;
 //# sourceMappingURL=trash-2.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
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
const UserPlus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("user-plus", __iconNode);
;
 //# sourceMappingURL=user-plus.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserPlus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
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
const FileText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("file-text", __iconNode);
;
 //# sourceMappingURL=file-text.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript)");
}),
"[project]/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/ ((e, t)=>{
    "function" == typeof define && define.amd ? ((r)=>r !== undefined && __turbopack_context__.v(r))(t()) : ("TURBOPACK compile-time truthy", 1) ? module.exports = t() : "TURBOPACK unreachable";
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function r() {
    var n = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {};
    var d, s = !n.document && !!n.postMessage, a = n.IS_PAPA_WORKER || !1, o = {}, h = 0, v = {};
    function u(e) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
            data: [],
            errors: [],
            meta: {}
        }, (function(e) {
            var t = b(e);
            t.chunkSize = parseInt(t.chunkSize), e.step || e.chunk || (t.chunkSize = null);
            this._handle = new i(t), (this._handle.streamer = this)._config = t;
        }).call(this, e), this.parseChunk = function(t, e) {
            var i = parseInt(this._config.skipFirstNLines) || 0;
            if (this.isFirstChunk && 0 < i) {
                let e = this._config.newline;
                e || (r = this._config.quoteChar || '"', e = this._handle.guessLineEndings(t, r)), t = [
                    ...t.split(e).slice(i)
                ].join(e);
            }
            this.isFirstChunk && U(this._config.beforeFirstChunk) && void 0 !== (r = this._config.beforeFirstChunk(t)) && (t = r), this.isFirstChunk = !1, this._halted = !1;
            var i = this._partialLine + t, r = (this._partialLine = "", this._handle.parse(i, this._baseIndex, !this._finished));
            if (!this._handle.paused() && !this._handle.aborted()) {
                t = r.meta.cursor, i = (this._finished || (this._partialLine = i.substring(t - this._baseIndex), this._baseIndex = t), r && r.data && (this._rowCount += r.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview);
                if (a) n.postMessage({
                    results: r,
                    workerId: v.WORKER_ID,
                    finished: i
                });
                else if (U(this._config.chunk) && !e) {
                    if (this._config.chunk(r, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
                    this._completeResults = r = void 0;
                }
                return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(r.data), this._completeResults.errors = this._completeResults.errors.concat(r.errors), this._completeResults.meta = r.meta), this._completed || !i || !U(this._config.complete) || r && r.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), i || r && r.meta.paused || this._nextChunk(), r;
            }
            this._halted = !0;
        }, this._sendError = function(e) {
            U(this._config.error) ? this._config.error(e) : a && this._config.error && n.postMessage({
                workerId: v.WORKER_ID,
                error: e,
                finished: !1
            });
        };
    }
    function f(e) {
        var r;
        (e = e || {}).chunkSize || (e.chunkSize = v.RemoteChunkSize), u.call(this, e), this._nextChunk = s ? function() {
            this._readChunk(), this._chunkLoaded();
        } : function() {
            this._readChunk();
        }, this.stream = function(e) {
            this._input = e, this._nextChunk();
        }, this._readChunk = function() {
            if (this._finished) this._chunkLoaded();
            else {
                if (r = new XMLHttpRequest, this._config.withCredentials && (r.withCredentials = this._config.withCredentials), s || (r.onload = y(this._chunkLoaded, this), r.onerror = y(this._chunkError, this)), r.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !s), this._config.downloadRequestHeaders) {
                    var e, t = this._config.downloadRequestHeaders;
                    for(e in t)r.setRequestHeader(e, t[e]);
                }
                var i;
                this._config.chunkSize && (i = this._start + this._config.chunkSize - 1, r.setRequestHeader("Range", "bytes=" + this._start + "-" + i));
                try {
                    r.send(this._config.downloadRequestBody);
                } catch (e) {
                    this._chunkError(e.message);
                }
                s && 0 === r.status && this._chunkError();
            }
        }, this._chunkLoaded = function() {
            4 === r.readyState && (r.status < 200 || 400 <= r.status ? this._chunkError() : (this._start += this._config.chunkSize || r.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((e)=>null !== (e = e.getResponseHeader("Content-Range")) ? parseInt(e.substring(e.lastIndexOf("/") + 1)) : -1)(r), this.parseChunk(r.responseText)));
        }, this._chunkError = function(e) {
            e = r.statusText || e;
            this._sendError(new Error(e));
        };
    }
    function l(e) {
        (e = e || {}).chunkSize || (e.chunkSize = v.LocalChunkSize), u.call(this, e);
        var i, r, n = "undefined" != typeof FileReader;
        this.stream = function(e) {
            this._input = e, r = e.slice || e.webkitSlice || e.mozSlice, n ? ((i = new FileReader).onload = y(this._chunkLoaded, this), i.onerror = y(this._chunkError, this)) : i = new FileReaderSync, this._nextChunk();
        }, this._nextChunk = function() {
            this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
            var e = this._input, t = (this._config.chunkSize && (t = Math.min(this._start + this._config.chunkSize, this._input.size), e = r.call(e, this._start, t)), i.readAsText(e, this._config.encoding));
            n || this._chunkLoaded({
                target: {
                    result: t
                }
            });
        }, this._chunkLoaded = function(e) {
            this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e.target.result);
        }, this._chunkError = function() {
            this._sendError(i.error);
        };
    }
    function c(e) {
        var i;
        u.call(this, e = e || {}), this.stream = function(e) {
            return i = e, this._nextChunk();
        }, this._nextChunk = function() {
            var e, t;
            if (!this._finished) return e = this._config.chunkSize, i = e ? (t = i.substring(0, e), i.substring(e)) : (t = i, ""), this._finished = !i, this.parseChunk(t);
        };
    }
    function p(e) {
        u.call(this, e = e || {});
        var t = [], i = !0, r = !1;
        this.pause = function() {
            u.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
            u.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(e) {
            this._input = e, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
            r && 1 === t.length && (this._finished = !0);
        }, this._nextChunk = function() {
            this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : i = !0;
        }, this._streamData = y(function(e) {
            try {
                t.push("string" == typeof e ? e : e.toString(this._config.encoding)), i && (i = !1, this._checkIsFinished(), this.parseChunk(t.shift()));
            } catch (e) {
                this._streamError(e);
            }
        }, this), this._streamError = y(function(e) {
            this._streamCleanUp(), this._sendError(e);
        }, this), this._streamEnd = y(function() {
            this._streamCleanUp(), r = !0, this._streamData("");
        }, this), this._streamCleanUp = y(function() {
            this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
    }
    function i(m) {
        var n, s, a, t, o = Math.pow(2, 53), h = -o, u = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, d = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, i = this, r = 0, f = 0, l = !1, e = !1, c = [], p = {
            data: [],
            errors: [],
            meta: {}
        };
        function y(e) {
            return "greedy" === m.skipEmptyLines ? "" === e.join("").trim() : 1 === e.length && 0 === e[0].length;
        }
        function g() {
            if (p && a && (k("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + v.DefaultDelimiter + "'"), a = !1), m.skipEmptyLines && (p.data = p.data.filter(function(e) {
                return !y(e);
            })), _()) {
                if (p) if (Array.isArray(p.data[0])) {
                    for(var e = 0; _() && e < p.data.length; e++)p.data[e].forEach(t);
                    p.data.splice(0, 1);
                } else p.data.forEach(t);
                function t(e, t) {
                    U(m.transformHeader) && (e = m.transformHeader(e, t)), c.push(e);
                }
            }
            function i(e, t) {
                for(var i = m.header ? {} : [], r = 0; r < e.length; r++){
                    var n = r, s = e[r], s = ((e, t)=>((e)=>(m.dynamicTypingFunction && void 0 === m.dynamicTyping[e] && (m.dynamicTyping[e] = m.dynamicTypingFunction(e)), !0 === (m.dynamicTyping[e] || m.dynamicTyping)))(e) ? "true" === t || "TRUE" === t || "false" !== t && "FALSE" !== t && (((e)=>{
                            if (u.test(e)) {
                                e = parseFloat(e);
                                if (h < e && e < o) return 1;
                            }
                        })(t) ? parseFloat(t) : d.test(t) ? new Date(t) : "" === t ? null : t) : t)(n = m.header ? r >= c.length ? "__parsed_extra" : c[r] : n, s = m.transform ? m.transform(s, n) : s);
                    "__parsed_extra" === n ? (i[n] = i[n] || [], i[n].push(s)) : i[n] = s;
                }
                return m.header && (r > c.length ? k("FieldMismatch", "TooManyFields", "Too many fields: expected " + c.length + " fields but parsed " + r, f + t) : r < c.length && k("FieldMismatch", "TooFewFields", "Too few fields: expected " + c.length + " fields but parsed " + r, f + t)), i;
            }
            var r;
            p && (m.header || m.dynamicTyping || m.transform) && (r = 1, !p.data.length || Array.isArray(p.data[0]) ? (p.data = p.data.map(i), r = p.data.length) : p.data = i(p.data, 0), m.header && p.meta && (p.meta.fields = c), f += r);
        }
        function _() {
            return m.header && 0 === c.length;
        }
        function k(e, t, i, r) {
            e = {
                type: e,
                code: t,
                message: i
            };
            void 0 !== r && (e.row = r), p.errors.push(e);
        }
        U(m.step) && (t = m.step, m.step = function(e) {
            p = e, _() ? g() : (g(), 0 !== p.data.length && (r += e.data.length, m.preview && r > m.preview ? s.abort() : (p.data = p.data[0], t(p, i))));
        }), this.parse = function(e, t, i) {
            var r = m.quoteChar || '"', r = (m.newline || (m.newline = this.guessLineEndings(e, r)), a = !1, m.delimiter ? U(m.delimiter) && (m.delimiter = m.delimiter(e), p.meta.delimiter = m.delimiter) : ((r = ((e, t, i, r, n)=>{
                var s, a, o, h;
                n = n || [
                    ",",
                    "\t",
                    "|",
                    ";",
                    v.RECORD_SEP,
                    v.UNIT_SEP
                ];
                for(var u = 0; u < n.length; u++){
                    for(var d, f = n[u], l = 0, c = 0, p = 0, g = (o = void 0, new E({
                        comments: r,
                        delimiter: f,
                        newline: t,
                        preview: 10
                    }).parse(e)), _ = 0; _ < g.data.length; _++)i && y(g.data[_]) ? p++ : (d = g.data[_].length, c += d, void 0 === o ? o = d : 0 < d && (l += Math.abs(d - o), o = d));
                    0 < g.data.length && (c /= g.data.length - p), (void 0 === a || l <= a) && (void 0 === h || h < c) && 1.99 < c && (a = l, s = f, h = c);
                }
                return {
                    successful: !!(m.delimiter = s),
                    bestDelimiter: s
                };
            })(e, m.newline, m.skipEmptyLines, m.comments, m.delimitersToGuess)).successful ? m.delimiter = r.bestDelimiter : (a = !0, m.delimiter = v.DefaultDelimiter), p.meta.delimiter = m.delimiter), b(m));
            return m.preview && m.header && r.preview++, n = e, s = new E(r), p = s.parse(n, t, i), g(), l ? {
                meta: {
                    paused: !0
                }
            } : p || {
                meta: {
                    paused: !1
                }
            };
        }, this.paused = function() {
            return l;
        }, this.pause = function() {
            l = !0, s.abort(), n = U(m.chunk) ? "" : n.substring(s.getCharIndex());
        }, this.resume = function() {
            i.streamer._halted ? (l = !1, i.streamer.parseChunk(n, !0)) : setTimeout(i.resume, 3);
        }, this.aborted = function() {
            return e;
        }, this.abort = function() {
            e = !0, s.abort(), p.meta.aborted = !0, U(m.complete) && m.complete(p), n = "";
        }, this.guessLineEndings = function(e, t) {
            e = e.substring(0, 1048576);
            var t = new RegExp(P(t) + "([^]*?)" + P(t), "gm"), i = (e = e.replace(t, "")).split("\r"), t = e.split("\n"), e = 1 < t.length && t[0].length < i[0].length;
            if (1 === i.length || e) return "\n";
            for(var r = 0, n = 0; n < i.length; n++)"\n" === i[n][0] && r++;
            return r >= i.length / 2 ? "\r\n" : "\r";
        };
    }
    function P(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function E(C) {
        var S = (C = C || {}).delimiter, O = C.newline, x = C.comments, I = C.step, A = C.preview, T = C.fastMode, D = null, L = !1, F = null == C.quoteChar ? '"' : C.quoteChar, j = F;
        if (void 0 !== C.escapeChar && (j = C.escapeChar), ("string" != typeof S || -1 < v.BAD_DELIMITERS.indexOf(S)) && (S = ","), x === S) throw new Error("Comment character same as delimiter");
        !0 === x ? x = "#" : ("string" != typeof x || -1 < v.BAD_DELIMITERS.indexOf(x)) && (x = !1), "\n" !== O && "\r" !== O && "\r\n" !== O && (O = "\n");
        var z = 0, M = !1;
        this.parse = function(i, t, r) {
            if ("string" != typeof i) throw new Error("Input must be a string");
            var n = i.length, e = S.length, s = O.length, a = x.length, o = U(I), h = [], u = [], d = [], f = z = 0;
            if (!i) return w();
            if (T || !1 !== T && -1 === i.indexOf(F)) {
                for(var l = i.split(O), c = 0; c < l.length; c++){
                    if (d = l[c], z += d.length, c !== l.length - 1) z += O.length;
                    else if (r) return w();
                    if (!x || d.substring(0, a) !== x) {
                        if (o) {
                            if (h = [], k(d.split(S)), R(), M) return w();
                        } else k(d.split(S));
                        if (A && A <= c) return h = h.slice(0, A), w(!0);
                    }
                }
                return w();
            }
            for(var p = i.indexOf(S, z), g = i.indexOf(O, z), _ = new RegExp(P(j) + P(F), "g"), m = i.indexOf(F, z);;)if (i[z] === F) for(m = z, z++;;){
                if (-1 === (m = i.indexOf(F, m + 1))) return r || u.push({
                    type: "Quotes",
                    code: "MissingQuotes",
                    message: "Quoted field unterminated",
                    row: h.length,
                    index: z
                }), E();
                if (m === n - 1) return E(i.substring(z, m).replace(_, F));
                if (F === j && i[m + 1] === j) m++;
                else if (F === j || 0 === m || i[m - 1] !== j) {
                    -1 !== p && p < m + 1 && (p = i.indexOf(S, m + 1));
                    var y = v(-1 === (g = -1 !== g && g < m + 1 ? i.indexOf(O, m + 1) : g) ? p : Math.min(p, g));
                    if (i.substr(m + 1 + y, e) === S) {
                        d.push(i.substring(z, m).replace(_, F)), i[z = m + 1 + y + e] !== F && (m = i.indexOf(F, z)), p = i.indexOf(S, z), g = i.indexOf(O, z);
                        break;
                    }
                    y = v(g);
                    if (i.substring(m + 1 + y, m + 1 + y + s) === O) {
                        if (d.push(i.substring(z, m).replace(_, F)), b(m + 1 + y + s), p = i.indexOf(S, z), m = i.indexOf(F, z), o && (R(), M)) return w();
                        if (A && h.length >= A) return w(!0);
                        break;
                    }
                    u.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: h.length,
                        index: z
                    }), m++;
                }
            }
            else if (x && 0 === d.length && i.substring(z, z + a) === x) {
                if (-1 === g) return w();
                z = g + s, g = i.indexOf(O, z), p = i.indexOf(S, z);
            } else if (-1 !== p && (p < g || -1 === g)) d.push(i.substring(z, p)), z = p + e, p = i.indexOf(S, z);
            else {
                if (-1 === g) break;
                if (d.push(i.substring(z, g)), b(g + s), o && (R(), M)) return w();
                if (A && h.length >= A) return w(!0);
            }
            return E();
            //TURBOPACK unreachable
            ;
            function k(e) {
                h.push(e), f = z;
            }
            function v(e) {
                var t = 0;
                return t = -1 !== e && (e = i.substring(m + 1, e)) && "" === e.trim() ? e.length : t;
            }
            function E(e) {
                return r || (void 0 === e && (e = i.substring(z)), d.push(e), z = n, k(d), o && R()), w();
            }
            function b(e) {
                z = e, k(d), d = [], g = i.indexOf(O, z);
            }
            function w(e) {
                if (C.header && !t && h.length && !L) {
                    var s = h[0], a = Object.create(null), o = new Set(s);
                    let n = !1;
                    for(let r = 0; r < s.length; r++){
                        let i = s[r];
                        if (a[i = U(C.transformHeader) ? C.transformHeader(i, r) : i]) {
                            let e, t = a[i];
                            for(; e = i + "_" + t, t++, o.has(e););
                            o.add(e), s[r] = e, a[i]++, n = !0, (D = null === D ? {} : D)[e] = i;
                        } else a[i] = 1, s[r] = i;
                        o.add(i);
                    }
                    n && console.warn("Duplicate headers found and renamed."), L = !0;
                }
                return {
                    data: h,
                    errors: u,
                    meta: {
                        delimiter: S,
                        linebreak: O,
                        aborted: M,
                        truncated: !!e,
                        cursor: f + (t || 0),
                        renamedHeaders: D
                    }
                };
            }
            function R() {
                I(w()), h = [], u = [];
            }
        }, this.abort = function() {
            M = !0;
        }, this.getCharIndex = function() {
            return z;
        };
    }
    function g(e) {
        var t = e.data, i = o[t.workerId], r = !1;
        if (t.error) i.userError(t.error, t.file);
        else if (t.results && t.results.data) {
            var n = {
                abort: function() {
                    r = !0, _(t.workerId, {
                        data: [],
                        errors: [],
                        meta: {
                            aborted: !0
                        }
                    });
                },
                pause: m,
                resume: m
            };
            if (U(i.userStep)) {
                for(var s = 0; s < t.results.data.length && (i.userStep({
                    data: t.results.data[s],
                    errors: t.results.errors,
                    meta: t.results.meta
                }, n), !r); s++);
                delete t.results;
            } else U(i.userChunk) && (i.userChunk(t.results, n, t.file), delete t.results);
        }
        t.finished && !r && _(t.workerId, t.results);
    }
    function _(e, t) {
        var i = o[e];
        U(i.userComplete) && i.userComplete(t), i.terminate(), delete o[e];
    }
    function m() {
        throw new Error("Not implemented.");
    }
    function b(e) {
        if ("object" != typeof e || null === e) return e;
        var t, i = Array.isArray(e) ? [] : {};
        for(t in e)i[t] = b(e[t]);
        return i;
    }
    function y(e, t) {
        return function() {
            e.apply(t, arguments);
        };
    }
    function U(e) {
        return "function" == typeof e;
    }
    return v.parse = function(e, t) {
        var i = (t = t || {}).dynamicTyping || !1;
        U(i) && (t.dynamicTypingFunction = i, i = {});
        if (t.dynamicTyping = i, t.transform = !!U(t.transform) && t.transform, !t.worker || !v.WORKERS_SUPPORTED) return i = null, v.NODE_STREAM_INPUT, "string" == typeof e ? (e = ((e)=>65279 !== e.charCodeAt(0) ? e : e.slice(1))(e), i = new (t.download ? f : c)(t)) : !0 === e.readable && U(e.read) && U(e.on) ? i = new p(t) : (n.File && e instanceof File || e instanceof Object) && (i = new l(t)), i.stream(e);
        (i = (()=>{
            var e;
            return !!v.WORKERS_SUPPORTED && (e = (()=>{
                var e = n.URL || n.webkitURL || null, t = r.toString();
                return v.BLOB_URL || (v.BLOB_URL = e.createObjectURL(new Blob([
                    "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                    "(",
                    t,
                    ")();"
                ], {
                    type: "text/javascript"
                })));
            })(), (e = new n.Worker(e)).onmessage = g, e.id = h++, o[e.id] = e);
        })()).userStep = t.step, i.userChunk = t.chunk, i.userComplete = t.complete, i.userError = t.error, t.step = U(t.step), t.chunk = U(t.chunk), t.complete = U(t.complete), t.error = U(t.error), delete t.worker, i.postMessage({
            input: e,
            config: t,
            workerId: i.id
        });
    }, v.unparse = function(e, t) {
        var n = !1, _ = !0, m = ",", y = "\r\n", s = '"', a = s + s, i = !1, r = null, o = !1, h = ((()=>{
            if ("object" == typeof t) {
                if ("string" != typeof t.delimiter || v.BAD_DELIMITERS.filter(function(e) {
                    return -1 !== t.delimiter.indexOf(e);
                }).length || (m = t.delimiter), "boolean" != typeof t.quotes && "function" != typeof t.quotes && !Array.isArray(t.quotes) || (n = t.quotes), "boolean" != typeof t.skipEmptyLines && "string" != typeof t.skipEmptyLines || (i = t.skipEmptyLines), "string" == typeof t.newline && (y = t.newline), "string" == typeof t.quoteChar && (s = t.quoteChar), "boolean" == typeof t.header && (_ = t.header), Array.isArray(t.columns)) {
                    if (0 === t.columns.length) throw new Error("Option columns is empty");
                    r = t.columns;
                }
                void 0 !== t.escapeChar && (a = t.escapeChar + s), t.escapeFormulae instanceof RegExp ? o = t.escapeFormulae : "boolean" == typeof t.escapeFormulae && t.escapeFormulae && (o = /^[=+\-@\t\r].*$/);
            }
        })(), new RegExp(P(s), "g"));
        "string" == typeof e && (e = JSON.parse(e));
        if (Array.isArray(e)) {
            if (!e.length || Array.isArray(e[0])) return u(null, e, i);
            if ("object" == typeof e[0]) return u(r || Object.keys(e[0]), e, i);
        } else if ("object" == typeof e) return "string" == typeof e.data && (e.data = JSON.parse(e.data)), Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields || r), e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : "object" == typeof e.data[0] ? Object.keys(e.data[0]) : []), Array.isArray(e.data[0]) || "object" == typeof e.data[0] || (e.data = [
            e.data
        ])), u(e.fields || [], e.data || [], i);
        throw new Error("Unable to serialize unrecognized input");
        function u(e, t, i) {
            var r = "", n = ("string" == typeof e && (e = JSON.parse(e)), "string" == typeof t && (t = JSON.parse(t)), Array.isArray(e) && 0 < e.length), s = !Array.isArray(t[0]);
            if (n && _) {
                for(var a = 0; a < e.length; a++)0 < a && (r += m), r += k(e[a], a);
                0 < t.length && (r += y);
            }
            for(var o = 0; o < t.length; o++){
                var h = (n ? e : t[o]).length, u = !1, d = n ? 0 === Object.keys(t[o]).length : 0 === t[o].length;
                if (i && !n && (u = "greedy" === i ? "" === t[o].join("").trim() : 1 === t[o].length && 0 === t[o][0].length), "greedy" === i && n) {
                    for(var f = [], l = 0; l < h; l++){
                        var c = s ? e[l] : l;
                        f.push(t[o][c]);
                    }
                    u = "" === f.join("").trim();
                }
                if (!u) {
                    for(var p = 0; p < h; p++){
                        0 < p && !d && (r += m);
                        var g = n && s ? e[p] : p;
                        r += k(t[o][g], p);
                    }
                    o < t.length - 1 && (!i || 0 < h && !d) && (r += y);
                }
            }
            return r;
        }
        function k(e, t) {
            var i, r;
            return null == e ? "" : e.constructor === Date ? JSON.stringify(e).slice(1, 25) : (r = !1, o && "string" == typeof e && o.test(e) && (e = "'" + e, r = !0), i = e.toString().replace(h, a), (r = r || !0 === n || "function" == typeof n && n(e, t) || Array.isArray(n) && n[t] || ((e, t)=>{
                for(var i = 0; i < t.length; i++)if (-1 < e.indexOf(t[i])) return !0;
                return !1;
            })(i, v.BAD_DELIMITERS) || -1 < i.indexOf(m) || " " === i.charAt(0) || " " === i.charAt(i.length - 1)) ? s + i + s : i);
        }
    }, v.RECORD_SEP = String.fromCharCode(30), v.UNIT_SEP = String.fromCharCode(31), v.BYTE_ORDER_MARK = "\ufeff", v.BAD_DELIMITERS = [
        "\r",
        "\n",
        '"',
        v.BYTE_ORDER_MARK
    ], v.WORKERS_SUPPORTED = !s && !!n.Worker, v.NODE_STREAM_INPUT = 1, v.LocalChunkSize = 10485760, v.RemoteChunkSize = 5242880, v.DefaultDelimiter = ",", v.Parser = E, v.ParserHandle = i, v.NetworkStreamer = f, v.FileStreamer = l, v.StringStreamer = c, v.ReadableStreamStreamer = p, n.jQuery && ((d = n.jQuery).fn.parse = function(o) {
        var i = o.config || {}, h = [];
        return this.each(function(e) {
            if (!("INPUT" === d(this).prop("tagName").toUpperCase() && "file" === d(this).attr("type").toLowerCase() && n.FileReader) || !this.files || 0 === this.files.length) return !0;
            for(var t = 0; t < this.files.length; t++)h.push({
                file: this.files[t],
                inputElem: this,
                instanceConfig: d.extend({}, i)
            });
        }), e(), this;
        //TURBOPACK unreachable
        ;
        function e() {
            if (0 === h.length) U(o.complete) && o.complete();
            else {
                var e, t, i, r, n = h[0];
                if (U(o.before)) {
                    var s = o.before(n.file, n.inputElem);
                    if ("object" == typeof s) {
                        if ("abort" === s.action) return e = "AbortError", t = n.file, i = n.inputElem, r = s.reason, void (U(o.error) && o.error({
                            name: e
                        }, t, i, r));
                        if ("skip" === s.action) return void u();
                        "object" == typeof s.config && (n.instanceConfig = d.extend(n.instanceConfig, s.config));
                    } else if ("skip" === s) return void u();
                }
                var a = n.instanceConfig.complete;
                n.instanceConfig.complete = function(e) {
                    U(a) && a(e, n.file, n.inputElem), u();
                }, v.parse(n.file, n.instanceConfig);
            }
        }
        function u() {
            h.splice(0, 1), e();
        }
    }), a && (n.onmessage = function(e) {
        e = e.data;
        void 0 === v.WORKER_ID && e && (v.WORKER_ID = e.workerId);
        "string" == typeof e.input ? n.postMessage({
            workerId: v.WORKER_ID,
            results: v.parse(e.input, e.config),
            finished: !0
        }) : (n.File && e.input instanceof File || e.input instanceof Object) && (e = v.parse(e.input, e.config)) && n.postMessage({
            workerId: v.WORKER_ID,
            results: e,
            finished: !0
        });
    }), (f.prototype = Object.create(u.prototype)).constructor = f, (l.prototype = Object.create(u.prototype)).constructor = l, (c.prototype = Object.create(c.prototype)).constructor = c, (p.prototype = Object.create(u.prototype)).constructor = p, v;
});
}),
"[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
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
const Upload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("upload", __iconNode);
;
 //# sourceMappingURL=upload.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Upload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
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
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("loader-circle", __iconNode);
;
 //# sourceMappingURL=loader-circle.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
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
const Download = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("download", __iconNode);
;
 //# sourceMappingURL=download.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Download",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_e029e31c._.js.map