const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.C1uxpPbR.js","app":"_app/immutable/entry/app.BpAvG1XG.js","imports":["_app/immutable/entry/start.C1uxpPbR.js","_app/immutable/chunks/entry.Ca4hi80t.js","_app/immutable/chunks/scheduler.B-O3ZqnB.js","_app/immutable/entry/app.BpAvG1XG.js","_app/immutable/chunks/scheduler.B-O3ZqnB.js","_app/immutable/chunks/index.BmE43Eg5.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Cg_IERIj.js')),
			__memo(() => import('./chunks/1-BAi8hw-g.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/","/about"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
