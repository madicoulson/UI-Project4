import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.NWcfKzyw.js","app":"_app/immutable/entry/app.CP3xPkTU.js","imports":["_app/immutable/entry/start.NWcfKzyw.js","_app/immutable/chunks/entry.BQcYJLiZ.js","_app/immutable/chunks/runtime.DPiytmPY.js","_app/immutable/chunks/index.DN2h97X0.js","_app/immutable/chunks/utils.GaCUdbKt.js","_app/immutable/entry/app.CP3xPkTU.js","_app/immutable/chunks/runtime.DPiytmPY.js","_app/immutable/chunks/store.BYVc2fTB.js","_app/immutable/chunks/disclose-version.CiVn5BiW.js","_app/immutable/chunks/utils.GaCUdbKt.js","_app/immutable/chunks/index-client.BAYQ1pZx.js","_app/immutable/chunks/this.DcvxozJ7.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/bengals",
				pattern: /^\/bengals\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/bridge",
				pattern: /^\/bridge\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/cyclones",
				pattern: /^\/cyclones\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/findlay-market",
				pattern: /^\/findlay-market\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/winterfest",
				pattern: /^\/winterfest\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/zoo-lights",
				pattern: /^\/zoo-lights\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
